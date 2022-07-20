import '@svgdotjs/svg.panzoom.js'
import { jsPDF } from "jspdf"
import { svg2pdf } from "svg2pdf.js"
import { hide, show, _HTML_ELEMENT__PDF, _HTML_ELEMENT__PDFWRAPPER, _HTML_ELEMENT__WAIT } from './HtmlElements'
import { Store } from "./Store"
import { SVGRenderer } from "./SVGRenderer"


const RATIO_PX_2_CM = 40 //Default Ratio px => cm
const PDF_HARD_LIMIT = 5080 //PDF is limited to 5080 mm max https://github.com/parallax/jsPDF/issues/705

export function generatePdf(){

  show([_HTML_ELEMENT__WAIT])

  pdfViewBox()

  const svgElement = document.getElementsByTagName("svg")[0]

  //Show Wrapper
  show([_HTML_ELEMENT__PDFWRAPPER])

  let orientation:'p'|'l' = 'l'
  if(Store.positionYMax > Store.positionXMax){
    orientation = 'p'
  }

  let ratioUsed = RATIO_PX_2_CM
  if(orientation == 'l' && Store.positionXMax / RATIO_PX_2_CM * 10 > PDF_HARD_LIMIT){
    ratioUsed = Store.positionXMax * 10 / PDF_HARD_LIMIT
  }
  if(orientation == 'p' && Store.positionYMax / RATIO_PX_2_CM * 10 > PDF_HARD_LIMIT){
    ratioUsed = Store.positionYMax * 10 / PDF_HARD_LIMIT
  }

  const pdf = new jsPDF(orientation, 'cm', [Store.positionXMax / ratioUsed, Store.positionYMax / ratioUsed])

  // render the svg element
  svg2pdf(svgElement, pdf, {
    x:0,
    y:0,
    width:Store.positionXMax / ratioUsed,
    height:Store.positionYMax / ratioUsed
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
