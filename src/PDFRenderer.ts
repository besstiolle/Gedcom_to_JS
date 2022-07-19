import { jsPDF } from "jspdf"
import { Store } from "./Store"


export function generatePdf(){

/*  pdfViewBox()*/

  const con = 4 //Ratio px => mm
  const pdfobjectWrapper = document.getElementById("pdfobjectWrapper")
  const canvas = document.getElementById("canvas")
  let pdfobject:HTMLEmbedElement = <HTMLEmbedElement>document.getElementById("pdfobject")

  //Show Wrapper
  pdfobjectWrapper.classList.remove("hidden")

  let orientation:'p'|'l' = 'l'
  if(Store.positionYMax > Store.positionXMax){
    orientation = 'p'
  }

  // idea : https://stackoverflow.com/questions/23681325/convert-canvas-to-pdf
  let imgData = canvas.toDataURL("image/jpeg", 1.0)

  let pdf = new jsPDF(orientation, 'mm', [Store.positionXMax / con, Store.positionYMax / con])
  pdf.addImage(imgData, 'JPEG', 0, 0)
  
  // render the svg element
 /* svg2pdf(svgElement, pdf, {
    x:0,
    y:0,
    width:Store.positionXMax / con,
    height:Store.positionYMax / con
    //scale:1
  }).then(() => {*/
    const uri = pdf.output('datauristring')
    if(uri.length < 5000000){

      //TODO : creating HTMLEmbededElement in template.
      //TODO : better naming like in timelineProject's download
      if(pdfobject == undefined){
        pdfobject = document.createElement("embed")
        pdfobject.setAttribute("src", uri)
        pdfobject.id = "pdfobject"
        pdfobject.type = "application/pdf"
        pdfobjectWrapper.appendChild(pdfobject)
      } else {
        pdfobject.setAttribute("src", uri)
      }
    } else {
      //TODO : better naming
      pdf.save('myPDF.pdf')
    }
    
    //Reset information post pdf generation
    //TODO restoring previous position 
 /*   SVGRenderer.svgViewBox()*/
/*  })*/    

}
/*

export function pdfViewBox(){
  
  let w = 100
  if(Store.positionXMax / window.innerWidth < Store.positionYMax / window.innerHeight){
    w = (window.innerWidth * 100 / (Store.positionYMax * window.innerHeight / window.innerWidth))
  }

  SVGRenderer.container
    .viewbox( 0,  0 , Store.positionXMax ,Store.positionYMax)
    .size(w + '%', '100%')
    

  return
  //window.innerWidth / Store.positionXMax
  //window.innerHeight / Store.positionYMax
  SVGRenderer.container
    .viewbox(0, 0, Store.positionXMax ,Store.positionYMax)
    
    //.size(window.innerWidth , window.innerHeight)
    .size(window.innerWidth , window.innerHeight)
    .zoom(10)
}*/
