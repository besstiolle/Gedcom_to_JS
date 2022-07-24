import jsPDF from "jspdf"
import { hide, purge, show, _HE_PDFWRAPPER, _HE_SVGWRAPPER, _HE_WAIT } from "./HtmlElements"
import { Store } from "./Store"
import { SVGRenderer } from "./SVGRenderer"


export class AbstractPdfRenderer{

    protected svgElement = _HE_SVGWRAPPER.getElementsByTagName("svg")[0]
    protected orientation:'p'|'l' = 'p'
    protected static RATIO_PX_2_CM = 40 //Default Ratio px => cm
    protected pdf:jsPDF = null

    protected previous = {viewbox:'', w:'0', h:'0', zoom:0}

    constructor(){}

    protected generatePdf(){
        
        //Show Waiting spinner & PDF Wrapper
        show([_HE_WAIT, _HE_PDFWRAPPER])

        //Purge all previous <embed /> tag generated
        purge(_HE_PDFWRAPPER)

        //Saving current setting
        let comp = window.getComputedStyle(_HE_SVGWRAPPER)

        this.previous = {viewbox:SVGRenderer.container.viewbox().toString(), 
                        w:comp.getPropertyValue('width'), 
                        h:comp.getPropertyValue('height'), 
                        zoom:SVGRenderer.container.zoom()}

        this.pdfViewBox()        
    }

    protected resolveSvg2Pdf(promise:Promise<jsPDF>){
        promise.then((jspdf) => {
        const uri = jspdf.output('datauristring')
        if(uri.length < 5000000){
            let pdfobject = document.createElement("embed")
            pdfobject.setAttribute("src", uri)
            pdfobject.id = "pdfobject"
            pdfobject.type = "application/pdf"
            _HE_PDFWRAPPER.appendChild(pdfobject)
        } else {
            jspdf.save('myPDF.pdf')
            hide([_HE_PDFWRAPPER])
        }

        }).finally(()=>{
            hide([_HE_WAIT])
        
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