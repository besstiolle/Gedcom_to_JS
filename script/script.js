"use strict";

var G_MAP_BOXES = new Map()
var G_MAP_ALL_BY_SOSA_BY_GEN = new Map();
var G_MAX_GENERATION_PROCESSED = null;
var G_MAX_SOSA_PROCESSED = 1;
var G_ARR_SOSAS_BY_GENENERATION = null
const MAX_GEN = 100;
var G_MAP_GENERATION_Y_POSITION = new Map()

var exploitHelper = new Map()

var G_MAP_PROCESSED_PERSON = new Map() //All Individus
var G_MAP_PROCESSED_FAMILY = new Map() //All famillies

var G_MAX_POSITION_X = 0;
var G_MAX_POSITION_Y = 0;

var progressBar = null
var taskOrchestrator = null
var drawSVG = null

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

  document.getElementById('panel').classList.toggle('minify')
  document.getElementById('panel_open').addEventListener('click', function(e) {
    hiddePdfobjectWrapper()
    togglePanel()
  });
  document.getElementById('panel_close').addEventListener('click', function(e) {
    hiddePdfobjectWrapper()
    togglePanel()
  });
  document.getElementById('pdf1').addEventListener('click', function(e) {
    pdf()
  });
  document.getElementById('svg').addEventListener('click', function(e) {
    hiddePdfobjectWrapper()
  });

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

        taskOrchestrator = new TaskOrchestrator()
        let sosaOne = new SosaWrapper(1)

        taskOrchestrator.add(parsingGedcomData, [data], "Parsing Gedcom Data")
        taskOrchestrator.add(exploit, [sosaOne, "1"], "Exploiting Gedcom Data")
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

  let matches = null
  let regexINDI = /^0 @I([0-9]*)@ INDI$/
  let regexNAME = /^1 NAME (.*)\/(.*)\/$/
  let regexFAMC = /^1 FAMC @F([0-9]+)@$/
  let regexSEX = /^1 SEX ([FM])$/
  let regexFAMILY = /^0 @F([0-9]*)@ FAM$/
  let regexHUSB = /^1 HUSB @I([0-9]*)@$/
  let regexWIFE = /^1 WIFE @I([0-9]*)@$/

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
  }
}

