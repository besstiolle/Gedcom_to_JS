"use strict";

const MAX_GEN = 100

var G_MAP_PROCESSED_PERSON = new Map() //All Individus
var G_MAP_PROCESSED_FAMILY = new Map() //All famillies

var G_MAX_POSITION_X = 0
var G_MAX_POSITION_Y = 0

var progressBar = null
var taskOrchestrator = null
var drawPdf = null
var store = null
var firstPosition = null

function init(){
  document.getElementById('file').addEventListener('change', function(e) {
    run(document.getElementById('file').files[0])
  });

  var isAdvancedUpload = function() {
    var div = document.createElement('div');
    return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
  }();

  var formElement = document.getElementById('box');
  if (isAdvancedUpload) {
    formElement.classList.add('has-advanced-upload');
    var droppedFiles = false;

    var funcDrag = function(e) {
      e.preventDefault();
      e.stopPropagation();
    }
    var funcDragOver = function(e) {
      formElement.classList.add('is-dragover');
    }
    var funcDragLeave = function(e) {
      formElement.classList.remove('is-dragover');
    }

    formElement.addEventListener('drag', funcDrag)
    formElement.addEventListener('dragstart', funcDrag)
    formElement.addEventListener('dragend', funcDrag)
    formElement.addEventListener('dragover', funcDrag)
    formElement.addEventListener('dragenter', funcDrag)
    formElement.addEventListener('dragleave', funcDrag)
    formElement.addEventListener('drop', funcDrag)

    formElement.addEventListener('dragover', funcDragOver)
    formElement.addEventListener('dragenter', funcDragOver)

    formElement.addEventListener('dragleave', funcDragLeave)
    formElement.addEventListener('dragend', funcDragLeave)
    formElement.addEventListener('drop', funcDragLeave)

    formElement.addEventListener('drop', function(e) {
      let droppedFiles = e.dataTransfer.files;
      for(var i = 0; i < droppedFiles.length; i++){
        if(droppedFiles[i]['name'].endsWith('.gedcom') || droppedFiles[i]['name'].endsWith('.ged')){
          run(droppedFiles[i])
          break
        }
      }
    });
  }
  document.getElementById('pdf1').addEventListener('click', pdf);
  document.getElementById('svg').addEventListener('click', hiddePdfobjectWrapper);
  document.getElementById('inputRoot').addEventListener('keyup', typingRoot);
  document.getElementById('execRoot').addEventListener('click', changeRoot);
  document.getElementById('cancelRoot').addEventListener('click', cancelRoot);
  document.getElementById('switchRoot').addEventListener('click', showRoot);

  progressBar = new ProgressBar(8)
}

function run(file) {
  document.getElementById('progressBar').classList.remove('hidden')
  progressBar.movingProgressBar("Reading File")

  let read = new Promise(function(resolve) {
        var v = new Worker('script/readerWorker.js');
        v.postMessage([file]);
        v.onmessage = function(event){
            resolve(event.data);
        };
    });

  read.then(function(data) {

        let sosaOne = new SosaWrapper(1)

        taskOrchestrator = new TaskOrchestrator()
        taskOrchestrator.add(parsingGedcomData, [data], "Parsing Gedcom Data")
        taskOrchestrator.add(exploit, [sosaOne], "Exploiting Gedcom Data")
        taskOrchestrator.add(compress, [sosaOne], "Compressing your Ancestors")
        taskOrchestrator.add(getMaxSizeOfDrawing, [], "Calculate size of graph")
        taskOrchestrator.add(draw, [], "Drawing your graph")
        taskOrchestrator.run()

      });
}

