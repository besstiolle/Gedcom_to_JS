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
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, sans-serif;\n  color: #0f3c4b;\n  background-color: #e5edf1;\n  overflow: hidden;\n}\n\n\na{\n  transition: color 0.2s ease, border-bottom-color 0.2s ease;\n  border-bottom: dotted 1px;\n  color: inherit;\n  text-decoration: none;\n}\n\n.hidden{\n  display:none !important;\n}\n\n/*****************/\n/* Drop File Box */\n/*****************/\n\n#box{\n  min-height: 100%;\n  font-size: 1.5rem;\n  background-color: #c8dadf;\n  position: relative;\n  text-align:center;\n}\n\n.box__file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.box__file + label {\n  max-width: 80%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n}\n.box__button {\n  font-weight: 700;\n  color: #e5edf1;\n  background-color: #39bfd3;\n  display: none;\n  padding: 8px 16px;\n  margin: 40px auto 0;\n}\n.box__input{\n  padding: 25vh;\n  /*padding: 30% 20px 0 20px;*/\n}\n.box__dragndrop,\n.box__uploading,\n.box__success,\n.box__error {\n  display: none;\n}\n\n#box.has-advanced-upload {\n  outline: 2px dashed #92b0b3;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n}\n\n#box.has-advanced-upload .box__dragndrop {\n  display: inline;\n}\n\n#box.is-dragover {\n  background-color: grey;\n}\n\n\n/*****************/\n/* ProgressBar */\n/*****************/\n\n#progressBar{\n  width: 50%;\n  max-width: 300px;\n  height: 30px;\n  background-color: #555;\n  margin: 10px auto;\n  border-radius: 5px;\n  padding: 5px;\n  position: relative;\n}\n\n#subProgressBar{\n  background-color: #999;\n  min-height: 90%;\n  float: left;\n}\n#textProgressBar{\n  color: #DDD;\n  text-align: center;\n  min-width: 100%;\n  min-height: 100%;\n  position: absolute;\n}\n\n.sample{\n  font-size: 0.8em;\n  margin-top:20px;\n}\n\n/*****************/\n/* SVG Render Box */\n/*****************/\n\n#svg{\n\n  font-family: monospace;\n  background-color: #b7d0f4;\n  padding:10px;\n  outline: 2px dashed #8cb7f7;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n}\n\n/******************/\n/*  Header Menu   */\n/******************/\n#header{\n  background: #000;\n  color: #FFF;\n  font-size: 1.3em;\n  padding: 10px;\n  font-family: monospace;\n}\n\n#header a{\n  border-bottom: 0;\n}\n\n.entry{\n  cursor: pointer;\n}\n\n.entry:hover{\n  color: #82b0ed;\n  border-bottom: 1px dotted;\n}\n\n/*********************/\n/*  Root Switching   */\n/*********************/\n\n#selectRootWrapper{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #000;\n  opacity: 0.85;\n}\n\n#selectRoot{\n  width: 350px;\n  margin: 25vh auto;\n}\n\n#inputRoot{\n  text-align: center;\n  width: 90%;\n  margin: 10px;\n  font-size: 1.2em;\n}\n\nselect{\n  font-size: 1.2em;\n  margin: 10px auto;\n  width: 100%;\n}\n\n.buttons{\n  text-align: center;\n}\n\n.button{\n  padding: 5px;\n  background-color: #93d89c;\n  border: 1px solid #3c5d62;\n  color: #000;\n  display: inline-block;\n  font-family: monospace;\n  cursor: pointer;\n}\n\n.label{\n  display: block;\n  margin: 10px;\n  font-size: 1.3em;\n  color: #fff;\n  width: auto;\n  text-align: center;\n}\n/******************/\n/* PDF Render Box */\n/******************/\n#pdfobjectWrapper{\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  left: 5%;\n  position: fixed;\n  display: block;\n  overflow: hidden;\n}\n#pdfobject{\n  width: 100%;\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/css/demo.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,SAAS;EACT,+BAA+B;EAC/B,cAAc;EACd,yBAAyB;EACzB,gBAAgB;AAClB;;;AAGA;EACE,0DAA0D;EAC1D,yBAAyB;EACzB,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA,kBAAkB;AAClB,kBAAkB;AAClB,kBAAkB;;AAElB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,cAAc;EACd,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,qBAAqB;EACrB,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,4BAA4B;AAC9B;AACA;;;;EAIE,aAAa;AACf;;AAEA;EACE,2BAA2B;EAC3B,qBAAqB;EACrB,iFAAiF;EACjF,yEAAyE;AAC3E;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,sBAAsB;AACxB;;;AAGA,kBAAkB;AAClB,gBAAgB;AAChB,kBAAkB;;AAElB;EACE,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;EAClB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,eAAe;EACf,WAAW;AACb;AACA;EACE,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA,kBAAkB;AAClB,mBAAmB;AACnB,kBAAkB;;AAElB;;EAEE,sBAAsB;EACtB,yBAAyB;EACzB,YAAY;EACZ,2BAA2B;EAC3B,qBAAqB;EACrB,iFAAiF;EACjF,yEAAyE;AAC3E;;AAEA,mBAAmB;AACnB,mBAAmB;AACnB,mBAAmB;AACnB;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,yBAAyB;AAC3B;;AAEA,sBAAsB;AACtB,sBAAsB;AACtB,sBAAsB;;AAEtB;EACE,eAAe;EACf,WAAW;EACX,YAAY;EACZ,MAAM;EACN,OAAO;EACP,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,yBAAyB;EACzB,WAAW;EACX,qBAAqB;EACrB,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,gBAAgB;EAChB,WAAW;EACX,WAAW;EACX,kBAAkB;AACpB;AACA,mBAAmB;AACnB,mBAAmB;AACnB,mBAAmB;AACnB;EACE,UAAU;EACV,WAAW;EACX,OAAO;EACP,QAAQ;EACR,eAAe;EACf,cAAc;EACd,gBAAgB;AAClB;AACA;EACE,WAAW;EACX,YAAY;AACd","sourcesContent":["html, body {\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, sans-serif;\n  color: #0f3c4b;\n  background-color: #e5edf1;\n  overflow: hidden;\n}\n\n\na{\n  transition: color 0.2s ease, border-bottom-color 0.2s ease;\n  border-bottom: dotted 1px;\n  color: inherit;\n  text-decoration: none;\n}\n\n.hidden{\n  display:none !important;\n}\n\n/*****************/\n/* Drop File Box */\n/*****************/\n\n#box{\n  min-height: 100%;\n  font-size: 1.5rem;\n  background-color: #c8dadf;\n  position: relative;\n  text-align:center;\n}\n\n.box__file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.box__file + label {\n  max-width: 80%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n}\n.box__button {\n  font-weight: 700;\n  color: #e5edf1;\n  background-color: #39bfd3;\n  display: none;\n  padding: 8px 16px;\n  margin: 40px auto 0;\n}\n.box__input{\n  padding: 25vh;\n  /*padding: 30% 20px 0 20px;*/\n}\n.box__dragndrop,\n.box__uploading,\n.box__success,\n.box__error {\n  display: none;\n}\n\n#box.has-advanced-upload {\n  outline: 2px dashed #92b0b3;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n}\n\n#box.has-advanced-upload .box__dragndrop {\n  display: inline;\n}\n\n#box.is-dragover {\n  background-color: grey;\n}\n\n\n/*****************/\n/* ProgressBar */\n/*****************/\n\n#progressBar{\n  width: 50%;\n  max-width: 300px;\n  height: 30px;\n  background-color: #555;\n  margin: 10px auto;\n  border-radius: 5px;\n  padding: 5px;\n  position: relative;\n}\n\n#subProgressBar{\n  background-color: #999;\n  min-height: 90%;\n  float: left;\n}\n#textProgressBar{\n  color: #DDD;\n  text-align: center;\n  min-width: 100%;\n  min-height: 100%;\n  position: absolute;\n}\n\n.sample{\n  font-size: 0.8em;\n  margin-top:20px;\n}\n\n/*****************/\n/* SVG Render Box */\n/*****************/\n\n#svg{\n\n  font-family: monospace;\n  background-color: #b7d0f4;\n  padding:10px;\n  outline: 2px dashed #8cb7f7;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n}\n\n/******************/\n/*  Header Menu   */\n/******************/\n#header{\n  background: #000;\n  color: #FFF;\n  font-size: 1.3em;\n  padding: 10px;\n  font-family: monospace;\n}\n\n#header a{\n  border-bottom: 0;\n}\n\n.entry{\n  cursor: pointer;\n}\n\n.entry:hover{\n  color: #82b0ed;\n  border-bottom: 1px dotted;\n}\n\n/*********************/\n/*  Root Switching   */\n/*********************/\n\n#selectRootWrapper{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #000;\n  opacity: 0.85;\n}\n\n#selectRoot{\n  width: 350px;\n  margin: 25vh auto;\n}\n\n#inputRoot{\n  text-align: center;\n  width: 90%;\n  margin: 10px;\n  font-size: 1.2em;\n}\n\nselect{\n  font-size: 1.2em;\n  margin: 10px auto;\n  width: 100%;\n}\n\n.buttons{\n  text-align: center;\n}\n\n.button{\n  padding: 5px;\n  background-color: #93d89c;\n  border: 1px solid #3c5d62;\n  color: #000;\n  display: inline-block;\n  font-family: monospace;\n  cursor: pointer;\n}\n\n.label{\n  display: block;\n  margin: 10px;\n  font-size: 1.3em;\n  color: #fff;\n  width: auto;\n  text-align: center;\n}\n/******************/\n/* PDF Render Box */\n/******************/\n#pdfobjectWrapper{\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  left: 5%;\n  position: fixed;\n  display: block;\n  overflow: hidden;\n}\n#pdfobject{\n  width: 100%;\n  height: 100%;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "generatePdf": () => (/* binding */ generatePdf),
/* harmony export */   "pdfViewBox": () => (/* binding */ pdfViewBox)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_panzoom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.panzoom.js */ 6685);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ 1819);
/* harmony import */ var svg2pdf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg2pdf.js */ 9618);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store */ 3331);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SVGRenderer */ 3209);





