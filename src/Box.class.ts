import { SosaWrapper } from "./struct.class"


const CONST_LEFT_MARGIN = 20 // left margin
const CONST_TOP_MARGIN = 20 // top margin
const CONST_WIDTH_PADDING = 10 // horizontal padding between box
const CONST_HEIGHT_PADDING = 30 // vertical padding between box
const CONST_WIDTH = 200 //width of box in px
const CONST_HEIGHT = 75 //height of box in px
const CONST_WIDTH_V = 95 //width of box in px
const CONST_HEIGHT_V = 150 //height of box in px

export class BoxAbstract {
  maxGeneration:number = null
  generation:number = null
  sosa:number = null
  x:number = null
  y:number = null

  constructor(sosaWrapper:SosaWrapper, maxGeneration:number) {
    this.maxGeneration = maxGeneration
    this.generation = sosaWrapper.generation
    this.sosa=sosaWrapper.sosa
    this.x = 0
    this.y = 0


    //let diffSosaTopGen = this.getSosaOfMaxFather() - this.getMinSosaOfGeneration()
    //let diffGen = maxGeneration - generation

    //Calcul x & y values
    //this.x = diffSosaTopGen * (this.width() + this.widthPadding()) + this.leftMargin()
    //this.y = diffGen * (this.height() + this.heightPadding()) + this.leftMargin()

  }

  setX(value:number):void{
    this.x = value
  }

  setY(value:number):void{
    this.y = value
  }

  shiftRight(value:number):void{
    this.x += value
  }

  getSosaOfMaxFather():number{
    return this.sosa * Math.pow(2,this.maxGeneration - this.generation)
  }

  getMinSosaOfGeneration():number{
     return Math.pow(2,(this.generation - 1))
  }

  getX():number{return this.x;}
  getY():number{return this.y;}


  static leftMargin():number{return CONST_LEFT_MARGIN}
  static topMargin():number{return CONST_TOP_MARGIN}
  static widthPadding():number{return CONST_WIDTH_PADDING}
  static heightPadding():number{return CONST_HEIGHT_PADDING}
}

export class Box extends BoxAbstract {
  constructor(sosaWrapper:SosaWrapper, maxGeneration:number) {
    super(sosaWrapper, maxGeneration)
    
    //FIXME post TS : code unused

    let diffSosaTopGen = this.getSosaOfMaxFather() - this.getMinSosaOfGeneration()
    //TODO verify this line below after swtching to TS
    //let diffSosaTopGen = this.getSosaOfMaxFather(sosaWrapper.getSosa()) - this.getMinSosaOfGeneration(maxGeneration)
    let diffGen = maxGeneration - this.generation

    //Calcul x & y values
    //this.x =  diffSosaTopGen * (this.width() + this.widthPadding()) + this.leftMargin()
    //this.y = diffGen * (this.height() + this.heightPadding()) + this.leftMargin()
  }

  getBottomJunctionPoint(){
    return {"x" : this.x + Box.width() / 2 , "y" : this.y + Box.height()}
  }

  getTopJunctionPoint(){
    return {"x" : this.x + Box.width() / 2 , "y" : this.y }
  }
  
  static width():number{return CONST_WIDTH}
  static height():number{return CONST_HEIGHT}
}

export class BoxV extends BoxAbstract {
  constructor(sosaWrapper:SosaWrapper, maxGeneration:number) {
    super(sosaWrapper, maxGeneration)

    //FIXME post TS : code unused

    let margin_bottom = (BoxAbstract.heightPadding() + BoxV.height()) * 5

    //this.CONST_LEFT_MARGIN = 20 // left margin
    //this.CONST_WIDTH_PADDING = 10 // horizontal padding between box
    //this.CONST_HEIGHT_PADDING = 30 // vertical padding between box
    //this.CONST_WIDTH = 50 //width of box in px
    //this.CONST_HEIGHT = 150 //height of box in px


    let diffSosaTopGen = this.getSosaOfMaxFather() - this.getMinSosaOfGeneration()
    let diffGen = maxGeneration - this.generation

    //Calcul x & y values
    //this.x =  diffSosaTopGen * (this.width() + this.widthPadding()) + this.leftMargin()
    //this.y = (diffGen - 5) * (this.height() + this.heightPadding()) + this.leftMargin() + margin_bottom


  //  width(){return 50;} //width of box in px
//    height(){return 150;} //height of box in px
  }
  getBottomJunctionPoint(){
    return {"x" : this.x + BoxV.width() / 2 , "y" : this.y + BoxV.height()}
  }

  getTopJunctionPoint(){
    return {"x" : this.x + BoxV.width() / 2 , "y" : this.y }
  }

  //Not ready for a production use
  //static width(){return CONST_WIDTH_V}
  //static height(){return CONST_HEIGHT_V}
  static width(){return CONST_WIDTH}
  static height(){return CONST_HEIGHT}
}
