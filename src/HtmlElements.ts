
export const _HTML_ELEMENT__FILE:HTMLInputElement = <HTMLInputElement>document.getElementById('file')
export const _HTML_ELEMENT__FORM:HTMLFormElement = <HTMLFormElement>document.getElementById('box')
export const _HTML_ELEMENT__PDF_ACTION_BUTTON:HTMLElement = document.getElementById('pdf1')
export const _HTML_ELEMENT__PDF_MULTIPAGE_ACTION_BUTTON:HTMLElement = document.getElementById('pdf2')
export const _HTML_ELEMENT__PNG_ACTION_BUTTON:HTMLElement = document.getElementById('img1')
export const _HTML_ELEMENT__SVGWRAPPER:HTMLElement = document.getElementById('svgWrapper')
export const _HTML_ELEMENT__ROOT_INPUT:HTMLInputElement = <HTMLInputElement>document.getElementById('inputRoot')
export const _HTML_ELEMENT__ROOT_EXEC:HTMLElement = document.getElementById('execRoot')
export const _HTML_ELEMENT__ROOT_CANCEL:HTMLElement = document.getElementById('cancelRoot')
export const _HTML_ELEMENT__ROOT_SWITCH:HTMLElement = document.getElementById('switchRoot')
export const _HTML_ELEMENT__ROOT_RESULTS:HTMLSelectElement = <HTMLSelectElement>document.getElementById('resultsRoot')
export const _HTML_ELEMENT__ROOT_SELECTWRAPPER:HTMLElement = document.getElementById('selectRootWrapper')
export const _HTML_ELEMENT__ROOT_NORESULT:HTMLElement = document.getElementById('noResult')
export const _HTML_ELEMENT__PROGRESSBAR:HTMLElement = document.getElementById('progressBar')
export const _HTML_ELEMENT__PROGRESSBAR_SUB:HTMLElement = document.getElementById('subProgressBar')
export const _HTML_ELEMENT__PROGRESSBAR_TXT:HTMLElement = document.getElementById('textProgressBar')
export const _HTML_ELEMENT__HEADER:HTMLElement = document.getElementById('header')
export const _HTML_ELEMENT__PDFWRAPPER:HTMLElement = document.getElementById('pdfobjectWrapper')
export const _HTML_ELEMENT__STARTTYPE:HTMLElement = document.getElementById('startType')
export const _HTML_ELEMENT__WAIT:HTMLElement = document.getElementById('wait')
export const _HTML_ELEMENT__WAIT_CPT:HTMLElement = document.getElementById('wait_cpt')
export const _HTML_ELEMENT__MESSAGE:HTMLElement = document.getElementById('message')


export function hide(htmlElementIds:HTMLElement[]){
  htmlElementIds.forEach(htmlElement => {
    htmlElement.classList.add('hidden')
  })
}
export function show(htmlElementIds:HTMLElement[]){
  htmlElementIds.forEach(htmlElement => {
      htmlElement.classList.remove('hidden')
  })
}
export function purge(htmlElement:HTMLElement){
  // .innerHtml='' is not recommended because it doesn’t remove the event handlers of the child nodes, which might cause a memory leak.
  while (htmlElement.firstChild) {
    htmlElement.removeChild(htmlElement.firstChild)
  }
}