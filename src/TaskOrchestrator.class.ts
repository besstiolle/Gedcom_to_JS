import { Logger } from "./Logger"
import { ProgressBar } from "./ProgressBar.class"

export class TaskOrchestrator{
  tasks:any[] = null
  progressBar:ProgressBar = null

  constructor(progressBar:ProgressBar){
      this.tasks = []
      this.progressBar = progressBar
  }

  add(commande:Function, args:any[], message:string):TaskOrchestrator{
    this.tasks.push([commande, args, message])
    return this
  }

  run():void{
    if(this.tasks.length == 0){
      return
    }

    let taskCommande  = this.tasks[0][0] // Commande
    let taskArgs      = this.tasks[0][1] // Args
    let taskMessage   = this.tasks[0][2] // Custom Message

    this.progressBar.movingProgressBar(taskMessage)

    setTimeout(() => {
      Logger.log("Start " + taskMessage)
      taskCommande(...taskArgs)
      Logger.log("End " + taskMessage)

      //Remove first task
      this.tasks.shift()
      //Rerun myself
      this.run()
    }, 1)
  }

}
