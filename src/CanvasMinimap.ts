import { Store } from "./Store"

export class CanvasMinimap {
  
  source:HTMLCanvasElement = null
  clone:HTMLCanvasElement = null
  ctx = null

  constructor(source:HTMLCanvasElement, clone:HTMLCanvasElement){
    //Idea : https://stackoverflow.com/questions/3318565/any-way-to-clone-html5-canvas-element-with-its-content

    this.source = source
    this.clone = clone
    this.ctx = CanvasPanzoom.clone.getContext("2d")

    //clone.width = source.width
    //clone.height = source.height

    this.ctx.drawImage(source, 0, 0)
    let ratio = 1 //TODO process a correct ratio
    Store.
    this.ctx.scale(ratio,ratio)
  }
}