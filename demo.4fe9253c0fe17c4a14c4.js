"use strict";
(self["webpackChunkgedcom_to_js"] = self["webpackChunkgedcom_to_js"] || []).push([["demo"],{

/***/ 3396:
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/demo.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 7537);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, sans-serif;\n  color: #0f3c4b;\n  background-color: #e5edf1;\n}\n\n\na{\n  transition: color 0.2s ease, border-bottom-color 0.2s ease;\n  border-bottom: dotted 1px;\n  color: inherit;\n  text-decoration: none;\n}\n\n.hidden{\n  display:none !important;\n}\n\n/*****************/\n/* Drop File Box */\n/*****************/\n\n#box{\n  min-height: 100%;\n  font-size: 1.5rem;\n  background-color: #c8dadf;\n  position: relative;\n  text-align:center;\n}\n\n.box__file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.box__file + label {\n  max-width: 80%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n}\n.box__button {\n  font-weight: 700;\n  color: #e5edf1;\n  background-color: #39bfd3;\n  display: none;\n  padding: 8px 16px;\n  margin: 40px auto 0;\n}\n.box__input{\n  padding: 25vh;\n  /*padding: 30% 20px 0 20px;*/\n}\n.box__dragndrop,\n.box__uploading,\n.box__success,\n.box__error {\n  display: none;\n}\n\n#box.has-advanced-upload {\n  outline: 2px dashed #92b0b3;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n}\n\n#box.has-advanced-upload .box__dragndrop {\n  display: inline;\n}\n\n#box.is-dragover {\n  background-color: grey;\n}\n\n\n/*****************/\n/* ProgressBar */\n/*****************/\n\n#progressBar{\n  width: 50%;\n  max-width: 300px;\n  height: 30px;\n  background-color: #555;\n  margin: 10px auto;\n  border-radius: 5px;\n  padding: 5px;\n  position: relative;\n}\n\n#subProgressBar{\n  background-color: #999;\n  min-height: 90%;\n  float: left;\n}\n#textProgressBar{\n  color: #DDD;\n  text-align: center;\n  min-width: 100%;\n  min-height: 100%;\n  position: absolute;\n}\n\n.sample{\n  font-size: 0.8em;\n  margin-top:20px;\n}\n\n/*****************/\n/* SVG Render Box */\n/*****************/\n\n#svgWrapper{\n\n  font-family: monospace;\n  background-color: #b7d0f4;\n  padding:10px;\n  outline: 2px dashed #8cb7f7;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  height: calc(100% - 60px);\n  width: calc(100% - 20px);\n}\n\n/******************/\n/*  Header Menu   */\n/******************/\n#header{\n  background: #000;\n  color: #FFF;\n  font-size: 1.3em;\n  padding: 10px;\n  font-family: monospace;\n}\n\n#header a{\n  border-bottom: 0;\n}\n\n.entry{\n  cursor: pointer;\n}\n\n.entry:hover{\n  color: #82b0ed;\n  border-bottom: 1px dotted;\n}\n\n/*********************/\n/*  Root Switching   */\n/*********************/\n\n#selectRootWrapper{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #000;\n  opacity: 0.85;\n}\n\n#selectRoot{\n  width: 350px;\n  margin: 25vh auto;\n}\n\n#inputRoot{\n  text-align: center;\n  width: 90%;\n  margin: 10px;\n  font-size: 1.2em;\n}\n\n#selectRootWrapper select{\n  font-size: 1.2em;\n  margin: 10px auto;\n  width: 100%;\n}\n\n.buttons{\n  text-align: center;\n}\n\n.button{\n  padding: 5px;\n  background-color: #93d89c;\n  border: 1px solid #3c5d62;\n  color: #000;\n  display: inline-block;\n  font-family: monospace;\n  cursor: pointer;\n}\n\n.label{\n  display: block;\n  margin: 10px;\n  font-size: 1.3em;\n  color: #fff;\n  width: auto;\n  text-align: center;\n}\n/******************/\n/* PDF Render Box */\n/******************/\n#pdfobjectWrapper{\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  left: 5%;\n  position: fixed;\n  display: block;\n  overflow: hidden;\n}\n#pdfobject{\n  width: 100%;\n  height: 100%;\n}\n\n.wall{\n  width: 100%;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.9);\n  height: 100%;\n  display: block;\n  top: 0;\n}\n\n/**************************/\n/* Overlay when user wait */\n/**************************/\n\n#wait{\n  cursor:wait;\n}\n\n#wait span{\n  display: inline-block;\n  width: 100%;\n  font-size: 2em;\n  top: 40%;\n  position: absolute;\n  text-align: center;\n  color:#FFF;\n}\n\n#wait_cpt{\n  margin-top: 40px;\n}\n\n/***************************/\n/* Message box left bottom */\n/***************************/\n#message{\n  position: fixed;\n  display: block;\n  bottom: 20px;\n  left: 20px;\n  font-family: monospace;\n}\n\n/***************************/\n/* minimap righ bottom */\n/***************************/\n#minimapWrapper{\n  position: fixed;\n  display: block;\n  bottom: 20px;\n  right: 20px;\n  border: 1px solid #a9b4c6;\n  width: 200px;\n  height: 100px;\n  background-color: #c2d7f5;\n}\n\n/***************/\n/* Options Box */\n/***************/\n#optionsWall{\n  cursor: pointer;\n}\n#options {\n  width: 80%;\n  margin: 100px;\n  padding: 10px;\n  position: fixed;\n  background-color: #FFF;\n  top: 0%;\n}\n\n#options .option {\n\n}\n\n#options fieldset {\n  margin-bottom: 10px;\n}\n\n#options legend {\n\n}\n\n#options .option div {\n\n}\n\n#options label {\n\n}\n\n#tpl{\n  display: block;\n  width: 90%;\n  height: 100px;\n}\n\n\n#tplLabel{\n  font-size: 0.9em;\n}\n\n.tpl_left, .tpl_right{\n  width: 50%;\n  float:left;\n}\n.tpl_list{\n  columns: 2;\n  -webkit-columns: 2;\n  -moz-columns: 2;\n  font-size: 0.9em;\n  font-family: monospace;\n}\n.noBullet{\n  list-style: none;\n}\n#options input[type='button'] {\n  background-color: #93d89c;\n  border-radius: 2px;\n  border: 0px none;\n  display: block;\n  margin:auto;\n  padding:5px;\n}\n#options input[type='button']:hover{\n  background-color: #8dc995;\n  cursor: pointer;\n}\n#options input[type='button']:active{\n  transform: translateY(2px);\n  background-color: #8dc995;\n}", "",{"version":3,"sources":["webpack://./src/assets/css/demo.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, sans-serif;\n  color: #0f3c4b;\n  background-color: #e5edf1;\n}\n\n\na{\n  transition: color 0.2s ease, border-bottom-color 0.2s ease;\n  border-bottom: dotted 1px;\n  color: inherit;\n  text-decoration: none;\n}\n\n.hidden{\n  display:none !important;\n}\n\n/*****************/\n/* Drop File Box */\n/*****************/\n\n#box{\n  min-height: 100%;\n  font-size: 1.5rem;\n  background-color: #c8dadf;\n  position: relative;\n  text-align:center;\n}\n\n.box__file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.box__file + label {\n  max-width: 80%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n}\n.box__button {\n  font-weight: 700;\n  color: #e5edf1;\n  background-color: #39bfd3;\n  display: none;\n  padding: 8px 16px;\n  margin: 40px auto 0;\n}\n.box__input{\n  padding: 25vh;\n  /*padding: 30% 20px 0 20px;*/\n}\n.box__dragndrop,\n.box__uploading,\n.box__success,\n.box__error {\n  display: none;\n}\n\n#box.has-advanced-upload {\n  outline: 2px dashed #92b0b3;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n}\n\n#box.has-advanced-upload .box__dragndrop {\n  display: inline;\n}\n\n#box.is-dragover {\n  background-color: grey;\n}\n\n\n/*****************/\n/* ProgressBar */\n/*****************/\n\n#progressBar{\n  width: 50%;\n  max-width: 300px;\n  height: 30px;\n  background-color: #555;\n  margin: 10px auto;\n  border-radius: 5px;\n  padding: 5px;\n  position: relative;\n}\n\n#subProgressBar{\n  background-color: #999;\n  min-height: 90%;\n  float: left;\n}\n#textProgressBar{\n  color: #DDD;\n  text-align: center;\n  min-width: 100%;\n  min-height: 100%;\n  position: absolute;\n}\n\n.sample{\n  font-size: 0.8em;\n  margin-top:20px;\n}\n\n/*****************/\n/* SVG Render Box */\n/*****************/\n\n#svgWrapper{\n\n  font-family: monospace;\n  background-color: #b7d0f4;\n  padding:10px;\n  outline: 2px dashed #8cb7f7;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  height: calc(100% - 60px);\n  width: calc(100% - 20px);\n}\n\n/******************/\n/*  Header Menu   */\n/******************/\n#header{\n  background: #000;\n  color: #FFF;\n  font-size: 1.3em;\n  padding: 10px;\n  font-family: monospace;\n}\n\n#header a{\n  border-bottom: 0;\n}\n\n.entry{\n  cursor: pointer;\n}\n\n.entry:hover{\n  color: #82b0ed;\n  border-bottom: 1px dotted;\n}\n\n/*********************/\n/*  Root Switching   */\n/*********************/\n\n#selectRootWrapper{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #000;\n  opacity: 0.85;\n}\n\n#selectRoot{\n  width: 350px;\n  margin: 25vh auto;\n}\n\n#inputRoot{\n  text-align: center;\n  width: 90%;\n  margin: 10px;\n  font-size: 1.2em;\n}\n\n#selectRootWrapper select{\n  font-size: 1.2em;\n  margin: 10px auto;\n  width: 100%;\n}\n\n.buttons{\n  text-align: center;\n}\n\n.button{\n  padding: 5px;\n  background-color: #93d89c;\n  border: 1px solid #3c5d62;\n  color: #000;\n  display: inline-block;\n  font-family: monospace;\n  cursor: pointer;\n}\n\n.label{\n  display: block;\n  margin: 10px;\n  font-size: 1.3em;\n  color: #fff;\n  width: auto;\n  text-align: center;\n}\n/******************/\n/* PDF Render Box */\n/******************/\n#pdfobjectWrapper{\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  left: 5%;\n  position: fixed;\n  display: block;\n  overflow: hidden;\n}\n#pdfobject{\n  width: 100%;\n  height: 100%;\n}\n\n.wall{\n  width: 100%;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.9);\n  height: 100%;\n  display: block;\n  top: 0;\n}\n\n/**************************/\n/* Overlay when user wait */\n/**************************/\n\n#wait{\n  cursor:wait;\n}\n\n#wait span{\n  display: inline-block;\n  width: 100%;\n  font-size: 2em;\n  top: 40%;\n  position: absolute;\n  text-align: center;\n  color:#FFF;\n}\n\n#wait_cpt{\n  margin-top: 40px;\n}\n\n/***************************/\n/* Message box left bottom */\n/***************************/\n#message{\n  position: fixed;\n  display: block;\n  bottom: 20px;\n  left: 20px;\n  font-family: monospace;\n}\n\n/***************************/\n/* minimap righ bottom */\n/***************************/\n#minimapWrapper{\n  position: fixed;\n  display: block;\n  bottom: 20px;\n  right: 20px;\n  border: 1px solid #a9b4c6;\n  width: 200px;\n  height: 100px;\n  background-color: #c2d7f5;\n}\n\n/***************/\n/* Options Box */\n/***************/\n#optionsWall{\n  cursor: pointer;\n}\n#options {\n  width: 80%;\n  margin: 100px;\n  padding: 10px;\n  position: fixed;\n  background-color: #FFF;\n  top: 0%;\n}\n\n#options .option {\n\n}\n\n#options fieldset {\n  margin-bottom: 10px;\n}\n\n#options legend {\n\n}\n\n#options .option div {\n\n}\n\n#options label {\n\n}\n\n#tpl{\n  display: block;\n  width: 90%;\n  height: 100px;\n}\n\n\n#tplLabel{\n  font-size: 0.9em;\n}\n\n.tpl_left, .tpl_right{\n  width: 50%;\n  float:left;\n}\n.tpl_list{\n  columns: 2;\n  -webkit-columns: 2;\n  -moz-columns: 2;\n  font-size: 0.9em;\n  font-family: monospace;\n}\n.noBullet{\n  list-style: none;\n}\n#options input[type='button'] {\n  background-color: #93d89c;\n  border-radius: 2px;\n  border: 0px none;\n  display: block;\n  margin:auto;\n  padding:5px;\n}\n#options input[type='button']:hover{\n  background-color: #8dc995;\n  cursor: pointer;\n}\n#options input[type='button']:active{\n  transform: translateY(2px);\n  background-color: #8dc995;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 7873:
/*!*********************************!*\
  !*** ./src/assets/css/demo.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 3379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7795);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 569);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 3565);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 9216);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 4589);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./demo.css */ 3396);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 4980:
/*!************************************!*\
  !*** ./src/AbstractPdfRenderer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractPdfRenderer": () => (/* binding */ AbstractPdfRenderer)
/* harmony export */ });
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElements */ 770);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ 3331);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SVGRenderer */ 3209);



class AbstractPdfRenderer {
    constructor() {
        this.svgElement = _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_SVGWRAPPER.getElementsByTagName("svg")[0];
        this.orientation = 'p';
        this.pdf = null;
        this.previous = { viewbox: '', w: '0', h: '0', zoom: 0 };
    }
    generatePdf() {
        //Show Waiting spinner & PDF Wrapper
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_WAIT, _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_PDFWRAPPER]);
        //Purge all previous <embed /> tag generated
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.purge)(_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_PDFWRAPPER);
        //Saving current setting
        let comp = window.getComputedStyle(_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_SVGWRAPPER);
        this.previous = { viewbox: _SVGRenderer__WEBPACK_IMPORTED_MODULE_2__.SVGRenderer.container.viewbox().toString(),
            w: comp.getPropertyValue('width'),
            h: comp.getPropertyValue('height'),
            zoom: _SVGRenderer__WEBPACK_IMPORTED_MODULE_2__.SVGRenderer.container.zoom() };
        this.pdfViewBox();
    }
    resolveSvg2Pdf(promise) {
        promise.then((jspdf) => {
            const uri = jspdf.output('datauristring');
            if (uri.length < 5000000) {
                let pdfobject = document.createElement("embed");
                pdfobject.setAttribute("src", uri);
                pdfobject.id = "pdfobject";
                pdfobject.type = "application/pdf";
                _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_PDFWRAPPER.appendChild(pdfobject);
            }
            else {
                jspdf.save('myPDF.pdf');
                (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_PDFWRAPPER]);
            }
        }).finally(() => {
            (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_WAIT]);
            //Reset information post pdf generation                  
            _SVGRenderer__WEBPACK_IMPORTED_MODULE_2__.SVGRenderer.container.viewbox(this.previous.viewbox)
                .size(this.previous.w, this.previous.h)
                .zoom(this.previous.zoom);
        });
    }
    pdfViewBox() {
        let w = 100;
        if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionXMax / window.innerWidth < _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionYMax / window.innerHeight) {
            w = (window.innerWidth * 100 / (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionYMax * window.innerHeight / window.innerWidth));
        }
        _SVGRenderer__WEBPACK_IMPORTED_MODULE_2__.SVGRenderer.container.viewbox(0, 0, _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionYMax)
            .size(w + '%', '100%');
    }
}
AbstractPdfRenderer.RATIO_PX_2_CM = 40; //Default Ratio px => cm


/***/ }),

/***/ 86:
/*!**************************!*\
  !*** ./src/Box.class.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Box": () => (/* binding */ Box),
/* harmony export */   "BoxAbstract": () => (/* binding */ BoxAbstract),
/* harmony export */   "BoxV": () => (/* binding */ BoxV)
/* harmony export */ });
const CONST_LEFT_MARGIN = 20; // left margin
const CONST_TOP_MARGIN = 20; // top margin
const CONST_WIDTH_PADDING = 10; // horizontal padding between box
const CONST_HEIGHT_PADDING = 30; // vertical padding between box
const CONST_WIDTH = 200; //width of box in px
const CONST_HEIGHT = 75; //height of box in px
const CONST_WIDTH_V = 95; //width of box in px
const CONST_HEIGHT_V = 150; //height of box in px
class BoxAbstract {
    constructor(sosaWrapper, maxGeneration) {
        this.maxGeneration = null;
        this.generation = null;
        this.sosa = null;
        this.x = null;
        this.y = null;
        this.maxGeneration = maxGeneration;
        this.generation = sosaWrapper.generation;
        this.sosa = sosaWrapper.sosa;
        this.x = 0;
        this.y = 0;
    }
    setX(value) {
        this.x = value;
    }
    setY(value) {
        this.y = value;
    }
    shiftRight(value) {
        this.x += value;
    }
    getSosaOfMaxFather() {
        return this.sosa * Math.pow(2, this.maxGeneration - this.generation);
    }
    getMinSosaOfGeneration() {
        return Math.pow(2, (this.generation - 1));
    }
    getX() { return this.x; }
    getY() { return this.y; }
    static leftMargin() { return CONST_LEFT_MARGIN; }
    static topMargin() { return CONST_TOP_MARGIN; }
    static widthPadding() { return CONST_WIDTH_PADDING; }
    static heightPadding() { return CONST_HEIGHT_PADDING; }
}
class Box extends BoxAbstract {
    constructor(sosaWrapper, maxGeneration) {
        super(sosaWrapper, maxGeneration);
    }
    getBottomJunctionPoint() {
        return { "x": this.x + Box.width() / 2, "y": this.y + Box.height() };
    }
    getTopJunctionPoint() {
        return { "x": this.x + Box.width() / 2, "y": this.y };
    }
    static width() { return CONST_WIDTH; }
    static height() { return CONST_HEIGHT; }
}
class BoxV extends BoxAbstract {
    constructor(sosaWrapper, maxGeneration) {
        super(sosaWrapper, maxGeneration);
    }
    getBottomJunctionPoint() {
        return { "x": this.x + BoxV.width() / 2, "y": this.y + BoxV.height() };
    }
    getTopJunctionPoint() {
        return { "x": this.x + BoxV.width() / 2, "y": this.y };
    }
    //Not ready for a production use
    //static width(){return CONST_WIDTH_V}
    //static height(){return CONST_HEIGHT_V}
    static width() { return CONST_WIDTH; }
    static height() { return CONST_HEIGHT; }
}


/***/ }),

/***/ 7057:
/*!*********************************!*\
  !*** ./src/ContainerFactory.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compressContainer": () => (/* binding */ compressContainer),
/* harmony export */   "populateGrid": () => (/* binding */ populateGrid),
/* harmony export */   "setupBoxForGridEntry": () => (/* binding */ setupBoxForGridEntry)
/* harmony export */ });
/* harmony import */ var _struct_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./struct.class */ 7361);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ 3331);
/* harmony import */ var _Box_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box.class */ 86);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Options */ 5666);




/**
 *
 * @param sosaWrapper the sosa Wrapper always starting by 1
 * @param gedTechId the technical index code inside the GEDCOM file, can be != 1 the first time . Not the SOSA
 * @returns
 */
function populateGrid(sosaWrapper, gedTechId) {
    //Set firstGedTechInGrid for a smart redraw in UI
    if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.firstGedTechIdInGrid == null) {
        _Store__WEBPACK_IMPORTED_MODULE_1__.Store.firstGedTechIdInGrid = gedTechId;
    }
    //Avoid unecessary processing
    if (!_Store__WEBPACK_IMPORTED_MODULE_1__.Store.mapGedTechIdToIndividual.has(gedTechId)) {
        console.warn("gedTechId %o Not found in 'map GedTechId To Individual'. Sosa was %o", gedTechId, sosaWrapper.sosa);
        return;
    }
    let individual = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.mapGedTechIdToIndividual.get(gedTechId);
    let curSosa = sosaWrapper.sosa;
    let curGen = sosaWrapper.generation;
    //Case of Implexe
    let hasImplexe = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.positionProcessed.indexOf(gedTechId);
    let otherImplexeSosa = null;
    let otherImplexeGridEntry = null;
    //Limitation
    if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.getOptions().maxGeneration != -1 && curGen > _Store__WEBPACK_IMPORTED_MODULE_1__.Store.getOptions().maxGeneration) {
        console.warn("the generationMax limit of %o was reached. Sosa was %o'. Take a look at the options to change this limit", _Store__WEBPACK_IMPORTED_MODULE_1__.Store.getOptions().maxGeneration, sosaWrapper.sosa);
        return;
    }
    //Set maxSosaProcessed
    if (curSosa > _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.maxSosaProcessed) {
        _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.maxSosaProcessed = curSosa;
        _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.maxGenerationProcessed = curGen;
    }
    if (!_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapGenerationSosa.has(curGen)) {
        _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapGenerationSosa.set(curGen, []);
    }
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapGenerationSosa.get(curGen).push(curSosa);
    if (hasImplexe !== -1) {
        console.debug("implexe detected with gedTechId %o. Sosa was %o", gedTechId, sosaWrapper.sosa);
        sosaWrapper.isImplexe = true;
        //Update the other part of the implexe
        otherImplexeSosa = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapGedTechIdInGridToSosa.get(gedTechId);
        otherImplexeGridEntry = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.get(otherImplexeSosa);
        otherImplexeGridEntry.sosaWrapper.isImplexe = true;
        _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.set(otherImplexeSosa, otherImplexeGridEntry);
        _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.implexes.push(sosaWrapper.sosa);
    }
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.positionProcessed.push(gedTechId);
    //Setting here after the code for implexes to avoid a false auto-detection
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapGedTechIdInGridToSosa.set(gedTechId, sosaWrapper.sosa);
    let previousSosaWrapper = null;
    if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapRightSosaByGeneration.has(curGen)) {
        let previousSosa = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapRightSosaByGeneration.get(curGen).sosa;
        // Set "nextSosaWrapper" of previous
        if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.has(previousSosa)) {
            _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.get(previousSosa).nextSosaWrapper = sosaWrapper;
            previousSosaWrapper = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.get(previousSosa).sosaWrapper;
        }
    }
    //retrive Family of Individual
    let family = new _struct_class__WEBPACK_IMPORTED_MODULE_0__.Family();
    if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.mapCodeFamily.has(individual.famc)) {
        family = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.mapCodeFamily.get(individual.famc);
    }
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapRightSosaByGeneration.set(curGen, sosaWrapper);
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.set(curSosa, new _struct_class__WEBPACK_IMPORTED_MODULE_0__.VirtualGridEntry(sosaWrapper, individual, previousSosaWrapper));
    //Process parent only if not an Implexe & option said so.
    if (!sosaWrapper.isImplexe || (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.getOptions().implexes !== _Options__WEBPACK_IMPORTED_MODULE_3__.ImplexesType.colorHide && _Store__WEBPACK_IMPORTED_MODULE_1__.Store.getOptions().implexes !== _Options__WEBPACK_IMPORTED_MODULE_3__.ImplexesType.hide)) {
        if (family.father != null && family.father != undefined) {
            populateGrid(new _struct_class__WEBPACK_IMPORTED_MODULE_0__.SosaWrapper(sosaWrapper.sosaFather), family.father);
        }
        if (family.mother != null && family.mother != undefined) {
            populateGrid(new _struct_class__WEBPACK_IMPORTED_MODULE_0__.SosaWrapper(sosaWrapper.sosaMother), family.mother);
        }
    }
    return;
}
function setupBoxForGridEntry() {
    let box = null;
    let sosaWrapper = null;
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.forEach((gridEntry, sosa) => {
        //Generate Boxes
        sosaWrapper = gridEntry.sosaWrapper;
        if (sosaWrapper.generation > 5) {
            box = new _Box_class__WEBPACK_IMPORTED_MODULE_2__.BoxV(sosaWrapper, _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.maxGenerationProcessed); // Vertical Box
        }
        else {
            box = new _Box_class__WEBPACK_IMPORTED_MODULE_2__.Box(sosaWrapper, _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.maxGenerationProcessed); // Classic box
        }
        gridEntry.box = box;
    });
}
function compressContainer(sosaWrapper) {
    let fatherX = 0;
    let motherX = 0;
    let myselfX = 0;
    let previousX = 0;
    //Get compressed position of father if exists
    if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaFather)) {
        fatherX = compressContainer(new _struct_class__WEBPACK_IMPORTED_MODULE_0__.SosaWrapper(sosaWrapper.sosaFather));
    }
    //Get compressed position of mother if exists
    if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaMother)) {
        motherX = compressContainer(new _struct_class__WEBPACK_IMPORTED_MODULE_0__.SosaWrapper(sosaWrapper.sosaMother));
    }
    //Retrive previous box X-position(*) on the graph (on the left)
    // * => if exist : X position of previous boxe + box.width() + box.widthPadding()
    //   => if not : box.leftMargin()
    previousX = _getXPositionOnLeftBox(sosaWrapper);
    //Calcul current Y position based on
    let myselfY = _getYPosition(sosaWrapper);
    //If we don't have parents, let take previousX value
    if (fatherX == 0 && motherX == 0) {
        myselfX = previousX;
    }
    else {
        //Process our own position
        if (fatherX == 0 || motherX == 0) {
            myselfX = fatherX + motherX;
        }
        else {
            myselfX = Math.floor((fatherX + motherX) / 2);
        }
        //If there is a conflict with Previous box, resync ancestors and ourself
        if (myselfX < previousX) {
            //special case : 2 generations with != box
            let shift = previousX - myselfX;
            let ancestorsSosa = _getAllAncestorsMapOfSosaWrapper(sosaWrapper);
            let len = ancestorsSosa.length;
            for (var i = 0; i < len; i++) {
                _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.get(ancestorsSosa[i]).box.shiftRight(shift);
            }
            myselfX = previousX;
        }
    }
    //Set our own X/Y value
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosa).box.shiftRight(myselfX);
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosa).box.setY(myselfY);
    //Return our own value
    return myselfX;
}
function _getYPosition(sosaWrapper) {
    //If it's already calculated
    if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapGenerationYPosition.has(sosaWrapper.generation)) {
        return _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapGenerationYPosition.get(sosaWrapper.generation);
    }
    let y = 0;
    //Let's calculate it
    if (sosaWrapper.generation > 5) {
        // Number of generation above me * total height of boxV
        y = (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.maxGenerationProcessed - sosaWrapper.generation) * (_Box_class__WEBPACK_IMPORTED_MODULE_2__.BoxV.height() + _Box_class__WEBPACK_IMPORTED_MODULE_2__.BoxV.heightPadding());
    }
    else {
        // Number of generation (>5) above me * total height of boxV
        //  + Number of generation (max 5) above me * total height of box
        if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.maxGenerationProcessed > 5) {
            y = (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.maxGenerationProcessed - 5) * (_Box_class__WEBPACK_IMPORTED_MODULE_2__.BoxV.height() + _Box_class__WEBPACK_IMPORTED_MODULE_2__.BoxV.heightPadding());
        }
        y += (Math.min(5, _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.maxGenerationProcessed) - sosaWrapper.generation) * (_Box_class__WEBPACK_IMPORTED_MODULE_2__.Box.height() + _Box_class__WEBPACK_IMPORTED_MODULE_2__.Box.heightPadding());
    }
    y += _Box_class__WEBPACK_IMPORTED_MODULE_2__.BoxAbstract.topMargin();
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapGenerationYPosition.set(sosaWrapper.generation, y);
    return y;
}
function _getXPositionOnLeftBox(sosaWrapper) {
    let widthPlusWidthPadding = 0;
    let leftMargin = 0;
    if (sosaWrapper.generation > 5) {
        widthPlusWidthPadding = _Box_class__WEBPACK_IMPORTED_MODULE_2__.BoxV.width() + _Box_class__WEBPACK_IMPORTED_MODULE_2__.BoxV.widthPadding();
        leftMargin = _Box_class__WEBPACK_IMPORTED_MODULE_2__.BoxV.leftMargin();
    }
    else {
        widthPlusWidthPadding = _Box_class__WEBPACK_IMPORTED_MODULE_2__.Box.width() + _Box_class__WEBPACK_IMPORTED_MODULE_2__.Box.widthPadding();
        leftMargin = _Box_class__WEBPACK_IMPORTED_MODULE_2__.Box.leftMargin();
    }
    let previousSosaWrapper = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosa).previousSosaWrapper;
    if (previousSosaWrapper !== null) {
        return _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.get(previousSosaWrapper.sosa).box.getX() + widthPlusWidthPadding;
    }
    else {
        return leftMargin;
    }
}
/**
 * Return a Map with all Ancestors of a SosaWrapper
 */
function _getAllAncestorsMapOfSosaWrapper(sosaWrapper) {
    let array = [];
    if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosa)) {
        if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaFather)) {
            array.push(sosaWrapper.sosaFather);
        }
        if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaMother)) {
            array.push(sosaWrapper.sosaMother);
        }
        return array.concat(_getAllAncestorsMapOfSosaWrapper(new _struct_class__WEBPACK_IMPORTED_MODULE_0__.SosaWrapper(sosaWrapper.sosaFather)), _getAllAncestorsMapOfSosaWrapper(new _struct_class__WEBPACK_IMPORTED_MODULE_0__.SosaWrapper(sosaWrapper.sosaMother)));
    }
    return [];
}


/***/ }),

/***/ 6695:
/*!*****************************!*\
  !*** ./src/GedcomParser.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GedcomParser": () => (/* binding */ GedcomParser)
/* harmony export */ });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ 3331);
/* harmony import */ var _struct_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./struct.class */ 7361);


