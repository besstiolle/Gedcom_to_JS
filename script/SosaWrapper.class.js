
class SosaWrapper {
  constructor(sosa) {
    this.sosa = sosa
    this.generation = SosaWrapper.getGenerationOfSosa(sosa)

    this.father = SosaWrapper.getFatherOfSosa(sosa)
    this.mother = SosaWrapper.getMotherOfSosa(sosa)

    // Sosa available on the left/right with the same generation
    this.leftSosa = null
    this.rightSosa = null
  }

  getSosa(){return this.sosa}
  getGeneration(){return this.generation}
  getVirtualFather(){return this.father}
  getVirtualMother(){return this.mother}

  getLeftSosa(){return this.leftSosa}
  getRightSosa(){return this.rightSosa}

  setLeftSosa(leftSosa){this.leftSosa = leftSosa}
  setRightSosa(rightSosa){this.rightSosa = rightSosa}

  /**
  * Return n° of generation based on sosa
  * tkt to Rolland (https://www.lorand.org/spip.php?article1459)
  **/
  static getGenerationOfSosa(sosa){
    return Math.floor(Math.log(sosa) / Math.LN2)+1
  }

  static getFatherOfSosa(sosa){
    return sosa * 2
  }

  static getMotherOfSosa(sosa){
    return sosa * 2 + 1
  }
}
