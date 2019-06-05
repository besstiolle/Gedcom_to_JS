
class BoxAbstract {
  constructor(sosa, generation, maxGeneration) {
    this.maxGeneration = maxGeneration
    this.generation = generation
    this.sosa=sosa
    this.x = 0
    this.y = 0

    this.CONST_LEFT_MARGIN = 20 // left margin
    this.CONST_WIDTH_PADDING = 10 // horizontal padding between box
    this.CONST_HEIGHT_PADDING = 30 // vertical padding between box
    this.CONST_WIDTH = 200 //width of box in px
    this.CONST_HEIGHT = 75 //height of box in px

    //let diffSosaTopGen = this.getSosaOfMaxFather() - this.getMinSosaOfGeneration()
    //let diffGen = maxGeneration - generation

    //Calcul x & y values
    //this.x = diffSosaTopGen * (this.width() + this.widthPadding()) + this.leftMargin()
    //this.y = diffGen * (this.height() + this.heightPadding()) + this.leftMargin()

  }

  setX(value){
    this.x = value
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
  leftMargin(){return this.CONST_LEFT_MARGIN}
  widthPadding(){return this.CONST_WIDTH_PADDING}
  heightPadding(){return this.CONST_HEIGHT_PADDING}
  width(){return this.CONST_WIDTH}
  height(){return this.CONST_HEIGHT}
}
