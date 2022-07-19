import { VirtualGridEntry } from "./struct.class"
import { Box, BoxV } from "./Box.class"
import { Store } from "./Store"
import { CanvasPanzoom } from "./CanvasPanzoom"

export class CanvasRenderer {
  
  static ctx :HTMLCanvasElement = null

  static draw(canvas:HTMLCanvasElement, canvasMinimap:HTMLCanvasElement){

    CanvasRenderer.ctx = canvas.getContext("2d")

    //CanvasRenderer.viewBox()
    CanvasRenderer.polyline([0,0 , 0,Store.positionYMax , Store.positionXMax,Store.positionYMax , Store.positionXMax,0, 0,0])
    CanvasRenderer.drawLoop(1)
    new CanvasPanzoom(canvas)
    new CanvasMinimap(canvas, canvasMinimap)
  }



  private static drawLoop(generation:number){ 

    if(generation > Store.grid.maxGenerationProcessed){
      return
    }

    let sosaWrapper = null
    let box = null
    let width = null
    let height = null
    let birth = null
    let death = null
    let yIncrement = null
    let tmpStr = null

    const nbCar1em = 26
    const nbCar07em = 34

    if(generation > 5) {
      width = BoxV.width()
      height = BoxV.height()
    } else {
      width = Box.width()
      height = Box.height()
    }

    let sosas = Store.grid.mapGenerationSosa.get(generation)
    let len = sosas.length
    let key = null
    let name = null
    let gridEntry:VirtualGridEntry = null
    
    const regexBefore = /^BEF/i
    const regexAfter = /^AFT/i

    for (let i=0; i < len; i++){

        key = sosas[i]

        if(!Store.grid.mapSosaToGridEntry.has(key)){
          console.info("grid.mapSosaToGridEntry doesn't have key %o", key)
          continue
        }

        gridEntry = Store.grid.mapSosaToGridEntry.get(key)

        sosaWrapper = gridEntry.sosaWrapper
        box = gridEntry.box
        name = gridEntry.firstname + " " + gridEntry.lastname
        yIncrement = 15

        birth = ""
        if(gridEntry.birthDate != undefined || gridEntry.birthPlace != undefined){
          birth += "¤"
          if(gridEntry.birthDate != undefined){
            birth += " " + gridEntry.birthDate.replace(regexBefore, '<').replace(regexAfter, '>')
          }
          if(gridEntry.birthPlace != undefined){
            tmpStr = gridEntry.birthPlace.split(',')
            birth += " " + tmpStr[0] + ", "+ tmpStr[1]
          }
        }

        death = ""
        if(gridEntry.deathDate != undefined || gridEntry.deathPlace != undefined){
          death += "×"
          if(gridEntry.deathDate != undefined){
            death += " " + gridEntry.deathDate.replace(regexBefore, '<').replace(regexAfter, '>')
          }
          if(gridEntry.deathPlace != undefined){
            tmpStr = gridEntry.deathPlace.split(',')
            death += " " + tmpStr[0] + "," + tmpStr[1]
          }
        }

        // Dessin de la gridEntry
        CanvasRenderer.drawGridEntry(box.getX(), box.getY(), width, height)

        //For debug only
        //name = '#'+ gridEntry.sosaWrapper.sosa + " " + name
        //For debug only

        //26 car in size 13px
        CanvasRenderer.drawText(box.getX() + 5, box.getY() + yIncrement, name.substring(0,nbCar1em), '13px')
        //CanvasRenderer.drawText(box.getX() + 5, box.getY() + yIncrement, sosaWrapper.getSosa() + " [" + box.getX()  + '/' + box.getY() + "]", '13px'))
        yIncrement += 15

        if(name.length > nbCar1em){
          CanvasRenderer.drawText(box.getX() + 5, box.getY() + yIncrement, name.substring(nbCar1em,2*nbCar1em), '13px')
          yIncrement += 15
        }
        //34 car in size 0.7em
        CanvasRenderer.drawText(box.getX() + 5, box.getY() + yIncrement, birth.substring(0,nbCar07em), '10px')
        if(birth.length > nbCar07em){
          yIncrement += 10
          CanvasRenderer.drawText(box.getX() + 5, box.getY() + yIncrement, birth.substring(nbCar07em,2*nbCar07em), '10px')
        }
        yIncrement += 10
        CanvasRenderer.drawText(box.getX() + 5, box.getY() + yIncrement, death.substring(0,nbCar07em), '10px')
        if(death.length > nbCar07em){
          yIncrement += 10
          CanvasRenderer.drawText(box.getX() + 5, box.getY() + yIncrement, death.substring(nbCar07em,2*nbCar07em), '10px')
        }

        //Si père existe : liaison
        if(Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaFather)){
          let father = Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosaFather).box
          let middleY = (father.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2

          CanvasRenderer.polyline([box.getTopJunctionPoint().x,box.getTopJunctionPoint().y
                        ,box.getBottomJunctionPoint().x,middleY
                        ,father.getBottomJunctionPoint().x, middleY
                        ,father.getBottomJunctionPoint().x, father.getBottomJunctionPoint().y])
        }
        //Si mère existe : liaison
        if(Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaMother)){
          let mother = Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosaMother).box
          let middleY = (mother.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2

          CanvasRenderer.polyline([box.getTopJunctionPoint().x,box.getTopJunctionPoint().y
                        ,box.getBottomJunctionPoint().x,middleY
                        ,mother.getBottomJunctionPoint().x, middleY
                        ,mother.getBottomJunctionPoint().x, mother.getBottomJunctionPoint().y])
        }
    }

    generation++
    //TODO verifier ce code
    setTimeout(() => {
      CanvasRenderer.drawLoop(generation)
    }, 1)
}
  static viewBox(){
                    // X position of the SOSA #1
    let viewboxX = Store.grid.mapSosaToGridEntry.get(1).box.getX() - ((window.innerWidth - 10) / 2) + Box.width() / 2
    let viewboxY = Store.positionYMax - window.innerHeight + 100
    if(Store.positionYMax < window.innerHeight){
      viewboxY = (Store.positionYMax - window.innerHeight) / 2
    }
    (<Svg>SVGRenderer.container
            .viewbox( viewboxX,  viewboxY , window.innerWidth - 10 , window.innerHeight - 10)
            .size('100%','100%'))
            .panZoom({zoomMin: 0.02, zoomMax: 20, zoomFactor:0.15})
            .zoom(1)
  }

  private static drawText(x:number, y:number, str:string, fontsize:number){
    
    /*CanvasRenderer.drawText (birth.substring(0,nbCar07em)).font('size', '10').move(box.getX() + 5, box.getY() + yIncrement)*/
  }

  private static drawGridEntry(x:number, y:number, w:number, h:number){
    CanvasRenderer.ctx.roundRect(x,y,w,h,10)
    CanvasRenderer.ctx.fillStyle = '#eee'
    CanvasRenderer.ctx.fill()
    CanvasRenderer.ctx.strokeStyle = '#ccc'
    CanvasRenderer.ctx.lineWidth = 1
    CanvasRenderer.ctx.stroke()
    CanvasRenderer.ctx.closePath()

/*xxxRenderer.container.rect(width, height)
            .fill('#eee')
            .move(box.getX(), box.getY())
            .stroke({ width: 1, color: '#ccc' })
            .radius(10)*/
  }

  private static polyline(coord:number[]){
    let x = null
    let y = null

    CanvasRenderer.ctx.beginPath()
    for(let i=0; i< coord.length; i+=2){
      if(x == null){
        x = coord[i]
        y = coord[i+1]
        CanvasRenderer.ctx.moveTo(x,y)
      } else {
        CanvasRenderer.ctx.moveTo(x,y)
        x = coord[i]
        y = coord[i+1]
        CanvasRenderer.ctx.lineTo(x,y)
      }
    }
    CanvasRenderer.ctx.strokeStyle = '#000'
    CanvasRenderer.ctx.lineWidth = 1
    CanvasRenderer.ctx.stroke()

    /*CanvasRenderer.ctx.polyline(coord)
        .fill('none')
        .stroke({ width: 1, color: '#000' })*/
  }

  
}

