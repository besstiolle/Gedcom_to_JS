class Store {
  constructor(mapPersonns, mapFamily, maxG){
    this.maxG = maxG
    this.mapPersonns = mapPersonns
    this.mapFamily = mapFamily
    this.reset()
  }

  reset(){
    this.positionProcessed = []
    this.maxSosaProcessed = null
    this.maxGenerationProcessed = null
    this.mapHelper = new Map()
    this.mapStore = new Map()
    this.mapGenerationYPosition = new Map()
    this.mapGenerationSosa = new Map()
  }

  hasSosaWrapper(sosa){
    return this.mapStore.has(sosa)
  }

  getSosaWrapper(sosa){
    if(this.hasSosaWrapper(sosa)){
      return this.mapStore.get(sosa)
    }
    return null
  }


  getStore(){
    return this.mapStore
  }

  getMaxGeneration(){
    return this.maxG
  }

  getMaxGenerationProcessed(){
    return this.maxGenerationProcessed
  }

  getMapStore(){
    return this.mapStore
  }

/*  getMaxSosaProcessed(){
    return this.maxSosaProcessed
  }*/

  getMapGenerationSosa(){
    return this.mapGenerationSosa
  }

  getRightSosaForGeneration(generation){
    return this.mapHelper.get(generation).getSosa()
  }

  populate(sosaWrapper, entryId){

    //Avoid unecessary processing
    if(!this.mapPersonns.has(entryId)){
      return
    }

    let gedcomEntry = this.mapPersonns.get(entryId)
    let curSosa = sosaWrapper.getSosa()
    let curGen = sosaWrapper.getGeneration()

    //Limitation
    if(curGen > this.maxG){
      return
    }

    //Set this.maxSosaProcessed
    if(curSosa > this.maxSosaProcessed){
      this.maxSosaProcessed = curSosa
      this.maxGenerationProcessed = curGen
    }

    if(!this.mapGenerationSosa.has(curGen)){
        this.mapGenerationSosa.set(curGen, [])
    }
    this.mapGenerationSosa.get(curGen).push(curSosa)

    //Case of Implexe
    if(this.positionProcessed.indexOf(entryId) !== -1){
      //TODO
      return
    }
    this.positionProcessed.push(gedcomEntry)


    let previousSosa = null
    if(this.mapHelper.has(curGen)){
      previousSosa = this.mapHelper.get(curGen).getSosa()
      // Set "nextSosaWrapper" of previous
      if(this.mapStore.has(previousSosa)){
        this.mapStore.get(previousSosa).setNext(sosaWrapper)
      }
    }
    this.mapHelper.set(curGen,sosaWrapper)

    this.mapStore.set(curSosa, new StoreItem(sosaWrapper, gedcomEntry, previousSosa))

    //Process his father and mothers
    let familyId = gedcomEntry['famc']
    if(this.mapFamily.has(familyId)) {
      let family = this.mapFamily.get(familyId)
      if(family['father'] != null && family['father'] != undefined) {
        this.populate(new SosaWrapper(sosaWrapper.getVirtualFather()), family['father'])
      }
      if(family['mother'] != null && family['mother'] != undefined) {
        this.populate(new SosaWrapper(sosaWrapper.getVirtualMother()), family['mother'])
      }
    }

    return this
  }

  setupBoxes(){

    let box = null
    let sosaWrapper = null
    for(let [sosa, storeItem] of this.mapStore.entries()){
      //Generate Boxes
      sosaWrapper = storeItem.getSosaWrapper()
      if(sosaWrapper.getGeneration() > 5){
        box = new BoxV(sosaWrapper, this.maxGenerationProcessed) // Vertical Box
      } else {
        box = new Box(sosaWrapper, this.maxGenerationProcessed) // Classic box
      }
      storeItem.setBox(box)
    }
    return this
  }

  compress(sosaWrapper){
    let fatherX = 0
    let motherX = 0
    let myselfX = 0
    let previousX = 0

    //Get compressed position of father if exists
    if(this.mapStore.has(sosaWrapper.getVirtualFather())){
        fatherX = this.compress(new SosaWrapper(sosaWrapper.getVirtualFather()))
    }

    //Get compressed position of mother if exists
    if(this.mapStore.has(sosaWrapper.getVirtualMother())){
        motherX = this.compress(new SosaWrapper(sosaWrapper.getVirtualMother()))
    }

    //Retrive previous box X-position(*) on the graph (on the left)
    // * => if exist : X position of previous boxe + box.width() + box.widthPadding()
    //   => if not : box.leftMargin()
    previousX = this.getXPositionOnLeftBox(sosaWrapper)

    //Calcul current Y position based on
    let myselfY = this.getYPosition(sosaWrapper)

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
        let ancestorsSosa = this.getAllAncestorsMapOfSosaWrapper(sosaWrapper)

        let len =  ancestorsSosa.length
        for (var i = 0; i < len; i++) {
          this.mapStore.get(ancestorsSosa[i]).getBox().shiftRight(shift)
        }
        myselfX = previousX
      }
    }

    //Set our own X/Y value
    this.mapStore.get(sosaWrapper.getSosa()).getBox().shiftRight(myselfX)
    this.mapStore.get(sosaWrapper.getSosa()).getBox().setY(myselfY)

    //Return our own value
    return myselfX
  }

  getYPosition(sosaWrapper){
    //If it's already calculated
    if(this.mapGenerationYPosition.has(sosaWrapper.getGeneration())){
      return this.mapGenerationYPosition.get(sosaWrapper.getGeneration())
    }

    let y = 0
    //Let's calculate it
    if(sosaWrapper.getGeneration() > 5){
      // Number of generation above me * total height of boxV
      y = (this.getMaxGenerationProcessed() - sosaWrapper.getGeneration()) * (BoxV.height() + BoxV.heightPadding())
    } else {
      // Number of generation (>5) above me * total height of boxV
      //  + Number of generation (max 5) above me * total height of box
      if(this.getMaxGenerationProcessed() > 5 ){
        y = (this.getMaxGenerationProcessed() - 5) * (BoxV.height() + BoxV.heightPadding())
      }
      y += (Math.min(5, this.getMaxGenerationProcessed()) - sosaWrapper.getGeneration()) * (Box.height() + Box.heightPadding())
    }

    y += BoxAbstract.topMargin()

    this.mapGenerationYPosition.set(sosaWrapper.getGeneration(), y)

    return y
  }

  getXPositionOnLeftBox(sosaWrapper){
    let widthPlusWidthPadding = 0
    let leftMargin = 0
    if(sosaWrapper.getGeneration() > 5){
      widthPlusWidthPadding = BoxV.width() + BoxV.widthPadding()
      leftMargin = BoxV.leftMargin();
    } else {
      widthPlusWidthPadding = Box.width() + Box.widthPadding()
      leftMargin = Box.leftMargin();
    }
    let previousSosa = this.mapStore.get(sosaWrapper.getSosa()).getPrevious()
    if(previousSosa !== null){
      return this.mapStore.get(previousSosa).getBox().getX() + widthPlusWidthPadding
    } else {
      return leftMargin;
    }
  }

  /**
   * Return a Map with all Ancestors of a SosaWrapper
   */
  getAllAncestorsMapOfSosaWrapper(sosaWrapper){
    let array = []
    if(this.mapStore.has(sosaWrapper.getSosa())){
      if(this.mapStore.has(sosaWrapper.getVirtualFather())){
          array.push(sosaWrapper.getVirtualFather())
      }
      if(this.mapStore.has(sosaWrapper.getVirtualMother())){
          array.push(sosaWrapper.getVirtualMother())
      }
      return array.concat(
          this.getAllAncestorsMapOfSosaWrapper(new SosaWrapper(sosaWrapper.getVirtualFather()))
          , this.getAllAncestorsMapOfSosaWrapper(new SosaWrapper(sosaWrapper.getVirtualMother())))
    }
    return []
  }
}

