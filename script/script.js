"use strict";

var G_MAP_BOXES = new Map()
var G_MAP_SOSA_WRAPPER_AND_PERSONS = new Map();
var G_MAX_GENERATION_PROCESSED = null;
var G_MAX_SOSA_PROCESSED = null;
var G_ARR_SOSAS_BY_GENENERATION = null
const MAX_GEN = 100;

var G_MAP_PROCESSED_PERSON = new Map() //All Individus
var G_MAP_PROCESSED_FAMILY = new Map() //All famillies

var G_MAX_POSITION_X = 0;
var G_MAX_POSITION_Y = 0;

var progressBar = null
var taskOrchestrator = null

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

  progressBar = new ProgressBar(8)
  progressBar.initiateProgressBar("System Ready")
}

function run(file) {

  progressBar.movingProgressBar("Reading File")

  let read = new Promise(function(resolve) {
        var v = new Worker('script/readerWorker.js');
        v.postMessage([file]);
        v.onmessage = function(event){
            resolve(event.data);
        };
    });

  read.then(function(data) {

        taskOrchestrator = new TaskOrchestrator()
        let sosaOne = new SosaWrapper(1)

        taskOrchestrator.add(parsingGedcomData, [data], "Parsing Gedcom Data")
        taskOrchestrator.add(exploit, [sosaOne, "1"], "Exploiting Gedcom Data")
        taskOrchestrator.add(initVars, [], "Init Variables")

        taskOrchestrator.add(processPerson, [sosaOne], "Process persons")
        taskOrchestrator.add(compress, [sosaOne], "Compressing your Ancestors")
        taskOrchestrator.add(getMaxSizeOfDrawing, [], "Calculate size of graph")
        taskOrchestrator.add(draw, [], "Drawing your graph")

        taskOrchestrator.run()

      });
}

function parsingGedcomData(data) {
    var array = new Int8Array(data);
    var line = ""
    var indi = null // One Individu
    var fam = null //One Familly
    let char = null //One char

    let matches = null
    let regexINDI = /^0 @I([0-9]*)@ INDI$/
    let regexNAME = /^1 NAME (.*)\/(.*)\/$/
    let regexFAMC = /^1 FAMC @F([0-9]+)@$/
    let regexSEX = /^1 SEX ([FM])$/
    let regexFAMILY = /^0 @F([0-9]*)@ FAM$/
    let regexHUSB = /^1 HUSB @I([0-9]*)@$/
    let regexWIFE = /^1 WIFE @I([0-9]*)@$/

    let regexReplaceName = /"/g

    array = new TextDecoder("utf-8").decode(array);

    let len = array.length
    for (var i = 0; i < len; i++) {
        char = array[i]


        if(char == '\n' || char == '\r') { //Return line
          //process previous line
          matches = line.match(regexINDI)
          if(matches){
            //Save previous indiv
            if(indi != null){
              indi['isProcessed'] = false
              G_MAP_PROCESSED_PERSON.set(indi['id'], indi)
            }

            // Initiate array
            indi = []
            indi['id'] = matches[1]
          }

          matches = line.match(regexNAME)
          if(matches && indi != null) {
            indi['firstname'] = matches[1].replace(regexReplaceName,'')
            indi['lastname'] = matches[2]
          }

          matches = line.match(regexFAMC)
          if(matches && indi != null) {
            indi['famc'] = matches[1]
          }

          matches = line.match(regexSEX)
          if(matches && indi != null) {
            indi['sex'] = matches[1]
          }

          matches = line.match(regexFAMILY)
          if(matches){
            //Save previous family
            if(fam != null){
              G_MAP_PROCESSED_FAMILY.set(fam['id'], fam)
            }
            // Initiate array
            fam = []
            fam['id'] = matches[1]
          }

          matches = line.match(regexHUSB)
          if(matches && indi != null) {
            fam['father'] = matches[1]
          }

          matches = line.match(regexWIFE)
          if(matches && indi != null) {
            fam['mother'] = matches[1]
          }

          //Start next line
          line = ''
          continue
        }

        line += char
    }
    return
}

