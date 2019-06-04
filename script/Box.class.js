
class Box {
  constructor(sosa, maxGeneration) {
    let gen = getGeneration(sosa)
    let diffSosaTopGen = getSosaOfMaxFather(sosa) - getMinSosaOfGeneration(maxGeneration)
    let diffGen = maxGeneration - gen

    //Calcul x & y values
    this.x =  diffSosaTopGen * (Box.width() + Box.widthPadding()) + Box.leftMargin()
    this.y = diffGen * (Box.height() + Box.heightPadding()) + Box.leftMargin()

    this.sosa=sosa
  }

  getX(){
    return this.x;
  }

  getY(){
    return this.y;
  }

  getBottomJunctionPoint(){
    return {"x" : this.x + Box.width() / 2 , "y" : this.y + Box.height()};
  }

  getTopJunctionPoint(){
    return {"x" : this.x + Box.width() / 2 , "y" : this.y };
  }

  setX(value){
    this.x = value
  }

  shiftRight(value){
    this.x += value
  }

  static leftMargin(){return 20} // left margin
  static widthPadding(){return 10} // horizontal padding between box
  static heightPadding(){return 30} // vertical padding between box
  static width(){return 200;} //width of box in px
  static height(){return 75;} //height of box in px
}
