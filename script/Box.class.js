
class Box extends BoxAbstract {
  constructor(sosaWrapper, maxGeneration) {
    super(sosaWrapper, maxGeneration)

    let diffSosaTopGen = this.getSosaOfMaxFather(sosaWrapper.getSosa()) - this.getMinSosaOfGeneration(maxGeneration)
    let diffGen = maxGeneration - this.generation

    //Calcul x & y values
    //this.x =  diffSosaTopGen * (this.width() + this.widthPadding()) + this.leftMargin()
    //this.y = diffGen * (this.height() + this.heightPadding()) + this.leftMargin()
  }

  getBottomJunctionPoint(){
    return {"x" : this.x + Box.width() / 2 , "y" : this.y + Box.height()};
  }

  getTopJunctionPoint(){
    return {"x" : this.x + Box.width() / 2 , "y" : this.y };
  }
}
