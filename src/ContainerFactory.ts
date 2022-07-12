import { VirtualGridEntry, SosaWrapper } from "./struct.class"
import { Store } from "./Store"
import { Box, BoxAbstract, BoxV } from "./Box.class"


/**
 * 
 * @param sosaWrapper the sosa Wrapper always starting by 1
 * @param gedTechId the technical index code inside the GEDCOM file, can be != 1 the first time . Not the SOSA
 * @returns 
 */
export function populateGrid(sosaWrapper:SosaWrapper, gedTechId:number): void{

    //Avoid unecessary processing
    if(!Store.mapGedTechIdToIndividual.has(gedTechId)){
      console.warn("gedTechId %o Not found in 'map GedTechId To Individual'. Sosa was %o", gedTechId, sosaWrapper.sosa)
      return
    }

    let individual = Store.mapGedTechIdToIndividual.get(gedTechId)
    let curSosa = sosaWrapper.sosa
    let curGen = sosaWrapper.generation

    //console.info(curSosa,gedTechId, individual.id)

    //Limitation
    if(curGen > Store.generationMax){
      console.warn("the Store.generationMax limite of %o was reached. Sosa was %o'", Store.generationMax, sosaWrapper.sosa)
      return
    }

    //Set maxSosaProcessed
    if(curSosa > Store.grid.maxSosaProcessed){
      Store.grid.maxSosaProcessed = curSosa
      Store.grid.maxGenerationProcessed = curGen
    }

    if(!Store.grid.mapGenerationSosa.has(curGen)){
        Store.grid.mapGenerationSosa.set(curGen, [])
    }
    
    Store.grid.mapGenerationSosa.get(curGen).push(curSosa)

    //Case of Implexe
    if(Store.grid.positionProcessed.indexOf(gedTechId) !== -1){
      console.debug("implexe detected with gedTechId %o. Sosa was %o", gedTechId, sosaWrapper.sosa)
      //TODO maybe a customized box with/without parent
      // return
    }
    Store.grid.positionProcessed.push(gedTechId)


    let previousSosaWrapper = null
    if(Store.grid.mapRightSosaByGeneration.has(curGen)){
      let previousSosa = Store.grid.mapRightSosaByGeneration.get(curGen).sosa
      // Set "nextSosaWrapper" of previous
      if(Store.grid.mapSosaToGridEntry.has(previousSosa)){
        Store.grid.mapSosaToGridEntry.get(previousSosa).nextSosaWrapper = sosaWrapper
        previousSosaWrapper = Store.grid.mapSosaToGridEntry.get(previousSosa).sosaWrapper
      }
    }
    Store.grid.mapRightSosaByGeneration.set(curGen,sosaWrapper)

    Store.grid.mapSosaToGridEntry.set(curSosa, new VirtualGridEntry(sosaWrapper, individual, previousSosaWrapper))

    //Process his father and mothers
    let familyId = individual.famc
    if(Store.mapCodeFamily.has(familyId)) {
      let family = Store.mapCodeFamily.get(familyId)
      if(family.father != null && family.father != undefined) {
        populateGrid(new SosaWrapper(sosaWrapper.sosaFather), family.father)
      }
      if(family.mother != null && family.mother != undefined) {
        populateGrid(new SosaWrapper(sosaWrapper.sosaMother), family.mother)
      }
    }

    return
  }

export function setupBoxForGridEntry(){

  let box = null
  let sosaWrapper = null
  Store.grid.mapSosaToGridEntry.forEach((gridEntry:VirtualGridEntry, sosa:number)=>{
    //Generate Boxes
    sosaWrapper = gridEntry.sosaWrapper
    if(sosaWrapper.generation > 5){
      box = new BoxV(sosaWrapper, Store.grid.maxGenerationProcessed) // Vertical Box
    } else {
      box = new Box(sosaWrapper, Store.grid.maxGenerationProcessed) // Classic box
    }
    gridEntry.box = box
  })
}

