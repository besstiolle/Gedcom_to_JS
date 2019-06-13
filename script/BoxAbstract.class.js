

CONST_LEFT_MARGIN = 20 // left margin
CONST_TOP_MARGIN = 20 // top margin
CONST_WIDTH_PADDING = 10 // horizontal padding between box
CONST_HEIGHT_PADDING = 30 // vertical padding between box
CONST_WIDTH = 200 //width of box in px
CONST_HEIGHT = 75 //height of box in px

class BoxAbstract {
  constructor(sosa, generation, maxGeneration) {
    this.maxGeneration = maxGeneration
    this.generation = generation
    this.sosa=sosa
    this.x = 0
    this.y = 0


    //let diffSosaTopGen = this.getSosaOfMaxFather() - this.getMinSosaOfGeneration()
    //let diffGen = maxGeneration - generation

    //Calcul x & y values
    //this.x = diffSosaTopGen * (this.width() + this.widthPadding()) + this.leftMargin()
    //this.y = diffGen * (this.height() + this.heightPadding()) + this.leftMargin()

  }

  setX(value){
    this.x = value
  }

  setY(value){
    this.y = value
  }

  shiftRight(value){
    this.x += value
  }

  getSosaOfMaxFather(){
    return this.sosa * Math.pow(2,this.maxGeneration - this.generation)
  }

  getMinSosaOfGeneration(){
     return Math.pow(2,(this.generation - 1))
  }

  getX(){return this.x;}
  getY(){return this.y;}


  static leftMargin(){return CONST_LEFT_MARGIN}
  static topMargin(){return CONST_TOP_MARGIN}
  static widthPadding(){return CONST_WIDTH_PADDING}
  static heightPadding(){return CONST_HEIGHT_PADDING}
  static width(){return CONST_WIDTH}
  static height(){return CONST_HEIGHT}
}
