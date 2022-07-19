export class CanvasPanzoom {
  
  canvas:HTMLCanvasElement = null
  ctx = null
  cameraOffset:Object = { x: window.innerWidth/2, y: window.innerHeight/2 }
  cameraZoom:number = 1
  MAX_ZOOM:number = 5
  MIN_ZOOM:number = 0.1
  SCROLL_SENSITIVITY:number = 0.0005    
  isDragging:Boolean = false
  dragStart:Object = { x: 0, y: 0 }

  initialPinchDistance = null
  lastZoom:number = 1

  constructor(canvas:HTMLCanvasElement){

    CanvasPanzoom.canvas = canvas
    CanvasPanzoom.ctx = CanvasPanzoom.canvas.getContext("2d")

    // Translate to the canvas centre before zooming - so you'll always zoom on what you're looking directly at
    // https://codepen.io/chengarda/pen/wRxoyB
    ctx.translate( window.innerWidth / 2, window.innerHeight / 2 )
    ctx.scale(cameraZoom, cameraZoom)
    ctx.translate( -window.innerWidth / 2 + cameraOffset.x, -window.innerHeight / 2 + cameraOffset.y )

    canvas.addEventListener('mousedown', onPointerDown)
    canvas.addEventListener('touchstart', (e) => handleTouch(e, onPointerDown))
    canvas.addEventListener('mouseup', onPointerUp)
    canvas.addEventListener('touchend',  (e) => handleTouch(e, onPointerUp))
    canvas.addEventListener('mousemove', onPointerMove)
    canvas.addEventListener('touchmove', (e) => handleTouch(e, onPointerMove))
    canvas.addEventListener( 'wheel', (e) => adjustZoom(e.deltaY*SCROLL_SENSITIVITY))
    
    requestAnimationFrame( draw )

  }

  // Gets the relevant location from a mouse or single touch event
  getEventLocation(e){
      if (e.touches && e.touches.length == 1){
          return { x:e.touches[0].clientX, y: e.touches[0].clientY }
      }else if (e.clientX && e.clientY){
          return { x: e.clientX, y: e.clientY }        
      }
  }
  onPointerDown(e){
      isDragging = true
      dragStart.x = getEventLocation(e).x/cameraZoom - cameraOffset.x
      dragStart.y = getEventLocation(e).y/cameraZoom - cameraOffset.y
  }

  onPointerUp(e){
      isDragging = false
      initialPinchDistance = null
      lastZoom = cameraZoom
  }

  onPointerMove(e){
      if (isDragging){
          cameraOffset.x = getEventLocation(e).x/cameraZoom - dragStart.x
          cameraOffset.y = getEventLocation(e).y/cameraZoom - dragStart.y
      }
  }

  handleTouch(e, singleTouchHandler){
      if ( e.touches.length == 1 ){
          singleTouchHandler(e)
      }else if (e.type == "touchmove" && e.touches.length == 2){
          isDragging = false
          handlePinch(e)
      }
  }
  handlePinch(e){
      e.preventDefault()
      
      let touch1 = { x: e.touches[0].clientX, y: e.touches[0].clientY }
      let touch2 = { x: e.touches[1].clientX, y: e.touches[1].clientY }
      
      // This is distance squared, but no need for an expensive sqrt as it's only used in ratio
      let currentDistance = (touch1.x - touch2.x)**2 + (touch1.y - touch2.y)**2
      
      if (initialPinchDistance == null){
          initialPinchDistance = currentDistance
      }else{
          adjustZoom( null, currentDistance/initialPinchDistance )
      }
  }

  adjustZoom(zoomAmount, zoomFactor){
      if (!isDragging){
          if (zoomAmount){
              cameraZoom += zoomAmount
          }else if (zoomFactor){
              console.log(zoomFactor)
              cameraZoom = zoomFactor*lastZoom
          }
          
          cameraZoom = Math.min( cameraZoom, MAX_ZOOM )
          cameraZoom = Math.max( cameraZoom, MIN_ZOOM )
          
          console.log(zoomAmount)
      }
  }
}