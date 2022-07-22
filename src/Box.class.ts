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
