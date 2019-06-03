var boxes = new Map()
var personsMap = new Map();
var maxCurrentGeneration = null;
var maxCurrentSosa = null;
var sosasByGenerations = null
const MAX_GEN = 30;

var indis = new Map() //All Individus
var fams = new Map() //All famillies

var maxX = 0;
var maxY = 0;

var start = 0;
var timerStep = 0;

function init(){
  document.getElementsByTagName("input")[0].addEventListener('change', run);
}

function run() {
  startTimer()

  timer("start reading with Worker")
  let read = new Promise(function(resolve) {
        var v = new Worker('script/readerWorker.js');
        v.postMessage([document.getElementsByTagName("input")[0].files[0]]);
        v.onmessage = function(event){
            timer("end reading with Worker")
            resolve(event.data);
        };
    });

  read.then(function(data) {

        parsingGedcomData(data)

        timer("start of exploit")
        exploit(1, "1", indis, fams)
        timer("end of exploit")

        initVars()

        //Populate virtual box
        timer("start processPerson")
        processPerson(1) //Start with sosa 1
        timer("end processPerson")

        //Try compressing graph
        timer("start compress")
        compress(1)
        timer("end compress")

        //compute max X value
        getMaxSizeOfDrawing()

        // Draw boxes & links & other things
        draw()

        timer("end run()")
      });
}

function startTimer(){
  console.log("restart 0ms")
  start = Date.now();
  timerStep = start;
}

function timer(message){
  console.log(message + " ms elapsed = " + (Date.now()-timerStep) + "ms" +  " / " + (Date.now()-start) + "ms");
  timerStep = Date.now()
}

function parsingGedcomData(data) {
    timer("start parsingGedcomData()")
    var array = new Int8Array(data);
    var line = ""
    var indi = null // One Individu
    var fam = null //One Familly

    for (var i = 0; len = array.length, i < len; i++) {
        let char = array[i]
        if(char == 10 || char == 13) { //Return line
          //process previous line
          if(line.startsWith('0 @I')){
            //Save previous indiv
            if(indi != null){
              indis.set(indi['id'], indi)
            }
            // Initiate array
            let matches = line.match("^0 @I([0-9]*)@ INDI$");
            indi = []
            indi['id'] = matches[1]
          }

          if(line.startsWith("1 NAME ")){
              if(indi != null) {
                var matches = line.match('^1 NAME (.*)\/(.*)\/$');
                indi['firstname'] = matches[1].replace(/"/g,'')
                indi['lastname'] = matches[2]
              }
          }

          if(line.startsWith("1 FAMC @F")){
            if(indi != null) {
              var matches = line.match('^1 FAMC @F([0-9]+)@$');
              indi['famc'] = matches[1]
            }
          }

          if(line.startsWith("1 SEX ")){
            if(indi != null) {
              var matches = line.match('^1 SEX ([FM])$');
              indi['sex'] = matches[1]
            }
          }

          if(line.startsWith("0 @F") & line.endsWith("@ FAM")){
            //Save previous family
            if(fam != null){

              fams.set(fam['id'], fam)
            }
            // Initiate array
            let matches = line.match("^0 @F([0-9]*)@ FAM$");
            fam = []
            fam['id'] = matches[1]
          }

          if(line.startsWith("1 HUSB @I")){
            if(indi != null) {
              var matches = line.match('^1 HUSB @I([0-9]*)@$');
              fam['father'] = matches[1]
            }
          }

          if(line.startsWith("1 WIFE @I")){
            if(indi != null) {
              var matches = line.match('^1 WIFE @I([0-9]*)@$');
              fam['mother'] = matches[1]
            }
          }

          //Start next line
          line = ''
          continue
        }

        line += String.fromCharCode(char)
    }

    timer("end parsingGedcomData()")
    return
}

function exploit(sosa, position, indis, fams){


  if(indis.has(position)){
    //Limitation
    if(getGeneration(sosa) > MAX_GEN){
      return
    }

    personsMap.set(sosa,{'sosa':sosa,'name':indis.get(""+position)['firstname'], 'surname':indis.get(""+position)['lastname']})

    //Process his father and mothers
    let familyId = indis.get(""+position)['famc']
    if(fams.has(familyId)) {
      let family = fams.get(familyId)
      let sosaFather = getFatherOfSosa(sosa)
      let sosaMother = getMotherOfSosa(sosa)
      if(family['father'] != null && family['father'] != undefined) {
      //  console.info("start process father" + sosaFather)
        exploit(sosaFather, family['father'], indis, fams)
      }else {
        //console.info("mother is undefined")
      }
      if(family['mother'] != null && family['mother'] != undefined) {
        //console.info("start process mother" + sosaMother)
        exploit(sosaMother, family['mother'], indis, fams)
      } else {
          //console.info("mother is undefined")
      }
    } else {
      //console.info("family is undefined")
    }
  } else {
    console.warn("individu #" + position + " is undefined")
  }


}

function readFileAsArrayBuffer(file, success, error) {
    var fr = new FileReader();
    fr.addEventListener('error', error, false);
    if (fr.readAsBinaryString) {
        fr.addEventListener('load', function () {
            var string = this.resultString != null ? this.resultString : this.result;
            var result = new Uint8Array(string.length);
            for (var i = 0; i < string.length; i++) {
                result[i] = string.charCodeAt(i);
            }
            success(result.buffer);
        }, false);
        return fr.readAsBinaryString(file);
    } else {
        fr.addEventListener('load', function () {
            success(this.result);
        }, false);
        return fr.readAsArrayBuffer(file);
    }
}

function initVars(){
  timer("start initVars")

  //Set maxCurrentGeneration & maxCurrentSosa
  maxCurrentSosa = 1
  for(var value of personsMap){
      if(value[0] > maxCurrentSosa){
        maxCurrentSosa = value[0]
      }
  }
  maxCurrentGeneration = getGeneration(maxCurrentSosa)
  if(maxCurrentGeneration > MAX_GEN){
    maxCurrentGeneration = MAX_GEN
  }

  //Initiate sosasByGeneration
  sosasByGenerations=[]
  for(var i=1; i <= maxCurrentGeneration; i++){
    sosasByGenerations[i] = []
  }

  timer("end initVars")
}

function compress(sosa){

  let fatherX = 0
  let motherX = 0
  let myselfX = 0
  let previousX = 0

  //Get compressed position of father if exists
  if(boxes.has(getFatherOfSosa(sosa))){
      fatherX = compress(getFatherOfSosa(sosa))
  }

  //Get compressed position of mother if exists
  if(boxes.has(getMotherOfSosa(sosa))){
      motherX = compress(getMotherOfSosa(sosa))
  }

  //Retrive previous box X-position(*) on the graph (on the left)
  // * => if exist : X position of previous boxe + Box.width() + Box.widthPadding()
  //   => if not : Box.leftMargin()
  previousX = getXPositionOnLeftBox(sosa)

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
      ancestorsSosa = getAncestorsInBoxes(sosa)
      for (var i = 0; len = ancestorsSosa.length, i < len; i++) {
        boxes.get(ancestorsSosa[i]).shiftRight(shift)
      }
      myselfX = previousX
    }
  }


  //Set our own X value
  boxes.get(sosa).setX(myselfX)

  //Return our own value
  return myselfX
}

