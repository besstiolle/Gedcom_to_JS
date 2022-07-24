import { Box, Container, Rect, Svg, SVG } from "@svgdotjs/svg.js"

import { Store } from "./Store"
import { _HE_FORM, _HE_MINISVGWRAPPER as _HE_MINIMAPWRAPPER, _HE_SVGWRAPPER } from "./HtmlElements"
import { SVGRenderer } from "./SVGRenderer"

export class MinimapRenderer {
  
  static minimap:Container = null
  static focus:Rect = null

  static drawMinimap(){

    MinimapRenderer.minimap = SVG().addTo(_HE_MINIMAPWRAPPER)
    MinimapRenderer.minimapResize()
    MinimapRenderer.minimapBox()
  }

  static minimapResize(){
    const max = 200
    const min = 100
    let w,h = 0 
    if(Store.positionXMax > Store.positionYMax){
      w = max
      h = Math.max(min,Store.positionYMax * max / Store.positionXMax)
    } else {
      w = Math.max(min,Store.positionXMax * max / Store.positionYMax)
      h = max
    }
    _HE_MINIMAPWRAPPER.style.width = w+'px'
    _HE_MINIMAPWRAPPER.style.height = h+'px'
    //Reset focus rect
    MinimapRenderer.focus = null
  }

  static plugEvents(){
    //Event on the main SVG
    let svgTag = _HE_SVGWRAPPER.getElementsByTagName("svg")[0]
    svgTag.addEventListener("zoom", function( event ) {MinimapRenderer.drawFocus()}, false);
    svgTag.addEventListener("mousedown ", function( event ) {MinimapRenderer.drawFocus()}, false);
    svgTag.addEventListener("mouseup", function( event ) {MinimapRenderer.drawFocus()}, false);

    //Event on the main SVG
    let minimapTag = _HE_MINIMAPWRAPPER.getElementsByTagName("svg")[0]
    minimapTag.addEventListener("mousedown ", function( event:MouseEvent ) {SVGRenderer.changeFocus(event)}, false);
    minimapTag.addEventListener("mouseup", function( event:MouseEvent ) {SVGRenderer.changeFocus(event)}, false);
  }

  static drawFocus(){
    let box:Box = SVGRenderer.container.viewbox()

    if(this.focus == null){
      this.focus = MinimapRenderer.minimap.rect(1, 1)
                      .fill("rgba(255, 0, 0, 0.2)")
                      .move(-10000, -10000)
                      .stroke({ width: 2, color: "rgba(255, 0, 0, 0.37)" })
                      .front()
    }

    this.focus.x(box.x).y(box.y).width(box.width).height(box.height)
  }


  static minimapBox(){
    (<Svg>MinimapRenderer.minimap
      .viewbox( 0,  0 , Store.positionXMax , Store.positionYMax)
      .size('100%','100%'))
  }

}
