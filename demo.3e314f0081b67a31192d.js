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
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, sans-serif;\n  color: #0f3c4b;\n  background-color: #e5edf1;\n}\n\n\na{\n  transition: color 0.2s ease, border-bottom-color 0.2s ease;\n  border-bottom: dotted 1px;\n  color: inherit;\n  text-decoration: none;\n}\n\n.hidden{\n  display:none !important;\n}\n\n/*****************/\n/* Drop File Box */\n/*****************/\n\n#box{\n  min-height: 100%;\n  font-size: 1.5rem;\n  background-color: #c8dadf;\n  position: relative;\n  text-align:center;\n}\n\n.box__file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.box__file + label {\n  max-width: 80%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n}\n.box__button {\n  font-weight: 700;\n  color: #e5edf1;\n  background-color: #39bfd3;\n  display: none;\n  padding: 8px 16px;\n  margin: 40px auto 0;\n}\n.box__input{\n  padding: 25vh;\n  /*padding: 30% 20px 0 20px;*/\n}\n.box__dragndrop,\n.box__uploading,\n.box__success,\n.box__error {\n  display: none;\n}\n\n#box.has-advanced-upload {\n  outline: 2px dashed #92b0b3;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n}\n\n#box.has-advanced-upload .box__dragndrop {\n  display: inline;\n}\n\n#box.is-dragover {\n  background-color: grey;\n}\n\n\n/*****************/\n/* ProgressBar */\n/*****************/\n\n#progressBar{\n  width: 50%;\n  max-width: 300px;\n  height: 30px;\n  background-color: #555;\n  margin: 10px auto;\n  border-radius: 5px;\n  padding: 5px;\n  position: relative;\n}\n\n#subProgressBar{\n  background-color: #999;\n  min-height: 90%;\n  float: left;\n}\n#textProgressBar{\n  color: #DDD;\n  text-align: center;\n  min-width: 100%;\n  min-height: 100%;\n  position: absolute;\n}\n\n.sample{\n  font-size: 0.8em;\n  margin-top:20px;\n}\n\n/*****************/\n/* SVG Render Box */\n/*****************/\n\n#svgWrapper{\n\n  font-family: monospace;\n  background-color: #b7d0f4;\n  padding:10px;\n  outline: 2px dashed #8cb7f7;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  height: calc(100% - 60px);\n  width: calc(100% - 20px);\n}\n\n/******************/\n/*  Header Menu   */\n/******************/\n#header{\n  background: #000;\n  color: #FFF;\n  font-size: 1.3em;\n  padding: 10px;\n  font-family: monospace;\n}\n\n#header a{\n  border-bottom: 0;\n}\n\n.entry{\n  cursor: pointer;\n}\n\n.entry:hover{\n  color: #82b0ed;\n  border-bottom: 1px dotted;\n}\n\n/*********************/\n/*  Root Switching   */\n/*********************/\n\n#selectRootWrapper{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #000;\n  opacity: 0.85;\n}\n\n#selectRoot{\n  width: 350px;\n  margin: 25vh auto;\n}\n\n#inputRoot{\n  text-align: center;\n  width: 90%;\n  margin: 10px;\n  font-size: 1.2em;\n}\n\nselect{\n  font-size: 1.2em;\n  margin: 10px auto;\n  width: 100%;\n}\n\n.buttons{\n  text-align: center;\n}\n\n.button{\n  padding: 5px;\n  background-color: #93d89c;\n  border: 1px solid #3c5d62;\n  color: #000;\n  display: inline-block;\n  font-family: monospace;\n  cursor: pointer;\n}\n\n.label{\n  display: block;\n  margin: 10px;\n  font-size: 1.3em;\n  color: #fff;\n  width: auto;\n  text-align: center;\n}\n/******************/\n/* PDF Render Box */\n/******************/\n#pdfobjectWrapper{\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  left: 5%;\n  position: fixed;\n  display: block;\n  overflow: hidden;\n}\n#pdfobject{\n  width: 100%;\n  height: 100%;\n}\n/**************************/\n/* Overlay when user wait */\n/**************************/\n\n#wait{\n  width: 100%;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.9);\n  height: 100%;\n  display: block;\n  top: 0;\n  cursor:wait;\n}\n\n#wait span{\n  display: inline-block;\n  width: 100%;\n  font-size: 2em;\n  top: 40%;\n  position: absolute;\n  text-align: center;\n  color:#FFF;\n}\n\n/***************************/\n/* Message boc left bottom */\n/***************************/\n#message{\n  position: fixed;\n  display: block;\n  bottom: 20px;\n  left: 20px;\n  font-family: monospace;\n}", "",{"version":3,"sources":["webpack://./src/assets/css/demo.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, sans-serif;\n  color: #0f3c4b;\n  background-color: #e5edf1;\n}\n\n\na{\n  transition: color 0.2s ease, border-bottom-color 0.2s ease;\n  border-bottom: dotted 1px;\n  color: inherit;\n  text-decoration: none;\n}\n\n.hidden{\n  display:none !important;\n}\n\n/*****************/\n/* Drop File Box */\n/*****************/\n\n#box{\n  min-height: 100%;\n  font-size: 1.5rem;\n  background-color: #c8dadf;\n  position: relative;\n  text-align:center;\n}\n\n.box__file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.box__file + label {\n  max-width: 80%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n}\n.box__button {\n  font-weight: 700;\n  color: #e5edf1;\n  background-color: #39bfd3;\n  display: none;\n  padding: 8px 16px;\n  margin: 40px auto 0;\n}\n.box__input{\n  padding: 25vh;\n  /*padding: 30% 20px 0 20px;*/\n}\n.box__dragndrop,\n.box__uploading,\n.box__success,\n.box__error {\n  display: none;\n}\n\n#box.has-advanced-upload {\n  outline: 2px dashed #92b0b3;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n}\n\n#box.has-advanced-upload .box__dragndrop {\n  display: inline;\n}\n\n#box.is-dragover {\n  background-color: grey;\n}\n\n\n/*****************/\n/* ProgressBar */\n/*****************/\n\n#progressBar{\n  width: 50%;\n  max-width: 300px;\n  height: 30px;\n  background-color: #555;\n  margin: 10px auto;\n  border-radius: 5px;\n  padding: 5px;\n  position: relative;\n}\n\n#subProgressBar{\n  background-color: #999;\n  min-height: 90%;\n  float: left;\n}\n#textProgressBar{\n  color: #DDD;\n  text-align: center;\n  min-width: 100%;\n  min-height: 100%;\n  position: absolute;\n}\n\n.sample{\n  font-size: 0.8em;\n  margin-top:20px;\n}\n\n/*****************/\n/* SVG Render Box */\n/*****************/\n\n#svgWrapper{\n\n  font-family: monospace;\n  background-color: #b7d0f4;\n  padding:10px;\n  outline: 2px dashed #8cb7f7;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  height: calc(100% - 60px);\n  width: calc(100% - 20px);\n}\n\n/******************/\n/*  Header Menu   */\n/******************/\n#header{\n  background: #000;\n  color: #FFF;\n  font-size: 1.3em;\n  padding: 10px;\n  font-family: monospace;\n}\n\n#header a{\n  border-bottom: 0;\n}\n\n.entry{\n  cursor: pointer;\n}\n\n.entry:hover{\n  color: #82b0ed;\n  border-bottom: 1px dotted;\n}\n\n/*********************/\n/*  Root Switching   */\n/*********************/\n\n#selectRootWrapper{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #000;\n  opacity: 0.85;\n}\n\n#selectRoot{\n  width: 350px;\n  margin: 25vh auto;\n}\n\n#inputRoot{\n  text-align: center;\n  width: 90%;\n  margin: 10px;\n  font-size: 1.2em;\n}\n\nselect{\n  font-size: 1.2em;\n  margin: 10px auto;\n  width: 100%;\n}\n\n.buttons{\n  text-align: center;\n}\n\n.button{\n  padding: 5px;\n  background-color: #93d89c;\n  border: 1px solid #3c5d62;\n  color: #000;\n  display: inline-block;\n  font-family: monospace;\n  cursor: pointer;\n}\n\n.label{\n  display: block;\n  margin: 10px;\n  font-size: 1.3em;\n  color: #fff;\n  width: auto;\n  text-align: center;\n}\n/******************/\n/* PDF Render Box */\n/******************/\n#pdfobjectWrapper{\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  left: 5%;\n  position: fixed;\n  display: block;\n  overflow: hidden;\n}\n#pdfobject{\n  width: 100%;\n  height: 100%;\n}\n/**************************/\n/* Overlay when user wait */\n/**************************/\n\n#wait{\n  width: 100%;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.9);\n  height: 100%;\n  display: block;\n  top: 0;\n  cursor:wait;\n}\n\n#wait span{\n  display: inline-block;\n  width: 100%;\n  font-size: 2em;\n  top: 40%;\n  position: absolute;\n  text-align: center;\n  color:#FFF;\n}\n\n/***************************/\n/* Message boc left bottom */\n/***************************/\n#message{\n  position: fixed;\n  display: block;\n  bottom: 20px;\n  left: 20px;\n  font-family: monospace;\n}"],"sourceRoot":""}]);
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
        //let diffSosaTopGen = this.getSosaOfMaxFather() - this.getMinSosaOfGeneration()
        //let diffGen = maxGeneration - generation
        //Calcul x & y values
        //this.x = diffSosaTopGen * (this.width() + this.widthPadding()) + this.leftMargin()
        //this.y = diffGen * (this.height() + this.heightPadding()) + this.leftMargin()
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
        //FIXME post TS : code unused
        let diffSosaTopGen = this.getSosaOfMaxFather() - this.getMinSosaOfGeneration();
        //TODO verify this line below after swtching to TS
        //let diffSosaTopGen = this.getSosaOfMaxFather(sosaWrapper.getSosa()) - this.getMinSosaOfGeneration(maxGeneration)
        let diffGen = maxGeneration - this.generation;
        //Calcul x & y values
        //this.x =  diffSosaTopGen * (this.width() + this.widthPadding()) + this.leftMargin()
        //this.y = diffGen * (this.height() + this.heightPadding()) + this.leftMargin()
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
        //FIXME post TS : code unused
        let margin_bottom = (BoxAbstract.heightPadding() + BoxV.height()) * 5;
        //this.CONST_LEFT_MARGIN = 20 // left margin
        //this.CONST_WIDTH_PADDING = 10 // horizontal padding between box
        //this.CONST_HEIGHT_PADDING = 30 // vertical padding between box
        //this.CONST_WIDTH = 50 //width of box in px
        //this.CONST_HEIGHT = 150 //height of box in px
        let diffSosaTopGen = this.getSosaOfMaxFather() - this.getMinSosaOfGeneration();
        let diffGen = maxGeneration - this.generation;
        //Calcul x & y values
        //this.x =  diffSosaTopGen * (this.width() + this.widthPadding()) + this.leftMargin()
        //this.y = (diffGen - 5) * (this.height() + this.heightPadding()) + this.leftMargin() + margin_bottom
        //  width(){return 50;} //width of box in px
        //    height(){return 150;} //height of box in px
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



/**
 *
 * @param sosaWrapper the sosa Wrapper always starting by 1
 * @param gedTechId the technical index code inside the GEDCOM file, can be != 1 the first time . Not the SOSA
 * @returns
 */
function populateGrid(sosaWrapper, gedTechId) {
    //Avoid unecessary processing
    if (!_Store__WEBPACK_IMPORTED_MODULE_1__.Store.mapGedTechIdToIndividual.has(gedTechId)) {
        console.warn("gedTechId %o Not found in 'map GedTechId To Individual'. Sosa was %o", gedTechId, sosaWrapper.sosa);
        return;
    }
    let individual = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.mapGedTechIdToIndividual.get(gedTechId);
    let curSosa = sosaWrapper.sosa;
    let curGen = sosaWrapper.generation;
    //console.info(curSosa,gedTechId, individual.id)
    //Limitation
    if (curGen > _Store__WEBPACK_IMPORTED_MODULE_1__.Store.generationMax) {
        console.warn("the Store.generationMax limite of %o was reached. Sosa was %o'", _Store__WEBPACK_IMPORTED_MODULE_1__.Store.generationMax, sosaWrapper.sosa);
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
    //Case of Implexe
    if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.positionProcessed.indexOf(gedTechId) !== -1) {
        console.debug("implexe detected with gedTechId %o. Sosa was %o", gedTechId, sosaWrapper.sosa);
        //TODO maybe a customized box with/without parent
        // return
    }
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.positionProcessed.push(gedTechId);
    let previousSosaWrapper = null;
    if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapRightSosaByGeneration.has(curGen)) {
        let previousSosa = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapRightSosaByGeneration.get(curGen).sosa;
        // Set "nextSosaWrapper" of previous
        if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.has(previousSosa)) {
            _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.get(previousSosa).nextSosaWrapper = sosaWrapper;
            previousSosaWrapper = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.get(previousSosa).sosaWrapper;
        }
    }
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapRightSosaByGeneration.set(curGen, sosaWrapper);
    _Store__WEBPACK_IMPORTED_MODULE_1__.Store.grid.mapSosaToGridEntry.set(curSosa, new _struct_class__WEBPACK_IMPORTED_MODULE_0__.VirtualGridEntry(sosaWrapper, individual, previousSosaWrapper));
    //Process his father and mothers
    let familyId = individual.famc;
    if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.mapCodeFamily.has(familyId)) {
        let family = _Store__WEBPACK_IMPORTED_MODULE_1__.Store.mapCodeFamily.get(familyId);
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
const REGEX_DATE = /^2 DATE (.*)$/;
const REGEX_PLACE = /^2 PLAC (.*)$/;
const REGEX_REPLACE_NAME = /"/g;
class GedcomParser {
    static parse(gedcomContent) {
        let line = null;
        let individual = null; // One Individu
        let family = null; //One Familly
        let birthInit = false;
        let deathInit = false;
        let matches = null;
        let lines = gedcomContent.split(/[\r\n]+/);
        let len = lines.length;
        for (var i = 0; i < len; i++) {
            line = lines[i];
            matches = line.match(REGEX_INDI);
            if (matches) {
                //Save previous indiv
                if (individual != null) {
                    individual.isProcessed = false;
                    _Store__WEBPACK_IMPORTED_MODULE_0__.Store.mapGedTechIdToIndividual.set(individual.id, individual);
                    birthInit = false;
                    deathInit = false;
                    if (_Store__WEBPACK_IMPORTED_MODULE_0__.Store.firstGedTechIdParsed == null) {
                        _Store__WEBPACK_IMPORTED_MODULE_0__.Store.firstGedTechIdParsed = individual.id;
                    }
                }
                // Initiate class
                individual = new _struct_class__WEBPACK_IMPORTED_MODULE_1__.Individual();
                individual.id = parseInt(matches[1].trim());
                continue;
            }
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
            matches = line.match(REGEX_FAMILY);
            if (matches) {
                //Save previous family
                if (family != null) {
                    _Store__WEBPACK_IMPORTED_MODULE_0__.Store.mapCodeFamily.set(family.id, family);
                }
                // Initiate array
                family = new _struct_class__WEBPACK_IMPORTED_MODULE_1__.Family();
                family.id = parseInt(matches[1].trim());
                continue;
            }
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
            matches = line.match(REGEX_BIRTH);
            if (matches && individual != null) {
                birthInit = true;
                deathInit = false;
                continue;
            }
            matches = line.match(REGEX_DEATH);
            if (matches && individual != null) {
                deathInit = true;
                birthInit = false;
                continue;
            }
            matches = line.match(REGEX_DATE);
            if (matches && individual != null) {
                if (birthInit) {
                    individual.birthDate = matches[1].trim();
                }
                else if (deathInit) {
                    individual.deathDate = matches[1].trim();
                }
                continue;
            }
            matches = line.match(REGEX_PLACE);
            if (matches && individual != null) {
                if (birthInit) {
                    individual.birthPlace = matches[1].trim();
                }
                else if (deathInit) {
                    individual.deathPlace = matches[1].trim();
                }
                continue;
            }
        }
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
/* harmony export */   "_HTML_ELEMENT__FILE": () => (/* binding */ _HTML_ELEMENT__FILE),
/* harmony export */   "_HTML_ELEMENT__FORM": () => (/* binding */ _HTML_ELEMENT__FORM),
/* harmony export */   "_HTML_ELEMENT__HEADER": () => (/* binding */ _HTML_ELEMENT__HEADER),
/* harmony export */   "_HTML_ELEMENT__MESSAGE": () => (/* binding */ _HTML_ELEMENT__MESSAGE),
/* harmony export */   "_HTML_ELEMENT__PDF": () => (/* binding */ _HTML_ELEMENT__PDF),
/* harmony export */   "_HTML_ELEMENT__PDFWRAPPER": () => (/* binding */ _HTML_ELEMENT__PDFWRAPPER),
/* harmony export */   "_HTML_ELEMENT__PDF_ACTION_BUTTON": () => (/* binding */ _HTML_ELEMENT__PDF_ACTION_BUTTON),
/* harmony export */   "_HTML_ELEMENT__PNG_ACTION_BUTTON": () => (/* binding */ _HTML_ELEMENT__PNG_ACTION_BUTTON),
/* harmony export */   "_HTML_ELEMENT__PROGRESSBAR": () => (/* binding */ _HTML_ELEMENT__PROGRESSBAR),
/* harmony export */   "_HTML_ELEMENT__PROGRESSBAR_SUB": () => (/* binding */ _HTML_ELEMENT__PROGRESSBAR_SUB),
/* harmony export */   "_HTML_ELEMENT__PROGRESSBAR_TXT": () => (/* binding */ _HTML_ELEMENT__PROGRESSBAR_TXT),
/* harmony export */   "_HTML_ELEMENT__ROOT_CANCEL": () => (/* binding */ _HTML_ELEMENT__ROOT_CANCEL),
/* harmony export */   "_HTML_ELEMENT__ROOT_EXEC": () => (/* binding */ _HTML_ELEMENT__ROOT_EXEC),
/* harmony export */   "_HTML_ELEMENT__ROOT_INPUT": () => (/* binding */ _HTML_ELEMENT__ROOT_INPUT),
/* harmony export */   "_HTML_ELEMENT__ROOT_NORESULT": () => (/* binding */ _HTML_ELEMENT__ROOT_NORESULT),
/* harmony export */   "_HTML_ELEMENT__ROOT_RESULTS": () => (/* binding */ _HTML_ELEMENT__ROOT_RESULTS),
/* harmony export */   "_HTML_ELEMENT__ROOT_SELECTWRAPPER": () => (/* binding */ _HTML_ELEMENT__ROOT_SELECTWRAPPER),
/* harmony export */   "_HTML_ELEMENT__ROOT_SWITCH": () => (/* binding */ _HTML_ELEMENT__ROOT_SWITCH),
/* harmony export */   "_HTML_ELEMENT__STARTTYPE": () => (/* binding */ _HTML_ELEMENT__STARTTYPE),
/* harmony export */   "_HTML_ELEMENT__SVGWRAPPER": () => (/* binding */ _HTML_ELEMENT__SVGWRAPPER),
/* harmony export */   "_HTML_ELEMENT__WAIT": () => (/* binding */ _HTML_ELEMENT__WAIT),
/* harmony export */   "hide": () => (/* binding */ hide),
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
const _HTML_ELEMENT__FILE = document.getElementById('file');
const _HTML_ELEMENT__FORM = document.getElementById('box');
const _HTML_ELEMENT__PDF_ACTION_BUTTON = document.getElementById('pdf1');
const _HTML_ELEMENT__PNG_ACTION_BUTTON = document.getElementById('img1');
const _HTML_ELEMENT__SVGWRAPPER = document.getElementById('svgWrapper');
const _HTML_ELEMENT__ROOT_INPUT = document.getElementById('inputRoot');
const _HTML_ELEMENT__ROOT_EXEC = document.getElementById('execRoot');
const _HTML_ELEMENT__ROOT_CANCEL = document.getElementById('cancelRoot');
const _HTML_ELEMENT__ROOT_SWITCH = document.getElementById('switchRoot');
const _HTML_ELEMENT__ROOT_RESULTS = document.getElementById('resultsRoot');
const _HTML_ELEMENT__ROOT_SELECTWRAPPER = document.getElementById('selectRootWrapper');
const _HTML_ELEMENT__ROOT_NORESULT = document.getElementById('noResult');
const _HTML_ELEMENT__PROGRESSBAR = document.getElementById('progressBar');
const _HTML_ELEMENT__PROGRESSBAR_SUB = document.getElementById('subProgressBar');
const _HTML_ELEMENT__PROGRESSBAR_TXT = document.getElementById('textProgressBar');
const _HTML_ELEMENT__HEADER = document.getElementById('header');
const _HTML_ELEMENT__PDFWRAPPER = document.getElementById('pdfobjectWrapper');
const _HTML_ELEMENT__PDF = document.getElementById('pdfobject');
const _HTML_ELEMENT__STARTTYPE = document.getElementById('startType');
const _HTML_ELEMENT__WAIT = document.getElementById('wait');
const _HTML_ELEMENT__MESSAGE = document.getElementById('message');
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
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_1__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HTML_ELEMENT__WAIT]);
    let comp = window.getComputedStyle(_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HTML_ELEMENT__SVGWRAPPER);
    let w = comp.getPropertyValue('width');
    let h = comp.getPropertyValue('height');
    let viewbox = _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.container.viewbox();
    let zoom = _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.container.zoom();
    _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HTML_ELEMENT__SVGWRAPPER.style.width = _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionXMax + 'px';
    _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HTML_ELEMENT__SVGWRAPPER.style.height = _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionYMax + 'px';
    _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.container.viewbox(0, 0, _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionYMax)
        .size(_Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionYMax)
        .zoom(1);
    html2canvas__WEBPACK_IMPORTED_MODULE_0___default()(_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HTML_ELEMENT__SVGWRAPPER, {
        ignoreElements: function (el) { return el.classList.contains('toExcludeFromSnapshot'); },
        logging: false
    }).then(function (canvas) {
        canvas.toBlob(function (blob) {
            download(blob, ".png");
        });
    }).finally(() => {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_1__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HTML_ELEMENT__WAIT]);
        _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.container.viewbox(viewbox)
            .size(w, h)
            .zoom(zoom);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HTML_ELEMENT__SVGWRAPPER.style.width = "";
        _HtmlElements__WEBPACK_IMPORTED_MODULE_1__._HTML_ELEMENT__SVGWRAPPER.style.height = "";
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

/***/ 1282:
/*!****************************!*\
  !*** ./src/PDFRenderer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RATIO_PX_2_CM": () => (/* binding */ RATIO_PX_2_CM),