const REGEX_INDI = /^0 @I?([0-9]*)@ INDI$/;
const REGEX_NAME = /^1 NAME (.*)\/(.*)\/$/;
const REGEX_FAMC = /^1 FAMC @F?([0-9]+)@$/;
const REGEX_SEX = /^1 SEX ([FM])$/;
const REGEX_FAMILY = /^0 @F?([0-9]*)@ FAM$/;
const REGEX_HUSB = /^1 HUSB @I?([0-9]*)@$/;
const REGEX_WIFE = /^1 WIFE @I?([0-9]*)@$/;
const REGEX_BIRTH = /^1 BIRT[ ]?$/;
const REGEX_DEATH = /^1 DEAT[ ]?$/;
const REGEX_MARRIAGE = /^1 MARR[ ]?$/;
const REGEX_DATE = /^2 DATE (.*)$/;
const REGEX_PLACE = /^2 PLAC (.*)$/;
const REGEX_OCCUPATION = /^1 OCCU (.*)$/;
const REGEX_REPLACE_NAME = /"/g;
class GedcomParser {
    static parse(gedcomContent) {
        let line = null;
        let individual = null; // One Individu
        let family = null; //One Familly
        let matches = null;
        let lines = gedcomContent.split(/[\r\n]+/);
        let isIndividualPart = false;
        let isFamilyPart = false;
        let isBirthPart = false;
        let isDeathPart = false;
        let isMariagePart = false;
        let len = lines.length;
        for (var i = 0; i < len; i++) {
            line = lines[i];
            matches = line.match(REGEX_INDI);
            if (matches) {
                isIndividualPart = true;
                isFamilyPart = false;
                //Save previous indiv
                if (individual != null) {
                    individual.isProcessed = false;
                    _Store__WEBPACK_IMPORTED_MODULE_0__.Store.mapGedTechIdToIndividual.set(individual.id, individual);
                    isBirthPart = false;
                    isDeathPart = false;
                    if (_Store__WEBPACK_IMPORTED_MODULE_0__.Store.firstGedTechIdParsed == null) {
                        _Store__WEBPACK_IMPORTED_MODULE_0__.Store.firstGedTechIdParsed = individual.id;
                    }
                }
                // Initiate class
                individual = new _struct_class__WEBPACK_IMPORTED_MODULE_1__.Individual();
                individual.id = parseInt(matches[1].trim());
                continue;
            }
            matches = line.match(REGEX_FAMILY);
            if (matches) {
                isFamilyPart = true;
                isIndividualPart = false;
                //Save previous family
                if (family != null) {
                    _Store__WEBPACK_IMPORTED_MODULE_0__.Store.mapCodeFamily.set(family.id, family);
                }
                // Initiate array
                family = new _struct_class__WEBPACK_IMPORTED_MODULE_1__.Family();
                family.id = parseInt(matches[1].trim());
                continue;
            }
            if (isIndividualPart) {
                matches = line.match(REGEX_NAME);
                if (matches && individual != null) {
                    individual.firstname = matches[1].replace(REGEX_REPLACE_NAME, '').trim();
                    individual.lastname = matches[2].trim();
                    continue;
                }
                matches = line.match(REGEX_FAMC);
                if (matches && individual != null) {
                    individual.famc = parseInt(matches[1].trim());
                    continue;
                }
                matches = line.match(REGEX_SEX);
                if (matches && individual != null) {
                    individual.sex = matches[1].trim();
                    continue;
                }
                matches = line.match(REGEX_BIRTH);
                if (matches && individual != null) {
                    isBirthPart = true;
                    isDeathPart = false;
                    continue;
                }
                matches = line.match(REGEX_DEATH);
                if (matches && individual != null) {
                    isDeathPart = true;
                    isBirthPart = false;
                    continue;
                }
                matches = line.match(REGEX_DATE);
                if (matches && individual != null) {
                    if (isBirthPart) {
                        individual.birthDate = matches[1].trim();
                    }
                    else if (isDeathPart) {
                        individual.deathDate = matches[1].trim();
                    }
                    continue;
                }
                matches = line.match(REGEX_PLACE);
                if (matches && individual != null) {
                    if (isBirthPart) {
                        individual.birthPlace = matches[1].trim();
                    }
                    else if (isDeathPart) {
                        individual.deathPlace = matches[1].trim();
                    }
                    continue;
                }
                matches = line.match(REGEX_OCCUPATION);
                if (matches && individual != null) {
                    individual.occupation = matches[1].trim();
                    continue;
                }
            }
            if (isFamilyPart) {
                matches = line.match(REGEX_HUSB);
                if (matches && individual != null) {
                    family.father = parseInt(matches[1].trim());
                    continue;
                }
                matches = line.match(REGEX_WIFE);
                if (matches && individual != null) {
                    family.mother = parseInt(matches[1].trim());
                    continue;
                }
                matches = line.match(REGEX_MARRIAGE);
                if (matches)
                    if (matches && individual != null) {
                        isMariagePart = true;
                        continue;
                    }
                matches = line.match(REGEX_DATE);
                if (matches && individual != null) {
                    if (isMariagePart) {
                        family.tmpMariageDate = matches[1].trim();
                    }
                    continue;
                }
                matches = line.match(REGEX_PLACE);
                if (matches && individual != null) {
                    if (isMariagePart) {
                        family.tmpMariagePlace = matches[1].trim();
                    }
                    continue;
                }
            }
        }
        //Re work family to propagate Weddings informations to parents
        _Store__WEBPACK_IMPORTED_MODULE_0__.Store.mapCodeFamily.forEach((family, codeFamily) => {
            //Process the father
            if (family.father !== undefined && family.father !== null) {
                individual = _Store__WEBPACK_IMPORTED_MODULE_0__.Store.mapGedTechIdToIndividual.get(family.father);
                if (individual == null) {
                    console.info("individual null for idTech %o ", family.father);
                }
                individual.mariageDate = family.tmpMariageDate;
                individual.mariagePlace = family.tmpMariagePlace;
                _Store__WEBPACK_IMPORTED_MODULE_0__.Store.mapGedTechIdToIndividual.set(family.father, individual);
            }
            //Process the mother
            if (family.mother !== undefined && family.mother !== null) {
                individual = _Store__WEBPACK_IMPORTED_MODULE_0__.Store.mapGedTechIdToIndividual.get(family.mother);
                if (individual == null) {
                    console.info("individual null for idTech %o ", family.mother);
                }
                individual.mariageDate = family.tmpMariageDate;
                individual.mariagePlace = family.tmpMariagePlace;
                _Store__WEBPACK_IMPORTED_MODULE_0__.Store.mapGedTechIdToIndividual.set(family.mother, individual);
            }
            family.tmpMariageDate = null;
            family.tmpMariagePlace = null;
        });
    }
}


/***/ }),

/***/ 770:
/*!*****************************!*\
  !*** ./src/HtmlElements.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_HE_FILE": () => (/* binding */ _HE_FILE),
/* harmony export */   "_HE_FORM": () => (/* binding */ _HE_FORM),
/* harmony export */   "_HE_HEADER": () => (/* binding */ _HE_HEADER),
/* harmony export */   "_HE_MESSAGE": () => (/* binding */ _HE_MESSAGE),
/* harmony export */   "_HE_MINISVGWRAPPER": () => (/* binding */ _HE_MINISVGWRAPPER),
/* harmony export */   "_HE_OPTIONS": () => (/* binding */ _HE_OPTIONS),
/* harmony export */   "_HE_OPTIONS_ACTION_BUTTON": () => (/* binding */ _HE_OPTIONS_ACTION_BUTTON),
/* harmony export */   "_HE_OPTIONS_IMPLEXES_COLOR": () => (/* binding */ _HE_OPTIONS_IMPLEXES_COLOR),
/* harmony export */   "_HE_OPTIONS_IMPLEXES_COLOR_HIDE": () => (/* binding */ _HE_OPTIONS_IMPLEXES_COLOR_HIDE),
/* harmony export */   "_HE_OPTIONS_IMPLEXES_HIDE": () => (/* binding */ _HE_OPTIONS_IMPLEXES_HIDE),
/* harmony export */   "_HE_OPTIONS_IMPLEXES_NOTHING": () => (/* binding */ _HE_OPTIONS_IMPLEXES_NOTHING),
/* harmony export */   "_HE_OPTIONS_MAXGEN": () => (/* binding */ _HE_OPTIONS_MAXGEN),
/* harmony export */   "_HE_OPTIONS_SUBMIT": () => (/* binding */ _HE_OPTIONS_SUBMIT),
/* harmony export */   "_HE_OPTIONS_TEMPLATE": () => (/* binding */ _HE_OPTIONS_TEMPLATE),
/* harmony export */   "_HE_OPTIONS_TEMPLATE_RESET": () => (/* binding */ _HE_OPTIONS_TEMPLATE_RESET),
/* harmony export */   "_HE_OPTIONS_WALL": () => (/* binding */ _HE_OPTIONS_WALL),
/* harmony export */   "_HE_PDFWRAPPER": () => (/* binding */ _HE_PDFWRAPPER),
/* harmony export */   "_HE_PDF_ACTION_BUTTON": () => (/* binding */ _HE_PDF_ACTION_BUTTON),
/* harmony export */   "_HE_PDF_MULTIPAGE_ACTION_BUTTON": () => (/* binding */ _HE_PDF_MULTIPAGE_ACTION_BUTTON),
/* harmony export */   "_HE_PNG_ACTION_BUTTON": () => (/* binding */ _HE_PNG_ACTION_BUTTON),
/* harmony export */   "_HE_PROGRESSBAR": () => (/* binding */ _HE_PROGRESSBAR),
/* harmony export */   "_HE_PROGRESSBAR_SUB": () => (/* binding */ _HE_PROGRESSBAR_SUB),
/* harmony export */   "_HE_PROGRESSBAR_TXT": () => (/* binding */ _HE_PROGRESSBAR_TXT),
/* harmony export */   "_HE_ROOT_CANCEL": () => (/* binding */ _HE_ROOT_CANCEL),
/* harmony export */   "_HE_ROOT_EXEC": () => (/* binding */ _HE_ROOT_EXEC),
/* harmony export */   "_HE_ROOT_INPUT": () => (/* binding */ _HE_ROOT_INPUT),
/* harmony export */   "_HE_ROOT_NORESULT": () => (/* binding */ _HE_ROOT_NORESULT),
/* harmony export */   "_HE_ROOT_RESULTS": () => (/* binding */ _HE_ROOT_RESULTS),
/* harmony export */   "_HE_ROOT_SELECTWRAPPER": () => (/* binding */ _HE_ROOT_SELECTWRAPPER),
/* harmony export */   "_HE_ROOT_SWITCH": () => (/* binding */ _HE_ROOT_SWITCH),
/* harmony export */   "_HE_STARTTYPE": () => (/* binding */ _HE_STARTTYPE),
/* harmony export */   "_HE_SVGWRAPPER": () => (/* binding */ _HE_SVGWRAPPER),
/* harmony export */   "_HE_WAIT": () => (/* binding */ _HE_WAIT),
/* harmony export */   "_HE_WAIT_CPT": () => (/* binding */ _HE_WAIT_CPT),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "purge": () => (/* binding */ purge),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
const _HE_FILE = document.getElementById('file');
const _HE_FORM = document.getElementById('box');
const _HE_PDF_ACTION_BUTTON = document.getElementById('pdf1');
const _HE_PDF_MULTIPAGE_ACTION_BUTTON = document.getElementById('pdf2');
const _HE_PNG_ACTION_BUTTON = document.getElementById('img1');
const _HE_OPTIONS_ACTION_BUTTON = document.getElementById('showOptions');
const _HE_SVGWRAPPER = document.getElementById('svgWrapper');
const _HE_MINISVGWRAPPER = document.getElementById('minimapWrapper');
const _HE_ROOT_INPUT = document.getElementById('inputRoot');
const _HE_ROOT_EXEC = document.getElementById('execRoot');
const _HE_ROOT_CANCEL = document.getElementById('cancelRoot');
const _HE_ROOT_SWITCH = document.getElementById('switchRoot');
const _HE_ROOT_RESULTS = document.getElementById('resultsRoot');
const _HE_ROOT_SELECTWRAPPER = document.getElementById('selectRootWrapper');
const _HE_ROOT_NORESULT = document.getElementById('noResult');
const _HE_PROGRESSBAR = document.getElementById('progressBar');
const _HE_PROGRESSBAR_SUB = document.getElementById('subProgressBar');
const _HE_PROGRESSBAR_TXT = document.getElementById('textProgressBar');
const _HE_HEADER = document.getElementById('header');
const _HE_PDFWRAPPER = document.getElementById('pdfobjectWrapper');
const _HE_STARTTYPE = document.getElementById('startType');
const _HE_WAIT = document.getElementById('wait');
const _HE_WAIT_CPT = document.getElementById('wait_cpt');
const _HE_MESSAGE = document.getElementById('message');
/* Options section */
const _HE_OPTIONS = document.getElementById('options');
const _HE_OPTIONS_WALL = document.getElementById('optionsWall');
const _HE_OPTIONS_IMPLEXES_NOTHING = document.getElementById('nothing');
const _HE_OPTIONS_IMPLEXES_HIDE = document.getElementById('hide');
const _HE_OPTIONS_IMPLEXES_COLOR = document.getElementById('color');
const _HE_OPTIONS_IMPLEXES_COLOR_HIDE = document.getElementById('colorHide');
const _HE_OPTIONS_TEMPLATE = document.getElementById('tpl');
const _HE_OPTIONS_TEMPLATE_RESET = document.getElementById('tpl_reset');
const _HE_OPTIONS_MAXGEN = document.getElementById('maxGeneration');
const _HE_OPTIONS_SUBMIT = document.getElementById('submitOptions');
function hide(htmlElementIds) {
    htmlElementIds.forEach(htmlElement => {
        htmlElement.classList.add('hidden');
    });
}
function show(htmlElementIds) {
    htmlElementIds.forEach(htmlElement => {
        htmlElement.classList.remove('hidden');
    });
}
function purge(htmlElement) {
    // .innerHtml='' is not recommended because it doesn’t remove the event handlers of the child nodes, which might cause a memory leak.
    while (htmlElement.firstChild) {
        htmlElement.removeChild(htmlElement.firstChild);
    }
}


/***/ }),

/***/ 5526:
/*!****************************!*\
  !*** ./src/ImgRenderer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeshot": () => (/* binding */ takeshot),
/* harmony export */   "toYYYYMMDD_hhmm": () => (/* binding */ toYYYYMMDD_hhmm)
/* harmony export */ });
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ 1120);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HtmlElements */ 770);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store */ 3331);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGRenderer */ 3209);




/**
 * Generate a screenshot from the chart and save it on computer as a png image
 */
function takeshot() {
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_1__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_WAIT]);
    let comp = window.getComputedStyle(_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_SVGWRAPPER);
    let previous = { viewbox: _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.container.viewbox().toString(),
        w: comp.getPropertyValue('width'),
        h: comp.getPropertyValue('height'),
        zoom: _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.container.zoom() };
    _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_SVGWRAPPER.style.width = _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionXMax + 'px';
    _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_SVGWRAPPER.style.height = _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionYMax + 'px';
    _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.container.viewbox(0, 0, _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionYMax)
        .size(_Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionYMax)
        .zoom(1);
    html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_SVGWRAPPER, {
        ignoreElements: function (el) { return el.classList.contains('toExcludeFromSnapshot'); },
        logging: false
    }).then(function (canvas) {
        canvas.toBlob(function (blob) {
            download(blob, ".png");
        });
    }).finally(() => {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_1__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_WAIT]);
        //Reset information post pdf generation                  
        _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.container.viewbox(previous.viewbox)
            .size(previous.w, previous.h)
            .zoom(previous.zoom);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_SVGWRAPPER.style.width = "";
        _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_SVGWRAPPER.style.height = "";
    });
}
/**
 * Implement a custom download file
 * @param blob the binaries to download
 * @param extensionName the name of the file
 */
function download(blob, extensionName) {
    var url = URL.createObjectURL(blob);
    var downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = "gedcom_"
        + toYYYYMMDD_hhmm(new Date())
        + extensionName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
/**
 * Return the date to a string validating the format YYYYMMDD_HHmm
 * @param date the date to parse into a ISO date format YYYYMMDD_HHmm
 * @returns string the format YYYYMMDD_HHmm
 */
function toYYYYMMDD_hhmm(date) {
    return date.getFullYear().toString().padStart(4, '0')
        + (date.getMonth() + 1).toString().padStart(2, '0')
        + date.getDate().toString().padStart(2, '0')
        + '_'
        + date.getHours().toString().padStart(2, '0')
        + date.getMinutes().toString().padStart(2, '0');
}


/***/ }),

/***/ 5530:
/*!***********************!*\
  !*** ./src/Logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logger": () => (/* binding */ Logger)
/* harmony export */ });
class Logger {
    static init() {
        Logger.timerStart = Date.now();
        Logger.timerStep = Date.now();
    }
    static log(message) {
        console.debug(message + " ms elapsed = " + (Date.now() - Logger.timerStep) + "ms" + " / " + (Date.now() - Logger.timerStart) + "ms");
        Logger.timerStep = Date.now();
    }
}
Logger.timerStart = null;
Logger.timerStep = null;


/***/ }),

/***/ 3484:
/*!********************************!*\
  !*** ./src/MinimapRendered.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MinimapRenderer": () => (/* binding */ MinimapRenderer)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ 5500);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ 3331);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HtmlElements */ 770);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGRenderer */ 3209);




class MinimapRenderer {
    static drawMinimap() {
        MinimapRenderer.minimap = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().addTo(_HtmlElements__WEBPACK_IMPORTED_MODULE_2__._HE_MINISVGWRAPPER);
        MinimapRenderer.minimapResize();
        MinimapRenderer.minimapBox();
    }
    static minimapResize() {
        const max = 200;
        const min = 100;
        let w, h = 0;
        if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionXMax > _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionYMax) {
            w = max;
            h = Math.max(min, _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionYMax * max / _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionXMax);
        }
        else {
            w = Math.max(min, _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionXMax * max / _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionYMax);
            h = max;
        }
        _HtmlElements__WEBPACK_IMPORTED_MODULE_2__._HE_MINISVGWRAPPER.style.width = w + 'px';
        _HtmlElements__WEBPACK_IMPORTED_MODULE_2__._HE_MINISVGWRAPPER.style.height = h + 'px';
        //Reset focus rect
        MinimapRenderer.focus = null;
    }
    static plugEvents() {
        //Event on the main SVG
        let svgTag = _HtmlElements__WEBPACK_IMPORTED_MODULE_2__._HE_SVGWRAPPER.getElementsByTagName("svg")[0];
        svgTag.addEventListener("zoom", function (event) { MinimapRenderer.drawFocus(); }, false);
        svgTag.addEventListener("mousedown ", function (event) { MinimapRenderer.drawFocus(); }, false);
        svgTag.addEventListener("mouseup", function (event) { MinimapRenderer.drawFocus(); }, false);
        //Event on the main SVG
        let minimapTag = _HtmlElements__WEBPACK_IMPORTED_MODULE_2__._HE_MINISVGWRAPPER.getElementsByTagName("svg")[0];
        minimapTag.addEventListener("mousedown ", function (event) { _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.changeFocus(event); }, false);
        minimapTag.addEventListener("mouseup", function (event) { _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.changeFocus(event); }, false);
    }
    static drawFocus() {
        let box = _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.container.viewbox();
        if (this.focus == null) {
            this.focus = MinimapRenderer.minimap.rect(1, 1)
                .fill("rgba(255, 0, 0, 0.2)")
                .move(-10000, -10000)
                .stroke({ width: 2, color: "rgba(255, 0, 0, 0.37)" })
                .front();
        }
        this.focus.x(box.x).y(box.y).width(box.width).height(box.height);
    }
    static minimapBox() {
        MinimapRenderer.minimap
            .viewbox(0, 0, _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionYMax)
            .size('100%', '100%');
    }
}
MinimapRenderer.minimap = null;
MinimapRenderer.focus = null;


/***/ }),

/***/ 9605:
/*!*********************************!*\
  !*** ./src/MultiPDFRenderer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiPDFRenderer": () => (/* binding */ MultiPDFRenderer)
/* harmony export */ });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 1819);
/* harmony import */ var svg2pdf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg2pdf.js */ 9618);
/* harmony import */ var _AbstractPdfRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractPdfRenderer */ 4980);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HtmlElements */ 770);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Store */ 3331);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SVGRenderer */ 3209);






class MultiPDFRenderer extends _AbstractPdfRenderer__WEBPACK_IMPORTED_MODULE_2__.AbstractPdfRenderer {
    constructor() {
        super();
        this.PDF_MULTIPAGE_MARGIN_CM = 1; //Margin on each pdf page in cm
    }
    generatePdf() {
        super.generatePdf();
        let pdf = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF(this.orientation, "cm", "a4");
        let padWidth = pdf.internal.pageSize.getWidth() - 2 * this.PDF_MULTIPAGE_MARGIN_CM;
        let padHeight = pdf.internal.pageSize.getHeight() - 2 * this.PDF_MULTIPAGE_MARGIN_CM;
        let totalPages = MultiPDFRenderer.expectedPageCount();
        setTimeout(() => {
            let promise = this.addPage(this.svgElement, pdf, 0, padWidth, 0, padHeight, 0, totalPages);
            this.resolveSvg2Pdf(promise);
        }, 1);
    }
    addPage(svgElement, pdf, _x, padWidthCm, _y, padHeightCm, step, totalPages) {
        let isEnd = false;
        return new Promise((resolve) => {
            this.pdfPartialViewBox(_x * padWidthCm * MultiPDFRenderer.RATIO_PX_2_CM, _y * padHeightCm * MultiPDFRenderer.RATIO_PX_2_CM, padWidthCm * MultiPDFRenderer.RATIO_PX_2_CM, padHeightCm * MultiPDFRenderer.RATIO_PX_2_CM);
            (0,svg2pdf_js__WEBPACK_IMPORTED_MODULE_1__.svg2pdf)(svgElement, pdf, {
                x: this.PDF_MULTIPAGE_MARGIN_CM,
                y: this.PDF_MULTIPAGE_MARGIN_CM,
                width: padWidthCm,
                height: padHeightCm, //Largeur prise sur le PDF => A4 = padWidth
            }).then(() => {
                _y++;
                //If we reach the bottom of the SVG
                if (_y * padHeightCm > _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionYMax / MultiPDFRenderer.RATIO_PX_2_CM) {
                    _y = 0;
                    _x++;
                    //If we reach the bottom/right of the SVG
                    if (_x * padWidthCm > _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionXMax / MultiPDFRenderer.RATIO_PX_2_CM) {
                        isEnd = true;
                    }
                }
                if (isEnd) {
                    resolve(pdf);
                }
                else {
                    pdf.addPage();
                    step++;
                    _HtmlElements__WEBPACK_IMPORTED_MODULE_3__._HE_WAIT_CPT.innerHTML = `${step} / ${totalPages}`;
                    setTimeout(() => {
                        this.addPage(svgElement, pdf, _x, padWidthCm, _y, padHeightCm, step, totalPages).then(() => {
                            resolve(pdf);
                        });
                    }, 1);
                }
            });
        });
    }
    pdfPartialViewBox(x, y, width, height) {
        _SVGRenderer__WEBPACK_IMPORTED_MODULE_5__.SVGRenderer.container.viewbox(x, y, width, height)
            .size('100%', '100%');
    }
    static expectedPageCount() {
        return Math.ceil(_Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionXMax / MultiPDFRenderer.RATIO_PX_2_CM / (21 - 2)) * Math.ceil(_Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionYMax / MultiPDFRenderer.RATIO_PX_2_CM / (29.7 - 2));
    }
}


/***/ }),

/***/ 5666:
/*!************************!*\
  !*** ./src/Options.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImplexesType": () => (/* binding */ ImplexesType),
/* harmony export */   "OptionBusiness": () => (/* binding */ OptionBusiness),
/* harmony export */   "OptionRepository": () => (/* binding */ OptionRepository),
/* harmony export */   "Options": () => (/* binding */ Options)
/* harmony export */ });
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo */ 6099);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HtmlElements */ 770);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store */ 3331);



class ImplexesType {
}
ImplexesType.nothing = "nothing";
ImplexesType.hide = "hide";
ImplexesType.color = "color";
ImplexesType.colorHide = "colorHide";
const DEFAULT_TEMPLATE = `_FIRSTNAME_ _LASTNAME_
¤ _BIRTH_DATE_ _BIRTH_PLACE_
U _MARRIAGE_DATE_ _MARRIAGE_PLACE_
X _DEATH_DATE_ _DEATH_PLACE_
_OCCUPATION_`;
class Options {
    constructor(implexes = null, maxGeneration = null, template = null) {
        this.implexes = ImplexesType.nothing;
        this.maxGeneration = 100;
        this.template = DEFAULT_TEMPLATE;
        this.implexes = this.getValidImplexe(implexes);
        this.maxGeneration = this.getValideMaxGeneration(maxGeneration);
        this.template = this.getValideTemplate(template);
    }
    parse(json) {
        let object = {};
        if (json != null) {
            object = JSON.parse(json);
        }
        this.implexes = this.getValidImplexe(object['implexes']);
        this.maxGeneration = this.getValideMaxGeneration("" + object['maxGeneration']);
        this.template = this.getValideTemplate(object['template']);
        return this;
    }
    getValidImplexe(str) {
        if (ImplexesType.nothing === str) {
            return ImplexesType.nothing;
        }
        if (ImplexesType.hide === str) {
            return ImplexesType.hide;
        }
        if (ImplexesType.color === str) {
            return ImplexesType.color;
        }
        if (ImplexesType.colorHide === str) {
            return ImplexesType.colorHide;
        }
        //Default value
        return ImplexesType.nothing;
    }
    getValideMaxGeneration(str) {
        let value = 100;
        if (str != null && str.match(/^\-?[0-9]+$/)) {
            value = parseInt(str);
            if (value > 100 || value == 0 || value < -1) {
                value = 100;
            }
        }
        return value;
    }
    getValideTemplate(str) {
        if (str == null || str == undefined) {
            return DEFAULT_TEMPLATE;
        }
        return str;
        //TODO verify validation & return default template
        //return DEFAULT_TEMPLATE
    }
}
class OptionRepository {
    /**
     *  Save Option into the localstorage
     * @param options
     */
    static saveOptions(options) {
        localStorage.setItem('GedcomOptions', JSON.stringify(options));
    }
    static getOptions() {
        let options = new Options();
        return options.parse(localStorage.getItem('GedcomOptions'));
    }
}
class OptionBusiness {
    static refreshTemplateIntoUI() {
        _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_TEMPLATE.value = DEFAULT_TEMPLATE;
    }
    static refreshOptionsIntoUI() {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_1__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS, _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_WALL]);
        let options = OptionRepository.getOptions();
        _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_TEMPLATE.value = options.template;
        _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_MAXGEN.value = options.maxGeneration + '';
        switch (options.implexes) {
            case ImplexesType.nothing:
                _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_IMPLEXES_NOTHING.checked = true;
                break;
            case ImplexesType.hide:
                _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_IMPLEXES_HIDE.checked = true;
                break;
            case ImplexesType.color:
                _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_IMPLEXES_COLOR.checked = true;
                break;
            case ImplexesType.colorHide:
                _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_IMPLEXES_COLOR_HIDE.checked = true;
                break;
            default:
                _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_IMPLEXES_NOTHING.checked = true;
                break;
        }
    }
    static saveOptionsfromUI() {
        let implexes = ImplexesType.nothing;
        if (_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_IMPLEXES_HIDE.checked) {
            implexes = ImplexesType.hide;
        }
        if (_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_IMPLEXES_COLOR.checked) {
            implexes = ImplexesType.color;
        }
        if (_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_IMPLEXES_COLOR_HIDE.checked) {
            implexes = ImplexesType.colorHide;
        }
        let options = new Options(implexes, _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_MAXGEN.value, _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_TEMPLATE.value);
        //reset cache of Store
        _Store__WEBPACK_IMPORTED_MODULE_2__.Store.setOptions(options);
        //saving options 
        OptionRepository.saveOptions(options);
        OptionBusiness.hideOptions();
        //Redraw
        (0,_demo__WEBPACK_IMPORTED_MODULE_0__.reDraw)(true);
    }
    static hideOptions() {
        //hiding options HTML elements
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_1__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS, _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HE_OPTIONS_WALL]);
    }
}


/***/ }),

/***/ 1282:
/*!****************************!*\
  !*** ./src/PDFRenderer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PDFRenderer": () => (/* binding */ PDFRenderer)
/* harmony export */ });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 1819);
/* harmony import */ var svg2pdf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg2pdf.js */ 9618);
/* harmony import */ var _AbstractPdfRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractPdfRenderer */ 4980);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store */ 3331);




const PDF_HARD_LIMIT = 5080; //PDF is limited to 5080 mm max https://github.com/parallax/jsPDF/issues/705
class PDFRenderer extends _AbstractPdfRenderer__WEBPACK_IMPORTED_MODULE_2__.AbstractPdfRenderer {
    constructor() { super(); }
    generatePdf() {
        super.generatePdf();
        if (_Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax < _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax) {
            this.orientation = 'l';
        }
        let ratioUsed = PDFRenderer.RATIO_PX_2_CM;
        if (this.orientation == 'l' && _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax / PDFRenderer.RATIO_PX_2_CM * 10 > PDF_HARD_LIMIT) {
            ratioUsed = _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax * 10 / PDF_HARD_LIMIT;
        }
        if (this.orientation == 'p' && _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax / PDFRenderer.RATIO_PX_2_CM * 10 > PDF_HARD_LIMIT) {
            ratioUsed = _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax * 10 / PDF_HARD_LIMIT;
        }
        this.pdf = new jspdf__WEBPACK_IMPORTED_MODULE_0__.jsPDF(this.orientation, 'cm', [_Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax / ratioUsed, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax / ratioUsed]);
        // render the svg element
        let promise = (0,svg2pdf_js__WEBPACK_IMPORTED_MODULE_1__.svg2pdf)(this.svgElement, this.pdf, {
            x: 0,
            y: 0,
            width: _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax / ratioUsed,
            height: _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax / ratioUsed
        });
        this.resolveSvg2Pdf(promise);
    }
    static expectedSize() {
        return { x: _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax / PDFRenderer.RATIO_PX_2_CM, y: _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax / PDFRenderer.RATIO_PX_2_CM };
    }
}


/***/ }),

/***/ 203:
/*!**********************************!*\
  !*** ./src/ProgressBar.class.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBar": () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElements */ 770);

class ProgressBar {
    constructor(nbSteps) {
        this.nbSteps = null;
        this.currentStep = null;
        this.message = null;
        this.nbSteps = nbSteps;
        this.currentStep = 0;
        this.message = "";
        this.render();
    }
    initiateProgressBar(message) {
        this.message = message;
        this.currentStep = 0;
        this.render();
    }
    movingProgressBar(message) {
        this.message = message;
        this.currentStep++;
        this.render();
    }
    hidingProgressBar() {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_PROGRESSBAR]);
    }
    render() {
        _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_PROGRESSBAR_SUB.style.width = this.currentStep * (100 / this.nbSteps) + '%';
        _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_PROGRESSBAR_TXT.innerHTML = this.message;
    }
}


/***/ }),

/***/ 5957:
/*!*****************************!*\
  !*** ./src/RootSwitcher.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancelRoot": () => (/* binding */ cancelRoot),
/* harmony export */   "showRoot": () => (/* binding */ showRoot),
/* harmony export */   "showRoots": () => (/* binding */ showRoots),
/* harmony export */   "typingRoot": () => (/* binding */ typingRoot)
/* harmony export */ });
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElements */ 770);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ 3331);


function cancelRoot() {
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_SELECTWRAPPER]);
}
function showRoot() {
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_SELECTWRAPPER]);
}
function typingRoot() {
    var searchTyped = _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_INPUT.value.trim();
    if (searchTyped.length < 4) {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_STARTTYPE, _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_RESULTS, _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_EXEC, _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_NORESULT]);
        return;
    }
    else {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_STARTTYPE]);
    }
    var listSosa = [];
    let mapResult = new Map();
    let mapResultByPriority = new Map();
    let searches = searchTyped.replace(/[ ]+/g, " ").split(" ");
    let searchesRegex = [];
    searches.forEach(aSearch => {
        searchesRegex.push(new RegExp(aSearch, "ig"));
    });
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.mapGedTechIdToIndividual.forEach((individual, sosa) => {
        searchesRegex.forEach((oneSearchRegex) => {
            if (individual.firstname.search(oneSearchRegex) >= 0 || individual.lastname.search(oneSearchRegex) >= 0) {
                listSosa.push(sosa);
                if (!mapResult.has(sosa)) {
                    mapResult.set(sosa, 1);
                }
                else {
                    mapResult.set(sosa, mapResult.get(sosa) + 1);
                }
            }
        });
    });
    //A second round to invert map 
    let arrOfSOSA = [];
    let maxPrio = 0;
    mapResult.forEach((value, key) => {
        if (!mapResultByPriority.has(value)) {
            arrOfSOSA = [];
        }
        else {
            arrOfSOSA = mapResultByPriority.get(value);
        }
        arrOfSOSA.push(key);
        mapResultByPriority.set(value, arrOfSOSA);
        if (maxPrio < value) {
            maxPrio = value;
        }
    });
    showRoots(mapResultByPriority, maxPrio);
}
/**
 *  Fill the list of Sosa to show in the selector
 */
