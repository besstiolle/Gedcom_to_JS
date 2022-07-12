import './assets/css/demo.css'
import './assets/imgs/download.png'
import './assets/gedcom/HAPIOT_Emile_sample.ged'

import { SVGRenderer } from './SVGRenderer'
import { GedcomParser } from './GedcomParser'
import { ProgressBar } from './ProgressBar.class'
import { VirtualGrid, Individual, SosaWrapper } from './struct.class'
import { TaskOrchestrator } from './TaskOrchestrator.class'
import { Store } from './Store'
import { Logger } from './Logger'
import { Box, BoxV } from './Box.class'
import { populateGrid, setupBoxForGridEntry, compressContainer } from './ContainerFactory'
import { generatePdf } from './PDFRenderer'

const SOSA_ONE = new SosaWrapper(1)
var progressBar:ProgressBar = null
var taskOrchestrator:TaskOrchestrator = null

const _HTML_ELEMENT__FILE:HTMLInputElement = <HTMLInputElement>document.getElementById('file')
const _HTML_ELEMENT__FORM:HTMLFormElement = <HTMLFormElement>document.getElementById('box')
const _HTML_ELEMENT__PDF:HTMLElement = document.getElementById('pdf1')
const _HTML_ELEMENT__SVG:HTMLElement = document.getElementById('svg')
const _HTML_ELEMENT__ROOT_INPUT:HTMLInputElement = <HTMLInputElement>document.getElementById('inputRoot')
const _HTML_ELEMENT__ROOT_EXEC:HTMLElement = document.getElementById('execRoot')
const _HTML_ELEMENT__ROOT_CANCEL:HTMLElement = document.getElementById('cancelRoot')
const _HTML_ELEMENT__ROOT_SWITCH:HTMLElement = document.getElementById('switchRoot')
const _HTML_ELEMENT__ROOT_RESULTS:HTMLSelectElement = <HTMLSelectElement>document.getElementById('resultsRoot')
const _HTML_ELEMENT__ROOT_SELECTWRAPPER:HTMLElement = document.getElementById('selectRootWrapper')
const _HTML_ELEMENT__ROOT_NORESULT:HTMLElement = document.getElementById('noResult')
const _HTML_ELEMENT__PROGRESSBAR:HTMLElement = document.getElementById('progressBar')
const _HTML_ELEMENT__HEADER:HTMLElement = document.getElementById('header')
const _HTML_ELEMENT__PDFWRAPPER:HTMLElement = document.getElementById('pdfobjectWrapper')
const _HTML_ELEMENT__STARTTYPE:HTMLElement = document.getElementById('startType')
   

function init(){
  _HTML_ELEMENT__FILE.addEventListener('change', function(e) {
    run(_HTML_ELEMENT__FILE.files[0])
  })

  let isAdvancedUpload = function() {
    let div = document.createElement('div')
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window
  }()

  if (isAdvancedUpload) {
    _HTML_ELEMENT__FORM.classList.add('has-advanced-upload')

    let funcDrag = function(e: Event) {
      e.preventDefault()
      e.stopPropagation()
    }
    let funcDragOver = function() {
      _HTML_ELEMENT__FORM.classList.add('is-dragover')
    }
    let funcDragLeave = function() {
      _HTML_ELEMENT__FORM.classList.remove('is-dragover')
    }

    _HTML_ELEMENT__FORM.addEventListener('drag', funcDrag)
    _HTML_ELEMENT__FORM.addEventListener('dragstart', funcDrag)
    _HTML_ELEMENT__FORM.addEventListener('dragend', funcDrag)
    _HTML_ELEMENT__FORM.addEventListener('dragover', funcDrag)
    _HTML_ELEMENT__FORM.addEventListener('dragenter', funcDrag)
    _HTML_ELEMENT__FORM.addEventListener('dragleave', funcDrag)
    _HTML_ELEMENT__FORM.addEventListener('drop', funcDrag)

    _HTML_ELEMENT__FORM.addEventListener('dragover', funcDragOver)
    _HTML_ELEMENT__FORM.addEventListener('dragenter', funcDragOver)

    _HTML_ELEMENT__FORM.addEventListener('dragleave', funcDragLeave)
    _HTML_ELEMENT__FORM.addEventListener('dragend', funcDragLeave)
    _HTML_ELEMENT__FORM.addEventListener('drop', funcDragLeave)

    _HTML_ELEMENT__FORM.addEventListener('drop', function(e) {
      let droppedFiles = e.dataTransfer.files
      for(var i = 0; i < droppedFiles.length; i++){
        if(droppedFiles[i]['name'].endsWith('.gedcom') || droppedFiles[i]['name'].endsWith('.ged')){
          run(droppedFiles[i])
          break
        }
      }
    })
  }
  _HTML_ELEMENT__PDF.addEventListener('click', generatePdf)
  _HTML_ELEMENT__SVG.addEventListener('click', hiddePdfobjectWrapper)
  _HTML_ELEMENT__ROOT_INPUT.addEventListener('keyup', typingRoot)
  _HTML_ELEMENT__ROOT_EXEC.addEventListener('click', changeRoot)
  _HTML_ELEMENT__ROOT_CANCEL.addEventListener('click', cancelRoot)
  _HTML_ELEMENT__ROOT_SWITCH.addEventListener('click', showRoot)

}

