import { Box } from "@svgdotjs/svg.js"
import jsPDF from "jspdf"
import { hide, show, _HTML_ELEMENT__PDF, _HTML_ELEMENT__PDFWRAPPER, _HTML_ELEMENT__SVGWRAPPER, _HTML_ELEMENT__WAIT } from "./HtmlElements"
import { Store } from "./Store"
import { SVGRenderer } from "./SVGRenderer"


export class AbstractPdfRenderer{

    protected svgElement = document.getElementsByTagName("svg")[0]
    protected orientation:'p'|'l' = 'p'
    protected static RATIO_PX_2_CM = 40 //Default Ratio px => cm
    protected pdf:jsPDF = null

    protected previous = {viewbox:'', w:'0', h:'0', zoom:0}

    constructor(){}

    protected generatePdf(){
        
        //Show Waiting spinner & PDF Wrapper
        show([_HTML_ELEMENT__WAIT, _HTML_ELEMENT__PDFWRAPPER])
        
        //Clear previous SRC value
        _HTML_ELEMENT__PDF.removeAttribute('src')

        //Saving current setting
        let comp = window.getComputedStyle(_HTML_ELEMENT__SVGWRAPPER)

        this.previous = {viewbox:SVGRenderer.container.viewbox().toString(), 
                        w:comp.getPropertyValue('width'), 
                        h:comp.getPropertyValue('height'), 
                        zoom:SVGRenderer.container.zoom()}
        let zoom = 


        this.pdfViewBox()        
    }

    protected resolveSvg2Pdf(promise:Promise<jsPDF>){
        promise.then((jspdf) => {
        const uri = jspdf.output('datauristring')
        if(uri.length < 5000000){
            _HTML_ELEMENT__PDF.setAttribute("src", uri)
        } else {
            jspdf.save('myPDF.pdf')
        }

        }).finally(()=>{
            hide([_HTML_ELEMENT__WAIT])
        
            //Reset information post pdf generation                  
            SVGRenderer.container
                .viewbox(this.previous.viewbox)
                .size(this.previous.w, this.previous.h)
                .zoom(this.previous.zoom)

        })    
    }
    
    protected pdfViewBox(){
        let w = 100
        if(Store.positionXMax / window.innerWidth < Store.positionYMax / window.innerHeight){
            w = (window.innerWidth * 100 / (Store.positionYMax * window.innerHeight / window.innerWidth))
        }

        SVGRenderer.container
            .viewbox( 0,  0 , Store.positionXMax ,Store.positionYMax)
            .size(w + '%', '100%')
    }
}