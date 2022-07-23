import { Container, Element, PointArrayAlias, Svg, SVG } from "@svgdotjs/svg.js"
import '@svgdotjs/svg.panzoom.js'
import { VirtualGridEntry } from "./struct.class"
import { Box, BoxV } from "./Box.class"
import { Store } from "./Store"
import { _HE_FORM, _HE_SVGWRAPPER } from "./HtmlElements"
import { ImplexesType } from "./Options"

export class SVGRenderer {
  
  static container:Container = null

  static drawSVG(){

    SVGRenderer.container = SVG().addTo(_HE_SVGWRAPPER)
    SVGRenderer.svgViewBox()
    SVGRenderer.polyline([0,0 , 0,Store.positionYMax , Store.positionXMax,Store.positionYMax , Store.positionXMax,0, 0,0])
    SVGRenderer.drawLoop(1)
  }

  private static drawLoop(generation:number){ 

    if(generation > Store.grid.maxGenerationProcessed){
      return
    }

    let sosaWrapper = null
    let box:Box|BoxV = null
    let width = null
    let height = null
    let birth = null
    let death = null
    let mariage = null
    let occupation = null
    let yIncrement = null

    if(generation > 5) {
      width = BoxV.width()
      height = BoxV.height()
    } else {
      width = Box.width()
      height = Box.height()
    }

    let sosas = Store.grid.mapGenerationSosa.get(generation)
    let len = sosas.length
    let key = null
    let name = null
    let gridEntry:VirtualGridEntry = null
    
    const regexBefore = /^BEF/i
    const regexAfter = /^AFT/i

    //Pattern for implexe with coloration
    let patternImplexe = SVGRenderer.container.pattern(9.5,9.5,function(add) {
      add.rect(9.5,9.5).fill('#fff')
      add.line(0,0,5,9.5).stroke({ color: '#d9f2ce', width: 1 })
    })

    for (let i=0; i < len; i++){

        key = sosas[i]

        if(!Store.grid.mapSosaToGridEntry.has(key)){
          console.info("grid.mapSosaToGridEntry doesn't have key %o", key)
          continue
        }

        gridEntry = Store.grid.mapSosaToGridEntry.get(key)
        yIncrement = 15
        sosaWrapper = gridEntry.sosaWrapper
        box = gridEntry.box
        name = gridEntry.firstname + " " + gridEntry.lastname

        let cleanDate = function (date:string):string{
          if(date != undefined){
            return date.replace(regexBefore, '<').replace(regexAfter, '>')
          }
          return ""
        }
        let cleanPlace = function (place:string):string{
          if(place != undefined){
            return place.split(',')[0].trim()
          }
          return ""
        }
        let cleanPlaceCode = function (place:string):string{
          if(place != undefined){
            return place.split(',')[1].trim()
          }
          return ""
        }
        let cleanOccupation = function (occupation:string):string{
          if(occupation != undefined){
            return occupation
          }
          return ""
        }

        birth = `¤ ${cleanDate(gridEntry.birthDate)} ${cleanPlace(gridEntry.birthPlace)} ${cleanPlaceCode(gridEntry.birthPlace)}`
        mariage = `∩ ${cleanDate(gridEntry.mariageDate)} ${cleanPlace(gridEntry.mariagePlace)} ${cleanPlaceCode(gridEntry.mariagePlace)}`
        death = `X ${cleanDate(gridEntry.deathDate)} ${cleanPlace(gridEntry.deathPlace)} ${cleanPlaceCode(gridEntry.deathPlace)}`
        occupation = cleanOccupation(gridEntry.occupation)

        if(birth.trim().length == 1){
          birth = ''
        }
        if(mariage.trim().length == 1){
          mariage = ''
        }
        if(death.trim().length == 1){
          death = ''
        }

        if(sosaWrapper.isImplexe && (Store.getOptions().implexes == ImplexesType.color || Store.getOptions().implexes == ImplexesType.colorHide) ){
          // Dessin de la box
          SVGRenderer.container.rect(width, height)
            .fill(patternImplexe)
            .move(box.getX(), box.getY())
            .stroke({ width: 1, color: '#ccc' })
            .radius(10)
        } else {
          // Dessin de la box
          SVGRenderer.container.rect(width, height)
            .fill("#EEE")
            .move(box.getX(), box.getY())
            .stroke({ width: 1, color: '#ccc' })
            .radius(10)
        }

        //For debug only
        //name = '#'+ gridEntry.sosaWrapper.sosa + " " + name
        //For debug only

        yIncrement += SVGRenderer.h1(name, box, yIncrement)
        yIncrement += SVGRenderer.h2(birth, box, yIncrement)
        yIncrement += SVGRenderer.h2(mariage, box, yIncrement)
        yIncrement += SVGRenderer.h2(death, box, yIncrement)
        yIncrement += SVGRenderer.h2(occupation, box, yIncrement)

        //Si père existe : liaison
        if(Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaFather)){
          let father = Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosaFather).box
          let middleY = (father.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2

          this.polyline([box.getTopJunctionPoint().x,box.getTopJunctionPoint().y
                        ,box.getBottomJunctionPoint().x,middleY
                        ,father.getBottomJunctionPoint().x, middleY
                        ,father.getBottomJunctionPoint().x, father.getBottomJunctionPoint().y])
        }
        //Si mère existe : liaison
        if(Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaMother)){
          let mother = Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosaMother).box
          let middleY = (mother.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2

          this.polyline([box.getTopJunctionPoint().x,box.getTopJunctionPoint().y
                        ,box.getBottomJunctionPoint().x,middleY
                        ,mother.getBottomJunctionPoint().x, middleY
                        ,mother.getBottomJunctionPoint().x, mother.getBottomJunctionPoint().y])
        }
    }

    generation++
    
    //Allow refreshing IHM
    setTimeout(() => {
      this.drawLoop(generation)
    }, 1)
  }

  private static caracH1 = {carMax:26, fontSize:'13', increm:15}
  private static caracH2 = {carMax:34, fontSize:'10', increm:10}

  private static h1(str:string, box:Box|BoxV, yIncrement:number):number{
    return SVGRenderer.h0(str, SVGRenderer.caracH1, box, yIncrement)
  }
  private static h2(str:string, box:Box|BoxV, yIncrement:number):number{
    return SVGRenderer.h0(str, SVGRenderer.caracH2, box, yIncrement)    
  }

  private static h0(str:string, carac:any, box:Box|BoxV, yIncrement:number):number{
    if(str.trim() == ''){
      return 0
    }

    SVGRenderer.container.plain(str.substring(0,carac['carMax'])).font('size', carac['fontSize']).move(box.getX() + 5, box.getY() + yIncrement - 10)
    if(str.length > carac['carMax']){
      SVGRenderer.container.plain(str.substring(carac['carMax'],2*carac['carMax'])).font('size', carac['fontSize']).move(box.getX() + 5, box.getY() + yIncrement - 10 + carac['increm'])
      return 2 * carac['increm']
    } else {
      return 1 * carac['increm']
    }
  }

  static svgViewBox(){
                    // X position of the SOSA #1
    let viewboxX = Store.grid.mapSosaToGridEntry.get(1).box.getX() - ((window.innerWidth - 10) / 2) + Box.width() / 2
    let viewboxY = Store.positionYMax - window.innerHeight + 100
    if(Store.positionYMax < window.innerHeight){
      viewboxY = (Store.positionYMax - window.innerHeight) / 2
    }
    (<Svg>SVGRenderer.container
            .viewbox( viewboxX,  viewboxY , window.innerWidth - 10 , window.innerHeight - 10)
            .size('100%','100%'))
            .panZoom({zoomMin: 0.02, zoomMax: 20, zoomFactor:0.15})
            .zoom(1)
  }

  private static polyline(coord:PointArrayAlias){
    SVGRenderer.container.polyline(coord)
        .fill('none')
        .stroke({ width: 1, color: '#000' })
  }
}
