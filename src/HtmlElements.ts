
export const _HE_FILE:HTMLInputElement = <HTMLInputElement>document.getElementById('file')
export const _HE_FORM:HTMLFormElement = <HTMLFormElement>document.getElementById('box')

export const _HE_PDF_ACTION_BUTTON:HTMLElement = document.getElementById('pdf1')
export const _HE_PDF_MULTIPAGE_ACTION_BUTTON:HTMLElement = document.getElementById('pdf2')
export const _HE_PNG_ACTION_BUTTON:HTMLElement = document.getElementById('img1')
export const _HE_OPTIONS_ACTION_BUTTON:HTMLElement = document.getElementById('showOptions')

export const _HE_SVGWRAPPER:HTMLElement = document.getElementById('svgWrapper')
export const _HE_MINISVGWRAPPER:HTMLElement = document.getElementById('minimapWrapper')
export const _HE_ROOT_INPUT:HTMLInputElement = <HTMLInputElement>document.getElementById('inputRoot')
export const _HE_ROOT_EXEC:HTMLElement = document.getElementById('execRoot')
export const _HE_ROOT_CANCEL:HTMLElement = document.getElementById('cancelRoot')
export const _HE_ROOT_SWITCH:HTMLElement = document.getElementById('switchRoot')
export const _HE_ROOT_RESULTS:HTMLSelectElement = <HTMLSelectElement>document.getElementById('resultsRoot')
export const _HE_ROOT_SELECTWRAPPER:HTMLElement = document.getElementById('selectRootWrapper')
export const _HE_ROOT_NORESULT:HTMLElement = document.getElementById('noResult')
export const _HE_PROGRESSBAR:HTMLElement = document.getElementById('progressBar')
export const _HE_PROGRESSBAR_SUB:HTMLElement = document.getElementById('subProgressBar')
export const _HE_PROGRESSBAR_TXT:HTMLElement = document.getElementById('textProgressBar')
export const _HE_HEADER:HTMLElement = document.getElementById('header')
export const _HE_PDFWRAPPER:HTMLElement = document.getElementById('pdfobjectWrapper')
export const _HE_STARTTYPE:HTMLElement = document.getElementById('startType')
export const _HE_WAIT:HTMLElement = document.getElementById('wait')
export const _HE_WAIT_CPT:HTMLElement = document.getElementById('wait_cpt')
export const _HE_MESSAGE:HTMLElement = document.getElementById('message')


/* Options section */
export const _HE_OPTIONS:HTMLElement = document.getElementById('options')
export const _HE_OPTIONS_WALL:HTMLElement = document.getElementById('optionsWall')
export const _HE_OPTIONS_IMPLEXES_NOTHING:HTMLInputElement = <HTMLInputElement>document.getElementById('nothing')
export const _HE_OPTIONS_IMPLEXES_HIDE:HTMLInputElement = <HTMLInputElement>document.getElementById('hide')
export const _HE_OPTIONS_IMPLEXES_COLOR:HTMLInputElement = <HTMLInputElement>document.getElementById('color')
export const _HE_OPTIONS_IMPLEXES_COLOR_HIDE:HTMLInputElement = <HTMLInputElement>document.getElementById('colorHide')
export const _HE_OPTIONS_TEMPLATE:HTMLInputElement = <HTMLInputElement>document.getElementById('tpl')
export const _HE_OPTIONS_TEMPLATE_RESET:HTMLElement = <HTMLElement>document.getElementById('tpl_reset')
export const _HE_OPTIONS_MAXGEN:HTMLInputElement = <HTMLInputElement>document.getElementById('maxGeneration')
export const _HE_OPTIONS_SUBMIT:HTMLInputElement = <HTMLInputElement>document.getElementById('submitOptions')

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