function parsingGedcomData(data) {
  let line = null
  var indi = null // One Individu
  var fam = null //One Familly
  var birthInit = false
  var deathInit = false

  let matches = null
  let regexINDI = /^0 @I?([0-9]*)@ INDI$/
  let regexNAME = /^1 NAME (.*)\/(.*)\/$/
  let regexFAMC = /^1 FAMC @F?([0-9]+)@$/
  let regexSEX = /^1 SEX ([FM])$/
  let regexFAMILY = /^0 @F?([0-9]*)@ FAM$/
  let regexHUSB = /^1 HUSB @I?([0-9]*)@$/
  let regexWIFE = /^1 WIFE @I?([0-9]*)@$/
  let regexBIRTH = /^1 BIRT[ ]?$/
  let regexDEATH = /^1 DEAT[ ]?$/
  let regexDATE = /^2 DATE (.*)$/
  let regexPLACE = /^2 PLAC (.*)$/

  let regexReplaceName = /"/g

  let lines = new TextDecoder("utf-8")
              .decode(new Int8Array(data))
              .split(/[\r\n]+/)

  let len = lines.length
  for (var i = 0; i < len; i++) {
    line = lines[i]

    matches = line.match(regexINDI)
    if(matches){
      //Save previous indiv
      if(indi != null){
        indi['isProcessed'] = false
        G_MAP_PROCESSED_PERSON.set(indi['id'], indi)
        birthInit = false
        deathInit = false
        if(firstPosition == null){
          firstPosition = indi['id']
        }
      }

      // Initiate array
      indi = []
      indi['id'] = matches[1].trim()
      continue
    }

    matches = line.match(regexNAME)
    if(matches && indi != null) {
      indi['firstname'] = matches[1].replace(regexReplaceName,'').trim()
      indi['lastname'] = matches[2].trim()
      continue
    }

    matches = line.match(regexFAMC)
    if(matches && indi != null) {
      indi['famc'] = matches[1].trim()
      continue
    }

    matches = line.match(regexSEX)
    if(matches && indi != null) {
      indi['sex'] = matches[1].trim()
      continue
    }

    matches = line.match(regexFAMILY)
    if(matches){
      //Save previous family
      if(fam != null){
        G_MAP_PROCESSED_FAMILY.set(fam['id'], fam)
      }
      // Initiate array
      fam = []
      fam['id'] = matches[1].trim()
      continue
    }

    matches = line.match(regexHUSB)
    if(matches && indi != null) {
      fam['father'] = matches[1].trim()
      continue
    }

    matches = line.match(regexWIFE)
    if(matches && indi != null) {
      fam['mother'] = matches[1].trim()
      continue
    }

    matches = line.match(regexBIRTH)
    if(matches && indi != null) {
      birthInit = true
      deathInit = false
      continue
    }

    matches = line.match(regexDEATH)
    if(matches && indi != null) {
      deathInit = true
      birthInit = false
      continue
    }

    matches = line.match(regexDATE)
    if(matches && indi != null) {
      if(birthInit) {
        indi['birthDate'] = matches[1].trim()
      } else if (deathInit) {
        indi['deathDate'] = matches[1].trim()
      }
      continue
    }

    matches = line.match(regexPLACE)
    if(matches && indi != null) {
      if(birthInit) {
        indi['birthPlace'] = matches[1].trim()
      } else if (deathInit) {
        indi['deathPlace'] = matches[1].trim()
      }
      continue
    }
  }
}

function exploit(sosaWrapper){
  store = new Store(G_MAP_PROCESSED_PERSON, G_MAP_PROCESSED_FAMILY, MAX_GEN)
  store.populate(sosaWrapper, firstPosition)
      .setupBoxes()
}

function compress(sosaWrapper){
  store.compress(sosaWrapper)
}


function getMaxSizeOfDrawing(){
  let tmp_box = null
  let widthBox = null
  let heightBox = null

  for (var i=1; i <= store.getMaxGenerationProcessed(); i++){

      tmp_box = store.getSosaWrapper(store.getRightSosaForGeneration(i)).getBox()
      let maxXOfGen = tmp_box.getX()
      if(maxXOfGen > G_MAX_POSITION_X){
        G_MAX_POSITION_X = maxXOfGen
        if(i > 5){widthBox = BoxV.width()} else {widthBox = Box.width()}
      }
      let maxYOfGen = tmp_box.getY()
      if(maxYOfGen > G_MAX_POSITION_Y){
        G_MAX_POSITION_Y = maxYOfGen
        if(i > 5){heightBox = BoxV.height()} else {heightBox = Box.height()}

      }
  }
  G_MAX_POSITION_X += widthBox + 20
  G_MAX_POSITION_Y += heightBox + 20

}

