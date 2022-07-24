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

import { takeshot } from './ImgRenderer'
import { hide, purge, show, _HE_FILE, _HE_FORM, _HE_HEADER, _HE_MESSAGE, _HE_MINISVGWRAPPER, _HE_OPTIONS_ACTION_BUTTON, _HE_OPTIONS_SUBMIT, _HE_OPTIONS_TEMPLATE_RESET, _HE_OPTIONS_WALL, _HE_PDFWRAPPER, _HE_PDF_ACTION_BUTTON, _HE_PDF_MULTIPAGE_ACTION_BUTTON, _HE_PNG_ACTION_BUTTON, _HE_PROGRESSBAR, _HE_ROOT_CANCEL, _HE_ROOT_EXEC, _HE_ROOT_INPUT, _HE_ROOT_NORESULT, _HE_ROOT_RESULTS, _HE_ROOT_SELECTWRAPPER, _HE_ROOT_SWITCH, _HE_STARTTYPE, _HE_SVGWRAPPER } from './HtmlElements'
import { cancelRoot, showRoot, typingRoot } from './RootSwitcher'
import { MultiPDFRenderer } from './MultiPDFRenderer'
import { PDFRenderer } from './PDFRenderer'
import { OptionBusiness } from './Options'

const SOSA_ONE = new SosaWrapper(1)
let progressBar:ProgressBar = null
let taskOrchestrator:TaskOrchestrator = null   

function init(){
  _HE_FILE.addEventListener('change', function(e) {
    run(_HE_FILE.files[0])
  })

  let isAdvancedUpload = function() {
    let div = document.createElement('div')
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window
  }()

  if (isAdvancedUpload) {
    _HE_FORM.classList.add('has-advanced-upload')

    let funcDrag = function(e: Event) {
      e.preventDefault()
      e.stopPropagation()
    }
    let funcDragOver = function() {
      _HE_FORM.classList.add('is-dragover')
    }
    let funcDragLeave = function() {
      _HE_FORM.classList.remove('is-dragover')
    }

    _HE_FORM.addEventListener('drag', funcDrag)
    _HE_FORM.addEventListener('dragstart', funcDrag)
    _HE_FORM.addEventListener('dragend', funcDrag)
    _HE_FORM.addEventListener('dragover', funcDrag)
    _HE_FORM.addEventListener('dragenter', funcDrag)
    _HE_FORM.addEventListener('dragleave', funcDrag)
    _HE_FORM.addEventListener('drop', funcDrag)

    _HE_FORM.addEventListener('dragover', funcDragOver)
    _HE_FORM.addEventListener('dragenter', funcDragOver)

    _HE_FORM.addEventListener('dragleave', funcDragLeave)
    _HE_FORM.addEventListener('dragend', funcDragLeave)
    _HE_FORM.addEventListener('drop', funcDragLeave)

    _HE_FORM.addEventListener('drop', function(e) {
      let droppedFiles = e.dataTransfer.files
      for(var i = 0; i < droppedFiles.length; i++){
        if(droppedFiles[i]['name'].endsWith('.gedcom') || droppedFiles[i]['name'].endsWith('.ged')){
          run(droppedFiles[i])
          break
        }
      }
    })
  }
  _HE_PNG_ACTION_BUTTON.addEventListener('click', takeshot)
  _HE_PDF_ACTION_BUTTON.addEventListener('click', generatePdf)
  _HE_PDF_MULTIPAGE_ACTION_BUTTON.addEventListener('click', generateMultipagePdf)
  _HE_SVGWRAPPER.addEventListener('click', hiddePdfobjectWrapper)
  _HE_ROOT_INPUT.addEventListener('keyup', typingRoot)
  _HE_ROOT_EXEC.addEventListener('click', changeRootAndRedraw)
  _HE_ROOT_CANCEL.addEventListener('click', cancelRoot)
  _HE_ROOT_SWITCH.addEventListener('click', showRoot)
  _HE_OPTIONS_ACTION_BUTTON.addEventListener('click', OptionBusiness.refreshOptionsIntoUI)
  _HE_OPTIONS_SUBMIT.addEventListener('click', OptionBusiness.saveOptionsfromUI)
  _HE_OPTIONS_WALL.addEventListener('click', OptionBusiness.hideOptions)
  _HE_OPTIONS_TEMPLATE_RESET.addEventListener('click', OptionBusiness.refreshTemplateIntoUI)

}

function run(file:File) {

  //Init the internal Store
  Store.init()
  //Init the Logger system
  Logger.init()

  show([_HE_PROGRESSBAR])
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
  hide([_HE_FORM])

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
  show([_HE_MESSAGE])
  let limitByOption = ''
  if(Store.getOptions().maxGeneration == Store.grid.maxGenerationProcessed){
    limitByOption = ' Check the options to change this limit.'
  }
  _HE_MESSAGE.innerHTML = `Max Generation presented : ${Store.grid.maxGenerationProcessed}.${limitByOption}<br/>
  ${Store.grid.mapSosaToGridEntry.size} individuals presented, ${Store.grid.implexes.length} of which are <u><span title='FR : Implexes'>Pedigree collapse</span></u>.<br/>
  Expected size of PDF : ${PDFRenderer.expectedSize().x}cm * ${PDFRenderer.expectedSize().y}cm.<br/>
                                      Experted pages of A4 PDF : ${MultiPDFRenderer.expectedPageCount()} pages.<br/>
                                      Expected size of PNG : ${Store.positionXMax+20}px * ${Store.positionYMax+20}px`
}

function draw(){
  show([_HE_HEADER, _HE_SVGWRAPPER, _HE_MINISVGWRAPPER])
  SVGRenderer.drawSVG()
}

function hiddePdfobjectWrapper(){
  hide([_HE_PDFWRAPPER])
}

function generatePdf(){
  let renderer = new PDFRenderer()
  renderer.generatePdf()
}

function generateMultipagePdf(){
  let renderer = new MultiPDFRenderer()
  renderer.generatePdf()
}

function changeRootAndRedraw(){
  reDraw(false)
}

export function reDraw(sameIdTech:boolean){
    
  //Init the Logger system
  Logger.init()
  Logger.log("starting purging data")

  // Purge Store values for a new draw
  Store.resetForRedraw()


  let key:number
  if(sameIdTech){
    //retieve current idTech
    key = Store.firstGedTechIdInGrid
  } else {
    key = parseInt(_HE_ROOT_RESULTS.value)
    Store.firstGedTechIdInGrid=null
  }
  let sosaOne = new SosaWrapper(1)

  //Purge SVG & minimap
  purge(_HE_SVGWRAPPER)
  purge(_HE_MINISVGWRAPPER)

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