import '@svgdotjs/svg.panzoom.js'
import { jsPDF } from "jspdf"
import { svg2pdf } from "svg2pdf.js"
import { hide, show, _HTML_ELEMENT__PDF, _HTML_ELEMENT__PDFWRAPPER, _HTML_ELEMENT__WAIT } from './HtmlElements'
import { Store } from "./Store"
import { SVGRenderer } from "./SVGRenderer"


export function generatePdf(){

  show([_HTML_ELEMENT__WAIT])

  pdfViewBox()

  const RATIO_PX_2_MM = 4 //Ratio px => mm
  const svgElement = document.getElementsByTagName("svg")[0]

  //Show Wrapper
  show([_HTML_ELEMENT__PDFWRAPPER])

  let orientation:'p'|'l' = 'l'
  if(Store.positionYMax > Store.positionXMax){
    orientation = 'p'
  }
  const pdf = new jsPDF(orientation, 'mm', [Store.positionXMax / RATIO_PX_2_MM, Store.positionYMax / RATIO_PX_2_MM])

  // render the svg element
  svg2pdf(svgElement, pdf, {
    x:0,
    y:0,
    width:Store.positionXMax / RATIO_PX_2_MM,
    height:Store.positionYMax / RATIO_PX_2_MM
  }).then(() => {
    const uri = pdf.output('datauristring')
    if(uri.length < 5000000){
      _HTML_ELEMENT__PDF.setAttribute("src", uri)
    } else {
      pdf.save('myPDF.pdf')
    }

  }).finally(()=>{
      hide([_HTML_ELEMENT__WAIT])
        
    
      //Reset information post pdf generation
      //TODO restoring previous position 
      SVGRenderer.svgViewBox()

    })    
}


export function pdfViewBox(){
  
  let w = 100
  if(Store.positionXMax / window.innerWidth < Store.positionYMax / window.innerHeight){
    w = (window.innerWidth * 100 / (Store.positionYMax * window.innerHeight / window.innerWidth))
  }

  SVGRenderer.container
    .viewbox( 0,  0 , Store.positionXMax ,Store.positionYMax)
    .size(w + '%', '100%')
}
