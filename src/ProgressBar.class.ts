import { hide, _HE_PROGRESSBAR, _HE_PROGRESSBAR_SUB, _HE_PROGRESSBAR_TXT } from "./HtmlElements"

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
    hide([_HE_PROGRESSBAR])
  }

  render(){
    _HE_PROGRESSBAR_SUB.style.width = this.currentStep * (100 / this.nbSteps) + '%'
    _HE_PROGRESSBAR_TXT.innerHTML = this.message
  }
}
