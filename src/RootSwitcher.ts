import { hide, purge, show, _HE_ROOT_EXEC, _HE_ROOT_INPUT, _HE_ROOT_NORESULT, _HE_ROOT_RESULTS, _HE_ROOT_SELECTWRAPPER, _HE_STARTTYPE, _HE_SVGWRAPPER } from "./HtmlElements"
import { Logger } from "./Logger"
import { Store } from "./Store"
import { Individual } from "./struct.class"


export function cancelRoot(){
    hide([_HE_ROOT_SELECTWRAPPER])
}

export function showRoot(){
    show([_HE_ROOT_SELECTWRAPPER])
}

export function typingRoot(){
    var searchTyped = _HE_ROOT_INPUT.value.trim()
    if(searchTyped.length < 4) {
        hide([_HE_STARTTYPE,_HE_ROOT_RESULTS, _HE_ROOT_EXEC, _HE_ROOT_NORESULT])
        return
    } else {
        hide([_HE_STARTTYPE])
    }

    var listSosa:number[] = []
    let mapResult:Map<number,number> = new Map<number,number>()
    let mapResultByPriority:Map<number,number[]> = new Map<number,number[]>()

    let searches = searchTyped.replace(/[ ]+/g," ").split(" ")
    let searchesRegex:RegExp[] = []
    searches.forEach(aSearch => {
        searchesRegex.push(new RegExp(aSearch, "ig"))
    });

    Logger.log("start A")
    Store.mapGedTechIdToIndividual.forEach((individual:Individual, sosa:number)=>{
        searchesRegex.forEach((oneSearchRegex)=>{            
            if(individual.firstname.search(oneSearchRegex) >=0 || individual.lastname.search(oneSearchRegex) >=0 ){
                listSosa.push(sosa)
                if(!mapResult.has(sosa)){
                    mapResult.set(sosa, 1)
                } else {
                    mapResult.set(sosa, mapResult.get(sosa) +1 )
                }
            }
        })        
    })
    Logger.log("start B")
    
    //A second round to invert map 
    let arrOfSOSA:number[] = []
    let maxPrio = 0
    mapResult.forEach((value, key) =>{

        if(!mapResultByPriority.has(value)){
            arrOfSOSA = []
        } else {
            arrOfSOSA = mapResultByPriority.get(value)
        }
        arrOfSOSA.push(key)
        mapResultByPriority.set(value, arrOfSOSA)
        if(maxPrio < value) {
            maxPrio = value
        }
    })

    showRoots(mapResultByPriority, maxPrio)
}

/**
 *  Fill the list of Sosa to show in the selector
 */
 export function showRoots(mapResultByPriority:Map<number,number[]>, maxPrio:number){

    if(maxPrio == 0){
        hide([_HE_ROOT_RESULTS, _HE_ROOT_EXEC])
        show([_HE_ROOT_NORESULT])
    } else {
        show([_HE_ROOT_RESULTS, _HE_ROOT_EXEC])
        hide([_HE_ROOT_NORESULT])
    }
    
    //Purge Select
    purge(_HE_ROOT_RESULTS)

    let textnode:Text = null
    let node:HTMLElement = null
    let bDate:string = null
    let dDate:string = null
    let individual:Individual = null

    let emoj1:string  = "❤️"
    let prefix:string =""

    for(let i = maxPrio; i>0; i--){
        prefix = emoj1.repeat(i)
        if(mapResultByPriority.has(i)){
            for(let oneSosa of mapResultByPriority.get(i)){
                individual = Store.mapGedTechIdToIndividual.get(oneSosa)
                bDate = individual.birthDate !== undefined?individual.birthDate:"?"
                dDate = individual.deathDate !== undefined?individual.deathDate:"?"
                textnode = document.createTextNode(`${prefix} ${individual.firstname} ${individual.lastname} (${bDate}-${dDate})`)
                node = document.createElement("OPTION")
                node.setAttribute("value", oneSosa + "")
                node.appendChild(textnode)
                _HE_ROOT_RESULTS.appendChild(node)
            }
        }
    }

}