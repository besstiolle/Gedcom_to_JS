import { Container, PointArrayAlias, Svg, SVG } from "@svgdotjs/svg.js"
import '@svgdotjs/svg.panzoom.js'
import { VirtualGridEntry } from "./struct.class"
import { Box, BoxV } from "./Box.class"
import { Store } from "./Store"

export class SVGRenderer {
  
  static container:Container = null

  static drawSVG(htmlId:string){

    SVGRenderer.container = SVG().addTo(htmlId)
    SVGRenderer.svgViewBox()
    SVGRenderer.polyline([0,0 , 0,Store.positionYMax , Store.positionXMax,Store.positionYMax , Store.positionXMax,0, 0,0])
    SVGRenderer.drawLoop(1)

    document.getElementById('box').classList.add('hidden')
  }

  private static drawLoop(generation:number){ 

    if(generation > Store.grid.maxGenerationProcessed){
      return
    }

    let sosaWrapper = null
    let box = null
    let width = null
    let height = null
    let birth = null
    let death = null
    let yIncrement = null
    let tmpStr = null

    const nbCar1em = 26
    const nbCar07em = 34

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

    for (let i=0; i < len; i++){

        key = sosas[i]

        if(!Store.grid.mapSosaToGridEntry.has(key)){
          console.info("grid.mapSosaToGridEntry doesn't have key %o", key)
          continue
        }

        gridEntry = Store.grid.mapSosaToGridEntry.get(key)

        sosaWrapper = gridEntry.sosaWrapper
        box = gridEntry.box
        name = gridEntry.firstname + " " + gridEntry.lastname
        yIncrement = 15

        birth = ""
        if(gridEntry.birthDate != undefined || gridEntry.birthPlace != undefined){
          birth += "¤"
          if(gridEntry.birthDate != undefined){
            birth += " " + gridEntry.birthDate.replace(regexBefore, '<').replace(regexAfter, '>')
          }
          if(gridEntry.birthPlace != undefined){
            tmpStr = gridEntry.birthPlace.split(',')
            birth += " " + tmpStr[0] + ", "+ tmpStr[1]
          }
        }

        death = ""
        if(gridEntry.deathDate != undefined || gridEntry.deathPlace != undefined){
          death += "×"
          if(gridEntry.deathDate != undefined){
            death += " " + gridEntry.deathDate.replace(regexBefore, '<').replace(regexAfter, '>')
          }
          if(gridEntry.deathPlace != undefined){
            tmpStr = gridEntry.deathPlace.split(',')
            death += " " + tmpStr[0] + "," + tmpStr[1]
          }
        }

        // Dessin de la box
        SVGRenderer.container.rect(width, height)
            .fill('#eee')
            .move(box.getX(), box.getY())
            .stroke({ width: 1, color: '#ccc' })
            .radius(10)

        //For debug only
        //name = '#'+ gridEntry.sosaWrapper.sosa + " " + name
        //For debug only

        //26 car in size 1em
        SVGRenderer.container.plain(name.substring(0,nbCar1em)).move(box.getX() + 5, box.getY() + yIncrement)
        //DrawPdf.drawSVG.plain(sosaWrapper.getSosa() + " [" + box.getX()  + '/' + box.getY() + "]").move(box.getX() + 5, box.getY() + yIncrement)
        yIncrement += 15

        if(name.length > nbCar1em){
          SVGRenderer.container.plain(name.substring(nbCar1em,2*nbCar1em)).move(box.getX() + 5, box.getY() + yIncrement)
          yIncrement += 15
        }
        //34 car in size 0.7em
        SVGRenderer.container.plain (birth.substring(0,nbCar07em)).font('size', '10').move(box.getX() + 5, box.getY() + yIncrement)
        if(birth.length > nbCar07em){
          yIncrement += 10
          SVGRenderer.container.plain(birth.substring(nbCar07em,2*nbCar07em)).font('size', '10').move(box.getX() + 5, box.getY() + yIncrement)
        }
        yIncrement += 10
        SVGRenderer.container.plain(death.substring(0,nbCar07em)).font('size', '10').move(box.getX() + 5, box.getY() + yIncrement)
        if(death.length > nbCar07em){
          yIncrement += 10
          SVGRenderer.container.plain(death.substring(nbCar07em,2*nbCar07em)).font('size', '10').move(box.getX() + 5, box.getY() + yIncrement)
        }

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
    //TODO verifier ce code
    setTimeout(() => {
      this.drawLoop(generation)
    }, 1)
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
