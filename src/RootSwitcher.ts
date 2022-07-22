import { hide, purge, show, _HTML_ELEMENT__ROOT_EXEC, _HTML_ELEMENT__ROOT_INPUT, _HTML_ELEMENT__ROOT_NORESULT, _HTML_ELEMENT__ROOT_RESULTS, _HTML_ELEMENT__ROOT_SELECTWRAPPER, _HTML_ELEMENT__STARTTYPE, _HTML_ELEMENT__SVGWRAPPER } from "./HtmlElements"
import { Logger } from "./Logger"
import { Store } from "./Store"
import { Individual } from "./struct.class"


export function cancelRoot(){
    hide([_HTML_ELEMENT__ROOT_SELECTWRAPPER])
}

export function showRoot(){
    show([_HTML_ELEMENT__ROOT_SELECTWRAPPER])
}

export function typingRoot(){
    var searchTyped = _HTML_ELEMENT__ROOT_INPUT.value.trim()
    if(searchTyped.length < 4) {
        hide([_HTML_ELEMENT__STARTTYPE,_HTML_ELEMENT__ROOT_RESULTS, _HTML_ELEMENT__ROOT_EXEC, _HTML_ELEMENT__ROOT_NORESULT])
        return
    } else {
        hide([_HTML_ELEMENT__STARTTYPE])
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
        hide([_HTML_ELEMENT__ROOT_RESULTS, _HTML_ELEMENT__ROOT_EXEC])
        show([_HTML_ELEMENT__ROOT_NORESULT])
    } else {
        show([_HTML_ELEMENT__ROOT_RESULTS, _HTML_ELEMENT__ROOT_EXEC])
        hide([_HTML_ELEMENT__ROOT_NORESULT])
    }
    
    //Purge Select
    purge(_HTML_ELEMENT__ROOT_RESULTS)

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
                _HTML_ELEMENT__ROOT_RESULTS.appendChild(node)
            }
        }
    }

}