/* harmony export */   "generatePdf": () => (/* binding */ generatePdf),
/* harmony export */   "pdfViewBox": () => (/* binding */ pdfViewBox)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_panzoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.panzoom.js */ 6685);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ 1819);
/* harmony import */ var svg2pdf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg2pdf.js */ 9618);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HtmlElements */ 770);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Store */ 3331);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SVGRenderer */ 3209);






const RATIO_PX_2_CM = 40; //Default Ratio px => cm
const PDF_HARD_LIMIT = 5080; //PDF is limited to 5080 mm max https://github.com/parallax/jsPDF/issues/705
function generatePdf() {
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_3__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_3__._HTML_ELEMENT__WAIT]);
    pdfViewBox();
    const svgElement = document.getElementsByTagName("svg")[0];
    //Show Wrapper
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_3__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_3__._HTML_ELEMENT__PDFWRAPPER]);
    let orientation = 'l';
    if (_Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionYMax > _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionXMax) {
        orientation = 'p';
    }
    let ratioUsed = RATIO_PX_2_CM;
    if (orientation == 'l' && _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionXMax / RATIO_PX_2_CM * 10 > PDF_HARD_LIMIT) {
        ratioUsed = _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionXMax * 10 / PDF_HARD_LIMIT;
    }
    if (orientation == 'p' && _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionYMax / RATIO_PX_2_CM * 10 > PDF_HARD_LIMIT) {
        ratioUsed = _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionYMax * 10 / PDF_HARD_LIMIT;
    }
    const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__.jsPDF(orientation, 'cm', [_Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionXMax / ratioUsed, _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionYMax / ratioUsed]);
    // render the svg element
    (0,svg2pdf_js__WEBPACK_IMPORTED_MODULE_2__.svg2pdf)(svgElement, pdf, {
        x: 0,
        y: 0,
        width: _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionXMax / ratioUsed,
        height: _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionYMax / ratioUsed
    }).then(() => {
        const uri = pdf.output('datauristring');
        if (uri.length < 5000000) {
            _HtmlElements__WEBPACK_IMPORTED_MODULE_3__._HTML_ELEMENT__PDF.setAttribute("src", uri);
        }
        else {
            pdf.save('myPDF.pdf');
        }
    }).finally(() => {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_3__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_3__._HTML_ELEMENT__WAIT]);
        //Reset information post pdf generation
        //TODO restoring previous position 
        _SVGRenderer__WEBPACK_IMPORTED_MODULE_5__.SVGRenderer.svgViewBox();
    });
}
function pdfViewBox() {
    let w = 100;
    if (_Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionXMax / window.innerWidth < _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionYMax / window.innerHeight) {
        w = (window.innerWidth * 100 / (_Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionYMax * window.innerHeight / window.innerWidth));
    }
    _SVGRenderer__WEBPACK_IMPORTED_MODULE_5__.SVGRenderer.container.viewbox(0, 0, _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionYMax)
        .size(w + '%', '100%');
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
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_0__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HTML_ELEMENT__PROGRESSBAR]);
    }
    render() {
        _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HTML_ELEMENT__PROGRESSBAR_SUB.style.width = this.currentStep * (100 / this.nbSteps) + '%';
        _HtmlElements__WEBPACK_IMPORTED_MODULE_0__._HTML_ELEMENT__PROGRESSBAR_TXT.innerHTML = this.message;
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





class SVGRenderer {
    static drawSVG() {
        SVGRenderer.container = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().addTo(_HtmlElements__WEBPACK_IMPORTED_MODULE_4__._HTML_ELEMENT__SVGWRAPPER);
        SVGRenderer.svgViewBox();
        SVGRenderer.polyline([0, 0, 0, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax, 0, 0, 0]);
        SVGRenderer.drawLoop(1);
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_4__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_4__._HTML_ELEMENT__FORM]);
    }
    static drawLoop(generation) {
        if (generation > _Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.maxGenerationProcessed) {
            return;
        }
        let sosaWrapper = null;
        let box = null;
        let width = null;
        let height = null;
        let birth = null;
        let death = null;
        let yIncrement = null;
        let tmpStr = null;
        const nbCar1em = 26;
        const nbCar07em = 34;
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
        let key = null;
        let name = null;
        let gridEntry = null;
        const regexBefore = /^BEF/i;
        const regexAfter = /^AFT/i;
        for (let i = 0; i < len; i++) {
            key = sosas[i];
            if (!_Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.mapSosaToGridEntry.has(key)) {
                console.info("grid.mapSosaToGridEntry doesn't have key %o", key);
                continue;
            }
            gridEntry = _Store__WEBPACK_IMPORTED_MODULE_3__.Store.grid.mapSosaToGridEntry.get(key);
            sosaWrapper = gridEntry.sosaWrapper;
            box = gridEntry.box;
            name = gridEntry.firstname + " " + gridEntry.lastname;
            yIncrement = 15;
            birth = "";
            if (gridEntry.birthDate != undefined || gridEntry.birthPlace != undefined) {
                birth += "¤";
                if (gridEntry.birthDate != undefined) {
                    birth += " " + gridEntry.birthDate.replace(regexBefore, '<').replace(regexAfter, '>');
                }
                if (gridEntry.birthPlace != undefined) {
                    tmpStr = gridEntry.birthPlace.split(',');
                    birth += " " + tmpStr[0] + ", " + tmpStr[1];
                }
            }
            death = "";
            if (gridEntry.deathDate != undefined || gridEntry.deathPlace != undefined) {
                death += "×";
                if (gridEntry.deathDate != undefined) {
                    death += " " + gridEntry.deathDate.replace(regexBefore, '<').replace(regexAfter, '>');
                }
                if (gridEntry.deathPlace != undefined) {
                    tmpStr = gridEntry.deathPlace.split(',');
                    death += " " + tmpStr[0] + "," + tmpStr[1];
                }
            }
            // Dessin de la box
            SVGRenderer.container.rect(width, height)
                .fill('#eee')
                .move(box.getX(), box.getY())
                .stroke({ width: 1, color: '#ccc' })
                .radius(10);
            //For debug only
            //name = '#'+ gridEntry.sosaWrapper.sosa + " " + name
            //For debug only
            //26 car in size 1em
            SVGRenderer.container.plain(name.substring(0, nbCar1em)).move(box.getX() + 5, box.getY() + yIncrement);
            //DrawPdf.drawSVG.plain(sosaWrapper.getSosa() + " [" + box.getX()  + '/' + box.getY() + "]").move(box.getX() + 5, box.getY() + yIncrement)
            yIncrement += 15;
            if (name.length > nbCar1em) {
                SVGRenderer.container.plain(name.substring(nbCar1em, 2 * nbCar1em)).move(box.getX() + 5, box.getY() + yIncrement);
                yIncrement += 15;
            }
            //34 car in size 0.7em
            SVGRenderer.container.plain(birth.substring(0, nbCar07em)).font('size', '10').move(box.getX() + 5, box.getY() + yIncrement);
            if (birth.length > nbCar07em) {
                yIncrement += 10;
                SVGRenderer.container.plain(birth.substring(nbCar07em, 2 * nbCar07em)).font('size', '10').move(box.getX() + 5, box.getY() + yIncrement);
            }
            yIncrement += 10;
            SVGRenderer.container.plain(death.substring(0, nbCar07em)).font('size', '10').move(box.getX() + 5, box.getY() + yIncrement);
            if (death.length > nbCar07em) {
                yIncrement += 10;
                SVGRenderer.container.plain(death.substring(nbCar07em, 2 * nbCar07em)).font('size', '10').move(box.getX() + 5, box.getY() + yIncrement);
            }
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
        //TODO verifier ce code
        setTimeout(() => {
            this.drawLoop(generation);
        }, 1);
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
}
SVGRenderer.container = null;


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
/* harmony import */ var _struct_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./struct.class */ 7361);

class Store {
    static init() {
        Store.generationMax = 100;
        Store.mapGedTechIdToIndividual = new Map();
        Store.mapCodeFamily = new Map();
        Store.firstGedTechIdParsed = null; // need to be null
        Store.resetForRedraw();
    }
    static resetForRedraw() {
        Store.positionXMax = 0;
        Store.positionYMax = 0;
        Store.grid = new _struct_class__WEBPACK_IMPORTED_MODULE_0__.VirtualGrid();
    }
}
Store.generationMax = 100;
Store.mapGedTechIdToIndividual = null; // map Sosa / Gedcom Individus
Store.mapCodeFamily = null; // map Sosa / Gedcom famillies
Store.firstGedTechIdParsed = null; // First Sosa processed by the parser
Store.positionXMax = 0;
Store.positionYMax = 0;
Store.grid = null;


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
        }, 20);
    }
}


/***/ }),

/***/ 6099:
/*!*********************!*\
  !*** ./src/demo.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _PDFRenderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PDFRenderer */ 1282);
/* harmony import */ var _ImgRenderer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ImgRenderer */ 5526);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HtmlElements */ 770);















const SOSA_ONE = new _struct_class__WEBPACK_IMPORTED_MODULE_6__.SosaWrapper(1);
var progressBar = null;
var taskOrchestrator = null;
function init() {
    _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FILE.addEventListener('change', function (e) {
        run(_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FILE.files[0]);
    });
    let isAdvancedUpload = function () {
        let div = document.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }();
    if (isAdvancedUpload) {
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.classList.add('has-advanced-upload');
        let funcDrag = function (e) {
            e.preventDefault();
            e.stopPropagation();
        };
        let funcDragOver = function () {
            _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.classList.add('is-dragover');
        };
        let funcDragLeave = function () {
            _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.classList.remove('is-dragover');
        };
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('drag', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('dragstart', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('dragend', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('dragover', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('dragenter', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('dragleave', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('drop', funcDrag);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('dragover', funcDragOver);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('dragenter', funcDragOver);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('dragleave', funcDragLeave);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('dragend', funcDragLeave);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('drop', funcDragLeave);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__FORM.addEventListener('drop', function (e) {
            let droppedFiles = e.dataTransfer.files;
            for (var i = 0; i < droppedFiles.length; i++) {
                if (droppedFiles[i]['name'].endsWith('.gedcom') || droppedFiles[i]['name'].endsWith('.ged')) {
                    run(droppedFiles[i]);
                    break;
                }
            }
        });
    }
    _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__PNG_ACTION_BUTTON.addEventListener('click', _ImgRenderer__WEBPACK_IMPORTED_MODULE_13__.takeshot);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__PDF_ACTION_BUTTON.addEventListener('click', _PDFRenderer__WEBPACK_IMPORTED_MODULE_12__.generatePdf);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__SVGWRAPPER.addEventListener('click', hiddePdfobjectWrapper);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_INPUT.addEventListener('keyup', typingRoot);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_EXEC.addEventListener('click', changeRoot);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_CANCEL.addEventListener('click', cancelRoot);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_SWITCH.addEventListener('click', showRoot);
}
function run(file) {
    //Init the internal Store
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.init();
    //Init the Logger system
    _Logger__WEBPACK_IMPORTED_MODULE_9__.Logger.init();
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__PROGRESSBAR]);
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
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__MESSAGE]);
    _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__MESSAGE.innerHTML = `Expected size of PDF : ${_Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionXMax / _PDFRenderer__WEBPACK_IMPORTED_MODULE_12__.RATIO_PX_2_CM}cm * ${_Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionYMax / _PDFRenderer__WEBPACK_IMPORTED_MODULE_12__.RATIO_PX_2_CM}cm<br/>
                                      Expected size of PNG : ${_Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionXMax + 20}px * ${_Store__WEBPACK_IMPORTED_MODULE_8__.Store.positionYMax + 20}px`;
}
function draw() {
    //console.info(container.getMapContainer().has(96))
    //console.info(container.getMapContainer())
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__HEADER, _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__SVGWRAPPER]);
    _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.drawSVG();
}
function hiddePdfobjectWrapper() {
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__PDFWRAPPER]);
}
function cancelRoot() {
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_SELECTWRAPPER]);
}
function showRoot() {
    (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_SELECTWRAPPER]);
}
function typingRoot() {
    var search = _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_INPUT.value.trim();
    if (search.length < 4) {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__STARTTYPE, _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_RESULTS, _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_EXEC, _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_NORESULT]);
        return;
    }
    else {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__STARTTYPE]);
    }
    var listSosa = [];
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.mapGedTechIdToIndividual.forEach((individual, sosa) => {
        if (individual.firstname.includes(search) || individual.lastname.includes(search)) {
            listSosa.push(sosa);
        }
    });
    showRoots(listSosa);
}
/**
 *  Fill the list of Sosa to show in the selector
 * @param listSosa the list of Sosa to show in the selector
 */