/* 
 * Allow rounded Rect in Canvas
 * @See : https://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-using-html-canvas 
 */
CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
  if (w < 2 * r) r = w / 2;
  if (h < 2 * r) r = h / 2;
  this.beginPath();
  this.moveTo(x+r, y);
  this.arcTo(x+w, y,   x+w, y+h, r);
  this.arcTo(x+w, y+h, x,   y+h, r);
  this.arcTo(x,   y+h, x,   y,   r);
  this.arcTo(x,   y,   x+w, y,   r);
//  this.closePath();
  return this;
}

  
// Gets the relevant location from a mouse or single touch event
function getEventLocation(e)
{
    if (e.touches && e.touches.length == 1)
    {
        return { x:e.touches[0].clientX, y: e.touches[0].clientY }
    }
    else if (e.clientX && e.clientY)
    {
        return { x: e.clientX, y: e.clientY }        
    }
}
function onPointerDown(e)
{
    isDragging = true
    dragStart.x = getEventLocation(e).x/cameraZoom - cameraOffset.x
    dragStart.y = getEventLocation(e).y/cameraZoom - cameraOffset.y
}

function onPointerUp(e)
{
    isDragging = false
    initialPinchDistance = null
    lastZoom = cameraZoom
}

function onPointerMove(e)
{
    if (isDragging)
    {
        cameraOffset.x = getEventLocation(e).x/cameraZoom - dragStart.x
        cameraOffset.y = getEventLocation(e).y/cameraZoom - dragStart.y
    }
}

function handleTouch(e, singleTouchHandler)
{
    if ( e.touches.length == 1 )
    {
        singleTouchHandler(e)
    }
    else if (e.type == "touchmove" && e.touches.length == 2)
    {
        isDragging = false
        handlePinch(e)
    }
}
function handlePinch(e)
{
    e.preventDefault()
    
    let touch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    let touch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY }
    
    // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
    let currentDistance = (touch1.x - touch2.x)**2 + (touch1.y - touch2.y)**2
    
    if (initialPinchDistance == null)
    {
        initialPinchDistance = currentDistance
    }
    else
    {
        adjustZoom( null, currentDistance/initialPinchDistance )
    }
}

function adjustZoom(zoomAmount, zoomFactor)
{
    if (!isDragging)
    {
        if (zoomAmount)
        {
            cameraZoom += zoomAmount
        }
        else if (zoomFactor)
        {
            console.log(zoomFactor)
            cameraZoom = zoomFactor*lastZoom
        }
        
        cameraZoom = Math.min( cameraZoom, MAX_ZOOM )
        cameraZoom = Math.max( cameraZoom, MIN_ZOOM )
        
        console.log(zoomAmount)
    }
}