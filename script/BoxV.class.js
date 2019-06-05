
class BoxV extends BoxAbstract {
  constructor(sosa, generation, maxGeneration) {
    super(sosa, generation, maxGeneration)

    let margin_bottom = (this.CONST_HEIGHT_PADDING + this.CONST_HEIGHT) * 5

    //this.CONST_LEFT_MARGIN = 20 // left margin
    //this.CONST_WIDTH_PADDING = 10 // horizontal padding between box
    //this.CONST_HEIGHT_PADDING = 30 // vertical padding between box
    //this.CONST_WIDTH = 50 //width of box in px
    //this.CONST_HEIGHT = 150 //height of box in px


    let diffSosaTopGen = this.getSosaOfMaxFather() - this.getMinSosaOfGeneration()
    let diffGen = maxGeneration - generation

    //Calcul x & y values
    this.x =  diffSosaTopGen * (this.width() + this.widthPadding()) + this.leftMargin()
    this.y = (diffGen - 5) * (this.height() + this.heightPadding()) + this.leftMargin() + margin_bottom


  //  width(){return 50;} //width of box in px
//    height(){return 150;} //height of box in px
  }

  getBottomJunctionPoint(){
    return {"x" : this.x + this.width() / 2 , "y" : this.y + this.height()};
  }

  getTopJunctionPoint(){
    return {"x" : this.x + this.width() / 2 , "y" : this.y };
  }
}