function draw(){
  document.getElementById("header").classList.remove('hidden')
  drawPdf = new DrawPdf('#svg', G_MAX_POSITION_X, G_MAX_POSITION_Y, store.getMaxGenerationProcessed())
  drawPdf.drawProxy(store.getStore(), store.getMapGenerationSosa())
}

function pdf(){
  drawPdf.pdf()
}

function hiddePdfobjectWrapper(){
  document.getElementById("pdfobjectWrapper").classList.add("hidden")
}

function cancelRoot(){
  document.getElementById("selectRootWrapper").classList.add("hidden")
}

function showRoot(){
  document.getElementById("selectRootWrapper").classList.remove("hidden")
}

function typingRoot(){
  var search = document.getElementById('inputRoot').value.trim()
  if(search.length < 4) {
    document.getElementById("startType").classList.remove('hidden')
    document.getElementById("resultsRoot").classList.add('hidden')
    document.getElementById("execRoot").classList.add('hidden')
    document.getElementById("noResult").classList.add('hidden')
    return
  } else {
    document.getElementById("startType").classList.add('hidden')
  }
  var key
  var value
  var results = []
  for(let [key, value] of G_MAP_PROCESSED_PERSON.entries()){
    if(value['firstname'].includes(search) || value['lastname'].includes(search) ){
      results.push(key)
    }
  }
  showRoots(results)
}
function showRoots(results){

  if(results.length == 0){
    document.getElementById("resultsRoot").classList.add('hidden')
    document.getElementById("execRoot").classList.add('hidden')
    document.getElementById("noResult").classList.remove('hidden')
  } else {
    document.getElementById("resultsRoot").classList.remove('hidden')
    document.getElementById("execRoot").classList.remove('hidden')
    document.getElementById("noResult").classList.add('hidden')
  }
  var textnode
  var node

  var select = document.getElementById("resultsRoot");
  while (select.firstChild) {
    select.removeChild(select.firstChild);
  }

  for(let result of results){
    textnode = document.createTextNode(G_MAP_PROCESSED_PERSON.get(result)['firstname']
          + " "
          + G_MAP_PROCESSED_PERSON.get(result)['lastname']
          + " ("
          + (G_MAP_PROCESSED_PERSON.get(result)['birthDate'] !== undefined?G_MAP_PROCESSED_PERSON.get(result)['birthDate']:"?")
          + "-"
          + (G_MAP_PROCESSED_PERSON.get(result)['deathDate'] !== undefined?G_MAP_PROCESSED_PERSON.get(result)['deathDate']:"?")
          + ")");
    node = document.createElement("OPTION")
    node.setAttribute("value", result);
    node.appendChild(textnode);
    document.getElementById('resultsRoot').appendChild(node)
  }
}

function changeRoot(){

  var key = document.getElementById("resultsRoot").value

  //Purge SVG
  var svgWrapper = document.getElementById("svg");
  while (svgWrapper.firstChild) {
    svgWrapper.removeChild(svgWrapper.firstChild);
  }

  //Reset var
  G_MAX_POSITION_X = 0
  G_MAX_POSITION_Y = 0

  for(let [key, value] of G_MAP_PROCESSED_PERSON.entries()){
    value['isProcessed'] = false
  }

  taskOrchestrator = new TaskOrchestrator()
  let sosaOne = new SosaWrapper(1)

  taskOrchestrator.add(exploit, [sosaOne, key], "Exploiting Gedcom Data")
  taskOrchestrator.add(compress, [sosaOne], "Compressing your Ancestors")
  taskOrchestrator.add(getMaxSizeOfDrawing, [], "Calculate size of graph")
  taskOrchestrator.add(draw, [], "Drawing your graph")

  taskOrchestrator.run()

  cancelRoot()
}