function exploit(sosaWrapper, position){

  if(G_MAP_PROCESSED_PERSON.has(position)){

    //Limitation
    if(sosaWrapper.getGeneration() > MAX_GEN){
      return
    }

    //Init G_MAP_ALL_BY_SOSA_BY_GEN
    if(!G_MAP_ALL_BY_SOSA_BY_GEN.has(sosaWrapper.getGeneration())){
      G_MAP_ALL_BY_SOSA_BY_GEN.set(sosaWrapper.getGeneration(), new Map())
    }

    //Set G_MAX_SOSA_PROCESSED
    if(sosaWrapper.getSosa() > G_MAX_SOSA_PROCESSED){
      G_MAX_SOSA_PROCESSED = sosaWrapper.getSosa()
      G_MAX_GENERATION_PROCESSED = sosaWrapper.getGeneration()
    }

    //Case of Implexe
    if(G_MAP_PROCESSED_PERSON.get(position)['isProcessed']){
      //TODO
      return
    }
    G_MAP_PROCESSED_PERSON.get(position)['isProcessed'] = true


    //Generate Boxes
    let box = null
    if(sosaWrapper.getGeneration() > 5){
      box = new BoxV(sosaWrapper.getSosa(), sosaWrapper.getGeneration(), G_MAX_GENERATION_PROCESSED) // Vertical Box
    } else {
      box = new Box(sosaWrapper.getSosa(), sosaWrapper.getGeneration(), G_MAX_GENERATION_PROCESSED) // Classic box
    }

    let previousSosaWrapper = null
    if(exploitHelper.has(sosaWrapper.getGeneration())){
      previousSosaWrapper = exploitHelper.get(sosaWrapper.getGeneration())
      // Set "nextSosaWrapper" of previous
      if(G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()).has(previousSosaWrapper)){
        G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()).get(previousSosaWrapper)['nextSosaWrapper'] = sosaWrapper
      }
    }
    exploitHelper.set(sosaWrapper.getGeneration(),sosaWrapper)


    G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()).set(sosaWrapper.getSosa(),
        {'sosaWrapper':sosaWrapper
          , 'firstname':G_MAP_PROCESSED_PERSON.get(position)['firstname']
          , 'lastname':G_MAP_PROCESSED_PERSON.get(position)['lastname']
          , 'box': box
          , 'previousSosaWrapper' : previousSosaWrapper
          , 'nextSosaWrapper' : null
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

function compress(sosaWrapper){
  let fatherX = 0
  let motherX = 0
  let myselfX = 0
  let previousX = 0

  //Get compressed position of father if exists
  if(G_MAP_ALL_BY_SOSA_BY_GEN.has(sosaWrapper.getGeneration()+1) && G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()+1).has(sosaWrapper.getVirtualFather())){
      fatherX = compress(new SosaWrapper(sosaWrapper.getVirtualFather()))
  }

  //Get compressed position of mother if exists
  if(G_MAP_ALL_BY_SOSA_BY_GEN.has(sosaWrapper.getGeneration()+1) && G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()+1).has(sosaWrapper.getVirtualMother())){
      motherX = compress(new SosaWrapper(sosaWrapper.getVirtualMother()))
  }

  //Retrive previous box X-position(*) on the graph (on the left)
  // * => if exist : X position of previous boxe + box.width() + box.widthPadding()
  //   => if not : box.leftMargin()
  previousX = getXPositionOnLeftBox(sosaWrapper)

  //Calcul current Y position based on
  let myselfY = getYPosition(sosaWrapper)

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
      //special case : 2 generations with != box
      let shift = previousX - myselfX
      //if(sosaWrapper.getGeneration() == 5){
      //  shift = previousX
    //  }

      let ancestorsSosa = getAllAncestorsMapOfSosaWrapper(sosaWrapper)

      let len =  ancestorsSosa.length
      for (var i = 0; i < len; i++) {
        G_MAP_ALL_BY_SOSA_BY_GEN.get(SosaWrapper.getGenerationOfSosa(ancestorsSosa[i])).get(ancestorsSosa[i])['box'].shiftRight(shift)
      }
      myselfX = previousX
    }
  }

  //Set our own X/Y value
  G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()).get(sosaWrapper.getSosa())['box'].shiftRight(myselfX)
  G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()).get(sosaWrapper.getSosa())['box'].setY(myselfY)

  //Return our own value
  return myselfX
}

function getYPosition(sosaWrapper){
  //If it's already calculated
  if(G_MAP_GENERATION_Y_POSITION.has(sosaWrapper.getGeneration())){
    return G_MAP_GENERATION_Y_POSITION.get(sosaWrapper.getGeneration())
  }

  let y = 0
  //Let's calculate it
  if(sosaWrapper.getGeneration() > 5){
    // Number of generation above me * total height of boxV
    y = (G_MAX_GENERATION_PROCESSED - sosaWrapper.getGeneration()) * (BoxV.height() + BoxV.heightPadding())
  } else {
    // Number of generation (>5) above me * total height of boxV
    //  + Number of generation (max 5) above me * total height of box
    if(G_MAX_GENERATION_PROCESSED > 5 ){
      y = (G_MAX_GENERATION_PROCESSED - 5) * (BoxV.height() + BoxV.heightPadding())
    }
    y += (Math.min(5, G_MAX_GENERATION_PROCESSED) - sosaWrapper.getGeneration()) * (Box.height() + Box.heightPadding())
  }

  y += BoxAbstract.topMargin()

  G_MAP_GENERATION_Y_POSITION.set(sosaWrapper.getGeneration(), y)

  return y
}

