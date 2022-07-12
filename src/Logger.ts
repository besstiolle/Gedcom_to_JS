export class Logger{
    static timerStart:number = null
    static timerStep:number = null

    static init(){

        Logger.timerStart = Date.now()
        Logger.timerStep = Date.now()
    }
    
    static log(message:string){
        console.debug(message + " ms elapsed = " + (Date.now()-Logger.timerStep) + "ms" +  " / " + (Date.now()-Logger.timerStart) + "ms")
        Logger.timerStep = Date.now()
    }
}