function showRoots(mapResultByPriority, maxPrio) {
    if (maxPrio == 0) {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_RESULTS, _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_EXEC]);
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_NORESULT]);
    }
    else {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_RESULTS, _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_EXEC]);
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_NORESULT]);
    }
    //Purge Select
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.purge)(_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_RESULTS);
    let textnode = null;
    let node = null;
    let bDate = null;
    let dDate = null;
    let individual = null;
    let emoj1 = "❤️";
    let prefix = "";
    for (let i = maxPrio; i > 0; i--) {
        prefix = emoj1.repeat(i);
        if (mapResultByPriority.has(i)) {
            for (let oneSosa of mapResultByPriority.get(i)) {
                individual = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.mapGedTechIdToIndividual.get(oneSosa);
                bDate = individual.birthDate !== undefined ? individual.birthDate : "?";
                dDate = individual.deathDate !== undefined ? individual.deathDate : "?";
                textnode = document.createTextNode(`${prefix} ${individual.firstname} ${individual.lastname} (${bDate}-${dDate})`);
                node = document.createElement("OPTION");
                node.setAttribute("value", oneSosa + "");
                node.appendChild(textnode);
                _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HE_ROOT_RESULTS.appendChild(node);
            }
        }
    }
}


/***/ }),

/***/ 3209:
/*!****************************!*\
  !*** ./src/SVGRenderer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SVGRenderer": () => (/* binding */ SVGRenderer)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ 5500);
/* harmony import */ var _svgdotjs_svg_panzoom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @svgdotjs/svg.panzoom.js */ 6685);
/* harmony import */ var _Box_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box.class */ 86);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store */ 3331);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HtmlElements */ 770);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Options */ 5666);
/* harmony import */ var _MinimapRendered__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MinimapRendered */ 3484);







class SVGRenderer {
    static drawSVG() {
        //Prepare first the minimap
        _MinimapRendered__WEBPACK_IMPORTED_MODULE_6__.MinimapRenderer.drawMinimap();
        SVGRenderer.container = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().addTo(_HtmlElements__WEBPACK_IMPORTED_MODULE_4__._HE_SVGWRAPPER);
        SVGRenderer.svgViewBox();
        SVGRenderer.polyline([0, 0, 0, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax, 0, 0, 0]);
        SVGRenderer.drawLoop(1);
        //initiate event on the news <svg tags>
        _MinimapRendered__WEBPACK_IMPORTED_MODULE_6__.MinimapRenderer.plugEvents();
        setTimeout(() => {
            //update minimap's focus
            _MinimapRendered__WEBPACK_IMPORTED_MODULE_6__.MinimapRenderer.drawFocus();
        }, 50);
    }
    static drawLoop(generation) {
        if (generation > _Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.maxGenerationProcessed) {
            return;
        }
        let sosaWrapper = null;
        let box = null;
        let width = null;
        let height = null;
        let yIncrement = null;
        if (generation > 5) {
            width = _Box_class__WEBPACK_IMPORTED_MODULE_2__.BoxV.width();
            height = _Box_class__WEBPACK_IMPORTED_MODULE_2__.BoxV.height();
        }
        else {
            width = _Box_class__WEBPACK_IMPORTED_MODULE_2__.Box.width();
            height = _Box_class__WEBPACK_IMPORTED_MODULE_2__.Box.height();
        }
        let sosas = _Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.mapGenerationSosa.get(generation);
        let len = sosas.length;
        let sosa = null;
        let gridEntry = null;
        const regexBefore = /^BEF/i;
        const regexAfter = /^AFT/i;
        //Pattern for implexe with coloration
        let patternImplexe = SVGRenderer.container.pattern(9.5, 9.5, function (add) {
            add.rect(9.5, 9.5).fill('#fff');
            add.line(0, 0, 5, 9.5).stroke({ color: '#d9f2ce', width: 1 });
        });
        let tplLines = _Store__WEBPACK_IMPORTED_MODULE_3__.Store.getOptions().template.split(/[\r\n]+/);
        for (let i = 0; i < len; i++) {
            sosa = sosas[i];
            if (!_Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.mapSosaToGridEntry.has(sosa)) {
                console.info("grid.mapSosaToGridEntry doesn't have sosa %o", sosa);
                continue;
            }
            gridEntry = _Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.mapSosaToGridEntry.get(sosa);
            yIncrement = 15;
            sosaWrapper = gridEntry.sosaWrapper;
            box = gridEntry.box;
            let cleanDate = function (date) {
                if (date != undefined) {
                    return date.replace(regexBefore, '<').replace(regexAfter, '>');
                }
                return "";
            };
            let cleanPlace = function (place) {
                if (place != undefined) {
                    return place.split(',')[0].trim();
                }
                return "";
            };
            let cleanPlaceCode = function (place) {
                if (place != undefined) {
                    return place.split(',')[1].trim();
                }
                return "";
            };
            let cleanOccupation = function (occupation) {
                if (occupation != undefined) {
                    return occupation;
                }
                return "";
            };
            let rec = SVGRenderer.container.rect(width, height)
                .fill("#EEE")
                .move(box.getX(), box.getY())
                .stroke({ width: 1, color: '#ccc' })
                .radius(10);
            //Also add to minimap (simplified)
            _MinimapRendered__WEBPACK_IMPORTED_MODULE_6__.MinimapRenderer.minimap.rect(width, height)
                .fill("#EEE")
                .move(box.getX(), box.getY())
                .stroke({ width: 1, color: '#555' });
            if (sosaWrapper.isImplexe && (_Store__WEBPACK_IMPORTED_MODULE_3__.Store.getOptions().implexes == _Options__WEBPACK_IMPORTED_MODULE_5__.ImplexesType.color || _Store__WEBPACK_IMPORTED_MODULE_3__.Store.getOptions().implexes == _Options__WEBPACK_IMPORTED_MODULE_5__.ImplexesType.colorHide)) {
                rec.fill(patternImplexe);
            }
            //For debug only
            //name = '#'+ gridEntry.sosaWrapper.sosa + " " + name
            //For debug only
            let first = true;
            let str = '';
            tplLines.forEach(tplLine => {
                str = tplLine.replace('_SOSA_', sosa + '')
                    .replace('_FIRSTNAME_', gridEntry.firstname)
                    .replace('_LASTNAME_', gridEntry.lastname)
                    .replace('_BIRTH_DATE_', cleanDate(gridEntry.birthDate))
                    .replace('_BIRTH_PLACE_', cleanPlace(gridEntry.birthPlace))
                    .replace('_BIRTH_PLACEZIP_', cleanPlaceCode(gridEntry.birthPlace))
                    .replace('_DEATH_DATE_', cleanDate(gridEntry.deathDate))
                    .replace('_DEATH_PLACE_', cleanPlace(gridEntry.deathPlace))
                    .replace('_DEATH_PLACEZIP_', cleanPlaceCode(gridEntry.deathPlace))
                    .replace('_MARRIAGE_DATE_', cleanDate(gridEntry.mariageDate))
                    .replace('_MARRIAGE_PLACE_', cleanPlace(gridEntry.mariagePlace))
                    .replace('_MARRIAGE_PLACEZIP_', cleanPlaceCode(gridEntry.mariagePlace))
                    .replace('_OCCUPATION_', cleanOccupation(gridEntry.occupation))
                    .trim();
                if (str.length > 1) {
                    if (first) {
                        yIncrement += SVGRenderer.h1(str, box, yIncrement);
                        first = false;
                    }
                    else {
                        yIncrement += SVGRenderer.h2(str, box, yIncrement);
                    }
                }
            });
            //Si père existe : liaison
            if (_Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaFather)) {
                let father = _Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosaFather).box;
                let middleY = (father.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2;
                this.polyline([box.getTopJunctionPoint().x, box.getTopJunctionPoint().y,
                    box.getBottomJunctionPoint().x, middleY,
                    father.getBottomJunctionPoint().x, middleY,
                    father.getBottomJunctionPoint().x, father.getBottomJunctionPoint().y]);
            }
            //Si mère existe : liaison
            if (_Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.mapSosaToGridEntry.has(sosaWrapper.sosaMother)) {
                let mother = _Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.mapSosaToGridEntry.get(sosaWrapper.sosaMother).box;
                let middleY = (mother.getBottomJunctionPoint().y + box.getTopJunctionPoint().y) / 2;
                this.polyline([box.getTopJunctionPoint().x, box.getTopJunctionPoint().y,
                    box.getBottomJunctionPoint().x, middleY,
                    mother.getBottomJunctionPoint().x, middleY,
                    mother.getBottomJunctionPoint().x, mother.getBottomJunctionPoint().y]);
            }
        }
        generation++;
        //Allow refreshing IHM
        setTimeout(() => {
            this.drawLoop(generation);
        }, 1);
    }
    static h1(str, box, yIncrement) {
        return SVGRenderer.h0(str, SVGRenderer.caracH1, box, yIncrement);
    }
    static h2(str, box, yIncrement) {
        return SVGRenderer.h0(str, SVGRenderer.caracH2, box, yIncrement);
    }
    static h0(str, carac, box, yIncrement) {
        if (str.trim() == '') {
            return 0;
        }
        SVGRenderer.container.plain(str.substring(0, carac['carMax'])).font('size', carac['fontSize']).move(box.getX() + 5, box.getY() + yIncrement - 10);
        if (str.length > carac['carMax']) {
            SVGRenderer.container.plain(str.substring(carac['carMax'], 2 * carac['carMax'])).font('size', carac['fontSize']).move(box.getX() + 5, box.getY() + yIncrement - 10 + carac['increm']);
            return 2 * carac['increm'];
        }
        else {
            return 1 * carac['increm'];
        }
    }
    static svgViewBox() {
        // X position of the SOSA #1
        let viewboxX = _Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.mapSosaToGridEntry.get(1).box.getX() - ((window.innerWidth - 10) / 2) + _Box_class__WEBPACK_IMPORTED_MODULE_2__.Box.width() / 2;
        let viewboxY = _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax - window.innerHeight + 100;
        if (_Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax < window.innerHeight) {
            viewboxY = (_Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax - window.innerHeight) / 2;
        }
        SVGRenderer.container
            .viewbox(viewboxX, viewboxY, window.innerWidth - 10, window.innerHeight - 10)
            .size('100%', '100%')
            .panZoom({ zoomMin: 0.02, zoomMax: 20, zoomFactor: 0.15 })
            .zoom(1);
    }
    static polyline(coord) {
        SVGRenderer.container.polyline(coord)
            .fill('none')
            .stroke({ width: 1, color: '#000' });
    }
    static changeFocus(event) {
        let minimapTag = _HtmlElements__WEBPACK_IMPORTED_MODULE_4__._HE_MINISVGWRAPPER.getElementsByTagName("svg")[0];
        let x = event.clientX - minimapTag.getBoundingClientRect().left;
        let y = event.clientY - minimapTag.getBoundingClientRect().top;
        let w = _HtmlElements__WEBPACK_IMPORTED_MODULE_4__._HE_MINISVGWRAPPER.clientWidth;
        let h = _HtmlElements__WEBPACK_IMPORTED_MODULE_4__._HE_MINISVGWRAPPER.clientHeight;
        let viewBox = SVGRenderer.container.viewbox();
        let rx = x * _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax / w - viewBox.w / 2;
        let ry = y * _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax / h - viewBox.h / 2;
        SVGRenderer.container.viewbox(rx, ry, viewBox.w, viewBox.h);
        _MinimapRendered__WEBPACK_IMPORTED_MODULE_6__.MinimapRenderer.drawFocus();
    }
}
SVGRenderer.container = null;
SVGRenderer.caracH1 = { carMax: 26, fontSize: '13', increm: 15 };
SVGRenderer.caracH2 = { carMax: 34, fontSize: '10', increm: 10 };


/***/ }),

/***/ 3331:
/*!**********************!*\
  !*** ./src/Store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options */ 5666);
/* harmony import */ var _struct_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./struct.class */ 7361);


class Store {
    static init() {
        Store.mapGedTechIdToIndividual = new Map();
        Store.mapCodeFamily = new Map();
        Store.firstGedTechIdParsed = null; // need to be null
        Store.firstGedTechIdInGrid = null; // need to be null
        Store.resetForRedraw();
    }
    static resetForRedraw() {
        Store.positionXMax = 0;
        Store.positionYMax = 0;
        Store.grid = new _struct_class__WEBPACK_IMPORTED_MODULE_1__.VirtualGrid();
    }
    static setOptions(options) {
        Store.options = options;
    }
    static getOptions() {
        if (Store.options == null) {
            Store.options = _Options__WEBPACK_IMPORTED_MODULE_0__.OptionRepository.getOptions();
        }
        return Store.options;
    }
}
Store.mapGedTechIdToIndividual = null; // map Sosa / Gedcom Individus
Store.mapCodeFamily = null; // map Sosa / Gedcom famillies
Store.firstGedTechIdParsed = null; // First GetTechId processed by the parser
Store.firstGedTechIdInGrid = null; // First GetTechId processed in the Grid under the SOSA code #1
Store.positionXMax = 0;
Store.positionYMax = 0;
Store.grid = null;
Store.options = null;


/***/ }),

/***/ 5690:
/*!***************************************!*\
  !*** ./src/TaskOrchestrator.class.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskOrchestrator": () => (/* binding */ TaskOrchestrator)
/* harmony export */ });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ 5530);

class TaskOrchestrator {
    constructor(progressBar) {
        this.tasks = null;
        this.progressBar = null;
        this.tasks = [];
        this.progressBar = progressBar;
    }
    add(commande, args, message) {
        this.tasks.push([commande, args, message]);
        return this;
    }
    run() {
        if (this.tasks.length == 0) {
            return;
        }
        let taskCommande = this.tasks[0][0]; // Commande
        let taskArgs = this.tasks[0][1]; // Args
        let taskMessage = this.tasks[0][2]; // Custom Message
        this.progressBar.movingProgressBar(taskMessage);
        setTimeout(() => {
            _Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.log("Start " + taskMessage);
            taskCommande(...taskArgs);
            _Logger__WEBPACK_IMPORTED_MODULE_0__.Logger.log("End " + taskMessage);
            //Remove first task
            this.tasks.shift();
            //Rerun myself
            this.run();
        }, 1);
    }
}


/***/ }),

/***/ 6099:
/*!*********************!*\
  !*** ./src/demo.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reDraw": () => (/* binding */ reDraw)
/* harmony export */ });
/* harmony import */ var _assets_css_demo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/demo.css */ 7873);
/* harmony import */ var _assets_imgs_download_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/imgs/download.png */ 3589);
/* harmony import */ var _assets_gedcom_HAPIOT_Emile_sample_ged__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/gedcom/HAPIOT_Emile_sample.ged */ 3023);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGRenderer */ 3209);
/* harmony import */ var _GedcomParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GedcomParser */ 6695);
/* harmony import */ var _ProgressBar_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProgressBar.class */ 203);
/* harmony import */ var _struct_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./struct.class */ 7361);
/* harmony import */ var _TaskOrchestrator_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaskOrchestrator.class */ 5690);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Store */ 3331);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Logger */ 5530);
/* harmony import */ var _Box_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Box.class */ 86);
/* harmony import */ var _ContainerFactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ContainerFactory */ 7057);
/* harmony import */ var _ImgRenderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ImgRenderer */ 5526);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./HtmlElements */ 770);
/* harmony import */ var _RootSwitcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RootSwitcher */ 5957);
/* harmony import */ var _MultiPDFRenderer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MultiPDFRenderer */ 9605);
/* harmony import */ var _PDFRenderer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PDFRenderer */ 1282);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Options */ 5666);


















const SOSA_ONE = new _struct_class__WEBPACK_IMPORTED_MODULE_6__.SosaWrapper(1);
let progressBar = null;
let taskOrchestrator = null;
function init() {
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FILE.addEventListener('change', function (e) {
        run(_HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FILE.files[0]);
    });
    let isAdvancedUpload = function () {
        let div = document.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }();
    if (isAdvancedUpload) {
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.classList.add('has-advanced-upload');
        let funcDrag = function (e) {
            e.preventDefault();
            e.stopPropagation();
        };
        let funcDragOver = function () {
            _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.classList.add('is-dragover');
        };
        let funcDragLeave = function () {
            _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.classList.remove('is-dragover');
        };
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('drag', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('dragstart', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('dragend', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('dragover', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('dragenter', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('dragleave', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('drop', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('dragover', funcDragOver);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('dragenter', funcDragOver);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('dragleave', funcDragLeave);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('dragend', funcDragLeave);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('drop', funcDragLeave);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM.addEventListener('drop', function (e) {
            let droppedFiles = e.dataTransfer.files;
            for (var i = 0; i < droppedFiles.length; i++) {
                if (droppedFiles[i]['name'].endsWith('.gedcom') || droppedFiles[i]['name'].endsWith('.ged')) {
                    run(droppedFiles[i]);
                    break;
                }
            }
        });
    }
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_PNG_ACTION_BUTTON.addEventListener('click', _ImgRenderer__WEBPACK_IMPORTED_MODULE_12__.takeshot);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_PDF_ACTION_BUTTON.addEventListener('click', generatePdf);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_PDF_MULTIPAGE_ACTION_BUTTON.addEventListener('click', generateMultipagePdf);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_SVGWRAPPER.addEventListener('click', hiddePdfobjectWrapper);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_ROOT_INPUT.addEventListener('keyup', _RootSwitcher__WEBPACK_IMPORTED_MODULE_14__.typingRoot);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_ROOT_EXEC.addEventListener('click', changeRootAndRedraw);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_ROOT_CANCEL.addEventListener('click', _RootSwitcher__WEBPACK_IMPORTED_MODULE_14__.cancelRoot);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_ROOT_SWITCH.addEventListener('click', _RootSwitcher__WEBPACK_IMPORTED_MODULE_14__.showRoot);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_OPTIONS_ACTION_BUTTON.addEventListener('click', _Options__WEBPACK_IMPORTED_MODULE_17__.OptionBusiness.refreshOptionsIntoUI);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_OPTIONS_SUBMIT.addEventListener('click', _Options__WEBPACK_IMPORTED_MODULE_17__.OptionBusiness.saveOptionsfromUI);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_OPTIONS_WALL.addEventListener('click', _Options__WEBPACK_IMPORTED_MODULE_17__.OptionBusiness.hideOptions);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_OPTIONS_TEMPLATE_RESET.addEventListener('click', _Options__WEBPACK_IMPORTED_MODULE_17__.OptionBusiness.refreshTemplateIntoUI);
}
function run(file) {
    //Init the internal Store
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.init();
    //Init the Logger system
    _Logger__WEBPACK_IMPORTED_MODULE_9__.Logger.init();
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_13__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_PROGRESSBAR]);
    progressBar = new _ProgressBar_class__WEBPACK_IMPORTED_MODULE_5__.ProgressBar(8);
    progressBar.movingProgressBar("Reading File");
    let reader = new FileReader();
    // Describe function of reading
    reader.onload = function (event) {
        taskOrchestrator = new _TaskOrchestrator_class__WEBPACK_IMPORTED_MODULE_7__.TaskOrchestrator(progressBar);
        taskOrchestrator.add(_GedcomParser__WEBPACK_IMPORTED_MODULE_4__.GedcomParser.parse, [event.target.result], "Parsing Gedcom Data")
            .add(exploit, [SOSA_ONE], "Exploiting Gedcom Data")
            .add(_ContainerFactory__WEBPACK_IMPORTED_MODULE_11__.compressContainer, [SOSA_ONE], "Compressing your Ancestors")
            .add(getMaxSizeOfDrawing, [], "Calculate size of graph")
            .add(draw, [], "Drawing your graph")
            .run();
    };
    //Execute reading
    reader.readAsText(file, 'utf-8');
}
function exploit(sosaWrapper, position) {
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_13__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_FORM]);
    if (position == null) {
        position = _Store__WEBPACK_IMPORTED_MODULE_8__.Store.firstGedTechIdParsed;
    }
    (0,_ContainerFactory__WEBPACK_IMPORTED_MODULE_11__.populateGrid)(sosaWrapper, position);
    (0,_ContainerFactory__WEBPACK_IMPORTED_MODULE_11__.setupBoxForGridEntry)();
}
function getMaxSizeOfDrawing() {
    let tmp_box = null;
    let widthBox = null;
    let heightBox = null;
    let maxXOfGen = null;
    let maxYOfGen = null;
    let tmp_sosa = null;
    for (var i = 1; i <= _Store__WEBPACK_IMPORTED_MODULE_8__.Store.grid.maxGenerationProcessed; i++) {
        tmp_sosa = _Store__WEBPACK_IMPORTED_MODULE_8__.Store.grid.mapRightSosaByGeneration.get(i).sosa;
        if (_Store__WEBPACK_IMPORTED_MODULE_8__.Store.grid.mapSosaToGridEntry.has(tmp_sosa)) {
            tmp_box = _Store__WEBPACK_IMPORTED_MODULE_8__.Store.grid.mapSosaToGridEntry.get(tmp_sosa).box;
        }
        else {
            console.info("Store.grid.mapSosaToGridEntry doesn't have sosa %o in function getMaxSizeOfDrawing()", tmp_sosa);
            continue;
        }
        maxXOfGen = tmp_box.getX();
        if (maxXOfGen > _Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionXMax) {
            _Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionXMax = maxXOfGen;
            if (i > 5) {
                widthBox = _Box_class__WEBPACK_IMPORTED_MODULE_10__.BoxV.width();
            }
            else {
                widthBox = _Box_class__WEBPACK_IMPORTED_MODULE_10__.Box.width();
            }
        }
        maxYOfGen = tmp_box.getY();
        if (maxYOfGen > _Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionYMax) {
            _Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionYMax = maxYOfGen;
            if (i > 5) {
                heightBox = _Box_class__WEBPACK_IMPORTED_MODULE_10__.BoxV.height();
            }
            else {
                heightBox = _Box_class__WEBPACK_IMPORTED_MODULE_10__.Box.height();
            }
        }
    }
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionXMax += widthBox + 20;
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionYMax += heightBox + 20;
    //Control of size
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_13__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_MESSAGE]);
    let limitByOption = '';
    if (_Store__WEBPACK_IMPORTED_MODULE_8__.Store.getOptions().maxGeneration == _Store__WEBPACK_IMPORTED_MODULE_8__.Store.grid.maxGenerationProcessed) {
        limitByOption = ' Check the options to change this limit.';
    }
    _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_MESSAGE.innerHTML = `Max Generation presented : ${_Store__WEBPACK_IMPORTED_MODULE_8__.Store.grid.maxGenerationProcessed}.${limitByOption}<br/>
  ${_Store__WEBPACK_IMPORTED_MODULE_8__.Store.grid.mapSosaToGridEntry.size} individuals presented, ${_Store__WEBPACK_IMPORTED_MODULE_8__.Store.grid.implexes.length} of which are <u><span title='FR : Implexes'>Pedigree collapse</span></u>.<br/>
  Expected size of PDF : ${_PDFRenderer__WEBPACK_IMPORTED_MODULE_16__.PDFRenderer.expectedSize().x}cm * ${_PDFRenderer__WEBPACK_IMPORTED_MODULE_16__.PDFRenderer.expectedSize().y}cm.<br/>
                                      Experted pages of A4 PDF : ${_MultiPDFRenderer__WEBPACK_IMPORTED_MODULE_15__.MultiPDFRenderer.expectedPageCount()} pages.<br/>
                                      Expected size of PNG : ${_Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionXMax + 20}px * ${_Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionYMax + 20}px`;
}
function draw() {
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_13__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_HEADER, _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_SVGWRAPPER, _HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_MINISVGWRAPPER]);
    _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.drawSVG();
}
function hiddePdfobjectWrapper() {
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_13__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_PDFWRAPPER]);
}
function generatePdf() {
    let renderer = new _PDFRenderer__WEBPACK_IMPORTED_MODULE_16__.PDFRenderer();
    renderer.generatePdf();
}
function generateMultipagePdf() {
    let renderer = new _MultiPDFRenderer__WEBPACK_IMPORTED_MODULE_15__.MultiPDFRenderer();
    renderer.generatePdf();
}
function changeRootAndRedraw() {
    reDraw(false);
}
function reDraw(sameIdTech) {
    //Init the Logger system
    _Logger__WEBPACK_IMPORTED_MODULE_9__.Logger.init();
    _Logger__WEBPACK_IMPORTED_MODULE_9__.Logger.log("starting purging data");
    // Purge Store values for a new draw
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.resetForRedraw();
    let key;
    if (sameIdTech) {
        //retieve current idTech
        key = _Store__WEBPACK_IMPORTED_MODULE_8__.Store.firstGedTechIdInGrid;
    }
    else {
        key = parseInt(_HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_ROOT_RESULTS.value);
        _Store__WEBPACK_IMPORTED_MODULE_8__.Store.firstGedTechIdInGrid = null;
    }
    let sosaOne = new _struct_class__WEBPACK_IMPORTED_MODULE_6__.SosaWrapper(1);
    //Purge SVG & minimap
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_13__.purge)(_HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_SVGWRAPPER);
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_13__.purge)(_HtmlElements__WEBPACK_IMPORTED_MODULE_13__._HE_MINISVGWRAPPER);
    //Reset var
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionXMax = 0;
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionYMax = 0;
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.mapGedTechIdToIndividual.forEach((individual, sosa) => {
        individual.isProcessed = false;
    });
    _Logger__WEBPACK_IMPORTED_MODULE_9__.Logger.log("ending purging data");
    taskOrchestrator = new _TaskOrchestrator_class__WEBPACK_IMPORTED_MODULE_7__.TaskOrchestrator(progressBar);
    taskOrchestrator.add(exploit, [sosaOne, key], "Exploiting Gedcom Data")
        .add(_ContainerFactory__WEBPACK_IMPORTED_MODULE_11__.compressContainer, [sosaOne], "Compressing your Ancestors")
        .add(getMaxSizeOfDrawing, [], "Calculate size of graph")
        .add(draw, [], "Drawing your graph")
        .run();
    (0,_RootSwitcher__WEBPACK_IMPORTED_MODULE_14__.cancelRoot)();
}
init();


/***/ }),

/***/ 7361:
/*!*****************************!*\
  !*** ./src/struct.class.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Family": () => (/* binding */ Family),
/* harmony export */   "Individual": () => (/* binding */ Individual),
/* harmony export */   "SosaWrapper": () => (/* binding */ SosaWrapper),
/* harmony export */   "VirtualGrid": () => (/* binding */ VirtualGrid),
/* harmony export */   "VirtualGridEntry": () => (/* binding */ VirtualGridEntry)
/* harmony export */ });
class VirtualGrid {
    constructor() {
        this.positionProcessed = null; //List of sosa already processed to identifie implexe
        this.maxSosaProcessed = null; // memory of the max Sosa to help re-calculate maxGenerationProcessed
        this.maxGenerationProcessed = null; // memory of the max gen of all the sosa to help calculate the heigh of the grid
        this.mapRightSosaByGeneration = null; //Map of generation / the far-right SosaWrapper processed
        this.mapSosaToGridEntry = null;
        this.mapGenerationYPosition = null; //list of Y position for each sosa
        this.mapGenerationSosa = null;
        this.mapGedTechIdInGridToSosa = null; // map GetTechId / Sosa currently in Grid
        this.implexes = null; //List of sosa Implexes
        this.positionProcessed = [];
        this.maxSosaProcessed = null;
        this.maxGenerationProcessed = null;
        this.mapRightSosaByGeneration = new Map();
        this.mapSosaToGridEntry = new Map();
        this.mapGenerationYPosition = new Map();
        this.mapGenerationSosa = new Map();
        this.mapGedTechIdInGridToSosa = new Map();
        this.implexes = [];
    }
}
class VirtualGridEntry {
    constructor(sosaWrapper, individual, previousSosaWrapper) {
        this.sosaWrapper = null;
        this.firstname = null;
        this.lastname = null;
        this.birthDate = null;
        this.birthPlace = null;
        this.deathDate = null;
        this.deathPlace = null;
        this.mariageDate = null;
        this.mariagePlace = null;
        this.occupation = null;
        this.box = null;
        this.previousSosaWrapper = null;
        this.nextSosaWrapper = null;
        this.sosaWrapper = sosaWrapper;
        this.firstname = individual.firstname;
        this.lastname = individual.lastname;
        this.birthDate = individual.birthDate;
        this.birthPlace = individual.birthPlace;
        this.deathDate = individual.deathDate;
        this.deathPlace = individual.deathPlace;
        this.mariageDate = individual.mariageDate;
        this.mariagePlace = individual.mariagePlace;
        this.occupation = individual.occupation;
        this.box = null;
        this.previousSosaWrapper = previousSosaWrapper;
        this.nextSosaWrapper = null;
    }
}
class SosaWrapper {
    constructor(sosa) {
        this.sosa = null;
        this.generation = null;
        this.sosaFather = null;
        this.sosaMother = null;
        this.leftSosa = null;
        this.rightSosa = null;
        this.isImplexe = false;
        this.sosa = sosa;
        /**
        * Return n° of generation based on sosa
        * tkt to Rolland (https://www.lorand.org/spip.php?article1459)
        **/
        this.generation = Math.floor(Math.log(sosa) / Math.LN2) + 1;
        this.sosaFather = sosa * 2;
        this.sosaMother = sosa * 2 + 1;
        // Sosa available on the left/right with the same generation
        this.leftSosa = null;
        this.rightSosa = null;
        // Boolean is Implexe
        this.isImplexe = false;
    }
}
class Individual {
    constructor() {
        this.id = null; // Tech Id inside the GedCom File. not the SOSA
        this.firstname = null;
        this.lastname = null;
        this.famc = null; // Tech Id inside the GedCom File. not the SOSA
        this.sex = null;
        this.isProcessed = false;
    }
}
class Family {
    constructor() {
        this.id = null; // Tech Id inside the GedCom File. not the SOSA
        this.father = null; // Tech Id of the father
        this.mother = null; // Tech Id of the mother
    }
}


/***/ }),

/***/ 3023:
/*!***************************************************!*\
  !*** ./src/assets/gedcom/HAPIOT_Emile_sample.ged ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/HAPIOT_Emile_sample.ged";

/***/ }),