export function compressContainer(sosaWrapper:SosaWrapper){
    let fatherX = 0
    let motherX = 0
    let myselfX = 0
    let previousX = 0

    //Get compressed position of father if exists
    if(Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaFather)){
        fatherX = compressContainer(new SosaWrapper(sosaWrapper.sosaFather))
    }

    //Get compressed position of mother if exists
    if(Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaMother)){
        motherX = compressContainer(new SosaWrapper(sosaWrapper.sosaMother))
    }

    //Retrive previous box X-position(*) on the graph (on the left)
    // * => if exist : X position of previous boxe + box.width() + box.widthPadding()
    //   => if not : box.leftMargin()
    previousX = _getXPositionOnLeftBox(sosaWrapper)

    //Calcul current Y position based on
    let myselfY = _getYPosition(sosaWrapper)

    //If we don't have parents, let take previousX value
    if(fatherX == 0 && motherX == 0){
      myselfX = previousX
    } else {
      //Process our own position
      if(fatherX == 0 || motherX == 0){
        myselfX = fatherX + motherX
      } else {
        myselfX = Math.floor((fatherX + motherX) / 2)
      }

      //If there is a conflict with Previous box, resync ancestors and ourself
      if(myselfX < previousX){
        //special case : 2 generations with != box
        let shift = previousX - myselfX
        let ancestorsSosa = _getAllAncestorsMapOfSosaWrapper(sosaWrapper)

        let len =  ancestorsSosa.length
        for (var i = 0; i < len; i++) {
          Store.grid.mapSosaToGridEntry.get(ancestorsSosa[i]).box.shiftRight(shift)
        }
        myselfX = previousX
      }
    }

    //Set our own X/Y value
    Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosa).box.shiftRight(myselfX)
    Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosa).box.setY(myselfY)

    //Return our own value
    return myselfX
  }

function _getYPosition(sosaWrapper:SosaWrapper){
    //If it's already calculated
    if(Store.grid.mapGenerationYPosition.has(sosaWrapper.generation)){
      return Store.grid.mapGenerationYPosition.get(sosaWrapper.generation)
    }

    let y = 0
    //Let's calculate it
    if(sosaWrapper.generation > 5){
      // Number of generation above me * total height of boxV
      y = (Store.grid.maxGenerationProcessed - sosaWrapper.generation) * (BoxV.height() + BoxV.heightPadding())
    } else {
      // Number of generation (>5) above me * total height of boxV
      //  + Number of generation (max 5) above me * total height of box
      if(Store.grid.maxGenerationProcessed > 5 ){
        y = (Store.grid.maxGenerationProcessed - 5) * (BoxV.height() + BoxV.heightPadding())
      }
      y += (Math.min(5, Store.grid.maxGenerationProcessed) - sosaWrapper.generation) * (Box.height() + Box.heightPadding())
    }

    y += BoxAbstract.topMargin()

    Store.grid.mapGenerationYPosition.set(sosaWrapper.generation, y)

    return y
  }

  function _getXPositionOnLeftBox(sosaWrapper:SosaWrapper){
    let widthPlusWidthPadding = 0
    let leftMargin = 0
    if(sosaWrapper.generation > 5){
      widthPlusWidthPadding = BoxV.width() + BoxV.widthPadding()
      leftMargin = BoxV.leftMargin()
    } else {
      widthPlusWidthPadding = Box.width() + Box.widthPadding()
      leftMargin = Box.leftMargin()
    }
    let previousSosaWrapper = Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosa).previousSosaWrapper
    if(previousSosaWrapper !== null){
      return Store.grid.mapSosaToGridEntry.get(previousSosaWrapper.sosa).box.getX() + widthPlusWidthPadding
    } else {
      return leftMargin
    }
  }

  /**
   * Return a Map with all Ancestors of a SosaWrapper
   */
   function _getAllAncestorsMapOfSosaWrapper(sosaWrapper:SosaWrapper):number[]{
    let array:number[] = []
    if(Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosa)){
      if(Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaFather)){
          array.push(sosaWrapper.sosaFather)
      }
      if(Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaMother)){
          array.push(sosaWrapper.sosaMother)
      }
      return array.concat(
          _getAllAncestorsMapOfSosaWrapper(new SosaWrapper(sosaWrapper.sosaFather))
          , _getAllAncestorsMapOfSosaWrapper(new SosaWrapper(sosaWrapper.sosaMother)))
    }
    return []
  }

