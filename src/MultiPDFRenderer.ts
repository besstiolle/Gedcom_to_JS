import '@svgdotjs/svg.panzoom.js'
import { jsPDF } from "jspdf"
import { svg2pdf } from "svg2pdf.js"
import { hide, show, _HTML_ELEMENT__PDF, _HTML_ELEMENT__PDFWRAPPER, _HTML_ELEMENT__WAIT, _HTML_ELEMENT__WAIT_CPT } from './HtmlElements'
import { ProgressBar } from './ProgressBar.class'
import { Store } from "./Store"
import { SVGRenderer } from "./SVGRenderer"


export const RATIO_PX_2_CM = 40 //Default Ratio px => cm
const PDF_MULTIPAGE_MARGIN_CM = 1 //Margin on each pdf page in cm

export function generateMultipagePdf(){

  //Show Waiting spinner & PDF Wrapper
  show([_HTML_ELEMENT__WAIT, _HTML_ELEMENT__PDFWRAPPER])
  
  //Clear previous SRC value
  _HTML_ELEMENT__PDF.src='.'

  pdfViewBox()

  const svgElement = document.getElementsByTagName("svg")[0]

  let orientation:'p'|'l' = 'p'

  let pdf = new jsPDF(orientation, "cm", "a4")

  let padWidth = pdf.internal.pageSize.getWidth() - 2 * PDF_MULTIPAGE_MARGIN_CM
  let padHeight = pdf.internal.pageSize.getHeight() - 2 * PDF_MULTIPAGE_MARGIN_CM

  let total = Math.ceil(Store.positionXMax / RATIO_PX_2_CM / (21 - 2)) * Math.ceil(Store.positionYMax / RATIO_PX_2_CM / (29.7 -2))

  setTimeout(() => {
    addPage(svgElement, pdf, 0, padWidth, 0, padHeight, 0, total).then((pdfOutput) =>{
      const uri = pdfOutput.output('datauristring')
      if(uri.length < 5000000){
        _HTML_ELEMENT__PDF.setAttribute("src", uri)
      } else {
        pdfOutput.save('myPDF.pdf')
      }
    
      hide([_HTML_ELEMENT__WAIT])
          
      //Reset information post pdf generation
      //TODO restoring previous position 
      SVGRenderer.svgViewBox()
    })
  }, 1)

  
  
}

function addPage(svgElement:SVGSVGElement, pdf:jsPDF, _x:number, padWidthCm:number, _y:number, padHeightCm:number, step:number, total:number):Promise<jsPDF>{
    let isEnd = false
    return new Promise((resolve) => {
      pdfPartialViewBox(_x * padWidthCm * RATIO_PX_2_CM  ,_y * padHeightCm * RATIO_PX_2_CM , padWidthCm * RATIO_PX_2_CM  , padHeightCm * RATIO_PX_2_CM  )
      svg2pdf(svgElement, pdf, {
        x:PDF_MULTIPAGE_MARGIN_CM, // x & y position inside the PDF so => 0,0 +/- the pdf margin
        y:PDF_MULTIPAGE_MARGIN_CM, 
        width:padWidthCm, //Largeur prise sur le PDF => A4 = padWidth
        height:padHeightCm, //Largeur prise sur le PDF => A4 = padWidth
      }).then(() => {
        
        _y++
        //If we reach the bottom of the SVG
        if(_y * padHeightCm > Store.positionYMax / RATIO_PX_2_CM){
          _y = 0
          _x++
          //If we reach the bottom/right of the SVG
          if(_x * padWidthCm > Store.positionXMax / RATIO_PX_2_CM){
            isEnd = true
          }
        }

        if(isEnd){
          resolve(pdf)
        } else {
          pdf.addPage()
          step++
          _HTML_ELEMENT__WAIT_CPT.innerHTML=`${step} / ${total}`
          setTimeout(() => {
            addPage(svgElement, pdf, _x, padWidthCm, _y, padHeightCm, step, total).then(()=>{
              resolve(pdf)
            })
          }, 1)
        }
      })
    })    
}


export function pdfPartialViewBox(x:number, y:number, width:number, height:number){
  SVGRenderer.container
    .viewbox( x,  y , width ,height)
    .size('100%', '100%')
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
