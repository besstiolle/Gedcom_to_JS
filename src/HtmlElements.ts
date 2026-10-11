
export const _HE_FILE:HTMLInputElement = document.getElementById('file') as HTMLInputElement
export const _HE_FORM:HTMLFormElement = document.getElementById('box') as HTMLFormElement

export const _HE_PDF_ACTION_BUTTON:HTMLElement = document.getElementById('pdf1') as HTMLElement
export const _HE_PDF_MULTIPAGE_ACTION_BUTTON:HTMLElement = document.getElementById('pdf2') as HTMLElement
export const _HE_PNG_ACTION_BUTTON:HTMLElement = document.getElementById('img1') as HTMLElement
export const _HE_OPTIONS_ACTION_BUTTON:HTMLElement = document.getElementById('showOptions') as HTMLElement

export const _HE_SVGWRAPPER:HTMLElement = document.getElementById('svgWrapper') as HTMLElement
export const _HE_MINISVGWRAPPER:HTMLElement = document.getElementById('minimapWrapper') as HTMLElement
export const _HE_ROOT_INPUT:HTMLInputElement = <HTMLInputElement>document.getElementById('inputRoot') as HTMLInputElement
export const _HE_ROOT_EXEC:HTMLElement = document.getElementById('execRoot') as HTMLElement
export const _HE_ROOT_CANCEL:HTMLElement = document.getElementById('cancelRoot') as HTMLElement
export const _HE_ROOT_SWITCH:HTMLElement = document.getElementById('switchRoot') as HTMLElement
export const _HE_ROOT_RESULTS:HTMLSelectElement = <HTMLSelectElement>document.getElementById('resultsRoot') as HTMLSelectElement
export const _HE_ROOT_SELECTWRAPPER:HTMLElement = document.getElementById('selectRootWrapper') as HTMLElement
export const _HE_ROOT_NORESULT:HTMLElement = document.getElementById('noResult') as HTMLElement
export const _HE_PROGRESSBAR:HTMLElement = document.getElementById('progressBar') as HTMLElement
export const _HE_PROGRESSBAR_SUB:HTMLElement = document.getElementById('subProgressBar') as HTMLElement
export const _HE_PROGRESSBAR_TXT:HTMLElement = document.getElementById('textProgressBar') as HTMLElement
export const _HE_HEADER:HTMLElement = document.getElementById('header') as HTMLElement
export const _HE_PDFWRAPPER:HTMLElement = document.getElementById('pdfobjectWrapper') as HTMLElement
export const _HE_STARTTYPE:HTMLElement = document.getElementById('startType') as HTMLElement
export const _HE_WAIT:HTMLElement = document.getElementById('wait') as HTMLElement
export const _HE_WAIT_CPT:HTMLElement = document.getElementById('wait_cpt') as HTMLElement
export const _HE_MESSAGE:HTMLElement = document.getElementById('message') as HTMLElement


/* Options section */
export const _HE_OPTIONS:HTMLElement = document.getElementById('options') as HTMLElement
export const _HE_OPTIONS_WALL:HTMLElement = document.getElementById('optionsWall') as HTMLElement
export const _HE_OPTIONS_IMPLEXES_NOTHING:HTMLInputElement = document.getElementById('nothing') as HTMLInputElement
export const _HE_OPTIONS_IMPLEXES_HIDE:HTMLInputElement = document.getElementById('hide') as HTMLInputElement
export const _HE_OPTIONS_IMPLEXES_COLOR:HTMLInputElement = document.getElementById('color') as HTMLInputElement
export const _HE_OPTIONS_IMPLEXES_COLOR_HIDE:HTMLInputElement = document.getElementById('colorHide') as HTMLInputElement
export const _HE_OPTIONS_TEMPLATE:HTMLInputElement = document.getElementById('tpl') as HTMLInputElement
export const _HE_OPTIONS_TEMPLATE_RESET:HTMLElement = <HTMLElement>document.getElementById('tpl_reset') as HTMLInputElement
export const _HE_OPTIONS_MAXGEN:HTMLInputElement = document.getElementById('maxGeneration') as HTMLInputElement
export const _HE_OPTIONS_SUBMIT:HTMLInputElement = document.getElementById('submitOptions') as HTMLInputElement

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