/***/ 3589:
/*!**************************************!*\
  !*** ./src/assets/imgs/download.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/download.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(6099)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9hc3NldHMvY3NzL2RlbW8uY3NzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9hc3NldHMvY3NzL2RlbW8uY3NzPzljNzQiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL0Fic3RyYWN0UGRmUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL0JveC5jbGFzcy50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvQ29udGFpbmVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvR2VkY29tUGFyc2VyLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9IdG1sRWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL0ltZ1JlbmRlcmVyLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL01pbmltYXBSZW5kZXJlZC50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvTXVsdGlQREZSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvUERGUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL1Byb2dyZXNzQmFyLmNsYXNzLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9Sb290U3dpdGNoZXIudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL1NWR1JlbmRlcmVyLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9TdG9yZS50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvVGFza09yY2hlc3RyYXRvci5jbGFzcy50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvZGVtby50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvc3RydWN0LmNsYXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwZjNjNGI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlZGYxO1xcbn1cXG5cXG5cXG5he1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLCBib3JkZXItYm90dG9tLWNvbG9yIDAuMnMgZWFzZTtcXG4gIGJvcmRlci1ib3R0b206IGRvdHRlZCAxcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbntcXG4gIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKiovXFxuLyogRHJvcCBGaWxlIEJveCAqL1xcbi8qKioqKioqKioqKioqKioqKi9cXG5cXG4jYm94e1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZGFkZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uYm94X19maWxlIHtcXG4gIHdpZHRoOiAwLjFweDtcXG4gIGhlaWdodDogMC4xcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4uYm94X19maWxlICsgbGFiZWwge1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYm94X19idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjZTVlZGYxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YmZkMztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XFxufVxcbi5ib3hfX2lucHV0e1xcbiAgcGFkZGluZzogMjV2aDtcXG4gIC8qcGFkZGluZzogMzAlIDIwcHggMCAyMHB4OyovXFxufVxcbi5ib3hfX2RyYWduZHJvcCxcXG4uYm94X191cGxvYWRpbmcsXFxuLmJveF9fc3VjY2VzcyxcXG4uYm94X19lcnJvciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYm94Lmhhcy1hZHZhbmNlZC11cGxvYWQge1xcbiAgb3V0bGluZTogMnB4IGRhc2hlZCAjOTJiMGIzO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0xMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvdXRsaW5lLW9mZnNldCAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG59XFxuXFxuI2JveC5oYXMtYWR2YW5jZWQtdXBsb2FkIC5ib3hfX2RyYWduZHJvcCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbiNib3guaXMtZHJhZ292ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqL1xcbi8qIFByb2dyZXNzQmFyICovXFxuLyoqKioqKioqKioqKioqKioqL1xcblxcbiNwcm9ncmVzc0JhcntcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jc3ViUHJvZ3Jlc3NCYXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcbiAgbWluLWhlaWdodDogOTAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbiN0ZXh0UHJvZ3Jlc3NCYXJ7XFxuICBjb2xvcjogI0RERDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zYW1wbGV7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbWFyZ2luLXRvcDoyMHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKiovXFxuLyogU1ZHIFJlbmRlciBCb3ggKi9cXG4vKioqKioqKioqKioqKioqKiovXFxuXFxuI3N2Z1dyYXBwZXJ7XFxuXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3ZDBmNDtcXG4gIHBhZGRpbmc6MTBweDtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzhjYjdmNztcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMTBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqL1xcbi8qICBIZWFkZXIgTWVudSAgICovXFxuLyoqKioqKioqKioqKioqKioqKi9cXG4jaGVhZGVye1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4jaGVhZGVyIGF7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4uZW50cnl7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbnRyeTpob3ZlcntcXG4gIGNvbG9yOiAjODJiMGVkO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKi9cXG4vKiAgUm9vdCBTd2l0Y2hpbmcgICAqL1xcbi8qKioqKioqKioqKioqKioqKioqKiovXFxuXFxuI3NlbGVjdFJvb3RXcmFwcGVye1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbiNzZWxlY3RSb290e1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgbWFyZ2luOiAyNXZoIGF1dG87XFxufVxcblxcbiNpbnB1dFJvb3R7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuI3NlbGVjdFJvb3RXcmFwcGVyIHNlbGVjdHtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnV0dG9uc3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbntcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5M2Q4OWM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM2M1ZDYyO1xcbiAgY29sb3I6ICMwMDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGFiZWx7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqL1xcbi8qIFBERiBSZW5kZXIgQm94ICovXFxuLyoqKioqKioqKioqKioqKioqKi9cXG4jcGRmb2JqZWN0V3JhcHBlcntcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHRvcDogNSU7XFxuICBsZWZ0OiA1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI3BkZm9iamVjdHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud2FsbHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0b3A6IDA7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBPdmVybGF5IHdoZW4gdXNlciB3YWl0ICovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbiN3YWl0e1xcbiAgY3Vyc29yOndhaXQ7XFxufVxcblxcbiN3YWl0IHNwYW57XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgdG9wOiA0MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjojRkZGO1xcbn1cXG5cXG4jd2FpdF9jcHR7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIE1lc3NhZ2UgYm94IGxlZnQgYm90dG9tICovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4jbWVzc2FnZXtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgbGVmdDogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogbWluaW1hcCByaWdoIGJvdHRvbSAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI21pbmltYXBXcmFwcGVye1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOWI0YzY7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyZDdmNTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKi9cXG4vKiBPcHRpb25zIEJveCAqL1xcbi8qKioqKioqKioqKioqKiovXFxuI29wdGlvbnNXYWxse1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jb3B0aW9ucyB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgdG9wOiAwJTtcXG59XFxuXFxuI29wdGlvbnMgLm9wdGlvbiB7XFxuXFxufVxcblxcbiNvcHRpb25zIGZpZWxkc2V0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNvcHRpb25zIGxlZ2VuZCB7XFxuXFxufVxcblxcbiNvcHRpb25zIC5vcHRpb24gZGl2IHtcXG5cXG59XFxuXFxuI29wdGlvbnMgbGFiZWwge1xcblxcbn1cXG5cXG4jdHBse1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuXFxuI3RwbExhYmVse1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLnRwbF9sZWZ0LCAudHBsX3JpZ2h0e1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZsb2F0OmxlZnQ7XFxufVxcbi50cGxfbGlzdHtcXG4gIGNvbHVtbnM6IDI7XFxuICAtd2Via2l0LWNvbHVtbnM6IDI7XFxuICAtbW96LWNvbHVtbnM6IDI7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuLm5vQnVsbGV0e1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuI29wdGlvbnMgaW5wdXRbdHlwZT0nYnV0dG9uJ10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzZDg5YztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogMHB4IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjphdXRvO1xcbiAgcGFkZGluZzo1cHg7XFxufVxcbiNvcHRpb25zIGlucHV0W3R5cGU9J2J1dHRvbiddOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkYzk5NTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI29wdGlvbnMgaW5wdXRbdHlwZT0nYnV0dG9uJ106YWN0aXZle1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGRjOTk1O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL2Nzcy9kZW1vLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixTQUFTO0VBQ1QsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0UsMERBQTBEO0VBQzFELHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCOztBQUVsQjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VB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W1wiaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwZjNjNGI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlZGYxO1xcbn1cXG5cXG5cXG5he1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLCBib3JkZXItYm90dG9tLWNvbG9yIDAuMnMgZWFzZTtcXG4gIGJvcmRlci1ib3R0b206IGRvdHRlZCAxcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbntcXG4gIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKiovXFxuLyogRHJvcCBGaWxlIEJveCAqL1xcbi8qKioqKioqKioqKioqKioqKi9cXG5cXG4jYm94e1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZGFkZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uYm94X19maWxlIHtcXG4gIHdpZHRoOiAwLjFweDtcXG4gIGhlaWdodDogMC4xcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4uYm94X19maWxlICsgbGFiZWwge1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYm94X19idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjZTVlZGYxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YmZkMztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XFxufVxcbi5ib3hfX2lucHV0e1xcbiAgcGFkZGluZzogMjV2aDtcXG4gIC8qcGFkZGluZzogMzAlIDIwcHggMCAyMHB4OyovXFxufVxcbi5ib3hfX2RyYWduZHJvcCxcXG4uYm94X191cGxvYWRpbmcsXFxuLmJveF9fc3VjY2VzcyxcXG4uYm94X19lcnJvciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYm94Lmhhcy1hZHZhbmNlZC11cGxvYWQge1xcbiAgb3V0bGluZTogMnB4IGRhc2hlZCAjOTJiMGIzO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0xMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvdXRsaW5lLW9mZnNldCAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG59XFxuXFxuI2JveC5oYXMtYWR2YW5jZWQtdXBsb2FkIC5ib3hfX2RyYWduZHJvcCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbiNib3guaXMtZHJhZ292ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqL1xcbi8qIFByb2dyZXNzQmFyICovXFxuLyoqKioqKioqKioqKioqKioqL1xcblxcbiNwcm9ncmVzc0JhcntcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jc3ViUHJvZ3Jlc3NCYXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcbiAgbWluLWhlaWdodDogOTAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbiN0ZXh0UHJvZ3Jlc3NCYXJ7XFxuICBjb2xvcjogI0RERDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zYW1wbGV7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbWFyZ2luLXRvcDoyMHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKiovXFxuLyogU1ZHIFJlbmRlciBCb3ggKi9cXG4vKioqKioqKioqKioqKioqKiovXFxuXFxuI3N2Z1dyYXBwZXJ7XFxuXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3ZDBmNDtcXG4gIHBhZGRpbmc6MTBweDtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzhjYjdmNztcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMTBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqL1xcbi8qICBIZWFkZXIgTWVudSAgICovXFxuLyoqKioqKioqKioqKioqKioqKi9cXG4jaGVhZGVye1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4jaGVhZGVyIGF7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4uZW50cnl7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbnRyeTpob3ZlcntcXG4gIGNvbG9yOiAjODJiMGVkO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKi9cXG4vKiAgUm9vdCBTd2l0Y2hpbmcgICAqL1xcbi8qKioqKioqKioqKioqKioqKioqKiovXFxuXFxuI3NlbGVjdFJvb3RXcmFwcGVye1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbiNzZWxlY3RSb290e1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgbWFyZ2luOiAyNXZoIGF1dG87XFxufVxcblxcbiNpbnB1dFJvb3R7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuI3NlbGVjdFJvb3RXcmFwcGVyIHNlbGVjdHtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnV0dG9uc3tcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmJ1dHRvbntcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5M2Q4OWM7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjM2M1ZDYyO1xcbiAgY29sb3I6ICMwMDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGFiZWx7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKioqKioqKioqKioqKioqKioqL1xcbi8qIFBERiBSZW5kZXIgQm94ICovXFxuLyoqKioqKioqKioqKioqKioqKi9cXG4jcGRmb2JqZWN0V3JhcHBlcntcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDkwJTtcXG4gIHRvcDogNSU7XFxuICBsZWZ0OiA1JTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI3BkZm9iamVjdHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ud2FsbHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0b3A6IDA7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBPdmVybGF5IHdoZW4gdXNlciB3YWl0ICovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbiN3YWl0e1xcbiAgY3Vyc29yOndhaXQ7XFxufVxcblxcbiN3YWl0IHNwYW57XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgdG9wOiA0MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjojRkZGO1xcbn1cXG5cXG4jd2FpdF9jcHR7XFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIE1lc3NhZ2UgYm94IGxlZnQgYm90dG9tICovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4jbWVzc2FnZXtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgbGVmdDogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogbWluaW1hcCByaWdoIGJvdHRvbSAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI21pbmltYXBXcmFwcGVye1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBib3R0b206IDIwcHg7XFxuICByaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhOWI0YzY7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyZDdmNTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKi9cXG4vKiBPcHRpb25zIEJveCAqL1xcbi8qKioqKioqKioqKioqKiovXFxuI29wdGlvbnNXYWxse1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jb3B0aW9ucyB7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAxMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgdG9wOiAwJTtcXG59XFxuXFxuI29wdGlvbnMgLm9wdGlvbiB7XFxuXFxufVxcblxcbiNvcHRpb25zIGZpZWxkc2V0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNvcHRpb25zIGxlZ2VuZCB7XFxuXFxufVxcblxcbiNvcHRpb25zIC5vcHRpb24gZGl2IHtcXG5cXG59XFxuXFxuI29wdGlvbnMgbGFiZWwge1xcblxcbn1cXG5cXG4jdHBse1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuXFxuI3RwbExhYmVse1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG59XFxuXFxuLnRwbF9sZWZ0LCAudHBsX3JpZ2h0e1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZsb2F0OmxlZnQ7XFxufVxcbi50cGxfbGlzdHtcXG4gIGNvbHVtbnM6IDI7XFxuICAtd2Via2l0LWNvbHVtbnM6IDI7XFxuICAtbW96LWNvbHVtbnM6IDI7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuLm5vQnVsbGV0e1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuI29wdGlvbnMgaW5wdXRbdHlwZT0nYnV0dG9uJ10ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzZDg5YztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGJvcmRlcjogMHB4IG5vbmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjphdXRvO1xcbiAgcGFkZGluZzo1cHg7XFxufVxcbiNvcHRpb25zIGlucHV0W3R5cGU9J2J1dHRvbiddOmhvdmVye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkYzk5NTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI29wdGlvbnMgaW5wdXRbdHlwZT0nYnV0dG9uJ106YWN0aXZle1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDJweCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGRjOTk1O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlbW8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZW1vLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCB7IGhpZGUsIHB1cmdlLCBzaG93LCBfSEVfUERGV1JBUFBFUiwgX0hFX1NWR1dSQVBQRVIsIF9IRV9XQUlUIH0gZnJvbSBcIi4vSHRtbEVsZW1lbnRzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBTVkdSZW5kZXJlciB9IGZyb20gXCIuL1NWR1JlbmRlcmVyXCI7XG5leHBvcnQgY2xhc3MgQWJzdHJhY3RQZGZSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc3ZnRWxlbWVudCA9IF9IRV9TVkdXUkFQUEVSLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpWzBdO1xuICAgICAgICB0aGlzLm9yaWVudGF0aW9uID0gJ3AnO1xuICAgICAgICB0aGlzLnBkZiA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXMgPSB7IHZpZXdib3g6ICcnLCB3OiAnMCcsIGg6ICcwJywgem9vbTogMCB9O1xuICAgIH1cbiAgICBnZW5lcmF0ZVBkZigpIHtcbiAgICAgICAgLy9TaG93IFdhaXRpbmcgc3Bpbm5lciAmIFBERiBXcmFwcGVyXG4gICAgICAgIHNob3coW19IRV9XQUlULCBfSEVfUERGV1JBUFBFUl0pO1xuICAgICAgICAvL1B1cmdlIGFsbCBwcmV2aW91cyA8ZW1iZWQgLz4gdGFnIGdlbmVyYXRlZFxuICAgICAgICBwdXJnZShfSEVfUERGV1JBUFBFUik7XG4gICAgICAgIC8vU2F2aW5nIGN1cnJlbnQgc2V0dGluZ1xuICAgICAgICBsZXQgY29tcCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKF9IRV9TVkdXUkFQUEVSKTtcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHsgdmlld2JveDogU1ZHUmVuZGVyZXIuY29udGFpbmVyLnZpZXdib3goKS50b1N0cmluZygpLFxuICAgICAgICAgICAgdzogY29tcC5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLFxuICAgICAgICAgICAgaDogY29tcC5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSxcbiAgICAgICAgICAgIHpvb206IFNWR1JlbmRlcmVyLmNvbnRhaW5lci56b29tKCkgfTtcbiAgICAgICAgdGhpcy5wZGZWaWV3Qm94KCk7XG4gICAgfVxuICAgIHJlc29sdmVTdmcyUGRmKHByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZS50aGVuKChqc3BkZikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdXJpID0ganNwZGYub3V0cHV0KCdkYXRhdXJpc3RyaW5nJyk7XG4gICAgICAgICAgICBpZiAodXJpLmxlbmd0aCA8IDUwMDAwMDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcGRmb2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImVtYmVkXCIpO1xuICAgICAgICAgICAgICAgIHBkZm9iamVjdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdXJpKTtcbiAgICAgICAgICAgICAgICBwZGZvYmplY3QuaWQgPSBcInBkZm9iamVjdFwiO1xuICAgICAgICAgICAgICAgIHBkZm9iamVjdC50eXBlID0gXCJhcHBsaWNhdGlvbi9wZGZcIjtcbiAgICAgICAgICAgICAgICBfSEVfUERGV1JBUFBFUi5hcHBlbmRDaGlsZChwZGZvYmplY3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAganNwZGYuc2F2ZSgnbXlQREYucGRmJyk7XG4gICAgICAgICAgICAgICAgaGlkZShbX0hFX1BERldSQVBQRVJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgICAgICBoaWRlKFtfSEVfV0FJVF0pO1xuICAgICAgICAgICAgLy9SZXNldCBpbmZvcm1hdGlvbiBwb3N0IHBkZiBnZW5lcmF0aW9uICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXJcbiAgICAgICAgICAgICAgICAudmlld2JveCh0aGlzLnByZXZpb3VzLnZpZXdib3gpXG4gICAgICAgICAgICAgICAgLnNpemUodGhpcy5wcmV2aW91cy53LCB0aGlzLnByZXZpb3VzLmgpXG4gICAgICAgICAgICAgICAgLnpvb20odGhpcy5wcmV2aW91cy56b29tKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHBkZlZpZXdCb3goKSB7XG4gICAgICAgIGxldCB3ID0gMTAwO1xuICAgICAgICBpZiAoU3RvcmUucG9zaXRpb25YTWF4IC8gd2luZG93LmlubmVyV2lkdGggPCBTdG9yZS5wb3NpdGlvbllNYXggLyB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHcgPSAod2luZG93LmlubmVyV2lkdGggKiAxMDAgLyAoU3RvcmUucG9zaXRpb25ZTWF4ICogd2luZG93LmlubmVySGVpZ2h0IC8gd2luZG93LmlubmVyV2lkdGgpKTtcbiAgICAgICAgfVxuICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXJcbiAgICAgICAgICAgIC52aWV3Ym94KDAsIDAsIFN0b3JlLnBvc2l0aW9uWE1heCwgU3RvcmUucG9zaXRpb25ZTWF4KVxuICAgICAgICAgICAgLnNpemUodyArICclJywgJzEwMCUnKTtcbiAgICB9XG59XG5BYnN0cmFjdFBkZlJlbmRlcmVyLlJBVElPX1BYXzJfQ00gPSA0MDsgLy9EZWZhdWx0IFJhdGlvIHB4ID0+IGNtXG4iLCJjb25zdCBDT05TVF9MRUZUX01BUkdJTiA9IDIwOyAvLyBsZWZ0IG1hcmdpblxuY29uc3QgQ09OU1RfVE9QX01BUkdJTiA9IDIwOyAvLyB0b3AgbWFyZ2luXG5jb25zdCBDT05TVF9XSURUSF9QQURESU5HID0gMTA7IC8vIGhvcml6b250YWwgcGFkZGluZyBiZXR3ZWVuIGJveFxuY29uc3QgQ09OU1RfSEVJR0hUX1BBRERJTkcgPSAzMDsgLy8gdmVydGljYWwgcGFkZGluZyBiZXR3ZWVuIGJveFxuY29uc3QgQ09OU1RfV0lEVEggPSAyMDA7IC8vd2lkdGggb2YgYm94IGluIHB4XG5jb25zdCBDT05TVF9IRUlHSFQgPSA3NTsgLy9oZWlnaHQgb2YgYm94IGluIHB4XG5jb25zdCBDT05TVF9XSURUSF9WID0gOTU7IC8vd2lkdGggb2YgYm94IGluIHB4XG5jb25zdCBDT05TVF9IRUlHSFRfViA9IDE1MDsgLy9oZWlnaHQgb2YgYm94IGluIHB4XG5leHBvcnQgY2xhc3MgQm94QWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKHNvc2FXcmFwcGVyLCBtYXhHZW5lcmF0aW9uKSB7XG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuc29zYSA9IG51bGw7XG4gICAgICAgIHRoaXMueCA9IG51bGw7XG4gICAgICAgIHRoaXMueSA9IG51bGw7XG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvbiA9IG1heEdlbmVyYXRpb247XG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbiA9IHNvc2FXcmFwcGVyLmdlbmVyYXRpb247XG4gICAgICAgIHRoaXMuc29zYSA9IHNvc2FXcmFwcGVyLnNvc2E7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuICAgIHNldFgodmFsdWUpIHtcbiAgICAgICAgdGhpcy54ID0gdmFsdWU7XG4gICAgfVxuICAgIHNldFkodmFsdWUpIHtcbiAgICAgICAgdGhpcy55ID0gdmFsdWU7XG4gICAgfVxuICAgIHNoaWZ0UmlnaHQodmFsdWUpIHtcbiAgICAgICAgdGhpcy54ICs9IHZhbHVlO1xuICAgIH1cbiAgICBnZXRTb3NhT2ZNYXhGYXRoZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvc2EgKiBNYXRoLnBvdygyLCB0aGlzLm1heEdlbmVyYXRpb24gLSB0aGlzLmdlbmVyYXRpb24pO1xuICAgIH1cbiAgICBnZXRNaW5Tb3NhT2ZHZW5lcmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgKHRoaXMuZ2VuZXJhdGlvbiAtIDEpKTtcbiAgICB9XG4gICAgZ2V0WCgpIHsgcmV0dXJuIHRoaXMueDsgfVxuICAgIGdldFkoKSB7IHJldHVybiB0aGlzLnk7IH1cbiAgICBzdGF0aWMgbGVmdE1hcmdpbigpIHsgcmV0dXJuIENPTlNUX0xFRlRfTUFSR0lOOyB9XG4gICAgc3RhdGljIHRvcE1hcmdpbigpIHsgcmV0dXJuIENPTlNUX1RPUF9NQVJHSU47IH1cbiAgICBzdGF0aWMgd2lkdGhQYWRkaW5nKCkgeyByZXR1cm4gQ09OU1RfV0lEVEhfUEFERElORzsgfVxuICAgIHN0YXRpYyBoZWlnaHRQYWRkaW5nKCkgeyByZXR1cm4gQ09OU1RfSEVJR0hUX1BBRERJTkc7IH1cbn1cbmV4cG9ydCBjbGFzcyBCb3ggZXh0ZW5kcyBCb3hBYnN0cmFjdCB7XG4gICAgY29uc3RydWN0b3Ioc29zYVdyYXBwZXIsIG1heEdlbmVyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoc29zYVdyYXBwZXIsIG1heEdlbmVyYXRpb24pO1xuICAgIH1cbiAgICBnZXRCb3R0b21KdW5jdGlvblBvaW50KCkge1xuICAgICAgICByZXR1cm4geyBcInhcIjogdGhpcy54ICsgQm94LndpZHRoKCkgLyAyLCBcInlcIjogdGhpcy55ICsgQm94LmhlaWdodCgpIH07XG4gICAgfVxuICAgIGdldFRvcEp1bmN0aW9uUG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB7IFwieFwiOiB0aGlzLnggKyBCb3gud2lkdGgoKSAvIDIsIFwieVwiOiB0aGlzLnkgfTtcbiAgICB9XG4gICAgc3RhdGljIHdpZHRoKCkgeyByZXR1cm4gQ09OU1RfV0lEVEg7IH1cbiAgICBzdGF0aWMgaGVpZ2h0KCkgeyByZXR1cm4gQ09OU1RfSEVJR0hUOyB9XG59XG5leHBvcnQgY2xhc3MgQm94ViBleHRlbmRzIEJveEFic3RyYWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihzb3NhV3JhcHBlciwgbWF4R2VuZXJhdGlvbikge1xuICAgICAgICBzdXBlcihzb3NhV3JhcHBlciwgbWF4R2VuZXJhdGlvbik7XG4gICAgfVxuICAgIGdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB7IFwieFwiOiB0aGlzLnggKyBCb3hWLndpZHRoKCkgLyAyLCBcInlcIjogdGhpcy55ICsgQm94Vi5oZWlnaHQoKSB9O1xuICAgIH1cbiAgICBnZXRUb3BKdW5jdGlvblBvaW50KCkge1xuICAgICAgICByZXR1cm4geyBcInhcIjogdGhpcy54ICsgQm94Vi53aWR0aCgpIC8gMiwgXCJ5XCI6IHRoaXMueSB9O1xuICAgIH1cbiAgICAvL05vdCByZWFkeSBmb3IgYSBwcm9kdWN0aW9uIHVzZVxuICAgIC8vc3RhdGljIHdpZHRoKCl7cmV0dXJuIENPTlNUX1dJRFRIX1Z9XG4gICAgLy9zdGF0aWMgaGVpZ2h0KCl7cmV0dXJuIENPTlNUX0hFSUdIVF9WfVxuICAgIHN0YXRpYyB3aWR0aCgpIHsgcmV0dXJuIENPTlNUX1dJRFRIOyB9XG4gICAgc3RhdGljIGhlaWdodCgpIHsgcmV0dXJuIENPTlNUX0hFSUdIVDsgfVxufVxuIiwiaW1wb3J0IHsgVmlydHVhbEdyaWRFbnRyeSwgU29zYVdyYXBwZXIsIEZhbWlseSB9IGZyb20gXCIuL3N0cnVjdC5jbGFzc1wiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgQm94LCBCb3hBYnN0cmFjdCwgQm94ViB9IGZyb20gXCIuL0JveC5jbGFzc1wiO1xuaW1wb3J0IHsgSW1wbGV4ZXNUeXBlIH0gZnJvbSBcIi4vT3B0aW9uc1wiO1xuLyoqXG4gKlxuICogQHBhcmFtIHNvc2FXcmFwcGVyIHRoZSBzb3NhIFdyYXBwZXIgYWx3YXlzIHN0YXJ0aW5nIGJ5IDFcbiAqIEBwYXJhbSBnZWRUZWNoSWQgdGhlIHRlY2huaWNhbCBpbmRleCBjb2RlIGluc2lkZSB0aGUgR0VEQ09NIGZpbGUsIGNhbiBiZSAhPSAxIHRoZSBmaXJzdCB0aW1lIC4gTm90IHRoZSBTT1NBXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVHcmlkKHNvc2FXcmFwcGVyLCBnZWRUZWNoSWQpIHtcbiAgICAvL1NldCBmaXJzdEdlZFRlY2hJbkdyaWQgZm9yIGEgc21hcnQgcmVkcmF3IGluIFVJXG4gICAgaWYgKFN0b3JlLmZpcnN0R2VkVGVjaElkSW5HcmlkID09IG51bGwpIHtcbiAgICAgICAgU3RvcmUuZmlyc3RHZWRUZWNoSWRJbkdyaWQgPSBnZWRUZWNoSWQ7XG4gICAgfVxuICAgIC8vQXZvaWQgdW5lY2Vzc2FyeSBwcm9jZXNzaW5nXG4gICAgaWYgKCFTdG9yZS5tYXBHZWRUZWNoSWRUb0luZGl2aWR1YWwuaGFzKGdlZFRlY2hJZCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiZ2VkVGVjaElkICVvIE5vdCBmb3VuZCBpbiAnbWFwIEdlZFRlY2hJZCBUbyBJbmRpdmlkdWFsJy4gU29zYSB3YXMgJW9cIiwgZ2VkVGVjaElkLCBzb3NhV3JhcHBlci5zb3NhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaW5kaXZpZHVhbCA9IFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5nZXQoZ2VkVGVjaElkKTtcbiAgICBsZXQgY3VyU29zYSA9IHNvc2FXcmFwcGVyLnNvc2E7XG4gICAgbGV0IGN1ckdlbiA9IHNvc2FXcmFwcGVyLmdlbmVyYXRpb247XG4gICAgLy9DYXNlIG9mIEltcGxleGVcbiAgICBsZXQgaGFzSW1wbGV4ZSA9IFN0b3JlLmdyaWQucG9zaXRpb25Qcm9jZXNzZWQuaW5kZXhPZihnZWRUZWNoSWQpO1xuICAgIGxldCBvdGhlckltcGxleGVTb3NhID0gbnVsbDtcbiAgICBsZXQgb3RoZXJJbXBsZXhlR3JpZEVudHJ5ID0gbnVsbDtcbiAgICAvL0xpbWl0YXRpb25cbiAgICBpZiAoU3RvcmUuZ2V0T3B0aW9ucygpLm1heEdlbmVyYXRpb24gIT0gLTEgJiYgY3VyR2VuID4gU3RvcmUuZ2V0T3B0aW9ucygpLm1heEdlbmVyYXRpb24pIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwidGhlIGdlbmVyYXRpb25NYXggbGltaXQgb2YgJW8gd2FzIHJlYWNoZWQuIFNvc2Egd2FzICVvJy4gVGFrZSBhIGxvb2sgYXQgdGhlIG9wdGlvbnMgdG8gY2hhbmdlIHRoaXMgbGltaXRcIiwgU3RvcmUuZ2V0T3B0aW9ucygpLm1heEdlbmVyYXRpb24sIHNvc2FXcmFwcGVyLnNvc2EpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vU2V0IG1heFNvc2FQcm9jZXNzZWRcbiAgICBpZiAoY3VyU29zYSA+IFN0b3JlLmdyaWQubWF4U29zYVByb2Nlc3NlZCkge1xuICAgICAgICBTdG9yZS5ncmlkLm1heFNvc2FQcm9jZXNzZWQgPSBjdXJTb3NhO1xuICAgICAgICBTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQgPSBjdXJHZW47XG4gICAgfVxuICAgIGlmICghU3RvcmUuZ3JpZC5tYXBHZW5lcmF0aW9uU29zYS5oYXMoY3VyR2VuKSkge1xuICAgICAgICBTdG9yZS5ncmlkLm1hcEdlbmVyYXRpb25Tb3NhLnNldChjdXJHZW4sIFtdKTtcbiAgICB9XG4gICAgU3RvcmUuZ3JpZC5tYXBHZW5lcmF0aW9uU29zYS5nZXQoY3VyR2VuKS5wdXNoKGN1clNvc2EpO1xuICAgIGlmIChoYXNJbXBsZXhlICE9PSAtMSkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKFwiaW1wbGV4ZSBkZXRlY3RlZCB3aXRoIGdlZFRlY2hJZCAlby4gU29zYSB3YXMgJW9cIiwgZ2VkVGVjaElkLCBzb3NhV3JhcHBlci5zb3NhKTtcbiAgICAgICAgc29zYVdyYXBwZXIuaXNJbXBsZXhlID0gdHJ1ZTtcbiAgICAgICAgLy9VcGRhdGUgdGhlIG90aGVyIHBhcnQgb2YgdGhlIGltcGxleGVcbiAgICAgICAgb3RoZXJJbXBsZXhlU29zYSA9IFN0b3JlLmdyaWQubWFwR2VkVGVjaElkSW5HcmlkVG9Tb3NhLmdldChnZWRUZWNoSWQpO1xuICAgICAgICBvdGhlckltcGxleGVHcmlkRW50cnkgPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQob3RoZXJJbXBsZXhlU29zYSk7XG4gICAgICAgIG90aGVySW1wbGV4ZUdyaWRFbnRyeS5zb3NhV3JhcHBlci5pc0ltcGxleGUgPSB0cnVlO1xuICAgICAgICBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5zZXQob3RoZXJJbXBsZXhlU29zYSwgb3RoZXJJbXBsZXhlR3JpZEVudHJ5KTtcbiAgICAgICAgU3RvcmUuZ3JpZC5pbXBsZXhlcy5wdXNoKHNvc2FXcmFwcGVyLnNvc2EpO1xuICAgIH1cbiAgICBTdG9yZS5ncmlkLnBvc2l0aW9uUHJvY2Vzc2VkLnB1c2goZ2VkVGVjaElkKTtcbiAgICAvL1NldHRpbmcgaGVyZSBhZnRlciB0aGUgY29kZSBmb3IgaW1wbGV4ZXMgdG8gYXZvaWQgYSBmYWxzZSBhdXRvLWRldGVjdGlvblxuICAgIFN0b3JlLmdyaWQubWFwR2VkVGVjaElkSW5HcmlkVG9Tb3NhLnNldChnZWRUZWNoSWQsIHNvc2FXcmFwcGVyLnNvc2EpO1xuICAgIGxldCBwcmV2aW91c1Nvc2FXcmFwcGVyID0gbnVsbDtcbiAgICBpZiAoU3RvcmUuZ3JpZC5tYXBSaWdodFNvc2FCeUdlbmVyYXRpb24uaGFzKGN1ckdlbikpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzU29zYSA9IFN0b3JlLmdyaWQubWFwUmlnaHRTb3NhQnlHZW5lcmF0aW9uLmdldChjdXJHZW4pLnNvc2E7XG4gICAgICAgIC8vIFNldCBcIm5leHRTb3NhV3JhcHBlclwiIG9mIHByZXZpb3VzXG4gICAgICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMocHJldmlvdXNTb3NhKSkge1xuICAgICAgICAgICAgU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHByZXZpb3VzU29zYSkubmV4dFNvc2FXcmFwcGVyID0gc29zYVdyYXBwZXI7XG4gICAgICAgICAgICBwcmV2aW91c1Nvc2FXcmFwcGVyID0gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHByZXZpb3VzU29zYSkuc29zYVdyYXBwZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9yZXRyaXZlIEZhbWlseSBvZiBJbmRpdmlkdWFsXG4gICAgbGV0IGZhbWlseSA9IG5ldyBGYW1pbHkoKTtcbiAgICBpZiAoU3RvcmUubWFwQ29kZUZhbWlseS5oYXMoaW5kaXZpZHVhbC5mYW1jKSkge1xuICAgICAgICBmYW1pbHkgPSBTdG9yZS5tYXBDb2RlRmFtaWx5LmdldChpbmRpdmlkdWFsLmZhbWMpO1xuICAgIH1cbiAgICBTdG9yZS5ncmlkLm1hcFJpZ2h0U29zYUJ5R2VuZXJhdGlvbi5zZXQoY3VyR2VuLCBzb3NhV3JhcHBlcik7XG4gICAgU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuc2V0KGN1clNvc2EsIG5ldyBWaXJ0dWFsR3JpZEVudHJ5KHNvc2FXcmFwcGVyLCBpbmRpdmlkdWFsLCBwcmV2aW91c1Nvc2FXcmFwcGVyKSk7XG4gICAgLy9Qcm9jZXNzIHBhcmVudCBvbmx5IGlmIG5vdCBhbiBJbXBsZXhlICYgb3B0aW9uIHNhaWQgc28uXG4gICAgaWYgKCFzb3NhV3JhcHBlci5pc0ltcGxleGUgfHwgKFN0b3JlLmdldE9wdGlvbnMoKS5pbXBsZXhlcyAhPT0gSW1wbGV4ZXNUeXBlLmNvbG9ySGlkZSAmJiBTdG9yZS5nZXRPcHRpb25zKCkuaW1wbGV4ZXMgIT09IEltcGxleGVzVHlwZS5oaWRlKSkge1xuICAgICAgICBpZiAoZmFtaWx5LmZhdGhlciAhPSBudWxsICYmIGZhbWlseS5mYXRoZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZUdyaWQobmV3IFNvc2FXcmFwcGVyKHNvc2FXcmFwcGVyLnNvc2FGYXRoZXIpLCBmYW1pbHkuZmF0aGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZmFtaWx5Lm1vdGhlciAhPSBudWxsICYmIGZhbWlseS5tb3RoZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwb3B1bGF0ZUdyaWQobmV3IFNvc2FXcmFwcGVyKHNvc2FXcmFwcGVyLnNvc2FNb3RoZXIpLCBmYW1pbHkubW90aGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0dXBCb3hGb3JHcmlkRW50cnkoKSB7XG4gICAgbGV0IGJveCA9IG51bGw7XG4gICAgbGV0IHNvc2FXcmFwcGVyID0gbnVsbDtcbiAgICBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5mb3JFYWNoKChncmlkRW50cnksIHNvc2EpID0+IHtcbiAgICAgICAgLy9HZW5lcmF0ZSBCb3hlc1xuICAgICAgICBzb3NhV3JhcHBlciA9IGdyaWRFbnRyeS5zb3NhV3JhcHBlcjtcbiAgICAgICAgaWYgKHNvc2FXcmFwcGVyLmdlbmVyYXRpb24gPiA1KSB7XG4gICAgICAgICAgICBib3ggPSBuZXcgQm94Vihzb3NhV3JhcHBlciwgU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkKTsgLy8gVmVydGljYWwgQm94XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBib3ggPSBuZXcgQm94KHNvc2FXcmFwcGVyLCBTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQpOyAvLyBDbGFzc2ljIGJveFxuICAgICAgICB9XG4gICAgICAgIGdyaWRFbnRyeS5ib3ggPSBib3g7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gY29tcHJlc3NDb250YWluZXIoc29zYVdyYXBwZXIpIHtcbiAgICBsZXQgZmF0aGVyWCA9IDA7XG4gICAgbGV0IG1vdGhlclggPSAwO1xuICAgIGxldCBteXNlbGZYID0gMDtcbiAgICBsZXQgcHJldmlvdXNYID0gMDtcbiAgICAvL0dldCBjb21wcmVzc2VkIHBvc2l0aW9uIG9mIGZhdGhlciBpZiBleGlzdHNcbiAgICBpZiAoU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuaGFzKHNvc2FXcmFwcGVyLnNvc2FGYXRoZXIpKSB7XG4gICAgICAgIGZhdGhlclggPSBjb21wcmVzc0NvbnRhaW5lcihuZXcgU29zYVdyYXBwZXIoc29zYVdyYXBwZXIuc29zYUZhdGhlcikpO1xuICAgIH1cbiAgICAvL0dldCBjb21wcmVzc2VkIHBvc2l0aW9uIG9mIG1vdGhlciBpZiBleGlzdHNcbiAgICBpZiAoU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuaGFzKHNvc2FXcmFwcGVyLnNvc2FNb3RoZXIpKSB7XG4gICAgICAgIG1vdGhlclggPSBjb21wcmVzc0NvbnRhaW5lcihuZXcgU29zYVdyYXBwZXIoc29zYVdyYXBwZXIuc29zYU1vdGhlcikpO1xuICAgIH1cbiAgICAvL1JldHJpdmUgcHJldmlvdXMgYm94IFgtcG9zaXRpb24oKikgb24gdGhlIGdyYXBoIChvbiB0aGUgbGVmdClcbiAgICAvLyAqID0+IGlmIGV4aXN0IDogWCBwb3NpdGlvbiBvZiBwcmV2aW91cyBib3hlICsgYm94LndpZHRoKCkgKyBib3gud2lkdGhQYWRkaW5nKClcbiAgICAvLyAgID0+IGlmIG5vdCA6IGJveC5sZWZ0TWFyZ2luKClcbiAgICBwcmV2aW91c1ggPSBfZ2V0WFBvc2l0aW9uT25MZWZ0Qm94KHNvc2FXcmFwcGVyKTtcbiAgICAvL0NhbGN1bCBjdXJyZW50IFkgcG9zaXRpb24gYmFzZWQgb25cbiAgICBsZXQgbXlzZWxmWSA9IF9nZXRZUG9zaXRpb24oc29zYVdyYXBwZXIpO1xuICAgIC8vSWYgd2UgZG9uJ3QgaGF2ZSBwYXJlbnRzLCBsZXQgdGFrZSBwcmV2aW91c1ggdmFsdWVcbiAgICBpZiAoZmF0aGVyWCA9PSAwICYmIG1vdGhlclggPT0gMCkge1xuICAgICAgICBteXNlbGZYID0gcHJldmlvdXNYO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy9Qcm9jZXNzIG91ciBvd24gcG9zaXRpb25cbiAgICAgICAgaWYgKGZhdGhlclggPT0gMCB8fCBtb3RoZXJYID09IDApIHtcbiAgICAgICAgICAgIG15c2VsZlggPSBmYXRoZXJYICsgbW90aGVyWDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG15c2VsZlggPSBNYXRoLmZsb29yKChmYXRoZXJYICsgbW90aGVyWCkgLyAyKTtcbiAgICAgICAgfVxuICAgICAgICAvL0lmIHRoZXJlIGlzIGEgY29uZmxpY3Qgd2l0aCBQcmV2aW91cyBib3gsIHJlc3luYyBhbmNlc3RvcnMgYW5kIG91cnNlbGZcbiAgICAgICAgaWYgKG15c2VsZlggPCBwcmV2aW91c1gpIHtcbiAgICAgICAgICAgIC8vc3BlY2lhbCBjYXNlIDogMiBnZW5lcmF0aW9ucyB3aXRoICE9IGJveFxuICAgICAgICAgICAgbGV0IHNoaWZ0ID0gcHJldmlvdXNYIC0gbXlzZWxmWDtcbiAgICAgICAgICAgIGxldCBhbmNlc3RvcnNTb3NhID0gX2dldEFsbEFuY2VzdG9yc01hcE9mU29zYVdyYXBwZXIoc29zYVdyYXBwZXIpO1xuICAgICAgICAgICAgbGV0IGxlbiA9IGFuY2VzdG9yc1Nvc2EubGVuZ3RoO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldChhbmNlc3RvcnNTb3NhW2ldKS5ib3guc2hpZnRSaWdodChzaGlmdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBteXNlbGZYID0gcHJldmlvdXNYO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vU2V0IG91ciBvd24gWC9ZIHZhbHVlXG4gICAgU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHNvc2FXcmFwcGVyLnNvc2EpLmJveC5zaGlmdFJpZ2h0KG15c2VsZlgpO1xuICAgIFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldChzb3NhV3JhcHBlci5zb3NhKS5ib3guc2V0WShteXNlbGZZKTtcbiAgICAvL1JldHVybiBvdXIgb3duIHZhbHVlXG4gICAgcmV0dXJuIG15c2VsZlg7XG59XG5mdW5jdGlvbiBfZ2V0WVBvc2l0aW9uKHNvc2FXcmFwcGVyKSB7XG4gICAgLy9JZiBpdCdzIGFscmVhZHkgY2FsY3VsYXRlZFxuICAgIGlmIChTdG9yZS5ncmlkLm1hcEdlbmVyYXRpb25ZUG9zaXRpb24uaGFzKHNvc2FXcmFwcGVyLmdlbmVyYXRpb24pKSB7XG4gICAgICAgIHJldHVybiBTdG9yZS5ncmlkLm1hcEdlbmVyYXRpb25ZUG9zaXRpb24uZ2V0KHNvc2FXcmFwcGVyLmdlbmVyYXRpb24pO1xuICAgIH1cbiAgICBsZXQgeSA9IDA7XG4gICAgLy9MZXQncyBjYWxjdWxhdGUgaXRcbiAgICBpZiAoc29zYVdyYXBwZXIuZ2VuZXJhdGlvbiA+IDUpIHtcbiAgICAgICAgLy8gTnVtYmVyIG9mIGdlbmVyYXRpb24gYWJvdmUgbWUgKiB0b3RhbCBoZWlnaHQgb2YgYm94VlxuICAgICAgICB5ID0gKFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZCAtIHNvc2FXcmFwcGVyLmdlbmVyYXRpb24pICogKEJveFYuaGVpZ2h0KCkgKyBCb3hWLmhlaWdodFBhZGRpbmcoKSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBOdW1iZXIgb2YgZ2VuZXJhdGlvbiAoPjUpIGFib3ZlIG1lICogdG90YWwgaGVpZ2h0IG9mIGJveFZcbiAgICAgICAgLy8gICsgTnVtYmVyIG9mIGdlbmVyYXRpb24gKG1heCA1KSBhYm92ZSBtZSAqIHRvdGFsIGhlaWdodCBvZiBib3hcbiAgICAgICAgaWYgKFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZCA+IDUpIHtcbiAgICAgICAgICAgIHkgPSAoU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkIC0gNSkgKiAoQm94Vi5oZWlnaHQoKSArIEJveFYuaGVpZ2h0UGFkZGluZygpKTtcbiAgICAgICAgfVxuICAgICAgICB5ICs9IChNYXRoLm1pbig1LCBTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQpIC0gc29zYVdyYXBwZXIuZ2VuZXJhdGlvbikgKiAoQm94LmhlaWdodCgpICsgQm94LmhlaWdodFBhZGRpbmcoKSk7XG4gICAgfVxuICAgIHkgKz0gQm94QWJzdHJhY3QudG9wTWFyZ2luKCk7XG4gICAgU3RvcmUuZ3JpZC5tYXBHZW5lcmF0aW9uWVBvc2l0aW9uLnNldChzb3NhV3JhcHBlci5nZW5lcmF0aW9uLCB5KTtcbiAgICByZXR1cm4geTtcbn1cbmZ1bmN0aW9uIF9nZXRYUG9zaXRpb25PbkxlZnRCb3goc29zYVdyYXBwZXIpIHtcbiAgICBsZXQgd2lkdGhQbHVzV2lkdGhQYWRkaW5nID0gMDtcbiAgICBsZXQgbGVmdE1hcmdpbiA9IDA7XG4gICAgaWYgKHNvc2FXcmFwcGVyLmdlbmVyYXRpb24gPiA1KSB7XG4gICAgICAgIHdpZHRoUGx1c1dpZHRoUGFkZGluZyA9IEJveFYud2lkdGgoKSArIEJveFYud2lkdGhQYWRkaW5nKCk7XG4gICAgICAgIGxlZnRNYXJnaW4gPSBCb3hWLmxlZnRNYXJnaW4oKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHdpZHRoUGx1c1dpZHRoUGFkZGluZyA9IEJveC53aWR0aCgpICsgQm94LndpZHRoUGFkZGluZygpO1xuICAgICAgICBsZWZ0TWFyZ2luID0gQm94LmxlZnRNYXJnaW4oKTtcbiAgICB9XG4gICAgbGV0IHByZXZpb3VzU29zYVdyYXBwZXIgPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoc29zYVdyYXBwZXIuc29zYSkucHJldmlvdXNTb3NhV3JhcHBlcjtcbiAgICBpZiAocHJldmlvdXNTb3NhV3JhcHBlciAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHByZXZpb3VzU29zYVdyYXBwZXIuc29zYSkuYm94LmdldFgoKSArIHdpZHRoUGx1c1dpZHRoUGFkZGluZztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBsZWZ0TWFyZ2luO1xuICAgIH1cbn1cbi8qKlxuICogUmV0dXJuIGEgTWFwIHdpdGggYWxsIEFuY2VzdG9ycyBvZiBhIFNvc2FXcmFwcGVyXG4gKi9cbmZ1bmN0aW9uIF9nZXRBbGxBbmNlc3RvcnNNYXBPZlNvc2FXcmFwcGVyKHNvc2FXcmFwcGVyKSB7XG4gICAgbGV0IGFycmF5ID0gW107XG4gICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyhzb3NhV3JhcHBlci5zb3NhKSkge1xuICAgICAgICBpZiAoU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuaGFzKHNvc2FXcmFwcGVyLnNvc2FGYXRoZXIpKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHNvc2FXcmFwcGVyLnNvc2FGYXRoZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYU1vdGhlcikpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goc29zYVdyYXBwZXIuc29zYU1vdGhlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycmF5LmNvbmNhdChfZ2V0QWxsQW5jZXN0b3JzTWFwT2ZTb3NhV3JhcHBlcihuZXcgU29zYVdyYXBwZXIoc29zYVdyYXBwZXIuc29zYUZhdGhlcikpLCBfZ2V0QWxsQW5jZXN0b3JzTWFwT2ZTb3NhV3JhcHBlcihuZXcgU29zYVdyYXBwZXIoc29zYVdyYXBwZXIuc29zYU1vdGhlcikpKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xufVxuIiwiaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgRmFtaWx5LCBJbmRpdmlkdWFsIH0gZnJvbSBcIi4vc3RydWN0LmNsYXNzXCI7XG5jb25zdCBSRUdFWF9JTkRJID0gL14wIEBJPyhbMC05XSopQCBJTkRJJC87XG5jb25zdCBSRUdFWF9OQU1FID0gL14xIE5BTUUgKC4qKVxcLyguKilcXC8kLztcbmNvbnN0IFJFR0VYX0ZBTUMgPSAvXjEgRkFNQyBARj8oWzAtOV0rKUAkLztcbmNvbnN0IFJFR0VYX1NFWCA9IC9eMSBTRVggKFtGTV0pJC87XG5jb25zdCBSRUdFWF9GQU1JTFkgPSAvXjAgQEY/KFswLTldKilAIEZBTSQvO1xuY29uc3QgUkVHRVhfSFVTQiA9IC9eMSBIVVNCIEBJPyhbMC05XSopQCQvO1xuY29uc3QgUkVHRVhfV0lGRSA9IC9eMSBXSUZFIEBJPyhbMC05XSopQCQvO1xuY29uc3QgUkVHRVhfQklSVEggPSAvXjEgQklSVFsgXT8kLztcbmNvbnN0IFJFR0VYX0RFQVRIID0gL14xIERFQVRbIF0/JC87XG5jb25zdCBSRUdFWF9NQVJSSUFHRSA9IC9eMSBNQVJSWyBdPyQvO1xuY29uc3QgUkVHRVhfREFURSA9IC9eMiBEQVRFICguKikkLztcbmNvbnN0IFJFR0VYX1BMQUNFID0gL14yIFBMQUMgKC4qKSQvO1xuY29uc3QgUkVHRVhfT0NDVVBBVElPTiA9IC9eMSBPQ0NVICguKikkLztcbmNvbnN0IFJFR0VYX1JFUExBQ0VfTkFNRSA9IC9cIi9nO1xuZXhwb3J0IGNsYXNzIEdlZGNvbVBhcnNlciB7XG4gICAgc3RhdGljIHBhcnNlKGdlZGNvbUNvbnRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmUgPSBudWxsO1xuICAgICAgICBsZXQgaW5kaXZpZHVhbCA9IG51bGw7IC8vIE9uZSBJbmRpdmlkdVxuICAgICAgICBsZXQgZmFtaWx5ID0gbnVsbDsgLy9PbmUgRmFtaWxseVxuICAgICAgICBsZXQgbWF0Y2hlcyA9IG51bGw7XG4gICAgICAgIGxldCBsaW5lcyA9IGdlZGNvbUNvbnRlbnQuc3BsaXQoL1tcXHJcXG5dKy8pO1xuICAgICAgICBsZXQgaXNJbmRpdmlkdWFsUGFydCA9IGZhbHNlO1xuICAgICAgICBsZXQgaXNGYW1pbHlQYXJ0ID0gZmFsc2U7XG4gICAgICAgIGxldCBpc0JpcnRoUGFydCA9IGZhbHNlO1xuICAgICAgICBsZXQgaXNEZWF0aFBhcnQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGlzTWFyaWFnZVBhcnQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGxlbiA9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfSU5ESSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGlzSW5kaXZpZHVhbFBhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlzRmFtaWx5UGFydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vU2F2ZSBwcmV2aW91cyBpbmRpdlxuICAgICAgICAgICAgICAgIGlmIChpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBTdG9yZS5tYXBHZWRUZWNoSWRUb0luZGl2aWR1YWwuc2V0KGluZGl2aWR1YWwuaWQsIGluZGl2aWR1YWwpO1xuICAgICAgICAgICAgICAgICAgICBpc0JpcnRoUGFydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpc0RlYXRoUGFydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoU3RvcmUuZmlyc3RHZWRUZWNoSWRQYXJzZWQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3RvcmUuZmlyc3RHZWRUZWNoSWRQYXJzZWQgPSBpbmRpdmlkdWFsLmlkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEluaXRpYXRlIGNsYXNzXG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbCA9IG5ldyBJbmRpdmlkdWFsKCk7XG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5pZCA9IHBhcnNlSW50KG1hdGNoZXNbMV0udHJpbSgpKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX0ZBTUlMWSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGlzRmFtaWx5UGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaXNJbmRpdmlkdWFsUGFydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vU2F2ZSBwcmV2aW91cyBmYW1pbHlcbiAgICAgICAgICAgICAgICBpZiAoZmFtaWx5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgU3RvcmUubWFwQ29kZUZhbWlseS5zZXQoZmFtaWx5LmlkLCBmYW1pbHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJbml0aWF0ZSBhcnJheVxuICAgICAgICAgICAgICAgIGZhbWlseSA9IG5ldyBGYW1pbHkoKTtcbiAgICAgICAgICAgICAgICBmYW1pbHkuaWQgPSBwYXJzZUludChtYXRjaGVzWzFdLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNJbmRpdmlkdWFsUGFydCkge1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX05BTUUpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmZpcnN0bmFtZSA9IG1hdGNoZXNbMV0ucmVwbGFjZShSRUdFWF9SRVBMQUNFX05BTUUsICcnKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWwubGFzdG5hbWUgPSBtYXRjaGVzWzJdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX0ZBTUMpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmZhbWMgPSBwYXJzZUludChtYXRjaGVzWzFdLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9TRVgpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLnNleCA9IG1hdGNoZXNbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfQklSVEgpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpc0JpcnRoUGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlzRGVhdGhQYXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9ERUFUSCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgaW5kaXZpZHVhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRGVhdGhQYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXNCaXJ0aFBhcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX0RBVEUpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNCaXJ0aFBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWwuYmlydGhEYXRlID0gbWF0Y2hlc1sxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNEZWF0aFBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWwuZGVhdGhEYXRlID0gbWF0Y2hlc1sxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX1BMQUNFKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQmlydGhQYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmJpcnRoUGxhY2UgPSBtYXRjaGVzWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc0RlYXRoUGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5kZWF0aFBsYWNlID0gbWF0Y2hlc1sxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX09DQ1VQQVRJT04pO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLm9jY3VwYXRpb24gPSBtYXRjaGVzWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzRmFtaWx5UGFydCkge1xuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX0hVU0IpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmYW1pbHkuZmF0aGVyID0gcGFyc2VJbnQobWF0Y2hlc1sxXS50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfV0lGRSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgaW5kaXZpZHVhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGZhbWlseS5tb3RoZXIgPSBwYXJzZUludChtYXRjaGVzWzFdLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9NQVJSSUFHRSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMpXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNNYXJpYWdlUGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX0RBVEUpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNNYXJpYWdlUGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmFtaWx5LnRtcE1hcmlhZ2VEYXRlID0gbWF0Y2hlc1sxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX1BMQUNFKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWFyaWFnZVBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbWlseS50bXBNYXJpYWdlUGxhY2UgPSBtYXRjaGVzWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9SZSB3b3JrIGZhbWlseSB0byBwcm9wYWdhdGUgV2VkZGluZ3MgaW5mb3JtYXRpb25zIHRvIHBhcmVudHNcbiAgICAgICAgU3RvcmUubWFwQ29kZUZhbWlseS5mb3JFYWNoKChmYW1pbHksIGNvZGVGYW1pbHkpID0+IHtcbiAgICAgICAgICAgIC8vUHJvY2VzcyB0aGUgZmF0aGVyXG4gICAgICAgICAgICBpZiAoZmFtaWx5LmZhdGhlciAhPT0gdW5kZWZpbmVkICYmIGZhbWlseS5mYXRoZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbmRpdmlkdWFsID0gU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLmdldChmYW1pbHkuZmF0aGVyKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kaXZpZHVhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcImluZGl2aWR1YWwgbnVsbCBmb3IgaWRUZWNoICVvIFwiLCBmYW1pbHkuZmF0aGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5tYXJpYWdlRGF0ZSA9IGZhbWlseS50bXBNYXJpYWdlRGF0ZTtcbiAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLm1hcmlhZ2VQbGFjZSA9IGZhbWlseS50bXBNYXJpYWdlUGxhY2U7XG4gICAgICAgICAgICAgICAgU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLnNldChmYW1pbHkuZmF0aGVyLCBpbmRpdmlkdWFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vUHJvY2VzcyB0aGUgbW90aGVyXG4gICAgICAgICAgICBpZiAoZmFtaWx5Lm1vdGhlciAhPT0gdW5kZWZpbmVkICYmIGZhbWlseS5tb3RoZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbmRpdmlkdWFsID0gU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLmdldChmYW1pbHkubW90aGVyKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5kaXZpZHVhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcImluZGl2aWR1YWwgbnVsbCBmb3IgaWRUZWNoICVvIFwiLCBmYW1pbHkubW90aGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5tYXJpYWdlRGF0ZSA9IGZhbWlseS50bXBNYXJpYWdlRGF0ZTtcbiAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLm1hcmlhZ2VQbGFjZSA9IGZhbWlseS50bXBNYXJpYWdlUGxhY2U7XG4gICAgICAgICAgICAgICAgU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLnNldChmYW1pbHkubW90aGVyLCBpbmRpdmlkdWFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZhbWlseS50bXBNYXJpYWdlRGF0ZSA9IG51bGw7XG4gICAgICAgICAgICBmYW1pbHkudG1wTWFyaWFnZVBsYWNlID0gbnVsbDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IF9IRV9GSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKTtcbmV4cG9ydCBjb25zdCBfSEVfRk9STSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3gnKTtcbmV4cG9ydCBjb25zdCBfSEVfUERGX0FDVElPTl9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmMScpO1xuZXhwb3J0IGNvbnN0IF9IRV9QREZfTVVMVElQQUdFX0FDVElPTl9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmMicpO1xuZXhwb3J0IGNvbnN0IF9IRV9QTkdfQUNUSU9OX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcxJyk7XG5leHBvcnQgY29uc3QgX0hFX09QVElPTlNfQUNUSU9OX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93T3B0aW9ucycpO1xuZXhwb3J0IGNvbnN0IF9IRV9TVkdXUkFQUEVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N2Z1dyYXBwZXInKTtcbmV4cG9ydCBjb25zdCBfSEVfTUlOSVNWR1dSQVBQRVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1hcFdyYXBwZXInKTtcbmV4cG9ydCBjb25zdCBfSEVfUk9PVF9JTlBVVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFJvb3QnKTtcbmV4cG9ydCBjb25zdCBfSEVfUk9PVF9FWEVDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4ZWNSb290Jyk7XG5leHBvcnQgY29uc3QgX0hFX1JPT1RfQ0FOQ0VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFJvb3QnKTtcbmV4cG9ydCBjb25zdCBfSEVfUk9PVF9TV0lUQ0ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoUm9vdCcpO1xuZXhwb3J0IGNvbnN0IF9IRV9ST09UX1JFU1VMVFMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0c1Jvb3QnKTtcbmV4cG9ydCBjb25zdCBfSEVfUk9PVF9TRUxFQ1RXUkFQUEVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdFJvb3RXcmFwcGVyJyk7XG5leHBvcnQgY29uc3QgX0hFX1JPT1RfTk9SRVNVTFQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9SZXN1bHQnKTtcbmV4cG9ydCBjb25zdCBfSEVfUFJPR1JFU1NCQVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NCYXInKTtcbmV4cG9ydCBjb25zdCBfSEVfUFJPR1JFU1NCQVJfU1VCID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YlByb2dyZXNzQmFyJyk7XG5leHBvcnQgY29uc3QgX0hFX1BST0dSRVNTQkFSX1RYVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0UHJvZ3Jlc3NCYXInKTtcbmV4cG9ydCBjb25zdCBfSEVfSEVBREVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuZXhwb3J0IGNvbnN0IF9IRV9QREZXUkFQUEVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZm9iamVjdFdyYXBwZXInKTtcbmV4cG9ydCBjb25zdCBfSEVfU1RBUlRUWVBFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0VHlwZScpO1xuZXhwb3J0IGNvbnN0IF9IRV9XQUlUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhaXQnKTtcbmV4cG9ydCBjb25zdCBfSEVfV0FJVF9DUFQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FpdF9jcHQnKTtcbmV4cG9ydCBjb25zdCBfSEVfTUVTU0FHRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XG4vKiBPcHRpb25zIHNlY3Rpb24gKi9cbmV4cG9ydCBjb25zdCBfSEVfT1BUSU9OUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zJyk7XG5leHBvcnQgY29uc3QgX0hFX09QVElPTlNfV0FMTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zV2FsbCcpO1xuZXhwb3J0IGNvbnN0IF9IRV9PUFRJT05TX0lNUExFWEVTX05PVEhJTkcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aGluZycpO1xuZXhwb3J0IGNvbnN0IF9IRV9PUFRJT05TX0lNUExFWEVTX0hJREUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZScpO1xuZXhwb3J0IGNvbnN0IF9IRV9PUFRJT05TX0lNUExFWEVTX0NPTE9SID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yJyk7XG5leHBvcnQgY29uc3QgX0hFX09QVElPTlNfSU1QTEVYRVNfQ09MT1JfSElERSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvckhpZGUnKTtcbmV4cG9ydCBjb25zdCBfSEVfT1BUSU9OU19URU1QTEFURSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cGwnKTtcbmV4cG9ydCBjb25zdCBfSEVfT1BUSU9OU19URU1QTEFURV9SRVNFVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cGxfcmVzZXQnKTtcbmV4cG9ydCBjb25zdCBfSEVfT1BUSU9OU19NQVhHRU4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4R2VuZXJhdGlvbicpO1xuZXhwb3J0IGNvbnN0IF9IRV9PUFRJT05TX1NVQk1JVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRPcHRpb25zJyk7XG5leHBvcnQgZnVuY3Rpb24gaGlkZShodG1sRWxlbWVudElkcykge1xuICAgIGh0bWxFbGVtZW50SWRzLmZvckVhY2goaHRtbEVsZW1lbnQgPT4ge1xuICAgICAgICBodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGh0bWxFbGVtZW50SWRzKSB7XG4gICAgaHRtbEVsZW1lbnRJZHMuZm9yRWFjaChodG1sRWxlbWVudCA9PiB7XG4gICAgICAgIGh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHB1cmdlKGh0bWxFbGVtZW50KSB7XG4gICAgLy8gLmlubmVySHRtbD0nJyBpcyBub3QgcmVjb21tZW5kZWQgYmVjYXVzZSBpdCBkb2VzbuKAmXQgcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVycyBvZiB0aGUgY2hpbGQgbm9kZXMsIHdoaWNoIG1pZ2h0IGNhdXNlIGEgbWVtb3J5IGxlYWsuXG4gICAgd2hpbGUgKGh0bWxFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgaHRtbEVsZW1lbnQucmVtb3ZlQ2hpbGQoaHRtbEVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJztcbmltcG9ydCB7IGhpZGUsIHNob3csIF9IRV9TVkdXUkFQUEVSIGFzIF9IRV9TVkdXUkFQUEVSLCBfSEVfV0FJVCB9IGZyb20gJy4vSHRtbEVsZW1lbnRzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9TdG9yZSc7XG5pbXBvcnQgeyBTVkdSZW5kZXJlciB9IGZyb20gJy4vU1ZHUmVuZGVyZXInO1xuLyoqXG4gKiBHZW5lcmF0ZSBhIHNjcmVlbnNob3QgZnJvbSB0aGUgY2hhcnQgYW5kIHNhdmUgaXQgb24gY29tcHV0ZXIgYXMgYSBwbmcgaW1hZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRha2VzaG90KCkge1xuICAgIHNob3coW19IRV9XQUlUXSk7XG4gICAgbGV0IGNvbXAgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShfSEVfU1ZHV1JBUFBFUik7XG4gICAgbGV0IHByZXZpb3VzID0geyB2aWV3Ym94OiBTVkdSZW5kZXJlci5jb250YWluZXIudmlld2JveCgpLnRvU3RyaW5nKCksXG4gICAgICAgIHc6IGNvbXAuZ2V0UHJvcGVydHlWYWx1ZSgnd2lkdGgnKSxcbiAgICAgICAgaDogY29tcC5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKSxcbiAgICAgICAgem9vbTogU1ZHUmVuZGVyZXIuY29udGFpbmVyLnpvb20oKSB9O1xuICAgIF9IRV9TVkdXUkFQUEVSLnN0eWxlLndpZHRoID0gU3RvcmUucG9zaXRpb25YTWF4ICsgJ3B4JztcbiAgICBfSEVfU1ZHV1JBUFBFUi5zdHlsZS5oZWlnaHQgPSBTdG9yZS5wb3NpdGlvbllNYXggKyAncHgnO1xuICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lclxuICAgICAgICAudmlld2JveCgwLCAwLCBTdG9yZS5wb3NpdGlvblhNYXgsIFN0b3JlLnBvc2l0aW9uWU1heClcbiAgICAgICAgLnNpemUoU3RvcmUucG9zaXRpb25YTWF4LCBTdG9yZS5wb3NpdGlvbllNYXgpXG4gICAgICAgIC56b29tKDEpO1xuICAgIGh0bWwyY2FudmFzKF9IRV9TVkdXUkFQUEVSLCB7XG4gICAgICAgIGlnbm9yZUVsZW1lbnRzOiBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucygndG9FeGNsdWRlRnJvbVNuYXBzaG90Jyk7IH0sXG4gICAgICAgIGxvZ2dpbmc6IGZhbHNlXG4gICAgfSkudGhlbihmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgIGNhbnZhcy50b0Jsb2IoZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgICAgICAgIGRvd25sb2FkKGJsb2IsIFwiLnBuZ1wiKTtcbiAgICAgICAgfSk7XG4gICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGhpZGUoW19IRV9XQUlUXSk7XG4gICAgICAgIC8vUmVzZXQgaW5mb3JtYXRpb24gcG9zdCBwZGYgZ2VuZXJhdGlvbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXJcbiAgICAgICAgICAgIC52aWV3Ym94KHByZXZpb3VzLnZpZXdib3gpXG4gICAgICAgICAgICAuc2l6ZShwcmV2aW91cy53LCBwcmV2aW91cy5oKVxuICAgICAgICAgICAgLnpvb20ocHJldmlvdXMuem9vbSk7XG4gICAgICAgIF9IRV9TVkdXUkFQUEVSLnN0eWxlLndpZHRoID0gXCJcIjtcbiAgICAgICAgX0hFX1NWR1dSQVBQRVIuc3R5bGUuaGVpZ2h0ID0gXCJcIjtcbiAgICB9KTtcbn1cbi8qKlxuICogSW1wbGVtZW50IGEgY3VzdG9tIGRvd25sb2FkIGZpbGVcbiAqIEBwYXJhbSBibG9iIHRoZSBiaW5hcmllcyB0byBkb3dubG9hZFxuICogQHBhcmFtIGV4dGVuc2lvbk5hbWUgdGhlIG5hbWUgb2YgdGhlIGZpbGVcbiAqL1xuZnVuY3Rpb24gZG93bmxvYWQoYmxvYiwgZXh0ZW5zaW9uTmFtZSkge1xuICAgIHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgIHZhciBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBkb3dubG9hZExpbmsuaHJlZiA9IHVybDtcbiAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBcImdlZGNvbV9cIlxuICAgICAgICArIHRvWVlZWU1NRERfaGhtbShuZXcgRGF0ZSgpKVxuICAgICAgICArIGV4dGVuc2lvbk5hbWU7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb3dubG9hZExpbmspO1xuICAgIGRvd25sb2FkTGluay5jbGljaygpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG93bmxvYWRMaW5rKTtcbn1cbi8qKlxuICogUmV0dXJuIHRoZSBkYXRlIHRvIGEgc3RyaW5nIHZhbGlkYXRpbmcgdGhlIGZvcm1hdCBZWVlZTU1ERF9ISG1tXG4gKiBAcGFyYW0gZGF0ZSB0aGUgZGF0ZSB0byBwYXJzZSBpbnRvIGEgSVNPIGRhdGUgZm9ybWF0IFlZWVlNTUREX0hIbW1cbiAqIEByZXR1cm5zIHN0cmluZyB0aGUgZm9ybWF0IFlZWVlNTUREX0hIbW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvWVlZWU1NRERfaGhtbShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLnBhZFN0YXJ0KDQsICcwJylcbiAgICAgICAgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgICAgICsgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgICAgICsgJ18nXG4gICAgICAgICsgZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKVxuICAgICAgICArIGRhdGUuZ2V0TWludXRlcygpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKTtcbn1cbiIsImV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAgIHN0YXRpYyBpbml0KCkge1xuICAgICAgICBMb2dnZXIudGltZXJTdGFydCA9IERhdGUubm93KCk7XG4gICAgICAgIExvZ2dlci50aW1lclN0ZXAgPSBEYXRlLm5vdygpO1xuICAgIH1cbiAgICBzdGF0aWMgbG9nKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhtZXNzYWdlICsgXCIgbXMgZWxhcHNlZCA9IFwiICsgKERhdGUubm93KCkgLSBMb2dnZXIudGltZXJTdGVwKSArIFwibXNcIiArIFwiIC8gXCIgKyAoRGF0ZS5ub3coKSAtIExvZ2dlci50aW1lclN0YXJ0KSArIFwibXNcIik7XG4gICAgICAgIExvZ2dlci50aW1lclN0ZXAgPSBEYXRlLm5vdygpO1xuICAgIH1cbn1cbkxvZ2dlci50aW1lclN0YXJ0ID0gbnVsbDtcbkxvZ2dlci50aW1lclN0ZXAgPSBudWxsO1xuIiwiaW1wb3J0IHsgU1ZHIH0gZnJvbSBcIkBzdmdkb3Rqcy9zdmcuanNcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCB7IF9IRV9NSU5JU1ZHV1JBUFBFUiBhcyBfSEVfTUlOSU1BUFdSQVBQRVIsIF9IRV9TVkdXUkFQUEVSIH0gZnJvbSBcIi4vSHRtbEVsZW1lbnRzXCI7XG5pbXBvcnQgeyBTVkdSZW5kZXJlciB9IGZyb20gXCIuL1NWR1JlbmRlcmVyXCI7XG5leHBvcnQgY2xhc3MgTWluaW1hcFJlbmRlcmVyIHtcbiAgICBzdGF0aWMgZHJhd01pbmltYXAoKSB7XG4gICAgICAgIE1pbmltYXBSZW5kZXJlci5taW5pbWFwID0gU1ZHKCkuYWRkVG8oX0hFX01JTklNQVBXUkFQUEVSKTtcbiAgICAgICAgTWluaW1hcFJlbmRlcmVyLm1pbmltYXBSZXNpemUoKTtcbiAgICAgICAgTWluaW1hcFJlbmRlcmVyLm1pbmltYXBCb3goKTtcbiAgICB9XG4gICAgc3RhdGljIG1pbmltYXBSZXNpemUoKSB7XG4gICAgICAgIGNvbnN0IG1heCA9IDIwMDtcbiAgICAgICAgY29uc3QgbWluID0gMTAwO1xuICAgICAgICBsZXQgdywgaCA9IDA7XG4gICAgICAgIGlmIChTdG9yZS5wb3NpdGlvblhNYXggPiBTdG9yZS5wb3NpdGlvbllNYXgpIHtcbiAgICAgICAgICAgIHcgPSBtYXg7XG4gICAgICAgICAgICBoID0gTWF0aC5tYXgobWluLCBTdG9yZS5wb3NpdGlvbllNYXggKiBtYXggLyBTdG9yZS5wb3NpdGlvblhNYXgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdyA9IE1hdGgubWF4KG1pbiwgU3RvcmUucG9zaXRpb25YTWF4ICogbWF4IC8gU3RvcmUucG9zaXRpb25ZTWF4KTtcbiAgICAgICAgICAgIGggPSBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgX0hFX01JTklNQVBXUkFQUEVSLnN0eWxlLndpZHRoID0gdyArICdweCc7XG4gICAgICAgIF9IRV9NSU5JTUFQV1JBUFBFUi5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcbiAgICAgICAgLy9SZXNldCBmb2N1cyByZWN0XG4gICAgICAgIE1pbmltYXBSZW5kZXJlci5mb2N1cyA9IG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBwbHVnRXZlbnRzKCkge1xuICAgICAgICAvL0V2ZW50IG9uIHRoZSBtYWluIFNWR1xuICAgICAgICBsZXQgc3ZnVGFnID0gX0hFX1NWR1dSQVBQRVIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdmdcIilbMF07XG4gICAgICAgIHN2Z1RhZy5hZGRFdmVudExpc3RlbmVyKFwiem9vbVwiLCBmdW5jdGlvbiAoZXZlbnQpIHsgTWluaW1hcFJlbmRlcmVyLmRyYXdGb2N1cygpOyB9LCBmYWxzZSk7XG4gICAgICAgIHN2Z1RhZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duIFwiLCBmdW5jdGlvbiAoZXZlbnQpIHsgTWluaW1hcFJlbmRlcmVyLmRyYXdGb2N1cygpOyB9LCBmYWxzZSk7XG4gICAgICAgIHN2Z1RhZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHsgTWluaW1hcFJlbmRlcmVyLmRyYXdGb2N1cygpOyB9LCBmYWxzZSk7XG4gICAgICAgIC8vRXZlbnQgb24gdGhlIG1haW4gU1ZHXG4gICAgICAgIGxldCBtaW5pbWFwVGFnID0gX0hFX01JTklNQVBXUkFQUEVSLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpWzBdO1xuICAgICAgICBtaW5pbWFwVGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd24gXCIsIGZ1bmN0aW9uIChldmVudCkgeyBTVkdSZW5kZXJlci5jaGFuZ2VGb2N1cyhldmVudCk7IH0sIGZhbHNlKTtcbiAgICAgICAgbWluaW1hcFRhZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoZXZlbnQpIHsgU1ZHUmVuZGVyZXIuY2hhbmdlRm9jdXMoZXZlbnQpOyB9LCBmYWxzZSk7XG4gICAgfVxuICAgIHN0YXRpYyBkcmF3Rm9jdXMoKSB7XG4gICAgICAgIGxldCBib3ggPSBTVkdSZW5kZXJlci5jb250YWluZXIudmlld2JveCgpO1xuICAgICAgICBpZiAodGhpcy5mb2N1cyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzID0gTWluaW1hcFJlbmRlcmVyLm1pbmltYXAucmVjdCgxLCAxKVxuICAgICAgICAgICAgICAgIC5maWxsKFwicmdiYSgyNTUsIDAsIDAsIDAuMilcIilcbiAgICAgICAgICAgICAgICAubW92ZSgtMTAwMDAsIC0xMDAwMClcbiAgICAgICAgICAgICAgICAuc3Ryb2tlKHsgd2lkdGg6IDIsIGNvbG9yOiBcInJnYmEoMjU1LCAwLCAwLCAwLjM3KVwiIH0pXG4gICAgICAgICAgICAgICAgLmZyb250KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb2N1cy54KGJveC54KS55KGJveC55KS53aWR0aChib3gud2lkdGgpLmhlaWdodChib3guaGVpZ2h0KTtcbiAgICB9XG4gICAgc3RhdGljIG1pbmltYXBCb3goKSB7XG4gICAgICAgIE1pbmltYXBSZW5kZXJlci5taW5pbWFwXG4gICAgICAgICAgICAudmlld2JveCgwLCAwLCBTdG9yZS5wb3NpdGlvblhNYXgsIFN0b3JlLnBvc2l0aW9uWU1heClcbiAgICAgICAgICAgIC5zaXplKCcxMDAlJywgJzEwMCUnKTtcbiAgICB9XG59XG5NaW5pbWFwUmVuZGVyZXIubWluaW1hcCA9IG51bGw7XG5NaW5pbWFwUmVuZGVyZXIuZm9jdXMgPSBudWxsO1xuIiwiaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCB7IHN2ZzJwZGYgfSBmcm9tIFwic3ZnMnBkZi5qc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQZGZSZW5kZXJlciB9IGZyb20gJy4vQWJzdHJhY3RQZGZSZW5kZXJlcic7XG5pbXBvcnQgeyBfSEVfV0FJVF9DUFQgfSBmcm9tICcuL0h0bWxFbGVtZW50cyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBTVkdSZW5kZXJlciB9IGZyb20gXCIuL1NWR1JlbmRlcmVyXCI7XG5leHBvcnQgY2xhc3MgTXVsdGlQREZSZW5kZXJlciBleHRlbmRzIEFic3RyYWN0UGRmUmVuZGVyZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLlBERl9NVUxUSVBBR0VfTUFSR0lOX0NNID0gMTsgLy9NYXJnaW4gb24gZWFjaCBwZGYgcGFnZSBpbiBjbVxuICAgIH1cbiAgICBnZW5lcmF0ZVBkZigpIHtcbiAgICAgICAgc3VwZXIuZ2VuZXJhdGVQZGYoKTtcbiAgICAgICAgbGV0IHBkZiA9IG5ldyBqc1BERih0aGlzLm9yaWVudGF0aW9uLCBcImNtXCIsIFwiYTRcIik7XG4gICAgICAgIGxldCBwYWRXaWR0aCA9IHBkZi5pbnRlcm5hbC5wYWdlU2l6ZS5nZXRXaWR0aCgpIC0gMiAqIHRoaXMuUERGX01VTFRJUEFHRV9NQVJHSU5fQ007XG4gICAgICAgIGxldCBwYWRIZWlnaHQgPSBwZGYuaW50ZXJuYWwucGFnZVNpemUuZ2V0SGVpZ2h0KCkgLSAyICogdGhpcy5QREZfTVVMVElQQUdFX01BUkdJTl9DTTtcbiAgICAgICAgbGV0IHRvdGFsUGFnZXMgPSBNdWx0aVBERlJlbmRlcmVyLmV4cGVjdGVkUGFnZUNvdW50KCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb21pc2UgPSB0aGlzLmFkZFBhZ2UodGhpcy5zdmdFbGVtZW50LCBwZGYsIDAsIHBhZFdpZHRoLCAwLCBwYWRIZWlnaHQsIDAsIHRvdGFsUGFnZXMpO1xuICAgICAgICAgICAgdGhpcy5yZXNvbHZlU3ZnMlBkZihwcm9taXNlKTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuICAgIGFkZFBhZ2Uoc3ZnRWxlbWVudCwgcGRmLCBfeCwgcGFkV2lkdGhDbSwgX3ksIHBhZEhlaWdodENtLCBzdGVwLCB0b3RhbFBhZ2VzKSB7XG4gICAgICAgIGxldCBpc0VuZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGRmUGFydGlhbFZpZXdCb3goX3ggKiBwYWRXaWR0aENtICogTXVsdGlQREZSZW5kZXJlci5SQVRJT19QWF8yX0NNLCBfeSAqIHBhZEhlaWdodENtICogTXVsdGlQREZSZW5kZXJlci5SQVRJT19QWF8yX0NNLCBwYWRXaWR0aENtICogTXVsdGlQREZSZW5kZXJlci5SQVRJT19QWF8yX0NNLCBwYWRIZWlnaHRDbSAqIE11bHRpUERGUmVuZGVyZXIuUkFUSU9fUFhfMl9DTSk7XG4gICAgICAgICAgICBzdmcycGRmKHN2Z0VsZW1lbnQsIHBkZiwge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuUERGX01VTFRJUEFHRV9NQVJHSU5fQ00sXG4gICAgICAgICAgICAgICAgeTogdGhpcy5QREZfTVVMVElQQUdFX01BUkdJTl9DTSxcbiAgICAgICAgICAgICAgICB3aWR0aDogcGFkV2lkdGhDbSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHBhZEhlaWdodENtLCAvL0xhcmdldXIgcHJpc2Ugc3VyIGxlIFBERiA9PiBBNCA9IHBhZFdpZHRoXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBfeSsrO1xuICAgICAgICAgICAgICAgIC8vSWYgd2UgcmVhY2ggdGhlIGJvdHRvbSBvZiB0aGUgU1ZHXG4gICAgICAgICAgICAgICAgaWYgKF95ICogcGFkSGVpZ2h0Q20gPiBTdG9yZS5wb3NpdGlvbllNYXggLyBNdWx0aVBERlJlbmRlcmVyLlJBVElPX1BYXzJfQ00pIHtcbiAgICAgICAgICAgICAgICAgICAgX3kgPSAwO1xuICAgICAgICAgICAgICAgICAgICBfeCsrO1xuICAgICAgICAgICAgICAgICAgICAvL0lmIHdlIHJlYWNoIHRoZSBib3R0b20vcmlnaHQgb2YgdGhlIFNWR1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3ggKiBwYWRXaWR0aENtID4gU3RvcmUucG9zaXRpb25YTWF4IC8gTXVsdGlQREZSZW5kZXJlci5SQVRJT19QWF8yX0NNKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzRW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocGRmKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBkZi5hZGRQYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgIHN0ZXArKztcbiAgICAgICAgICAgICAgICAgICAgX0hFX1dBSVRfQ1BULmlubmVySFRNTCA9IGAke3N0ZXB9IC8gJHt0b3RhbFBhZ2VzfWA7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRQYWdlKHN2Z0VsZW1lbnQsIHBkZiwgX3gsIHBhZFdpZHRoQ20sIF95LCBwYWRIZWlnaHRDbSwgc3RlcCwgdG90YWxQYWdlcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwZGYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGRmUGFydGlhbFZpZXdCb3goeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXJcbiAgICAgICAgICAgIC52aWV3Ym94KHgsIHksIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgICAgICAuc2l6ZSgnMTAwJScsICcxMDAlJyk7XG4gICAgfVxuICAgIHN0YXRpYyBleHBlY3RlZFBhZ2VDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbChTdG9yZS5wb3NpdGlvblhNYXggLyBNdWx0aVBERlJlbmRlcmVyLlJBVElPX1BYXzJfQ00gLyAoMjEgLSAyKSkgKiBNYXRoLmNlaWwoU3RvcmUucG9zaXRpb25ZTWF4IC8gTXVsdGlQREZSZW5kZXJlci5SQVRJT19QWF8yX0NNIC8gKDI5LjcgLSAyKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcmVEcmF3IH0gZnJvbSBcIi4vZGVtb1wiO1xuaW1wb3J0IHsgaGlkZSwgc2hvdywgX0hFX09QVElPTlMsIF9IRV9PUFRJT05TX0lNUExFWEVTX0NPTE9SLCBfSEVfT1BUSU9OU19JTVBMRVhFU19DT0xPUl9ISURFLCBfSEVfT1BUSU9OU19JTVBMRVhFU19ISURFLCBfSEVfT1BUSU9OU19JTVBMRVhFU19OT1RISU5HLCBfSEVfT1BUSU9OU19NQVhHRU4sIF9IRV9PUFRJT05TX1RFTVBMQVRFLCBfSEVfT1BUSU9OU19XQUxMIH0gZnJvbSBcIi4vSHRtbEVsZW1lbnRzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5leHBvcnQgY2xhc3MgSW1wbGV4ZXNUeXBlIHtcbn1cbkltcGxleGVzVHlwZS5ub3RoaW5nID0gXCJub3RoaW5nXCI7XG5JbXBsZXhlc1R5cGUuaGlkZSA9IFwiaGlkZVwiO1xuSW1wbGV4ZXNUeXBlLmNvbG9yID0gXCJjb2xvclwiO1xuSW1wbGV4ZXNUeXBlLmNvbG9ySGlkZSA9IFwiY29sb3JIaWRlXCI7XG5jb25zdCBERUZBVUxUX1RFTVBMQVRFID0gYF9GSVJTVE5BTUVfIF9MQVNUTkFNRV9cbsKkIF9CSVJUSF9EQVRFXyBfQklSVEhfUExBQ0VfXG5VIF9NQVJSSUFHRV9EQVRFXyBfTUFSUklBR0VfUExBQ0VfXG5YIF9ERUFUSF9EQVRFXyBfREVBVEhfUExBQ0VfXG5fT0NDVVBBVElPTl9gO1xuZXhwb3J0IGNsYXNzIE9wdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKGltcGxleGVzID0gbnVsbCwgbWF4R2VuZXJhdGlvbiA9IG51bGwsIHRlbXBsYXRlID0gbnVsbCkge1xuICAgICAgICB0aGlzLmltcGxleGVzID0gSW1wbGV4ZXNUeXBlLm5vdGhpbmc7XG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvbiA9IDEwMDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IERFRkFVTFRfVEVNUExBVEU7XG4gICAgICAgIHRoaXMuaW1wbGV4ZXMgPSB0aGlzLmdldFZhbGlkSW1wbGV4ZShpbXBsZXhlcyk7XG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvbiA9IHRoaXMuZ2V0VmFsaWRlTWF4R2VuZXJhdGlvbihtYXhHZW5lcmF0aW9uKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuZ2V0VmFsaWRlVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIH1cbiAgICBwYXJzZShqc29uKSB7XG4gICAgICAgIGxldCBvYmplY3QgPSB7fTtcbiAgICAgICAgaWYgKGpzb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgb2JqZWN0ID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltcGxleGVzID0gdGhpcy5nZXRWYWxpZEltcGxleGUob2JqZWN0WydpbXBsZXhlcyddKTtcbiAgICAgICAgdGhpcy5tYXhHZW5lcmF0aW9uID0gdGhpcy5nZXRWYWxpZGVNYXhHZW5lcmF0aW9uKFwiXCIgKyBvYmplY3RbJ21heEdlbmVyYXRpb24nXSk7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmdldFZhbGlkZVRlbXBsYXRlKG9iamVjdFsndGVtcGxhdGUnXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRWYWxpZEltcGxleGUoc3RyKSB7XG4gICAgICAgIGlmIChJbXBsZXhlc1R5cGUubm90aGluZyA9PT0gc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gSW1wbGV4ZXNUeXBlLm5vdGhpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEltcGxleGVzVHlwZS5oaWRlID09PSBzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBJbXBsZXhlc1R5cGUuaGlkZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSW1wbGV4ZXNUeXBlLmNvbG9yID09PSBzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBJbXBsZXhlc1R5cGUuY29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEltcGxleGVzVHlwZS5jb2xvckhpZGUgPT09IHN0cikge1xuICAgICAgICAgICAgcmV0dXJuIEltcGxleGVzVHlwZS5jb2xvckhpZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy9EZWZhdWx0IHZhbHVlXG4gICAgICAgIHJldHVybiBJbXBsZXhlc1R5cGUubm90aGluZztcbiAgICB9XG4gICAgZ2V0VmFsaWRlTWF4R2VuZXJhdGlvbihzdHIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gMTAwO1xuICAgICAgICBpZiAoc3RyICE9IG51bGwgJiYgc3RyLm1hdGNoKC9eXFwtP1swLTldKyQvKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludChzdHIpO1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gMTAwIHx8IHZhbHVlID09IDAgfHwgdmFsdWUgPCAtMSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0VmFsaWRlVGVtcGxhdGUoc3RyKSB7XG4gICAgICAgIGlmIChzdHIgPT0gbnVsbCB8fCBzdHIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gREVGQVVMVF9URU1QTEFURTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICAvL1RPRE8gdmVyaWZ5IHZhbGlkYXRpb24gJiByZXR1cm4gZGVmYXVsdCB0ZW1wbGF0ZVxuICAgICAgICAvL3JldHVybiBERUZBVUxUX1RFTVBMQVRFXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE9wdGlvblJlcG9zaXRvcnkge1xuICAgIC8qKlxuICAgICAqICBTYXZlIE9wdGlvbiBpbnRvIHRoZSBsb2NhbHN0b3JhZ2VcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIHN0YXRpYyBzYXZlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdHZWRjb21PcHRpb25zJywgSlNPTi5zdHJpbmdpZnkob3B0aW9ucykpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnR2VkY29tT3B0aW9ucycpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgT3B0aW9uQnVzaW5lc3Mge1xuICAgIHN0YXRpYyByZWZyZXNoVGVtcGxhdGVJbnRvVUkoKSB7XG4gICAgICAgIF9IRV9PUFRJT05TX1RFTVBMQVRFLnZhbHVlID0gREVGQVVMVF9URU1QTEFURTtcbiAgICB9XG4gICAgc3RhdGljIHJlZnJlc2hPcHRpb25zSW50b1VJKCkge1xuICAgICAgICBzaG93KFtfSEVfT1BUSU9OUywgX0hFX09QVElPTlNfV0FMTF0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IE9wdGlvblJlcG9zaXRvcnkuZ2V0T3B0aW9ucygpO1xuICAgICAgICBfSEVfT1BUSU9OU19URU1QTEFURS52YWx1ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG4gICAgICAgIF9IRV9PUFRJT05TX01BWEdFTi52YWx1ZSA9IG9wdGlvbnMubWF4R2VuZXJhdGlvbiArICcnO1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMuaW1wbGV4ZXMpIHtcbiAgICAgICAgICAgIGNhc2UgSW1wbGV4ZXNUeXBlLm5vdGhpbmc6XG4gICAgICAgICAgICAgICAgX0hFX09QVElPTlNfSU1QTEVYRVNfTk9USElORy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSW1wbGV4ZXNUeXBlLmhpZGU6XG4gICAgICAgICAgICAgICAgX0hFX09QVElPTlNfSU1QTEVYRVNfSElERS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSW1wbGV4ZXNUeXBlLmNvbG9yOlxuICAgICAgICAgICAgICAgIF9IRV9PUFRJT05TX0lNUExFWEVTX0NPTE9SLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJbXBsZXhlc1R5cGUuY29sb3JIaWRlOlxuICAgICAgICAgICAgICAgIF9IRV9PUFRJT05TX0lNUExFWEVTX0NPTE9SX0hJREUuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF9IRV9PUFRJT05TX0lNUExFWEVTX05PVEhJTkcuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHNhdmVPcHRpb25zZnJvbVVJKCkge1xuICAgICAgICBsZXQgaW1wbGV4ZXMgPSBJbXBsZXhlc1R5cGUubm90aGluZztcbiAgICAgICAgaWYgKF9IRV9PUFRJT05TX0lNUExFWEVTX0hJREUuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW1wbGV4ZXMgPSBJbXBsZXhlc1R5cGUuaGlkZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX0hFX09QVElPTlNfSU1QTEVYRVNfQ09MT1IuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW1wbGV4ZXMgPSBJbXBsZXhlc1R5cGUuY29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9IRV9PUFRJT05TX0lNUExFWEVTX0NPTE9SX0hJREUuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW1wbGV4ZXMgPSBJbXBsZXhlc1R5cGUuY29sb3JIaWRlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IE9wdGlvbnMoaW1wbGV4ZXMsIF9IRV9PUFRJT05TX01BWEdFTi52YWx1ZSwgX0hFX09QVElPTlNfVEVNUExBVEUudmFsdWUpO1xuICAgICAgICAvL3Jlc2V0IGNhY2hlIG9mIFN0b3JlXG4gICAgICAgIFN0b3JlLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIC8vc2F2aW5nIG9wdGlvbnMgXG4gICAgICAgIE9wdGlvblJlcG9zaXRvcnkuc2F2ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIE9wdGlvbkJ1c2luZXNzLmhpZGVPcHRpb25zKCk7XG4gICAgICAgIC8vUmVkcmF3XG4gICAgICAgIHJlRHJhdyh0cnVlKTtcbiAgICB9XG4gICAgc3RhdGljIGhpZGVPcHRpb25zKCkge1xuICAgICAgICAvL2hpZGluZyBvcHRpb25zIEhUTUwgZWxlbWVudHNcbiAgICAgICAgaGlkZShbX0hFX09QVElPTlMsIF9IRV9PUFRJT05TX1dBTExdKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IHsgc3ZnMnBkZiB9IGZyb20gXCJzdmcycGRmLmpzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBkZlJlbmRlcmVyIH0gZnJvbSAnLi9BYnN0cmFjdFBkZlJlbmRlcmVyJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3RvcmVcIjtcbmNvbnN0IFBERl9IQVJEX0xJTUlUID0gNTA4MDsgLy9QREYgaXMgbGltaXRlZCB0byA1MDgwIG1tIG1heCBodHRwczovL2dpdGh1Yi5jb20vcGFyYWxsYXgvanNQREYvaXNzdWVzLzcwNVxuZXhwb3J0IGNsYXNzIFBERlJlbmRlcmVyIGV4dGVuZHMgQWJzdHJhY3RQZGZSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbiAgICBnZW5lcmF0ZVBkZigpIHtcbiAgICAgICAgc3VwZXIuZ2VuZXJhdGVQZGYoKTtcbiAgICAgICAgaWYgKFN0b3JlLnBvc2l0aW9uWU1heCA8IFN0b3JlLnBvc2l0aW9uWE1heCkge1xuICAgICAgICAgICAgdGhpcy5vcmllbnRhdGlvbiA9ICdsJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmF0aW9Vc2VkID0gUERGUmVuZGVyZXIuUkFUSU9fUFhfMl9DTTtcbiAgICAgICAgaWYgKHRoaXMub3JpZW50YXRpb24gPT0gJ2wnICYmIFN0b3JlLnBvc2l0aW9uWE1heCAvIFBERlJlbmRlcmVyLlJBVElPX1BYXzJfQ00gKiAxMCA+IFBERl9IQVJEX0xJTUlUKSB7XG4gICAgICAgICAgICByYXRpb1VzZWQgPSBTdG9yZS5wb3NpdGlvblhNYXggKiAxMCAvIFBERl9IQVJEX0xJTUlUO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09ICdwJyAmJiBTdG9yZS5wb3NpdGlvbllNYXggLyBQREZSZW5kZXJlci5SQVRJT19QWF8yX0NNICogMTAgPiBQREZfSEFSRF9MSU1JVCkge1xuICAgICAgICAgICAgcmF0aW9Vc2VkID0gU3RvcmUucG9zaXRpb25ZTWF4ICogMTAgLyBQREZfSEFSRF9MSU1JVDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBkZiA9IG5ldyBqc1BERih0aGlzLm9yaWVudGF0aW9uLCAnY20nLCBbU3RvcmUucG9zaXRpb25YTWF4IC8gcmF0aW9Vc2VkLCBTdG9yZS5wb3NpdGlvbllNYXggLyByYXRpb1VzZWRdKTtcbiAgICAgICAgLy8gcmVuZGVyIHRoZSBzdmcgZWxlbWVudFxuICAgICAgICBsZXQgcHJvbWlzZSA9IHN2ZzJwZGYodGhpcy5zdmdFbGVtZW50LCB0aGlzLnBkZiwge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICB3aWR0aDogU3RvcmUucG9zaXRpb25YTWF4IC8gcmF0aW9Vc2VkLFxuICAgICAgICAgICAgaGVpZ2h0OiBTdG9yZS5wb3NpdGlvbllNYXggLyByYXRpb1VzZWRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVzb2x2ZVN2ZzJQZGYocHJvbWlzZSk7XG4gICAgfVxuICAgIHN0YXRpYyBleHBlY3RlZFNpemUoKSB7XG4gICAgICAgIHJldHVybiB7IHg6IFN0b3JlLnBvc2l0aW9uWE1heCAvIFBERlJlbmRlcmVyLlJBVElPX1BYXzJfQ00sIHk6IFN0b3JlLnBvc2l0aW9uWU1heCAvIFBERlJlbmRlcmVyLlJBVElPX1BYXzJfQ00gfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBoaWRlLCBfSEVfUFJPR1JFU1NCQVIsIF9IRV9QUk9HUkVTU0JBUl9TVUIsIF9IRV9QUk9HUkVTU0JBUl9UWFQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudHNcIjtcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciB7XG4gICAgY29uc3RydWN0b3IobmJTdGVwcykge1xuICAgICAgICB0aGlzLm5iU3RlcHMgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYlN0ZXBzID0gbmJTdGVwcztcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIGluaXRpYXRlUHJvZ3Jlc3NCYXIobWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgbW92aW5nUHJvZ3Jlc3NCYXIobWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKys7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIGhpZGluZ1Byb2dyZXNzQmFyKCkge1xuICAgICAgICBoaWRlKFtfSEVfUFJPR1JFU1NCQVJdKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBfSEVfUFJPR1JFU1NCQVJfU1VCLnN0eWxlLndpZHRoID0gdGhpcy5jdXJyZW50U3RlcCAqICgxMDAgLyB0aGlzLm5iU3RlcHMpICsgJyUnO1xuICAgICAgICBfSEVfUFJPR1JFU1NCQVJfVFhULmlubmVySFRNTCA9IHRoaXMubWVzc2FnZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBoaWRlLCBwdXJnZSwgc2hvdywgX0hFX1JPT1RfRVhFQywgX0hFX1JPT1RfSU5QVVQsIF9IRV9ST09UX05PUkVTVUxULCBfSEVfUk9PVF9SRVNVTFRTLCBfSEVfUk9PVF9TRUxFQ1RXUkFQUEVSLCBfSEVfU1RBUlRUWVBFIH0gZnJvbSBcIi4vSHRtbEVsZW1lbnRzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsUm9vdCgpIHtcbiAgICBoaWRlKFtfSEVfUk9PVF9TRUxFQ1RXUkFQUEVSXSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc2hvd1Jvb3QoKSB7XG4gICAgc2hvdyhbX0hFX1JPT1RfU0VMRUNUV1JBUFBFUl0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHR5cGluZ1Jvb3QoKSB7XG4gICAgdmFyIHNlYXJjaFR5cGVkID0gX0hFX1JPT1RfSU5QVVQudmFsdWUudHJpbSgpO1xuICAgIGlmIChzZWFyY2hUeXBlZC5sZW5ndGggPCA0KSB7XG4gICAgICAgIGhpZGUoW19IRV9TVEFSVFRZUEUsIF9IRV9ST09UX1JFU1VMVFMsIF9IRV9ST09UX0VYRUMsIF9IRV9ST09UX05PUkVTVUxUXSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGhpZGUoW19IRV9TVEFSVFRZUEVdKTtcbiAgICB9XG4gICAgdmFyIGxpc3RTb3NhID0gW107XG4gICAgbGV0IG1hcFJlc3VsdCA9IG5ldyBNYXAoKTtcbiAgICBsZXQgbWFwUmVzdWx0QnlQcmlvcml0eSA9IG5ldyBNYXAoKTtcbiAgICBsZXQgc2VhcmNoZXMgPSBzZWFyY2hUeXBlZC5yZXBsYWNlKC9bIF0rL2csIFwiIFwiKS5zcGxpdChcIiBcIik7XG4gICAgbGV0IHNlYXJjaGVzUmVnZXggPSBbXTtcbiAgICBzZWFyY2hlcy5mb3JFYWNoKGFTZWFyY2ggPT4ge1xuICAgICAgICBzZWFyY2hlc1JlZ2V4LnB1c2gobmV3IFJlZ0V4cChhU2VhcmNoLCBcImlnXCIpKTtcbiAgICB9KTtcbiAgICBTdG9yZS5tYXBHZWRUZWNoSWRUb0luZGl2aWR1YWwuZm9yRWFjaCgoaW5kaXZpZHVhbCwgc29zYSkgPT4ge1xuICAgICAgICBzZWFyY2hlc1JlZ2V4LmZvckVhY2goKG9uZVNlYXJjaFJlZ2V4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kaXZpZHVhbC5maXJzdG5hbWUuc2VhcmNoKG9uZVNlYXJjaFJlZ2V4KSA+PSAwIHx8IGluZGl2aWR1YWwubGFzdG5hbWUuc2VhcmNoKG9uZVNlYXJjaFJlZ2V4KSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgbGlzdFNvc2EucHVzaChzb3NhKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1hcFJlc3VsdC5oYXMoc29zYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwUmVzdWx0LnNldChzb3NhLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcFJlc3VsdC5zZXQoc29zYSwgbWFwUmVzdWx0LmdldChzb3NhKSArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgLy9BIHNlY29uZCByb3VuZCB0byBpbnZlcnQgbWFwIFxuICAgIGxldCBhcnJPZlNPU0EgPSBbXTtcbiAgICBsZXQgbWF4UHJpbyA9IDA7XG4gICAgbWFwUmVzdWx0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaWYgKCFtYXBSZXN1bHRCeVByaW9yaXR5Lmhhcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGFyck9mU09TQSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXJyT2ZTT1NBID0gbWFwUmVzdWx0QnlQcmlvcml0eS5nZXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGFyck9mU09TQS5wdXNoKGtleSk7XG4gICAgICAgIG1hcFJlc3VsdEJ5UHJpb3JpdHkuc2V0KHZhbHVlLCBhcnJPZlNPU0EpO1xuICAgICAgICBpZiAobWF4UHJpbyA8IHZhbHVlKSB7XG4gICAgICAgICAgICBtYXhQcmlvID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBzaG93Um9vdHMobWFwUmVzdWx0QnlQcmlvcml0eSwgbWF4UHJpbyk7XG59XG4vKipcbiAqICBGaWxsIHRoZSBsaXN0IG9mIFNvc2EgdG8gc2hvdyBpbiB0aGUgc2VsZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dSb290cyhtYXBSZXN1bHRCeVByaW9yaXR5LCBtYXhQcmlvKSB7XG4gICAgaWYgKG1heFByaW8gPT0gMCkge1xuICAgICAgICBoaWRlKFtfSEVfUk9PVF9SRVNVTFRTLCBfSEVfUk9PVF9FWEVDXSk7XG4gICAgICAgIHNob3coW19IRV9ST09UX05PUkVTVUxUXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzaG93KFtfSEVfUk9PVF9SRVNVTFRTLCBfSEVfUk9PVF9FWEVDXSk7XG4gICAgICAgIGhpZGUoW19IRV9ST09UX05PUkVTVUxUXSk7XG4gICAgfVxuICAgIC8vUHVyZ2UgU2VsZWN0XG4gICAgcHVyZ2UoX0hFX1JPT1RfUkVTVUxUUyk7XG4gICAgbGV0IHRleHRub2RlID0gbnVsbDtcbiAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgbGV0IGJEYXRlID0gbnVsbDtcbiAgICBsZXQgZERhdGUgPSBudWxsO1xuICAgIGxldCBpbmRpdmlkdWFsID0gbnVsbDtcbiAgICBsZXQgZW1vajEgPSBcIuKdpO+4j1wiO1xuICAgIGxldCBwcmVmaXggPSBcIlwiO1xuICAgIGZvciAobGV0IGkgPSBtYXhQcmlvOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIHByZWZpeCA9IGVtb2oxLnJlcGVhdChpKTtcbiAgICAgICAgaWYgKG1hcFJlc3VsdEJ5UHJpb3JpdHkuaGFzKGkpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBvbmVTb3NhIG9mIG1hcFJlc3VsdEJ5UHJpb3JpdHkuZ2V0KGkpKSB7XG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbCA9IFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5nZXQob25lU29zYSk7XG4gICAgICAgICAgICAgICAgYkRhdGUgPSBpbmRpdmlkdWFsLmJpcnRoRGF0ZSAhPT0gdW5kZWZpbmVkID8gaW5kaXZpZHVhbC5iaXJ0aERhdGUgOiBcIj9cIjtcbiAgICAgICAgICAgICAgICBkRGF0ZSA9IGluZGl2aWR1YWwuZGVhdGhEYXRlICE9PSB1bmRlZmluZWQgPyBpbmRpdmlkdWFsLmRlYXRoRGF0ZSA6IFwiP1wiO1xuICAgICAgICAgICAgICAgIHRleHRub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7cHJlZml4fSAke2luZGl2aWR1YWwuZmlyc3RuYW1lfSAke2luZGl2aWR1YWwubGFzdG5hbWV9ICgke2JEYXRlfS0ke2REYXRlfSlgKTtcbiAgICAgICAgICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIk9QVElPTlwiKTtcbiAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9uZVNvc2EgKyBcIlwiKTtcbiAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKHRleHRub2RlKTtcbiAgICAgICAgICAgICAgICBfSEVfUk9PVF9SRVNVTFRTLmFwcGVuZENoaWxkKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU1ZHIH0gZnJvbSBcIkBzdmdkb3Rqcy9zdmcuanNcIjtcbmltcG9ydCAnQHN2Z2RvdGpzL3N2Zy5wYW56b29tLmpzJztcbmltcG9ydCB7IEJveCwgQm94ViB9IGZyb20gXCIuL0JveC5jbGFzc1wiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgX0hFX01JTklTVkdXUkFQUEVSIGFzIF9IRV9NSU5JTUFQV1JBUFBFUiwgX0hFX1NWR1dSQVBQRVIgfSBmcm9tIFwiLi9IdG1sRWxlbWVudHNcIjtcbmltcG9ydCB7IEltcGxleGVzVHlwZSB9IGZyb20gXCIuL09wdGlvbnNcIjtcbmltcG9ydCB7IE1pbmltYXBSZW5kZXJlciB9IGZyb20gXCIuL01pbmltYXBSZW5kZXJlZFwiO1xuZXhwb3J0IGNsYXNzIFNWR1JlbmRlcmVyIHtcbiAgICBzdGF0aWMgZHJhd1NWRygpIHtcbiAgICAgICAgLy9QcmVwYXJlIGZpcnN0IHRoZSBtaW5pbWFwXG4gICAgICAgIE1pbmltYXBSZW5kZXJlci5kcmF3TWluaW1hcCgpO1xuICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXIgPSBTVkcoKS5hZGRUbyhfSEVfU1ZHV1JBUFBFUik7XG4gICAgICAgIFNWR1JlbmRlcmVyLnN2Z1ZpZXdCb3goKTtcbiAgICAgICAgU1ZHUmVuZGVyZXIucG9seWxpbmUoWzAsIDAsIDAsIFN0b3JlLnBvc2l0aW9uWU1heCwgU3RvcmUucG9zaXRpb25YTWF4LCBTdG9yZS5wb3NpdGlvbllNYXgsIFN0b3JlLnBvc2l0aW9uWE1heCwgMCwgMCwgMF0pO1xuICAgICAgICBTVkdSZW5kZXJlci5kcmF3TG9vcCgxKTtcbiAgICAgICAgLy9pbml0aWF0ZSBldmVudCBvbiB0aGUgbmV3cyA8c3ZnIHRhZ3M+XG4gICAgICAgIE1pbmltYXBSZW5kZXJlci5wbHVnRXZlbnRzKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy91cGRhdGUgbWluaW1hcCdzIGZvY3VzXG4gICAgICAgICAgICBNaW5pbWFwUmVuZGVyZXIuZHJhd0ZvY3VzKCk7XG4gICAgICAgIH0sIDUwKTtcbiAgICB9XG4gICAgc3RhdGljIGRyYXdMb29wKGdlbmVyYXRpb24pIHtcbiAgICAgICAgaWYgKGdlbmVyYXRpb24gPiBTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc29zYVdyYXBwZXIgPSBudWxsO1xuICAgICAgICBsZXQgYm94ID0gbnVsbDtcbiAgICAgICAgbGV0IHdpZHRoID0gbnVsbDtcbiAgICAgICAgbGV0IGhlaWdodCA9IG51bGw7XG4gICAgICAgIGxldCB5SW5jcmVtZW50ID0gbnVsbDtcbiAgICAgICAgaWYgKGdlbmVyYXRpb24gPiA1KSB7XG4gICAgICAgICAgICB3aWR0aCA9IEJveFYud2lkdGgoKTtcbiAgICAgICAgICAgIGhlaWdodCA9IEJveFYuaGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWR0aCA9IEJveC53aWR0aCgpO1xuICAgICAgICAgICAgaGVpZ2h0ID0gQm94LmhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzb3NhcyA9IFN0b3JlLmdyaWQubWFwR2VuZXJhdGlvblNvc2EuZ2V0KGdlbmVyYXRpb24pO1xuICAgICAgICBsZXQgbGVuID0gc29zYXMubGVuZ3RoO1xuICAgICAgICBsZXQgc29zYSA9IG51bGw7XG4gICAgICAgIGxldCBncmlkRW50cnkgPSBudWxsO1xuICAgICAgICBjb25zdCByZWdleEJlZm9yZSA9IC9eQkVGL2k7XG4gICAgICAgIGNvbnN0IHJlZ2V4QWZ0ZXIgPSAvXkFGVC9pO1xuICAgICAgICAvL1BhdHRlcm4gZm9yIGltcGxleGUgd2l0aCBjb2xvcmF0aW9uXG4gICAgICAgIGxldCBwYXR0ZXJuSW1wbGV4ZSA9IFNWR1JlbmRlcmVyLmNvbnRhaW5lci5wYXR0ZXJuKDkuNSwgOS41LCBmdW5jdGlvbiAoYWRkKSB7XG4gICAgICAgICAgICBhZGQucmVjdCg5LjUsIDkuNSkuZmlsbCgnI2ZmZicpO1xuICAgICAgICAgICAgYWRkLmxpbmUoMCwgMCwgNSwgOS41KS5zdHJva2UoeyBjb2xvcjogJyNkOWYyY2UnLCB3aWR0aDogMSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCB0cGxMaW5lcyA9IFN0b3JlLmdldE9wdGlvbnMoKS50ZW1wbGF0ZS5zcGxpdCgvW1xcclxcbl0rLyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIHNvc2EgPSBzb3Nhc1tpXTtcbiAgICAgICAgICAgIGlmICghU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuaGFzKHNvc2EpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkgZG9lc24ndCBoYXZlIHNvc2EgJW9cIiwgc29zYSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncmlkRW50cnkgPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoc29zYSk7XG4gICAgICAgICAgICB5SW5jcmVtZW50ID0gMTU7XG4gICAgICAgICAgICBzb3NhV3JhcHBlciA9IGdyaWRFbnRyeS5zb3NhV3JhcHBlcjtcbiAgICAgICAgICAgIGJveCA9IGdyaWRFbnRyeS5ib3g7XG4gICAgICAgICAgICBsZXQgY2xlYW5EYXRlID0gZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGUucmVwbGFjZShyZWdleEJlZm9yZSwgJzwnKS5yZXBsYWNlKHJlZ2V4QWZ0ZXIsICc+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBjbGVhblBsYWNlID0gZnVuY3Rpb24gKHBsYWNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGxhY2Uuc3BsaXQoJywnKVswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCBjbGVhblBsYWNlQ29kZSA9IGZ1bmN0aW9uIChwbGFjZSkge1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsYWNlLnNwbGl0KCcsJylbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgY2xlYW5PY2N1cGF0aW9uID0gZnVuY3Rpb24gKG9jY3VwYXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAob2NjdXBhdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9jY3VwYXRpb247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGxldCByZWMgPSBTVkdSZW5kZXJlci5jb250YWluZXIucmVjdCh3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAgICAgICAgIC5maWxsKFwiI0VFRVwiKVxuICAgICAgICAgICAgICAgIC5tb3ZlKGJveC5nZXRYKCksIGJveC5nZXRZKCkpXG4gICAgICAgICAgICAgICAgLnN0cm9rZSh7IHdpZHRoOiAxLCBjb2xvcjogJyNjY2MnIH0pXG4gICAgICAgICAgICAgICAgLnJhZGl1cygxMCk7XG4gICAgICAgICAgICAvL0Fsc28gYWRkIHRvIG1pbmltYXAgKHNpbXBsaWZpZWQpXG4gICAgICAgICAgICBNaW5pbWFwUmVuZGVyZXIubWluaW1hcC5yZWN0KHdpZHRoLCBoZWlnaHQpXG4gICAgICAgICAgICAgICAgLmZpbGwoXCIjRUVFXCIpXG4gICAgICAgICAgICAgICAgLm1vdmUoYm94LmdldFgoKSwgYm94LmdldFkoKSlcbiAgICAgICAgICAgICAgICAuc3Ryb2tlKHsgd2lkdGg6IDEsIGNvbG9yOiAnIzU1NScgfSk7XG4gICAgICAgICAgICBpZiAoc29zYVdyYXBwZXIuaXNJbXBsZXhlICYmIChTdG9yZS5nZXRPcHRpb25zKCkuaW1wbGV4ZXMgPT0gSW1wbGV4ZXNUeXBlLmNvbG9yIHx8IFN0b3JlLmdldE9wdGlvbnMoKS5pbXBsZXhlcyA9PSBJbXBsZXhlc1R5cGUuY29sb3JIaWRlKSkge1xuICAgICAgICAgICAgICAgIHJlYy5maWxsKHBhdHRlcm5JbXBsZXhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vRm9yIGRlYnVnIG9ubHlcbiAgICAgICAgICAgIC8vbmFtZSA9ICcjJysgZ3JpZEVudHJ5LnNvc2FXcmFwcGVyLnNvc2EgKyBcIiBcIiArIG5hbWVcbiAgICAgICAgICAgIC8vRm9yIGRlYnVnIG9ubHlcbiAgICAgICAgICAgIGxldCBmaXJzdCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgc3RyID0gJyc7XG4gICAgICAgICAgICB0cGxMaW5lcy5mb3JFYWNoKHRwbExpbmUgPT4ge1xuICAgICAgICAgICAgICAgIHN0ciA9IHRwbExpbmUucmVwbGFjZSgnX1NPU0FfJywgc29zYSArICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnX0ZJUlNUTkFNRV8nLCBncmlkRW50cnkuZmlyc3RuYW1lKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnX0xBU1ROQU1FXycsIGdyaWRFbnRyeS5sYXN0bmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ19CSVJUSF9EQVRFXycsIGNsZWFuRGF0ZShncmlkRW50cnkuYmlydGhEYXRlKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ19CSVJUSF9QTEFDRV8nLCBjbGVhblBsYWNlKGdyaWRFbnRyeS5iaXJ0aFBsYWNlKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ19CSVJUSF9QTEFDRVpJUF8nLCBjbGVhblBsYWNlQ29kZShncmlkRW50cnkuYmlydGhQbGFjZSkpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdfREVBVEhfREFURV8nLCBjbGVhbkRhdGUoZ3JpZEVudHJ5LmRlYXRoRGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdfREVBVEhfUExBQ0VfJywgY2xlYW5QbGFjZShncmlkRW50cnkuZGVhdGhQbGFjZSkpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdfREVBVEhfUExBQ0VaSVBfJywgY2xlYW5QbGFjZUNvZGUoZ3JpZEVudHJ5LmRlYXRoUGxhY2UpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnX01BUlJJQUdFX0RBVEVfJywgY2xlYW5EYXRlKGdyaWRFbnRyeS5tYXJpYWdlRGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdfTUFSUklBR0VfUExBQ0VfJywgY2xlYW5QbGFjZShncmlkRW50cnkubWFyaWFnZVBsYWNlKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ19NQVJSSUFHRV9QTEFDRVpJUF8nLCBjbGVhblBsYWNlQ29kZShncmlkRW50cnkubWFyaWFnZVBsYWNlKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ19PQ0NVUEFUSU9OXycsIGNsZWFuT2NjdXBhdGlvbihncmlkRW50cnkub2NjdXBhdGlvbikpXG4gICAgICAgICAgICAgICAgICAgIC50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeUluY3JlbWVudCArPSBTVkdSZW5kZXJlci5oMShzdHIsIGJveCwgeUluY3JlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgeUluY3JlbWVudCArPSBTVkdSZW5kZXJlci5oMihzdHIsIGJveCwgeUluY3JlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vU2kgcMOocmUgZXhpc3RlIDogbGlhaXNvblxuICAgICAgICAgICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyhzb3NhV3JhcHBlci5zb3NhRmF0aGVyKSkge1xuICAgICAgICAgICAgICAgIGxldCBmYXRoZXIgPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoc29zYVdyYXBwZXIuc29zYUZhdGhlcikuYm94O1xuICAgICAgICAgICAgICAgIGxldCBtaWRkbGVZID0gKGZhdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueSArIGJveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueSkgLyAyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWxpbmUoW2JveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueCwgYm94LmdldFRvcEp1bmN0aW9uUG9pbnQoKS55LFxuICAgICAgICAgICAgICAgICAgICBib3guZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLngsIG1pZGRsZVksXG4gICAgICAgICAgICAgICAgICAgIGZhdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueCwgbWlkZGxlWSxcbiAgICAgICAgICAgICAgICAgICAgZmF0aGVyLmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS54LCBmYXRoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLnldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vU2kgbcOocmUgZXhpc3RlIDogbGlhaXNvblxuICAgICAgICAgICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyhzb3NhV3JhcHBlci5zb3NhTW90aGVyKSkge1xuICAgICAgICAgICAgICAgIGxldCBtb3RoZXIgPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoc29zYVdyYXBwZXIuc29zYU1vdGhlcikuYm94O1xuICAgICAgICAgICAgICAgIGxldCBtaWRkbGVZID0gKG1vdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueSArIGJveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueSkgLyAyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWxpbmUoW2JveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueCwgYm94LmdldFRvcEp1bmN0aW9uUG9pbnQoKS55LFxuICAgICAgICAgICAgICAgICAgICBib3guZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLngsIG1pZGRsZVksXG4gICAgICAgICAgICAgICAgICAgIG1vdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueCwgbWlkZGxlWSxcbiAgICAgICAgICAgICAgICAgICAgbW90aGVyLmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS54LCBtb3RoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLnldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZW5lcmF0aW9uKys7XG4gICAgICAgIC8vQWxsb3cgcmVmcmVzaGluZyBJSE1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYXdMb29wKGdlbmVyYXRpb24pO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG4gICAgc3RhdGljIGgxKHN0ciwgYm94LCB5SW5jcmVtZW50KSB7XG4gICAgICAgIHJldHVybiBTVkdSZW5kZXJlci5oMChzdHIsIFNWR1JlbmRlcmVyLmNhcmFjSDEsIGJveCwgeUluY3JlbWVudCk7XG4gICAgfVxuICAgIHN0YXRpYyBoMihzdHIsIGJveCwgeUluY3JlbWVudCkge1xuICAgICAgICByZXR1cm4gU1ZHUmVuZGVyZXIuaDAoc3RyLCBTVkdSZW5kZXJlci5jYXJhY0gyLCBib3gsIHlJbmNyZW1lbnQpO1xuICAgIH1cbiAgICBzdGF0aWMgaDAoc3RyLCBjYXJhYywgYm94LCB5SW5jcmVtZW50KSB7XG4gICAgICAgIGlmIChzdHIudHJpbSgpID09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXIucGxhaW4oc3RyLnN1YnN0cmluZygwLCBjYXJhY1snY2FyTWF4J10pKS5mb250KCdzaXplJywgY2FyYWNbJ2ZvbnRTaXplJ10pLm1vdmUoYm94LmdldFgoKSArIDUsIGJveC5nZXRZKCkgKyB5SW5jcmVtZW50IC0gMTApO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA+IGNhcmFjWydjYXJNYXgnXSkge1xuICAgICAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyLnBsYWluKHN0ci5zdWJzdHJpbmcoY2FyYWNbJ2Nhck1heCddLCAyICogY2FyYWNbJ2Nhck1heCddKSkuZm9udCgnc2l6ZScsIGNhcmFjWydmb250U2l6ZSddKS5tb3ZlKGJveC5nZXRYKCkgKyA1LCBib3guZ2V0WSgpICsgeUluY3JlbWVudCAtIDEwICsgY2FyYWNbJ2luY3JlbSddKTtcbiAgICAgICAgICAgIHJldHVybiAyICogY2FyYWNbJ2luY3JlbSddO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIDEgKiBjYXJhY1snaW5jcmVtJ107XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHN2Z1ZpZXdCb3goKSB7XG4gICAgICAgIC8vIFggcG9zaXRpb24gb2YgdGhlIFNPU0EgIzFcbiAgICAgICAgbGV0IHZpZXdib3hYID0gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KDEpLmJveC5nZXRYKCkgLSAoKHdpbmRvdy5pbm5lcldpZHRoIC0gMTApIC8gMikgKyBCb3gud2lkdGgoKSAvIDI7XG4gICAgICAgIGxldCB2aWV3Ym94WSA9IFN0b3JlLnBvc2l0aW9uWU1heCAtIHdpbmRvdy5pbm5lckhlaWdodCArIDEwMDtcbiAgICAgICAgaWYgKFN0b3JlLnBvc2l0aW9uWU1heCA8IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgdmlld2JveFkgPSAoU3RvcmUucG9zaXRpb25ZTWF4IC0gd2luZG93LmlubmVySGVpZ2h0KSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyXG4gICAgICAgICAgICAudmlld2JveCh2aWV3Ym94WCwgdmlld2JveFksIHdpbmRvdy5pbm5lcldpZHRoIC0gMTAsIHdpbmRvdy5pbm5lckhlaWdodCAtIDEwKVxuICAgICAgICAgICAgLnNpemUoJzEwMCUnLCAnMTAwJScpXG4gICAgICAgICAgICAucGFuWm9vbSh7IHpvb21NaW46IDAuMDIsIHpvb21NYXg6IDIwLCB6b29tRmFjdG9yOiAwLjE1IH0pXG4gICAgICAgICAgICAuem9vbSgxKTtcbiAgICB9XG4gICAgc3RhdGljIHBvbHlsaW5lKGNvb3JkKSB7XG4gICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lci5wb2x5bGluZShjb29yZClcbiAgICAgICAgICAgIC5maWxsKCdub25lJylcbiAgICAgICAgICAgIC5zdHJva2UoeyB3aWR0aDogMSwgY29sb3I6ICcjMDAwJyB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNoYW5nZUZvY3VzKGV2ZW50KSB7XG4gICAgICAgIGxldCBtaW5pbWFwVGFnID0gX0hFX01JTklNQVBXUkFQUEVSLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpWzBdO1xuICAgICAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFggLSBtaW5pbWFwVGFnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgIGxldCB5ID0gZXZlbnQuY2xpZW50WSAtIG1pbmltYXBUYWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgICAgICBsZXQgdyA9IF9IRV9NSU5JTUFQV1JBUFBFUi5jbGllbnRXaWR0aDtcbiAgICAgICAgbGV0IGggPSBfSEVfTUlOSU1BUFdSQVBQRVIuY2xpZW50SGVpZ2h0O1xuICAgICAgICBsZXQgdmlld0JveCA9IFNWR1JlbmRlcmVyLmNvbnRhaW5lci52aWV3Ym94KCk7XG4gICAgICAgIGxldCByeCA9IHggKiBTdG9yZS5wb3NpdGlvblhNYXggLyB3IC0gdmlld0JveC53IC8gMjtcbiAgICAgICAgbGV0IHJ5ID0geSAqIFN0b3JlLnBvc2l0aW9uWU1heCAvIGggLSB2aWV3Qm94LmggLyAyO1xuICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXIudmlld2JveChyeCwgcnksIHZpZXdCb3gudywgdmlld0JveC5oKTtcbiAgICAgICAgTWluaW1hcFJlbmRlcmVyLmRyYXdGb2N1cygpO1xuICAgIH1cbn1cblNWR1JlbmRlcmVyLmNvbnRhaW5lciA9IG51bGw7XG5TVkdSZW5kZXJlci5jYXJhY0gxID0geyBjYXJNYXg6IDI2LCBmb250U2l6ZTogJzEzJywgaW5jcmVtOiAxNSB9O1xuU1ZHUmVuZGVyZXIuY2FyYWNIMiA9IHsgY2FyTWF4OiAzNCwgZm9udFNpemU6ICcxMCcsIGluY3JlbTogMTAgfTtcbiIsImltcG9ydCB7IE9wdGlvblJlcG9zaXRvcnkgfSBmcm9tIFwiLi9PcHRpb25zXCI7XG5pbXBvcnQgeyBWaXJ0dWFsR3JpZCB9IGZyb20gXCIuL3N0cnVjdC5jbGFzc1wiO1xuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgICBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsID0gbmV3IE1hcCgpO1xuICAgICAgICBTdG9yZS5tYXBDb2RlRmFtaWx5ID0gbmV3IE1hcCgpO1xuICAgICAgICBTdG9yZS5maXJzdEdlZFRlY2hJZFBhcnNlZCA9IG51bGw7IC8vIG5lZWQgdG8gYmUgbnVsbFxuICAgICAgICBTdG9yZS5maXJzdEdlZFRlY2hJZEluR3JpZCA9IG51bGw7IC8vIG5lZWQgdG8gYmUgbnVsbFxuICAgICAgICBTdG9yZS5yZXNldEZvclJlZHJhdygpO1xuICAgIH1cbiAgICBzdGF0aWMgcmVzZXRGb3JSZWRyYXcoKSB7XG4gICAgICAgIFN0b3JlLnBvc2l0aW9uWE1heCA9IDA7XG4gICAgICAgIFN0b3JlLnBvc2l0aW9uWU1heCA9IDA7XG4gICAgICAgIFN0b3JlLmdyaWQgPSBuZXcgVmlydHVhbEdyaWQoKTtcbiAgICB9XG4gICAgc3RhdGljIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBTdG9yZS5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG4gICAgc3RhdGljIGdldE9wdGlvbnMoKSB7XG4gICAgICAgIGlmIChTdG9yZS5vcHRpb25zID09IG51bGwpIHtcbiAgICAgICAgICAgIFN0b3JlLm9wdGlvbnMgPSBPcHRpb25SZXBvc2l0b3J5LmdldE9wdGlvbnMoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RvcmUub3B0aW9ucztcbiAgICB9XG59XG5TdG9yZS5tYXBHZWRUZWNoSWRUb0luZGl2aWR1YWwgPSBudWxsOyAvLyBtYXAgU29zYSAvIEdlZGNvbSBJbmRpdmlkdXNcblN0b3JlLm1hcENvZGVGYW1pbHkgPSBudWxsOyAvLyBtYXAgU29zYSAvIEdlZGNvbSBmYW1pbGxpZXNcblN0b3JlLmZpcnN0R2VkVGVjaElkUGFyc2VkID0gbnVsbDsgLy8gRmlyc3QgR2V0VGVjaElkIHByb2Nlc3NlZCBieSB0aGUgcGFyc2VyXG5TdG9yZS5maXJzdEdlZFRlY2hJZEluR3JpZCA9IG51bGw7IC8vIEZpcnN0IEdldFRlY2hJZCBwcm9jZXNzZWQgaW4gdGhlIEdyaWQgdW5kZXIgdGhlIFNPU0EgY29kZSAjMVxuU3RvcmUucG9zaXRpb25YTWF4ID0gMDtcblN0b3JlLnBvc2l0aW9uWU1heCA9IDA7XG5TdG9yZS5ncmlkID0gbnVsbDtcblN0b3JlLm9wdGlvbnMgPSBudWxsO1xuIiwiaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XG5leHBvcnQgY2xhc3MgVGFza09yY2hlc3RyYXRvciB7XG4gICAgY29uc3RydWN0b3IocHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBwcm9ncmVzc0JhcjtcbiAgICB9XG4gICAgYWRkKGNvbW1hbmRlLCBhcmdzLCBtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaChbY29tbWFuZGUsIGFyZ3MsIG1lc3NhZ2VdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgaWYgKHRoaXMudGFza3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFza0NvbW1hbmRlID0gdGhpcy50YXNrc1swXVswXTsgLy8gQ29tbWFuZGVcbiAgICAgICAgbGV0IHRhc2tBcmdzID0gdGhpcy50YXNrc1swXVsxXTsgLy8gQXJnc1xuICAgICAgICBsZXQgdGFza01lc3NhZ2UgPSB0aGlzLnRhc2tzWzBdWzJdOyAvLyBDdXN0b20gTWVzc2FnZVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm1vdmluZ1Byb2dyZXNzQmFyKHRhc2tNZXNzYWdlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBMb2dnZXIubG9nKFwiU3RhcnQgXCIgKyB0YXNrTWVzc2FnZSk7XG4gICAgICAgICAgICB0YXNrQ29tbWFuZGUoLi4udGFza0FyZ3MpO1xuICAgICAgICAgICAgTG9nZ2VyLmxvZyhcIkVuZCBcIiArIHRhc2tNZXNzYWdlKTtcbiAgICAgICAgICAgIC8vUmVtb3ZlIGZpcnN0IHRhc2tcbiAgICAgICAgICAgIHRoaXMudGFza3Muc2hpZnQoKTtcbiAgICAgICAgICAgIC8vUmVydW4gbXlzZWxmXG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vYXNzZXRzL2Nzcy9kZW1vLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltZ3MvZG93bmxvYWQucG5nJztcbmltcG9ydCAnLi9hc3NldHMvZ2VkY29tL0hBUElPVF9FbWlsZV9zYW1wbGUuZ2VkJztcbmltcG9ydCB7IFNWR1JlbmRlcmVyIH0gZnJvbSAnLi9TVkdSZW5kZXJlcic7XG5pbXBvcnQgeyBHZWRjb21QYXJzZXIgfSBmcm9tICcuL0dlZGNvbVBhcnNlcic7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4vUHJvZ3Jlc3NCYXIuY2xhc3MnO1xuaW1wb3J0IHsgU29zYVdyYXBwZXIgfSBmcm9tICcuL3N0cnVjdC5jbGFzcyc7XG5pbXBvcnQgeyBUYXNrT3JjaGVzdHJhdG9yIH0gZnJvbSAnLi9UYXNrT3JjaGVzdHJhdG9yLmNsYXNzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9TdG9yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL0xvZ2dlcic7XG5pbXBvcnQgeyBCb3gsIEJveFYgfSBmcm9tICcuL0JveC5jbGFzcyc7XG5pbXBvcnQgeyBwb3B1bGF0ZUdyaWQsIHNldHVwQm94Rm9yR3JpZEVudHJ5LCBjb21wcmVzc0NvbnRhaW5lciB9IGZyb20gJy4vQ29udGFpbmVyRmFjdG9yeSc7XG5pbXBvcnQgeyB0YWtlc2hvdCB9IGZyb20gJy4vSW1nUmVuZGVyZXInO1xuaW1wb3J0IHsgaGlkZSwgcHVyZ2UsIHNob3csIF9IRV9GSUxFLCBfSEVfRk9STSwgX0hFX0hFQURFUiwgX0hFX01FU1NBR0UsIF9IRV9NSU5JU1ZHV1JBUFBFUiwgX0hFX09QVElPTlNfQUNUSU9OX0JVVFRPTiwgX0hFX09QVElPTlNfU1VCTUlULCBfSEVfT1BUSU9OU19URU1QTEFURV9SRVNFVCwgX0hFX09QVElPTlNfV0FMTCwgX0hFX1BERldSQVBQRVIsIF9IRV9QREZfQUNUSU9OX0JVVFRPTiwgX0hFX1BERl9NVUxUSVBBR0VfQUNUSU9OX0JVVFRPTiwgX0hFX1BOR19BQ1RJT05fQlVUVE9OLCBfSEVfUFJPR1JFU1NCQVIsIF9IRV9ST09UX0NBTkNFTCwgX0hFX1JPT1RfRVhFQywgX0hFX1JPT1RfSU5QVVQsIF9IRV9ST09UX1JFU1VMVFMsIF9IRV9ST09UX1NXSVRDSCwgX0hFX1NWR1dSQVBQRVIgfSBmcm9tICcuL0h0bWxFbGVtZW50cyc7XG5pbXBvcnQgeyBjYW5jZWxSb290LCBzaG93Um9vdCwgdHlwaW5nUm9vdCB9IGZyb20gJy4vUm9vdFN3aXRjaGVyJztcbmltcG9ydCB7IE11bHRpUERGUmVuZGVyZXIgfSBmcm9tICcuL011bHRpUERGUmVuZGVyZXInO1xuaW1wb3J0IHsgUERGUmVuZGVyZXIgfSBmcm9tICcuL1BERlJlbmRlcmVyJztcbmltcG9ydCB7IE9wdGlvbkJ1c2luZXNzIH0gZnJvbSAnLi9PcHRpb25zJztcbmNvbnN0IFNPU0FfT05FID0gbmV3IFNvc2FXcmFwcGVyKDEpO1xubGV0IHByb2dyZXNzQmFyID0gbnVsbDtcbmxldCB0YXNrT3JjaGVzdHJhdG9yID0gbnVsbDtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX0hFX0ZJTEUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcnVuKF9IRV9GSUxFLmZpbGVzWzBdKTtcbiAgICB9KTtcbiAgICBsZXQgaXNBZHZhbmNlZFVwbG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByZXR1cm4gKCgnZHJhZ2dhYmxlJyBpbiBkaXYpIHx8ICgnb25kcmFnc3RhcnQnIGluIGRpdiAmJiAnb25kcm9wJyBpbiBkaXYpKSAmJiAnRm9ybURhdGEnIGluIHdpbmRvdyAmJiAnRmlsZVJlYWRlcicgaW4gd2luZG93O1xuICAgIH0oKTtcbiAgICBpZiAoaXNBZHZhbmNlZFVwbG9hZCkge1xuICAgICAgICBfSEVfRk9STS5jbGFzc0xpc3QuYWRkKCdoYXMtYWR2YW5jZWQtdXBsb2FkJyk7XG4gICAgICAgIGxldCBmdW5jRHJhZyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZnVuY0RyYWdPdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX0hFX0ZPUk0uY2xhc3NMaXN0LmFkZCgnaXMtZHJhZ292ZXInKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGZ1bmNEcmFnTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfSEVfRk9STS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1kcmFnb3ZlcicpO1xuICAgICAgICB9O1xuICAgICAgICBfSEVfRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnJywgZnVuY0RyYWcpO1xuICAgICAgICBfSEVfRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBmdW5jRHJhZyk7XG4gICAgICAgIF9IRV9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBmdW5jRHJhZyk7XG4gICAgICAgIF9IRV9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZnVuY0RyYWcpO1xuICAgICAgICBfSEVfRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBmdW5jRHJhZyk7XG4gICAgICAgIF9IRV9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGZ1bmNEcmFnKTtcbiAgICAgICAgX0hFX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGZ1bmNEcmFnKTtcbiAgICAgICAgX0hFX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBmdW5jRHJhZ092ZXIpO1xuICAgICAgICBfSEVfRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBmdW5jRHJhZ092ZXIpO1xuICAgICAgICBfSEVfRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBmdW5jRHJhZ0xlYXZlKTtcbiAgICAgICAgX0hFX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGZ1bmNEcmFnTGVhdmUpO1xuICAgICAgICBfSEVfRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZnVuY0RyYWdMZWF2ZSk7XG4gICAgICAgIF9IRV9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IGRyb3BwZWRGaWxlcyA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkcm9wcGVkRmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZHJvcHBlZEZpbGVzW2ldWyduYW1lJ10uZW5kc1dpdGgoJy5nZWRjb20nKSB8fCBkcm9wcGVkRmlsZXNbaV1bJ25hbWUnXS5lbmRzV2l0aCgnLmdlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bihkcm9wcGVkRmlsZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfSEVfUE5HX0FDVElPTl9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWtlc2hvdCk7XG4gICAgX0hFX1BERl9BQ1RJT05fQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVQZGYpO1xuICAgIF9IRV9QREZfTVVMVElQQUdFX0FDVElPTl9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZU11bHRpcGFnZVBkZik7XG4gICAgX0hFX1NWR1dSQVBQRVIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRkZVBkZm9iamVjdFdyYXBwZXIpO1xuICAgIF9IRV9ST09UX0lOUFVULmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdHlwaW5nUm9vdCk7XG4gICAgX0hFX1JPT1RfRVhFQy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVJvb3RBbmRSZWRyYXcpO1xuICAgIF9IRV9ST09UX0NBTkNFTC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbmNlbFJvb3QpO1xuICAgIF9IRV9ST09UX1NXSVRDSC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dSb290KTtcbiAgICBfSEVfT1BUSU9OU19BQ1RJT05fQlVUVE9OLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgT3B0aW9uQnVzaW5lc3MucmVmcmVzaE9wdGlvbnNJbnRvVUkpO1xuICAgIF9IRV9PUFRJT05TX1NVQk1JVC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIE9wdGlvbkJ1c2luZXNzLnNhdmVPcHRpb25zZnJvbVVJKTtcbiAgICBfSEVfT1BUSU9OU19XQUxMLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgT3B0aW9uQnVzaW5lc3MuaGlkZU9wdGlvbnMpO1xuICAgIF9IRV9PUFRJT05TX1RFTVBMQVRFX1JFU0VULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgT3B0aW9uQnVzaW5lc3MucmVmcmVzaFRlbXBsYXRlSW50b1VJKTtcbn1cbmZ1bmN0aW9uIHJ1bihmaWxlKSB7XG4gICAgLy9Jbml0IHRoZSBpbnRlcm5hbCBTdG9yZVxuICAgIFN0b3JlLmluaXQoKTtcbiAgICAvL0luaXQgdGhlIExvZ2dlciBzeXN0ZW1cbiAgICBMb2dnZXIuaW5pdCgpO1xuICAgIHNob3coW19IRV9QUk9HUkVTU0JBUl0pO1xuICAgIHByb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKDgpO1xuICAgIHByb2dyZXNzQmFyLm1vdmluZ1Byb2dyZXNzQmFyKFwiUmVhZGluZyBGaWxlXCIpO1xuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIC8vIERlc2NyaWJlIGZ1bmN0aW9uIG9mIHJlYWRpbmdcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRhc2tPcmNoZXN0cmF0b3IgPSBuZXcgVGFza09yY2hlc3RyYXRvcihwcm9ncmVzc0Jhcik7XG4gICAgICAgIHRhc2tPcmNoZXN0cmF0b3IuYWRkKEdlZGNvbVBhcnNlci5wYXJzZSwgW2V2ZW50LnRhcmdldC5yZXN1bHRdLCBcIlBhcnNpbmcgR2VkY29tIERhdGFcIilcbiAgICAgICAgICAgIC5hZGQoZXhwbG9pdCwgW1NPU0FfT05FXSwgXCJFeHBsb2l0aW5nIEdlZGNvbSBEYXRhXCIpXG4gICAgICAgICAgICAuYWRkKGNvbXByZXNzQ29udGFpbmVyLCBbU09TQV9PTkVdLCBcIkNvbXByZXNzaW5nIHlvdXIgQW5jZXN0b3JzXCIpXG4gICAgICAgICAgICAuYWRkKGdldE1heFNpemVPZkRyYXdpbmcsIFtdLCBcIkNhbGN1bGF0ZSBzaXplIG9mIGdyYXBoXCIpXG4gICAgICAgICAgICAuYWRkKGRyYXcsIFtdLCBcIkRyYXdpbmcgeW91ciBncmFwaFwiKVxuICAgICAgICAgICAgLnJ1bigpO1xuICAgIH07XG4gICAgLy9FeGVjdXRlIHJlYWRpbmdcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlLCAndXRmLTgnKTtcbn1cbmZ1bmN0aW9uIGV4cGxvaXQoc29zYVdyYXBwZXIsIHBvc2l0aW9uKSB7XG4gICAgaGlkZShbX0hFX0ZPUk1dKTtcbiAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkge1xuICAgICAgICBwb3NpdGlvbiA9IFN0b3JlLmZpcnN0R2VkVGVjaElkUGFyc2VkO1xuICAgIH1cbiAgICBwb3B1bGF0ZUdyaWQoc29zYVdyYXBwZXIsIHBvc2l0aW9uKTtcbiAgICBzZXR1cEJveEZvckdyaWRFbnRyeSgpO1xufVxuZnVuY3Rpb24gZ2V0TWF4U2l6ZU9mRHJhd2luZygpIHtcbiAgICBsZXQgdG1wX2JveCA9IG51bGw7XG4gICAgbGV0IHdpZHRoQm94ID0gbnVsbDtcbiAgICBsZXQgaGVpZ2h0Qm94ID0gbnVsbDtcbiAgICBsZXQgbWF4WE9mR2VuID0gbnVsbDtcbiAgICBsZXQgbWF4WU9mR2VuID0gbnVsbDtcbiAgICBsZXQgdG1wX3Nvc2EgPSBudWxsO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZDsgaSsrKSB7XG4gICAgICAgIHRtcF9zb3NhID0gU3RvcmUuZ3JpZC5tYXBSaWdodFNvc2FCeUdlbmVyYXRpb24uZ2V0KGkpLnNvc2E7XG4gICAgICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXModG1wX3Nvc2EpKSB7XG4gICAgICAgICAgICB0bXBfYm94ID0gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHRtcF9zb3NhKS5ib3g7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXCJTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeSBkb2Vzbid0IGhhdmUgc29zYSAlbyBpbiBmdW5jdGlvbiBnZXRNYXhTaXplT2ZEcmF3aW5nKClcIiwgdG1wX3Nvc2EpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbWF4WE9mR2VuID0gdG1wX2JveC5nZXRYKCk7XG4gICAgICAgIGlmIChtYXhYT2ZHZW4gPiBTdG9yZS5wb3NpdGlvblhNYXgpIHtcbiAgICAgICAgICAgIFN0b3JlLnBvc2l0aW9uWE1heCA9IG1heFhPZkdlbjtcbiAgICAgICAgICAgIGlmIChpID4gNSkge1xuICAgICAgICAgICAgICAgIHdpZHRoQm94ID0gQm94Vi53aWR0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgd2lkdGhCb3ggPSBCb3gud2lkdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXhZT2ZHZW4gPSB0bXBfYm94LmdldFkoKTtcbiAgICAgICAgaWYgKG1heFlPZkdlbiA+IFN0b3JlLnBvc2l0aW9uWU1heCkge1xuICAgICAgICAgICAgU3RvcmUucG9zaXRpb25ZTWF4ID0gbWF4WU9mR2VuO1xuICAgICAgICAgICAgaWYgKGkgPiA1KSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0Qm94ID0gQm94Vi5oZWlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGhlaWdodEJveCA9IEJveC5oZWlnaHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBTdG9yZS5wb3NpdGlvblhNYXggKz0gd2lkdGhCb3ggKyAyMDtcbiAgICBTdG9yZS5wb3NpdGlvbllNYXggKz0gaGVpZ2h0Qm94ICsgMjA7XG4gICAgLy9Db250cm9sIG9mIHNpemVcbiAgICBzaG93KFtfSEVfTUVTU0FHRV0pO1xuICAgIGxldCBsaW1pdEJ5T3B0aW9uID0gJyc7XG4gICAgaWYgKFN0b3JlLmdldE9wdGlvbnMoKS5tYXhHZW5lcmF0aW9uID09IFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZCkge1xuICAgICAgICBsaW1pdEJ5T3B0aW9uID0gJyBDaGVjayB0aGUgb3B0aW9ucyB0byBjaGFuZ2UgdGhpcyBsaW1pdC4nO1xuICAgIH1cbiAgICBfSEVfTUVTU0FHRS5pbm5lckhUTUwgPSBgTWF4IEdlbmVyYXRpb24gcHJlc2VudGVkIDogJHtTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWR9LiR7bGltaXRCeU9wdGlvbn08YnIvPlxuICAke1N0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LnNpemV9IGluZGl2aWR1YWxzIHByZXNlbnRlZCwgJHtTdG9yZS5ncmlkLmltcGxleGVzLmxlbmd0aH0gb2Ygd2hpY2ggYXJlIDx1PjxzcGFuIHRpdGxlPSdGUiA6IEltcGxleGVzJz5QZWRpZ3JlZSBjb2xsYXBzZTwvc3Bhbj48L3U+Ljxici8+XG4gIEV4cGVjdGVkIHNpemUgb2YgUERGIDogJHtQREZSZW5kZXJlci5leHBlY3RlZFNpemUoKS54fWNtICogJHtQREZSZW5kZXJlci5leHBlY3RlZFNpemUoKS55fWNtLjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cGVydGVkIHBhZ2VzIG9mIEE0IFBERiA6ICR7TXVsdGlQREZSZW5kZXJlci5leHBlY3RlZFBhZ2VDb3VudCgpfSBwYWdlcy48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHBlY3RlZCBzaXplIG9mIFBORyA6ICR7U3RvcmUucG9zaXRpb25YTWF4ICsgMjB9cHggKiAke1N0b3JlLnBvc2l0aW9uWU1heCArIDIwfXB4YDtcbn1cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgc2hvdyhbX0hFX0hFQURFUiwgX0hFX1NWR1dSQVBQRVIsIF9IRV9NSU5JU1ZHV1JBUFBFUl0pO1xuICAgIFNWR1JlbmRlcmVyLmRyYXdTVkcoKTtcbn1cbmZ1bmN0aW9uIGhpZGRlUGRmb2JqZWN0V3JhcHBlcigpIHtcbiAgICBoaWRlKFtfSEVfUERGV1JBUFBFUl0pO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVQZGYoKSB7XG4gICAgbGV0IHJlbmRlcmVyID0gbmV3IFBERlJlbmRlcmVyKCk7XG4gICAgcmVuZGVyZXIuZ2VuZXJhdGVQZGYoKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlTXVsdGlwYWdlUGRmKCkge1xuICAgIGxldCByZW5kZXJlciA9IG5ldyBNdWx0aVBERlJlbmRlcmVyKCk7XG4gICAgcmVuZGVyZXIuZ2VuZXJhdGVQZGYoKTtcbn1cbmZ1bmN0aW9uIGNoYW5nZVJvb3RBbmRSZWRyYXcoKSB7XG4gICAgcmVEcmF3KGZhbHNlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZURyYXcoc2FtZUlkVGVjaCkge1xuICAgIC8vSW5pdCB0aGUgTG9nZ2VyIHN5c3RlbVxuICAgIExvZ2dlci5pbml0KCk7XG4gICAgTG9nZ2VyLmxvZyhcInN0YXJ0aW5nIHB1cmdpbmcgZGF0YVwiKTtcbiAgICAvLyBQdXJnZSBTdG9yZSB2YWx1ZXMgZm9yIGEgbmV3IGRyYXdcbiAgICBTdG9yZS5yZXNldEZvclJlZHJhdygpO1xuICAgIGxldCBrZXk7XG4gICAgaWYgKHNhbWVJZFRlY2gpIHtcbiAgICAgICAgLy9yZXRpZXZlIGN1cnJlbnQgaWRUZWNoXG4gICAgICAgIGtleSA9IFN0b3JlLmZpcnN0R2VkVGVjaElkSW5HcmlkO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAga2V5ID0gcGFyc2VJbnQoX0hFX1JPT1RfUkVTVUxUUy52YWx1ZSk7XG4gICAgICAgIFN0b3JlLmZpcnN0R2VkVGVjaElkSW5HcmlkID0gbnVsbDtcbiAgICB9XG4gICAgbGV0IHNvc2FPbmUgPSBuZXcgU29zYVdyYXBwZXIoMSk7XG4gICAgLy9QdXJnZSBTVkcgJiBtaW5pbWFwXG4gICAgcHVyZ2UoX0hFX1NWR1dSQVBQRVIpO1xuICAgIHB1cmdlKF9IRV9NSU5JU1ZHV1JBUFBFUik7XG4gICAgLy9SZXNldCB2YXJcbiAgICBTdG9yZS5wb3NpdGlvblhNYXggPSAwO1xuICAgIFN0b3JlLnBvc2l0aW9uWU1heCA9IDA7XG4gICAgU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLmZvckVhY2goKGluZGl2aWR1YWwsIHNvc2EpID0+IHtcbiAgICAgICAgaW5kaXZpZHVhbC5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIH0pO1xuICAgIExvZ2dlci5sb2coXCJlbmRpbmcgcHVyZ2luZyBkYXRhXCIpO1xuICAgIHRhc2tPcmNoZXN0cmF0b3IgPSBuZXcgVGFza09yY2hlc3RyYXRvcihwcm9ncmVzc0Jhcik7XG4gICAgdGFza09yY2hlc3RyYXRvci5hZGQoZXhwbG9pdCwgW3Nvc2FPbmUsIGtleV0sIFwiRXhwbG9pdGluZyBHZWRjb20gRGF0YVwiKVxuICAgICAgICAuYWRkKGNvbXByZXNzQ29udGFpbmVyLCBbc29zYU9uZV0sIFwiQ29tcHJlc3NpbmcgeW91ciBBbmNlc3RvcnNcIilcbiAgICAgICAgLmFkZChnZXRNYXhTaXplT2ZEcmF3aW5nLCBbXSwgXCJDYWxjdWxhdGUgc2l6ZSBvZiBncmFwaFwiKVxuICAgICAgICAuYWRkKGRyYXcsIFtdLCBcIkRyYXdpbmcgeW91ciBncmFwaFwiKVxuICAgICAgICAucnVuKCk7XG4gICAgY2FuY2VsUm9vdCgpO1xufVxuaW5pdCgpO1xuIiwiZXhwb3J0IGNsYXNzIFZpcnR1YWxHcmlkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvblByb2Nlc3NlZCA9IG51bGw7IC8vTGlzdCBvZiBzb3NhIGFscmVhZHkgcHJvY2Vzc2VkIHRvIGlkZW50aWZpZSBpbXBsZXhlXG4gICAgICAgIHRoaXMubWF4U29zYVByb2Nlc3NlZCA9IG51bGw7IC8vIG1lbW9yeSBvZiB0aGUgbWF4IFNvc2EgdG8gaGVscCByZS1jYWxjdWxhdGUgbWF4R2VuZXJhdGlvblByb2Nlc3NlZFxuICAgICAgICB0aGlzLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQgPSBudWxsOyAvLyBtZW1vcnkgb2YgdGhlIG1heCBnZW4gb2YgYWxsIHRoZSBzb3NhIHRvIGhlbHAgY2FsY3VsYXRlIHRoZSBoZWlnaCBvZiB0aGUgZ3JpZFxuICAgICAgICB0aGlzLm1hcFJpZ2h0U29zYUJ5R2VuZXJhdGlvbiA9IG51bGw7IC8vTWFwIG9mIGdlbmVyYXRpb24gLyB0aGUgZmFyLXJpZ2h0IFNvc2FXcmFwcGVyIHByb2Nlc3NlZFxuICAgICAgICB0aGlzLm1hcFNvc2FUb0dyaWRFbnRyeSA9IG51bGw7XG4gICAgICAgIHRoaXMubWFwR2VuZXJhdGlvbllQb3NpdGlvbiA9IG51bGw7IC8vbGlzdCBvZiBZIHBvc2l0aW9uIGZvciBlYWNoIHNvc2FcbiAgICAgICAgdGhpcy5tYXBHZW5lcmF0aW9uU29zYSA9IG51bGw7XG4gICAgICAgIHRoaXMubWFwR2VkVGVjaElkSW5HcmlkVG9Tb3NhID0gbnVsbDsgLy8gbWFwIEdldFRlY2hJZCAvIFNvc2EgY3VycmVudGx5IGluIEdyaWRcbiAgICAgICAgdGhpcy5pbXBsZXhlcyA9IG51bGw7IC8vTGlzdCBvZiBzb3NhIEltcGxleGVzXG4gICAgICAgIHRoaXMucG9zaXRpb25Qcm9jZXNzZWQgPSBbXTtcbiAgICAgICAgdGhpcy5tYXhTb3NhUHJvY2Vzc2VkID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXBSaWdodFNvc2FCeUdlbmVyYXRpb24gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubWFwU29zYVRvR3JpZEVudHJ5ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm1hcEdlbmVyYXRpb25ZUG9zaXRpb24gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubWFwR2VuZXJhdGlvblNvc2EgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubWFwR2VkVGVjaElkSW5HcmlkVG9Tb3NhID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmltcGxleGVzID0gW107XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFZpcnR1YWxHcmlkRW50cnkge1xuICAgIGNvbnN0cnVjdG9yKHNvc2FXcmFwcGVyLCBpbmRpdmlkdWFsLCBwcmV2aW91c1Nvc2FXcmFwcGVyKSB7XG4gICAgICAgIHRoaXMuc29zYVdyYXBwZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZpcnN0bmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdG5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLmJpcnRoRGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYmlydGhQbGFjZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVhdGhEYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZWF0aFBsYWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXJpYWdlRGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubWFyaWFnZVBsYWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vY2N1cGF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5ib3ggPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU29zYVdyYXBwZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTb3NhV3JhcHBlciA9IG51bGw7XG4gICAgICAgIHRoaXMuc29zYVdyYXBwZXIgPSBzb3NhV3JhcHBlcjtcbiAgICAgICAgdGhpcy5maXJzdG5hbWUgPSBpbmRpdmlkdWFsLmZpcnN0bmFtZTtcbiAgICAgICAgdGhpcy5sYXN0bmFtZSA9IGluZGl2aWR1YWwubGFzdG5hbWU7XG4gICAgICAgIHRoaXMuYmlydGhEYXRlID0gaW5kaXZpZHVhbC5iaXJ0aERhdGU7XG4gICAgICAgIHRoaXMuYmlydGhQbGFjZSA9IGluZGl2aWR1YWwuYmlydGhQbGFjZTtcbiAgICAgICAgdGhpcy5kZWF0aERhdGUgPSBpbmRpdmlkdWFsLmRlYXRoRGF0ZTtcbiAgICAgICAgdGhpcy5kZWF0aFBsYWNlID0gaW5kaXZpZHVhbC5kZWF0aFBsYWNlO1xuICAgICAgICB0aGlzLm1hcmlhZ2VEYXRlID0gaW5kaXZpZHVhbC5tYXJpYWdlRGF0ZTtcbiAgICAgICAgdGhpcy5tYXJpYWdlUGxhY2UgPSBpbmRpdmlkdWFsLm1hcmlhZ2VQbGFjZTtcbiAgICAgICAgdGhpcy5vY2N1cGF0aW9uID0gaW5kaXZpZHVhbC5vY2N1cGF0aW9uO1xuICAgICAgICB0aGlzLmJveCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTb3NhV3JhcHBlciA9IHByZXZpb3VzU29zYVdyYXBwZXI7XG4gICAgICAgIHRoaXMubmV4dFNvc2FXcmFwcGVyID0gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU29zYVdyYXBwZXIge1xuICAgIGNvbnN0cnVjdG9yKHNvc2EpIHtcbiAgICAgICAgdGhpcy5zb3NhID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3NhRmF0aGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3NhTW90aGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5sZWZ0U29zYSA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHRTb3NhID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0ltcGxleGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zb3NhID0gc29zYTtcbiAgICAgICAgLyoqXG4gICAgICAgICogUmV0dXJuIG7CsCBvZiBnZW5lcmF0aW9uIGJhc2VkIG9uIHNvc2FcbiAgICAgICAgKiB0a3QgdG8gUm9sbGFuZCAoaHR0cHM6Ly93d3cubG9yYW5kLm9yZy9zcGlwLnBocD9hcnRpY2xlMTQ1OSlcbiAgICAgICAgKiovXG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5sb2coc29zYSkgLyBNYXRoLkxOMikgKyAxO1xuICAgICAgICB0aGlzLnNvc2FGYXRoZXIgPSBzb3NhICogMjtcbiAgICAgICAgdGhpcy5zb3NhTW90aGVyID0gc29zYSAqIDIgKyAxO1xuICAgICAgICAvLyBTb3NhIGF2YWlsYWJsZSBvbiB0aGUgbGVmdC9yaWdodCB3aXRoIHRoZSBzYW1lIGdlbmVyYXRpb25cbiAgICAgICAgdGhpcy5sZWZ0U29zYSA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHRTb3NhID0gbnVsbDtcbiAgICAgICAgLy8gQm9vbGVhbiBpcyBJbXBsZXhlXG4gICAgICAgIHRoaXMuaXNJbXBsZXhlID0gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEluZGl2aWR1YWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gbnVsbDsgLy8gVGVjaCBJZCBpbnNpZGUgdGhlIEdlZENvbSBGaWxlLiBub3QgdGhlIFNPU0FcbiAgICAgICAgdGhpcy5maXJzdG5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RuYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5mYW1jID0gbnVsbDsgLy8gVGVjaCBJZCBpbnNpZGUgdGhlIEdlZENvbSBGaWxlLiBub3QgdGhlIFNPU0FcbiAgICAgICAgdGhpcy5zZXggPSBudWxsO1xuICAgICAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIEZhbWlseSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBudWxsOyAvLyBUZWNoIElkIGluc2lkZSB0aGUgR2VkQ29tIEZpbGUuIG5vdCB0aGUgU09TQVxuICAgICAgICB0aGlzLmZhdGhlciA9IG51bGw7IC8vIFRlY2ggSWQgb2YgdGhlIGZhdGhlclxuICAgICAgICB0aGlzLm1vdGhlciA9IG51bGw7IC8vIFRlY2ggSWQgb2YgdGhlIG1vdGhlclxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==