class StoreItem{
  constructor(sosaWrapper, gedcomEntry, previousSosa){
    this.sosaWrapper = sosaWrapper
    this.firstname = gedcomEntry['firstname']
    this.lastname = gedcomEntry['lastname']
    this.birthDate = gedcomEntry['birthDate']
    this.birthPlace = gedcomEntry['birthPlace']
    this.deathDate = gedcomEntry['deathDate']
    this.deathPlace = gedcomEntry['deathPlace']
    this.box = null
    this.previousSosaWrapper = previousSosa
    this.nextSosaWrapper = null
  }

  setBox(box){
    this.box = box
  }

  setNext(nextSosaWrapper){
    this.nextSosaWrapper = nextSosaWrapper
  }

  getSosaWrapper(){
    return this.sosaWrapper
  }
  getFirstname(){
    return this.firstname
  }

  getLastname(){
    return this.lastname
  }

  getBirthDate(){
    return this.birthDate
  }

  getBirthPlace(){
    return this.birthPlace
  }

  getDeathDate(){
    return this.deathDate
  }

  getDeathPlace(){
    return this.deathPlace
  }

  getBox(){
    return this.box
  }

  getPrevious(){
    return this.previousSosaWrapper
  }

  getNext(){
    return this.nextSosaWrapper
  }
}
