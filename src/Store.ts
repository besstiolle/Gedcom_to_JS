import { OptionRepository, Options } from "./Options"
import { VirtualGrid, Family, Individual } from "./struct.class"

export class Store{
    static mapGedTechIdToIndividual:Map<number, Individual> = null // map Sosa / Gedcom Individus
    static mapCodeFamily:Map<number, Family> = null     // map Sosa / Gedcom famillies

    static firstGedTechIdParsed:number = null // First GetTechId processed by the parser
    static firstGedTechIdInGrid:number = null // First GetTechId processed in the Grid under the SOSA code #1

    static positionXMax = 0
    static positionYMax = 0

    static grid:VirtualGrid = null

    private static options:Options = null

    static init(){
        Store.mapGedTechIdToIndividual = new Map<number, Individual>()
        Store.mapCodeFamily = new Map<number, Family>()
        
        Store.firstGedTechIdParsed = null // need to be null
        Store.firstGedTechIdInGrid = null // need to be null

        Store.resetForRedraw()
    }

    static resetForRedraw(){

        Store.positionXMax = 0
        Store.positionYMax = 0

        Store.grid = new VirtualGrid()

    }

    static setOptions(options:Options):void{
        Store.options = options
    }

    static getOptions():Options{
        if(Store.options == null){
            Store.options = OptionRepository.getOptions()
        }
        return Store.options
    }
}