function showRoots(listSosa) {
    if (listSosa.length == 0) {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_RESULTS, _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_EXEC]);
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_NORESULT]);
    }
    else {
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.show)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_RESULTS, _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_EXEC]);
        (0,_HtmlElements__WEBPACK_IMPORTED_MODULE_14__.hide)([_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_NORESULT]);
    }
    // .innerHtml='' is not recommended because it doesn’t remove the event handlers of the child nodes, which might cause a memory leak.
    while (_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_RESULTS.firstChild) {
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_RESULTS.removeChild(_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_RESULTS.firstChild);
    }
    let textnode = null;
    let node = null;
    let bDate = null;
    let dDate = null;
    let individual = null;
    for (let oneSosa of listSosa) {
        individual = _Store__WEBPACK_IMPORTED_MODULE_8__.Store.mapGedTechIdToIndividual.get(oneSosa);
        bDate = individual.birthDate !== undefined ? individual.birthDate : "?";
        dDate = individual.deathDate !== undefined ? individual.deathDate : "?";
        textnode = document.createTextNode(`${individual.firstname} ${individual.lastname} (${bDate}-${dDate})`);
        node = document.createElement("OPTION");
        node.setAttribute("value", oneSosa + "");
        node.appendChild(textnode);
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_RESULTS.appendChild(node);
    }
}
function changeRoot() {
    //Init the Logger system
    _Logger__WEBPACK_IMPORTED_MODULE_9__.Logger.init();
    _Logger__WEBPACK_IMPORTED_MODULE_9__.Logger.log("starting purging data");
    // Purge Store values for a new draw
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.resetForRedraw();
    let key = parseInt(_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__ROOT_RESULTS.value);
    let sosaOne = new _struct_class__WEBPACK_IMPORTED_MODULE_6__.SosaWrapper(1);
    //Purge SVG
    // .innerHtml='' is not recommended because it doesn’t remove the event handlers of the child nodes, which might cause a memory leak.
    while (_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__SVGWRAPPER.firstChild) {
        _HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__SVGWRAPPER.removeChild(_HtmlElements__WEBPACK_IMPORTED_MODULE_14__._HTML_ELEMENT__SVGWRAPPER.firstChild);
    }
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
    cancelRoot();
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
        this.positionProcessed = [];
        this.maxSosaProcessed = null;
        this.maxGenerationProcessed = null;
        this.mapRightSosaByGeneration = new Map();
        this.mapSosaToGridEntry = new Map();
        this.mapGenerationYPosition = new Map();
        this.mapGenerationSosa = new Map();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEVBQXNDO0FBQzFDO0FBQ0EsS0FBSztBQUNMLElBQUksK0NBQVU7QUFDZCwyQkFBMkIscUVBQWdCO0FBQzNDO0FBQ0EsYUFBYSxpRUFBaUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU9PO0FBQ1A7QUFDQSx1Q0FBdUM7QUFDdkMsc0NBQXNDO0FBQ3RDLDRDQUE0QztBQUM1Qyw4Q0FBOEM7QUFDOUM7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0Esd0JBQXdCO0FBQ3hCLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9hc3NldHMvY3NzL2RlbW8uY3NzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9hc3NldHMvY3NzL2RlbW8uY3NzPzljNzQiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL0JveC5jbGFzcy50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvQ29udGFpbmVyRmFjdG9yeS50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvR2VkY29tUGFyc2VyLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9IdG1sRWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL0ltZ1JlbmRlcmVyLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL1BERlJlbmRlcmVyLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9Qcm9ncmVzc0Jhci5jbGFzcy50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvU1ZHUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL1N0b3JlLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9UYXNrT3JjaGVzdHJhdG9yLmNsYXNzLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9kZW1vLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9zdHJ1Y3QuY2xhc3MudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzBmM2M0YjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWVkZjE7XFxufVxcblxcblxcbmF7XFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UsIGJvcmRlci1ib3R0b20tY29sb3IgMC4ycyBlYXNlO1xcbiAgYm9yZGVyLWJvdHRvbTogZG90dGVkIDFweDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKi9cXG4vKiBEcm9wIEZpbGUgQm94ICovXFxuLyoqKioqKioqKioqKioqKioqL1xcblxcbiNib3h7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhkYWRmO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbi5ib3hfX2ZpbGUge1xcbiAgd2lkdGg6IDAuMXB4O1xcbiAgaGVpZ2h0OiAwLjFweDtcXG4gIG9wYWNpdHk6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxufVxcbi5ib3hfX2ZpbGUgKyBsYWJlbCB7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5ib3hfX2J1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICNlNWVkZjE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzliZmQzO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgbWFyZ2luOiA0MHB4IGF1dG8gMDtcXG59XFxuLmJveF9faW5wdXR7XFxuICBwYWRkaW5nOiAyNXZoO1xcbiAgLypwYWRkaW5nOiAzMCUgMjBweCAwIDIwcHg7Ki9cXG59XFxuLmJveF9fZHJhZ25kcm9wLFxcbi5ib3hfX3VwbG9hZGluZyxcXG4uYm94X19zdWNjZXNzLFxcbi5ib3hfX2Vycm9yIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNib3guaGFzLWFkdmFuY2VkLXVwbG9hZCB7XFxuICBvdXRsaW5lOiAycHggZGFzaGVkICM5MmIwYjM7XFxuICBvdXRsaW5lLW9mZnNldDogLTEwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBvdXRsaW5lLW9mZnNldCAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgbGluZWFyO1xcbn1cXG5cXG4jYm94Lmhhcy1hZHZhbmNlZC11cGxvYWQgLmJveF9fZHJhZ25kcm9wIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuI2JveC5pcy1kcmFnb3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG5cXG4vKioqKioqKioqKioqKioqKiovXFxuLyogUHJvZ3Jlc3NCYXIgKi9cXG4vKioqKioqKioqKioqKioqKiovXFxuXFxuI3Byb2dyZXNzQmFye1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1heC13aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbiNzdWJQcm9ncmVzc0JhcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XFxuICBtaW4taGVpZ2h0OiA5MCU7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuI3RleHRQcm9ncmVzc0JhcntcXG4gIGNvbG9yOiAjREREO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLnNhbXBsZXtcXG4gIGZvbnQtc2l6ZTogMC44ZW07XFxuICBtYXJnaW4tdG9wOjIwcHg7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKi9cXG4vKiBTVkcgUmVuZGVyIEJveCAqL1xcbi8qKioqKioqKioqKioqKioqKi9cXG5cXG4jc3ZnV3JhcHBlcntcXG5cXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdkMGY0O1xcbiAgcGFkZGluZzoxMHB4O1xcbiAgb3V0bGluZTogMnB4IGRhc2hlZCAjOGNiN2Y3O1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0xMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvdXRsaW5lLW9mZnNldCAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCk7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKiovXFxuLyogIEhlYWRlciBNZW51ICAgKi9cXG4vKioqKioqKioqKioqKioqKioqL1xcbiNoZWFkZXJ7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgY29sb3I6ICNGRkY7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbiNoZWFkZXIgYXtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcblxcbi5lbnRyeXtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVudHJ5OmhvdmVye1xcbiAgY29sb3I6ICM4MmIwZWQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqL1xcbi8qICBSb290IFN3aXRjaGluZyAgICovXFxuLyoqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4jc2VsZWN0Um9vdFdyYXBwZXJ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuI3NlbGVjdFJvb3R7XFxuICB3aWR0aDogMzUwcHg7XFxuICBtYXJnaW46IDI1dmggYXV0bztcXG59XFxuXFxuI2lucHV0Um9vdHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG5zZWxlY3R7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ1dHRvbnN7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b257XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkODljO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNjNWQ2MjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxhYmVse1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyoqKioqKioqKioqKioqKioqKi9cXG4vKiBQREYgUmVuZGVyIEJveCAqL1xcbi8qKioqKioqKioqKioqKioqKiovXFxuI3BkZm9iamVjdFdyYXBwZXJ7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogNSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNwZGZvYmplY3R7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIE92ZXJsYXkgd2hlbiB1c2VyIHdhaXQgKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuXFxuI3dhaXR7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdG9wOiAwO1xcbiAgY3Vyc29yOndhaXQ7XFxufVxcblxcbiN3YWl0IHNwYW57XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgdG9wOiA0MCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjojRkZGO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIE1lc3NhZ2UgYm9jIGxlZnQgYm90dG9tICovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4jbWVzc2FnZXtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgbGVmdDogMjBweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvY3NzL2RlbW8uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7O0FBR0E7RUFDRSwwREFBMEQ7RUFDMUQseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUEsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7O0FBRWxCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGFBQWE7RUFDYiw0QkFBNEI7QUFDOUI7QUFDQTs7OztFQUlFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsaUZBQWlGO0VBQ2pGLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7OztBQUdBLGtCQUFrQjtBQUNsQixnQkFBZ0I7QUFDaEIsa0JBQWtCOztBQUVsQjtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQixtQkFBbUI7QUFDbkIsa0JBQWtCOztBQUVsQjs7RUFFRSxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLGlGQUFpRjtFQUNqRix5RUFBeUU7RUFDekUseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7QUFFQSxtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQjtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjs7QUFFQSxzQkFBc0I7QUFDdEIsc0JBQXNCO0FBQ3RCLHNCQUFzQjs7QUFFdEI7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQSxtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLG1CQUFtQjtBQUNuQjtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsT0FBTztFQUNQLFFBQVE7RUFDUixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsMkJBQTJCOztBQUUzQjtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixjQUFjO0VBQ2QsTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsY0FBYztFQUNkLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQSw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLDRCQUE0QjtBQUM1QjtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwZjNjNGI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlZGYxO1xcbn1cXG5cXG5cXG5he1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLCBib3JkZXItYm90dG9tLWNvbG9yIDAuMnMgZWFzZTtcXG4gIGJvcmRlci1ib3R0b206IGRvdHRlZCAxcHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmhpZGRlbntcXG4gIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKiovXFxuLyogRHJvcCBGaWxlIEJveCAqL1xcbi8qKioqKioqKioqKioqKioqKi9cXG5cXG4jYm94e1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZGFkZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4uYm94X19maWxlIHtcXG4gIHdpZHRoOiAwLjFweDtcXG4gIGhlaWdodDogMC4xcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG4uYm94X19maWxlICsgbGFiZWwge1xcbiAgbWF4LXdpZHRoOiA4MCU7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYm94X19idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiAjZTVlZGYxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5YmZkMztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIG1hcmdpbjogNDBweCBhdXRvIDA7XFxufVxcbi5ib3hfX2lucHV0e1xcbiAgcGFkZGluZzogMjV2aDtcXG4gIC8qcGFkZGluZzogMzAlIDIwcHggMCAyMHB4OyovXFxufVxcbi5ib3hfX2RyYWduZHJvcCxcXG4uYm94X191cGxvYWRpbmcsXFxuLmJveF9fc3VjY2VzcyxcXG4uYm94X19lcnJvciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jYm94Lmhhcy1hZHZhbmNlZC11cGxvYWQge1xcbiAgb3V0bGluZTogMnB4IGRhc2hlZCAjOTJiMGIzO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0xMHB4O1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvdXRsaW5lLW9mZnNldCAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgbGluZWFyO1xcbiAgdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG59XFxuXFxuI2JveC5oYXMtYWR2YW5jZWQtdXBsb2FkIC5ib3hfX2RyYWduZHJvcCB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbiNib3guaXMtZHJhZ292ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuXFxuLyoqKioqKioqKioqKioqKioqL1xcbi8qIFByb2dyZXNzQmFyICovXFxuLyoqKioqKioqKioqKioqKioqL1xcblxcbiNwcm9ncmVzc0JhcntcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU1NTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jc3ViUHJvZ3Jlc3NCYXJ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xcbiAgbWluLWhlaWdodDogOTAlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbiN0ZXh0UHJvZ3Jlc3NCYXJ7XFxuICBjb2xvcjogI0RERDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcblxcbi5zYW1wbGV7XFxuICBmb250LXNpemU6IDAuOGVtO1xcbiAgbWFyZ2luLXRvcDoyMHB4O1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKiovXFxuLyogU1ZHIFJlbmRlciBCb3ggKi9cXG4vKioqKioqKioqKioqKioqKiovXFxuXFxuI3N2Z1dyYXBwZXJ7XFxuXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3ZDBmNDtcXG4gIHBhZGRpbmc6MTBweDtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzhjYjdmNztcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMTBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqL1xcbi8qICBIZWFkZXIgTWVudSAgICovXFxuLyoqKioqKioqKioqKioqKioqKi9cXG4jaGVhZGVye1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIGNvbG9yOiAjRkZGO1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4jaGVhZGVyIGF7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG5cXG4uZW50cnl7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lbnRyeTpob3ZlcntcXG4gIGNvbG9yOiAjODJiMGVkO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKi9cXG4vKiAgUm9vdCBTd2l0Y2hpbmcgICAqL1xcbi8qKioqKioqKioqKioqKioqKioqKiovXFxuXFxuI3NlbGVjdFJvb3RXcmFwcGVye1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYmFja2dyb3VuZDogIzAwMDtcXG4gIG9wYWNpdHk6IDAuODU7XFxufVxcblxcbiNzZWxlY3RSb290e1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgbWFyZ2luOiAyNXZoIGF1dG87XFxufVxcblxcbiNpbnB1dFJvb3R7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTAlO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG59XFxuXFxuc2VsZWN0e1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5idXR0b25ze1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYnV0dG9ue1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkzZDg5YztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzYzVkNjI7XFxuICBjb2xvcjogIzAwMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sYWJlbHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxLjNlbTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi8qKioqKioqKioqKioqKioqKiovXFxuLyogUERGIFJlbmRlciBCb3ggKi9cXG4vKioqKioqKioqKioqKioqKioqL1xcbiNwZGZvYmplY3RXcmFwcGVye1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogOTAlO1xcbiAgdG9wOiA1JTtcXG4gIGxlZnQ6IDUlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4jcGRmb2JqZWN0e1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBPdmVybGF5IHdoZW4gdXNlciB3YWl0ICovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqL1xcblxcbiN3YWl0e1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRvcDogMDtcXG4gIGN1cnNvcjp3YWl0O1xcbn1cXG5cXG4jd2FpdCBzcGFue1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIHRvcDogNDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6I0ZGRjtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBNZXNzYWdlIGJvYyBsZWZ0IGJvdHRvbSAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI21lc3NhZ2V7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvdHRvbTogMjBweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlbW8uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZW1vLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImNvbnN0IENPTlNUX0xFRlRfTUFSR0lOID0gMjA7IC8vIGxlZnQgbWFyZ2luXG5jb25zdCBDT05TVF9UT1BfTUFSR0lOID0gMjA7IC8vIHRvcCBtYXJnaW5cbmNvbnN0IENPTlNUX1dJRFRIX1BBRERJTkcgPSAxMDsgLy8gaG9yaXpvbnRhbCBwYWRkaW5nIGJldHdlZW4gYm94XG5jb25zdCBDT05TVF9IRUlHSFRfUEFERElORyA9IDMwOyAvLyB2ZXJ0aWNhbCBwYWRkaW5nIGJldHdlZW4gYm94XG5jb25zdCBDT05TVF9XSURUSCA9IDIwMDsgLy93aWR0aCBvZiBib3ggaW4gcHhcbmNvbnN0IENPTlNUX0hFSUdIVCA9IDc1OyAvL2hlaWdodCBvZiBib3ggaW4gcHhcbmNvbnN0IENPTlNUX1dJRFRIX1YgPSA5NTsgLy93aWR0aCBvZiBib3ggaW4gcHhcbmNvbnN0IENPTlNUX0hFSUdIVF9WID0gMTUwOyAvL2hlaWdodCBvZiBib3ggaW4gcHhcbmV4cG9ydCBjbGFzcyBCb3hBYnN0cmFjdCB7XG4gICAgY29uc3RydWN0b3Ioc29zYVdyYXBwZXIsIG1heEdlbmVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5tYXhHZW5lcmF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3NhID0gbnVsbDtcbiAgICAgICAgdGhpcy54ID0gbnVsbDtcbiAgICAgICAgdGhpcy55ID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXhHZW5lcmF0aW9uID0gbWF4R2VuZXJhdGlvbjtcbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uID0gc29zYVdyYXBwZXIuZ2VuZXJhdGlvbjtcbiAgICAgICAgdGhpcy5zb3NhID0gc29zYVdyYXBwZXIuc29zYTtcbiAgICAgICAgdGhpcy54ID0gMDtcbiAgICAgICAgdGhpcy55ID0gMDtcbiAgICAgICAgLy9sZXQgZGlmZlNvc2FUb3BHZW4gPSB0aGlzLmdldFNvc2FPZk1heEZhdGhlcigpIC0gdGhpcy5nZXRNaW5Tb3NhT2ZHZW5lcmF0aW9uKClcbiAgICAgICAgLy9sZXQgZGlmZkdlbiA9IG1heEdlbmVyYXRpb24gLSBnZW5lcmF0aW9uXG4gICAgICAgIC8vQ2FsY3VsIHggJiB5IHZhbHVlc1xuICAgICAgICAvL3RoaXMueCA9IGRpZmZTb3NhVG9wR2VuICogKHRoaXMud2lkdGgoKSArIHRoaXMud2lkdGhQYWRkaW5nKCkpICsgdGhpcy5sZWZ0TWFyZ2luKClcbiAgICAgICAgLy90aGlzLnkgPSBkaWZmR2VuICogKHRoaXMuaGVpZ2h0KCkgKyB0aGlzLmhlaWdodFBhZGRpbmcoKSkgKyB0aGlzLmxlZnRNYXJnaW4oKVxuICAgIH1cbiAgICBzZXRYKHZhbHVlKSB7XG4gICAgICAgIHRoaXMueCA9IHZhbHVlO1xuICAgIH1cbiAgICBzZXRZKHZhbHVlKSB7XG4gICAgICAgIHRoaXMueSA9IHZhbHVlO1xuICAgIH1cbiAgICBzaGlmdFJpZ2h0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMueCArPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0U29zYU9mTWF4RmF0aGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3NhICogTWF0aC5wb3coMiwgdGhpcy5tYXhHZW5lcmF0aW9uIC0gdGhpcy5nZW5lcmF0aW9uKTtcbiAgICB9XG4gICAgZ2V0TWluU29zYU9mR2VuZXJhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucG93KDIsICh0aGlzLmdlbmVyYXRpb24gLSAxKSk7XG4gICAgfVxuICAgIGdldFgoKSB7IHJldHVybiB0aGlzLng7IH1cbiAgICBnZXRZKCkgeyByZXR1cm4gdGhpcy55OyB9XG4gICAgc3RhdGljIGxlZnRNYXJnaW4oKSB7IHJldHVybiBDT05TVF9MRUZUX01BUkdJTjsgfVxuICAgIHN0YXRpYyB0b3BNYXJnaW4oKSB7IHJldHVybiBDT05TVF9UT1BfTUFSR0lOOyB9XG4gICAgc3RhdGljIHdpZHRoUGFkZGluZygpIHsgcmV0dXJuIENPTlNUX1dJRFRIX1BBRERJTkc7IH1cbiAgICBzdGF0aWMgaGVpZ2h0UGFkZGluZygpIHsgcmV0dXJuIENPTlNUX0hFSUdIVF9QQURESU5HOyB9XG59XG5leHBvcnQgY2xhc3MgQm94IGV4dGVuZHMgQm94QWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKHNvc2FXcmFwcGVyLCBtYXhHZW5lcmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKHNvc2FXcmFwcGVyLCBtYXhHZW5lcmF0aW9uKTtcbiAgICAgICAgLy9GSVhNRSBwb3N0IFRTIDogY29kZSB1bnVzZWRcbiAgICAgICAgbGV0IGRpZmZTb3NhVG9wR2VuID0gdGhpcy5nZXRTb3NhT2ZNYXhGYXRoZXIoKSAtIHRoaXMuZ2V0TWluU29zYU9mR2VuZXJhdGlvbigpO1xuICAgICAgICAvL1RPRE8gdmVyaWZ5IHRoaXMgbGluZSBiZWxvdyBhZnRlciBzd3RjaGluZyB0byBUU1xuICAgICAgICAvL2xldCBkaWZmU29zYVRvcEdlbiA9IHRoaXMuZ2V0U29zYU9mTWF4RmF0aGVyKHNvc2FXcmFwcGVyLmdldFNvc2EoKSkgLSB0aGlzLmdldE1pblNvc2FPZkdlbmVyYXRpb24obWF4R2VuZXJhdGlvbilcbiAgICAgICAgbGV0IGRpZmZHZW4gPSBtYXhHZW5lcmF0aW9uIC0gdGhpcy5nZW5lcmF0aW9uO1xuICAgICAgICAvL0NhbGN1bCB4ICYgeSB2YWx1ZXNcbiAgICAgICAgLy90aGlzLnggPSAgZGlmZlNvc2FUb3BHZW4gKiAodGhpcy53aWR0aCgpICsgdGhpcy53aWR0aFBhZGRpbmcoKSkgKyB0aGlzLmxlZnRNYXJnaW4oKVxuICAgICAgICAvL3RoaXMueSA9IGRpZmZHZW4gKiAodGhpcy5oZWlnaHQoKSArIHRoaXMuaGVpZ2h0UGFkZGluZygpKSArIHRoaXMubGVmdE1hcmdpbigpXG4gICAgfVxuICAgIGdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB7IFwieFwiOiB0aGlzLnggKyBCb3gud2lkdGgoKSAvIDIsIFwieVwiOiB0aGlzLnkgKyBCb3guaGVpZ2h0KCkgfTtcbiAgICB9XG4gICAgZ2V0VG9wSnVuY3Rpb25Qb2ludCgpIHtcbiAgICAgICAgcmV0dXJuIHsgXCJ4XCI6IHRoaXMueCArIEJveC53aWR0aCgpIC8gMiwgXCJ5XCI6IHRoaXMueSB9O1xuICAgIH1cbiAgICBzdGF0aWMgd2lkdGgoKSB7IHJldHVybiBDT05TVF9XSURUSDsgfVxuICAgIHN0YXRpYyBoZWlnaHQoKSB7IHJldHVybiBDT05TVF9IRUlHSFQ7IH1cbn1cbmV4cG9ydCBjbGFzcyBCb3hWIGV4dGVuZHMgQm94QWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKHNvc2FXcmFwcGVyLCBtYXhHZW5lcmF0aW9uKSB7XG4gICAgICAgIHN1cGVyKHNvc2FXcmFwcGVyLCBtYXhHZW5lcmF0aW9uKTtcbiAgICAgICAgLy9GSVhNRSBwb3N0IFRTIDogY29kZSB1bnVzZWRcbiAgICAgICAgbGV0IG1hcmdpbl9ib3R0b20gPSAoQm94QWJzdHJhY3QuaGVpZ2h0UGFkZGluZygpICsgQm94Vi5oZWlnaHQoKSkgKiA1O1xuICAgICAgICAvL3RoaXMuQ09OU1RfTEVGVF9NQVJHSU4gPSAyMCAvLyBsZWZ0IG1hcmdpblxuICAgICAgICAvL3RoaXMuQ09OU1RfV0lEVEhfUEFERElORyA9IDEwIC8vIGhvcml6b250YWwgcGFkZGluZyBiZXR3ZWVuIGJveFxuICAgICAgICAvL3RoaXMuQ09OU1RfSEVJR0hUX1BBRERJTkcgPSAzMCAvLyB2ZXJ0aWNhbCBwYWRkaW5nIGJldHdlZW4gYm94XG4gICAgICAgIC8vdGhpcy5DT05TVF9XSURUSCA9IDUwIC8vd2lkdGggb2YgYm94IGluIHB4XG4gICAgICAgIC8vdGhpcy5DT05TVF9IRUlHSFQgPSAxNTAgLy9oZWlnaHQgb2YgYm94IGluIHB4XG4gICAgICAgIGxldCBkaWZmU29zYVRvcEdlbiA9IHRoaXMuZ2V0U29zYU9mTWF4RmF0aGVyKCkgLSB0aGlzLmdldE1pblNvc2FPZkdlbmVyYXRpb24oKTtcbiAgICAgICAgbGV0IGRpZmZHZW4gPSBtYXhHZW5lcmF0aW9uIC0gdGhpcy5nZW5lcmF0aW9uO1xuICAgICAgICAvL0NhbGN1bCB4ICYgeSB2YWx1ZXNcbiAgICAgICAgLy90aGlzLnggPSAgZGlmZlNvc2FUb3BHZW4gKiAodGhpcy53aWR0aCgpICsgdGhpcy53aWR0aFBhZGRpbmcoKSkgKyB0aGlzLmxlZnRNYXJnaW4oKVxuICAgICAgICAvL3RoaXMueSA9IChkaWZmR2VuIC0gNSkgKiAodGhpcy5oZWlnaHQoKSArIHRoaXMuaGVpZ2h0UGFkZGluZygpKSArIHRoaXMubGVmdE1hcmdpbigpICsgbWFyZ2luX2JvdHRvbVxuICAgICAgICAvLyAgd2lkdGgoKXtyZXR1cm4gNTA7fSAvL3dpZHRoIG9mIGJveCBpbiBweFxuICAgICAgICAvLyAgICBoZWlnaHQoKXtyZXR1cm4gMTUwO30gLy9oZWlnaHQgb2YgYm94IGluIHB4XG4gICAgfVxuICAgIGdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB7IFwieFwiOiB0aGlzLnggKyBCb3hWLndpZHRoKCkgLyAyLCBcInlcIjogdGhpcy55ICsgQm94Vi5oZWlnaHQoKSB9O1xuICAgIH1cbiAgICBnZXRUb3BKdW5jdGlvblBvaW50KCkge1xuICAgICAgICByZXR1cm4geyBcInhcIjogdGhpcy54ICsgQm94Vi53aWR0aCgpIC8gMiwgXCJ5XCI6IHRoaXMueSB9O1xuICAgIH1cbiAgICAvL05vdCByZWFkeSBmb3IgYSBwcm9kdWN0aW9uIHVzZVxuICAgIC8vc3RhdGljIHdpZHRoKCl7cmV0dXJuIENPTlNUX1dJRFRIX1Z9XG4gICAgLy9zdGF0aWMgaGVpZ2h0KCl7cmV0dXJuIENPTlNUX0hFSUdIVF9WfVxuICAgIHN0YXRpYyB3aWR0aCgpIHsgcmV0dXJuIENPTlNUX1dJRFRIOyB9XG4gICAgc3RhdGljIGhlaWdodCgpIHsgcmV0dXJuIENPTlNUX0hFSUdIVDsgfVxufVxuIiwiaW1wb3J0IHsgVmlydHVhbEdyaWRFbnRyeSwgU29zYVdyYXBwZXIgfSBmcm9tIFwiLi9zdHJ1Y3QuY2xhc3NcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCB7IEJveCwgQm94QWJzdHJhY3QsIEJveFYgfSBmcm9tIFwiLi9Cb3guY2xhc3NcIjtcbi8qKlxuICpcbiAqIEBwYXJhbSBzb3NhV3JhcHBlciB0aGUgc29zYSBXcmFwcGVyIGFsd2F5cyBzdGFydGluZyBieSAxXG4gKiBAcGFyYW0gZ2VkVGVjaElkIHRoZSB0ZWNobmljYWwgaW5kZXggY29kZSBpbnNpZGUgdGhlIEdFRENPTSBmaWxlLCBjYW4gYmUgIT0gMSB0aGUgZmlyc3QgdGltZSAuIE5vdCB0aGUgU09TQVxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlR3JpZChzb3NhV3JhcHBlciwgZ2VkVGVjaElkKSB7XG4gICAgLy9Bdm9pZCB1bmVjZXNzYXJ5IHByb2Nlc3NpbmdcbiAgICBpZiAoIVN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5oYXMoZ2VkVGVjaElkKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJnZWRUZWNoSWQgJW8gTm90IGZvdW5kIGluICdtYXAgR2VkVGVjaElkIFRvIEluZGl2aWR1YWwnLiBTb3NhIHdhcyAlb1wiLCBnZWRUZWNoSWQsIHNvc2FXcmFwcGVyLnNvc2EpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpbmRpdmlkdWFsID0gU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLmdldChnZWRUZWNoSWQpO1xuICAgIGxldCBjdXJTb3NhID0gc29zYVdyYXBwZXIuc29zYTtcbiAgICBsZXQgY3VyR2VuID0gc29zYVdyYXBwZXIuZ2VuZXJhdGlvbjtcbiAgICAvL2NvbnNvbGUuaW5mbyhjdXJTb3NhLGdlZFRlY2hJZCwgaW5kaXZpZHVhbC5pZClcbiAgICAvL0xpbWl0YXRpb25cbiAgICBpZiAoY3VyR2VuID4gU3RvcmUuZ2VuZXJhdGlvbk1heCkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJ0aGUgU3RvcmUuZ2VuZXJhdGlvbk1heCBsaW1pdGUgb2YgJW8gd2FzIHJlYWNoZWQuIFNvc2Egd2FzICVvJ1wiLCBTdG9yZS5nZW5lcmF0aW9uTWF4LCBzb3NhV3JhcHBlci5zb3NhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvL1NldCBtYXhTb3NhUHJvY2Vzc2VkXG4gICAgaWYgKGN1clNvc2EgPiBTdG9yZS5ncmlkLm1heFNvc2FQcm9jZXNzZWQpIHtcbiAgICAgICAgU3RvcmUuZ3JpZC5tYXhTb3NhUHJvY2Vzc2VkID0gY3VyU29zYTtcbiAgICAgICAgU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkID0gY3VyR2VuO1xuICAgIH1cbiAgICBpZiAoIVN0b3JlLmdyaWQubWFwR2VuZXJhdGlvblNvc2EuaGFzKGN1ckdlbikpIHtcbiAgICAgICAgU3RvcmUuZ3JpZC5tYXBHZW5lcmF0aW9uU29zYS5zZXQoY3VyR2VuLCBbXSk7XG4gICAgfVxuICAgIFN0b3JlLmdyaWQubWFwR2VuZXJhdGlvblNvc2EuZ2V0KGN1ckdlbikucHVzaChjdXJTb3NhKTtcbiAgICAvL0Nhc2Ugb2YgSW1wbGV4ZVxuICAgIGlmIChTdG9yZS5ncmlkLnBvc2l0aW9uUHJvY2Vzc2VkLmluZGV4T2YoZ2VkVGVjaElkKSAhPT0gLTEpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcImltcGxleGUgZGV0ZWN0ZWQgd2l0aCBnZWRUZWNoSWQgJW8uIFNvc2Egd2FzICVvXCIsIGdlZFRlY2hJZCwgc29zYVdyYXBwZXIuc29zYSk7XG4gICAgICAgIC8vVE9ETyBtYXliZSBhIGN1c3RvbWl6ZWQgYm94IHdpdGgvd2l0aG91dCBwYXJlbnRcbiAgICAgICAgLy8gcmV0dXJuXG4gICAgfVxuICAgIFN0b3JlLmdyaWQucG9zaXRpb25Qcm9jZXNzZWQucHVzaChnZWRUZWNoSWQpO1xuICAgIGxldCBwcmV2aW91c1Nvc2FXcmFwcGVyID0gbnVsbDtcbiAgICBpZiAoU3RvcmUuZ3JpZC5tYXBSaWdodFNvc2FCeUdlbmVyYXRpb24uaGFzKGN1ckdlbikpIHtcbiAgICAgICAgbGV0IHByZXZpb3VzU29zYSA9IFN0b3JlLmdyaWQubWFwUmlnaHRTb3NhQnlHZW5lcmF0aW9uLmdldChjdXJHZW4pLnNvc2E7XG4gICAgICAgIC8vIFNldCBcIm5leHRTb3NhV3JhcHBlclwiIG9mIHByZXZpb3VzXG4gICAgICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMocHJldmlvdXNTb3NhKSkge1xuICAgICAgICAgICAgU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHByZXZpb3VzU29zYSkubmV4dFNvc2FXcmFwcGVyID0gc29zYVdyYXBwZXI7XG4gICAgICAgICAgICBwcmV2aW91c1Nvc2FXcmFwcGVyID0gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHByZXZpb3VzU29zYSkuc29zYVdyYXBwZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3RvcmUuZ3JpZC5tYXBSaWdodFNvc2FCeUdlbmVyYXRpb24uc2V0KGN1ckdlbiwgc29zYVdyYXBwZXIpO1xuICAgIFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LnNldChjdXJTb3NhLCBuZXcgVmlydHVhbEdyaWRFbnRyeShzb3NhV3JhcHBlciwgaW5kaXZpZHVhbCwgcHJldmlvdXNTb3NhV3JhcHBlcikpO1xuICAgIC8vUHJvY2VzcyBoaXMgZmF0aGVyIGFuZCBtb3RoZXJzXG4gICAgbGV0IGZhbWlseUlkID0gaW5kaXZpZHVhbC5mYW1jO1xuICAgIGlmIChTdG9yZS5tYXBDb2RlRmFtaWx5LmhhcyhmYW1pbHlJZCkpIHtcbiAgICAgICAgbGV0IGZhbWlseSA9IFN0b3JlLm1hcENvZGVGYW1pbHkuZ2V0KGZhbWlseUlkKTtcbiAgICAgICAgaWYgKGZhbWlseS5mYXRoZXIgIT0gbnVsbCAmJiBmYW1pbHkuZmF0aGVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcG9wdWxhdGVHcmlkKG5ldyBTb3NhV3JhcHBlcihzb3NhV3JhcHBlci5zb3NhRmF0aGVyKSwgZmFtaWx5LmZhdGhlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZhbWlseS5tb3RoZXIgIT0gbnVsbCAmJiBmYW1pbHkubW90aGVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcG9wdWxhdGVHcmlkKG5ldyBTb3NhV3JhcHBlcihzb3NhV3JhcHBlci5zb3NhTW90aGVyKSwgZmFtaWx5Lm1vdGhlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwQm94Rm9yR3JpZEVudHJ5KCkge1xuICAgIGxldCBib3ggPSBudWxsO1xuICAgIGxldCBzb3NhV3JhcHBlciA9IG51bGw7XG4gICAgU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZm9yRWFjaCgoZ3JpZEVudHJ5LCBzb3NhKSA9PiB7XG4gICAgICAgIC8vR2VuZXJhdGUgQm94ZXNcbiAgICAgICAgc29zYVdyYXBwZXIgPSBncmlkRW50cnkuc29zYVdyYXBwZXI7XG4gICAgICAgIGlmIChzb3NhV3JhcHBlci5nZW5lcmF0aW9uID4gNSkge1xuICAgICAgICAgICAgYm94ID0gbmV3IEJveFYoc29zYVdyYXBwZXIsIFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZCk7IC8vIFZlcnRpY2FsIEJveFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYm94ID0gbmV3IEJveChzb3NhV3JhcHBlciwgU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkKTsgLy8gQ2xhc3NpYyBib3hcbiAgICAgICAgfVxuICAgICAgICBncmlkRW50cnkuYm94ID0gYm94O1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGNvbXByZXNzQ29udGFpbmVyKHNvc2FXcmFwcGVyKSB7XG4gICAgbGV0IGZhdGhlclggPSAwO1xuICAgIGxldCBtb3RoZXJYID0gMDtcbiAgICBsZXQgbXlzZWxmWCA9IDA7XG4gICAgbGV0IHByZXZpb3VzWCA9IDA7XG4gICAgLy9HZXQgY29tcHJlc3NlZCBwb3NpdGlvbiBvZiBmYXRoZXIgaWYgZXhpc3RzXG4gICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyhzb3NhV3JhcHBlci5zb3NhRmF0aGVyKSkge1xuICAgICAgICBmYXRoZXJYID0gY29tcHJlc3NDb250YWluZXIobmV3IFNvc2FXcmFwcGVyKHNvc2FXcmFwcGVyLnNvc2FGYXRoZXIpKTtcbiAgICB9XG4gICAgLy9HZXQgY29tcHJlc3NlZCBwb3NpdGlvbiBvZiBtb3RoZXIgaWYgZXhpc3RzXG4gICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyhzb3NhV3JhcHBlci5zb3NhTW90aGVyKSkge1xuICAgICAgICBtb3RoZXJYID0gY29tcHJlc3NDb250YWluZXIobmV3IFNvc2FXcmFwcGVyKHNvc2FXcmFwcGVyLnNvc2FNb3RoZXIpKTtcbiAgICB9XG4gICAgLy9SZXRyaXZlIHByZXZpb3VzIGJveCBYLXBvc2l0aW9uKCopIG9uIHRoZSBncmFwaCAob24gdGhlIGxlZnQpXG4gICAgLy8gKiA9PiBpZiBleGlzdCA6IFggcG9zaXRpb24gb2YgcHJldmlvdXMgYm94ZSArIGJveC53aWR0aCgpICsgYm94LndpZHRoUGFkZGluZygpXG4gICAgLy8gICA9PiBpZiBub3QgOiBib3gubGVmdE1hcmdpbigpXG4gICAgcHJldmlvdXNYID0gX2dldFhQb3NpdGlvbk9uTGVmdEJveChzb3NhV3JhcHBlcik7XG4gICAgLy9DYWxjdWwgY3VycmVudCBZIHBvc2l0aW9uIGJhc2VkIG9uXG4gICAgbGV0IG15c2VsZlkgPSBfZ2V0WVBvc2l0aW9uKHNvc2FXcmFwcGVyKTtcbiAgICAvL0lmIHdlIGRvbid0IGhhdmUgcGFyZW50cywgbGV0IHRha2UgcHJldmlvdXNYIHZhbHVlXG4gICAgaWYgKGZhdGhlclggPT0gMCAmJiBtb3RoZXJYID09IDApIHtcbiAgICAgICAgbXlzZWxmWCA9IHByZXZpb3VzWDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vUHJvY2VzcyBvdXIgb3duIHBvc2l0aW9uXG4gICAgICAgIGlmIChmYXRoZXJYID09IDAgfHwgbW90aGVyWCA9PSAwKSB7XG4gICAgICAgICAgICBteXNlbGZYID0gZmF0aGVyWCArIG1vdGhlclg7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBteXNlbGZYID0gTWF0aC5mbG9vcigoZmF0aGVyWCArIG1vdGhlclgpIC8gMik7XG4gICAgICAgIH1cbiAgICAgICAgLy9JZiB0aGVyZSBpcyBhIGNvbmZsaWN0IHdpdGggUHJldmlvdXMgYm94LCByZXN5bmMgYW5jZXN0b3JzIGFuZCBvdXJzZWxmXG4gICAgICAgIGlmIChteXNlbGZYIDwgcHJldmlvdXNYKSB7XG4gICAgICAgICAgICAvL3NwZWNpYWwgY2FzZSA6IDIgZ2VuZXJhdGlvbnMgd2l0aCAhPSBib3hcbiAgICAgICAgICAgIGxldCBzaGlmdCA9IHByZXZpb3VzWCAtIG15c2VsZlg7XG4gICAgICAgICAgICBsZXQgYW5jZXN0b3JzU29zYSA9IF9nZXRBbGxBbmNlc3RvcnNNYXBPZlNvc2FXcmFwcGVyKHNvc2FXcmFwcGVyKTtcbiAgICAgICAgICAgIGxldCBsZW4gPSBhbmNlc3RvcnNTb3NhLmxlbmd0aDtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoYW5jZXN0b3JzU29zYVtpXSkuYm94LnNoaWZ0UmlnaHQoc2hpZnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbXlzZWxmWCA9IHByZXZpb3VzWDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL1NldCBvdXIgb3duIFgvWSB2YWx1ZVxuICAgIFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldChzb3NhV3JhcHBlci5zb3NhKS5ib3guc2hpZnRSaWdodChteXNlbGZYKTtcbiAgICBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoc29zYVdyYXBwZXIuc29zYSkuYm94LnNldFkobXlzZWxmWSk7XG4gICAgLy9SZXR1cm4gb3VyIG93biB2YWx1ZVxuICAgIHJldHVybiBteXNlbGZYO1xufVxuZnVuY3Rpb24gX2dldFlQb3NpdGlvbihzb3NhV3JhcHBlcikge1xuICAgIC8vSWYgaXQncyBhbHJlYWR5IGNhbGN1bGF0ZWRcbiAgICBpZiAoU3RvcmUuZ3JpZC5tYXBHZW5lcmF0aW9uWVBvc2l0aW9uLmhhcyhzb3NhV3JhcHBlci5nZW5lcmF0aW9uKSkge1xuICAgICAgICByZXR1cm4gU3RvcmUuZ3JpZC5tYXBHZW5lcmF0aW9uWVBvc2l0aW9uLmdldChzb3NhV3JhcHBlci5nZW5lcmF0aW9uKTtcbiAgICB9XG4gICAgbGV0IHkgPSAwO1xuICAgIC8vTGV0J3MgY2FsY3VsYXRlIGl0XG4gICAgaWYgKHNvc2FXcmFwcGVyLmdlbmVyYXRpb24gPiA1KSB7XG4gICAgICAgIC8vIE51bWJlciBvZiBnZW5lcmF0aW9uIGFib3ZlIG1lICogdG90YWwgaGVpZ2h0IG9mIGJveFZcbiAgICAgICAgeSA9IChTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQgLSBzb3NhV3JhcHBlci5nZW5lcmF0aW9uKSAqIChCb3hWLmhlaWdodCgpICsgQm94Vi5oZWlnaHRQYWRkaW5nKCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gTnVtYmVyIG9mIGdlbmVyYXRpb24gKD41KSBhYm92ZSBtZSAqIHRvdGFsIGhlaWdodCBvZiBib3hWXG4gICAgICAgIC8vICArIE51bWJlciBvZiBnZW5lcmF0aW9uIChtYXggNSkgYWJvdmUgbWUgKiB0b3RhbCBoZWlnaHQgb2YgYm94XG4gICAgICAgIGlmIChTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQgPiA1KSB7XG4gICAgICAgICAgICB5ID0gKFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZCAtIDUpICogKEJveFYuaGVpZ2h0KCkgKyBCb3hWLmhlaWdodFBhZGRpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgeSArPSAoTWF0aC5taW4oNSwgU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkKSAtIHNvc2FXcmFwcGVyLmdlbmVyYXRpb24pICogKEJveC5oZWlnaHQoKSArIEJveC5oZWlnaHRQYWRkaW5nKCkpO1xuICAgIH1cbiAgICB5ICs9IEJveEFic3RyYWN0LnRvcE1hcmdpbigpO1xuICAgIFN0b3JlLmdyaWQubWFwR2VuZXJhdGlvbllQb3NpdGlvbi5zZXQoc29zYVdyYXBwZXIuZ2VuZXJhdGlvbiwgeSk7XG4gICAgcmV0dXJuIHk7XG59XG5mdW5jdGlvbiBfZ2V0WFBvc2l0aW9uT25MZWZ0Qm94KHNvc2FXcmFwcGVyKSB7XG4gICAgbGV0IHdpZHRoUGx1c1dpZHRoUGFkZGluZyA9IDA7XG4gICAgbGV0IGxlZnRNYXJnaW4gPSAwO1xuICAgIGlmIChzb3NhV3JhcHBlci5nZW5lcmF0aW9uID4gNSkge1xuICAgICAgICB3aWR0aFBsdXNXaWR0aFBhZGRpbmcgPSBCb3hWLndpZHRoKCkgKyBCb3hWLndpZHRoUGFkZGluZygpO1xuICAgICAgICBsZWZ0TWFyZ2luID0gQm94Vi5sZWZ0TWFyZ2luKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3aWR0aFBsdXNXaWR0aFBhZGRpbmcgPSBCb3gud2lkdGgoKSArIEJveC53aWR0aFBhZGRpbmcoKTtcbiAgICAgICAgbGVmdE1hcmdpbiA9IEJveC5sZWZ0TWFyZ2luKCk7XG4gICAgfVxuICAgIGxldCBwcmV2aW91c1Nvc2FXcmFwcGVyID0gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHNvc2FXcmFwcGVyLnNvc2EpLnByZXZpb3VzU29zYVdyYXBwZXI7XG4gICAgaWYgKHByZXZpb3VzU29zYVdyYXBwZXIgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldChwcmV2aW91c1Nvc2FXcmFwcGVyLnNvc2EpLmJveC5nZXRYKCkgKyB3aWR0aFBsdXNXaWR0aFBhZGRpbmc7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gbGVmdE1hcmdpbjtcbiAgICB9XG59XG4vKipcbiAqIFJldHVybiBhIE1hcCB3aXRoIGFsbCBBbmNlc3RvcnMgb2YgYSBTb3NhV3JhcHBlclxuICovXG5mdW5jdGlvbiBfZ2V0QWxsQW5jZXN0b3JzTWFwT2ZTb3NhV3JhcHBlcihzb3NhV3JhcHBlcikge1xuICAgIGxldCBhcnJheSA9IFtdO1xuICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYSkpIHtcbiAgICAgICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyhzb3NhV3JhcHBlci5zb3NhRmF0aGVyKSkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChzb3NhV3JhcHBlci5zb3NhRmF0aGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuaGFzKHNvc2FXcmFwcGVyLnNvc2FNb3RoZXIpKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKHNvc2FXcmFwcGVyLnNvc2FNb3RoZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheS5jb25jYXQoX2dldEFsbEFuY2VzdG9yc01hcE9mU29zYVdyYXBwZXIobmV3IFNvc2FXcmFwcGVyKHNvc2FXcmFwcGVyLnNvc2FGYXRoZXIpKSwgX2dldEFsbEFuY2VzdG9yc01hcE9mU29zYVdyYXBwZXIobmV3IFNvc2FXcmFwcGVyKHNvc2FXcmFwcGVyLnNvc2FNb3RoZXIpKSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbn1cbiIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCB7IEZhbWlseSwgSW5kaXZpZHVhbCB9IGZyb20gXCIuL3N0cnVjdC5jbGFzc1wiO1xuY29uc3QgUkVHRVhfSU5ESSA9IC9eMCBAST8oWzAtOV0qKUAgSU5ESSQvO1xuY29uc3QgUkVHRVhfTkFNRSA9IC9eMSBOQU1FICguKilcXC8oLiopXFwvJC87XG5jb25zdCBSRUdFWF9GQU1DID0gL14xIEZBTUMgQEY/KFswLTldKylAJC87XG5jb25zdCBSRUdFWF9TRVggPSAvXjEgU0VYIChbRk1dKSQvO1xuY29uc3QgUkVHRVhfRkFNSUxZID0gL14wIEBGPyhbMC05XSopQCBGQU0kLztcbmNvbnN0IFJFR0VYX0hVU0IgPSAvXjEgSFVTQiBAST8oWzAtOV0qKUAkLztcbmNvbnN0IFJFR0VYX1dJRkUgPSAvXjEgV0lGRSBAST8oWzAtOV0qKUAkLztcbmNvbnN0IFJFR0VYX0JJUlRIID0gL14xIEJJUlRbIF0/JC87XG5jb25zdCBSRUdFWF9ERUFUSCA9IC9eMSBERUFUWyBdPyQvO1xuY29uc3QgUkVHRVhfREFURSA9IC9eMiBEQVRFICguKikkLztcbmNvbnN0IFJFR0VYX1BMQUNFID0gL14yIFBMQUMgKC4qKSQvO1xuY29uc3QgUkVHRVhfUkVQTEFDRV9OQU1FID0gL1wiL2c7XG5leHBvcnQgY2xhc3MgR2VkY29tUGFyc2VyIHtcbiAgICBzdGF0aWMgcGFyc2UoZ2VkY29tQ29udGVudCkge1xuICAgICAgICBsZXQgbGluZSA9IG51bGw7XG4gICAgICAgIGxldCBpbmRpdmlkdWFsID0gbnVsbDsgLy8gT25lIEluZGl2aWR1XG4gICAgICAgIGxldCBmYW1pbHkgPSBudWxsOyAvL09uZSBGYW1pbGx5XG4gICAgICAgIGxldCBiaXJ0aEluaXQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGRlYXRoSW5pdCA9IGZhbHNlO1xuICAgICAgICBsZXQgbWF0Y2hlcyA9IG51bGw7XG4gICAgICAgIGxldCBsaW5lcyA9IGdlZGNvbUNvbnRlbnQuc3BsaXQoL1tcXHJcXG5dKy8pO1xuICAgICAgICBsZXQgbGVuID0gbGluZXMubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsaW5lID0gbGluZXNbaV07XG4gICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9JTkRJKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgLy9TYXZlIHByZXZpb3VzIGluZGl2XG4gICAgICAgICAgICAgICAgaWYgKGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5zZXQoaW5kaXZpZHVhbC5pZCwgaW5kaXZpZHVhbCk7XG4gICAgICAgICAgICAgICAgICAgIGJpcnRoSW5pdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBkZWF0aEluaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFN0b3JlLmZpcnN0R2VkVGVjaElkUGFyc2VkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlLmZpcnN0R2VkVGVjaElkUGFyc2VkID0gaW5kaXZpZHVhbC5pZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJbml0aWF0ZSBjbGFzc1xuICAgICAgICAgICAgICAgIGluZGl2aWR1YWwgPSBuZXcgSW5kaXZpZHVhbCgpO1xuICAgICAgICAgICAgICAgIGluZGl2aWR1YWwuaWQgPSBwYXJzZUludChtYXRjaGVzWzFdLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9OQU1FKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGluZGl2aWR1YWwuZmlyc3RuYW1lID0gbWF0Y2hlc1sxXS5yZXBsYWNlKFJFR0VYX1JFUExBQ0VfTkFNRSwgJycpLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmxhc3RuYW1lID0gbWF0Y2hlc1syXS50cmltKCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9GQU1DKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGluZGl2aWR1YWwuZmFtYyA9IHBhcnNlSW50KG1hdGNoZXNbMV0udHJpbSgpKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX1NFWCk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLnNleCA9IG1hdGNoZXNbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfRkFNSUxZKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgLy9TYXZlIHByZXZpb3VzIGZhbWlseVxuICAgICAgICAgICAgICAgIGlmIChmYW1pbHkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBTdG9yZS5tYXBDb2RlRmFtaWx5LnNldChmYW1pbHkuaWQsIGZhbWlseSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEluaXRpYXRlIGFycmF5XG4gICAgICAgICAgICAgICAgZmFtaWx5ID0gbmV3IEZhbWlseSgpO1xuICAgICAgICAgICAgICAgIGZhbWlseS5pZCA9IHBhcnNlSW50KG1hdGNoZXNbMV0udHJpbSgpKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX0hVU0IpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgaW5kaXZpZHVhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZmFtaWx5LmZhdGhlciA9IHBhcnNlSW50KG1hdGNoZXNbMV0udHJpbSgpKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX1dJRkUpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgaW5kaXZpZHVhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZmFtaWx5Lm1vdGhlciA9IHBhcnNlSW50KG1hdGNoZXNbMV0udHJpbSgpKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX0JJUlRIKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGJpcnRoSW5pdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGVhdGhJbml0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9ERUFUSCk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkZWF0aEluaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJpcnRoSW5pdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfREFURSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmlydGhJbml0KSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWwuYmlydGhEYXRlID0gbWF0Y2hlc1sxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlYXRoSW5pdCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmRlYXRoRGF0ZSA9IG1hdGNoZXNbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX1BMQUNFKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChiaXJ0aEluaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5iaXJ0aFBsYWNlID0gbWF0Y2hlc1sxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRlYXRoSW5pdCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmRlYXRoUGxhY2UgPSBtYXRjaGVzWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgY29uc3QgX0hUTUxfRUxFTUVOVF9fRklMRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWxlJyk7XG5leHBvcnQgY29uc3QgX0hUTUxfRUxFTUVOVF9fRk9STSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3gnKTtcbmV4cG9ydCBjb25zdCBfSFRNTF9FTEVNRU5UX19QREZfQUNUSU9OX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZGYxJyk7XG5leHBvcnQgY29uc3QgX0hUTUxfRUxFTUVOVF9fUE5HX0FDVElPTl9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nMScpO1xuZXhwb3J0IGNvbnN0IF9IVE1MX0VMRU1FTlRfX1NWR1dSQVBQRVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ZnV3JhcHBlcicpO1xuZXhwb3J0IGNvbnN0IF9IVE1MX0VMRU1FTlRfX1JPT1RfSU5QVVQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRSb290Jyk7XG5leHBvcnQgY29uc3QgX0hUTUxfRUxFTUVOVF9fUk9PVF9FWEVDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4ZWNSb290Jyk7XG5leHBvcnQgY29uc3QgX0hUTUxfRUxFTUVOVF9fUk9PVF9DQU5DRUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsUm9vdCcpO1xuZXhwb3J0IGNvbnN0IF9IVE1MX0VMRU1FTlRfX1JPT1RfU1dJVENIID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N3aXRjaFJvb3QnKTtcbmV4cG9ydCBjb25zdCBfSFRNTF9FTEVNRU5UX19ST09UX1JFU1VMVFMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0c1Jvb3QnKTtcbmV4cG9ydCBjb25zdCBfSFRNTF9FTEVNRU5UX19ST09UX1NFTEVDVFdSQVBQRVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0Um9vdFdyYXBwZXInKTtcbmV4cG9ydCBjb25zdCBfSFRNTF9FTEVNRU5UX19ST09UX05PUkVTVUxUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vUmVzdWx0Jyk7XG5leHBvcnQgY29uc3QgX0hUTUxfRUxFTUVOVF9fUFJPR1JFU1NCQVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NCYXInKTtcbmV4cG9ydCBjb25zdCBfSFRNTF9FTEVNRU5UX19QUk9HUkVTU0JBUl9TVUIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViUHJvZ3Jlc3NCYXInKTtcbmV4cG9ydCBjb25zdCBfSFRNTF9FTEVNRU5UX19QUk9HUkVTU0JBUl9UWFQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dFByb2dyZXNzQmFyJyk7XG5leHBvcnQgY29uc3QgX0hUTUxfRUxFTUVOVF9fSEVBREVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuZXhwb3J0IGNvbnN0IF9IVE1MX0VMRU1FTlRfX1BERldSQVBQRVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmb2JqZWN0V3JhcHBlcicpO1xuZXhwb3J0IGNvbnN0IF9IVE1MX0VMRU1FTlRfX1BERiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZGZvYmplY3QnKTtcbmV4cG9ydCBjb25zdCBfSFRNTF9FTEVNRU5UX19TVEFSVFRZUEUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnRUeXBlJyk7XG5leHBvcnQgY29uc3QgX0hUTUxfRUxFTUVOVF9fV0FJVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWl0Jyk7XG5leHBvcnQgY29uc3QgX0hUTUxfRUxFTUVOVF9fTUVTU0FHRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XG5leHBvcnQgZnVuY3Rpb24gaGlkZShodG1sRWxlbWVudElkcykge1xuICAgIGh0bWxFbGVtZW50SWRzLmZvckVhY2goaHRtbEVsZW1lbnQgPT4ge1xuICAgICAgICBodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGh0bWxFbGVtZW50SWRzKSB7XG4gICAgaHRtbEVsZW1lbnRJZHMuZm9yRWFjaChodG1sRWxlbWVudCA9PiB7XG4gICAgICAgIGh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IGh0bWwyY2FudmFzIGZyb20gJ2h0bWwyY2FudmFzJztcbmltcG9ydCB7IGhpZGUsIHNob3csIF9IVE1MX0VMRU1FTlRfX1NWR1dSQVBQRVIgYXMgX0hUTUxfRUxFTUVOVF9fU1ZHV1JBUFBFUiwgX0hUTUxfRUxFTUVOVF9fV0FJVCB9IGZyb20gJy4vSHRtbEVsZW1lbnRzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9TdG9yZSc7XG5pbXBvcnQgeyBTVkdSZW5kZXJlciB9IGZyb20gJy4vU1ZHUmVuZGVyZXInO1xuLyoqXG4gKiBHZW5lcmF0ZSBhIHNjcmVlbnNob3QgZnJvbSB0aGUgY2hhcnQgYW5kIHNhdmUgaXQgb24gY29tcHV0ZXIgYXMgYSBwbmcgaW1hZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRha2VzaG90KCkge1xuICAgIHNob3coW19IVE1MX0VMRU1FTlRfX1dBSVRdKTtcbiAgICBsZXQgY29tcCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKF9IVE1MX0VMRU1FTlRfX1NWR1dSQVBQRVIpO1xuICAgIGxldCB3ID0gY29tcC5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpO1xuICAgIGxldCBoID0gY29tcC5nZXRQcm9wZXJ0eVZhbHVlKCdoZWlnaHQnKTtcbiAgICBsZXQgdmlld2JveCA9IFNWR1JlbmRlcmVyLmNvbnRhaW5lci52aWV3Ym94KCk7XG4gICAgbGV0IHpvb20gPSBTVkdSZW5kZXJlci5jb250YWluZXIuem9vbSgpO1xuICAgIF9IVE1MX0VMRU1FTlRfX1NWR1dSQVBQRVIuc3R5bGUud2lkdGggPSBTdG9yZS5wb3NpdGlvblhNYXggKyAncHgnO1xuICAgIF9IVE1MX0VMRU1FTlRfX1NWR1dSQVBQRVIuc3R5bGUuaGVpZ2h0ID0gU3RvcmUucG9zaXRpb25ZTWF4ICsgJ3B4JztcbiAgICBTVkdSZW5kZXJlci5jb250YWluZXJcbiAgICAgICAgLnZpZXdib3goMCwgMCwgU3RvcmUucG9zaXRpb25YTWF4LCBTdG9yZS5wb3NpdGlvbllNYXgpXG4gICAgICAgIC5zaXplKFN0b3JlLnBvc2l0aW9uWE1heCwgU3RvcmUucG9zaXRpb25ZTWF4KVxuICAgICAgICAuem9vbSgxKTtcbiAgICBodG1sMmNhbnZhcyhfSFRNTF9FTEVNRU5UX19TVkdXUkFQUEVSLCB7XG4gICAgICAgIGlnbm9yZUVsZW1lbnRzOiBmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucygndG9FeGNsdWRlRnJvbVNuYXBzaG90Jyk7IH0sXG4gICAgICAgIGxvZ2dpbmc6IGZhbHNlXG4gICAgfSkudGhlbihmdW5jdGlvbiAoY2FudmFzKSB7XG4gICAgICAgIGNhbnZhcy50b0Jsb2IoZnVuY3Rpb24gKGJsb2IpIHtcbiAgICAgICAgICAgIGRvd25sb2FkKGJsb2IsIFwiLnBuZ1wiKTtcbiAgICAgICAgfSk7XG4gICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIGhpZGUoW19IVE1MX0VMRU1FTlRfX1dBSVRdKTtcbiAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyXG4gICAgICAgICAgICAudmlld2JveCh2aWV3Ym94KVxuICAgICAgICAgICAgLnNpemUodywgaClcbiAgICAgICAgICAgIC56b29tKHpvb20pO1xuICAgICAgICBfSFRNTF9FTEVNRU5UX19TVkdXUkFQUEVSLnN0eWxlLndpZHRoID0gXCJcIjtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fU1ZHV1JBUFBFUi5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgIH0pO1xufVxuLyoqXG4gKiBJbXBsZW1lbnQgYSBjdXN0b20gZG93bmxvYWQgZmlsZVxuICogQHBhcmFtIGJsb2IgdGhlIGJpbmFyaWVzIHRvIGRvd25sb2FkXG4gKiBAcGFyYW0gZXh0ZW5zaW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgZmlsZVxuICovXG5mdW5jdGlvbiBkb3dubG9hZChibG9iLCBleHRlbnNpb25OYW1lKSB7XG4gICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgdmFyIGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gdXJsO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IFwiZ2VkY29tX1wiXG4gICAgICAgICsgdG9ZWVlZTU1ERF9oaG1tKG5ldyBEYXRlKCkpXG4gICAgICAgICsgZXh0ZW5zaW9uTmFtZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspO1xufVxuLyoqXG4gKiBSZXR1cm4gdGhlIGRhdGUgdG8gYSBzdHJpbmcgdmFsaWRhdGluZyB0aGUgZm9ybWF0IFlZWVlNTUREX0hIbW1cbiAqIEBwYXJhbSBkYXRlIHRoZSBkYXRlIHRvIHBhcnNlIGludG8gYSBJU08gZGF0ZSBmb3JtYXQgWVlZWU1NRERfSEhtbVxuICogQHJldHVybnMgc3RyaW5nIHRoZSBmb3JtYXQgWVlZWU1NRERfSEhtbVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9ZWVlZTU1ERF9oaG1tKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkucGFkU3RhcnQoNCwgJzAnKVxuICAgICAgICArIChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJylcbiAgICAgICAgKyBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJylcbiAgICAgICAgKyAnXydcbiAgICAgICAgKyBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgICAgICsgZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xufVxuIiwiZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIExvZ2dlci50aW1lclN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgTG9nZ2VyLnRpbWVyU3RlcCA9IERhdGUubm93KCk7XG4gICAgfVxuICAgIHN0YXRpYyBsb2cobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UgKyBcIiBtcyBlbGFwc2VkID0gXCIgKyAoRGF0ZS5ub3coKSAtIExvZ2dlci50aW1lclN0ZXApICsgXCJtc1wiICsgXCIgLyBcIiArIChEYXRlLm5vdygpIC0gTG9nZ2VyLnRpbWVyU3RhcnQpICsgXCJtc1wiKTtcbiAgICAgICAgTG9nZ2VyLnRpbWVyU3RlcCA9IERhdGUubm93KCk7XG4gICAgfVxufVxuTG9nZ2VyLnRpbWVyU3RhcnQgPSBudWxsO1xuTG9nZ2VyLnRpbWVyU3RlcCA9IG51bGw7XG4iLCJpbXBvcnQgJ0Bzdmdkb3Rqcy9zdmcucGFuem9vbS5qcyc7XG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IHsgc3ZnMnBkZiB9IGZyb20gXCJzdmcycGRmLmpzXCI7XG5pbXBvcnQgeyBoaWRlLCBzaG93LCBfSFRNTF9FTEVNRU5UX19QREYsIF9IVE1MX0VMRU1FTlRfX1BERldSQVBQRVIsIF9IVE1MX0VMRU1FTlRfX1dBSVQgfSBmcm9tICcuL0h0bWxFbGVtZW50cyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBTVkdSZW5kZXJlciB9IGZyb20gXCIuL1NWR1JlbmRlcmVyXCI7XG5leHBvcnQgY29uc3QgUkFUSU9fUFhfMl9DTSA9IDQwOyAvL0RlZmF1bHQgUmF0aW8gcHggPT4gY21cbmNvbnN0IFBERl9IQVJEX0xJTUlUID0gNTA4MDsgLy9QREYgaXMgbGltaXRlZCB0byA1MDgwIG1tIG1heCBodHRwczovL2dpdGh1Yi5jb20vcGFyYWxsYXgvanNQREYvaXNzdWVzLzcwNVxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUGRmKCkge1xuICAgIHNob3coW19IVE1MX0VMRU1FTlRfX1dBSVRdKTtcbiAgICBwZGZWaWV3Qm94KCk7XG4gICAgY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic3ZnXCIpWzBdO1xuICAgIC8vU2hvdyBXcmFwcGVyXG4gICAgc2hvdyhbX0hUTUxfRUxFTUVOVF9fUERGV1JBUFBFUl0pO1xuICAgIGxldCBvcmllbnRhdGlvbiA9ICdsJztcbiAgICBpZiAoU3RvcmUucG9zaXRpb25ZTWF4ID4gU3RvcmUucG9zaXRpb25YTWF4KSB7XG4gICAgICAgIG9yaWVudGF0aW9uID0gJ3AnO1xuICAgIH1cbiAgICBsZXQgcmF0aW9Vc2VkID0gUkFUSU9fUFhfMl9DTTtcbiAgICBpZiAob3JpZW50YXRpb24gPT0gJ2wnICYmIFN0b3JlLnBvc2l0aW9uWE1heCAvIFJBVElPX1BYXzJfQ00gKiAxMCA+IFBERl9IQVJEX0xJTUlUKSB7XG4gICAgICAgIHJhdGlvVXNlZCA9IFN0b3JlLnBvc2l0aW9uWE1heCAqIDEwIC8gUERGX0hBUkRfTElNSVQ7XG4gICAgfVxuICAgIGlmIChvcmllbnRhdGlvbiA9PSAncCcgJiYgU3RvcmUucG9zaXRpb25ZTWF4IC8gUkFUSU9fUFhfMl9DTSAqIDEwID4gUERGX0hBUkRfTElNSVQpIHtcbiAgICAgICAgcmF0aW9Vc2VkID0gU3RvcmUucG9zaXRpb25ZTWF4ICogMTAgLyBQREZfSEFSRF9MSU1JVDtcbiAgICB9XG4gICAgY29uc3QgcGRmID0gbmV3IGpzUERGKG9yaWVudGF0aW9uLCAnY20nLCBbU3RvcmUucG9zaXRpb25YTWF4IC8gcmF0aW9Vc2VkLCBTdG9yZS5wb3NpdGlvbllNYXggLyByYXRpb1VzZWRdKTtcbiAgICAvLyByZW5kZXIgdGhlIHN2ZyBlbGVtZW50XG4gICAgc3ZnMnBkZihzdmdFbGVtZW50LCBwZGYsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgd2lkdGg6IFN0b3JlLnBvc2l0aW9uWE1heCAvIHJhdGlvVXNlZCxcbiAgICAgICAgaGVpZ2h0OiBTdG9yZS5wb3NpdGlvbllNYXggLyByYXRpb1VzZWRcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgdXJpID0gcGRmLm91dHB1dCgnZGF0YXVyaXN0cmluZycpO1xuICAgICAgICBpZiAodXJpLmxlbmd0aCA8IDUwMDAwMDApIHtcbiAgICAgICAgICAgIF9IVE1MX0VMRU1FTlRfX1BERi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdXJpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBkZi5zYXZlKCdteVBERi5wZGYnKTtcbiAgICAgICAgfVxuICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBoaWRlKFtfSFRNTF9FTEVNRU5UX19XQUlUXSk7XG4gICAgICAgIC8vUmVzZXQgaW5mb3JtYXRpb24gcG9zdCBwZGYgZ2VuZXJhdGlvblxuICAgICAgICAvL1RPRE8gcmVzdG9yaW5nIHByZXZpb3VzIHBvc2l0aW9uIFxuICAgICAgICBTVkdSZW5kZXJlci5zdmdWaWV3Qm94KCk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcGRmVmlld0JveCgpIHtcbiAgICBsZXQgdyA9IDEwMDtcbiAgICBpZiAoU3RvcmUucG9zaXRpb25YTWF4IC8gd2luZG93LmlubmVyV2lkdGggPCBTdG9yZS5wb3NpdGlvbllNYXggLyB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgdyA9ICh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIChTdG9yZS5wb3NpdGlvbllNYXggKiB3aW5kb3cuaW5uZXJIZWlnaHQgLyB3aW5kb3cuaW5uZXJXaWR0aCkpO1xuICAgIH1cbiAgICBTVkdSZW5kZXJlci5jb250YWluZXJcbiAgICAgICAgLnZpZXdib3goMCwgMCwgU3RvcmUucG9zaXRpb25YTWF4LCBTdG9yZS5wb3NpdGlvbllNYXgpXG4gICAgICAgIC5zaXplKHcgKyAnJScsICcxMDAlJyk7XG59XG4iLCJpbXBvcnQgeyBoaWRlLCBfSFRNTF9FTEVNRU5UX19QUk9HUkVTU0JBUiwgX0hUTUxfRUxFTUVOVF9fUFJPR1JFU1NCQVJfU1VCLCBfSFRNTF9FTEVNRU5UX19QUk9HUkVTU0JBUl9UWFQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudHNcIjtcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciB7XG4gICAgY29uc3RydWN0b3IobmJTdGVwcykge1xuICAgICAgICB0aGlzLm5iU3RlcHMgPSBudWxsO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5uYlN0ZXBzID0gbmJTdGVwcztcbiAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiXCI7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIGluaXRpYXRlUHJvZ3Jlc3NCYXIobWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgbW92aW5nUHJvZ3Jlc3NCYXIobWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwKys7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICAgIGhpZGluZ1Byb2dyZXNzQmFyKCkge1xuICAgICAgICBoaWRlKFtfSFRNTF9FTEVNRU5UX19QUk9HUkVTU0JBUl0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX1BST0dSRVNTQkFSX1NVQi5zdHlsZS53aWR0aCA9IHRoaXMuY3VycmVudFN0ZXAgKiAoMTAwIC8gdGhpcy5uYlN0ZXBzKSArICclJztcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fUFJPR1JFU1NCQVJfVFhULmlubmVySFRNTCA9IHRoaXMubWVzc2FnZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTVkcgfSBmcm9tIFwiQHN2Z2RvdGpzL3N2Zy5qc1wiO1xuaW1wb3J0ICdAc3ZnZG90anMvc3ZnLnBhbnpvb20uanMnO1xuaW1wb3J0IHsgQm94LCBCb3hWIH0gZnJvbSBcIi4vQm94LmNsYXNzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBoaWRlLCBfSFRNTF9FTEVNRU5UX19GT1JNLCBfSFRNTF9FTEVNRU5UX19TVkdXUkFQUEVSIH0gZnJvbSBcIi4vSHRtbEVsZW1lbnRzXCI7XG5leHBvcnQgY2xhc3MgU1ZHUmVuZGVyZXIge1xuICAgIHN0YXRpYyBkcmF3U1ZHKCkge1xuICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXIgPSBTVkcoKS5hZGRUbyhfSFRNTF9FTEVNRU5UX19TVkdXUkFQUEVSKTtcbiAgICAgICAgU1ZHUmVuZGVyZXIuc3ZnVmlld0JveCgpO1xuICAgICAgICBTVkdSZW5kZXJlci5wb2x5bGluZShbMCwgMCwgMCwgU3RvcmUucG9zaXRpb25ZTWF4LCBTdG9yZS5wb3NpdGlvblhNYXgsIFN0b3JlLnBvc2l0aW9uWU1heCwgU3RvcmUucG9zaXRpb25YTWF4LCAwLCAwLCAwXSk7XG4gICAgICAgIFNWR1JlbmRlcmVyLmRyYXdMb29wKDEpO1xuICAgICAgICBoaWRlKFtfSFRNTF9FTEVNRU5UX19GT1JNXSk7XG4gICAgfVxuICAgIHN0YXRpYyBkcmF3TG9vcChnZW5lcmF0aW9uKSB7XG4gICAgICAgIGlmIChnZW5lcmF0aW9uID4gU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNvc2FXcmFwcGVyID0gbnVsbDtcbiAgICAgICAgbGV0IGJveCA9IG51bGw7XG4gICAgICAgIGxldCB3aWR0aCA9IG51bGw7XG4gICAgICAgIGxldCBoZWlnaHQgPSBudWxsO1xuICAgICAgICBsZXQgYmlydGggPSBudWxsO1xuICAgICAgICBsZXQgZGVhdGggPSBudWxsO1xuICAgICAgICBsZXQgeUluY3JlbWVudCA9IG51bGw7XG4gICAgICAgIGxldCB0bXBTdHIgPSBudWxsO1xuICAgICAgICBjb25zdCBuYkNhcjFlbSA9IDI2O1xuICAgICAgICBjb25zdCBuYkNhcjA3ZW0gPSAzNDtcbiAgICAgICAgaWYgKGdlbmVyYXRpb24gPiA1KSB7XG4gICAgICAgICAgICB3aWR0aCA9IEJveFYud2lkdGgoKTtcbiAgICAgICAgICAgIGhlaWdodCA9IEJveFYuaGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aWR0aCA9IEJveC53aWR0aCgpO1xuICAgICAgICAgICAgaGVpZ2h0ID0gQm94LmhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzb3NhcyA9IFN0b3JlLmdyaWQubWFwR2VuZXJhdGlvblNvc2EuZ2V0KGdlbmVyYXRpb24pO1xuICAgICAgICBsZXQgbGVuID0gc29zYXMubGVuZ3RoO1xuICAgICAgICBsZXQga2V5ID0gbnVsbDtcbiAgICAgICAgbGV0IG5hbWUgPSBudWxsO1xuICAgICAgICBsZXQgZ3JpZEVudHJ5ID0gbnVsbDtcbiAgICAgICAgY29uc3QgcmVnZXhCZWZvcmUgPSAvXkJFRi9pO1xuICAgICAgICBjb25zdCByZWdleEFmdGVyID0gL15BRlQvaTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAga2V5ID0gc29zYXNbaV07XG4gICAgICAgICAgICBpZiAoIVN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkgZG9lc24ndCBoYXZlIGtleSAlb1wiLCBrZXkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JpZEVudHJ5ID0gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KGtleSk7XG4gICAgICAgICAgICBzb3NhV3JhcHBlciA9IGdyaWRFbnRyeS5zb3NhV3JhcHBlcjtcbiAgICAgICAgICAgIGJveCA9IGdyaWRFbnRyeS5ib3g7XG4gICAgICAgICAgICBuYW1lID0gZ3JpZEVudHJ5LmZpcnN0bmFtZSArIFwiIFwiICsgZ3JpZEVudHJ5Lmxhc3RuYW1lO1xuICAgICAgICAgICAgeUluY3JlbWVudCA9IDE1O1xuICAgICAgICAgICAgYmlydGggPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGdyaWRFbnRyeS5iaXJ0aERhdGUgIT0gdW5kZWZpbmVkIHx8IGdyaWRFbnRyeS5iaXJ0aFBsYWNlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGJpcnRoICs9IFwiwqRcIjtcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZEVudHJ5LmJpcnRoRGF0ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgYmlydGggKz0gXCIgXCIgKyBncmlkRW50cnkuYmlydGhEYXRlLnJlcGxhY2UocmVnZXhCZWZvcmUsICc8JykucmVwbGFjZShyZWdleEFmdGVyLCAnPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ3JpZEVudHJ5LmJpcnRoUGxhY2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRtcFN0ciA9IGdyaWRFbnRyeS5iaXJ0aFBsYWNlLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgIGJpcnRoICs9IFwiIFwiICsgdG1wU3RyWzBdICsgXCIsIFwiICsgdG1wU3RyWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlYXRoID0gXCJcIjtcbiAgICAgICAgICAgIGlmIChncmlkRW50cnkuZGVhdGhEYXRlICE9IHVuZGVmaW5lZCB8fCBncmlkRW50cnkuZGVhdGhQbGFjZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBkZWF0aCArPSBcIsOXXCI7XG4gICAgICAgICAgICAgICAgaWYgKGdyaWRFbnRyeS5kZWF0aERhdGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYXRoICs9IFwiIFwiICsgZ3JpZEVudHJ5LmRlYXRoRGF0ZS5yZXBsYWNlKHJlZ2V4QmVmb3JlLCAnPCcpLnJlcGxhY2UocmVnZXhBZnRlciwgJz4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGdyaWRFbnRyeS5kZWF0aFBsYWNlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0bXBTdHIgPSBncmlkRW50cnkuZGVhdGhQbGFjZS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgICAgICBkZWF0aCArPSBcIiBcIiArIHRtcFN0clswXSArIFwiLFwiICsgdG1wU3RyWzFdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERlc3NpbiBkZSBsYSBib3hcbiAgICAgICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lci5yZWN0KHdpZHRoLCBoZWlnaHQpXG4gICAgICAgICAgICAgICAgLmZpbGwoJyNlZWUnKVxuICAgICAgICAgICAgICAgIC5tb3ZlKGJveC5nZXRYKCksIGJveC5nZXRZKCkpXG4gICAgICAgICAgICAgICAgLnN0cm9rZSh7IHdpZHRoOiAxLCBjb2xvcjogJyNjY2MnIH0pXG4gICAgICAgICAgICAgICAgLnJhZGl1cygxMCk7XG4gICAgICAgICAgICAvL0ZvciBkZWJ1ZyBvbmx5XG4gICAgICAgICAgICAvL25hbWUgPSAnIycrIGdyaWRFbnRyeS5zb3NhV3JhcHBlci5zb3NhICsgXCIgXCIgKyBuYW1lXG4gICAgICAgICAgICAvL0ZvciBkZWJ1ZyBvbmx5XG4gICAgICAgICAgICAvLzI2IGNhciBpbiBzaXplIDFlbVxuICAgICAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyLnBsYWluKG5hbWUuc3Vic3RyaW5nKDAsIG5iQ2FyMWVtKSkubW92ZShib3guZ2V0WCgpICsgNSwgYm94LmdldFkoKSArIHlJbmNyZW1lbnQpO1xuICAgICAgICAgICAgLy9EcmF3UGRmLmRyYXdTVkcucGxhaW4oc29zYVdyYXBwZXIuZ2V0U29zYSgpICsgXCIgW1wiICsgYm94LmdldFgoKSAgKyAnLycgKyBib3guZ2V0WSgpICsgXCJdXCIpLm1vdmUoYm94LmdldFgoKSArIDUsIGJveC5nZXRZKCkgKyB5SW5jcmVtZW50KVxuICAgICAgICAgICAgeUluY3JlbWVudCArPSAxNTtcbiAgICAgICAgICAgIGlmIChuYW1lLmxlbmd0aCA+IG5iQ2FyMWVtKSB7XG4gICAgICAgICAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyLnBsYWluKG5hbWUuc3Vic3RyaW5nKG5iQ2FyMWVtLCAyICogbmJDYXIxZW0pKS5tb3ZlKGJveC5nZXRYKCkgKyA1LCBib3guZ2V0WSgpICsgeUluY3JlbWVudCk7XG4gICAgICAgICAgICAgICAgeUluY3JlbWVudCArPSAxNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vMzQgY2FyIGluIHNpemUgMC43ZW1cbiAgICAgICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lci5wbGFpbihiaXJ0aC5zdWJzdHJpbmcoMCwgbmJDYXIwN2VtKSkuZm9udCgnc2l6ZScsICcxMCcpLm1vdmUoYm94LmdldFgoKSArIDUsIGJveC5nZXRZKCkgKyB5SW5jcmVtZW50KTtcbiAgICAgICAgICAgIGlmIChiaXJ0aC5sZW5ndGggPiBuYkNhcjA3ZW0pIHtcbiAgICAgICAgICAgICAgICB5SW5jcmVtZW50ICs9IDEwO1xuICAgICAgICAgICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lci5wbGFpbihiaXJ0aC5zdWJzdHJpbmcobmJDYXIwN2VtLCAyICogbmJDYXIwN2VtKSkuZm9udCgnc2l6ZScsICcxMCcpLm1vdmUoYm94LmdldFgoKSArIDUsIGJveC5nZXRZKCkgKyB5SW5jcmVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHlJbmNyZW1lbnQgKz0gMTA7XG4gICAgICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXIucGxhaW4oZGVhdGguc3Vic3RyaW5nKDAsIG5iQ2FyMDdlbSkpLmZvbnQoJ3NpemUnLCAnMTAnKS5tb3ZlKGJveC5nZXRYKCkgKyA1LCBib3guZ2V0WSgpICsgeUluY3JlbWVudCk7XG4gICAgICAgICAgICBpZiAoZGVhdGgubGVuZ3RoID4gbmJDYXIwN2VtKSB7XG4gICAgICAgICAgICAgICAgeUluY3JlbWVudCArPSAxMDtcbiAgICAgICAgICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXIucGxhaW4oZGVhdGguc3Vic3RyaW5nKG5iQ2FyMDdlbSwgMiAqIG5iQ2FyMDdlbSkpLmZvbnQoJ3NpemUnLCAnMTAnKS5tb3ZlKGJveC5nZXRYKCkgKyA1LCBib3guZ2V0WSgpICsgeUluY3JlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1NpIHDDqHJlIGV4aXN0ZSA6IGxpYWlzb25cbiAgICAgICAgICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYUZhdGhlcikpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmF0aGVyID0gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHNvc2FXcmFwcGVyLnNvc2FGYXRoZXIpLmJveDtcbiAgICAgICAgICAgICAgICBsZXQgbWlkZGxlWSA9IChmYXRoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLnkgKyBib3guZ2V0VG9wSnVuY3Rpb25Qb2ludCgpLnkpIC8gMjtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlsaW5lKFtib3guZ2V0VG9wSnVuY3Rpb25Qb2ludCgpLngsIGJveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueSxcbiAgICAgICAgICAgICAgICAgICAgYm94LmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS54LCBtaWRkbGVZLFxuICAgICAgICAgICAgICAgICAgICBmYXRoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLngsIG1pZGRsZVksXG4gICAgICAgICAgICAgICAgICAgIGZhdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueCwgZmF0aGVyLmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS55XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1NpIG3DqHJlIGV4aXN0ZSA6IGxpYWlzb25cbiAgICAgICAgICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYU1vdGhlcikpIHtcbiAgICAgICAgICAgICAgICBsZXQgbW90aGVyID0gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHNvc2FXcmFwcGVyLnNvc2FNb3RoZXIpLmJveDtcbiAgICAgICAgICAgICAgICBsZXQgbWlkZGxlWSA9IChtb3RoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLnkgKyBib3guZ2V0VG9wSnVuY3Rpb25Qb2ludCgpLnkpIC8gMjtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlsaW5lKFtib3guZ2V0VG9wSnVuY3Rpb25Qb2ludCgpLngsIGJveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueSxcbiAgICAgICAgICAgICAgICAgICAgYm94LmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS54LCBtaWRkbGVZLFxuICAgICAgICAgICAgICAgICAgICBtb3RoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLngsIG1pZGRsZVksXG4gICAgICAgICAgICAgICAgICAgIG1vdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueCwgbW90aGVyLmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS55XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2VuZXJhdGlvbisrO1xuICAgICAgICAvL1RPRE8gdmVyaWZpZXIgY2UgY29kZVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0xvb3AoZ2VuZXJhdGlvbik7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cbiAgICBzdGF0aWMgc3ZnVmlld0JveCgpIHtcbiAgICAgICAgLy8gWCBwb3NpdGlvbiBvZiB0aGUgU09TQSAjMVxuICAgICAgICBsZXQgdmlld2JveFggPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoMSkuYm94LmdldFgoKSAtICgod2luZG93LmlubmVyV2lkdGggLSAxMCkgLyAyKSArIEJveC53aWR0aCgpIC8gMjtcbiAgICAgICAgbGV0IHZpZXdib3hZID0gU3RvcmUucG9zaXRpb25ZTWF4IC0gd2luZG93LmlubmVySGVpZ2h0ICsgMTAwO1xuICAgICAgICBpZiAoU3RvcmUucG9zaXRpb25ZTWF4IDwgd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgICAgICB2aWV3Ym94WSA9IChTdG9yZS5wb3NpdGlvbllNYXggLSB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXJcbiAgICAgICAgICAgIC52aWV3Ym94KHZpZXdib3hYLCB2aWV3Ym94WSwgd2luZG93LmlubmVyV2lkdGggLSAxMCwgd2luZG93LmlubmVySGVpZ2h0IC0gMTApXG4gICAgICAgICAgICAuc2l6ZSgnMTAwJScsICcxMDAlJylcbiAgICAgICAgICAgIC5wYW5ab29tKHsgem9vbU1pbjogMC4wMiwgem9vbU1heDogMjAsIHpvb21GYWN0b3I6IDAuMTUgfSlcbiAgICAgICAgICAgIC56b29tKDEpO1xuICAgIH1cbiAgICBzdGF0aWMgcG9seWxpbmUoY29vcmQpIHtcbiAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyLnBvbHlsaW5lKGNvb3JkKVxuICAgICAgICAgICAgLmZpbGwoJ25vbmUnKVxuICAgICAgICAgICAgLnN0cm9rZSh7IHdpZHRoOiAxLCBjb2xvcjogJyMwMDAnIH0pO1xuICAgIH1cbn1cblNWR1JlbmRlcmVyLmNvbnRhaW5lciA9IG51bGw7XG4iLCJpbXBvcnQgeyBWaXJ0dWFsR3JpZCB9IGZyb20gXCIuL3N0cnVjdC5jbGFzc1wiO1xuZXhwb3J0IGNsYXNzIFN0b3JlIHtcbiAgICBzdGF0aWMgaW5pdCgpIHtcbiAgICAgICAgU3RvcmUuZ2VuZXJhdGlvbk1heCA9IDEwMDtcbiAgICAgICAgU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsID0gbmV3IE1hcCgpO1xuICAgICAgICBTdG9yZS5tYXBDb2RlRmFtaWx5ID0gbmV3IE1hcCgpO1xuICAgICAgICBTdG9yZS5maXJzdEdlZFRlY2hJZFBhcnNlZCA9IG51bGw7IC8vIG5lZWQgdG8gYmUgbnVsbFxuICAgICAgICBTdG9yZS5yZXNldEZvclJlZHJhdygpO1xuICAgIH1cbiAgICBzdGF0aWMgcmVzZXRGb3JSZWRyYXcoKSB7XG4gICAgICAgIFN0b3JlLnBvc2l0aW9uWE1heCA9IDA7XG4gICAgICAgIFN0b3JlLnBvc2l0aW9uWU1heCA9IDA7XG4gICAgICAgIFN0b3JlLmdyaWQgPSBuZXcgVmlydHVhbEdyaWQoKTtcbiAgICB9XG59XG5TdG9yZS5nZW5lcmF0aW9uTWF4ID0gMTAwO1xuU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsID0gbnVsbDsgLy8gbWFwIFNvc2EgLyBHZWRjb20gSW5kaXZpZHVzXG5TdG9yZS5tYXBDb2RlRmFtaWx5ID0gbnVsbDsgLy8gbWFwIFNvc2EgLyBHZWRjb20gZmFtaWxsaWVzXG5TdG9yZS5maXJzdEdlZFRlY2hJZFBhcnNlZCA9IG51bGw7IC8vIEZpcnN0IFNvc2EgcHJvY2Vzc2VkIGJ5IHRoZSBwYXJzZXJcblN0b3JlLnBvc2l0aW9uWE1heCA9IDA7XG5TdG9yZS5wb3NpdGlvbllNYXggPSAwO1xuU3RvcmUuZ3JpZCA9IG51bGw7XG4iLCJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9Mb2dnZXJcIjtcbmV4cG9ydCBjbGFzcyBUYXNrT3JjaGVzdHJhdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9ncmVzc0Jhcikge1xuICAgICAgICB0aGlzLnRhc2tzID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IG51bGw7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHByb2dyZXNzQmFyO1xuICAgIH1cbiAgICBhZGQoY29tbWFuZGUsIGFyZ3MsIG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKFtjb21tYW5kZSwgYXJncywgbWVzc2FnZV0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcnVuKCkge1xuICAgICAgICBpZiAodGhpcy50YXNrcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0YXNrQ29tbWFuZGUgPSB0aGlzLnRhc2tzWzBdWzBdOyAvLyBDb21tYW5kZVxuICAgICAgICBsZXQgdGFza0FyZ3MgPSB0aGlzLnRhc2tzWzBdWzFdOyAvLyBBcmdzXG4gICAgICAgIGxldCB0YXNrTWVzc2FnZSA9IHRoaXMudGFza3NbMF1bMl07IC8vIEN1c3RvbSBNZXNzYWdlXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIubW92aW5nUHJvZ3Jlc3NCYXIodGFza01lc3NhZ2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIExvZ2dlci5sb2coXCJTdGFydCBcIiArIHRhc2tNZXNzYWdlKTtcbiAgICAgICAgICAgIHRhc2tDb21tYW5kZSguLi50YXNrQXJncyk7XG4gICAgICAgICAgICBMb2dnZXIubG9nKFwiRW5kIFwiICsgdGFza01lc3NhZ2UpO1xuICAgICAgICAgICAgLy9SZW1vdmUgZmlyc3QgdGFza1xuICAgICAgICAgICAgdGhpcy50YXNrcy5zaGlmdCgpO1xuICAgICAgICAgICAgLy9SZXJ1biBteXNlbGZcbiAgICAgICAgICAgIHRoaXMucnVuKCk7XG4gICAgICAgIH0sIDIwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vYXNzZXRzL2Nzcy9kZW1vLmNzcyc7XG5pbXBvcnQgJy4vYXNzZXRzL2ltZ3MvZG93bmxvYWQucG5nJztcbmltcG9ydCAnLi9hc3NldHMvZ2VkY29tL0hBUElPVF9FbWlsZV9zYW1wbGUuZ2VkJztcbmltcG9ydCB7IFNWR1JlbmRlcmVyIH0gZnJvbSAnLi9TVkdSZW5kZXJlcic7XG5pbXBvcnQgeyBHZWRjb21QYXJzZXIgfSBmcm9tICcuL0dlZGNvbVBhcnNlcic7XG5pbXBvcnQgeyBQcm9ncmVzc0JhciB9IGZyb20gJy4vUHJvZ3Jlc3NCYXIuY2xhc3MnO1xuaW1wb3J0IHsgU29zYVdyYXBwZXIgfSBmcm9tICcuL3N0cnVjdC5jbGFzcyc7XG5pbXBvcnQgeyBUYXNrT3JjaGVzdHJhdG9yIH0gZnJvbSAnLi9UYXNrT3JjaGVzdHJhdG9yLmNsYXNzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi9TdG9yZSc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICcuL0xvZ2dlcic7XG5pbXBvcnQgeyBCb3gsIEJveFYgfSBmcm9tICcuL0JveC5jbGFzcyc7XG5pbXBvcnQgeyBwb3B1bGF0ZUdyaWQsIHNldHVwQm94Rm9yR3JpZEVudHJ5LCBjb21wcmVzc0NvbnRhaW5lciB9IGZyb20gJy4vQ29udGFpbmVyRmFjdG9yeSc7XG5pbXBvcnQgeyBnZW5lcmF0ZVBkZiwgUkFUSU9fUFhfMl9DTSB9IGZyb20gJy4vUERGUmVuZGVyZXInO1xuaW1wb3J0IHsgdGFrZXNob3QgfSBmcm9tICcuL0ltZ1JlbmRlcmVyJztcbmltcG9ydCB7IGhpZGUsIHNob3csIF9IVE1MX0VMRU1FTlRfX0ZJTEUsIF9IVE1MX0VMRU1FTlRfX0ZPUk0sIF9IVE1MX0VMRU1FTlRfX0hFQURFUiwgX0hUTUxfRUxFTUVOVF9fTUVTU0FHRSwgX0hUTUxfRUxFTUVOVF9fUERGV1JBUFBFUiwgX0hUTUxfRUxFTUVOVF9fUERGX0FDVElPTl9CVVRUT04sIF9IVE1MX0VMRU1FTlRfX1BOR19BQ1RJT05fQlVUVE9OLCBfSFRNTF9FTEVNRU5UX19QUk9HUkVTU0JBUiwgX0hUTUxfRUxFTUVOVF9fUk9PVF9DQU5DRUwsIF9IVE1MX0VMRU1FTlRfX1JPT1RfRVhFQywgX0hUTUxfRUxFTUVOVF9fUk9PVF9JTlBVVCwgX0hUTUxfRUxFTUVOVF9fUk9PVF9OT1JFU1VMVCwgX0hUTUxfRUxFTUVOVF9fUk9PVF9SRVNVTFRTLCBfSFRNTF9FTEVNRU5UX19ST09UX1NFTEVDVFdSQVBQRVIsIF9IVE1MX0VMRU1FTlRfX1JPT1RfU1dJVENILCBfSFRNTF9FTEVNRU5UX19TVEFSVFRZUEUsIF9IVE1MX0VMRU1FTlRfX1NWR1dSQVBQRVIgfSBmcm9tICcuL0h0bWxFbGVtZW50cyc7XG5jb25zdCBTT1NBX09ORSA9IG5ldyBTb3NhV3JhcHBlcigxKTtcbnZhciBwcm9ncmVzc0JhciA9IG51bGw7XG52YXIgdGFza09yY2hlc3RyYXRvciA9IG51bGw7XG5mdW5jdGlvbiBpbml0KCkge1xuICAgIF9IVE1MX0VMRU1FTlRfX0ZJTEUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcnVuKF9IVE1MX0VMRU1FTlRfX0ZJTEUuZmlsZXNbMF0pO1xuICAgIH0pO1xuICAgIGxldCBpc0FkdmFuY2VkVXBsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJldHVybiAoKCdkcmFnZ2FibGUnIGluIGRpdikgfHwgKCdvbmRyYWdzdGFydCcgaW4gZGl2ICYmICdvbmRyb3AnIGluIGRpdikpICYmICdGb3JtRGF0YScgaW4gd2luZG93ICYmICdGaWxlUmVhZGVyJyBpbiB3aW5kb3c7XG4gICAgfSgpO1xuICAgIGlmIChpc0FkdmFuY2VkVXBsb2FkKSB7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uY2xhc3NMaXN0LmFkZCgnaGFzLWFkdmFuY2VkLXVwbG9hZCcpO1xuICAgICAgICBsZXQgZnVuY0RyYWcgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGZ1bmNEcmFnT3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uY2xhc3NMaXN0LmFkZCgnaXMtZHJhZ292ZXInKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGZ1bmNEcmFnTGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfSFRNTF9FTEVNRU5UX19GT1JNLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRyYWdvdmVyJyk7XG4gICAgICAgIH07XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZycsIGZ1bmNEcmFnKTtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBmdW5jRHJhZyk7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGZ1bmNEcmFnKTtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmNEcmFnKTtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBmdW5jRHJhZyk7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZnVuY0RyYWcpO1xuICAgICAgICBfSFRNTF9FTEVNRU5UX19GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBmdW5jRHJhZyk7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBmdW5jRHJhZ092ZXIpO1xuICAgICAgICBfSFRNTF9FTEVNRU5UX19GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGZ1bmNEcmFnT3Zlcik7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZnVuY0RyYWdMZWF2ZSk7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGZ1bmNEcmFnTGVhdmUpO1xuICAgICAgICBfSFRNTF9FTEVNRU5UX19GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBmdW5jRHJhZ0xlYXZlKTtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGxldCBkcm9wcGVkRmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHJvcHBlZEZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRyb3BwZWRGaWxlc1tpXVsnbmFtZSddLmVuZHNXaXRoKCcuZ2VkY29tJykgfHwgZHJvcHBlZEZpbGVzW2ldWyduYW1lJ10uZW5kc1dpdGgoJy5nZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBydW4oZHJvcHBlZEZpbGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX0hUTUxfRUxFTUVOVF9fUE5HX0FDVElPTl9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0YWtlc2hvdCk7XG4gICAgX0hUTUxfRUxFTUVOVF9fUERGX0FDVElPTl9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZVBkZik7XG4gICAgX0hUTUxfRUxFTUVOVF9fU1ZHV1JBUFBFUi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGRlUGRmb2JqZWN0V3JhcHBlcik7XG4gICAgX0hUTUxfRUxFTUVOVF9fUk9PVF9JTlBVVC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHR5cGluZ1Jvb3QpO1xuICAgIF9IVE1MX0VMRU1FTlRfX1JPT1RfRVhFQy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVJvb3QpO1xuICAgIF9IVE1MX0VMRU1FTlRfX1JPT1RfQ0FOQ0VMLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsUm9vdCk7XG4gICAgX0hUTUxfRUxFTUVOVF9fUk9PVF9TV0lUQ0guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Um9vdCk7XG59XG5mdW5jdGlvbiBydW4oZmlsZSkge1xuICAgIC8vSW5pdCB0aGUgaW50ZXJuYWwgU3RvcmVcbiAgICBTdG9yZS5pbml0KCk7XG4gICAgLy9Jbml0IHRoZSBMb2dnZXIgc3lzdGVtXG4gICAgTG9nZ2VyLmluaXQoKTtcbiAgICBzaG93KFtfSFRNTF9FTEVNRU5UX19QUk9HUkVTU0JBUl0pO1xuICAgIHByb2dyZXNzQmFyID0gbmV3IFByb2dyZXNzQmFyKDgpO1xuICAgIHByb2dyZXNzQmFyLm1vdmluZ1Byb2dyZXNzQmFyKFwiUmVhZGluZyBGaWxlXCIpO1xuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIC8vIERlc2NyaWJlIGZ1bmN0aW9uIG9mIHJlYWRpbmdcbiAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRhc2tPcmNoZXN0cmF0b3IgPSBuZXcgVGFza09yY2hlc3RyYXRvcihwcm9ncmVzc0Jhcik7XG4gICAgICAgIHRhc2tPcmNoZXN0cmF0b3IuYWRkKEdlZGNvbVBhcnNlci5wYXJzZSwgW2V2ZW50LnRhcmdldC5yZXN1bHRdLCBcIlBhcnNpbmcgR2VkY29tIERhdGFcIilcbiAgICAgICAgICAgIC5hZGQoZXhwbG9pdCwgW1NPU0FfT05FXSwgXCJFeHBsb2l0aW5nIEdlZGNvbSBEYXRhXCIpXG4gICAgICAgICAgICAuYWRkKGNvbXByZXNzQ29udGFpbmVyLCBbU09TQV9PTkVdLCBcIkNvbXByZXNzaW5nIHlvdXIgQW5jZXN0b3JzXCIpXG4gICAgICAgICAgICAuYWRkKGdldE1heFNpemVPZkRyYXdpbmcsIFtdLCBcIkNhbGN1bGF0ZSBzaXplIG9mIGdyYXBoXCIpXG4gICAgICAgICAgICAuYWRkKGRyYXcsIFtdLCBcIkRyYXdpbmcgeW91ciBncmFwaFwiKVxuICAgICAgICAgICAgLnJ1bigpO1xuICAgIH07XG4gICAgLy9FeGVjdXRlIHJlYWRpbmdcbiAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlLCAndXRmLTgnKTtcbn1cbmZ1bmN0aW9uIGV4cGxvaXQoc29zYVdyYXBwZXIsIHBvc2l0aW9uKSB7XG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHtcbiAgICAgICAgcG9zaXRpb24gPSBTdG9yZS5maXJzdEdlZFRlY2hJZFBhcnNlZDtcbiAgICB9XG4gICAgcG9wdWxhdGVHcmlkKHNvc2FXcmFwcGVyLCBwb3NpdGlvbik7XG4gICAgc2V0dXBCb3hGb3JHcmlkRW50cnkoKTtcbn1cbmZ1bmN0aW9uIGdldE1heFNpemVPZkRyYXdpbmcoKSB7XG4gICAgbGV0IHRtcF9ib3ggPSBudWxsO1xuICAgIGxldCB3aWR0aEJveCA9IG51bGw7XG4gICAgbGV0IGhlaWdodEJveCA9IG51bGw7XG4gICAgbGV0IG1heFhPZkdlbiA9IG51bGw7XG4gICAgbGV0IG1heFlPZkdlbiA9IG51bGw7XG4gICAgbGV0IHRtcF9zb3NhID0gbnVsbDtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQ7IGkrKykge1xuICAgICAgICB0bXBfc29zYSA9IFN0b3JlLmdyaWQubWFwUmlnaHRTb3NhQnlHZW5lcmF0aW9uLmdldChpKS5zb3NhO1xuICAgICAgICBpZiAoU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuaGFzKHRtcF9zb3NhKSkge1xuICAgICAgICAgICAgdG1wX2JveCA9IFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldCh0bXBfc29zYSkuYm94O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvKFwiU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkgZG9lc24ndCBoYXZlIHNvc2EgJW8gaW4gZnVuY3Rpb24gZ2V0TWF4U2l6ZU9mRHJhd2luZygpXCIsIHRtcF9zb3NhKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG1heFhPZkdlbiA9IHRtcF9ib3guZ2V0WCgpO1xuICAgICAgICBpZiAobWF4WE9mR2VuID4gU3RvcmUucG9zaXRpb25YTWF4KSB7XG4gICAgICAgICAgICBTdG9yZS5wb3NpdGlvblhNYXggPSBtYXhYT2ZHZW47XG4gICAgICAgICAgICBpZiAoaSA+IDUpIHtcbiAgICAgICAgICAgICAgICB3aWR0aEJveCA9IEJveFYud2lkdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoQm94ID0gQm94LndpZHRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWF4WU9mR2VuID0gdG1wX2JveC5nZXRZKCk7XG4gICAgICAgIGlmIChtYXhZT2ZHZW4gPiBTdG9yZS5wb3NpdGlvbllNYXgpIHtcbiAgICAgICAgICAgIFN0b3JlLnBvc2l0aW9uWU1heCA9IG1heFlPZkdlbjtcbiAgICAgICAgICAgIGlmIChpID4gNSkge1xuICAgICAgICAgICAgICAgIGhlaWdodEJveCA9IEJveFYuaGVpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHRCb3ggPSBCb3guaGVpZ2h0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3RvcmUucG9zaXRpb25YTWF4ICs9IHdpZHRoQm94ICsgMjA7XG4gICAgU3RvcmUucG9zaXRpb25ZTWF4ICs9IGhlaWdodEJveCArIDIwO1xuICAgIC8vQ29udHJvbCBvZiBzaXplXG4gICAgc2hvdyhbX0hUTUxfRUxFTUVOVF9fTUVTU0FHRV0pO1xuICAgIF9IVE1MX0VMRU1FTlRfX01FU1NBR0UuaW5uZXJIVE1MID0gYEV4cGVjdGVkIHNpemUgb2YgUERGIDogJHtTdG9yZS5wb3NpdGlvblhNYXggLyBSQVRJT19QWF8yX0NNfWNtICogJHtTdG9yZS5wb3NpdGlvbllNYXggLyBSQVRJT19QWF8yX0NNfWNtPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwZWN0ZWQgc2l6ZSBvZiBQTkcgOiAke1N0b3JlLnBvc2l0aW9uWE1heCArIDIwfXB4ICogJHtTdG9yZS5wb3NpdGlvbllNYXggKyAyMH1weGA7XG59XG5mdW5jdGlvbiBkcmF3KCkge1xuICAgIC8vY29uc29sZS5pbmZvKGNvbnRhaW5lci5nZXRNYXBDb250YWluZXIoKS5oYXMoOTYpKVxuICAgIC8vY29uc29sZS5pbmZvKGNvbnRhaW5lci5nZXRNYXBDb250YWluZXIoKSlcbiAgICBzaG93KFtfSFRNTF9FTEVNRU5UX19IRUFERVIsIF9IVE1MX0VMRU1FTlRfX1NWR1dSQVBQRVJdKTtcbiAgICBTVkdSZW5kZXJlci5kcmF3U1ZHKCk7XG59XG5mdW5jdGlvbiBoaWRkZVBkZm9iamVjdFdyYXBwZXIoKSB7XG4gICAgaGlkZShbX0hUTUxfRUxFTUVOVF9fUERGV1JBUFBFUl0pO1xufVxuZnVuY3Rpb24gY2FuY2VsUm9vdCgpIHtcbiAgICBoaWRlKFtfSFRNTF9FTEVNRU5UX19ST09UX1NFTEVDVFdSQVBQRVJdKTtcbn1cbmZ1bmN0aW9uIHNob3dSb290KCkge1xuICAgIHNob3coW19IVE1MX0VMRU1FTlRfX1JPT1RfU0VMRUNUV1JBUFBFUl0pO1xufVxuZnVuY3Rpb24gdHlwaW5nUm9vdCgpIHtcbiAgICB2YXIgc2VhcmNoID0gX0hUTUxfRUxFTUVOVF9fUk9PVF9JTlBVVC52YWx1ZS50cmltKCk7XG4gICAgaWYgKHNlYXJjaC5sZW5ndGggPCA0KSB7XG4gICAgICAgIGhpZGUoW19IVE1MX0VMRU1FTlRfX1NUQVJUVFlQRSwgX0hUTUxfRUxFTUVOVF9fUk9PVF9SRVNVTFRTLCBfSFRNTF9FTEVNRU5UX19ST09UX0VYRUMsIF9IVE1MX0VMRU1FTlRfX1JPT1RfTk9SRVNVTFRdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaGlkZShbX0hUTUxfRUxFTUVOVF9fU1RBUlRUWVBFXSk7XG4gICAgfVxuICAgIHZhciBsaXN0U29zYSA9IFtdO1xuICAgIFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5mb3JFYWNoKChpbmRpdmlkdWFsLCBzb3NhKSA9PiB7XG4gICAgICAgIGlmIChpbmRpdmlkdWFsLmZpcnN0bmFtZS5pbmNsdWRlcyhzZWFyY2gpIHx8IGluZGl2aWR1YWwubGFzdG5hbWUuaW5jbHVkZXMoc2VhcmNoKSkge1xuICAgICAgICAgICAgbGlzdFNvc2EucHVzaChzb3NhKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNob3dSb290cyhsaXN0U29zYSk7XG59XG4vKipcbiAqICBGaWxsIHRoZSBsaXN0IG9mIFNvc2EgdG8gc2hvdyBpbiB0aGUgc2VsZWN0b3JcbiAqIEBwYXJhbSBsaXN0U29zYSB0aGUgbGlzdCBvZiBTb3NhIHRvIHNob3cgaW4gdGhlIHNlbGVjdG9yXG4gKi9cbmZ1bmN0aW9uIHNob3dSb290cyhsaXN0U29zYSkge1xuICAgIGlmIChsaXN0U29zYS5sZW5ndGggPT0gMCkge1xuICAgICAgICBoaWRlKFtfSFRNTF9FTEVNRU5UX19ST09UX1JFU1VMVFMsIF9IVE1MX0VMRU1FTlRfX1JPT1RfRVhFQ10pO1xuICAgICAgICBzaG93KFtfSFRNTF9FTEVNRU5UX19ST09UX05PUkVTVUxUXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzaG93KFtfSFRNTF9FTEVNRU5UX19ST09UX1JFU1VMVFMsIF9IVE1MX0VMRU1FTlRfX1JPT1RfRVhFQ10pO1xuICAgICAgICBoaWRlKFtfSFRNTF9FTEVNRU5UX19ST09UX05PUkVTVUxUXSk7XG4gICAgfVxuICAgIC8vIC5pbm5lckh0bWw9JycgaXMgbm90IHJlY29tbWVuZGVkIGJlY2F1c2UgaXQgZG9lc27igJl0IHJlbW92ZSB0aGUgZXZlbnQgaGFuZGxlcnMgb2YgdGhlIGNoaWxkIG5vZGVzLCB3aGljaCBtaWdodCBjYXVzZSBhIG1lbW9yeSBsZWFrLlxuICAgIHdoaWxlIChfSFRNTF9FTEVNRU5UX19ST09UX1JFU1VMVFMuZmlyc3RDaGlsZCkge1xuICAgICAgICBfSFRNTF9FTEVNRU5UX19ST09UX1JFU1VMVFMucmVtb3ZlQ2hpbGQoX0hUTUxfRUxFTUVOVF9fUk9PVF9SRVNVTFRTLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBsZXQgdGV4dG5vZGUgPSBudWxsO1xuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBsZXQgYkRhdGUgPSBudWxsO1xuICAgIGxldCBkRGF0ZSA9IG51bGw7XG4gICAgbGV0IGluZGl2aWR1YWwgPSBudWxsO1xuICAgIGZvciAobGV0IG9uZVNvc2Egb2YgbGlzdFNvc2EpIHtcbiAgICAgICAgaW5kaXZpZHVhbCA9IFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5nZXQob25lU29zYSk7XG4gICAgICAgIGJEYXRlID0gaW5kaXZpZHVhbC5iaXJ0aERhdGUgIT09IHVuZGVmaW5lZCA/IGluZGl2aWR1YWwuYmlydGhEYXRlIDogXCI/XCI7XG4gICAgICAgIGREYXRlID0gaW5kaXZpZHVhbC5kZWF0aERhdGUgIT09IHVuZGVmaW5lZCA/IGluZGl2aWR1YWwuZGVhdGhEYXRlIDogXCI/XCI7XG4gICAgICAgIHRleHRub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYCR7aW5kaXZpZHVhbC5maXJzdG5hbWV9ICR7aW5kaXZpZHVhbC5sYXN0bmFtZX0gKCR7YkRhdGV9LSR7ZERhdGV9KWApO1xuICAgICAgICBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIk9QVElPTlwiKTtcbiAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBvbmVTb3NhICsgXCJcIik7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGV4dG5vZGUpO1xuICAgICAgICBfSFRNTF9FTEVNRU5UX19ST09UX1JFU1VMVFMuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gY2hhbmdlUm9vdCgpIHtcbiAgICAvL0luaXQgdGhlIExvZ2dlciBzeXN0ZW1cbiAgICBMb2dnZXIuaW5pdCgpO1xuICAgIExvZ2dlci5sb2coXCJzdGFydGluZyBwdXJnaW5nIGRhdGFcIik7XG4gICAgLy8gUHVyZ2UgU3RvcmUgdmFsdWVzIGZvciBhIG5ldyBkcmF3XG4gICAgU3RvcmUucmVzZXRGb3JSZWRyYXcoKTtcbiAgICBsZXQga2V5ID0gcGFyc2VJbnQoX0hUTUxfRUxFTUVOVF9fUk9PVF9SRVNVTFRTLnZhbHVlKTtcbiAgICBsZXQgc29zYU9uZSA9IG5ldyBTb3NhV3JhcHBlcigxKTtcbiAgICAvL1B1cmdlIFNWR1xuICAgIC8vIC5pbm5lckh0bWw9JycgaXMgbm90IHJlY29tbWVuZGVkIGJlY2F1c2UgaXQgZG9lc27igJl0IHJlbW92ZSB0aGUgZXZlbnQgaGFuZGxlcnMgb2YgdGhlIGNoaWxkIG5vZGVzLCB3aGljaCBtaWdodCBjYXVzZSBhIG1lbW9yeSBsZWFrLlxuICAgIHdoaWxlIChfSFRNTF9FTEVNRU5UX19TVkdXUkFQUEVSLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fU1ZHV1JBUFBFUi5yZW1vdmVDaGlsZChfSFRNTF9FTEVNRU5UX19TVkdXUkFQUEVSLmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICAvL1Jlc2V0IHZhclxuICAgIFN0b3JlLnBvc2l0aW9uWE1heCA9IDA7XG4gICAgU3RvcmUucG9zaXRpb25ZTWF4ID0gMDtcbiAgICBTdG9yZS5tYXBHZWRUZWNoSWRUb0luZGl2aWR1YWwuZm9yRWFjaCgoaW5kaXZpZHVhbCwgc29zYSkgPT4ge1xuICAgICAgICBpbmRpdmlkdWFsLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgfSk7XG4gICAgTG9nZ2VyLmxvZyhcImVuZGluZyBwdXJnaW5nIGRhdGFcIik7XG4gICAgdGFza09yY2hlc3RyYXRvciA9IG5ldyBUYXNrT3JjaGVzdHJhdG9yKHByb2dyZXNzQmFyKTtcbiAgICB0YXNrT3JjaGVzdHJhdG9yLmFkZChleHBsb2l0LCBbc29zYU9uZSwga2V5XSwgXCJFeHBsb2l0aW5nIEdlZGNvbSBEYXRhXCIpXG4gICAgICAgIC5hZGQoY29tcHJlc3NDb250YWluZXIsIFtzb3NhT25lXSwgXCJDb21wcmVzc2luZyB5b3VyIEFuY2VzdG9yc1wiKVxuICAgICAgICAuYWRkKGdldE1heFNpemVPZkRyYXdpbmcsIFtdLCBcIkNhbGN1bGF0ZSBzaXplIG9mIGdyYXBoXCIpXG4gICAgICAgIC5hZGQoZHJhdywgW10sIFwiRHJhd2luZyB5b3VyIGdyYXBoXCIpXG4gICAgICAgIC5ydW4oKTtcbiAgICBjYW5jZWxSb290KCk7XG59XG5pbml0KCk7XG4iLCJleHBvcnQgY2xhc3MgVmlydHVhbEdyaWQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uUHJvY2Vzc2VkID0gbnVsbDsgLy9MaXN0IG9mIHNvc2EgYWxyZWFkeSBwcm9jZXNzZWQgdG8gaWRlbnRpZmllIGltcGxleGVcbiAgICAgICAgdGhpcy5tYXhTb3NhUHJvY2Vzc2VkID0gbnVsbDsgLy8gbWVtb3J5IG9mIHRoZSBtYXggU29zYSB0byBoZWxwIHJlLWNhbGN1bGF0ZSBtYXhHZW5lcmF0aW9uUHJvY2Vzc2VkXG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvblByb2Nlc3NlZCA9IG51bGw7IC8vIG1lbW9yeSBvZiB0aGUgbWF4IGdlbiBvZiBhbGwgdGhlIHNvc2EgdG8gaGVscCBjYWxjdWxhdGUgdGhlIGhlaWdoIG9mIHRoZSBncmlkXG4gICAgICAgIHRoaXMubWFwUmlnaHRTb3NhQnlHZW5lcmF0aW9uID0gbnVsbDsgLy9NYXAgb2YgZ2VuZXJhdGlvbiAvIHRoZSBmYXItcmlnaHQgU29zYVdyYXBwZXIgcHJvY2Vzc2VkXG4gICAgICAgIHRoaXMubWFwU29zYVRvR3JpZEVudHJ5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXBHZW5lcmF0aW9uWVBvc2l0aW9uID0gbnVsbDsgLy9saXN0IG9mIFkgcG9zaXRpb24gZm9yIGVhY2ggc29zYVxuICAgICAgICB0aGlzLm1hcEdlbmVyYXRpb25Tb3NhID0gbnVsbDtcbiAgICAgICAgdGhpcy5wb3NpdGlvblByb2Nlc3NlZCA9IFtdO1xuICAgICAgICB0aGlzLm1heFNvc2FQcm9jZXNzZWQgPSBudWxsO1xuICAgICAgICB0aGlzLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQgPSBudWxsO1xuICAgICAgICB0aGlzLm1hcFJpZ2h0U29zYUJ5R2VuZXJhdGlvbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5tYXBTb3NhVG9HcmlkRW50cnkgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubWFwR2VuZXJhdGlvbllQb3NpdGlvbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5tYXBHZW5lcmF0aW9uU29zYSA9IG5ldyBNYXAoKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVmlydHVhbEdyaWRFbnRyeSB7XG4gICAgY29uc3RydWN0b3Ioc29zYVdyYXBwZXIsIGluZGl2aWR1YWwsIHByZXZpb3VzU29zYVdyYXBwZXIpIHtcbiAgICAgICAgdGhpcy5zb3NhV3JhcHBlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlyc3RuYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0bmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYmlydGhEYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5iaXJ0aFBsYWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZWF0aERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmRlYXRoUGxhY2UgPSBudWxsO1xuICAgICAgICB0aGlzLmJveCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTb3NhV3JhcHBlciA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNvc2FXcmFwcGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3NhV3JhcHBlciA9IHNvc2FXcmFwcGVyO1xuICAgICAgICB0aGlzLmZpcnN0bmFtZSA9IGluZGl2aWR1YWwuZmlyc3RuYW1lO1xuICAgICAgICB0aGlzLmxhc3RuYW1lID0gaW5kaXZpZHVhbC5sYXN0bmFtZTtcbiAgICAgICAgdGhpcy5iaXJ0aERhdGUgPSBpbmRpdmlkdWFsLmJpcnRoRGF0ZTtcbiAgICAgICAgdGhpcy5iaXJ0aFBsYWNlID0gaW5kaXZpZHVhbC5iaXJ0aFBsYWNlO1xuICAgICAgICB0aGlzLmRlYXRoRGF0ZSA9IGluZGl2aWR1YWwuZGVhdGhEYXRlO1xuICAgICAgICB0aGlzLmRlYXRoUGxhY2UgPSBpbmRpdmlkdWFsLmRlYXRoUGxhY2U7XG4gICAgICAgIHRoaXMuYm94ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1Nvc2FXcmFwcGVyID0gcHJldmlvdXNTb3NhV3JhcHBlcjtcbiAgICAgICAgdGhpcy5uZXh0U29zYVdyYXBwZXIgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTb3NhV3JhcHBlciB7XG4gICAgY29uc3RydWN0b3Ioc29zYSkge1xuICAgICAgICB0aGlzLnNvc2EgPSBudWxsO1xuICAgICAgICB0aGlzLmdlbmVyYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnNvc2FGYXRoZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNvc2FNb3RoZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmxlZnRTb3NhID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodFNvc2EgPSBudWxsO1xuICAgICAgICB0aGlzLnNvc2EgPSBzb3NhO1xuICAgICAgICAvKipcbiAgICAgICAgKiBSZXR1cm4gbsKwIG9mIGdlbmVyYXRpb24gYmFzZWQgb24gc29zYVxuICAgICAgICAqIHRrdCB0byBSb2xsYW5kIChodHRwczovL3d3dy5sb3JhbmQub3JnL3NwaXAucGhwP2FydGljbGUxNDU5KVxuICAgICAgICAqKi9cbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLmxvZyhzb3NhKSAvIE1hdGguTE4yKSArIDE7XG4gICAgICAgIHRoaXMuc29zYUZhdGhlciA9IHNvc2EgKiAyO1xuICAgICAgICB0aGlzLnNvc2FNb3RoZXIgPSBzb3NhICogMiArIDE7XG4gICAgICAgIC8vIFNvc2EgYXZhaWxhYmxlIG9uIHRoZSBsZWZ0L3JpZ2h0IHdpdGggdGhlIHNhbWUgZ2VuZXJhdGlvblxuICAgICAgICB0aGlzLmxlZnRTb3NhID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodFNvc2EgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBJbmRpdmlkdWFsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7IC8vIFRlY2ggSWQgaW5zaWRlIHRoZSBHZWRDb20gRmlsZS4gbm90IHRoZSBTT1NBXG4gICAgICAgIHRoaXMuZmlyc3RuYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0bmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZmFtYyA9IG51bGw7IC8vIFRlY2ggSWQgaW5zaWRlIHRoZSBHZWRDb20gRmlsZS4gbm90IHRoZSBTT1NBXG4gICAgICAgIHRoaXMuc2V4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBGYW1pbHkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gbnVsbDsgLy8gVGVjaCBJZCBpbnNpZGUgdGhlIEdlZENvbSBGaWxlLiBub3QgdGhlIFNPU0FcbiAgICAgICAgdGhpcy5mYXRoZXIgPSBudWxsOyAvLyBUZWNoIElkIG9mIHRoZSBmYXRoZXJcbiAgICAgICAgdGhpcy5tb3RoZXIgPSBudWxsOyAvLyBUZWNoIElkIG9mIHRoZSBtb3RoZXJcbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=