function getXPositionOnLeftBox(sosa){
  let sosaIndex = sosasByGenerations[getGeneration(sosa)].indexOf(sosa)
  if(sosaIndex > 0){
    leftSosa = sosasByGenerations[getGeneration(sosa)][sosaIndex-1]
    return boxes.get(leftSosa).getX() + Box.width() + Box.widthPadding()
  } else {
    return Box.leftMargin();
  }
}

function getAncestorsInBoxes(sosa){
  array = []
  if(boxes.has(sosa)){
    if(boxes.has(getFatherOfSosa(sosa))){
        array.push(getFatherOfSosa(sosa))
    }
    if(boxes.has(getMotherOfSosa(sosa))){
        array.push(getMotherOfSosa(sosa))
    }
    return array.concat(getAncestorsInBoxes(getFatherOfSosa(sosa)), getAncestorsInBoxes(getMotherOfSosa(sosa)))
  }
  return []
}

function getMaxSizeOfDrawing(){
  timer("start getMaxSizeOfDrawing()")
  let localSosa = 0
  for (var i=1; i <= maxCurrentGeneration; i++){
    let maxSosaOnGeneration = sosasByGenerations[i][sosasByGenerations.size-1]

      localSosa = sosasByGenerations[i][sosasByGenerations[i].length-1]
      let maxXOfGen = boxes.get(localSosa).getX()
      if(maxXOfGen > maxX){
        maxX = maxXOfGen
      }
      let maxYOfGen = boxes.get(localSosa).getY()
      if(maxYOfGen > maxY){
        maxY = maxYOfGen
      }
  }

  timer("end getMaxSizeOfDrawing()")
}

