

import html2canvas from 'html2canvas';
import { hide, show, _HTML_ELEMENT__SVGWRAPPER as _HTML_ELEMENT__SVGWRAPPER, _HTML_ELEMENT__WAIT } from './HtmlElements';
import { Store } from './Store';
import { SVGRenderer } from './SVGRenderer';

/**
 * Generate a screenshot from the chart and save it on computer as a png image
 */
export function takeshot():void {  

    show([_HTML_ELEMENT__WAIT])

    let comp = window.getComputedStyle(_HTML_ELEMENT__SVGWRAPPER)
    
    let previous = {viewbox:SVGRenderer.container.viewbox().toString(), 
        w:comp.getPropertyValue('width'), 
        h:comp.getPropertyValue('height'), 
        zoom:SVGRenderer.container.zoom()}


    _HTML_ELEMENT__SVGWRAPPER.style.width = Store.positionXMax + 'px'
    _HTML_ELEMENT__SVGWRAPPER.style.height = Store.positionYMax + 'px'

    SVGRenderer.container
        .viewbox(0, 0, Store.positionXMax ,Store.positionYMax)
        .size(Store.positionXMax , Store.positionYMax)
        .zoom(1)


    html2canvas(_HTML_ELEMENT__SVGWRAPPER, {
        ignoreElements: function (el) {return el.classList.contains('toExcludeFromSnapshot')},
        logging:false
    }).then(function (canvas) {
        canvas.toBlob(function(blob) {
            download(blob, ".png")      
        })        
    }).finally(()=>{
        hide([_HTML_ELEMENT__WAIT])
        
        //Reset information post pdf generation                  
        SVGRenderer.container
            .viewbox(previous.viewbox)
            .size(previous.w, previous.h)
            .zoom(previous.zoom)

        _HTML_ELEMENT__SVGWRAPPER.style.width = ""
        _HTML_ELEMENT__SVGWRAPPER.style.height = ""

    })
}

/**
 * Implement a custom download file
 * @param blob the binaries to download
 * @param extensionName the name of the file
 */
function download(blob: Blob, extensionName:string):void{
    var url = URL.createObjectURL(blob)
    var downloadLink = document.createElement("a")
    downloadLink.href = url
    downloadLink.download = "gedcom_" 
                            + toYYYYMMDD_hhmm(new Date()) 
                            + extensionName
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink) 
}

/**
 * Return the date to a string validating the format YYYYMMDD_HHmm
 * @param date the date to parse into a ISO date format YYYYMMDD_HHmm
 * @returns string the format YYYYMMDD_HHmm
 */
export function toYYYYMMDD_hhmm(date:Date):string{
    return date.getFullYear().toString().padStart(4, '0')
        + (date.getMonth()+1).toString().padStart(2, '0')
        + date.getDate().toString().padStart(2, '0')
        + '_'
        + date.getHours().toString().padStart(2, '0')
        + date.getMinutes().toString().padStart(2, '0')
}