import { jsPDF } from "jspdf"
import { svg2pdf } from "svg2pdf.js"
import { AbstractPdfRenderer } from './AbstractPdfRenderer'
import { _HTML_ELEMENT__WAIT_CPT } from './HtmlElements'
import { Store } from "./Store"
import { SVGRenderer } from "./SVGRenderer"



export class MultiPDFRenderer extends AbstractPdfRenderer{

  PDF_MULTIPAGE_MARGIN_CM = 1 //Margin on each pdf page in cm
    
  constructor(){super()}

  generatePdf(){

    super.generatePdf()

    let pdf = new jsPDF(this.orientation, "cm", "a4")

    let padWidth = pdf.internal.pageSize.getWidth() - 2 * this.PDF_MULTIPAGE_MARGIN_CM
    let padHeight = pdf.internal.pageSize.getHeight() - 2 * this.PDF_MULTIPAGE_MARGIN_CM

    let totalPages = MultiPDFRenderer.expectedPageCount()

    setTimeout(() => {
      let promise = this.addPage(this.svgElement, pdf, 0, padWidth, 0, padHeight, 0, totalPages)
      this.resolveSvg2Pdf(promise)
    }, 1)
  }


  private addPage(svgElement:SVGSVGElement, pdf:jsPDF, _x:number, padWidthCm:number, _y:number, padHeightCm:number, step:number, totalPages:number):Promise<jsPDF>{
    let isEnd = false
    return new Promise((resolve) => {
      
      this.pdfPartialViewBox(_x * padWidthCm * MultiPDFRenderer.RATIO_PX_2_CM,
                             _y * padHeightCm * MultiPDFRenderer.RATIO_PX_2_CM,
                             padWidthCm * MultiPDFRenderer.RATIO_PX_2_CM,
                             padHeightCm * MultiPDFRenderer.RATIO_PX_2_CM)

      svg2pdf(svgElement, pdf, {
        x:this.PDF_MULTIPAGE_MARGIN_CM, // x & y position inside the PDF so => 0,0 +/- the pdf margin
        y:this.PDF_MULTIPAGE_MARGIN_CM, 
        width:padWidthCm, //Largeur prise sur le PDF => A4 = padWidth
        height:padHeightCm, //Largeur prise sur le PDF => A4 = padWidth
      }).then(() => {
        
        _y++
        //If we reach the bottom of the SVG
        if(_y * padHeightCm > Store.positionYMax / MultiPDFRenderer.RATIO_PX_2_CM){
          _y = 0
          _x++
          //If we reach the bottom/right of the SVG
          if(_x * padWidthCm > Store.positionXMax / MultiPDFRenderer.RATIO_PX_2_CM){
            isEnd = true
          }
        }

        if(isEnd){
          resolve(pdf)
        } else {
          pdf.addPage()
          step++
          _HTML_ELEMENT__WAIT_CPT.innerHTML=`${step} / ${totalPages}`
          setTimeout(() => {
            this.addPage(svgElement, pdf, _x, padWidthCm, _y, padHeightCm, step, totalPages).then(()=>{
              resolve(pdf)
            })
          }, 1)
        }
      })
    })    
}
  private pdfPartialViewBox(x:number, y:number, width:number, height:number){
    SVGRenderer.container
      .viewbox( x,  y , width ,height)
      .size('100%', '100%')
  }

  static expectedPageCount():number{
    return Math.ceil(Store.positionXMax / MultiPDFRenderer.RATIO_PX_2_CM / (21 - 2)) * Math.ceil(Store.positionYMax / MultiPDFRenderer.RATIO_PX_2_CM / (29.7 -2))
  }

}