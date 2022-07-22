import './assets/css/demo.css'
import './assets/imgs/download.png'
import './assets/gedcom/HAPIOT_Emile_sample.ged'

import { SVGRenderer } from './SVGRenderer'
import { GedcomParser } from './GedcomParser'
import { ProgressBar } from './ProgressBar.class'
import { Individual, SosaWrapper } from './struct.class'
import { TaskOrchestrator } from './TaskOrchestrator.class'
import { Store } from './Store'
import { Logger } from './Logger'
import { Box, BoxV } from './Box.class'
import { populateGrid, setupBoxForGridEntry, compressContainer } from './ContainerFactory'
import { generatePdf, RATIO_PX_2_CM } from './PDFRenderer'
import { takeshot } from './ImgRenderer'
import { hide, purge, show, _HTML_ELEMENT__FILE, _HTML_ELEMENT__FORM, _HTML_ELEMENT__HEADER, _HTML_ELEMENT__MESSAGE, _HTML_ELEMENT__PDFWRAPPER, _HTML_ELEMENT__PDF_ACTION_BUTTON, _HTML_ELEMENT__PNG_ACTION_BUTTON, _HTML_ELEMENT__PROGRESSBAR, _HTML_ELEMENT__ROOT_CANCEL, _HTML_ELEMENT__ROOT_EXEC, _HTML_ELEMENT__ROOT_INPUT, _HTML_ELEMENT__ROOT_NORESULT, _HTML_ELEMENT__ROOT_RESULTS, _HTML_ELEMENT__ROOT_SELECTWRAPPER, _HTML_ELEMENT__ROOT_SWITCH, _HTML_ELEMENT__STARTTYPE, _HTML_ELEMENT__SVGWRAPPER } from './HtmlElements'
import { cancelRoot, showRoot, typingRoot } from './RootSwitcher'

const SOSA_ONE = new SosaWrapper(1)
var progressBar:ProgressBar = null
var taskOrchestrator:TaskOrchestrator = null

   
   

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
  _HTML_ELEMENT__PNG_ACTION_BUTTON.addEventListener('click', takeshot)
  _HTML_ELEMENT__PDF_ACTION_BUTTON.addEventListener('click', generatePdf)
  _HTML_ELEMENT__SVGWRAPPER.addEventListener('click', hiddePdfobjectWrapper)
  _HTML_ELEMENT__ROOT_INPUT.addEventListener('keyup', typingRoot)
  _HTML_ELEMENT__ROOT_EXEC.addEventListener('click', reDraw)
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
  if(position == null){
    position = Store.firstGedTechIdParsed
  }

  populateGrid(sosaWrapper, position)
  setupBoxForGridEntry()
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

  //Control of size
  show([_HTML_ELEMENT__MESSAGE])
  _HTML_ELEMENT__MESSAGE.innerHTML = `Expected size of PDF : ${Store.positionXMax / RATIO_PX_2_CM}cm * ${Store.positionYMax / RATIO_PX_2_CM}cm<br/>
                                      Expected size of PNG : ${Store.positionXMax+20}px * ${Store.positionYMax+20}px`
}

function draw(){
  //console.info(container.getMapContainer().has(96))
  //console.info(container.getMapContainer())
  show([_HTML_ELEMENT__HEADER, _HTML_ELEMENT__SVGWRAPPER])
  SVGRenderer.drawSVG()
}

function hiddePdfobjectWrapper(){
  hide([_HTML_ELEMENT__PDFWRAPPER])
}

  
function reDraw(){
    
  //Init the Logger system
  Logger.init()
  Logger.log("starting purging data")

  // Purge Store values for a new draw
  Store.resetForRedraw()

  let key:number = parseInt(_HTML_ELEMENT__ROOT_RESULTS.value)
  let sosaOne = new SosaWrapper(1)

  //Purge SVG
  purge(_HTML_ELEMENT__SVGWRAPPER)

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

init()