function getXPositionOnLeftBox(sosaWrapper){
  let widthPlusWidthPadding = 0
  let leftMargin = 0
  if(sosaWrapper.getGeneration() > 5){
    widthPlusWidthPadding = BoxV.width() + BoxV.widthPadding()
    leftMargin = BoxV.leftMargin();
  } else {
    widthPlusWidthPadding = Box.width() + Box.widthPadding()
    leftMargin = Box.leftMargin();
  }
  let previousSosaWrapper = G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()).get(sosaWrapper.getSosa())['previousSosaWrapper']
  let box = null
  if(previousSosaWrapper !== null){
    box = G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()).get(previousSosaWrapper.getSosa())['box']
    return box.getX() + widthPlusWidthPadding
  } else {
    box = G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()).get(sosaWrapper.getSosa())['box']
    return leftMargin;
  }
}

/**
 * Return a Map with all Ancestors of a SosaWrapper
 */
function getAllAncestorsMapOfSosaWrapper(sosaWrapper){
  let array = []
  if(G_MAP_ALL_BY_SOSA_BY_GEN.has(sosaWrapper.getGeneration()) && G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()).has(sosaWrapper.getSosa())){
    if(G_MAP_ALL_BY_SOSA_BY_GEN.has(sosaWrapper.getGeneration()+1) && G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()+1).has(sosaWrapper.getVirtualFather())){
        array.push(sosaWrapper.getVirtualFather())
    }
    if(G_MAP_ALL_BY_SOSA_BY_GEN.has(sosaWrapper.getGeneration()+1) && G_MAP_ALL_BY_SOSA_BY_GEN.get(sosaWrapper.getGeneration()+1).has(sosaWrapper.getVirtualMother())){
        array.push(sosaWrapper.getVirtualMother())
    }
    return array.concat(getAllAncestorsMapOfSosaWrapper(new SosaWrapper(sosaWrapper.getVirtualFather())), getAllAncestorsMapOfSosaWrapper(new SosaWrapper(sosaWrapper.getVirtualMother())))
  }
  return []
}