function generatePdf() {
    pdfViewBox();
    const con = 4; //Ratio px => mm
    const pdfobjectWrapper = document.getElementById("pdfobjectWrapper");
    const svgElement = document.getElementsByTagName("svg")[0];
    let pdfobject = document.getElementById("pdfobject");
    //Show Wrapper
    pdfobjectWrapper.classList.remove("hidden");
    let orientation = 'l';
    if (_Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax > _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax) {
        orientation = 'p';
    }
    const pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__.jsPDF(orientation, 'mm', [_Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax / con, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax / con]);
    // render the svg element
    (0,svg2pdf_js__WEBPACK_IMPORTED_MODULE_2__.svg2pdf)(svgElement, pdf, {
        x: 0,
        y: 0,
        width: _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax / con,
        height: _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax / con
        //scale:1
    }).then(() => {
        const uri = pdf.output('datauristring');
        if (uri.length < 5000000) {
            //TODO : creating HTMLEmbededElement in template.
            if (pdfobject == undefined) {
                pdfobject = document.createElement("embed");
                pdfobject.setAttribute("src", uri);
                pdfobject.id = "pdfobject";
                pdfobject.type = "application/pdf";
                pdfobjectWrapper.appendChild(pdfobject);
            }
            else {
                pdfobject.setAttribute("src", uri);
            }
        }
        else {
            pdf.save('myPDF.pdf');
        }
        //Reset information post pdf generation
        //TODO restoring previous position 
        _SVGRenderer__WEBPACK_IMPORTED_MODULE_4__.SVGRenderer.svgViewBox();
    });
}
function pdfViewBox() {
    let w = 100;
    if (_Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax / window.innerWidth < _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax / window.innerHeight) {
        w = (window.innerWidth * 100 / (_Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax * window.innerHeight / window.innerWidth));
    }
    _SVGRenderer__WEBPACK_IMPORTED_MODULE_4__.SVGRenderer.container.viewbox(0, 0, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax)
        .size(w + '%', '100%');
    return;
    //window.innerWidth / Store.positionXMax
    //window.innerHeight / Store.positionYMax
    _SVGRenderer__WEBPACK_IMPORTED_MODULE_4__.SVGRenderer.container.viewbox(0, 0, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax)
        //.size(window.innerWidth , window.innerHeight)
        .size(window.innerWidth, window.innerHeight)
        .zoom(10);
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
class ProgressBar {
    constructor(nbSteps) {
        this.nbSteps = null;
        this.htmlElement = null;
        this.advanceHtmlElement = null;
        this.textHtmlElement = null;
        this.currentStep = null;
        this.message = null;
        this.nbSteps = nbSteps;
        this.htmlElement = document.getElementById('progressBar');
        this.advanceHtmlElement = document.getElementById('subProgressBar');
        this.textHtmlElement = document.getElementById('textProgressBar');
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
        this.htmlElement.classList.add('hidden');
    }
    render() {
        this.advanceHtmlElement.style.width = this.currentStep * (100 / this.nbSteps) + '%';
        this.textHtmlElement.innerHTML = this.message;
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




class SVGRenderer {
    static drawSVG(htmlId) {
        SVGRenderer.container = (0,_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__.SVG)().addTo(htmlId);
        SVGRenderer.svgViewBox();
        SVGRenderer.polyline([0, 0, 0, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionYMax, _Store__WEBPACK_IMPORTED_MODULE_3__.Store.positionXMax, 0, 0, 0]);
        SVGRenderer.drawLoop(1);
        document.getElementById('box').classList.add('hidden');
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













const SOSA_ONE = new _struct_class__WEBPACK_IMPORTED_MODULE_6__.SosaWrapper(1);
var progressBar = null;
var taskOrchestrator = null;
const _HTML_ELEMENT__FILE = document.getElementById('file');
const _HTML_ELEMENT__FORM = document.getElementById('box');
const _HTML_ELEMENT__PDF = document.getElementById('pdf1');
const _HTML_ELEMENT__SVG = document.getElementById('svg');
const _HTML_ELEMENT__ROOT_INPUT = document.getElementById('inputRoot');
const _HTML_ELEMENT__ROOT_EXEC = document.getElementById('execRoot');
const _HTML_ELEMENT__ROOT_CANCEL = document.getElementById('cancelRoot');
const _HTML_ELEMENT__ROOT_SWITCH = document.getElementById('switchRoot');
const _HTML_ELEMENT__ROOT_RESULTS = document.getElementById('resultsRoot');
const _HTML_ELEMENT__ROOT_SELECTWRAPPER = document.getElementById('selectRootWrapper');
const _HTML_ELEMENT__ROOT_NORESULT = document.getElementById('noResult');
const _HTML_ELEMENT__PROGRESSBAR = document.getElementById('progressBar');
const _HTML_ELEMENT__HEADER = document.getElementById('header');
const _HTML_ELEMENT__PDFWRAPPER = document.getElementById('pdfobjectWrapper');
const _HTML_ELEMENT__STARTTYPE = document.getElementById('startType');
function init() {
    _HTML_ELEMENT__FILE.addEventListener('change', function (e) {
        run(_HTML_ELEMENT__FILE.files[0]);
    });
    let isAdvancedUpload = function () {
        let div = document.createElement('div');
        return (('draggable' in div) || ('ondragstart' in div && 'ondrop' in div)) && 'FormData' in window && 'FileReader' in window;
    }();
    if (isAdvancedUpload) {
        _HTML_ELEMENT__FORM.classList.add('has-advanced-upload');
        let funcDrag = function (e) {
            e.preventDefault();
            e.stopPropagation();
        };
        let funcDragOver = function () {
            _HTML_ELEMENT__FORM.classList.add('is-dragover');
        };
        let funcDragLeave = function () {
            _HTML_ELEMENT__FORM.classList.remove('is-dragover');
        };
        _HTML_ELEMENT__FORM.addEventListener('drag', funcDrag);
        _HTML_ELEMENT__FORM.addEventListener('dragstart', funcDrag);
        _HTML_ELEMENT__FORM.addEventListener('dragend', funcDrag);
        _HTML_ELEMENT__FORM.addEventListener('dragover', funcDrag);
        _HTML_ELEMENT__FORM.addEventListener('dragenter', funcDrag);
        _HTML_ELEMENT__FORM.addEventListener('dragleave', funcDrag);
        _HTML_ELEMENT__FORM.addEventListener('drop', funcDrag);
        _HTML_ELEMENT__FORM.addEventListener('dragover', funcDragOver);
        _HTML_ELEMENT__FORM.addEventListener('dragenter', funcDragOver);
        _HTML_ELEMENT__FORM.addEventListener('dragleave', funcDragLeave);
        _HTML_ELEMENT__FORM.addEventListener('dragend', funcDragLeave);
        _HTML_ELEMENT__FORM.addEventListener('drop', funcDragLeave);
        _HTML_ELEMENT__FORM.addEventListener('drop', function (e) {
            let droppedFiles = e.dataTransfer.files;
            for (var i = 0; i < droppedFiles.length; i++) {
                if (droppedFiles[i]['name'].endsWith('.gedcom') || droppedFiles[i]['name'].endsWith('.ged')) {
                    run(droppedFiles[i]);
                    break;
                }
            }
        });
    }
    _HTML_ELEMENT__PDF.addEventListener('click', _PDFRenderer__WEBPACK_IMPORTED_MODULE_12__.generatePdf);
    _HTML_ELEMENT__SVG.addEventListener('click', hiddePdfobjectWrapper);
    _HTML_ELEMENT__ROOT_INPUT.addEventListener('keyup', typingRoot);
    _HTML_ELEMENT__ROOT_EXEC.addEventListener('click', changeRoot);
    _HTML_ELEMENT__ROOT_CANCEL.addEventListener('click', cancelRoot);
    _HTML_ELEMENT__ROOT_SWITCH.addEventListener('click', showRoot);
}
function run(file) {
    //Init the internal Store
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.init();
    //Init the Logger system
    _Logger__WEBPACK_IMPORTED_MODULE_9__.Logger.init();
    show([_HTML_ELEMENT__PROGRESSBAR]);
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
    //console.info(Store.firstGedTechIdParsed)
    //console.info(Store.mapCodeFamily.size)
    //console.info(Store.mapGedTechIdToIndividual.size)
    //console.info(Store.mapGedTechIdToIndividual)
    if (position == null) {
        position = _Store__WEBPACK_IMPORTED_MODULE_8__.Store.firstGedTechIdParsed;
    }
    (0,_ContainerFactory__WEBPACK_IMPORTED_MODULE_11__.populateGrid)(sosaWrapper, position);
    (0,_ContainerFactory__WEBPACK_IMPORTED_MODULE_11__.setupBoxForGridEntry)();
    //let test = new Map([...container.getMapContainer().entries()].sort());
    //console.info(test)
    //console.info(test.get(96))
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
}
function draw() {
    //console.info(container.getMapContainer().has(96))
    //console.info(container.getMapContainer())
    show([_HTML_ELEMENT__HEADER]);
    _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.drawSVG('#svg');
}
function hiddePdfobjectWrapper() {
    hide([_HTML_ELEMENT__PDFWRAPPER]);
}
function cancelRoot() {
    hide([_HTML_ELEMENT__ROOT_SELECTWRAPPER]);
}
function showRoot() {
    show([_HTML_ELEMENT__ROOT_SELECTWRAPPER]);
}
function typingRoot() {
    var search = _HTML_ELEMENT__ROOT_INPUT.value.trim();
    if (search.length < 4) {
        hide([_HTML_ELEMENT__STARTTYPE, _HTML_ELEMENT__ROOT_RESULTS, _HTML_ELEMENT__ROOT_EXEC, _HTML_ELEMENT__ROOT_NORESULT]);
        return;
    }
    else {
        hide([_HTML_ELEMENT__STARTTYPE]);
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
        hide([_HTML_ELEMENT__ROOT_RESULTS, _HTML_ELEMENT__ROOT_EXEC]);
        show([_HTML_ELEMENT__ROOT_NORESULT]);
    }
    else {
        show([_HTML_ELEMENT__ROOT_RESULTS, _HTML_ELEMENT__ROOT_EXEC]);
        hide([_HTML_ELEMENT__ROOT_NORESULT]);
    }
    // .innerHtml='' is not recommended because it doesn’t remove the event handlers of the child nodes, which might cause a memory leak.
    while (_HTML_ELEMENT__ROOT_RESULTS.firstChild) {
        _HTML_ELEMENT__ROOT_RESULTS.removeChild(_HTML_ELEMENT__ROOT_RESULTS.firstChild);
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
        _HTML_ELEMENT__ROOT_RESULTS.appendChild(node);
    }
}
function changeRoot() {
    //Init the Logger system
    _Logger__WEBPACK_IMPORTED_MODULE_9__.Logger.init();
    _Logger__WEBPACK_IMPORTED_MODULE_9__.Logger.log("starting purging data");
    // Purge Store values for a new draw
    _Store__WEBPACK_IMPORTED_MODULE_8__.Store.resetForRedraw();
    let key = parseInt(_HTML_ELEMENT__ROOT_RESULTS.value);
    let sosaOne = new _struct_class__WEBPACK_IMPORTED_MODULE_6__.SosaWrapper(1);
    //Purge SVG
    // .innerHtml='' is not recommended because it doesn’t remove the event handlers of the child nodes, which might cause a memory leak.
    while (_HTML_ELEMENT__SVG.firstChild) {
        _HTML_ELEMENT__SVG.removeChild(_HTML_ELEMENT__SVG.firstChild);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ087QUFDUDtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLHdCQUF3QjtBQUN4Qiw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvYXNzZXRzL2Nzcy9kZW1vLmNzcyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvYXNzZXRzL2Nzcy9kZW1vLmNzcz85Yzc0Iiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9Cb3guY2xhc3MudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL0NvbnRhaW5lckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL0dlZGNvbVBhcnNlci50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvTG9nZ2VyLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9QREZSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvUHJvZ3Jlc3NCYXIuY2xhc3MudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL1NWR1JlbmRlcmVyLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9TdG9yZS50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvVGFza09yY2hlc3RyYXRvci5jbGFzcy50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvZGVtby50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvc3RydWN0LmNsYXNzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwZjNjNGI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlZGYxO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuXFxuYXtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZSwgYm9yZGVyLWJvdHRvbS1jb2xvciAwLjJzIGVhc2U7XFxuICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMXB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW57XFxuICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqL1xcbi8qIERyb3AgRmlsZSBCb3ggKi9cXG4vKioqKioqKioqKioqKioqKiovXFxuXFxuI2JveHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGRhZGY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuLmJveF9fZmlsZSB7XFxuICB3aWR0aDogMC4xcHg7XFxuICBoZWlnaHQ6IDAuMXB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmJveF9fZmlsZSArIGxhYmVsIHtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmJveF9fYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2U1ZWRmMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWJmZDM7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBtYXJnaW46IDQwcHggYXV0byAwO1xcbn1cXG4uYm94X19pbnB1dHtcXG4gIHBhZGRpbmc6IDI1dmg7XFxuICAvKnBhZGRpbmc6IDMwJSAyMHB4IDAgMjBweDsqL1xcbn1cXG4uYm94X19kcmFnbmRyb3AsXFxuLmJveF9fdXBsb2FkaW5nLFxcbi5ib3hfX3N1Y2Nlc3MsXFxuLmJveF9fZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2JveC5oYXMtYWR2YW5jZWQtdXBsb2FkIHtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzkyYjBiMztcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMTBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxufVxcblxcbiNib3guaGFzLWFkdmFuY2VkLXVwbG9hZCAuYm94X19kcmFnbmRyb3Age1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4jYm94LmlzLWRyYWdvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKi9cXG4vKiBQcm9ncmVzc0JhciAqL1xcbi8qKioqKioqKioqKioqKioqKi9cXG5cXG4jcHJvZ3Jlc3NCYXJ7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3N1YlByb2dyZXNzQmFye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcXG4gIG1pbi1oZWlnaHQ6IDkwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4jdGV4dFByb2dyZXNzQmFye1xcbiAgY29sb3I6ICNEREQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2FtcGxle1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIG1hcmdpbi10b3A6MjBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqL1xcbi8qIFNWRyBSZW5kZXIgQm94ICovXFxuLyoqKioqKioqKioqKioqKioqL1xcblxcbiNzdmd7XFxuXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3ZDBmNDtcXG4gIHBhZGRpbmc6MTBweDtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzhjYjdmNztcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMTBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKiovXFxuLyogIEhlYWRlciBNZW51ICAgKi9cXG4vKioqKioqKioqKioqKioqKioqL1xcbiNoZWFkZXJ7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgY29sb3I6ICNGRkY7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbiNoZWFkZXIgYXtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcblxcbi5lbnRyeXtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVudHJ5OmhvdmVye1xcbiAgY29sb3I6ICM4MmIwZWQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqL1xcbi8qICBSb290IFN3aXRjaGluZyAgICovXFxuLyoqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4jc2VsZWN0Um9vdFdyYXBwZXJ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuI3NlbGVjdFJvb3R7XFxuICB3aWR0aDogMzUwcHg7XFxuICBtYXJnaW46IDI1dmggYXV0bztcXG59XFxuXFxuI2lucHV0Um9vdHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG5zZWxlY3R7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ1dHRvbnN7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b257XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkODljO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNjNWQ2MjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxhYmVse1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyoqKioqKioqKioqKioqKioqKi9cXG4vKiBQREYgUmVuZGVyIEJveCAqL1xcbi8qKioqKioqKioqKioqKioqKiovXFxuI3BkZm9iamVjdFdyYXBwZXJ7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogNSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNwZGZvYmplY3R7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvZGVtby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULCtCQUErQjtFQUMvQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7O0FBR0E7RUFDRSwwREFBMEQ7RUFDMUQseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxxQkFBcUI7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ZW50XCI6W1wiaHRtbCwgYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICMwZjNjNGI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlZGYxO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuXFxuYXtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZSwgYm9yZGVyLWJvdHRvbS1jb2xvciAwLjJzIGVhc2U7XFxuICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMXB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW57XFxuICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqL1xcbi8qIERyb3AgRmlsZSBCb3ggKi9cXG4vKioqKioqKioqKioqKioqKiovXFxuXFxuI2JveHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGRhZGY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuLmJveF9fZmlsZSB7XFxuICB3aWR0aDogMC4xcHg7XFxuICBoZWlnaHQ6IDAuMXB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmJveF9fZmlsZSArIGxhYmVsIHtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmJveF9fYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2U1ZWRmMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWJmZDM7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBtYXJnaW46IDQwcHggYXV0byAwO1xcbn1cXG4uYm94X19pbnB1dHtcXG4gIHBhZGRpbmc6IDI1dmg7XFxuICAvKnBhZGRpbmc6IDMwJSAyMHB4IDAgMjBweDsqL1xcbn1cXG4uYm94X19kcmFnbmRyb3AsXFxuLmJveF9fdXBsb2FkaW5nLFxcbi5ib3hfX3N1Y2Nlc3MsXFxuLmJveF9fZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2JveC5oYXMtYWR2YW5jZWQtdXBsb2FkIHtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzkyYjBiMztcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMTBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxufVxcblxcbiNib3guaGFzLWFkdmFuY2VkLXVwbG9hZCAuYm94X19kcmFnbmRyb3Age1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4jYm94LmlzLWRyYWdvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKi9cXG4vKiBQcm9ncmVzc0JhciAqL1xcbi8qKioqKioqKioqKioqKioqKi9cXG5cXG4jcHJvZ3Jlc3NCYXJ7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3N1YlByb2dyZXNzQmFye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcXG4gIG1pbi1oZWlnaHQ6IDkwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4jdGV4dFByb2dyZXNzQmFye1xcbiAgY29sb3I6ICNEREQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2FtcGxle1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIG1hcmdpbi10b3A6MjBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqL1xcbi8qIFNWRyBSZW5kZXIgQm94ICovXFxuLyoqKioqKioqKioqKioqKioqL1xcblxcbiNzdmd7XFxuXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3ZDBmNDtcXG4gIHBhZGRpbmc6MTBweDtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzhjYjdmNztcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMTBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKiovXFxuLyogIEhlYWRlciBNZW51ICAgKi9cXG4vKioqKioqKioqKioqKioqKioqL1xcbiNoZWFkZXJ7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgY29sb3I6ICNGRkY7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbiNoZWFkZXIgYXtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcblxcbi5lbnRyeXtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVudHJ5OmhvdmVye1xcbiAgY29sb3I6ICM4MmIwZWQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqL1xcbi8qICBSb290IFN3aXRjaGluZyAgICovXFxuLyoqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4jc2VsZWN0Um9vdFdyYXBwZXJ7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgb3BhY2l0eTogMC44NTtcXG59XFxuXFxuI3NlbGVjdFJvb3R7XFxuICB3aWR0aDogMzUwcHg7XFxuICBtYXJnaW46IDI1dmggYXV0bztcXG59XFxuXFxuI2lucHV0Um9vdHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG5zZWxlY3R7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ1dHRvbnN7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b257XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkODljO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNjNWQ2MjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxhYmVse1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyoqKioqKioqKioqKioqKioqKi9cXG4vKiBQREYgUmVuZGVyIEJveCAqL1xcbi8qKioqKioqKioqKioqKioqKiovXFxuI3BkZm9iamVjdFdyYXBwZXJ7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogNSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNwZGZvYmplY3R7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kZW1vLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVtby5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJjb25zdCBDT05TVF9MRUZUX01BUkdJTiA9IDIwOyAvLyBsZWZ0IG1hcmdpblxuY29uc3QgQ09OU1RfVE9QX01BUkdJTiA9IDIwOyAvLyB0b3AgbWFyZ2luXG5jb25zdCBDT05TVF9XSURUSF9QQURESU5HID0gMTA7IC8vIGhvcml6b250YWwgcGFkZGluZyBiZXR3ZWVuIGJveFxuY29uc3QgQ09OU1RfSEVJR0hUX1BBRERJTkcgPSAzMDsgLy8gdmVydGljYWwgcGFkZGluZyBiZXR3ZWVuIGJveFxuY29uc3QgQ09OU1RfV0lEVEggPSAyMDA7IC8vd2lkdGggb2YgYm94IGluIHB4XG5jb25zdCBDT05TVF9IRUlHSFQgPSA3NTsgLy9oZWlnaHQgb2YgYm94IGluIHB4XG5jb25zdCBDT05TVF9XSURUSF9WID0gOTU7IC8vd2lkdGggb2YgYm94IGluIHB4XG5jb25zdCBDT05TVF9IRUlHSFRfViA9IDE1MDsgLy9oZWlnaHQgb2YgYm94IGluIHB4XG5leHBvcnQgY2xhc3MgQm94QWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKHNvc2FXcmFwcGVyLCBtYXhHZW5lcmF0aW9uKSB7XG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuc29zYSA9IG51bGw7XG4gICAgICAgIHRoaXMueCA9IG51bGw7XG4gICAgICAgIHRoaXMueSA9IG51bGw7XG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvbiA9IG1heEdlbmVyYXRpb247XG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbiA9IHNvc2FXcmFwcGVyLmdlbmVyYXRpb247XG4gICAgICAgIHRoaXMuc29zYSA9IHNvc2FXcmFwcGVyLnNvc2E7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgICAgIC8vbGV0IGRpZmZTb3NhVG9wR2VuID0gdGhpcy5nZXRTb3NhT2ZNYXhGYXRoZXIoKSAtIHRoaXMuZ2V0TWluU29zYU9mR2VuZXJhdGlvbigpXG4gICAgICAgIC8vbGV0IGRpZmZHZW4gPSBtYXhHZW5lcmF0aW9uIC0gZ2VuZXJhdGlvblxuICAgICAgICAvL0NhbGN1bCB4ICYgeSB2YWx1ZXNcbiAgICAgICAgLy90aGlzLnggPSBkaWZmU29zYVRvcEdlbiAqICh0aGlzLndpZHRoKCkgKyB0aGlzLndpZHRoUGFkZGluZygpKSArIHRoaXMubGVmdE1hcmdpbigpXG4gICAgICAgIC8vdGhpcy55ID0gZGlmZkdlbiAqICh0aGlzLmhlaWdodCgpICsgdGhpcy5oZWlnaHRQYWRkaW5nKCkpICsgdGhpcy5sZWZ0TWFyZ2luKClcbiAgICB9XG4gICAgc2V0WCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnggPSB2YWx1ZTtcbiAgICB9XG4gICAgc2V0WSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnkgPSB2YWx1ZTtcbiAgICB9XG4gICAgc2hpZnRSaWdodCh2YWx1ZSkge1xuICAgICAgICB0aGlzLnggKz0gdmFsdWU7XG4gICAgfVxuICAgIGdldFNvc2FPZk1heEZhdGhlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc29zYSAqIE1hdGgucG93KDIsIHRoaXMubWF4R2VuZXJhdGlvbiAtIHRoaXMuZ2VuZXJhdGlvbik7XG4gICAgfVxuICAgIGdldE1pblNvc2FPZkdlbmVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnBvdygyLCAodGhpcy5nZW5lcmF0aW9uIC0gMSkpO1xuICAgIH1cbiAgICBnZXRYKCkgeyByZXR1cm4gdGhpcy54OyB9XG4gICAgZ2V0WSgpIHsgcmV0dXJuIHRoaXMueTsgfVxuICAgIHN0YXRpYyBsZWZ0TWFyZ2luKCkgeyByZXR1cm4gQ09OU1RfTEVGVF9NQVJHSU47IH1cbiAgICBzdGF0aWMgdG9wTWFyZ2luKCkgeyByZXR1cm4gQ09OU1RfVE9QX01BUkdJTjsgfVxuICAgIHN0YXRpYyB3aWR0aFBhZGRpbmcoKSB7IHJldHVybiBDT05TVF9XSURUSF9QQURESU5HOyB9XG4gICAgc3RhdGljIGhlaWdodFBhZGRpbmcoKSB7IHJldHVybiBDT05TVF9IRUlHSFRfUEFERElORzsgfVxufVxuZXhwb3J0IGNsYXNzIEJveCBleHRlbmRzIEJveEFic3RyYWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihzb3NhV3JhcHBlciwgbWF4R2VuZXJhdGlvbikge1xuICAgICAgICBzdXBlcihzb3NhV3JhcHBlciwgbWF4R2VuZXJhdGlvbik7XG4gICAgICAgIC8vRklYTUUgcG9zdCBUUyA6IGNvZGUgdW51c2VkXG4gICAgICAgIGxldCBkaWZmU29zYVRvcEdlbiA9IHRoaXMuZ2V0U29zYU9mTWF4RmF0aGVyKCkgLSB0aGlzLmdldE1pblNvc2FPZkdlbmVyYXRpb24oKTtcbiAgICAgICAgLy9UT0RPIHZlcmlmeSB0aGlzIGxpbmUgYmVsb3cgYWZ0ZXIgc3d0Y2hpbmcgdG8gVFNcbiAgICAgICAgLy9sZXQgZGlmZlNvc2FUb3BHZW4gPSB0aGlzLmdldFNvc2FPZk1heEZhdGhlcihzb3NhV3JhcHBlci5nZXRTb3NhKCkpIC0gdGhpcy5nZXRNaW5Tb3NhT2ZHZW5lcmF0aW9uKG1heEdlbmVyYXRpb24pXG4gICAgICAgIGxldCBkaWZmR2VuID0gbWF4R2VuZXJhdGlvbiAtIHRoaXMuZ2VuZXJhdGlvbjtcbiAgICAgICAgLy9DYWxjdWwgeCAmIHkgdmFsdWVzXG4gICAgICAgIC8vdGhpcy54ID0gIGRpZmZTb3NhVG9wR2VuICogKHRoaXMud2lkdGgoKSArIHRoaXMud2lkdGhQYWRkaW5nKCkpICsgdGhpcy5sZWZ0TWFyZ2luKClcbiAgICAgICAgLy90aGlzLnkgPSBkaWZmR2VuICogKHRoaXMuaGVpZ2h0KCkgKyB0aGlzLmhlaWdodFBhZGRpbmcoKSkgKyB0aGlzLmxlZnRNYXJnaW4oKVxuICAgIH1cbiAgICBnZXRCb3R0b21KdW5jdGlvblBvaW50KCkge1xuICAgICAgICByZXR1cm4geyBcInhcIjogdGhpcy54ICsgQm94LndpZHRoKCkgLyAyLCBcInlcIjogdGhpcy55ICsgQm94LmhlaWdodCgpIH07XG4gICAgfVxuICAgIGdldFRvcEp1bmN0aW9uUG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB7IFwieFwiOiB0aGlzLnggKyBCb3gud2lkdGgoKSAvIDIsIFwieVwiOiB0aGlzLnkgfTtcbiAgICB9XG4gICAgc3RhdGljIHdpZHRoKCkgeyByZXR1cm4gQ09OU1RfV0lEVEg7IH1cbiAgICBzdGF0aWMgaGVpZ2h0KCkgeyByZXR1cm4gQ09OU1RfSEVJR0hUOyB9XG59XG5leHBvcnQgY2xhc3MgQm94ViBleHRlbmRzIEJveEFic3RyYWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihzb3NhV3JhcHBlciwgbWF4R2VuZXJhdGlvbikge1xuICAgICAgICBzdXBlcihzb3NhV3JhcHBlciwgbWF4R2VuZXJhdGlvbik7XG4gICAgICAgIC8vRklYTUUgcG9zdCBUUyA6IGNvZGUgdW51c2VkXG4gICAgICAgIGxldCBtYXJnaW5fYm90dG9tID0gKEJveEFic3RyYWN0LmhlaWdodFBhZGRpbmcoKSArIEJveFYuaGVpZ2h0KCkpICogNTtcbiAgICAgICAgLy90aGlzLkNPTlNUX0xFRlRfTUFSR0lOID0gMjAgLy8gbGVmdCBtYXJnaW5cbiAgICAgICAgLy90aGlzLkNPTlNUX1dJRFRIX1BBRERJTkcgPSAxMCAvLyBob3Jpem9udGFsIHBhZGRpbmcgYmV0d2VlbiBib3hcbiAgICAgICAgLy90aGlzLkNPTlNUX0hFSUdIVF9QQURESU5HID0gMzAgLy8gdmVydGljYWwgcGFkZGluZyBiZXR3ZWVuIGJveFxuICAgICAgICAvL3RoaXMuQ09OU1RfV0lEVEggPSA1MCAvL3dpZHRoIG9mIGJveCBpbiBweFxuICAgICAgICAvL3RoaXMuQ09OU1RfSEVJR0hUID0gMTUwIC8vaGVpZ2h0IG9mIGJveCBpbiBweFxuICAgICAgICBsZXQgZGlmZlNvc2FUb3BHZW4gPSB0aGlzLmdldFNvc2FPZk1heEZhdGhlcigpIC0gdGhpcy5nZXRNaW5Tb3NhT2ZHZW5lcmF0aW9uKCk7XG4gICAgICAgIGxldCBkaWZmR2VuID0gbWF4R2VuZXJhdGlvbiAtIHRoaXMuZ2VuZXJhdGlvbjtcbiAgICAgICAgLy9DYWxjdWwgeCAmIHkgdmFsdWVzXG4gICAgICAgIC8vdGhpcy54ID0gIGRpZmZTb3NhVG9wR2VuICogKHRoaXMud2lkdGgoKSArIHRoaXMud2lkdGhQYWRkaW5nKCkpICsgdGhpcy5sZWZ0TWFyZ2luKClcbiAgICAgICAgLy90aGlzLnkgPSAoZGlmZkdlbiAtIDUpICogKHRoaXMuaGVpZ2h0KCkgKyB0aGlzLmhlaWdodFBhZGRpbmcoKSkgKyB0aGlzLmxlZnRNYXJnaW4oKSArIG1hcmdpbl9ib3R0b21cbiAgICAgICAgLy8gIHdpZHRoKCl7cmV0dXJuIDUwO30gLy93aWR0aCBvZiBib3ggaW4gcHhcbiAgICAgICAgLy8gICAgaGVpZ2h0KCl7cmV0dXJuIDE1MDt9IC8vaGVpZ2h0IG9mIGJveCBpbiBweFxuICAgIH1cbiAgICBnZXRCb3R0b21KdW5jdGlvblBvaW50KCkge1xuICAgICAgICByZXR1cm4geyBcInhcIjogdGhpcy54ICsgQm94Vi53aWR0aCgpIC8gMiwgXCJ5XCI6IHRoaXMueSArIEJveFYuaGVpZ2h0KCkgfTtcbiAgICB9XG4gICAgZ2V0VG9wSnVuY3Rpb25Qb2ludCgpIHtcbiAgICAgICAgcmV0dXJuIHsgXCJ4XCI6IHRoaXMueCArIEJveFYud2lkdGgoKSAvIDIsIFwieVwiOiB0aGlzLnkgfTtcbiAgICB9XG4gICAgLy9Ob3QgcmVhZHkgZm9yIGEgcHJvZHVjdGlvbiB1c2VcbiAgICAvL3N0YXRpYyB3aWR0aCgpe3JldHVybiBDT05TVF9XSURUSF9WfVxuICAgIC8vc3RhdGljIGhlaWdodCgpe3JldHVybiBDT05TVF9IRUlHSFRfVn1cbiAgICBzdGF0aWMgd2lkdGgoKSB7IHJldHVybiBDT05TVF9XSURUSDsgfVxuICAgIHN0YXRpYyBoZWlnaHQoKSB7IHJldHVybiBDT05TVF9IRUlHSFQ7IH1cbn1cbiIsImltcG9ydCB7IFZpcnR1YWxHcmlkRW50cnksIFNvc2FXcmFwcGVyIH0gZnJvbSBcIi4vc3RydWN0LmNsYXNzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBCb3gsIEJveEFic3RyYWN0LCBCb3hWIH0gZnJvbSBcIi4vQm94LmNsYXNzXCI7XG4vKipcbiAqXG4gKiBAcGFyYW0gc29zYVdyYXBwZXIgdGhlIHNvc2EgV3JhcHBlciBhbHdheXMgc3RhcnRpbmcgYnkgMVxuICogQHBhcmFtIGdlZFRlY2hJZCB0aGUgdGVjaG5pY2FsIGluZGV4IGNvZGUgaW5zaWRlIHRoZSBHRURDT00gZmlsZSwgY2FuIGJlICE9IDEgdGhlIGZpcnN0IHRpbWUgLiBOb3QgdGhlIFNPU0FcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUdyaWQoc29zYVdyYXBwZXIsIGdlZFRlY2hJZCkge1xuICAgIC8vQXZvaWQgdW5lY2Vzc2FyeSBwcm9jZXNzaW5nXG4gICAgaWYgKCFTdG9yZS5tYXBHZWRUZWNoSWRUb0luZGl2aWR1YWwuaGFzKGdlZFRlY2hJZCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiZ2VkVGVjaElkICVvIE5vdCBmb3VuZCBpbiAnbWFwIEdlZFRlY2hJZCBUbyBJbmRpdmlkdWFsJy4gU29zYSB3YXMgJW9cIiwgZ2VkVGVjaElkLCBzb3NhV3JhcHBlci5zb3NhKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgaW5kaXZpZHVhbCA9IFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5nZXQoZ2VkVGVjaElkKTtcbiAgICBsZXQgY3VyU29zYSA9IHNvc2FXcmFwcGVyLnNvc2E7XG4gICAgbGV0IGN1ckdlbiA9IHNvc2FXcmFwcGVyLmdlbmVyYXRpb247XG4gICAgLy9jb25zb2xlLmluZm8oY3VyU29zYSxnZWRUZWNoSWQsIGluZGl2aWR1YWwuaWQpXG4gICAgLy9MaW1pdGF0aW9uXG4gICAgaWYgKGN1ckdlbiA+IFN0b3JlLmdlbmVyYXRpb25NYXgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwidGhlIFN0b3JlLmdlbmVyYXRpb25NYXggbGltaXRlIG9mICVvIHdhcyByZWFjaGVkLiBTb3NhIHdhcyAlbydcIiwgU3RvcmUuZ2VuZXJhdGlvbk1heCwgc29zYVdyYXBwZXIuc29zYSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9TZXQgbWF4U29zYVByb2Nlc3NlZFxuICAgIGlmIChjdXJTb3NhID4gU3RvcmUuZ3JpZC5tYXhTb3NhUHJvY2Vzc2VkKSB7XG4gICAgICAgIFN0b3JlLmdyaWQubWF4U29zYVByb2Nlc3NlZCA9IGN1clNvc2E7XG4gICAgICAgIFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZCA9IGN1ckdlbjtcbiAgICB9XG4gICAgaWYgKCFTdG9yZS5ncmlkLm1hcEdlbmVyYXRpb25Tb3NhLmhhcyhjdXJHZW4pKSB7XG4gICAgICAgIFN0b3JlLmdyaWQubWFwR2VuZXJhdGlvblNvc2Euc2V0KGN1ckdlbiwgW10pO1xuICAgIH1cbiAgICBTdG9yZS5ncmlkLm1hcEdlbmVyYXRpb25Tb3NhLmdldChjdXJHZW4pLnB1c2goY3VyU29zYSk7XG4gICAgLy9DYXNlIG9mIEltcGxleGVcbiAgICBpZiAoU3RvcmUuZ3JpZC5wb3NpdGlvblByb2Nlc3NlZC5pbmRleE9mKGdlZFRlY2hJZCkgIT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJpbXBsZXhlIGRldGVjdGVkIHdpdGggZ2VkVGVjaElkICVvLiBTb3NhIHdhcyAlb1wiLCBnZWRUZWNoSWQsIHNvc2FXcmFwcGVyLnNvc2EpO1xuICAgICAgICAvL1RPRE8gbWF5YmUgYSBjdXN0b21pemVkIGJveCB3aXRoL3dpdGhvdXQgcGFyZW50XG4gICAgICAgIC8vIHJldHVyblxuICAgIH1cbiAgICBTdG9yZS5ncmlkLnBvc2l0aW9uUHJvY2Vzc2VkLnB1c2goZ2VkVGVjaElkKTtcbiAgICBsZXQgcHJldmlvdXNTb3NhV3JhcHBlciA9IG51bGw7XG4gICAgaWYgKFN0b3JlLmdyaWQubWFwUmlnaHRTb3NhQnlHZW5lcmF0aW9uLmhhcyhjdXJHZW4pKSB7XG4gICAgICAgIGxldCBwcmV2aW91c1Nvc2EgPSBTdG9yZS5ncmlkLm1hcFJpZ2h0U29zYUJ5R2VuZXJhdGlvbi5nZXQoY3VyR2VuKS5zb3NhO1xuICAgICAgICAvLyBTZXQgXCJuZXh0U29zYVdyYXBwZXJcIiBvZiBwcmV2aW91c1xuICAgICAgICBpZiAoU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuaGFzKHByZXZpb3VzU29zYSkpIHtcbiAgICAgICAgICAgIFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldChwcmV2aW91c1Nvc2EpLm5leHRTb3NhV3JhcHBlciA9IHNvc2FXcmFwcGVyO1xuICAgICAgICAgICAgcHJldmlvdXNTb3NhV3JhcHBlciA9IFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldChwcmV2aW91c1Nvc2EpLnNvc2FXcmFwcGVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIFN0b3JlLmdyaWQubWFwUmlnaHRTb3NhQnlHZW5lcmF0aW9uLnNldChjdXJHZW4sIHNvc2FXcmFwcGVyKTtcbiAgICBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5zZXQoY3VyU29zYSwgbmV3IFZpcnR1YWxHcmlkRW50cnkoc29zYVdyYXBwZXIsIGluZGl2aWR1YWwsIHByZXZpb3VzU29zYVdyYXBwZXIpKTtcbiAgICAvL1Byb2Nlc3MgaGlzIGZhdGhlciBhbmQgbW90aGVyc1xuICAgIGxldCBmYW1pbHlJZCA9IGluZGl2aWR1YWwuZmFtYztcbiAgICBpZiAoU3RvcmUubWFwQ29kZUZhbWlseS5oYXMoZmFtaWx5SWQpKSB7XG4gICAgICAgIGxldCBmYW1pbHkgPSBTdG9yZS5tYXBDb2RlRmFtaWx5LmdldChmYW1pbHlJZCk7XG4gICAgICAgIGlmIChmYW1pbHkuZmF0aGVyICE9IG51bGwgJiYgZmFtaWx5LmZhdGhlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlR3JpZChuZXcgU29zYVdyYXBwZXIoc29zYVdyYXBwZXIuc29zYUZhdGhlciksIGZhbWlseS5mYXRoZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYW1pbHkubW90aGVyICE9IG51bGwgJiYgZmFtaWx5Lm1vdGhlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlR3JpZChuZXcgU29zYVdyYXBwZXIoc29zYVdyYXBwZXIuc29zYU1vdGhlciksIGZhbWlseS5tb3RoZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEJveEZvckdyaWRFbnRyeSgpIHtcbiAgICBsZXQgYm94ID0gbnVsbDtcbiAgICBsZXQgc29zYVdyYXBwZXIgPSBudWxsO1xuICAgIFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmZvckVhY2goKGdyaWRFbnRyeSwgc29zYSkgPT4ge1xuICAgICAgICAvL0dlbmVyYXRlIEJveGVzXG4gICAgICAgIHNvc2FXcmFwcGVyID0gZ3JpZEVudHJ5LnNvc2FXcmFwcGVyO1xuICAgICAgICBpZiAoc29zYVdyYXBwZXIuZ2VuZXJhdGlvbiA+IDUpIHtcbiAgICAgICAgICAgIGJveCA9IG5ldyBCb3hWKHNvc2FXcmFwcGVyLCBTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQpOyAvLyBWZXJ0aWNhbCBCb3hcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJveCA9IG5ldyBCb3goc29zYVdyYXBwZXIsIFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZCk7IC8vIENsYXNzaWMgYm94XG4gICAgICAgIH1cbiAgICAgICAgZ3JpZEVudHJ5LmJveCA9IGJveDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzc0NvbnRhaW5lcihzb3NhV3JhcHBlcikge1xuICAgIGxldCBmYXRoZXJYID0gMDtcbiAgICBsZXQgbW90aGVyWCA9IDA7XG4gICAgbGV0IG15c2VsZlggPSAwO1xuICAgIGxldCBwcmV2aW91c1ggPSAwO1xuICAgIC8vR2V0IGNvbXByZXNzZWQgcG9zaXRpb24gb2YgZmF0aGVyIGlmIGV4aXN0c1xuICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYUZhdGhlcikpIHtcbiAgICAgICAgZmF0aGVyWCA9IGNvbXByZXNzQ29udGFpbmVyKG5ldyBTb3NhV3JhcHBlcihzb3NhV3JhcHBlci5zb3NhRmF0aGVyKSk7XG4gICAgfVxuICAgIC8vR2V0IGNvbXByZXNzZWQgcG9zaXRpb24gb2YgbW90aGVyIGlmIGV4aXN0c1xuICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYU1vdGhlcikpIHtcbiAgICAgICAgbW90aGVyWCA9IGNvbXByZXNzQ29udGFpbmVyKG5ldyBTb3NhV3JhcHBlcihzb3NhV3JhcHBlci5zb3NhTW90aGVyKSk7XG4gICAgfVxuICAgIC8vUmV0cml2ZSBwcmV2aW91cyBib3ggWC1wb3NpdGlvbigqKSBvbiB0aGUgZ3JhcGggKG9uIHRoZSBsZWZ0KVxuICAgIC8vICogPT4gaWYgZXhpc3QgOiBYIHBvc2l0aW9uIG9mIHByZXZpb3VzIGJveGUgKyBib3gud2lkdGgoKSArIGJveC53aWR0aFBhZGRpbmcoKVxuICAgIC8vICAgPT4gaWYgbm90IDogYm94LmxlZnRNYXJnaW4oKVxuICAgIHByZXZpb3VzWCA9IF9nZXRYUG9zaXRpb25PbkxlZnRCb3goc29zYVdyYXBwZXIpO1xuICAgIC8vQ2FsY3VsIGN1cnJlbnQgWSBwb3NpdGlvbiBiYXNlZCBvblxuICAgIGxldCBteXNlbGZZID0gX2dldFlQb3NpdGlvbihzb3NhV3JhcHBlcik7XG4gICAgLy9JZiB3ZSBkb24ndCBoYXZlIHBhcmVudHMsIGxldCB0YWtlIHByZXZpb3VzWCB2YWx1ZVxuICAgIGlmIChmYXRoZXJYID09IDAgJiYgbW90aGVyWCA9PSAwKSB7XG4gICAgICAgIG15c2VsZlggPSBwcmV2aW91c1g7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvL1Byb2Nlc3Mgb3VyIG93biBwb3NpdGlvblxuICAgICAgICBpZiAoZmF0aGVyWCA9PSAwIHx8IG1vdGhlclggPT0gMCkge1xuICAgICAgICAgICAgbXlzZWxmWCA9IGZhdGhlclggKyBtb3RoZXJYO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbXlzZWxmWCA9IE1hdGguZmxvb3IoKGZhdGhlclggKyBtb3RoZXJYKSAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIC8vSWYgdGhlcmUgaXMgYSBjb25mbGljdCB3aXRoIFByZXZpb3VzIGJveCwgcmVzeW5jIGFuY2VzdG9ycyBhbmQgb3Vyc2VsZlxuICAgICAgICBpZiAobXlzZWxmWCA8IHByZXZpb3VzWCkge1xuICAgICAgICAgICAgLy9zcGVjaWFsIGNhc2UgOiAyIGdlbmVyYXRpb25zIHdpdGggIT0gYm94XG4gICAgICAgICAgICBsZXQgc2hpZnQgPSBwcmV2aW91c1ggLSBteXNlbGZYO1xuICAgICAgICAgICAgbGV0IGFuY2VzdG9yc1Nvc2EgPSBfZ2V0QWxsQW5jZXN0b3JzTWFwT2ZTb3NhV3JhcHBlcihzb3NhV3JhcHBlcik7XG4gICAgICAgICAgICBsZXQgbGVuID0gYW5jZXN0b3JzU29zYS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KGFuY2VzdG9yc1Nvc2FbaV0pLmJveC5zaGlmdFJpZ2h0KHNoaWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG15c2VsZlggPSBwcmV2aW91c1g7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9TZXQgb3VyIG93biBYL1kgdmFsdWVcbiAgICBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoc29zYVdyYXBwZXIuc29zYSkuYm94LnNoaWZ0UmlnaHQobXlzZWxmWCk7XG4gICAgU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHNvc2FXcmFwcGVyLnNvc2EpLmJveC5zZXRZKG15c2VsZlkpO1xuICAgIC8vUmV0dXJuIG91ciBvd24gdmFsdWVcbiAgICByZXR1cm4gbXlzZWxmWDtcbn1cbmZ1bmN0aW9uIF9nZXRZUG9zaXRpb24oc29zYVdyYXBwZXIpIHtcbiAgICAvL0lmIGl0J3MgYWxyZWFkeSBjYWxjdWxhdGVkXG4gICAgaWYgKFN0b3JlLmdyaWQubWFwR2VuZXJhdGlvbllQb3NpdGlvbi5oYXMoc29zYVdyYXBwZXIuZ2VuZXJhdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIFN0b3JlLmdyaWQubWFwR2VuZXJhdGlvbllQb3NpdGlvbi5nZXQoc29zYVdyYXBwZXIuZ2VuZXJhdGlvbik7XG4gICAgfVxuICAgIGxldCB5ID0gMDtcbiAgICAvL0xldCdzIGNhbGN1bGF0ZSBpdFxuICAgIGlmIChzb3NhV3JhcHBlci5nZW5lcmF0aW9uID4gNSkge1xuICAgICAgICAvLyBOdW1iZXIgb2YgZ2VuZXJhdGlvbiBhYm92ZSBtZSAqIHRvdGFsIGhlaWdodCBvZiBib3hWXG4gICAgICAgIHkgPSAoU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkIC0gc29zYVdyYXBwZXIuZ2VuZXJhdGlvbikgKiAoQm94Vi5oZWlnaHQoKSArIEJveFYuaGVpZ2h0UGFkZGluZygpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIE51bWJlciBvZiBnZW5lcmF0aW9uICg+NSkgYWJvdmUgbWUgKiB0b3RhbCBoZWlnaHQgb2YgYm94VlxuICAgICAgICAvLyAgKyBOdW1iZXIgb2YgZ2VuZXJhdGlvbiAobWF4IDUpIGFib3ZlIG1lICogdG90YWwgaGVpZ2h0IG9mIGJveFxuICAgICAgICBpZiAoU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkID4gNSkge1xuICAgICAgICAgICAgeSA9IChTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQgLSA1KSAqIChCb3hWLmhlaWdodCgpICsgQm94Vi5oZWlnaHRQYWRkaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIHkgKz0gKE1hdGgubWluKDUsIFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZCkgLSBzb3NhV3JhcHBlci5nZW5lcmF0aW9uKSAqIChCb3guaGVpZ2h0KCkgKyBCb3guaGVpZ2h0UGFkZGluZygpKTtcbiAgICB9XG4gICAgeSArPSBCb3hBYnN0cmFjdC50b3BNYXJnaW4oKTtcbiAgICBTdG9yZS5ncmlkLm1hcEdlbmVyYXRpb25ZUG9zaXRpb24uc2V0KHNvc2FXcmFwcGVyLmdlbmVyYXRpb24sIHkpO1xuICAgIHJldHVybiB5O1xufVxuZnVuY3Rpb24gX2dldFhQb3NpdGlvbk9uTGVmdEJveChzb3NhV3JhcHBlcikge1xuICAgIGxldCB3aWR0aFBsdXNXaWR0aFBhZGRpbmcgPSAwO1xuICAgIGxldCBsZWZ0TWFyZ2luID0gMDtcbiAgICBpZiAoc29zYVdyYXBwZXIuZ2VuZXJhdGlvbiA+IDUpIHtcbiAgICAgICAgd2lkdGhQbHVzV2lkdGhQYWRkaW5nID0gQm94Vi53aWR0aCgpICsgQm94Vi53aWR0aFBhZGRpbmcoKTtcbiAgICAgICAgbGVmdE1hcmdpbiA9IEJveFYubGVmdE1hcmdpbigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2lkdGhQbHVzV2lkdGhQYWRkaW5nID0gQm94LndpZHRoKCkgKyBCb3gud2lkdGhQYWRkaW5nKCk7XG4gICAgICAgIGxlZnRNYXJnaW4gPSBCb3gubGVmdE1hcmdpbigpO1xuICAgIH1cbiAgICBsZXQgcHJldmlvdXNTb3NhV3JhcHBlciA9IFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldChzb3NhV3JhcHBlci5zb3NhKS5wcmV2aW91c1Nvc2FXcmFwcGVyO1xuICAgIGlmIChwcmV2aW91c1Nvc2FXcmFwcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQocHJldmlvdXNTb3NhV3JhcHBlci5zb3NhKS5ib3guZ2V0WCgpICsgd2lkdGhQbHVzV2lkdGhQYWRkaW5nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxlZnRNYXJnaW47XG4gICAgfVxufVxuLyoqXG4gKiBSZXR1cm4gYSBNYXAgd2l0aCBhbGwgQW5jZXN0b3JzIG9mIGEgU29zYVdyYXBwZXJcbiAqL1xuZnVuY3Rpb24gX2dldEFsbEFuY2VzdG9yc01hcE9mU29zYVdyYXBwZXIoc29zYVdyYXBwZXIpIHtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBpZiAoU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuaGFzKHNvc2FXcmFwcGVyLnNvc2EpKSB7XG4gICAgICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYUZhdGhlcikpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goc29zYVdyYXBwZXIuc29zYUZhdGhlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyhzb3NhV3JhcHBlci5zb3NhTW90aGVyKSkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChzb3NhV3JhcHBlci5zb3NhTW90aGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXkuY29uY2F0KF9nZXRBbGxBbmNlc3RvcnNNYXBPZlNvc2FXcmFwcGVyKG5ldyBTb3NhV3JhcHBlcihzb3NhV3JhcHBlci5zb3NhRmF0aGVyKSksIF9nZXRBbGxBbmNlc3RvcnNNYXBPZlNvc2FXcmFwcGVyKG5ldyBTb3NhV3JhcHBlcihzb3NhV3JhcHBlci5zb3NhTW90aGVyKSkpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59XG4iLCJpbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBGYW1pbHksIEluZGl2aWR1YWwgfSBmcm9tIFwiLi9zdHJ1Y3QuY2xhc3NcIjtcbmNvbnN0IFJFR0VYX0lOREkgPSAvXjAgQEk/KFswLTldKilAIElOREkkLztcbmNvbnN0IFJFR0VYX05BTUUgPSAvXjEgTkFNRSAoLiopXFwvKC4qKVxcLyQvO1xuY29uc3QgUkVHRVhfRkFNQyA9IC9eMSBGQU1DIEBGPyhbMC05XSspQCQvO1xuY29uc3QgUkVHRVhfU0VYID0gL14xIFNFWCAoW0ZNXSkkLztcbmNvbnN0IFJFR0VYX0ZBTUlMWSA9IC9eMCBARj8oWzAtOV0qKUAgRkFNJC87XG5jb25zdCBSRUdFWF9IVVNCID0gL14xIEhVU0IgQEk/KFswLTldKilAJC87XG5jb25zdCBSRUdFWF9XSUZFID0gL14xIFdJRkUgQEk/KFswLTldKilAJC87XG5jb25zdCBSRUdFWF9CSVJUSCA9IC9eMSBCSVJUWyBdPyQvO1xuY29uc3QgUkVHRVhfREVBVEggPSAvXjEgREVBVFsgXT8kLztcbmNvbnN0IFJFR0VYX0RBVEUgPSAvXjIgREFURSAoLiopJC87XG5jb25zdCBSRUdFWF9QTEFDRSA9IC9eMiBQTEFDICguKikkLztcbmNvbnN0IFJFR0VYX1JFUExBQ0VfTkFNRSA9IC9cIi9nO1xuZXhwb3J0IGNsYXNzIEdlZGNvbVBhcnNlciB7XG4gICAgc3RhdGljIHBhcnNlKGdlZGNvbUNvbnRlbnQpIHtcbiAgICAgICAgbGV0IGxpbmUgPSBudWxsO1xuICAgICAgICBsZXQgaW5kaXZpZHVhbCA9IG51bGw7IC8vIE9uZSBJbmRpdmlkdVxuICAgICAgICBsZXQgZmFtaWx5ID0gbnVsbDsgLy9PbmUgRmFtaWxseVxuICAgICAgICBsZXQgYmlydGhJbml0ID0gZmFsc2U7XG4gICAgICAgIGxldCBkZWF0aEluaXQgPSBmYWxzZTtcbiAgICAgICAgbGV0IG1hdGNoZXMgPSBudWxsO1xuICAgICAgICBsZXQgbGluZXMgPSBnZWRjb21Db250ZW50LnNwbGl0KC9bXFxyXFxuXSsvKTtcbiAgICAgICAgbGV0IGxlbiA9IGxpbmVzLmxlbmd0aDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfSU5ESSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIC8vU2F2ZSBwcmV2aW91cyBpbmRpdlxuICAgICAgICAgICAgICAgIGlmIChpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBTdG9yZS5tYXBHZWRUZWNoSWRUb0luZGl2aWR1YWwuc2V0KGluZGl2aWR1YWwuaWQsIGluZGl2aWR1YWwpO1xuICAgICAgICAgICAgICAgICAgICBiaXJ0aEluaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgZGVhdGhJbml0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChTdG9yZS5maXJzdEdlZFRlY2hJZFBhcnNlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBTdG9yZS5maXJzdEdlZFRlY2hJZFBhcnNlZCA9IGluZGl2aWR1YWwuaWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhdGUgY2xhc3NcbiAgICAgICAgICAgICAgICBpbmRpdmlkdWFsID0gbmV3IEluZGl2aWR1YWwoKTtcbiAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmlkID0gcGFyc2VJbnQobWF0Y2hlc1sxXS50cmltKCkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfTkFNRSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmZpcnN0bmFtZSA9IG1hdGNoZXNbMV0ucmVwbGFjZShSRUdFWF9SRVBMQUNFX05BTUUsICcnKS50cmltKCk7XG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5sYXN0bmFtZSA9IG1hdGNoZXNbMl0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfRkFNQyk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmZhbWMgPSBwYXJzZUludChtYXRjaGVzWzFdLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9TRVgpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgaW5kaXZpZHVhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5zZXggPSBtYXRjaGVzWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX0ZBTUlMWSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIC8vU2F2ZSBwcmV2aW91cyBmYW1pbHlcbiAgICAgICAgICAgICAgICBpZiAoZmFtaWx5ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgU3RvcmUubWFwQ29kZUZhbWlseS5zZXQoZmFtaWx5LmlkLCBmYW1pbHkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJbml0aWF0ZSBhcnJheVxuICAgICAgICAgICAgICAgIGZhbWlseSA9IG5ldyBGYW1pbHkoKTtcbiAgICAgICAgICAgICAgICBmYW1pbHkuaWQgPSBwYXJzZUludChtYXRjaGVzWzFdLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9IVVNCKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZhbWlseS5mYXRoZXIgPSBwYXJzZUludChtYXRjaGVzWzFdLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9XSUZFKTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZhbWlseS5tb3RoZXIgPSBwYXJzZUludChtYXRjaGVzWzFdLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9CSVJUSCk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBiaXJ0aEluaXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGRlYXRoSW5pdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfREVBVEgpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgaW5kaXZpZHVhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVhdGhJbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBiaXJ0aEluaXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX0RBVEUpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgaW5kaXZpZHVhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJpcnRoSW5pdCkge1xuICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmJpcnRoRGF0ZSA9IG1hdGNoZXNbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWF0aEluaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5kZWF0aERhdGUgPSBtYXRjaGVzWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9QTEFDRSk7XG4gICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmlydGhJbml0KSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWwuYmlydGhQbGFjZSA9IG1hdGNoZXNbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChkZWF0aEluaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5kZWF0aFBsYWNlID0gbWF0Y2hlc1sxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIExvZ2dlci50aW1lclN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgTG9nZ2VyLnRpbWVyU3RlcCA9IERhdGUubm93KCk7XG4gICAgfVxuICAgIHN0YXRpYyBsb2cobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UgKyBcIiBtcyBlbGFwc2VkID0gXCIgKyAoRGF0ZS5ub3coKSAtIExvZ2dlci50aW1lclN0ZXApICsgXCJtc1wiICsgXCIgLyBcIiArIChEYXRlLm5vdygpIC0gTG9nZ2VyLnRpbWVyU3RhcnQpICsgXCJtc1wiKTtcbiAgICAgICAgTG9nZ2VyLnRpbWVyU3RlcCA9IERhdGUubm93KCk7XG4gICAgfVxufVxuTG9nZ2VyLnRpbWVyU3RhcnQgPSBudWxsO1xuTG9nZ2VyLnRpbWVyU3RlcCA9IG51bGw7XG4iLCJpbXBvcnQgJ0Bzdmdkb3Rqcy9zdmcucGFuem9vbS5qcyc7XG5pbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IHsgc3ZnMnBkZiB9IGZyb20gXCJzdmcycGRmLmpzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBTVkdSZW5kZXJlciB9IGZyb20gXCIuL1NWR1JlbmRlcmVyXCI7XG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVQZGYoKSB7XG4gICAgcGRmVmlld0JveCgpO1xuICAgIGNvbnN0IGNvbiA9IDQ7IC8vUmF0aW8gcHggPT4gbW1cbiAgICBjb25zdCBwZGZvYmplY3RXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZGZvYmplY3RXcmFwcGVyXCIpO1xuICAgIGNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKVswXTtcbiAgICBsZXQgcGRmb2JqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZGZvYmplY3RcIik7XG4gICAgLy9TaG93IFdyYXBwZXJcbiAgICBwZGZvYmplY3RXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgbGV0IG9yaWVudGF0aW9uID0gJ2wnO1xuICAgIGlmIChTdG9yZS5wb3NpdGlvbllNYXggPiBTdG9yZS5wb3NpdGlvblhNYXgpIHtcbiAgICAgICAgb3JpZW50YXRpb24gPSAncCc7XG4gICAgfVxuICAgIGNvbnN0IHBkZiA9IG5ldyBqc1BERihvcmllbnRhdGlvbiwgJ21tJywgW1N0b3JlLnBvc2l0aW9uWE1heCAvIGNvbiwgU3RvcmUucG9zaXRpb25ZTWF4IC8gY29uXSk7XG4gICAgLy8gcmVuZGVyIHRoZSBzdmcgZWxlbWVudFxuICAgIHN2ZzJwZGYoc3ZnRWxlbWVudCwgcGRmLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHdpZHRoOiBTdG9yZS5wb3NpdGlvblhNYXggLyBjb24sXG4gICAgICAgIGhlaWdodDogU3RvcmUucG9zaXRpb25ZTWF4IC8gY29uXG4gICAgICAgIC8vc2NhbGU6MVxuICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmkgPSBwZGYub3V0cHV0KCdkYXRhdXJpc3RyaW5nJyk7XG4gICAgICAgIGlmICh1cmkubGVuZ3RoIDwgNTAwMDAwMCkge1xuICAgICAgICAgICAgLy9UT0RPIDogY3JlYXRpbmcgSFRNTEVtYmVkZWRFbGVtZW50IGluIHRlbXBsYXRlLlxuICAgICAgICAgICAgaWYgKHBkZm9iamVjdCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwZGZvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZW1iZWRcIik7XG4gICAgICAgICAgICAgICAgcGRmb2JqZWN0LnNldEF0dHJpYnV0ZShcInNyY1wiLCB1cmkpO1xuICAgICAgICAgICAgICAgIHBkZm9iamVjdC5pZCA9IFwicGRmb2JqZWN0XCI7XG4gICAgICAgICAgICAgICAgcGRmb2JqZWN0LnR5cGUgPSBcImFwcGxpY2F0aW9uL3BkZlwiO1xuICAgICAgICAgICAgICAgIHBkZm9iamVjdFdyYXBwZXIuYXBwZW5kQ2hpbGQocGRmb2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBkZm9iamVjdC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdXJpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBkZi5zYXZlKCdteVBERi5wZGYnKTtcbiAgICAgICAgfVxuICAgICAgICAvL1Jlc2V0IGluZm9ybWF0aW9uIHBvc3QgcGRmIGdlbmVyYXRpb25cbiAgICAgICAgLy9UT0RPIHJlc3RvcmluZyBwcmV2aW91cyBwb3NpdGlvbiBcbiAgICAgICAgU1ZHUmVuZGVyZXIuc3ZnVmlld0JveCgpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBkZlZpZXdCb3goKSB7XG4gICAgbGV0IHcgPSAxMDA7XG4gICAgaWYgKFN0b3JlLnBvc2l0aW9uWE1heCAvIHdpbmRvdy5pbm5lcldpZHRoIDwgU3RvcmUucG9zaXRpb25ZTWF4IC8gd2luZG93LmlubmVySGVpZ2h0KSB7XG4gICAgICAgIHcgPSAod2luZG93LmlubmVyV2lkdGggKiAxMDAgLyAoU3RvcmUucG9zaXRpb25ZTWF4ICogd2luZG93LmlubmVySGVpZ2h0IC8gd2luZG93LmlubmVyV2lkdGgpKTtcbiAgICB9XG4gICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyXG4gICAgICAgIC52aWV3Ym94KDAsIDAsIFN0b3JlLnBvc2l0aW9uWE1heCwgU3RvcmUucG9zaXRpb25ZTWF4KVxuICAgICAgICAuc2l6ZSh3ICsgJyUnLCAnMTAwJScpO1xuICAgIHJldHVybjtcbiAgICAvL3dpbmRvdy5pbm5lcldpZHRoIC8gU3RvcmUucG9zaXRpb25YTWF4XG4gICAgLy93aW5kb3cuaW5uZXJIZWlnaHQgLyBTdG9yZS5wb3NpdGlvbllNYXhcbiAgICBTVkdSZW5kZXJlci5jb250YWluZXJcbiAgICAgICAgLnZpZXdib3goMCwgMCwgU3RvcmUucG9zaXRpb25YTWF4LCBTdG9yZS5wb3NpdGlvbllNYXgpXG4gICAgICAgIC8vLnNpemUod2luZG93LmlubmVyV2lkdGggLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgICAgIC5zaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpXG4gICAgICAgIC56b29tKDEwKTtcbn1cbiIsImV4cG9ydCBjbGFzcyBQcm9ncmVzc0JhciB7XG4gICAgY29uc3RydWN0b3IobmJTdGVwcykge1xuICAgICAgICB0aGlzLm5iU3RlcHMgPSBudWxsO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5hZHZhbmNlSHRtbEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLnRleHRIdG1sRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBudWxsO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xuICAgICAgICB0aGlzLm5iU3RlcHMgPSBuYlN0ZXBzO1xuICAgICAgICB0aGlzLmh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzQmFyJyk7XG4gICAgICAgIHRoaXMuYWR2YW5jZUh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YlByb2dyZXNzQmFyJyk7XG4gICAgICAgIHRoaXMudGV4dEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRQcm9ncmVzc0JhcicpO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgaW5pdGlhdGVQcm9ncmVzc0JhcihtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICBtb3ZpbmdQcm9ncmVzc0JhcihtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXArKztcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgaGlkaW5nUHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIHRoaXMuaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5hZHZhbmNlSHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLmN1cnJlbnRTdGVwICogKDEwMCAvIHRoaXMubmJTdGVwcykgKyAnJSc7XG4gICAgICAgIHRoaXMudGV4dEh0bWxFbGVtZW50LmlubmVySFRNTCA9IHRoaXMubWVzc2FnZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTVkcgfSBmcm9tIFwiQHN2Z2RvdGpzL3N2Zy5qc1wiO1xuaW1wb3J0ICdAc3ZnZG90anMvc3ZnLnBhbnpvb20uanMnO1xuaW1wb3J0IHsgQm94LCBCb3hWIH0gZnJvbSBcIi4vQm94LmNsYXNzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5leHBvcnQgY2xhc3MgU1ZHUmVuZGVyZXIge1xuICAgIHN0YXRpYyBkcmF3U1ZHKGh0bWxJZCkge1xuICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXIgPSBTVkcoKS5hZGRUbyhodG1sSWQpO1xuICAgICAgICBTVkdSZW5kZXJlci5zdmdWaWV3Qm94KCk7XG4gICAgICAgIFNWR1JlbmRlcmVyLnBvbHlsaW5lKFswLCAwLCAwLCBTdG9yZS5wb3NpdGlvbllNYXgsIFN0b3JlLnBvc2l0aW9uWE1heCwgU3RvcmUucG9zaXRpb25ZTWF4LCBTdG9yZS5wb3NpdGlvblhNYXgsIDAsIDAsIDBdKTtcbiAgICAgICAgU1ZHUmVuZGVyZXIuZHJhd0xvb3AoMSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3gnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgc3RhdGljIGRyYXdMb29wKGdlbmVyYXRpb24pIHtcbiAgICAgICAgaWYgKGdlbmVyYXRpb24gPiBTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc29zYVdyYXBwZXIgPSBudWxsO1xuICAgICAgICBsZXQgYm94ID0gbnVsbDtcbiAgICAgICAgbGV0IHdpZHRoID0gbnVsbDtcbiAgICAgICAgbGV0IGhlaWdodCA9IG51bGw7XG4gICAgICAgIGxldCBiaXJ0aCA9IG51bGw7XG4gICAgICAgIGxldCBkZWF0aCA9IG51bGw7XG4gICAgICAgIGxldCB5SW5jcmVtZW50ID0gbnVsbDtcbiAgICAgICAgbGV0IHRtcFN0ciA9IG51bGw7XG4gICAgICAgIGNvbnN0IG5iQ2FyMWVtID0gMjY7XG4gICAgICAgIGNvbnN0IG5iQ2FyMDdlbSA9IDM0O1xuICAgICAgICBpZiAoZ2VuZXJhdGlvbiA+IDUpIHtcbiAgICAgICAgICAgIHdpZHRoID0gQm94Vi53aWR0aCgpO1xuICAgICAgICAgICAgaGVpZ2h0ID0gQm94Vi5oZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHdpZHRoID0gQm94LndpZHRoKCk7XG4gICAgICAgICAgICBoZWlnaHQgPSBCb3guaGVpZ2h0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNvc2FzID0gU3RvcmUuZ3JpZC5tYXBHZW5lcmF0aW9uU29zYS5nZXQoZ2VuZXJhdGlvbik7XG4gICAgICAgIGxldCBsZW4gPSBzb3Nhcy5sZW5ndGg7XG4gICAgICAgIGxldCBrZXkgPSBudWxsO1xuICAgICAgICBsZXQgbmFtZSA9IG51bGw7XG4gICAgICAgIGxldCBncmlkRW50cnkgPSBudWxsO1xuICAgICAgICBjb25zdCByZWdleEJlZm9yZSA9IC9eQkVGL2k7XG4gICAgICAgIGNvbnN0IHJlZ2V4QWZ0ZXIgPSAvXkFGVC9pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBrZXkgPSBzb3Nhc1tpXTtcbiAgICAgICAgICAgIGlmICghU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuaGFzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJncmlkLm1hcFNvc2FUb0dyaWRFbnRyeSBkb2Vzbid0IGhhdmUga2V5ICVvXCIsIGtleSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBncmlkRW50cnkgPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoa2V5KTtcbiAgICAgICAgICAgIHNvc2FXcmFwcGVyID0gZ3JpZEVudHJ5LnNvc2FXcmFwcGVyO1xuICAgICAgICAgICAgYm94ID0gZ3JpZEVudHJ5LmJveDtcbiAgICAgICAgICAgIG5hbWUgPSBncmlkRW50cnkuZmlyc3RuYW1lICsgXCIgXCIgKyBncmlkRW50cnkubGFzdG5hbWU7XG4gICAgICAgICAgICB5SW5jcmVtZW50ID0gMTU7XG4gICAgICAgICAgICBiaXJ0aCA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoZ3JpZEVudHJ5LmJpcnRoRGF0ZSAhPSB1bmRlZmluZWQgfHwgZ3JpZEVudHJ5LmJpcnRoUGxhY2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgYmlydGggKz0gXCLCpFwiO1xuICAgICAgICAgICAgICAgIGlmIChncmlkRW50cnkuYmlydGhEYXRlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBiaXJ0aCArPSBcIiBcIiArIGdyaWRFbnRyeS5iaXJ0aERhdGUucmVwbGFjZShyZWdleEJlZm9yZSwgJzwnKS5yZXBsYWNlKHJlZ2V4QWZ0ZXIsICc+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChncmlkRW50cnkuYmlydGhQbGFjZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wU3RyID0gZ3JpZEVudHJ5LmJpcnRoUGxhY2Uuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgYmlydGggKz0gXCIgXCIgKyB0bXBTdHJbMF0gKyBcIiwgXCIgKyB0bXBTdHJbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVhdGggPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGdyaWRFbnRyeS5kZWF0aERhdGUgIT0gdW5kZWZpbmVkIHx8IGdyaWRFbnRyeS5kZWF0aFBsYWNlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGRlYXRoICs9IFwiw5dcIjtcbiAgICAgICAgICAgICAgICBpZiAoZ3JpZEVudHJ5LmRlYXRoRGF0ZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVhdGggKz0gXCIgXCIgKyBncmlkRW50cnkuZGVhdGhEYXRlLnJlcGxhY2UocmVnZXhCZWZvcmUsICc8JykucmVwbGFjZShyZWdleEFmdGVyLCAnPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ3JpZEVudHJ5LmRlYXRoUGxhY2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRtcFN0ciA9IGdyaWRFbnRyeS5kZWF0aFBsYWNlLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgICAgIGRlYXRoICs9IFwiIFwiICsgdG1wU3RyWzBdICsgXCIsXCIgKyB0bXBTdHJbMV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRGVzc2luIGRlIGxhIGJveFxuICAgICAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyLnJlY3Qod2lkdGgsIGhlaWdodClcbiAgICAgICAgICAgICAgICAuZmlsbCgnI2VlZScpXG4gICAgICAgICAgICAgICAgLm1vdmUoYm94LmdldFgoKSwgYm94LmdldFkoKSlcbiAgICAgICAgICAgICAgICAuc3Ryb2tlKHsgd2lkdGg6IDEsIGNvbG9yOiAnI2NjYycgfSlcbiAgICAgICAgICAgICAgICAucmFkaXVzKDEwKTtcbiAgICAgICAgICAgIC8vRm9yIGRlYnVnIG9ubHlcbiAgICAgICAgICAgIC8vbmFtZSA9ICcjJysgZ3JpZEVudHJ5LnNvc2FXcmFwcGVyLnNvc2EgKyBcIiBcIiArIG5hbWVcbiAgICAgICAgICAgIC8vRm9yIGRlYnVnIG9ubHlcbiAgICAgICAgICAgIC8vMjYgY2FyIGluIHNpemUgMWVtXG4gICAgICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXIucGxhaW4obmFtZS5zdWJzdHJpbmcoMCwgbmJDYXIxZW0pKS5tb3ZlKGJveC5nZXRYKCkgKyA1LCBib3guZ2V0WSgpICsgeUluY3JlbWVudCk7XG4gICAgICAgICAgICAvL0RyYXdQZGYuZHJhd1NWRy5wbGFpbihzb3NhV3JhcHBlci5nZXRTb3NhKCkgKyBcIiBbXCIgKyBib3guZ2V0WCgpICArICcvJyArIGJveC5nZXRZKCkgKyBcIl1cIikubW92ZShib3guZ2V0WCgpICsgNSwgYm94LmdldFkoKSArIHlJbmNyZW1lbnQpXG4gICAgICAgICAgICB5SW5jcmVtZW50ICs9IDE1O1xuICAgICAgICAgICAgaWYgKG5hbWUubGVuZ3RoID4gbmJDYXIxZW0pIHtcbiAgICAgICAgICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXIucGxhaW4obmFtZS5zdWJzdHJpbmcobmJDYXIxZW0sIDIgKiBuYkNhcjFlbSkpLm1vdmUoYm94LmdldFgoKSArIDUsIGJveC5nZXRZKCkgKyB5SW5jcmVtZW50KTtcbiAgICAgICAgICAgICAgICB5SW5jcmVtZW50ICs9IDE1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8zNCBjYXIgaW4gc2l6ZSAwLjdlbVxuICAgICAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyLnBsYWluKGJpcnRoLnN1YnN0cmluZygwLCBuYkNhcjA3ZW0pKS5mb250KCdzaXplJywgJzEwJykubW92ZShib3guZ2V0WCgpICsgNSwgYm94LmdldFkoKSArIHlJbmNyZW1lbnQpO1xuICAgICAgICAgICAgaWYgKGJpcnRoLmxlbmd0aCA+IG5iQ2FyMDdlbSkge1xuICAgICAgICAgICAgICAgIHlJbmNyZW1lbnQgKz0gMTA7XG4gICAgICAgICAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyLnBsYWluKGJpcnRoLnN1YnN0cmluZyhuYkNhcjA3ZW0sIDIgKiBuYkNhcjA3ZW0pKS5mb250KCdzaXplJywgJzEwJykubW92ZShib3guZ2V0WCgpICsgNSwgYm94LmdldFkoKSArIHlJbmNyZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeUluY3JlbWVudCArPSAxMDtcbiAgICAgICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lci5wbGFpbihkZWF0aC5zdWJzdHJpbmcoMCwgbmJDYXIwN2VtKSkuZm9udCgnc2l6ZScsICcxMCcpLm1vdmUoYm94LmdldFgoKSArIDUsIGJveC5nZXRZKCkgKyB5SW5jcmVtZW50KTtcbiAgICAgICAgICAgIGlmIChkZWF0aC5sZW5ndGggPiBuYkNhcjA3ZW0pIHtcbiAgICAgICAgICAgICAgICB5SW5jcmVtZW50ICs9IDEwO1xuICAgICAgICAgICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lci5wbGFpbihkZWF0aC5zdWJzdHJpbmcobmJDYXIwN2VtLCAyICogbmJDYXIwN2VtKSkuZm9udCgnc2l6ZScsICcxMCcpLm1vdmUoYm94LmdldFgoKSArIDUsIGJveC5nZXRZKCkgKyB5SW5jcmVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vU2kgcMOocmUgZXhpc3RlIDogbGlhaXNvblxuICAgICAgICAgICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyhzb3NhV3JhcHBlci5zb3NhRmF0aGVyKSkge1xuICAgICAgICAgICAgICAgIGxldCBmYXRoZXIgPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoc29zYVdyYXBwZXIuc29zYUZhdGhlcikuYm94O1xuICAgICAgICAgICAgICAgIGxldCBtaWRkbGVZID0gKGZhdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueSArIGJveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueSkgLyAyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWxpbmUoW2JveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueCwgYm94LmdldFRvcEp1bmN0aW9uUG9pbnQoKS55LFxuICAgICAgICAgICAgICAgICAgICBib3guZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLngsIG1pZGRsZVksXG4gICAgICAgICAgICAgICAgICAgIGZhdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueCwgbWlkZGxlWSxcbiAgICAgICAgICAgICAgICAgICAgZmF0aGVyLmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS54LCBmYXRoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLnldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vU2kgbcOocmUgZXhpc3RlIDogbGlhaXNvblxuICAgICAgICAgICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyhzb3NhV3JhcHBlci5zb3NhTW90aGVyKSkge1xuICAgICAgICAgICAgICAgIGxldCBtb3RoZXIgPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoc29zYVdyYXBwZXIuc29zYU1vdGhlcikuYm94O1xuICAgICAgICAgICAgICAgIGxldCBtaWRkbGVZID0gKG1vdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueSArIGJveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueSkgLyAyO1xuICAgICAgICAgICAgICAgIHRoaXMucG9seWxpbmUoW2JveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueCwgYm94LmdldFRvcEp1bmN0aW9uUG9pbnQoKS55LFxuICAgICAgICAgICAgICAgICAgICBib3guZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLngsIG1pZGRsZVksXG4gICAgICAgICAgICAgICAgICAgIG1vdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueCwgbWlkZGxlWSxcbiAgICAgICAgICAgICAgICAgICAgbW90aGVyLmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS54LCBtb3RoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLnldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBnZW5lcmF0aW9uKys7XG4gICAgICAgIC8vVE9ETyB2ZXJpZmllciBjZSBjb2RlXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmF3TG9vcChnZW5lcmF0aW9uKTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuICAgIHN0YXRpYyBzdmdWaWV3Qm94KCkge1xuICAgICAgICAvLyBYIHBvc2l0aW9uIG9mIHRoZSBTT1NBICMxXG4gICAgICAgIGxldCB2aWV3Ym94WCA9IFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldCgxKS5ib3guZ2V0WCgpIC0gKCh3aW5kb3cuaW5uZXJXaWR0aCAtIDEwKSAvIDIpICsgQm94LndpZHRoKCkgLyAyO1xuICAgICAgICBsZXQgdmlld2JveFkgPSBTdG9yZS5wb3NpdGlvbllNYXggLSB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDA7XG4gICAgICAgIGlmIChTdG9yZS5wb3NpdGlvbllNYXggPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHZpZXdib3hZID0gKFN0b3JlLnBvc2l0aW9uWU1heCAtIHdpbmRvdy5pbm5lckhlaWdodCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lclxuICAgICAgICAgICAgLnZpZXdib3godmlld2JveFgsIHZpZXdib3hZLCB3aW5kb3cuaW5uZXJXaWR0aCAtIDEwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMClcbiAgICAgICAgICAgIC5zaXplKCcxMDAlJywgJzEwMCUnKVxuICAgICAgICAgICAgLnBhblpvb20oeyB6b29tTWluOiAwLjAyLCB6b29tTWF4OiAyMCwgem9vbUZhY3RvcjogMC4xNSB9KVxuICAgICAgICAgICAgLnpvb20oMSk7XG4gICAgfVxuICAgIHN0YXRpYyBwb2x5bGluZShjb29yZCkge1xuICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXIucG9seWxpbmUoY29vcmQpXG4gICAgICAgICAgICAuZmlsbCgnbm9uZScpXG4gICAgICAgICAgICAuc3Ryb2tlKHsgd2lkdGg6IDEsIGNvbG9yOiAnIzAwMCcgfSk7XG4gICAgfVxufVxuU1ZHUmVuZGVyZXIuY29udGFpbmVyID0gbnVsbDtcbiIsImltcG9ydCB7IFZpcnR1YWxHcmlkIH0gZnJvbSBcIi4vc3RydWN0LmNsYXNzXCI7XG5leHBvcnQgY2xhc3MgU3RvcmUge1xuICAgIHN0YXRpYyBpbml0KCkge1xuICAgICAgICBTdG9yZS5nZW5lcmF0aW9uTWF4ID0gMTAwO1xuICAgICAgICBTdG9yZS5tYXBHZWRUZWNoSWRUb0luZGl2aWR1YWwgPSBuZXcgTWFwKCk7XG4gICAgICAgIFN0b3JlLm1hcENvZGVGYW1pbHkgPSBuZXcgTWFwKCk7XG4gICAgICAgIFN0b3JlLmZpcnN0R2VkVGVjaElkUGFyc2VkID0gbnVsbDsgLy8gbmVlZCB0byBiZSBudWxsXG4gICAgICAgIFN0b3JlLnJlc2V0Rm9yUmVkcmF3KCk7XG4gICAgfVxuICAgIHN0YXRpYyByZXNldEZvclJlZHJhdygpIHtcbiAgICAgICAgU3RvcmUucG9zaXRpb25YTWF4ID0gMDtcbiAgICAgICAgU3RvcmUucG9zaXRpb25ZTWF4ID0gMDtcbiAgICAgICAgU3RvcmUuZ3JpZCA9IG5ldyBWaXJ0dWFsR3JpZCgpO1xuICAgIH1cbn1cblN0b3JlLmdlbmVyYXRpb25NYXggPSAxMDA7XG5TdG9yZS5tYXBHZWRUZWNoSWRUb0luZGl2aWR1YWwgPSBudWxsOyAvLyBtYXAgU29zYSAvIEdlZGNvbSBJbmRpdmlkdXNcblN0b3JlLm1hcENvZGVGYW1pbHkgPSBudWxsOyAvLyBtYXAgU29zYSAvIEdlZGNvbSBmYW1pbGxpZXNcblN0b3JlLmZpcnN0R2VkVGVjaElkUGFyc2VkID0gbnVsbDsgLy8gRmlyc3QgU29zYSBwcm9jZXNzZWQgYnkgdGhlIHBhcnNlclxuU3RvcmUucG9zaXRpb25YTWF4ID0gMDtcblN0b3JlLnBvc2l0aW9uWU1heCA9IDA7XG5TdG9yZS5ncmlkID0gbnVsbDtcbiIsImltcG9ydCB7IExvZ2dlciB9IGZyb20gXCIuL0xvZ2dlclwiO1xuZXhwb3J0IGNsYXNzIFRhc2tPcmNoZXN0cmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHByb2dyZXNzQmFyKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSBudWxsO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gbnVsbDtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gcHJvZ3Jlc3NCYXI7XG4gICAgfVxuICAgIGFkZChjb21tYW5kZSwgYXJncywgbWVzc2FnZSkge1xuICAgICAgICB0aGlzLnRhc2tzLnB1c2goW2NvbW1hbmRlLCBhcmdzLCBtZXNzYWdlXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRhc2tDb21tYW5kZSA9IHRoaXMudGFza3NbMF1bMF07IC8vIENvbW1hbmRlXG4gICAgICAgIGxldCB0YXNrQXJncyA9IHRoaXMudGFza3NbMF1bMV07IC8vIEFyZ3NcbiAgICAgICAgbGV0IHRhc2tNZXNzYWdlID0gdGhpcy50YXNrc1swXVsyXTsgLy8gQ3VzdG9tIE1lc3NhZ2VcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5tb3ZpbmdQcm9ncmVzc0Jhcih0YXNrTWVzc2FnZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgTG9nZ2VyLmxvZyhcIlN0YXJ0IFwiICsgdGFza01lc3NhZ2UpO1xuICAgICAgICAgICAgdGFza0NvbW1hbmRlKC4uLnRhc2tBcmdzKTtcbiAgICAgICAgICAgIExvZ2dlci5sb2coXCJFbmQgXCIgKyB0YXNrTWVzc2FnZSk7XG4gICAgICAgICAgICAvL1JlbW92ZSBmaXJzdCB0YXNrXG4gICAgICAgICAgICB0aGlzLnRhc2tzLnNoaWZ0KCk7XG4gICAgICAgICAgICAvL1JlcnVuIG15c2VsZlxuICAgICAgICAgICAgdGhpcy5ydW4oKTtcbiAgICAgICAgfSwgMjApO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9hc3NldHMvY3NzL2RlbW8uY3NzJztcbmltcG9ydCAnLi9hc3NldHMvaW1ncy9kb3dubG9hZC5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9nZWRjb20vSEFQSU9UX0VtaWxlX3NhbXBsZS5nZWQnO1xuaW1wb3J0IHsgU1ZHUmVuZGVyZXIgfSBmcm9tICcuL1NWR1JlbmRlcmVyJztcbmltcG9ydCB7IEdlZGNvbVBhcnNlciB9IGZyb20gJy4vR2VkY29tUGFyc2VyJztcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi9Qcm9ncmVzc0Jhci5jbGFzcyc7XG5pbXBvcnQgeyBTb3NhV3JhcHBlciB9IGZyb20gJy4vc3RydWN0LmNsYXNzJztcbmltcG9ydCB7IFRhc2tPcmNoZXN0cmF0b3IgfSBmcm9tICcuL1Rhc2tPcmNoZXN0cmF0b3IuY2xhc3MnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL1N0b3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vTG9nZ2VyJztcbmltcG9ydCB7IEJveCwgQm94ViB9IGZyb20gJy4vQm94LmNsYXNzJztcbmltcG9ydCB7IHBvcHVsYXRlR3JpZCwgc2V0dXBCb3hGb3JHcmlkRW50cnksIGNvbXByZXNzQ29udGFpbmVyIH0gZnJvbSAnLi9Db250YWluZXJGYWN0b3J5JztcbmltcG9ydCB7IGdlbmVyYXRlUGRmIH0gZnJvbSAnLi9QREZSZW5kZXJlcic7XG5jb25zdCBTT1NBX09ORSA9IG5ldyBTb3NhV3JhcHBlcigxKTtcbnZhciBwcm9ncmVzc0JhciA9IG51bGw7XG52YXIgdGFza09yY2hlc3RyYXRvciA9IG51bGw7XG5jb25zdCBfSFRNTF9FTEVNRU5UX19GSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKTtcbmNvbnN0IF9IVE1MX0VMRU1FTlRfX0ZPUk0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm94Jyk7XG5jb25zdCBfSFRNTF9FTEVNRU5UX19QREYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmMScpO1xuY29uc3QgX0hUTUxfRUxFTUVOVF9fU1ZHID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N2ZycpO1xuY29uc3QgX0hUTUxfRUxFTUVOVF9fUk9PVF9JTlBVVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFJvb3QnKTtcbmNvbnN0IF9IVE1MX0VMRU1FTlRfX1JPT1RfRVhFQyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGVjUm9vdCcpO1xuY29uc3QgX0hUTUxfRUxFTUVOVF9fUk9PVF9DQU5DRUwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsUm9vdCcpO1xuY29uc3QgX0hUTUxfRUxFTUVOVF9fUk9PVF9TV0lUQ0ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoUm9vdCcpO1xuY29uc3QgX0hUTUxfRUxFTUVOVF9fUk9PVF9SRVNVTFRTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHNSb290Jyk7XG5jb25zdCBfSFRNTF9FTEVNRU5UX19ST09UX1NFTEVDVFdSQVBQRVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0Um9vdFdyYXBwZXInKTtcbmNvbnN0IF9IVE1MX0VMRU1FTlRfX1JPT1RfTk9SRVNVTFQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9SZXN1bHQnKTtcbmNvbnN0IF9IVE1MX0VMRU1FTlRfX1BST0dSRVNTQkFSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzQmFyJyk7XG5jb25zdCBfSFRNTF9FTEVNRU5UX19IRUFERVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG5jb25zdCBfSFRNTF9FTEVNRU5UX19QREZXUkFQUEVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZm9iamVjdFdyYXBwZXInKTtcbmNvbnN0IF9IVE1MX0VMRU1FTlRfX1NUQVJUVFlQRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydFR5cGUnKTtcbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgX0hUTUxfRUxFTUVOVF9fRklMRS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBydW4oX0hUTUxfRUxFTUVOVF9fRklMRS5maWxlc1swXSk7XG4gICAgfSk7XG4gICAgbGV0IGlzQWR2YW5jZWRVcGxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcmV0dXJuICgoJ2RyYWdnYWJsZScgaW4gZGl2KSB8fCAoJ29uZHJhZ3N0YXJ0JyBpbiBkaXYgJiYgJ29uZHJvcCcgaW4gZGl2KSkgJiYgJ0Zvcm1EYXRhJyBpbiB3aW5kb3cgJiYgJ0ZpbGVSZWFkZXInIGluIHdpbmRvdztcbiAgICB9KCk7XG4gICAgaWYgKGlzQWR2YW5jZWRVcGxvYWQpIHtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5jbGFzc0xpc3QuYWRkKCdoYXMtYWR2YW5jZWQtdXBsb2FkJyk7XG4gICAgICAgIGxldCBmdW5jRHJhZyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZnVuY0RyYWdPdmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5jbGFzc0xpc3QuYWRkKCdpcy1kcmFnb3ZlcicpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZnVuY0RyYWdMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtZHJhZ292ZXInKTtcbiAgICAgICAgfTtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnJywgZnVuY0RyYWcpO1xuICAgICAgICBfSFRNTF9FTEVNRU5UX19GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGZ1bmNEcmFnKTtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZnVuY0RyYWcpO1xuICAgICAgICBfSFRNTF9FTEVNRU5UX19GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZnVuY0RyYWcpO1xuICAgICAgICBfSFRNTF9FTEVNRU5UX19GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGZ1bmNEcmFnKTtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBmdW5jRHJhZyk7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGZ1bmNEcmFnKTtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmNEcmFnT3Zlcik7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZnVuY0RyYWdPdmVyKTtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBmdW5jRHJhZ0xlYXZlKTtcbiAgICAgICAgX0hUTUxfRUxFTUVOVF9fRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZnVuY0RyYWdMZWF2ZSk7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGZ1bmNEcmFnTGVhdmUpO1xuICAgICAgICBfSFRNTF9FTEVNRU5UX19GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbGV0IGRyb3BwZWRGaWxlcyA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkcm9wcGVkRmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZHJvcHBlZEZpbGVzW2ldWyduYW1lJ10uZW5kc1dpdGgoJy5nZWRjb20nKSB8fCBkcm9wcGVkRmlsZXNbaV1bJ25hbWUnXS5lbmRzV2l0aCgnLmdlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJ1bihkcm9wcGVkRmlsZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfSFRNTF9FTEVNRU5UX19QREYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZVBkZik7XG4gICAgX0hUTUxfRUxFTUVOVF9fU1ZHLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZGVQZGZvYmplY3RXcmFwcGVyKTtcbiAgICBfSFRNTF9FTEVNRU5UX19ST09UX0lOUFVULmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdHlwaW5nUm9vdCk7XG4gICAgX0hUTUxfRUxFTUVOVF9fUk9PVF9FWEVDLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlUm9vdCk7XG4gICAgX0hUTUxfRUxFTUVOVF9fUk9PVF9DQU5DRUwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYW5jZWxSb290KTtcbiAgICBfSFRNTF9FTEVNRU5UX19ST09UX1NXSVRDSC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dSb290KTtcbn1cbmZ1bmN0aW9uIHJ1bihmaWxlKSB7XG4gICAgLy9Jbml0IHRoZSBpbnRlcm5hbCBTdG9yZVxuICAgIFN0b3JlLmluaXQoKTtcbiAgICAvL0luaXQgdGhlIExvZ2dlciBzeXN0ZW1cbiAgICBMb2dnZXIuaW5pdCgpO1xuICAgIHNob3coW19IVE1MX0VMRU1FTlRfX1BST0dSRVNTQkFSXSk7XG4gICAgcHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoOCk7XG4gICAgcHJvZ3Jlc3NCYXIubW92aW5nUHJvZ3Jlc3NCYXIoXCJSZWFkaW5nIEZpbGVcIik7XG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgLy8gRGVzY3JpYmUgZnVuY3Rpb24gb2YgcmVhZGluZ1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGFza09yY2hlc3RyYXRvciA9IG5ldyBUYXNrT3JjaGVzdHJhdG9yKHByb2dyZXNzQmFyKTtcbiAgICAgICAgdGFza09yY2hlc3RyYXRvci5hZGQoR2VkY29tUGFyc2VyLnBhcnNlLCBbZXZlbnQudGFyZ2V0LnJlc3VsdF0sIFwiUGFyc2luZyBHZWRjb20gRGF0YVwiKVxuICAgICAgICAgICAgLmFkZChleHBsb2l0LCBbU09TQV9PTkVdLCBcIkV4cGxvaXRpbmcgR2VkY29tIERhdGFcIilcbiAgICAgICAgICAgIC5hZGQoY29tcHJlc3NDb250YWluZXIsIFtTT1NBX09ORV0sIFwiQ29tcHJlc3NpbmcgeW91ciBBbmNlc3RvcnNcIilcbiAgICAgICAgICAgIC5hZGQoZ2V0TWF4U2l6ZU9mRHJhd2luZywgW10sIFwiQ2FsY3VsYXRlIHNpemUgb2YgZ3JhcGhcIilcbiAgICAgICAgICAgIC5hZGQoZHJhdywgW10sIFwiRHJhd2luZyB5b3VyIGdyYXBoXCIpXG4gICAgICAgICAgICAucnVuKCk7XG4gICAgfTtcbiAgICAvL0V4ZWN1dGUgcmVhZGluZ1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUsICd1dGYtOCcpO1xufVxuZnVuY3Rpb24gZXhwbG9pdChzb3NhV3JhcHBlciwgcG9zaXRpb24pIHtcbiAgICAvL2NvbnNvbGUuaW5mbyhTdG9yZS5maXJzdEdlZFRlY2hJZFBhcnNlZClcbiAgICAvL2NvbnNvbGUuaW5mbyhTdG9yZS5tYXBDb2RlRmFtaWx5LnNpemUpXG4gICAgLy9jb25zb2xlLmluZm8oU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLnNpemUpXG4gICAgLy9jb25zb2xlLmluZm8oU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsKVxuICAgIGlmIChwb3NpdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIHBvc2l0aW9uID0gU3RvcmUuZmlyc3RHZWRUZWNoSWRQYXJzZWQ7XG4gICAgfVxuICAgIHBvcHVsYXRlR3JpZChzb3NhV3JhcHBlciwgcG9zaXRpb24pO1xuICAgIHNldHVwQm94Rm9yR3JpZEVudHJ5KCk7XG4gICAgLy9sZXQgdGVzdCA9IG5ldyBNYXAoWy4uLmNvbnRhaW5lci5nZXRNYXBDb250YWluZXIoKS5lbnRyaWVzKCldLnNvcnQoKSk7XG4gICAgLy9jb25zb2xlLmluZm8odGVzdClcbiAgICAvL2NvbnNvbGUuaW5mbyh0ZXN0LmdldCg5NikpXG59XG5mdW5jdGlvbiBnZXRNYXhTaXplT2ZEcmF3aW5nKCkge1xuICAgIGxldCB0bXBfYm94ID0gbnVsbDtcbiAgICBsZXQgd2lkdGhCb3ggPSBudWxsO1xuICAgIGxldCBoZWlnaHRCb3ggPSBudWxsO1xuICAgIGxldCBtYXhYT2ZHZW4gPSBudWxsO1xuICAgIGxldCBtYXhZT2ZHZW4gPSBudWxsO1xuICAgIGxldCB0bXBfc29zYSA9IG51bGw7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkOyBpKyspIHtcbiAgICAgICAgdG1wX3Nvc2EgPSBTdG9yZS5ncmlkLm1hcFJpZ2h0U29zYUJ5R2VuZXJhdGlvbi5nZXQoaSkuc29zYTtcbiAgICAgICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyh0bXBfc29zYSkpIHtcbiAgICAgICAgICAgIHRtcF9ib3ggPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQodG1wX3Nvc2EpLmJveDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5IGRvZXNuJ3QgaGF2ZSBzb3NhICVvIGluIGZ1bmN0aW9uIGdldE1heFNpemVPZkRyYXdpbmcoKVwiLCB0bXBfc29zYSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtYXhYT2ZHZW4gPSB0bXBfYm94LmdldFgoKTtcbiAgICAgICAgaWYgKG1heFhPZkdlbiA+IFN0b3JlLnBvc2l0aW9uWE1heCkge1xuICAgICAgICAgICAgU3RvcmUucG9zaXRpb25YTWF4ID0gbWF4WE9mR2VuO1xuICAgICAgICAgICAgaWYgKGkgPiA1KSB7XG4gICAgICAgICAgICAgICAgd2lkdGhCb3ggPSBCb3hWLndpZHRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aWR0aEJveCA9IEJveC53aWR0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1heFlPZkdlbiA9IHRtcF9ib3guZ2V0WSgpO1xuICAgICAgICBpZiAobWF4WU9mR2VuID4gU3RvcmUucG9zaXRpb25ZTWF4KSB7XG4gICAgICAgICAgICBTdG9yZS5wb3NpdGlvbllNYXggPSBtYXhZT2ZHZW47XG4gICAgICAgICAgICBpZiAoaSA+IDUpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHRCb3ggPSBCb3hWLmhlaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0Qm94ID0gQm94LmhlaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFN0b3JlLnBvc2l0aW9uWE1heCArPSB3aWR0aEJveCArIDIwO1xuICAgIFN0b3JlLnBvc2l0aW9uWU1heCArPSBoZWlnaHRCb3ggKyAyMDtcbn1cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgLy9jb25zb2xlLmluZm8oY29udGFpbmVyLmdldE1hcENvbnRhaW5lcigpLmhhcyg5NikpXG4gICAgLy9jb25zb2xlLmluZm8oY29udGFpbmVyLmdldE1hcENvbnRhaW5lcigpKVxuICAgIHNob3coW19IVE1MX0VMRU1FTlRfX0hFQURFUl0pO1xuICAgIFNWR1JlbmRlcmVyLmRyYXdTVkcoJyNzdmcnKTtcbn1cbmZ1bmN0aW9uIGhpZGRlUGRmb2JqZWN0V3JhcHBlcigpIHtcbiAgICBoaWRlKFtfSFRNTF9FTEVNRU5UX19QREZXUkFQUEVSXSk7XG59XG5mdW5jdGlvbiBjYW5jZWxSb290KCkge1xuICAgIGhpZGUoW19IVE1MX0VMRU1FTlRfX1JPT1RfU0VMRUNUV1JBUFBFUl0pO1xufVxuZnVuY3Rpb24gc2hvd1Jvb3QoKSB7XG4gICAgc2hvdyhbX0hUTUxfRUxFTUVOVF9fUk9PVF9TRUxFQ1RXUkFQUEVSXSk7XG59XG5mdW5jdGlvbiB0eXBpbmdSb290KCkge1xuICAgIHZhciBzZWFyY2ggPSBfSFRNTF9FTEVNRU5UX19ST09UX0lOUFVULnZhbHVlLnRyaW0oKTtcbiAgICBpZiAoc2VhcmNoLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgaGlkZShbX0hUTUxfRUxFTUVOVF9fU1RBUlRUWVBFLCBfSFRNTF9FTEVNRU5UX19ST09UX1JFU1VMVFMsIF9IVE1MX0VMRU1FTlRfX1JPT1RfRVhFQywgX0hUTUxfRUxFTUVOVF9fUk9PVF9OT1JFU1VMVF0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBoaWRlKFtfSFRNTF9FTEVNRU5UX19TVEFSVFRZUEVdKTtcbiAgICB9XG4gICAgdmFyIGxpc3RTb3NhID0gW107XG4gICAgU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLmZvckVhY2goKGluZGl2aWR1YWwsIHNvc2EpID0+IHtcbiAgICAgICAgaWYgKGluZGl2aWR1YWwuZmlyc3RuYW1lLmluY2x1ZGVzKHNlYXJjaCkgfHwgaW5kaXZpZHVhbC5sYXN0bmFtZS5pbmNsdWRlcyhzZWFyY2gpKSB7XG4gICAgICAgICAgICBsaXN0U29zYS5wdXNoKHNvc2EpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgc2hvd1Jvb3RzKGxpc3RTb3NhKTtcbn1cbi8qKlxuICogIEZpbGwgdGhlIGxpc3Qgb2YgU29zYSB0byBzaG93IGluIHRoZSBzZWxlY3RvclxuICogQHBhcmFtIGxpc3RTb3NhIHRoZSBsaXN0IG9mIFNvc2EgdG8gc2hvdyBpbiB0aGUgc2VsZWN0b3JcbiAqL1xuZnVuY3Rpb24gc2hvd1Jvb3RzKGxpc3RTb3NhKSB7XG4gICAgaWYgKGxpc3RTb3NhLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIGhpZGUoW19IVE1MX0VMRU1FTlRfX1JPT1RfUkVTVUxUUywgX0hUTUxfRUxFTUVOVF9fUk9PVF9FWEVDXSk7XG4gICAgICAgIHNob3coW19IVE1MX0VMRU1FTlRfX1JPT1RfTk9SRVNVTFRdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNob3coW19IVE1MX0VMRU1FTlRfX1JPT1RfUkVTVUxUUywgX0hUTUxfRUxFTUVOVF9fUk9PVF9FWEVDXSk7XG4gICAgICAgIGhpZGUoW19IVE1MX0VMRU1FTlRfX1JPT1RfTk9SRVNVTFRdKTtcbiAgICB9XG4gICAgLy8gLmlubmVySHRtbD0nJyBpcyBub3QgcmVjb21tZW5kZWQgYmVjYXVzZSBpdCBkb2VzbuKAmXQgcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVycyBvZiB0aGUgY2hpbGQgbm9kZXMsIHdoaWNoIG1pZ2h0IGNhdXNlIGEgbWVtb3J5IGxlYWsuXG4gICAgd2hpbGUgKF9IVE1MX0VMRU1FTlRfX1JPT1RfUkVTVUxUUy5maXJzdENoaWxkKSB7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX1JPT1RfUkVTVUxUUy5yZW1vdmVDaGlsZChfSFRNTF9FTEVNRU5UX19ST09UX1JFU1VMVFMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGxldCB0ZXh0bm9kZSA9IG51bGw7XG4gICAgbGV0IG5vZGUgPSBudWxsO1xuICAgIGxldCBiRGF0ZSA9IG51bGw7XG4gICAgbGV0IGREYXRlID0gbnVsbDtcbiAgICBsZXQgaW5kaXZpZHVhbCA9IG51bGw7XG4gICAgZm9yIChsZXQgb25lU29zYSBvZiBsaXN0U29zYSkge1xuICAgICAgICBpbmRpdmlkdWFsID0gU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLmdldChvbmVTb3NhKTtcbiAgICAgICAgYkRhdGUgPSBpbmRpdmlkdWFsLmJpcnRoRGF0ZSAhPT0gdW5kZWZpbmVkID8gaW5kaXZpZHVhbC5iaXJ0aERhdGUgOiBcIj9cIjtcbiAgICAgICAgZERhdGUgPSBpbmRpdmlkdWFsLmRlYXRoRGF0ZSAhPT0gdW5kZWZpbmVkID8gaW5kaXZpZHVhbC5kZWF0aERhdGUgOiBcIj9cIjtcbiAgICAgICAgdGV4dG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtpbmRpdmlkdWFsLmZpcnN0bmFtZX0gJHtpbmRpdmlkdWFsLmxhc3RuYW1lfSAoJHtiRGF0ZX0tJHtkRGF0ZX0pYCk7XG4gICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiT1BUSU9OXCIpO1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG9uZVNvc2EgKyBcIlwiKTtcbiAgICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0ZXh0bm9kZSk7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX1JPT1RfUkVTVUxUUy5hcHBlbmRDaGlsZChub2RlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBjaGFuZ2VSb290KCkge1xuICAgIC8vSW5pdCB0aGUgTG9nZ2VyIHN5c3RlbVxuICAgIExvZ2dlci5pbml0KCk7XG4gICAgTG9nZ2VyLmxvZyhcInN0YXJ0aW5nIHB1cmdpbmcgZGF0YVwiKTtcbiAgICAvLyBQdXJnZSBTdG9yZSB2YWx1ZXMgZm9yIGEgbmV3IGRyYXdcbiAgICBTdG9yZS5yZXNldEZvclJlZHJhdygpO1xuICAgIGxldCBrZXkgPSBwYXJzZUludChfSFRNTF9FTEVNRU5UX19ST09UX1JFU1VMVFMudmFsdWUpO1xuICAgIGxldCBzb3NhT25lID0gbmV3IFNvc2FXcmFwcGVyKDEpO1xuICAgIC8vUHVyZ2UgU1ZHXG4gICAgLy8gLmlubmVySHRtbD0nJyBpcyBub3QgcmVjb21tZW5kZWQgYmVjYXVzZSBpdCBkb2VzbuKAmXQgcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVycyBvZiB0aGUgY2hpbGQgbm9kZXMsIHdoaWNoIG1pZ2h0IGNhdXNlIGEgbWVtb3J5IGxlYWsuXG4gICAgd2hpbGUgKF9IVE1MX0VMRU1FTlRfX1NWRy5maXJzdENoaWxkKSB7XG4gICAgICAgIF9IVE1MX0VMRU1FTlRfX1NWRy5yZW1vdmVDaGlsZChfSFRNTF9FTEVNRU5UX19TVkcuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vUmVzZXQgdmFyXG4gICAgU3RvcmUucG9zaXRpb25YTWF4ID0gMDtcbiAgICBTdG9yZS5wb3NpdGlvbllNYXggPSAwO1xuICAgIFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5mb3JFYWNoKChpbmRpdmlkdWFsLCBzb3NhKSA9PiB7XG4gICAgICAgIGluZGl2aWR1YWwuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB9KTtcbiAgICBMb2dnZXIubG9nKFwiZW5kaW5nIHB1cmdpbmcgZGF0YVwiKTtcbiAgICB0YXNrT3JjaGVzdHJhdG9yID0gbmV3IFRhc2tPcmNoZXN0cmF0b3IocHJvZ3Jlc3NCYXIpO1xuICAgIHRhc2tPcmNoZXN0cmF0b3IuYWRkKGV4cGxvaXQsIFtzb3NhT25lLCBrZXldLCBcIkV4cGxvaXRpbmcgR2VkY29tIERhdGFcIilcbiAgICAgICAgLmFkZChjb21wcmVzc0NvbnRhaW5lciwgW3Nvc2FPbmVdLCBcIkNvbXByZXNzaW5nIHlvdXIgQW5jZXN0b3JzXCIpXG4gICAgICAgIC5hZGQoZ2V0TWF4U2l6ZU9mRHJhd2luZywgW10sIFwiQ2FsY3VsYXRlIHNpemUgb2YgZ3JhcGhcIilcbiAgICAgICAgLmFkZChkcmF3LCBbXSwgXCJEcmF3aW5nIHlvdXIgZ3JhcGhcIilcbiAgICAgICAgLnJ1bigpO1xuICAgIGNhbmNlbFJvb3QoKTtcbn1cbmZ1bmN0aW9uIGhpZGUoaHRtbEVsZW1lbnRJZHMpIHtcbiAgICBodG1sRWxlbWVudElkcy5mb3JFYWNoKGh0bWxFbGVtZW50ID0+IHtcbiAgICAgICAgaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzaG93KGh0bWxFbGVtZW50SWRzKSB7XG4gICAgaHRtbEVsZW1lbnRJZHMuZm9yRWFjaChodG1sRWxlbWVudCA9PiB7XG4gICAgICAgIGh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0pO1xufVxuaW5pdCgpO1xuIiwiZXhwb3J0IGNsYXNzIFZpcnR1YWxHcmlkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvblByb2Nlc3NlZCA9IG51bGw7IC8vTGlzdCBvZiBzb3NhIGFscmVhZHkgcHJvY2Vzc2VkIHRvIGlkZW50aWZpZSBpbXBsZXhlXG4gICAgICAgIHRoaXMubWF4U29zYVByb2Nlc3NlZCA9IG51bGw7IC8vIG1lbW9yeSBvZiB0aGUgbWF4IFNvc2EgdG8gaGVscCByZS1jYWxjdWxhdGUgbWF4R2VuZXJhdGlvblByb2Nlc3NlZFxuICAgICAgICB0aGlzLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQgPSBudWxsOyAvLyBtZW1vcnkgb2YgdGhlIG1heCBnZW4gb2YgYWxsIHRoZSBzb3NhIHRvIGhlbHAgY2FsY3VsYXRlIHRoZSBoZWlnaCBvZiB0aGUgZ3JpZFxuICAgICAgICB0aGlzLm1hcFJpZ2h0U29zYUJ5R2VuZXJhdGlvbiA9IG51bGw7IC8vTWFwIG9mIGdlbmVyYXRpb24gLyB0aGUgZmFyLXJpZ2h0IFNvc2FXcmFwcGVyIHByb2Nlc3NlZFxuICAgICAgICB0aGlzLm1hcFNvc2FUb0dyaWRFbnRyeSA9IG51bGw7XG4gICAgICAgIHRoaXMubWFwR2VuZXJhdGlvbllQb3NpdGlvbiA9IG51bGw7IC8vbGlzdCBvZiBZIHBvc2l0aW9uIGZvciBlYWNoIHNvc2FcbiAgICAgICAgdGhpcy5tYXBHZW5lcmF0aW9uU29zYSA9IG51bGw7XG4gICAgICAgIHRoaXMucG9zaXRpb25Qcm9jZXNzZWQgPSBbXTtcbiAgICAgICAgdGhpcy5tYXhTb3NhUHJvY2Vzc2VkID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXBSaWdodFNvc2FCeUdlbmVyYXRpb24gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubWFwU29zYVRvR3JpZEVudHJ5ID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm1hcEdlbmVyYXRpb25ZUG9zaXRpb24gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubWFwR2VuZXJhdGlvblNvc2EgPSBuZXcgTWFwKCk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFZpcnR1YWxHcmlkRW50cnkge1xuICAgIGNvbnN0cnVjdG9yKHNvc2FXcmFwcGVyLCBpbmRpdmlkdWFsLCBwcmV2aW91c1Nvc2FXcmFwcGVyKSB7XG4gICAgICAgIHRoaXMuc29zYVdyYXBwZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmZpcnN0bmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdG5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLmJpcnRoRGF0ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYmlydGhQbGFjZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZGVhdGhEYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZWF0aFBsYWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5ib3ggPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU29zYVdyYXBwZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTb3NhV3JhcHBlciA9IG51bGw7XG4gICAgICAgIHRoaXMuc29zYVdyYXBwZXIgPSBzb3NhV3JhcHBlcjtcbiAgICAgICAgdGhpcy5maXJzdG5hbWUgPSBpbmRpdmlkdWFsLmZpcnN0bmFtZTtcbiAgICAgICAgdGhpcy5sYXN0bmFtZSA9IGluZGl2aWR1YWwubGFzdG5hbWU7XG4gICAgICAgIHRoaXMuYmlydGhEYXRlID0gaW5kaXZpZHVhbC5iaXJ0aERhdGU7XG4gICAgICAgIHRoaXMuYmlydGhQbGFjZSA9IGluZGl2aWR1YWwuYmlydGhQbGFjZTtcbiAgICAgICAgdGhpcy5kZWF0aERhdGUgPSBpbmRpdmlkdWFsLmRlYXRoRGF0ZTtcbiAgICAgICAgdGhpcy5kZWF0aFBsYWNlID0gaW5kaXZpZHVhbC5kZWF0aFBsYWNlO1xuICAgICAgICB0aGlzLmJveCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTb3NhV3JhcHBlciA9IHByZXZpb3VzU29zYVdyYXBwZXI7XG4gICAgICAgIHRoaXMubmV4dFNvc2FXcmFwcGVyID0gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgU29zYVdyYXBwZXIge1xuICAgIGNvbnN0cnVjdG9yKHNvc2EpIHtcbiAgICAgICAgdGhpcy5zb3NhID0gbnVsbDtcbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3NhRmF0aGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3NhTW90aGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5sZWZ0U29zYSA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHRTb3NhID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3NhID0gc29zYTtcbiAgICAgICAgLyoqXG4gICAgICAgICogUmV0dXJuIG7CsCBvZiBnZW5lcmF0aW9uIGJhc2VkIG9uIHNvc2FcbiAgICAgICAgKiB0a3QgdG8gUm9sbGFuZCAoaHR0cHM6Ly93d3cubG9yYW5kLm9yZy9zcGlwLnBocD9hcnRpY2xlMTQ1OSlcbiAgICAgICAgKiovXG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbiA9IE1hdGguZmxvb3IoTWF0aC5sb2coc29zYSkgLyBNYXRoLkxOMikgKyAxO1xuICAgICAgICB0aGlzLnNvc2FGYXRoZXIgPSBzb3NhICogMjtcbiAgICAgICAgdGhpcy5zb3NhTW90aGVyID0gc29zYSAqIDIgKyAxO1xuICAgICAgICAvLyBTb3NhIGF2YWlsYWJsZSBvbiB0aGUgbGVmdC9yaWdodCB3aXRoIHRoZSBzYW1lIGdlbmVyYXRpb25cbiAgICAgICAgdGhpcy5sZWZ0U29zYSA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHRTb3NhID0gbnVsbDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSW5kaXZpZHVhbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBudWxsOyAvLyBUZWNoIElkIGluc2lkZSB0aGUgR2VkQ29tIEZpbGUuIG5vdCB0aGUgU09TQVxuICAgICAgICB0aGlzLmZpcnN0bmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdG5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLmZhbWMgPSBudWxsOyAvLyBUZWNoIElkIGluc2lkZSB0aGUgR2VkQ29tIEZpbGUuIG5vdCB0aGUgU09TQVxuICAgICAgICB0aGlzLnNleCA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRmFtaWx5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7IC8vIFRlY2ggSWQgaW5zaWRlIHRoZSBHZWRDb20gRmlsZS4gbm90IHRoZSBTT1NBXG4gICAgICAgIHRoaXMuZmF0aGVyID0gbnVsbDsgLy8gVGVjaCBJZCBvZiB0aGUgZmF0aGVyXG4gICAgICAgIHRoaXMubW90aGVyID0gbnVsbDsgLy8gVGVjaCBJZCBvZiB0aGUgbW90aGVyXG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9