function exploit(sosaWrapper, position){

  if(G_MAP_PROCESSED_PERSON.has(position)){

    //Limitation
    if(sosaWrapper.getGeneration() > MAX_GEN){
      return
    }

    //Case of Implexe
    if(G_MAP_PROCESSED_PERSON.get(position)['isProcessed']){
      //TODO
      return
    }

    G_MAP_PROCESSED_PERSON.get(position)['isProcessed'] = true

    G_MAP_SOSA_WRAPPER_AND_PERSONS.set(sosaWrapper.getSosa(),
        {'sosaWrapper':sosaWrapper
          ,'firstname':G_MAP_PROCESSED_PERSON.get(position)['firstname'].trim()
          , 'lastname':G_MAP_PROCESSED_PERSON.get(position)['lastname'].trim()
        })

    //Process his father and mothers
    let familyId = G_MAP_PROCESSED_PERSON.get(position)['famc']
    if(G_MAP_PROCESSED_FAMILY.has(familyId)) {
      let family = G_MAP_PROCESSED_FAMILY.get(familyId)
      if(family['father'] != null && family['father'] != undefined) {
        exploit(new SosaWrapper(sosaWrapper.getVirtualFather()), family['father'])
      }
      if(family['mother'] != null && family['mother'] != undefined) {
        exploit(new SosaWrapper(sosaWrapper.getVirtualMother()), family['mother'])
      }
    }
  } else {
    console.warn("individu #" + position + " is undefined")
  }


}

function initVars(){

  //Set G_MAX_GENERATION_PROCESSED & G_MAX_SOSA_PROCESSED
  G_MAX_SOSA_PROCESSED = 1
  for(var value of G_MAP_SOSA_WRAPPER_AND_PERSONS){
      if(value[0] > G_MAX_SOSA_PROCESSED){
        G_MAX_SOSA_PROCESSED = value[0]
      }
  }
  G_MAX_GENERATION_PROCESSED = SosaWrapper.getGenerationOfSosa(G_MAX_SOSA_PROCESSED)
  if(G_MAX_GENERATION_PROCESSED > MAX_GEN){
    G_MAX_GENERATION_PROCESSED = MAX_GEN
  }

  //Initiate sosasByGeneration
  G_ARR_SOSAS_BY_GENENERATION=[]
  for(var i=1; i <= G_MAX_GENERATION_PROCESSED; i++){
    G_ARR_SOSAS_BY_GENENERATION[i] = []
  }

}

function compress(sosaWrapper){

  let fatherX = 0
  let motherX = 0
  let myselfX = 0
  let previousX = 0

  //Get compressed position of father if exists
  if(G_MAP_BOXES.has(sosaWrapper.getVirtualFather())){
      fatherX = compress(new SosaWrapper(sosaWrapper.getVirtualFather()))
  }

  //Get compressed position of mother if exists
  if(G_MAP_BOXES.has(sosaWrapper.getVirtualMother())){
      motherX = compress(new SosaWrapper(sosaWrapper.getVirtualMother()))
  }

  //Retrive previous box X-position(*) on the graph (on the left)
  // * => if exist : X position of previous boxe + box.width() + box.widthPadding()
  //   => if not : box.leftMargin()
  previousX = getXPositionOnLeftBox(sosaWrapper)
  //FIXME

  //If we don't have parents, let take previousX value
  if(fatherX == 0 && motherX == 0){
    myselfX = previousX
  } else {
    //Process our own position
    if(fatherX == 0 || motherX == 0){
      myselfX = fatherX + motherX
    } else {
      myselfX = Math.floor((fatherX + motherX) / 2)
    }

    //If there is a conflict with Previous box, resync ancestors and ourself
    if(myselfX < previousX){
      let shift = previousX - myselfX
      let ancestorsSosa = getAllAncestorsMapOfSosaWrapper(sosaWrapper)
      //FIXME
      let len =  ancestorsSosa.length
      for (var i = 0; i < len; i++) {
        G_MAP_BOXES.get(ancestorsSosa[i]).shiftRight(shift)
      }
      myselfX = previousX
    }
  }

  //Set our own X value
  G_MAP_BOXES.get(sosaWrapper.getSosa()).setX(myselfX)

  //Return our own value
  return myselfX
}

function getXPositionOnLeftBox(sosaWrapper){
  let sosaIndex = G_ARR_SOSAS_BY_GENENERATION[sosaWrapper.getGeneration()].indexOf(sosaWrapper.getSosa())

  if(sosaIndex > 0){
    let leftSosa = G_ARR_SOSAS_BY_GENENERATION[sosaWrapper.getGeneration()][sosaIndex-1]
    let box = G_MAP_BOXES.get(leftSosa)
    return box.getX() + box.width() + box.widthPadding()
  } else {
    return G_MAP_BOXES.get(sosaWrapper.getSosa()).leftMargin();
  }
}

/**
 * Return a Map with all Ancestors of a SosaWrapper
 */
