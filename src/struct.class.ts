import { Box, BoxV } from "./Box.class"

export class VirtualGrid {

  positionProcessed:number[] = [] //List of sosa already processed to identifie implexe
  maxSosaProcessed:number = 0 // memory of the max Sosa to help re-calculate maxGenerationProcessed
  maxGenerationProcessed:number = 0 // memory of the max gen of all the sosa to help calculate the heigh of the grid
  mapRightSosaByGeneration:Map<number, SosaWrapper> = new Map<number, SosaWrapper>() //Map of generation / the far-right SosaWrapper processed
  mapSosaToGridEntry:Map<number, VirtualGridEntry> = new Map<number, VirtualGridEntry>()
  mapGenerationYPosition:Map<number, number> = new Map<number, number>() //list of Y position for each sosa
  mapGenerationSosa:Map<number, number[]> = new Map<number, number[]>()
  mapGedTechIdInGridToSosa:Map<number, number> = new Map<number, number>()     // map GetTechId / Sosa currently in Grid
  implexes:number[] = [] //List of sosa Implexes

  constructor(){
    this.positionProcessed = []
    this.maxSosaProcessed = 0
    this.maxGenerationProcessed = 0
    this.mapRightSosaByGeneration = new Map<number, SosaWrapper>()
    this.mapSosaToGridEntry = new Map<number, VirtualGridEntry>()
    this.mapGenerationYPosition = new Map<number, number>()
    this.mapGenerationSosa = new Map<number, number[]>()
    this.mapGedTechIdInGridToSosa = new Map<number, number>()
    this.implexes = []
  }
}


export class VirtualGridEntry{

  sosaWrapper:SosaWrapper
  firstname:string
  lastname:string
  birthDate:string
  birthPlace:string
  deathDate:string
  deathPlace:string
  mariageDate:string
  mariagePlace:string
  occupation:string
  box:Box | BoxV | null = null
  previousSosaWrapper:SosaWrapper|null
  nextSosaWrapper:SosaWrapper | null


  constructor(sosaWrapper:SosaWrapper, individual:Individual, previousSosaWrapper:SosaWrapper|null){
    this.sosaWrapper = sosaWrapper
    this.firstname = individual.firstname
    this.lastname = individual.lastname
    this.birthDate = individual.birthDate
    this.birthPlace = individual.birthPlace
    this.deathDate = individual.deathDate
    this.deathPlace = individual.deathPlace
    this.mariageDate = individual.mariageDate
    this.mariagePlace = individual.mariagePlace
    this.occupation = individual.occupation
    this.box = null
    this.previousSosaWrapper = previousSosaWrapper
    this.nextSosaWrapper = null
  }
}


export class SosaWrapper {

  sosa:number = 0
  generation:number = 0
  sosaFather:number = 0
  sosaMother:number = 0
  leftSosa:number|null = null
  rightSosa:number|null = null
  isImplexe:boolean = false

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

    // Boolean is Implexe
    this.isImplexe = false
  }
}

export class Individual{
  id:number = 0 // Tech Id inside the GedCom File. not the SOSA
  firstname:string  = ""
  lastname:string  = ""
  famc:number = 0 // Tech Id inside the GedCom File. not the SOSA
  sex:string  = ""
  isProcessed:boolean = false
  birthPlace:string = ""
  deathPlace:string = ""
  birthDate:string = ""
  deathDate:string = ""
  occupation:string = ""
  mariageDate:string = ""
  mariagePlace:string = ""
}

export class Family{
  id:number = 0 // Tech Id inside the GedCom File. not the SOSA
  father:number = 0 // Tech Id of the father
  mother:number = 0 // Tech Id of the mother
  tmpMariageDate:string = "" // a tempory information, don't use it
  tmpMariagePlace:string = "" // a tempory information, don't use it
}