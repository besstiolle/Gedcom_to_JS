import { Box, BoxV } from "./Box.class"

export class VirtualGrid {

  positionProcessed:number[] = null //List of sosa already processed to identifie implexe
  maxSosaProcessed:number = null // memory of the max Sosa to help re-calculate maxGenerationProcessed
  maxGenerationProcessed:number = null // memory of the max gen of all the sosa to help calculate the heigh of the grid
  mapRightSosaByGeneration:Map<number, SosaWrapper> = null //Map of generation / the far-right SosaWrapper processed
  mapSosaToGridEntry:Map<number, VirtualGridEntry> = null
  mapGenerationYPosition:Map<number, number> = null //list of Y position for each sosa
  mapGenerationSosa:Map<number, number[]> = null
  implexes:number[] = null //List of sosa Implexes

  constructor(){
    this.positionProcessed = []
    this.maxSosaProcessed = null
    this.maxGenerationProcessed = null
    this.mapRightSosaByGeneration = new Map<number, SosaWrapper>()
    this.mapSosaToGridEntry = new Map<number, VirtualGridEntry>()
    this.mapGenerationYPosition = new Map<number, number>()
    this.mapGenerationSosa = new Map<number, number[]>()
    this.implexes = []
  }
}


export class VirtualGridEntry{

  sosaWrapper:SosaWrapper = null
  firstname:string = null
  lastname:string = null
  birthDate:string = null
  birthPlace:string = null
  deathDate:string = null
  deathPlace:string = null
  box:Box | BoxV = null
  previousSosaWrapper:SosaWrapper = null
  nextSosaWrapper:SosaWrapper = null


  constructor(sosaWrapper:SosaWrapper, individual:Individual, previousSosaWrapper:SosaWrapper){
    this.sosaWrapper = sosaWrapper
    this.firstname = individual.firstname
    this.lastname = individual.lastname
    this.birthDate = individual.birthDate
    this.birthPlace = individual.birthPlace
    this.deathDate = individual.deathDate
    this.deathPlace = individual.deathPlace
    this.box = null
    this.previousSosaWrapper = previousSosaWrapper
    this.nextSosaWrapper = null
  }
}


export class SosaWrapper {

  sosa:number = null
  generation:number = null
  sosaFather:number = null
  sosaMother:number = null
  leftSosa:number = null
  rightSosa:number = null

  constructor(sosa:number) {
    this.sosa = sosa
    /**
    * Return n° of generation based on sosa
    * tkt to Rolland (https://www.lorand.org/spip.php?article1459)
    **/
    this.generation = Math.floor(Math.log(sosa) / Math.LN2)+1

    this.sosaFather = sosa * 2
    this.sosaMother = sosa * 2 + 1

    // Sosa available on the left/right with the same generation
    this.leftSosa = null
    this.rightSosa = null
  }
}

export class Individual{
  id:number = null // Tech Id inside the GedCom File. not the SOSA
  firstname:string = null
  lastname:string = null
  famc:number = null // Tech Id inside the GedCom File. not the SOSA
  sex:string = null
  isProcessed:boolean = false
  birthPlace:string
  deathPlace:string
  birthDate:string
  deathDate:string
}

export class Family{
  id:number = null // Tech Id inside the GedCom File. not the SOSA
  father:number = null // Tech Id of the father
  mother:number = null // Tech Id of the mother
}