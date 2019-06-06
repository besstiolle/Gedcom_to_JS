class TaskOrchestrator{
  constructor(){
      this.tasks = []
      this.timerStart = Date.now();
      this.timerStep = Date.now()
  }

  add(commande, args, message){
    this.tasks.push([commande, args, message])
  }

  run(){
    if(this.tasks.length == 0){
      return
    }

    let taskCommande  = this.tasks[0][0] // Commande
    let taskArgs      = this.tasks[0][1] // Args
    let taskMessage   = this.tasks[0][2] // Custom Message

    progressBar.movingProgressBar(taskMessage);

    setTimeout(() => {
      this.timer("Start " + taskMessage)
      taskCommande(...taskArgs)
      this.timer("End " + taskMessage)

      //Remove first task
      this.tasks.shift()
      //Rerun myself
      this.run()
    }, 20);
  }

  timer(message){
    console.log(message + " ms elapsed = " + (Date.now()-this.timerStep) + "ms" +  " / " + (Date.now()-this.timerStart) + "ms");
    this.timerStep = Date.now()
  }

}