function getMaxSizeOfDrawing(){
  let tmp_box = null
  let widthBox = null
  let heightBox = null

  for (var i=1; i <= G_MAX_GENERATION_PROCESSED; i++){

      tmp_box = G_MAP_ALL_BY_SOSA_BY_GEN.get(i).get(exploitHelper.get(i).getSosa())['box']
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
  drawSVG = SVG().addTo('#svg')
  .size('100%','100%')
  .panZoom({zoomMin: 0.02, zoomMax: 20, zoomFactor:0.15})

  drawSVG.viewbox(0, 0, window.innerWidth - 10 , window.innerHeight - 10)

    drawSVG.polyline([0,0 , 0,G_MAX_POSITION_Y , G_MAX_POSITION_X,G_MAX_POSITION_Y , G_MAX_POSITION_X,0, 0,0])
        .fill('none')
        .stroke({ width: 1, color: '#000' })


      /**********************************//*
      let i
      for(i=0; i < G_MAX_POSITION_X;i+=250){
        drawSVG.polyline([i,0
                      ,i,G_MAX_POSITION_Y])
            .fill('none')
            .stroke({ width: 1, color: '#000' })
      }
      for(i=0; i < G_MAX_POSITION_Y;i+=250){
        drawSVG.polyline([0,i
                      ,G_MAX_POSITION_X,i])
            .fill('none')
            .stroke({ width: 1, color: '#000' })
      }*/
      /**********************************/

    let sosaWrapper = null
    let box = null
    let firstname = null
    let lastname = null
    let width = null
    let height = null

    for (var i=1; i <= G_MAX_GENERATION_PROCESSED; i++){

        if(i > 5) {
          width = BoxV.width()
          height = BoxV.height()
        } else {
          width = Box.width()
          height = Box.height()
        }


        for (var key of G_MAP_ALL_BY_SOSA_BY_GEN.get(i).keys()) {

            sosaWrapper = G_MAP_ALL_BY_SOSA_BY_GEN.get(i).get(key)['sosaWrapper']
            box = G_MAP_ALL_BY_SOSA_BY_GEN.get(i).get(key)['box']
            firstname = G_MAP_ALL_BY_SOSA_BY_GEN.get(i).get(key)['firstname']
            lastname = G_MAP_ALL_BY_SOSA_BY_GEN.get(i).get(key)['lastname']

            // Dessin de la box
            drawSVG.rect(width, height)
                .fill('#eee')
                .move(box.getX(), box.getY())
                .stroke({ width: 1, color: '#ccc' })
                .radius(10)

            //drawSVG.plain(firstname + ' ' + lastname)
            drawSVG.plain(sosaWrapper.getSosa() + " [" + box.getX()  + '/' + box.getY() + "]")
                .move(box.getX() + 5, box.getY())
            //Si père existe : liaison
            if(G_MAP_ALL_BY_SOSA_BY_GEN.has(i+1) && G_MAP_ALL_BY_SOSA_BY_GEN.get(i+1).has(sosaWrapper.getVirtualFather())){
              let father = G_MAP_ALL_BY_SOSA_BY_GEN.get(i+1).get(sosaWrapper.getVirtualFather())['box']
              let middleY = (father.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2

              drawSVG.polyline([box.getTopJunctionPoint().x,box.getTopJunctionPoint().y
                            ,box.getBottomJunctionPoint().x,middleY
                            ,father.getBottomJunctionPoint().x, middleY
                            ,father.getBottomJunctionPoint().x, father.getBottomJunctionPoint().y])
                  .fill('none')
                  .stroke({ width: 1, color: '#000' })
            }
            //Si mère existe : liaison
            if(G_MAP_ALL_BY_SOSA_BY_GEN.has(i+1) && G_MAP_ALL_BY_SOSA_BY_GEN.get(i+1).has(sosaWrapper.getVirtualMother())){
              let mother = G_MAP_ALL_BY_SOSA_BY_GEN.get(i+1).get(sosaWrapper.getVirtualMother())['box']
              let middleY = (mother.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2

              drawSVG.polyline([box.getTopJunctionPoint().x,box.getTopJunctionPoint().y
                            ,box.getBottomJunctionPoint().x,middleY
                            ,mother.getBottomJunctionPoint().x, middleY
                            ,mother.getBottomJunctionPoint().x, mother.getBottomJunctionPoint().y])
                  .fill('none')
                  .stroke({ width: 1, color: '#000' })
            }
        }
    }

    document.getElementById('box').classList.add('hidden')
    document.getElementById('panel').classList.remove('hidden')
}

function pdf(){

  drawSVG.viewbox(0, 0, window.innerWidth - 10 , window.innerHeight - 10)

  setTimeout(() => {


    const pdfobjectWrapper = document.getElementById("pdfobjectWrapper");
    var pdfobject = document.getElementById("pdfobject");
    const svgElement = document.getElementsByTagName("svg")[0];

    //Show Wrapper
    pdfobjectWrapper.classList.remove("hidden")

    const pdf = new jsPDF('l', 'px', [G_MAX_POSITION_X, G_MAX_POSITION_Y]);

    // render the svg element
    svg2pdf(svgElement, pdf, {
      xOffset: 0,
      yOffset: 0,
      scale: 8.75
    });



    const uri = pdf.output('datauristring');

    if(pdfobject == undefined){
      pdfobject = document.createElement("embed");
      pdfobject.setAttribute("src", uri);
      pdfobject.id = "pdfobject";
      pdfobject.type = "application/pdf"
      pdfobjectWrapper.appendChild(pdfobject);
    } else {
      pdfobject.setAttribute("src", uri);
    }

    //pdf.save('myPDF.pdf')
  }, 20);
}

function hiddePdfobjectWrapper(){
  document.getElementById("pdfobjectWrapper").classList.add("hidden")
}
function togglePanel(){
  document.getElementById('panel').classList.toggle('show')
  document.getElementById('panel').classList.toggle('minify')
  document.getElementById('panel_open').classList.toggle('hidden')
  document.getElementById('panel_close').classList.toggle('hidden')
}