function run(file:File) {

  //Init the internal Store
  Store.init()
  //Init the Logger system
  Logger.init()

  show([_HTML_ELEMENT__PROGRESSBAR])
  progressBar = new ProgressBar(8)
  progressBar.movingProgressBar("Reading File")

  let reader = new FileReader()

  // Describe function of reading
  reader.onload = function (event) {
    taskOrchestrator = new TaskOrchestrator(progressBar)
    taskOrchestrator.add(GedcomParser.parse, [event.target.result], "Parsing Gedcom Data")
                    .add(exploit, [SOSA_ONE], "Exploiting Gedcom Data")
                    .add(compressContainer, [SOSA_ONE], "Compressing your Ancestors")
                    .add(getMaxSizeOfDrawing, [], "Calculate size of graph")
                    .add(draw, [], "Drawing your graph")
                    .run()

  }

  //Execute reading
  reader.readAsText(file, 'utf-8')
}

function exploit(sosaWrapper:SosaWrapper, position:number){
  //console.info(Store.firstGedTechIdParsed)
  //console.info(Store.mapCodeFamily.size)
  //console.info(Store.mapGedTechIdToIndividual.size)
  //console.info(Store.mapGedTechIdToIndividual)

  if(position == null){
    position = Store.firstGedTechIdParsed
  }

  populateGrid(sosaWrapper, position)
  setupBoxForGridEntry()

  //let test = new Map([...container.getMapContainer().entries()].sort());
  //console.info(test)
  //console.info(test.get(96))
}


function getMaxSizeOfDrawing(){
  let tmp_box:Box|BoxV = null
  let widthBox:number = null
  let heightBox:number = null
  let maxXOfGen:number = null
  let maxYOfGen:number = null
  let tmp_sosa: number = null

  
  for (var i=1; i <= Store.grid.maxGenerationProcessed; i++){
    
    tmp_sosa = Store.grid.mapRightSosaByGeneration.get(i).sosa
    if(Store.grid.mapSosaToGridEntry.has(tmp_sosa)){
      tmp_box = Store.grid.mapSosaToGridEntry.get(tmp_sosa).box
    } else {
      console.info("Store.grid.mapSosaToGridEntry doesn't have sosa %o in function getMaxSizeOfDrawing()", tmp_sosa)
      continue
    }

    maxXOfGen = tmp_box.getX()
    if(maxXOfGen > Store.positionXMax){
      Store.positionXMax = maxXOfGen
      if(i > 5){widthBox = BoxV.width()} else {widthBox = Box.width()}
    }

    maxYOfGen = tmp_box.getY()
    if(maxYOfGen > Store.positionYMax){
      Store.positionYMax = maxYOfGen
      if(i > 5){heightBox = BoxV.height()} else {heightBox = Box.height()}
    }
  }
  Store.positionXMax += widthBox + 20
  Store.positionYMax += heightBox + 20

}

function draw(){
  //console.info(container.getMapContainer().has(96))
  //console.info(container.getMapContainer())
  show([_HTML_ELEMENT__HEADER])
  SVGRenderer.drawSVG('#svg')
}

function hiddePdfobjectWrapper(){
  hide([_HTML_ELEMENT__PDFWRAPPER])
}

