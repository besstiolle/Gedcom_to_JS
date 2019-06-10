"use strict";

var drawSVG = null

  var X = 2000
  var Y = 1000

function init(){

  document.getElementById('panel').classList.toggle('minify')
  document.getElementById('panel_open').addEventListener('click', function(e) {
    hiddePdfobjectWrapper()
    togglePanel()
  });
  document.getElementById('panel_close').addEventListener('click', function(e) {
    hiddePdfobjectWrapper()
    togglePanel()
  });
  document.getElementById('pdf1').addEventListener('click', function(e) {
    pdf()
  });
  document.getElementById('svg').addEventListener('click', function(e) {
    hiddePdfobjectWrapper()
  });

  draw()

}
function draw(){
  drawSVG = SVG().addTo('#svg')
  .size('100%','100%')
  .panZoom({zoomMin: 0.02, zoomMax: 20, zoomFactor:0.15})

  drawSVG.viewbox(0, 0, X , Y)

    drawSVG.polyline([0,0 , 0,Y , X,Y , X,0, 0,0])
        .fill('none')
        .stroke({ width: 1, color: '#000' })



      // Dessin de la box
      drawSVG.rect(200, 200)
          .fill('#F00')
          .move(2, 2)
          // Dessin de la box

          drawSVG.rect(200, 200)
              .fill('#00F')
              .move(X-200-2, Y-200-2)
  pdf()
}

function pdf(){

  drawSVG.viewbox(0, 0, X, Y)



  const pdfobjectWrapper = document.getElementById("pdfobjectWrapper");
  var pdfobject = document.getElementById("pdfobject");
  const svgElement = document.getElementsByTagName("svg")[0];

  //Show Wrapper
  pdfobjectWrapper.classList.remove("hidden")

  const pdf = new jsPDF('l', 'px', [X, Y]);

  console.info(window.innerWidth)
  console.info(window.innerHeight)
  console.info(X)
  console.info(Y)


  // render the svg element
  svg2pdf(svgElement, pdf, {
    xOffset: 0,
    yOffset: 0,
    scale: 20
  });


  pdfobject = document.createElement("embed");
  pdfobject.setAttribute("src", pdf.output('datauristring'));
  pdfobject.id = "pdfobject";
  pdfobject.type = "application/pdf"
  pdfobjectWrapper.appendChild(pdfobject);



}

function hiddePdfobjectWrapper(){
  document.getElementById("pdfobjectWrapper").classList.add("hidden")
}
function togglePanel(){
  document.getElementById('panel').classList.toggle('show')
  document.getElementById('panel').classList.toggle('minify')
  document.getElementById('panel_open').classList.toggle('hidden')
  document.getElementById('panel_close').classList.toggle('hidden')
}
