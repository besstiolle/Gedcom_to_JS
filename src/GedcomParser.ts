import { Store } from "./Store"
import { Family, Individual } from "./struct.class"

const REGEX_INDI = /^0 @I?([0-9]*)@ INDI$/
const REGEX_NAME = /^1 NAME (.*)\/(.*)\/$/
const REGEX_FAMC = /^1 FAMC @F?([0-9]+)@$/
const REGEX_SEX = /^1 SEX ([FM])$/
const REGEX_FAMILY = /^0 @F?([0-9]*)@ FAM$/
const REGEX_HUSB = /^1 HUSB @I?([0-9]*)@$/
const REGEX_WIFE = /^1 WIFE @I?([0-9]*)@$/
const REGEX_BIRTH = /^1 BIRT[ ]?$/
const REGEX_DEATH = /^1 DEAT[ ]?$/
const REGEX_MARRIAGE = /^1 MARR[ ]?$/
const REGEX_DATE = /^2 DATE (.*)$/
const REGEX_PLACE = /^2 PLAC (.*)$/
const REGEX_OCCUPATION = /^1 OCCU (.*)$/
const REGEX_REPLACE_NAME = /"/g

export class GedcomParser{

  static parse(gedcomContent:string) {
    let line:string = null
    let individual:Individual = null // One Individu
    let family:Family = null //One Familly
  
    let matches:RegExpMatchArray = null
    let lines:string[] = gedcomContent.split(/[\r\n]+/)

    let isIndividualPart = false
    let isFamilyPart = false
    let isBirthPart = false
    let isDeathPart = false
    let isMariagePart = false
  
    let len = lines.length
    for (var i = 0; i < len; i++) {
      
      line = lines[i]
      matches = line.match(REGEX_INDI)
      if(matches){
        isIndividualPart = true
        isFamilyPart = false
        //Save previous indiv
        if(individual != null){
          individual.isProcessed = false
          Store.mapGedTechIdToIndividual.set(individual.id, individual)
          isBirthPart = false
          isDeathPart = false
          if(Store.firstGedTechIdParsed == null){
            Store.firstGedTechIdParsed = individual.id
          }
        }
  
        // Initiate class
        individual = new Individual()
        individual.id = parseInt(matches[1].trim())
        continue
      }
    
      matches = line.match(REGEX_FAMILY)
      if(matches){
        
        isFamilyPart = true
        isIndividualPart = false

        //Save previous family
        if(family != null){
          Store.mapCodeFamily.set(family.id, family)
        }
        // Initiate array
        family = new Family()
        family.id = parseInt(matches[1].trim())
        continue
      }
  
      if(isIndividualPart){        
        matches = line.match(REGEX_NAME)
        if(matches && individual != null) {
          individual.firstname = matches[1].replace(REGEX_REPLACE_NAME,'').trim()
          individual.lastname = matches[2].trim()
          continue
        }
    
        matches = line.match(REGEX_FAMC)
        if(matches && individual != null) {
          individual.famc = parseInt(matches[1].trim())
          continue
        }
    
        matches = line.match(REGEX_SEX)
        if(matches && individual != null) {
          individual.sex = matches[1].trim()
          continue
        }
        
        matches = line.match(REGEX_BIRTH)
        if(matches && individual != null) {
          isBirthPart = true
          isDeathPart = false
          continue
        }
    
        matches = line.match(REGEX_DEATH)
        if(matches && individual != null) {
          isDeathPart = true
          isBirthPart = false
          continue
        }
    
        matches = line.match(REGEX_DATE)
        if(matches && individual != null) {
          if(isBirthPart) {
            individual.birthDate = matches[1].trim()
          } else if (isDeathPart) {
            individual.deathDate = matches[1].trim()
          }
          continue
        }
    
        matches = line.match(REGEX_PLACE)
        if(matches && individual != null) {
          if(isBirthPart) {
            individual.birthPlace = matches[1].trim()
          } else if (isDeathPart) {
            individual.deathPlace = matches[1].trim()
          }
          continue
        }
    
        matches = line.match(REGEX_OCCUPATION)
        if(matches && individual != null) {
          individual.occupation = matches[1].trim()
          continue
        }
      }

      if(isFamilyPart){
        matches = line.match(REGEX_HUSB)
        if(matches && individual != null) {
          family.father = parseInt(matches[1].trim())
          continue
        }
    
        matches = line.match(REGEX_WIFE)
        if(matches && individual != null) {
          family.mother = parseInt(matches[1].trim())
          continue
        }

        matches = line.match(REGEX_MARRIAGE)
        if(matches)
        if(matches && individual != null) {
          isMariagePart = true
          continue
        }

        matches = line.match(REGEX_DATE)
        if(matches && individual != null) {
          if(isMariagePart) {  
            family.tmpMariageDate = matches[1].trim()
          } 
          continue
        }

        matches = line.match(REGEX_PLACE)
        if(matches && individual != null) {
          if(isMariagePart) {            
            family.tmpMariagePlace = matches[1].trim()
          } 
          continue
        }
        
      }
    }

    //Re work family to propagate Weddings informations to parents
    Store.mapCodeFamily.forEach((family:Family,codeFamily:number) => {
      //Process the father
      if(family.father !== undefined && family.father !== null){
        individual = Store.mapGedTechIdToIndividual.get(family.father)
        if(individual == null){
          console.info("individual null for idTech %o ", family.father)
        }
        individual.mariageDate = family.tmpMariageDate
        individual.mariagePlace = family.tmpMariagePlace
        Store.mapGedTechIdToIndividual.set(family.father, individual)
      }
      //Process the mother
      if(family.mother !== undefined && family.mother !== null){
        individual = Store.mapGedTechIdToIndividual.get(family.mother)
        if(individual == null){
          console.info("individual null for idTech %o ", family.mother)
        }
        individual.mariageDate = family.tmpMariageDate
        individual.mariagePlace = family.tmpMariagePlace
        Store.mapGedTechIdToIndividual.set(family.mother, individual)
      }
      
      family.tmpMariageDate = null
      family.tmpMariagePlace = null
    });
  }
}