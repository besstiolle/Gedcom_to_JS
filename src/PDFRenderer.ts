import { jsPDF } from "jspdf"
import { svg2pdf } from "svg2pdf.js"
import { AbstractPdfRenderer } from './AbstractPdfRenderer'
import { Store } from "./Store"



const PDF_HARD_LIMIT = 5080 //PDF is limited to 5080 mm max https://github.com/parallax/jsPDF/issues/705

export class PDFRenderer extends AbstractPdfRenderer{
  
  constructor(){super()}

  generatePdf(){

    super.generatePdf()

    if(Store.positionYMax < Store.positionXMax){
      this.orientation = 'l'
    }

    let ratioUsed = PDFRenderer.RATIO_PX_2_CM
    if(this.orientation == 'l' && Store.positionXMax / PDFRenderer.RATIO_PX_2_CM * 10 > PDF_HARD_LIMIT){
      ratioUsed = Store.positionXMax * 10 / PDF_HARD_LIMIT
    }
    if(this.orientation == 'p' && Store.positionYMax / PDFRenderer.RATIO_PX_2_CM * 10 > PDF_HARD_LIMIT){
      ratioUsed = Store.positionYMax * 10 / PDF_HARD_LIMIT
    }

    this.pdf = new jsPDF(this.orientation, 'cm', [Store.positionXMax / ratioUsed, Store.positionYMax / ratioUsed])

    // render the svg element
    let promise = svg2pdf(this.svgElement, this.pdf, {
      x:0,
      y:0,
      width:Store.positionXMax / ratioUsed,
      height:Store.positionYMax / ratioUsed
    })

    this.resolveSvg2Pdf(promise)
  }

  static expectedSize(){
    return {x:Store.positionXMax / PDFRenderer.RATIO_PX_2_CM, y:Store.positionYMax / PDFRenderer.RATIO_PX_2_CM}
  }
}