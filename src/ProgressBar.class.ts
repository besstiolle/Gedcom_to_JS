import { hide, _HTML_ELEMENT__PROGRESSBAR, _HTML_ELEMENT__PROGRESSBAR_SUB, _HTML_ELEMENT__PROGRESSBAR_TXT } from "./HtmlElements"

export class ProgressBar{

  nbSteps:number = null
  currentStep:number = null
  message:string = null

  constructor(nbSteps:number){
    this.nbSteps = nbSteps
    this.currentStep = 0
    this.message = ""
    this.render()
  }

  initiateProgressBar(message:string){
    this.message = message
    this.currentStep = 0
    this.render()
  }

  movingProgressBar(message:string){
    this.message = message
    this.currentStep++
    this.render()
  }

  hidingProgressBar(){
    hide([_HTML_ELEMENT__PROGRESSBAR])
  }

  render(){
    _HTML_ELEMENT__PROGRESSBAR_SUB.style.width = this.currentStep * (100 / this.nbSteps) + '%'
    _HTML_ELEMENT__PROGRESSBAR_TXT.innerHTML = this.message
  }
}