function cancelRoot(){
  hide([_HTML_ELEMENT__ROOT_SELECTWRAPPER])
}

function showRoot(){
  show([_HTML_ELEMENT__ROOT_SELECTWRAPPER])
}

function typingRoot(){
  var search = _HTML_ELEMENT__ROOT_INPUT.value.trim()
  if(search.length < 4) {
    hide([_HTML_ELEMENT__STARTTYPE,_HTML_ELEMENT__ROOT_RESULTS, _HTML_ELEMENT__ROOT_EXEC, _HTML_ELEMENT__ROOT_NORESULT])
    return
  } else {
    hide([_HTML_ELEMENT__STARTTYPE])
  }

  var listSosa:number[] = []
  Store.mapGedTechIdToIndividual.forEach((individual:Individual, sosa:number)=>{
    if(individual.firstname.includes(search) || individual.lastname.includes(search) ){
      listSosa.push(sosa)
    }
  })

  showRoots(listSosa)
}

/**
 *  Fill the list of Sosa to show in the selector
 * @param listSosa the list of Sosa to show in the selector
 */
function showRoots(listSosa:number[]){

  if(listSosa.length == 0){
    hide([_HTML_ELEMENT__ROOT_RESULTS, _HTML_ELEMENT__ROOT_EXEC])
    show([_HTML_ELEMENT__ROOT_NORESULT])
  } else {
    show([_HTML_ELEMENT__ROOT_RESULTS, _HTML_ELEMENT__ROOT_EXEC])
    hide([_HTML_ELEMENT__ROOT_NORESULT])
  }
  
  // .innerHtml='' is not recommended because it doesn’t remove the event handlers of the child nodes, which might cause a memory leak.
  while (_HTML_ELEMENT__ROOT_RESULTS.firstChild) {
    _HTML_ELEMENT__ROOT_RESULTS.removeChild(_HTML_ELEMENT__ROOT_RESULTS.firstChild)
  }
  
  let textnode:Text = null
  let node:HTMLElement = null
  let bDate:string = null
  let dDate:string = null
  let individual:Individual = null
  for(let oneSosa of listSosa){
    individual = Store.mapGedTechIdToIndividual.get(oneSosa)
    bDate = individual.birthDate !== undefined?individual.birthDate:"?"
    dDate = individual.deathDate !== undefined?individual.deathDate:"?"
    textnode = document.createTextNode(`${individual.firstname} ${individual.lastname} (${bDate}-${dDate})`)
    node = document.createElement("OPTION")
    node.setAttribute("value", oneSosa + "")
    node.appendChild(textnode)
    _HTML_ELEMENT__ROOT_RESULTS.appendChild(node)
  }
}

function changeRoot(){
  
  //Init the Logger system
  Logger.init()
  Logger.log("starting purging data")

  // Purge Store values for a new draw
  Store.resetForRedraw()

  let key:number = parseInt(_HTML_ELEMENT__ROOT_RESULTS.value)
  let sosaOne = new SosaWrapper(1)

  //Purge SVG
  // .innerHtml='' is not recommended because it doesn’t remove the event handlers of the child nodes, which might cause a memory leak.
  while (_HTML_ELEMENT__SVG.firstChild) {
    _HTML_ELEMENT__SVG.removeChild(_HTML_ELEMENT__SVG.firstChild)
  }

  //Reset var
  Store.positionXMax = 0
  Store.positionYMax = 0

  Store.mapGedTechIdToIndividual.forEach((individual:Individual, sosa:number)=>{
    individual.isProcessed = false
  })

  Logger.log("ending purging data")

  taskOrchestrator = new TaskOrchestrator(progressBar)
  taskOrchestrator.add(exploit, [sosaOne, key], "Exploiting Gedcom Data")
                  .add(compressContainer, [sosaOne], "Compressing your Ancestors")
                  .add(getMaxSizeOfDrawing, [], "Calculate size of graph")
                  .add(draw, [], "Drawing your graph")
                  .run()

  cancelRoot()
}

function hide(htmlElementIds:HTMLElement[]){
  htmlElementIds.forEach(htmlElement => {
    htmlElement.classList.add('hidden')
  })
}
function show(htmlElementIds:HTMLElement[]){
  htmlElementIds.forEach(htmlElement => {
    htmlElement.classList.remove('hidden')
  })
}

init()