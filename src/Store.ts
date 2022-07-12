import { VirtualGrid, Family, Individual } from "./struct.class"

export class Store{

    static generationMax = 100

    static mapGedTechIdToIndividual:Map<number, Individual> = null // map Sosa / Gedcom Individus
    static mapCodeFamily:Map<number, Family> = null     // map Sosa / Gedcom famillies

    static firstGedTechIdParsed:number = null // First Sosa processed by the parser

    static positionXMax = 0
    static positionYMax = 0

    static grid:VirtualGrid = null

    static init(){
        Store.generationMax = 100

        Store.mapGedTechIdToIndividual = new Map<number, Individual>()
        Store.mapCodeFamily = new Map<number, Family>()
        
        Store.firstGedTechIdParsed = null // need to be null

        Store.resetForRedraw()
    }

    static resetForRedraw(){

        Store.positionXMax = 0
        Store.positionYMax = 0

        Store.grid = new VirtualGrid()

    }
}