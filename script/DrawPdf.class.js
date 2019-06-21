class DrawPdf {

  constructor(htmlId, maxX , maxY, maxGeneration){
    this.drawSVG = SVG().addTo(htmlId)
    this.maxX = maxX
    this.maxY = maxY
    this.maxGeneration = maxGeneration
  }

  drawProxy(mapStore, mapGenerationSosa){
    this.svgViewBox()
    this.polyline([0,0 , 0,this.maxY , this.maxX,this.maxY , this.maxX,0, 0,0])
    this.drawLoop(1, mapStore, mapGenerationSosa)

    document.getElementById('box').classList.add('hidden')
  }

  drawLoop(generation, mapStore, mapGenerationSosa){

    if(generation > this.maxGeneration){
      return
    }

    let sosaWrapper = null
    let box = null
    let firstname = null
    let lastname = null
    let width = null
    let height = null
    let birth = null
    let death = null
    let yIncrement = null
    let tmpStr = null

    const nbCar1em = 26
    const nbCar07em = 38

    if(generation > 5) {
      width = BoxV.width()
      height = BoxV.height()
    } else {
      width = Box.width()
      height = Box.height()
    }

    let sosas = mapGenerationSosa.get(generation)
    let len = sosas.length
    let key = null
    for (let i=0; i < len; i++){

        key = sosas[i]
        sosaWrapper = mapStore.get(key).getSosaWrapper()
        box = mapStore.get(key).getBox()
        name = mapStore.get(key).getFirstname() + " " + mapStore.get(key).getLastname()
        yIncrement = 15

        birth = ""
        if(mapStore.get(key).getBirthDate() != undefined || mapStore.get(key).getBirthPlace() != undefined){
          birth += "✪"
          if(mapStore.get(key).getBirthDate() != undefined){
            birth += " " + mapStore.get(key).getBirthDate()
          }
          if(mapStore.get(key).getBirthPlace() != undefined){
            tmpStr = mapStore.get(key).getBirthPlace().split(',')
            birth += " " + tmpStr[0] + ", "+ tmpStr[1]
          }
        }

        death = ""
        if(mapStore.get(key).getDeathDate() != undefined || mapStore.get(key).getDeathPlace() != undefined){
          death += "✞"
          if(mapStore.get(key).getDeathDate() != undefined){
            death += " " + mapStore.get(key).getDeathDate()
          }
          if(mapStore.get(key).getDeathPlace() != undefined){
            tmpStr = mapStore.get(key).getDeathPlace().split(',')
            death += " " + tmpStr[0] + "," + tmpStr[1]
          }
        }

        // Dessin de la box
        this.drawSVG.rect(width, height)
            .fill('#eee')
            .move(box.getX(), box.getY())
            .stroke({ width: 1, color: '#ccc' })
            .radius(10)

        //26 car in size 1em
        this.drawSVG.plain(name.substring(0,nbCar1em))
        //drawSVG.plain(sosaWrapper.getSosa() + " [" + box.getX()  + '/' + box.getY() + "]")
            .move(box.getX() + 5, box.getY() + yIncrement)
            yIncrement += 15
        if(name.length > nbCar1em){
          this.drawSVG.plain(name.substring(nbCar1em,2*nbCar1em)).move(box.getX() + 5, box.getY() + yIncrement)
          yIncrement += 15
        }
        //38 car in size 0.7em
        this.drawSVG.plain(birth.substring(0,nbCar07em)).font('size', '0.7em').move(box.getX() + 5, box.getY() + yIncrement)
        if(birth.length > nbCar07em){
          yIncrement += 10
          this.drawSVG.plain(birth.substring(nbCar07em,2*nbCar07em)).font('size', '0.7em').move(box.getX() + 5, box.getY() + yIncrement)
        }
        yIncrement += 10
        this.drawSVG.plain(death.substring(0,nbCar07em)).font('size', '0.7em').move(box.getX() + 5, box.getY() + yIncrement)
        if(death.length > nbCar07em){
          yIncrement += 10
          this.drawSVG.plain(death.substring(nbCar07em,2*nbCar07em)).font('size', '0.7em').move(box.getX() + 5, box.getY() + yIncrement)
        }

        //Si père existe : liaison
        if(mapStore.has(sosaWrapper.getVirtualFather())){
          let father = mapStore.get(sosaWrapper.getVirtualFather()).getBox()
          let middleY = (father.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2

          this.polyline([box.getTopJunctionPoint().x,box.getTopJunctionPoint().y
                        ,box.getBottomJunctionPoint().x,middleY
                        ,father.getBottomJunctionPoint().x, middleY
                        ,father.getBottomJunctionPoint().x, father.getBottomJunctionPoint().y])
        }
        //Si mère existe : liaison
        if(mapStore.has(sosaWrapper.getVirtualMother())){
          let mother = mapStore.get(sosaWrapper.getVirtualMother()).getBox()
          let middleY = (mother.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2

          this.polyline([box.getTopJunctionPoint().x,box.getTopJunctionPoint().y
                        ,box.getBottomJunctionPoint().x,middleY
                        ,mother.getBottomJunctionPoint().x, middleY
                        ,mother.getBottomJunctionPoint().x, mother.getBottomJunctionPoint().y])
        }
    }

    generation++
    setTimeout(() => {
      this.drawLoop(generation, mapStore, mapGenerationSosa)
    }, 1);
}

  pdf(){

    this.pdfViewBox()

    const pdfobjectWrapper = document.getElementById("pdfobjectWrapper");
    var pdfobject = document.getElementById("pdfobject");
    const svgElement = document.getElementsByTagName("svg")[0];

    //Show Wrapper
    pdfobjectWrapper.classList.remove("hidden")

    const pdf = new jsPDF('l', 'px', [this.maxX, this.maxY]);
    // render the svg element
    svg2pdf(svgElement, pdf, {
      xOffset: 0,
      yOffset: 0,
      scale: 1
    });

    const uri = pdf.output('datauristring');

    if(uri.length < 5000000){

      if(pdfobject == undefined){
        pdfobject = document.createElement("embed");
        pdfobject.setAttribute("src", uri);
        pdfobject.id = "pdfobject";
        pdfobject.type = "application/pdf"
        pdfobjectWrapper.appendChild(pdfobject);
      } else {
        pdfobject.setAttribute("src", uri);
      }
    } else {
      pdf.save('myPDF.pdf')
    }

    //Reset information post pdf generation
    this.svgViewBox()
  }

  svgViewBox(){
    this.drawSVG
            .viewbox(0, 0, window.innerWidth - 10 , window.innerHeight - 10)
            .size('100%','100%')
            .panZoom({zoomMin: 0.02, zoomMax: 20, zoomFactor:0.15})
            .zoom(0.02)
  }

  pdfViewBox(){
    this.drawSVG
          .viewbox(0, 0, this.maxX ,this.maxY)
          .size(this.maxX, this.maxY)
          .zoom(1)
  }

  polyline(coord){
    this.drawSVG.polyline(coord)
        .fill('none')
        .stroke({ width: 1, color: '#000' })
  }
}
