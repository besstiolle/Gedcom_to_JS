class ProgressBar{

  constructor(nbSteps){
    this.nbSteps = nbSteps
    this.htmlElement = document.getElementById('progressBar')
    this.advanceHtmlElement = document.getElementById('subProgressBar')
    this.textHtmlElement = document.getElementById('textProgressBar')
    this.currentStep = 0
    this.message = ""
    this.render()
  }

  initiateProgressBar = function(message){
    this.message = message
    this.currentStep = 0
    this.render()
  }

  movingProgressBar = function(message){
    this.message = message
    this.currentStep++
    console.log(document.getElementById('textProgressBar'))
    document.getElementById('subProgressBar').style.width = this.currentStep * (100 / this.nbSteps) + '%'
    document.getElementById('textProgressBar').innerHTML = this.message
  //  this.render()
  }

  hidingProgressBar = function(){
    this.htmlElement.classList.add('hidden')
  }

  render = function(){
    this.advanceHtmlElement.style.width = this.currentStep * (100 / this.nbSteps) + '%'
    this.textHtmlElement.innerHTML = this.message
    console.info(">>>>" + this.message)
    console.info(">>>>" + this.textHtmlElement.innerHTML)
    //window.requestAnimationFrame
  }
}