function getAllAncestorsMapOfSosaWrapper(sosaWrapper){
  let array = []
  if(G_MAP_BOXES.has(sosaWrapper.getSosa())){
    if(G_MAP_BOXES.has(sosaWrapper.getVirtualFather())){
        array.push(sosaWrapper.getVirtualFather())
    }
    if(G_MAP_BOXES.has(sosaWrapper.getVirtualMother())){
        array.push(sosaWrapper.getVirtualMother())
    }
    return array.concat(getAllAncestorsMapOfSosaWrapper(new SosaWrapper(sosaWrapper.getVirtualFather())), getAllAncestorsMapOfSosaWrapper(new SosaWrapper(sosaWrapper.getVirtualMother())))
  }
  return []
}

function getMaxSizeOfDrawing(){
  let localSosa = null
  for (var i=1; i <= G_MAX_GENERATION_PROCESSED; i++){
    let maxSosaOnGeneration = G_ARR_SOSAS_BY_GENENERATION[i][G_ARR_SOSAS_BY_GENENERATION.size-1]

      localSosa = G_ARR_SOSAS_BY_GENENERATION[i][G_ARR_SOSAS_BY_GENENERATION[i].length-1]
      let maxXOfGen = G_MAP_BOXES.get(localSosa).getX()
      if(maxXOfGen > G_MAX_POSITION_X){
        G_MAX_POSITION_X = maxXOfGen
      }
      let maxYOfGen = G_MAP_BOXES.get(localSosa).getY()
      if(maxYOfGen > G_MAX_POSITION_Y){
        G_MAX_POSITION_Y = maxYOfGen
      }
  }

}

function draw(){
  var draw = SVG().addTo('#svg')
  .size('100%','100%')
  .panZoom({zoomMin: 0.02, zoomMax: 20, zoomFactor:0.15})

  draw.viewbox(0, 0, window.innerWidth - 10 , window.innerHeight - 10)
      .zoom(1)

    for(var value of G_MAP_BOXES){
      let sosa = value[0]
      let box = value[1]

      // Retrieve Informations
      let person = G_MAP_SOSA_WRAPPER_AND_PERSONS.get(sosa)
      let sosaWrapper = person['sosaWrapper']

      // Dessin de la box
      draw.rect(box.width(), box.height())
          .fill('#eee')
          .move(box.getX(), box.getY())
          .stroke({ width: 1, color: '#ccc' })
          .radius(10)

      draw.text(person['firstname'] + ' ' + person['lastname'])
          .move(box.getX() + 5, box.getY())
      //Si père existe : liaison
      if(G_MAP_BOXES.has(sosaWrapper.getVirtualFather())){
        let father = G_MAP_BOXES.get(sosaWrapper.getVirtualFather())
        let middleY = (father.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2

        draw.polyline([box.getTopJunctionPoint().x,box.getTopJunctionPoint().y
                      ,box.getBottomJunctionPoint().x,middleY
                      ,father.getBottomJunctionPoint().x, middleY
                      ,father.getBottomJunctionPoint().x, father.getBottomJunctionPoint().y])
            .fill('none')
            .stroke({ width: 1, color: '#000' })
      }
      //Si mère existe : liaison
      if(G_MAP_BOXES.has(sosaWrapper.getVirtualMother())){
        let mother = G_MAP_BOXES.get(sosaWrapper.getVirtualMother())
        let middleY = (mother.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2

        draw.polyline([box.getTopJunctionPoint().x,box.getTopJunctionPoint().y
                      ,box.getBottomJunctionPoint().x,middleY
                      ,mother.getBottomJunctionPoint().x, middleY
                      ,mother.getBottomJunctionPoint().x, mother.getBottomJunctionPoint().y])
            .fill('none')
            .stroke({ width: 1, color: '#000' })
      }
  }

  draw.animate().zoom(0.25)


  document.getElementById('box').classList.add('hidden')
}

function processPerson(sosaWrapper){
    let box = null
    if(G_MAP_SOSA_WRAPPER_AND_PERSONS.has(sosaWrapper.getSosa())) {

      processPerson(new SosaWrapper(sosaWrapper.getVirtualFather()))
      processPerson(new SosaWrapper(sosaWrapper.getVirtualMother()))

      if(sosaWrapper.getGeneration() > 5){
          box=new BoxV(sosaWrapper.getSosa(), sosaWrapper.getGeneration(), G_MAX_GENERATION_PROCESSED) // Vertical Box
      } else {
        box=new Box(sosaWrapper.getSosa(), sosaWrapper.getGeneration(), G_MAX_GENERATION_PROCESSED) // Classic box
      }

      G_MAP_BOXES.set(sosaWrapper.getSosa(), box)
      G_ARR_SOSAS_BY_GENENERATION[sosaWrapper.getGeneration()].push(sosaWrapper.getSosa())
  }
  return box
}