function draw(){
  timer("start draw")
  var canvas = document.getElementById('graph');
  canvas.width=maxX + Box.width() + 10
  canvas.height=maxY + Box.height() + 10

  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    for(var value of boxes){
      let sosa = value[0]
      let box = value[1]

      // Dessin de la box
      ctx.strokeRect(box.getX(), box.getY(), Box.width(), Box.height())
      ctx.fillText('#'+sosa,box.getX() + Box.width() / 3, box.getY() + Box.height() / 1.5 );

      //Si père existe : liaison
      if(boxes.has(getFatherOfSosa(sosa))){
        let father = boxes.get(getFatherOfSosa(sosa))
        let middleY = (father.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2
        ctx.beginPath();
        ctx.moveTo(box.getTopJunctionPoint().x, box.getTopJunctionPoint().y)
        ctx.lineTo(box.getBottomJunctionPoint().x, middleY);
        ctx.lineTo(father.getBottomJunctionPoint().x, middleY);
        ctx.lineTo(father.getBottomJunctionPoint().x, father.getBottomJunctionPoint().y);
        ctx.stroke();
      }
      //Si mère existe : liaison
      if(boxes.has(getMotherOfSosa(sosa))){
        let mother = boxes.get(getMotherOfSosa(sosa))
        let middleY = (mother.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2
        ctx.beginPath();
        ctx.moveTo(box.getTopJunctionPoint().x, box.getTopJunctionPoint().y)
        ctx.lineTo(box.getBottomJunctionPoint().x, middleY);
        ctx.lineTo(mother.getBottomJunctionPoint().x, middleY);
        ctx.lineTo(mother.getBottomJunctionPoint().x, mother.getBottomJunctionPoint().y);
        ctx.stroke();
      }
    }
  }
  timer("end draw")
}

function processPerson(sosa){
    let box = null
    if(personsMap.has(sosa)) {
      let father = processPerson(getFatherOfSosa(sosa))
      let mother = processPerson(getMotherOfSosa(sosa))

      let xCenter = null/*
      if(father != null && mother != null){
        xCenter = Math.floor((father.getBottomJunctionPoint().x + mother.getBottomJunctionPoint().x) / 2)
      } else if(father != null){
        xCenter = father.getBottomJunctionPoint().x
      } else if(mother != null){
        xCenter = mother.getBottomJunctionPoint().x
      }*/
      if(father != null){
        xCenter = father.getX()
      }

      box=new Box(sosa, xCenter, maxCurrentGeneration);
      boxes.set(sosa, box)
      sosasByGenerations[getGeneration(sosa)].push(sosa)
  }
  return box
}

class Box{
  x; //x position in canvas
  y; //y position in canvas
  sosa; //sosa value

  constructor(sosa, xCenter, maxGeneration){
    let gen = getGeneration(sosa)
    let diffSosaTopGen = getSosaOfMaxFather(sosa, maxGeneration) - getMinSosaOfGeneration(maxGeneration)
    let diffGen = maxGeneration - gen

    //Calcul x value
  //  if(xCenter == null){
    this.x =  diffSosaTopGen * (Box.width() + Box.widthPadding()) + Box.leftMargin()
  //  } else {
      //this.x = xCenter - Box.width() / 2
    //  this.x = xCenter
  //  }
    //Calcul y value
    this.y = diffGen * (Box.height() + Box.heightPadding()) + Box.leftMargin()

    this.sosa=sosa
  }

  getX = function(){
    return this.x;
  }

  getY = function(){
    return this.y;
  }

  getBottomJunctionPoint = function(){
    return {"x" : this.x + Box.width() / 2 , "y" : this.y + Box.height()};
  }
  getTopJunctionPoint = function(){
    return {"x" : this.x + Box.width() / 2 , "y" : this.y };
  }

  setX = function(value){
    this.x = value
  }

  shiftRight = function(value){
    this.x += value
  }

  static leftMargin(){return 20} // left margin
  static widthPadding(){return 5} // horizontal padding between box
  static heightPadding(){return 10} // vertical padding between box
  static width(){return 40;} //width of box in px
  static height(){return 30;} //height of box in px
}

/**
* Return n° of generation based on sosa
* tkt to Rolland (https://www.lorand.org/spip.php?article1459)
**/
function getGeneration(sosa){
  return Math.floor(Math.log(sosa) / Math.LN2)+1
}

function getMinSosaOfGeneration(generation){
   return Math.pow(2,(generation - 1))
}

function getMaxSosaOfGeneration(generation){
  return Math.pow(2,generation)-1
}

function getFatherOfSosa(sosa){
  return sosa * 2
}

function getMotherOfSosa(sosa){
  return sosa * 2 + 1
}

function getSosaOfMaxFather(sosa, maxGeneration){
  let diffGen = (maxGeneration - getGeneration(sosa))
  return sosa * Math.pow(2,diffGen)
}
