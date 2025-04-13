"use strict";
(self["webpackChunkgedcom_to_js"] = self["webpackChunkgedcom_to_js"] || []).push([["demo"],{

/***/ 881:
/*!*****************************!*\
  !*** ./src/RootSwitcher.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cancelRoot: () => (/* binding */ cancelRoot),
/* harmony export */   showRoot: () => (/* binding */ showRoot),
/* harmony export */   showRoots: () => (/* binding */ showRoots),
/* harmony export */   typingRoot: () => (/* binding */ typingRoot)
/* harmony export */ });
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElements */ 2930);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ 9673);


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

/***/ 1149:
/*!*********************************!*\
  !*** ./src/ContainerFactory.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compressContainer: () => (/* binding */ compressContainer),
/* harmony export */   populateGrid: () => (/* binding */ populateGrid),
/* harmony export */   setupBoxForGridEntry: () => (/* binding */ setupBoxForGridEntry)
/* harmony export */ });
/* harmony import */ var _struct_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./struct.class */ 1177);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ 9673);
/* harmony import */ var _Box_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box.class */ 3587);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Options */ 8402);




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

/***/ 1177:
/*!*****************************!*\
  !*** ./src/struct.class.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Family: () => (/* binding */ Family),
/* harmony export */   Individual: () => (/* binding */ Individual),
/* harmony export */   SosaWrapper: () => (/* binding */ SosaWrapper),
/* harmony export */   VirtualGrid: () => (/* binding */ VirtualGrid),
/* harmony export */   VirtualGridEntry: () => (/* binding */ VirtualGridEntry)
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

/***/ 1561:
/*!****************************!*\
  !*** ./src/PDFRenderer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PDFRenderer: () => (/* binding */ PDFRenderer)
/* harmony export */ });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 3596);
/* harmony import */ var svg2pdf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg2pdf.js */ 1265);
/* harmony import */ var _AbstractPdfRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractPdfRenderer */ 5031);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store */ 9673);




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

/***/ 2930:
/*!*****************************!*\
  !*** ./src/HtmlElements.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _HE_FILE: () => (/* binding */ _HE_FILE),
/* harmony export */   _HE_FORM: () => (/* binding */ _HE_FORM),
/* harmony export */   _HE_HEADER: () => (/* binding */ _HE_HEADER),
/* harmony export */   _HE_MESSAGE: () => (/* binding */ _HE_MESSAGE),
/* harmony export */   _HE_MINISVGWRAPPER: () => (/* binding */ _HE_MINISVGWRAPPER),
/* harmony export */   _HE_OPTIONS: () => (/* binding */ _HE_OPTIONS),
/* harmony export */   _HE_OPTIONS_ACTION_BUTTON: () => (/* binding */ _HE_OPTIONS_ACTION_BUTTON),
/* harmony export */   _HE_OPTIONS_IMPLEXES_COLOR: () => (/* binding */ _HE_OPTIONS_IMPLEXES_COLOR),
/* harmony export */   _HE_OPTIONS_IMPLEXES_COLOR_HIDE: () => (/* binding */ _HE_OPTIONS_IMPLEXES_COLOR_HIDE),
/* harmony export */   _HE_OPTIONS_IMPLEXES_HIDE: () => (/* binding */ _HE_OPTIONS_IMPLEXES_HIDE),
/* harmony export */   _HE_OPTIONS_IMPLEXES_NOTHING: () => (/* binding */ _HE_OPTIONS_IMPLEXES_NOTHING),
/* harmony export */   _HE_OPTIONS_MAXGEN: () => (/* binding */ _HE_OPTIONS_MAXGEN),
/* harmony export */   _HE_OPTIONS_SUBMIT: () => (/* binding */ _HE_OPTIONS_SUBMIT),
/* harmony export */   _HE_OPTIONS_TEMPLATE: () => (/* binding */ _HE_OPTIONS_TEMPLATE),
/* harmony export */   _HE_OPTIONS_TEMPLATE_RESET: () => (/* binding */ _HE_OPTIONS_TEMPLATE_RESET),
/* harmony export */   _HE_OPTIONS_WALL: () => (/* binding */ _HE_OPTIONS_WALL),
/* harmony export */   _HE_PDFWRAPPER: () => (/* binding */ _HE_PDFWRAPPER),
/* harmony export */   _HE_PDF_ACTION_BUTTON: () => (/* binding */ _HE_PDF_ACTION_BUTTON),
/* harmony export */   _HE_PDF_MULTIPAGE_ACTION_BUTTON: () => (/* binding */ _HE_PDF_MULTIPAGE_ACTION_BUTTON),
/* harmony export */   _HE_PNG_ACTION_BUTTON: () => (/* binding */ _HE_PNG_ACTION_BUTTON),
/* harmony export */   _HE_PROGRESSBAR: () => (/* binding */ _HE_PROGRESSBAR),
/* harmony export */   _HE_PROGRESSBAR_SUB: () => (/* binding */ _HE_PROGRESSBAR_SUB),
/* harmony export */   _HE_PROGRESSBAR_TXT: () => (/* binding */ _HE_PROGRESSBAR_TXT),
/* harmony export */   _HE_ROOT_CANCEL: () => (/* binding */ _HE_ROOT_CANCEL),
/* harmony export */   _HE_ROOT_EXEC: () => (/* binding */ _HE_ROOT_EXEC),
/* harmony export */   _HE_ROOT_INPUT: () => (/* binding */ _HE_ROOT_INPUT),
/* harmony export */   _HE_ROOT_NORESULT: () => (/* binding */ _HE_ROOT_NORESULT),
/* harmony export */   _HE_ROOT_RESULTS: () => (/* binding */ _HE_ROOT_RESULTS),
/* harmony export */   _HE_ROOT_SELECTWRAPPER: () => (/* binding */ _HE_ROOT_SELECTWRAPPER),
/* harmony export */   _HE_ROOT_SWITCH: () => (/* binding */ _HE_ROOT_SWITCH),
/* harmony export */   _HE_STARTTYPE: () => (/* binding */ _HE_STARTTYPE),
/* harmony export */   _HE_SVGWRAPPER: () => (/* binding */ _HE_SVGWRAPPER),
/* harmony export */   _HE_WAIT: () => (/* binding */ _HE_WAIT),
/* harmony export */   _HE_WAIT_CPT: () => (/* binding */ _HE_WAIT_CPT),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   purge: () => (/* binding */ purge),
/* harmony export */   show: () => (/* binding */ show)
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

/***/ 3005:
/*!***************************************!*\
  !*** ./src/TaskOrchestrator.class.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskOrchestrator: () => (/* binding */ TaskOrchestrator)
/* harmony export */ });
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ 8902);

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

/***/ 3266:
/*!********************************!*\
  !*** ./src/MinimapRendered.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MinimapRenderer: () => (/* binding */ MinimapRenderer)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ 9425);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ 9673);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HtmlElements */ 2930);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGRenderer */ 6557);




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

/***/ 3587:
/*!**************************!*\
  !*** ./src/Box.class.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Box: () => (/* binding */ Box),
/* harmony export */   BoxAbstract: () => (/* binding */ BoxAbstract),
/* harmony export */   BoxV: () => (/* binding */ BoxV)
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

/***/ 5031:
/*!************************************!*\
  !*** ./src/AbstractPdfRenderer.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbstractPdfRenderer: () => (/* binding */ AbstractPdfRenderer)
/* harmony export */ });
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElements */ 2930);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ 9673);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SVGRenderer */ 6557);



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
            _SVGRenderer__WEBPACK_IMPORTED_MODULE_2__.SVGRenderer.container
                .viewbox(this.previous.viewbox)
                .size(this.previous.w, this.previous.h)
                .zoom(this.previous.zoom);
        });
    }
    pdfViewBox() {
        let w = 100;
        if (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionXMax / window.innerWidth < _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionYMax / window.innerHeight) {
            w = (window.innerWidth * 100 / (_Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionYMax * window.innerHeight / window.innerWidth));
        }
        _SVGRenderer__WEBPACK_IMPORTED_MODULE_2__.SVGRenderer.container
            .viewbox(0, 0, _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_1__.Store.positionYMax)
            .size(w + '%', '100%');
    }
}
AbstractPdfRenderer.RATIO_PX_2_CM = 40; //Default Ratio px => cm


/***/ }),

/***/ 6557:
/*!****************************!*\
  !*** ./src/SVGRenderer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SVGRenderer: () => (/* binding */ SVGRenderer)
/* harmony export */ });
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @svgdotjs/svg.js */ 9425);
/* harmony import */ var _svgdotjs_svg_panzoom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @svgdotjs/svg.panzoom.js */ 9969);
/* harmony import */ var _Box_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box.class */ 3587);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Store */ 9673);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HtmlElements */ 2930);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Options */ 8402);
/* harmony import */ var _MinimapRendered__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MinimapRendered */ 3266);







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
                    let zip = place.split(',')[1];
                    if (zip != undefined) {
                        return zip.trim();
                    }
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

/***/ 6736:
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/demo.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body {\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, sans-serif;\n  color: #0f3c4b;\n  background-color: #e5edf1;\n}\n\n\na{\n  transition: color 0.2s ease, border-bottom-color 0.2s ease;\n  border-bottom: dotted 1px;\n  color: inherit;\n  text-decoration: none;\n}\n\n.hidden{\n  display:none !important;\n}\n\n/*****************/\n/* Drop File Box */\n/*****************/\n\n#box{\n  min-height: 100%;\n  font-size: 1.5rem;\n  background-color: #c8dadf;\n  position: relative;\n  text-align:center;\n}\n\n.box__file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.box__file + label {\n  max-width: 80%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n}\n.box__button {\n  font-weight: 700;\n  color: #e5edf1;\n  background-color: #39bfd3;\n  display: none;\n  padding: 8px 16px;\n  margin: 40px auto 0;\n}\n.box__input{\n  padding: 25vh;\n  /*padding: 30% 20px 0 20px;*/\n}\n.box__dragndrop,\n.box__uploading,\n.box__success,\n.box__error {\n  display: none;\n}\n\n#box.has-advanced-upload {\n  outline: 2px dashed #92b0b3;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n}\n\n#box.has-advanced-upload .box__dragndrop {\n  display: inline;\n}\n\n#box.is-dragover {\n  background-color: grey;\n}\n\n\n/*****************/\n/* ProgressBar */\n/*****************/\n\n#progressBar{\n  width: 50%;\n  max-width: 300px;\n  height: 30px;\n  background-color: #555;\n  margin: 10px auto;\n  border-radius: 5px;\n  padding: 5px;\n  position: relative;\n}\n\n#subProgressBar{\n  background-color: #999;\n  min-height: 90%;\n  float: left;\n}\n#textProgressBar{\n  color: #DDD;\n  text-align: center;\n  min-width: 100%;\n  min-height: 100%;\n  position: absolute;\n}\n\n.sample{\n  font-size: 0.8em;\n  margin-top:20px;\n}\n\n/*****************/\n/* SVG Render Box */\n/*****************/\n\n#svgWrapper{\n\n  font-family: monospace;\n  background-color: #b7d0f4;\n  padding:10px;\n  outline: 2px dashed #8cb7f7;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  height: calc(100% - 60px);\n  width: calc(100% - 20px);\n}\n\n/******************/\n/*  Header Menu   */\n/******************/\n#header{\n  background: #000;\n  color: #FFF;\n  font-size: 1.3em;\n  padding: 10px;\n  font-family: monospace;\n}\n\n#header a{\n  border-bottom: 0;\n}\n\n.entry{\n  cursor: pointer;\n}\n\n.entry:hover{\n  color: #82b0ed;\n  border-bottom: 1px dotted;\n}\n\n/*********************/\n/*  Root Switching   */\n/*********************/\n\n#selectRootWrapper{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #000;\n  opacity: 0.85;\n}\n\n#selectRoot{\n  width: 350px;\n  margin: 25vh auto;\n}\n\n#inputRoot{\n  text-align: center;\n  width: 90%;\n  margin: 10px;\n  font-size: 1.2em;\n}\n\n#selectRootWrapper select{\n  font-size: 1.2em;\n  margin: 10px auto;\n  width: 100%;\n}\n\n.buttons{\n  text-align: center;\n}\n\n.button{\n  padding: 5px;\n  background-color: #93d89c;\n  border: 1px solid #3c5d62;\n  color: #000;\n  display: inline-block;\n  font-family: monospace;\n  cursor: pointer;\n}\n\n.label{\n  display: block;\n  margin: 10px;\n  font-size: 1.3em;\n  color: #fff;\n  width: auto;\n  text-align: center;\n}\n/******************/\n/* PDF Render Box */\n/******************/\n#pdfobjectWrapper{\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  left: 5%;\n  position: fixed;\n  display: block;\n  overflow: hidden;\n}\n#pdfobject{\n  width: 100%;\n  height: 100%;\n}\n\n.wall{\n  width: 100%;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.9);\n  height: 100%;\n  display: block;\n  top: 0;\n}\n\n/**************************/\n/* Overlay when user wait */\n/**************************/\n\n#wait{\n  cursor:wait;\n}\n\n#wait span{\n  display: inline-block;\n  width: 100%;\n  font-size: 2em;\n  top: 40%;\n  position: absolute;\n  text-align: center;\n  color:#FFF;\n}\n\n#wait_cpt{\n  margin-top: 40px;\n}\n\n/***************************/\n/* Message box left bottom */\n/***************************/\n#message{\n  position: fixed;\n  display: block;\n  bottom: 20px;\n  left: 20px;\n  font-family: monospace;\n}\n\n/***************************/\n/* minimap righ bottom */\n/***************************/\n#minimapWrapper{\n  position: fixed;\n  display: block;\n  bottom: 20px;\n  right: 20px;\n  border: 1px solid #a9b4c6;\n  width: 200px;\n  height: 100px;\n  background-color: #c2d7f5;\n}\n\n/***************/\n/* Options Box */\n/***************/\n#optionsWall{\n  cursor: pointer;\n}\n#options {\n  width: 80%;\n  margin: 100px;\n  padding: 10px;\n  position: fixed;\n  background-color: #FFF;\n  top: 0%;\n}\n\n#options .option {\n\n}\n\n#options fieldset {\n  margin-bottom: 10px;\n}\n\n#options legend {\n\n}\n\n#options .option div {\n\n}\n\n#options label {\n\n}\n\n#tpl{\n  display: block;\n  width: 90%;\n  height: 100px;\n}\n\n\n#tplLabel{\n  font-size: 0.9em;\n}\n\n.tpl_left, .tpl_right{\n  width: 50%;\n  float:left;\n}\n.tpl_list{\n  columns: 2;\n  -webkit-columns: 2;\n  -moz-columns: 2;\n  font-size: 0.9em;\n  font-family: monospace;\n}\n.noBullet{\n  list-style: none;\n}\n#options input[type='button'] {\n  background-color: #93d89c;\n  border-radius: 2px;\n  border: 0px none;\n  display: block;\n  margin:auto;\n  padding:5px;\n}\n#options input[type='button']:hover{\n  background-color: #8dc995;\n  cursor: pointer;\n}\n#options input[type='button']:active{\n  transform: translateY(2px);\n  background-color: #8dc995;\n}", "",{"version":3,"sources":["webpack://./src/assets/css/demo.css"],"names":[],"mappings":"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","sourcesContent":["html, body {\n  height: 100%;\n  margin: 0;\n  font-family: Roboto, sans-serif;\n  color: #0f3c4b;\n  background-color: #e5edf1;\n}\n\n\na{\n  transition: color 0.2s ease, border-bottom-color 0.2s ease;\n  border-bottom: dotted 1px;\n  color: inherit;\n  text-decoration: none;\n}\n\n.hidden{\n  display:none !important;\n}\n\n/*****************/\n/* Drop File Box */\n/*****************/\n\n#box{\n  min-height: 100%;\n  font-size: 1.5rem;\n  background-color: #c8dadf;\n  position: relative;\n  text-align:center;\n}\n\n.box__file {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n.box__file + label {\n  max-width: 80%;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: pointer;\n  display: inline-block;\n  overflow: hidden;\n}\n.box__button {\n  font-weight: 700;\n  color: #e5edf1;\n  background-color: #39bfd3;\n  display: none;\n  padding: 8px 16px;\n  margin: 40px auto 0;\n}\n.box__input{\n  padding: 25vh;\n  /*padding: 30% 20px 0 20px;*/\n}\n.box__dragndrop,\n.box__uploading,\n.box__success,\n.box__error {\n  display: none;\n}\n\n#box.has-advanced-upload {\n  outline: 2px dashed #92b0b3;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n}\n\n#box.has-advanced-upload .box__dragndrop {\n  display: inline;\n}\n\n#box.is-dragover {\n  background-color: grey;\n}\n\n\n/*****************/\n/* ProgressBar */\n/*****************/\n\n#progressBar{\n  width: 50%;\n  max-width: 300px;\n  height: 30px;\n  background-color: #555;\n  margin: 10px auto;\n  border-radius: 5px;\n  padding: 5px;\n  position: relative;\n}\n\n#subProgressBar{\n  background-color: #999;\n  min-height: 90%;\n  float: left;\n}\n#textProgressBar{\n  color: #DDD;\n  text-align: center;\n  min-width: 100%;\n  min-height: 100%;\n  position: absolute;\n}\n\n.sample{\n  font-size: 0.8em;\n  margin-top:20px;\n}\n\n/*****************/\n/* SVG Render Box */\n/*****************/\n\n#svgWrapper{\n\n  font-family: monospace;\n  background-color: #b7d0f4;\n  padding:10px;\n  outline: 2px dashed #8cb7f7;\n  outline-offset: -10px;\n  -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  transition: outline-offset .15s ease-in-out, background-color .15s linear;\n  height: calc(100% - 60px);\n  width: calc(100% - 20px);\n}\n\n/******************/\n/*  Header Menu   */\n/******************/\n#header{\n  background: #000;\n  color: #FFF;\n  font-size: 1.3em;\n  padding: 10px;\n  font-family: monospace;\n}\n\n#header a{\n  border-bottom: 0;\n}\n\n.entry{\n  cursor: pointer;\n}\n\n.entry:hover{\n  color: #82b0ed;\n  border-bottom: 1px dotted;\n}\n\n/*********************/\n/*  Root Switching   */\n/*********************/\n\n#selectRootWrapper{\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: #000;\n  opacity: 0.85;\n}\n\n#selectRoot{\n  width: 350px;\n  margin: 25vh auto;\n}\n\n#inputRoot{\n  text-align: center;\n  width: 90%;\n  margin: 10px;\n  font-size: 1.2em;\n}\n\n#selectRootWrapper select{\n  font-size: 1.2em;\n  margin: 10px auto;\n  width: 100%;\n}\n\n.buttons{\n  text-align: center;\n}\n\n.button{\n  padding: 5px;\n  background-color: #93d89c;\n  border: 1px solid #3c5d62;\n  color: #000;\n  display: inline-block;\n  font-family: monospace;\n  cursor: pointer;\n}\n\n.label{\n  display: block;\n  margin: 10px;\n  font-size: 1.3em;\n  color: #fff;\n  width: auto;\n  text-align: center;\n}\n/******************/\n/* PDF Render Box */\n/******************/\n#pdfobjectWrapper{\n  width: 90%;\n  height: 90%;\n  top: 5%;\n  left: 5%;\n  position: fixed;\n  display: block;\n  overflow: hidden;\n}\n#pdfobject{\n  width: 100%;\n  height: 100%;\n}\n\n.wall{\n  width: 100%;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.9);\n  height: 100%;\n  display: block;\n  top: 0;\n}\n\n/**************************/\n/* Overlay when user wait */\n/**************************/\n\n#wait{\n  cursor:wait;\n}\n\n#wait span{\n  display: inline-block;\n  width: 100%;\n  font-size: 2em;\n  top: 40%;\n  position: absolute;\n  text-align: center;\n  color:#FFF;\n}\n\n#wait_cpt{\n  margin-top: 40px;\n}\n\n/***************************/\n/* Message box left bottom */\n/***************************/\n#message{\n  position: fixed;\n  display: block;\n  bottom: 20px;\n  left: 20px;\n  font-family: monospace;\n}\n\n/***************************/\n/* minimap righ bottom */\n/***************************/\n#minimapWrapper{\n  position: fixed;\n  display: block;\n  bottom: 20px;\n  right: 20px;\n  border: 1px solid #a9b4c6;\n  width: 200px;\n  height: 100px;\n  background-color: #c2d7f5;\n}\n\n/***************/\n/* Options Box */\n/***************/\n#optionsWall{\n  cursor: pointer;\n}\n#options {\n  width: 80%;\n  margin: 100px;\n  padding: 10px;\n  position: fixed;\n  background-color: #FFF;\n  top: 0%;\n}\n\n#options .option {\n\n}\n\n#options fieldset {\n  margin-bottom: 10px;\n}\n\n#options legend {\n\n}\n\n#options .option div {\n\n}\n\n#options label {\n\n}\n\n#tpl{\n  display: block;\n  width: 90%;\n  height: 100px;\n}\n\n\n#tplLabel{\n  font-size: 0.9em;\n}\n\n.tpl_left, .tpl_right{\n  width: 50%;\n  float:left;\n}\n.tpl_list{\n  columns: 2;\n  -webkit-columns: 2;\n  -moz-columns: 2;\n  font-size: 0.9em;\n  font-family: monospace;\n}\n.noBullet{\n  list-style: none;\n}\n#options input[type='button'] {\n  background-color: #93d89c;\n  border-radius: 2px;\n  border: 0px none;\n  display: block;\n  margin:auto;\n  padding:5px;\n}\n#options input[type='button']:hover{\n  background-color: #8dc995;\n  cursor: pointer;\n}\n#options input[type='button']:active{\n  transform: translateY(2px);\n  background-color: #8dc995;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6978:
/*!**********************************!*\
  !*** ./src/ProgressBar.class.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBar: () => (/* binding */ ProgressBar)
/* harmony export */ });
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HtmlElements */ 2930);

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

/***/ 7301:
/*!***************************************************!*\
  !*** ./src/assets/gedcom/HAPIOT_Emile_sample.ged ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/HAPIOT_Emile_sample.ged";

/***/ }),

/***/ 7556:
/*!*****************************!*\
  !*** ./src/GedcomParser.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GedcomParser: () => (/* binding */ GedcomParser)
/* harmony export */ });
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store */ 9673);
/* harmony import */ var _struct_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./struct.class */ 1177);


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

/***/ 7621:
/*!*********************!*\
  !*** ./src/demo.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reDraw: () => (/* binding */ reDraw)
/* harmony export */ });
/* harmony import */ var _assets_css_demo_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/demo.css */ 8495);
/* harmony import */ var _assets_imgs_download_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/imgs/download.png */ 9050);
/* harmony import */ var _assets_gedcom_HAPIOT_Emile_sample_ged__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/gedcom/HAPIOT_Emile_sample.ged */ 7301);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGRenderer */ 6557);
/* harmony import */ var _GedcomParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GedcomParser */ 7556);
/* harmony import */ var _ProgressBar_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProgressBar.class */ 6978);
/* harmony import */ var _struct_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./struct.class */ 1177);
/* harmony import */ var _TaskOrchestrator_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TaskOrchestrator.class */ 3005);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Store */ 9673);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Logger */ 8902);
/* harmony import */ var _Box_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Box.class */ 3587);
/* harmony import */ var _ContainerFactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ContainerFactory */ 1149);
/* harmony import */ var _ImgRenderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ImgRenderer */ 8300);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./HtmlElements */ 2930);
/* harmony import */ var _RootSwitcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RootSwitcher */ 881);
/* harmony import */ var _MultiPDFRenderer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MultiPDFRenderer */ 7652);
/* harmony import */ var _PDFRenderer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PDFRenderer */ 1561);
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Options */ 8402);


















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

/***/ 7652:
/*!*********************************!*\
  !*** ./src/MultiPDFRenderer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiPDFRenderer: () => (/* binding */ MultiPDFRenderer)
/* harmony export */ });
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jspdf */ 3596);
/* harmony import */ var svg2pdf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg2pdf.js */ 1265);
/* harmony import */ var _AbstractPdfRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AbstractPdfRenderer */ 5031);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HtmlElements */ 2930);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Store */ 9673);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SVGRenderer */ 6557);






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
        _SVGRenderer__WEBPACK_IMPORTED_MODULE_5__.SVGRenderer.container
            .viewbox(x, y, width, height)
            .size('100%', '100%');
    }
    static expectedPageCount() {
        return Math.ceil(_Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionXMax / MultiPDFRenderer.RATIO_PX_2_CM / (21 - 2)) * Math.ceil(_Store__WEBPACK_IMPORTED_MODULE_4__.Store.positionYMax / MultiPDFRenderer.RATIO_PX_2_CM / (29.7 - 2));
    }
}


/***/ }),

/***/ 8300:
/*!****************************!*\
  !*** ./src/ImgRenderer.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   takeshot: () => (/* binding */ takeshot),
/* harmony export */   toYYYYMMDD_hhmm: () => (/* binding */ toYYYYMMDD_hhmm)
/* harmony export */ });
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ 354);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HtmlElements */ 2930);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store */ 9673);
/* harmony import */ var _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SVGRenderer */ 6557);




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
    _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.container
        .viewbox(0, 0, _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionXMax, _Store__WEBPACK_IMPORTED_MODULE_2__.Store.positionYMax)
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
        _SVGRenderer__WEBPACK_IMPORTED_MODULE_3__.SVGRenderer.container
            .viewbox(previous.viewbox)
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

/***/ 8402:
/*!************************!*\
  !*** ./src/Options.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImplexesType: () => (/* binding */ ImplexesType),
/* harmony export */   OptionBusiness: () => (/* binding */ OptionBusiness),
/* harmony export */   OptionRepository: () => (/* binding */ OptionRepository),
/* harmony export */   Options: () => (/* binding */ Options)
/* harmony export */ });
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo */ 7621);
/* harmony import */ var _HtmlElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HtmlElements */ 2930);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store */ 9673);



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

/***/ 8495:
/*!*********************************!*\
  !*** ./src/assets/css/demo.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 5072);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ 7825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ 7659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ 5056);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ 540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ 1113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./demo.css */ 6736);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_demo_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ 8902:
/*!***********************!*\
  !*** ./src/Logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger)
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

/***/ 9050:
/*!**************************************!*\
  !*** ./src/assets/imgs/download.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/download.png";

/***/ }),

/***/ 9673:
/*!**********************!*\
  !*** ./src/Store.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Store: () => (/* binding */ Store)
/* harmony export */ });
/* harmony import */ var _Options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options */ 8402);
/* harmony import */ var _struct_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./struct.class */ 1177);


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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(7621)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxhQUFhLGNBQWMsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLFFBQVEsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxRQUFRLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxZQUFZLGFBQWEsY0FBYyxPQUFPLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxhQUFhLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVB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bUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9Sb290U3dpdGNoZXIudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL0NvbnRhaW5lckZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL3N0cnVjdC5jbGFzcy50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvUERGUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL0h0bWxFbGVtZW50cy50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvVGFza09yY2hlc3RyYXRvci5jbGFzcy50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvTWluaW1hcFJlbmRlcmVkLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9Cb3guY2xhc3MudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL0Fic3RyYWN0UGRmUmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL1NWR1JlbmRlcmVyLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9hc3NldHMvY3NzL2RlbW8uY3NzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9Qcm9ncmVzc0Jhci5jbGFzcy50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvR2VkY29tUGFyc2VyLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9kZW1vLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9NdWx0aVBERlJlbmRlcmVyLnRzIiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9JbWdSZW5kZXJlci50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvT3B0aW9ucy50cyIsIndlYnBhY2s6Ly9nZWRjb21fdG9fanMvLi9zcmMvYXNzZXRzL2Nzcy9kZW1vLmNzcz85Yzc0Iiwid2VicGFjazovL2dlZGNvbV90b19qcy8uL3NyYy9Mb2dnZXIudHMiLCJ3ZWJwYWNrOi8vZ2VkY29tX3RvX2pzLy4vc3JjL1N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhpZGUsIHB1cmdlLCBzaG93LCBfSEVfUk9PVF9FWEVDLCBfSEVfUk9PVF9JTlBVVCwgX0hFX1JPT1RfTk9SRVNVTFQsIF9IRV9ST09UX1JFU1VMVFMsIF9IRV9ST09UX1NFTEVDVFdSQVBQRVIsIF9IRV9TVEFSVFRZUEUgfSBmcm9tIFwiLi9IdG1sRWxlbWVudHNcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3RvcmVcIjtcbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxSb290KCkge1xuICAgIGhpZGUoW19IRV9ST09UX1NFTEVDVFdSQVBQRVJdKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93Um9vdCgpIHtcbiAgICBzaG93KFtfSEVfUk9PVF9TRUxFQ1RXUkFQUEVSXSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdHlwaW5nUm9vdCgpIHtcbiAgICB2YXIgc2VhcmNoVHlwZWQgPSBfSEVfUk9PVF9JTlBVVC52YWx1ZS50cmltKCk7XG4gICAgaWYgKHNlYXJjaFR5cGVkLmxlbmd0aCA8IDQpIHtcbiAgICAgICAgaGlkZShbX0hFX1NUQVJUVFlQRSwgX0hFX1JPT1RfUkVTVUxUUywgX0hFX1JPT1RfRVhFQywgX0hFX1JPT1RfTk9SRVNVTFRdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaGlkZShbX0hFX1NUQVJUVFlQRV0pO1xuICAgIH1cbiAgICB2YXIgbGlzdFNvc2EgPSBbXTtcbiAgICBsZXQgbWFwUmVzdWx0ID0gbmV3IE1hcCgpO1xuICAgIGxldCBtYXBSZXN1bHRCeVByaW9yaXR5ID0gbmV3IE1hcCgpO1xuICAgIGxldCBzZWFyY2hlcyA9IHNlYXJjaFR5cGVkLnJlcGxhY2UoL1sgXSsvZywgXCIgXCIpLnNwbGl0KFwiIFwiKTtcbiAgICBsZXQgc2VhcmNoZXNSZWdleCA9IFtdO1xuICAgIHNlYXJjaGVzLmZvckVhY2goYVNlYXJjaCA9PiB7XG4gICAgICAgIHNlYXJjaGVzUmVnZXgucHVzaChuZXcgUmVnRXhwKGFTZWFyY2gsIFwiaWdcIikpO1xuICAgIH0pO1xuICAgIFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5mb3JFYWNoKChpbmRpdmlkdWFsLCBzb3NhKSA9PiB7XG4gICAgICAgIHNlYXJjaGVzUmVnZXguZm9yRWFjaCgob25lU2VhcmNoUmVnZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRpdmlkdWFsLmZpcnN0bmFtZS5zZWFyY2gob25lU2VhcmNoUmVnZXgpID49IDAgfHwgaW5kaXZpZHVhbC5sYXN0bmFtZS5zZWFyY2gob25lU2VhcmNoUmVnZXgpID49IDApIHtcbiAgICAgICAgICAgICAgICBsaXN0U29zYS5wdXNoKHNvc2EpO1xuICAgICAgICAgICAgICAgIGlmICghbWFwUmVzdWx0Lmhhcyhzb3NhKSkge1xuICAgICAgICAgICAgICAgICAgICBtYXBSZXN1bHQuc2V0KHNvc2EsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFwUmVzdWx0LnNldChzb3NhLCBtYXBSZXN1bHQuZ2V0KHNvc2EpICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICAvL0Egc2Vjb25kIHJvdW5kIHRvIGludmVydCBtYXAgXG4gICAgbGV0IGFyck9mU09TQSA9IFtdO1xuICAgIGxldCBtYXhQcmlvID0gMDtcbiAgICBtYXBSZXN1bHQuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBpZiAoIW1hcFJlc3VsdEJ5UHJpb3JpdHkuaGFzKHZhbHVlKSkge1xuICAgICAgICAgICAgYXJyT2ZTT1NBID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhcnJPZlNPU0EgPSBtYXBSZXN1bHRCeVByaW9yaXR5LmdldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYXJyT2ZTT1NBLnB1c2goa2V5KTtcbiAgICAgICAgbWFwUmVzdWx0QnlQcmlvcml0eS5zZXQodmFsdWUsIGFyck9mU09TQSk7XG4gICAgICAgIGlmIChtYXhQcmlvIDwgdmFsdWUpIHtcbiAgICAgICAgICAgIG1heFByaW8gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHNob3dSb290cyhtYXBSZXN1bHRCeVByaW9yaXR5LCBtYXhQcmlvKTtcbn1cbi8qKlxuICogIEZpbGwgdGhlIGxpc3Qgb2YgU29zYSB0byBzaG93IGluIHRoZSBzZWxlY3RvclxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvd1Jvb3RzKG1hcFJlc3VsdEJ5UHJpb3JpdHksIG1heFByaW8pIHtcbiAgICBpZiAobWF4UHJpbyA9PSAwKSB7XG4gICAgICAgIGhpZGUoW19IRV9ST09UX1JFU1VMVFMsIF9IRV9ST09UX0VYRUNdKTtcbiAgICAgICAgc2hvdyhbX0hFX1JPT1RfTk9SRVNVTFRdKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHNob3coW19IRV9ST09UX1JFU1VMVFMsIF9IRV9ST09UX0VYRUNdKTtcbiAgICAgICAgaGlkZShbX0hFX1JPT1RfTk9SRVNVTFRdKTtcbiAgICB9XG4gICAgLy9QdXJnZSBTZWxlY3RcbiAgICBwdXJnZShfSEVfUk9PVF9SRVNVTFRTKTtcbiAgICBsZXQgdGV4dG5vZGUgPSBudWxsO1xuICAgIGxldCBub2RlID0gbnVsbDtcbiAgICBsZXQgYkRhdGUgPSBudWxsO1xuICAgIGxldCBkRGF0ZSA9IG51bGw7XG4gICAgbGV0IGluZGl2aWR1YWwgPSBudWxsO1xuICAgIGxldCBlbW9qMSA9IFwi4p2k77iPXCI7XG4gICAgbGV0IHByZWZpeCA9IFwiXCI7XG4gICAgZm9yIChsZXQgaSA9IG1heFByaW87IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgcHJlZml4ID0gZW1vajEucmVwZWF0KGkpO1xuICAgICAgICBpZiAobWFwUmVzdWx0QnlQcmlvcml0eS5oYXMoaSkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IG9uZVNvc2Egb2YgbWFwUmVzdWx0QnlQcmlvcml0eS5nZXQoaSkpIHtcbiAgICAgICAgICAgICAgICBpbmRpdmlkdWFsID0gU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLmdldChvbmVTb3NhKTtcbiAgICAgICAgICAgICAgICBiRGF0ZSA9IGluZGl2aWR1YWwuYmlydGhEYXRlICE9PSB1bmRlZmluZWQgPyBpbmRpdmlkdWFsLmJpcnRoRGF0ZSA6IFwiP1wiO1xuICAgICAgICAgICAgICAgIGREYXRlID0gaW5kaXZpZHVhbC5kZWF0aERhdGUgIT09IHVuZGVmaW5lZCA/IGluZGl2aWR1YWwuZGVhdGhEYXRlIDogXCI/XCI7XG4gICAgICAgICAgICAgICAgdGV4dG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgJHtwcmVmaXh9ICR7aW5kaXZpZHVhbC5maXJzdG5hbWV9ICR7aW5kaXZpZHVhbC5sYXN0bmFtZX0gKCR7YkRhdGV9LSR7ZERhdGV9KWApO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiT1BUSU9OXCIpO1xuICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgb25lU29zYSArIFwiXCIpO1xuICAgICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGV4dG5vZGUpO1xuICAgICAgICAgICAgICAgIF9IRV9ST09UX1JFU1VMVFMuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWaXJ0dWFsR3JpZEVudHJ5LCBTb3NhV3JhcHBlciwgRmFtaWx5IH0gZnJvbSBcIi4vc3RydWN0LmNsYXNzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5pbXBvcnQgeyBCb3gsIEJveEFic3RyYWN0LCBCb3hWIH0gZnJvbSBcIi4vQm94LmNsYXNzXCI7XG5pbXBvcnQgeyBJbXBsZXhlc1R5cGUgfSBmcm9tIFwiLi9PcHRpb25zXCI7XG4vKipcbiAqXG4gKiBAcGFyYW0gc29zYVdyYXBwZXIgdGhlIHNvc2EgV3JhcHBlciBhbHdheXMgc3RhcnRpbmcgYnkgMVxuICogQHBhcmFtIGdlZFRlY2hJZCB0aGUgdGVjaG5pY2FsIGluZGV4IGNvZGUgaW5zaWRlIHRoZSBHRURDT00gZmlsZSwgY2FuIGJlICE9IDEgdGhlIGZpcnN0IHRpbWUgLiBOb3QgdGhlIFNPU0FcbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUdyaWQoc29zYVdyYXBwZXIsIGdlZFRlY2hJZCkge1xuICAgIC8vU2V0IGZpcnN0R2VkVGVjaEluR3JpZCBmb3IgYSBzbWFydCByZWRyYXcgaW4gVUlcbiAgICBpZiAoU3RvcmUuZmlyc3RHZWRUZWNoSWRJbkdyaWQgPT0gbnVsbCkge1xuICAgICAgICBTdG9yZS5maXJzdEdlZFRlY2hJZEluR3JpZCA9IGdlZFRlY2hJZDtcbiAgICB9XG4gICAgLy9Bdm9pZCB1bmVjZXNzYXJ5IHByb2Nlc3NpbmdcbiAgICBpZiAoIVN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5oYXMoZ2VkVGVjaElkKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJnZWRUZWNoSWQgJW8gTm90IGZvdW5kIGluICdtYXAgR2VkVGVjaElkIFRvIEluZGl2aWR1YWwnLiBTb3NhIHdhcyAlb1wiLCBnZWRUZWNoSWQsIHNvc2FXcmFwcGVyLnNvc2EpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBpbmRpdmlkdWFsID0gU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLmdldChnZWRUZWNoSWQpO1xuICAgIGxldCBjdXJTb3NhID0gc29zYVdyYXBwZXIuc29zYTtcbiAgICBsZXQgY3VyR2VuID0gc29zYVdyYXBwZXIuZ2VuZXJhdGlvbjtcbiAgICAvL0Nhc2Ugb2YgSW1wbGV4ZVxuICAgIGxldCBoYXNJbXBsZXhlID0gU3RvcmUuZ3JpZC5wb3NpdGlvblByb2Nlc3NlZC5pbmRleE9mKGdlZFRlY2hJZCk7XG4gICAgbGV0IG90aGVySW1wbGV4ZVNvc2EgPSBudWxsO1xuICAgIGxldCBvdGhlckltcGxleGVHcmlkRW50cnkgPSBudWxsO1xuICAgIC8vTGltaXRhdGlvblxuICAgIGlmIChTdG9yZS5nZXRPcHRpb25zKCkubWF4R2VuZXJhdGlvbiAhPSAtMSAmJiBjdXJHZW4gPiBTdG9yZS5nZXRPcHRpb25zKCkubWF4R2VuZXJhdGlvbikge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJ0aGUgZ2VuZXJhdGlvbk1heCBsaW1pdCBvZiAlbyB3YXMgcmVhY2hlZC4gU29zYSB3YXMgJW8nLiBUYWtlIGEgbG9vayBhdCB0aGUgb3B0aW9ucyB0byBjaGFuZ2UgdGhpcyBsaW1pdFwiLCBTdG9yZS5nZXRPcHRpb25zKCkubWF4R2VuZXJhdGlvbiwgc29zYVdyYXBwZXIuc29zYSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy9TZXQgbWF4U29zYVByb2Nlc3NlZFxuICAgIGlmIChjdXJTb3NhID4gU3RvcmUuZ3JpZC5tYXhTb3NhUHJvY2Vzc2VkKSB7XG4gICAgICAgIFN0b3JlLmdyaWQubWF4U29zYVByb2Nlc3NlZCA9IGN1clNvc2E7XG4gICAgICAgIFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZCA9IGN1ckdlbjtcbiAgICB9XG4gICAgaWYgKCFTdG9yZS5ncmlkLm1hcEdlbmVyYXRpb25Tb3NhLmhhcyhjdXJHZW4pKSB7XG4gICAgICAgIFN0b3JlLmdyaWQubWFwR2VuZXJhdGlvblNvc2Euc2V0KGN1ckdlbiwgW10pO1xuICAgIH1cbiAgICBTdG9yZS5ncmlkLm1hcEdlbmVyYXRpb25Tb3NhLmdldChjdXJHZW4pLnB1c2goY3VyU29zYSk7XG4gICAgaWYgKGhhc0ltcGxleGUgIT09IC0xKSB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoXCJpbXBsZXhlIGRldGVjdGVkIHdpdGggZ2VkVGVjaElkICVvLiBTb3NhIHdhcyAlb1wiLCBnZWRUZWNoSWQsIHNvc2FXcmFwcGVyLnNvc2EpO1xuICAgICAgICBzb3NhV3JhcHBlci5pc0ltcGxleGUgPSB0cnVlO1xuICAgICAgICAvL1VwZGF0ZSB0aGUgb3RoZXIgcGFydCBvZiB0aGUgaW1wbGV4ZVxuICAgICAgICBvdGhlckltcGxleGVTb3NhID0gU3RvcmUuZ3JpZC5tYXBHZWRUZWNoSWRJbkdyaWRUb1Nvc2EuZ2V0KGdlZFRlY2hJZCk7XG4gICAgICAgIG90aGVySW1wbGV4ZUdyaWRFbnRyeSA9IFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldChvdGhlckltcGxleGVTb3NhKTtcbiAgICAgICAgb3RoZXJJbXBsZXhlR3JpZEVudHJ5LnNvc2FXcmFwcGVyLmlzSW1wbGV4ZSA9IHRydWU7XG4gICAgICAgIFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LnNldChvdGhlckltcGxleGVTb3NhLCBvdGhlckltcGxleGVHcmlkRW50cnkpO1xuICAgICAgICBTdG9yZS5ncmlkLmltcGxleGVzLnB1c2goc29zYVdyYXBwZXIuc29zYSk7XG4gICAgfVxuICAgIFN0b3JlLmdyaWQucG9zaXRpb25Qcm9jZXNzZWQucHVzaChnZWRUZWNoSWQpO1xuICAgIC8vU2V0dGluZyBoZXJlIGFmdGVyIHRoZSBjb2RlIGZvciBpbXBsZXhlcyB0byBhdm9pZCBhIGZhbHNlIGF1dG8tZGV0ZWN0aW9uXG4gICAgU3RvcmUuZ3JpZC5tYXBHZWRUZWNoSWRJbkdyaWRUb1Nvc2Euc2V0KGdlZFRlY2hJZCwgc29zYVdyYXBwZXIuc29zYSk7XG4gICAgbGV0IHByZXZpb3VzU29zYVdyYXBwZXIgPSBudWxsO1xuICAgIGlmIChTdG9yZS5ncmlkLm1hcFJpZ2h0U29zYUJ5R2VuZXJhdGlvbi5oYXMoY3VyR2VuKSkge1xuICAgICAgICBsZXQgcHJldmlvdXNTb3NhID0gU3RvcmUuZ3JpZC5tYXBSaWdodFNvc2FCeUdlbmVyYXRpb24uZ2V0KGN1ckdlbikuc29zYTtcbiAgICAgICAgLy8gU2V0IFwibmV4dFNvc2FXcmFwcGVyXCIgb2YgcHJldmlvdXNcbiAgICAgICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmhhcyhwcmV2aW91c1Nvc2EpKSB7XG4gICAgICAgICAgICBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQocHJldmlvdXNTb3NhKS5uZXh0U29zYVdyYXBwZXIgPSBzb3NhV3JhcHBlcjtcbiAgICAgICAgICAgIHByZXZpb3VzU29zYVdyYXBwZXIgPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQocHJldmlvdXNTb3NhKS5zb3NhV3JhcHBlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3JldHJpdmUgRmFtaWx5IG9mIEluZGl2aWR1YWxcbiAgICBsZXQgZmFtaWx5ID0gbmV3IEZhbWlseSgpO1xuICAgIGlmIChTdG9yZS5tYXBDb2RlRmFtaWx5LmhhcyhpbmRpdmlkdWFsLmZhbWMpKSB7XG4gICAgICAgIGZhbWlseSA9IFN0b3JlLm1hcENvZGVGYW1pbHkuZ2V0KGluZGl2aWR1YWwuZmFtYyk7XG4gICAgfVxuICAgIFN0b3JlLmdyaWQubWFwUmlnaHRTb3NhQnlHZW5lcmF0aW9uLnNldChjdXJHZW4sIHNvc2FXcmFwcGVyKTtcbiAgICBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5zZXQoY3VyU29zYSwgbmV3IFZpcnR1YWxHcmlkRW50cnkoc29zYVdyYXBwZXIsIGluZGl2aWR1YWwsIHByZXZpb3VzU29zYVdyYXBwZXIpKTtcbiAgICAvL1Byb2Nlc3MgcGFyZW50IG9ubHkgaWYgbm90IGFuIEltcGxleGUgJiBvcHRpb24gc2FpZCBzby5cbiAgICBpZiAoIXNvc2FXcmFwcGVyLmlzSW1wbGV4ZSB8fCAoU3RvcmUuZ2V0T3B0aW9ucygpLmltcGxleGVzICE9PSBJbXBsZXhlc1R5cGUuY29sb3JIaWRlICYmIFN0b3JlLmdldE9wdGlvbnMoKS5pbXBsZXhlcyAhPT0gSW1wbGV4ZXNUeXBlLmhpZGUpKSB7XG4gICAgICAgIGlmIChmYW1pbHkuZmF0aGVyICE9IG51bGwgJiYgZmFtaWx5LmZhdGhlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlR3JpZChuZXcgU29zYVdyYXBwZXIoc29zYVdyYXBwZXIuc29zYUZhdGhlciksIGZhbWlseS5mYXRoZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYW1pbHkubW90aGVyICE9IG51bGwgJiYgZmFtaWx5Lm1vdGhlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBvcHVsYXRlR3JpZChuZXcgU29zYVdyYXBwZXIoc29zYVdyYXBwZXIuc29zYU1vdGhlciksIGZhbWlseS5tb3RoZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEJveEZvckdyaWRFbnRyeSgpIHtcbiAgICBsZXQgYm94ID0gbnVsbDtcbiAgICBsZXQgc29zYVdyYXBwZXIgPSBudWxsO1xuICAgIFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmZvckVhY2goKGdyaWRFbnRyeSwgc29zYSkgPT4ge1xuICAgICAgICAvL0dlbmVyYXRlIEJveGVzXG4gICAgICAgIHNvc2FXcmFwcGVyID0gZ3JpZEVudHJ5LnNvc2FXcmFwcGVyO1xuICAgICAgICBpZiAoc29zYVdyYXBwZXIuZ2VuZXJhdGlvbiA+IDUpIHtcbiAgICAgICAgICAgIGJveCA9IG5ldyBCb3hWKHNvc2FXcmFwcGVyLCBTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQpOyAvLyBWZXJ0aWNhbCBCb3hcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJveCA9IG5ldyBCb3goc29zYVdyYXBwZXIsIFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZCk7IC8vIENsYXNzaWMgYm94XG4gICAgICAgIH1cbiAgICAgICAgZ3JpZEVudHJ5LmJveCA9IGJveDtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21wcmVzc0NvbnRhaW5lcihzb3NhV3JhcHBlcikge1xuICAgIGxldCBmYXRoZXJYID0gMDtcbiAgICBsZXQgbW90aGVyWCA9IDA7XG4gICAgbGV0IG15c2VsZlggPSAwO1xuICAgIGxldCBwcmV2aW91c1ggPSAwO1xuICAgIC8vR2V0IGNvbXByZXNzZWQgcG9zaXRpb24gb2YgZmF0aGVyIGlmIGV4aXN0c1xuICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYUZhdGhlcikpIHtcbiAgICAgICAgZmF0aGVyWCA9IGNvbXByZXNzQ29udGFpbmVyKG5ldyBTb3NhV3JhcHBlcihzb3NhV3JhcHBlci5zb3NhRmF0aGVyKSk7XG4gICAgfVxuICAgIC8vR2V0IGNvbXByZXNzZWQgcG9zaXRpb24gb2YgbW90aGVyIGlmIGV4aXN0c1xuICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYU1vdGhlcikpIHtcbiAgICAgICAgbW90aGVyWCA9IGNvbXByZXNzQ29udGFpbmVyKG5ldyBTb3NhV3JhcHBlcihzb3NhV3JhcHBlci5zb3NhTW90aGVyKSk7XG4gICAgfVxuICAgIC8vUmV0cml2ZSBwcmV2aW91cyBib3ggWC1wb3NpdGlvbigqKSBvbiB0aGUgZ3JhcGggKG9uIHRoZSBsZWZ0KVxuICAgIC8vICogPT4gaWYgZXhpc3QgOiBYIHBvc2l0aW9uIG9mIHByZXZpb3VzIGJveGUgKyBib3gud2lkdGgoKSArIGJveC53aWR0aFBhZGRpbmcoKVxuICAgIC8vICAgPT4gaWYgbm90IDogYm94LmxlZnRNYXJnaW4oKVxuICAgIHByZXZpb3VzWCA9IF9nZXRYUG9zaXRpb25PbkxlZnRCb3goc29zYVdyYXBwZXIpO1xuICAgIC8vQ2FsY3VsIGN1cnJlbnQgWSBwb3NpdGlvbiBiYXNlZCBvblxuICAgIGxldCBteXNlbGZZID0gX2dldFlQb3NpdGlvbihzb3NhV3JhcHBlcik7XG4gICAgLy9JZiB3ZSBkb24ndCBoYXZlIHBhcmVudHMsIGxldCB0YWtlIHByZXZpb3VzWCB2YWx1ZVxuICAgIGlmIChmYXRoZXJYID09IDAgJiYgbW90aGVyWCA9PSAwKSB7XG4gICAgICAgIG15c2VsZlggPSBwcmV2aW91c1g7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvL1Byb2Nlc3Mgb3VyIG93biBwb3NpdGlvblxuICAgICAgICBpZiAoZmF0aGVyWCA9PSAwIHx8IG1vdGhlclggPT0gMCkge1xuICAgICAgICAgICAgbXlzZWxmWCA9IGZhdGhlclggKyBtb3RoZXJYO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbXlzZWxmWCA9IE1hdGguZmxvb3IoKGZhdGhlclggKyBtb3RoZXJYKSAvIDIpO1xuICAgICAgICB9XG4gICAgICAgIC8vSWYgdGhlcmUgaXMgYSBjb25mbGljdCB3aXRoIFByZXZpb3VzIGJveCwgcmVzeW5jIGFuY2VzdG9ycyBhbmQgb3Vyc2VsZlxuICAgICAgICBpZiAobXlzZWxmWCA8IHByZXZpb3VzWCkge1xuICAgICAgICAgICAgLy9zcGVjaWFsIGNhc2UgOiAyIGdlbmVyYXRpb25zIHdpdGggIT0gYm94XG4gICAgICAgICAgICBsZXQgc2hpZnQgPSBwcmV2aW91c1ggLSBteXNlbGZYO1xuICAgICAgICAgICAgbGV0IGFuY2VzdG9yc1Nvc2EgPSBfZ2V0QWxsQW5jZXN0b3JzTWFwT2ZTb3NhV3JhcHBlcihzb3NhV3JhcHBlcik7XG4gICAgICAgICAgICBsZXQgbGVuID0gYW5jZXN0b3JzU29zYS5sZW5ndGg7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KGFuY2VzdG9yc1Nvc2FbaV0pLmJveC5zaGlmdFJpZ2h0KHNoaWZ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG15c2VsZlggPSBwcmV2aW91c1g7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9TZXQgb3VyIG93biBYL1kgdmFsdWVcbiAgICBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQoc29zYVdyYXBwZXIuc29zYSkuYm94LnNoaWZ0UmlnaHQobXlzZWxmWCk7XG4gICAgU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHNvc2FXcmFwcGVyLnNvc2EpLmJveC5zZXRZKG15c2VsZlkpO1xuICAgIC8vUmV0dXJuIG91ciBvd24gdmFsdWVcbiAgICByZXR1cm4gbXlzZWxmWDtcbn1cbmZ1bmN0aW9uIF9nZXRZUG9zaXRpb24oc29zYVdyYXBwZXIpIHtcbiAgICAvL0lmIGl0J3MgYWxyZWFkeSBjYWxjdWxhdGVkXG4gICAgaWYgKFN0b3JlLmdyaWQubWFwR2VuZXJhdGlvbllQb3NpdGlvbi5oYXMoc29zYVdyYXBwZXIuZ2VuZXJhdGlvbikpIHtcbiAgICAgICAgcmV0dXJuIFN0b3JlLmdyaWQubWFwR2VuZXJhdGlvbllQb3NpdGlvbi5nZXQoc29zYVdyYXBwZXIuZ2VuZXJhdGlvbik7XG4gICAgfVxuICAgIGxldCB5ID0gMDtcbiAgICAvL0xldCdzIGNhbGN1bGF0ZSBpdFxuICAgIGlmIChzb3NhV3JhcHBlci5nZW5lcmF0aW9uID4gNSkge1xuICAgICAgICAvLyBOdW1iZXIgb2YgZ2VuZXJhdGlvbiBhYm92ZSBtZSAqIHRvdGFsIGhlaWdodCBvZiBib3hWXG4gICAgICAgIHkgPSAoU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkIC0gc29zYVdyYXBwZXIuZ2VuZXJhdGlvbikgKiAoQm94Vi5oZWlnaHQoKSArIEJveFYuaGVpZ2h0UGFkZGluZygpKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIE51bWJlciBvZiBnZW5lcmF0aW9uICg+NSkgYWJvdmUgbWUgKiB0b3RhbCBoZWlnaHQgb2YgYm94VlxuICAgICAgICAvLyAgKyBOdW1iZXIgb2YgZ2VuZXJhdGlvbiAobWF4IDUpIGFib3ZlIG1lICogdG90YWwgaGVpZ2h0IG9mIGJveFxuICAgICAgICBpZiAoU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkID4gNSkge1xuICAgICAgICAgICAgeSA9IChTdG9yZS5ncmlkLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQgLSA1KSAqIChCb3hWLmhlaWdodCgpICsgQm94Vi5oZWlnaHRQYWRkaW5nKCkpO1xuICAgICAgICB9XG4gICAgICAgIHkgKz0gKE1hdGgubWluKDUsIFN0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZCkgLSBzb3NhV3JhcHBlci5nZW5lcmF0aW9uKSAqIChCb3guaGVpZ2h0KCkgKyBCb3guaGVpZ2h0UGFkZGluZygpKTtcbiAgICB9XG4gICAgeSArPSBCb3hBYnN0cmFjdC50b3BNYXJnaW4oKTtcbiAgICBTdG9yZS5ncmlkLm1hcEdlbmVyYXRpb25ZUG9zaXRpb24uc2V0KHNvc2FXcmFwcGVyLmdlbmVyYXRpb24sIHkpO1xuICAgIHJldHVybiB5O1xufVxuZnVuY3Rpb24gX2dldFhQb3NpdGlvbk9uTGVmdEJveChzb3NhV3JhcHBlcikge1xuICAgIGxldCB3aWR0aFBsdXNXaWR0aFBhZGRpbmcgPSAwO1xuICAgIGxldCBsZWZ0TWFyZ2luID0gMDtcbiAgICBpZiAoc29zYVdyYXBwZXIuZ2VuZXJhdGlvbiA+IDUpIHtcbiAgICAgICAgd2lkdGhQbHVzV2lkdGhQYWRkaW5nID0gQm94Vi53aWR0aCgpICsgQm94Vi53aWR0aFBhZGRpbmcoKTtcbiAgICAgICAgbGVmdE1hcmdpbiA9IEJveFYubGVmdE1hcmdpbigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgd2lkdGhQbHVzV2lkdGhQYWRkaW5nID0gQm94LndpZHRoKCkgKyBCb3gud2lkdGhQYWRkaW5nKCk7XG4gICAgICAgIGxlZnRNYXJnaW4gPSBCb3gubGVmdE1hcmdpbigpO1xuICAgIH1cbiAgICBsZXQgcHJldmlvdXNTb3NhV3JhcHBlciA9IFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldChzb3NhV3JhcHBlci5zb3NhKS5wcmV2aW91c1Nvc2FXcmFwcGVyO1xuICAgIGlmIChwcmV2aW91c1Nvc2FXcmFwcGVyICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQocHJldmlvdXNTb3NhV3JhcHBlci5zb3NhKS5ib3guZ2V0WCgpICsgd2lkdGhQbHVzV2lkdGhQYWRkaW5nO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxlZnRNYXJnaW47XG4gICAgfVxufVxuLyoqXG4gKiBSZXR1cm4gYSBNYXAgd2l0aCBhbGwgQW5jZXN0b3JzIG9mIGEgU29zYVdyYXBwZXJcbiAqL1xuZnVuY3Rpb24gX2dldEFsbEFuY2VzdG9yc01hcE9mU29zYVdyYXBwZXIoc29zYVdyYXBwZXIpIHtcbiAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICBpZiAoU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuaGFzKHNvc2FXcmFwcGVyLnNvc2EpKSB7XG4gICAgICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYUZhdGhlcikpIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2goc29zYVdyYXBwZXIuc29zYUZhdGhlcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyhzb3NhV3JhcHBlci5zb3NhTW90aGVyKSkge1xuICAgICAgICAgICAgYXJyYXkucHVzaChzb3NhV3JhcHBlci5zb3NhTW90aGVyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXkuY29uY2F0KF9nZXRBbGxBbmNlc3RvcnNNYXBPZlNvc2FXcmFwcGVyKG5ldyBTb3NhV3JhcHBlcihzb3NhV3JhcHBlci5zb3NhRmF0aGVyKSksIF9nZXRBbGxBbmNlc3RvcnNNYXBPZlNvc2FXcmFwcGVyKG5ldyBTb3NhV3JhcHBlcihzb3NhV3JhcHBlci5zb3NhTW90aGVyKSkpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG59XG4iLCJleHBvcnQgY2xhc3MgVmlydHVhbEdyaWQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uUHJvY2Vzc2VkID0gbnVsbDsgLy9MaXN0IG9mIHNvc2EgYWxyZWFkeSBwcm9jZXNzZWQgdG8gaWRlbnRpZmllIGltcGxleGVcbiAgICAgICAgdGhpcy5tYXhTb3NhUHJvY2Vzc2VkID0gbnVsbDsgLy8gbWVtb3J5IG9mIHRoZSBtYXggU29zYSB0byBoZWxwIHJlLWNhbGN1bGF0ZSBtYXhHZW5lcmF0aW9uUHJvY2Vzc2VkXG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvblByb2Nlc3NlZCA9IG51bGw7IC8vIG1lbW9yeSBvZiB0aGUgbWF4IGdlbiBvZiBhbGwgdGhlIHNvc2EgdG8gaGVscCBjYWxjdWxhdGUgdGhlIGhlaWdoIG9mIHRoZSBncmlkXG4gICAgICAgIHRoaXMubWFwUmlnaHRTb3NhQnlHZW5lcmF0aW9uID0gbnVsbDsgLy9NYXAgb2YgZ2VuZXJhdGlvbiAvIHRoZSBmYXItcmlnaHQgU29zYVdyYXBwZXIgcHJvY2Vzc2VkXG4gICAgICAgIHRoaXMubWFwU29zYVRvR3JpZEVudHJ5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXBHZW5lcmF0aW9uWVBvc2l0aW9uID0gbnVsbDsgLy9saXN0IG9mIFkgcG9zaXRpb24gZm9yIGVhY2ggc29zYVxuICAgICAgICB0aGlzLm1hcEdlbmVyYXRpb25Tb3NhID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXBHZWRUZWNoSWRJbkdyaWRUb1Nvc2EgPSBudWxsOyAvLyBtYXAgR2V0VGVjaElkIC8gU29zYSBjdXJyZW50bHkgaW4gR3JpZFxuICAgICAgICB0aGlzLmltcGxleGVzID0gbnVsbDsgLy9MaXN0IG9mIHNvc2EgSW1wbGV4ZXNcbiAgICAgICAgdGhpcy5wb3NpdGlvblByb2Nlc3NlZCA9IFtdO1xuICAgICAgICB0aGlzLm1heFNvc2FQcm9jZXNzZWQgPSBudWxsO1xuICAgICAgICB0aGlzLm1heEdlbmVyYXRpb25Qcm9jZXNzZWQgPSBudWxsO1xuICAgICAgICB0aGlzLm1hcFJpZ2h0U29zYUJ5R2VuZXJhdGlvbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5tYXBTb3NhVG9HcmlkRW50cnkgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMubWFwR2VuZXJhdGlvbllQb3NpdGlvbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5tYXBHZW5lcmF0aW9uU29zYSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5tYXBHZWRUZWNoSWRJbkdyaWRUb1Nvc2EgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuaW1wbGV4ZXMgPSBbXTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgVmlydHVhbEdyaWRFbnRyeSB7XG4gICAgY29uc3RydWN0b3Ioc29zYVdyYXBwZXIsIGluZGl2aWR1YWwsIHByZXZpb3VzU29zYVdyYXBwZXIpIHtcbiAgICAgICAgdGhpcy5zb3NhV3JhcHBlciA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlyc3RuYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0bmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYmlydGhEYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5iaXJ0aFBsYWNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5kZWF0aERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLmRlYXRoUGxhY2UgPSBudWxsO1xuICAgICAgICB0aGlzLm1hcmlhZ2VEYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXJpYWdlUGxhY2UgPSBudWxsO1xuICAgICAgICB0aGlzLm9jY3VwYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLmJveCA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTb3NhV3JhcHBlciA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNvc2FXcmFwcGVyID0gbnVsbDtcbiAgICAgICAgdGhpcy5zb3NhV3JhcHBlciA9IHNvc2FXcmFwcGVyO1xuICAgICAgICB0aGlzLmZpcnN0bmFtZSA9IGluZGl2aWR1YWwuZmlyc3RuYW1lO1xuICAgICAgICB0aGlzLmxhc3RuYW1lID0gaW5kaXZpZHVhbC5sYXN0bmFtZTtcbiAgICAgICAgdGhpcy5iaXJ0aERhdGUgPSBpbmRpdmlkdWFsLmJpcnRoRGF0ZTtcbiAgICAgICAgdGhpcy5iaXJ0aFBsYWNlID0gaW5kaXZpZHVhbC5iaXJ0aFBsYWNlO1xuICAgICAgICB0aGlzLmRlYXRoRGF0ZSA9IGluZGl2aWR1YWwuZGVhdGhEYXRlO1xuICAgICAgICB0aGlzLmRlYXRoUGxhY2UgPSBpbmRpdmlkdWFsLmRlYXRoUGxhY2U7XG4gICAgICAgIHRoaXMubWFyaWFnZURhdGUgPSBpbmRpdmlkdWFsLm1hcmlhZ2VEYXRlO1xuICAgICAgICB0aGlzLm1hcmlhZ2VQbGFjZSA9IGluZGl2aWR1YWwubWFyaWFnZVBsYWNlO1xuICAgICAgICB0aGlzLm9jY3VwYXRpb24gPSBpbmRpdmlkdWFsLm9jY3VwYXRpb247XG4gICAgICAgIHRoaXMuYm94ID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1Nvc2FXcmFwcGVyID0gcHJldmlvdXNTb3NhV3JhcHBlcjtcbiAgICAgICAgdGhpcy5uZXh0U29zYVdyYXBwZXIgPSBudWxsO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBTb3NhV3JhcHBlciB7XG4gICAgY29uc3RydWN0b3Ioc29zYSkge1xuICAgICAgICB0aGlzLnNvc2EgPSBudWxsO1xuICAgICAgICB0aGlzLmdlbmVyYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnNvc2FGYXRoZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnNvc2FNb3RoZXIgPSBudWxsO1xuICAgICAgICB0aGlzLmxlZnRTb3NhID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodFNvc2EgPSBudWxsO1xuICAgICAgICB0aGlzLmlzSW1wbGV4ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNvc2EgPSBzb3NhO1xuICAgICAgICAvKipcbiAgICAgICAgKiBSZXR1cm4gbsKwIG9mIGdlbmVyYXRpb24gYmFzZWQgb24gc29zYVxuICAgICAgICAqIHRrdCB0byBSb2xsYW5kIChodHRwczovL3d3dy5sb3JhbmQub3JnL3NwaXAucGhwP2FydGljbGUxNDU5KVxuICAgICAgICAqKi9cbiAgICAgICAgdGhpcy5nZW5lcmF0aW9uID0gTWF0aC5mbG9vcihNYXRoLmxvZyhzb3NhKSAvIE1hdGguTE4yKSArIDE7XG4gICAgICAgIHRoaXMuc29zYUZhdGhlciA9IHNvc2EgKiAyO1xuICAgICAgICB0aGlzLnNvc2FNb3RoZXIgPSBzb3NhICogMiArIDE7XG4gICAgICAgIC8vIFNvc2EgYXZhaWxhYmxlIG9uIHRoZSBsZWZ0L3JpZ2h0IHdpdGggdGhlIHNhbWUgZ2VuZXJhdGlvblxuICAgICAgICB0aGlzLmxlZnRTb3NhID0gbnVsbDtcbiAgICAgICAgdGhpcy5yaWdodFNvc2EgPSBudWxsO1xuICAgICAgICAvLyBCb29sZWFuIGlzIEltcGxleGVcbiAgICAgICAgdGhpcy5pc0ltcGxleGUgPSBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgSW5kaXZpZHVhbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBudWxsOyAvLyBUZWNoIElkIGluc2lkZSB0aGUgR2VkQ29tIEZpbGUuIG5vdCB0aGUgU09TQVxuICAgICAgICB0aGlzLmZpcnN0bmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdG5hbWUgPSBudWxsO1xuICAgICAgICB0aGlzLmZhbWMgPSBudWxsOyAvLyBUZWNoIElkIGluc2lkZSB0aGUgR2VkQ29tIEZpbGUuIG5vdCB0aGUgU09TQVxuICAgICAgICB0aGlzLnNleCA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgRmFtaWx5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IG51bGw7IC8vIFRlY2ggSWQgaW5zaWRlIHRoZSBHZWRDb20gRmlsZS4gbm90IHRoZSBTT1NBXG4gICAgICAgIHRoaXMuZmF0aGVyID0gbnVsbDsgLy8gVGVjaCBJZCBvZiB0aGUgZmF0aGVyXG4gICAgICAgIHRoaXMubW90aGVyID0gbnVsbDsgLy8gVGVjaCBJZCBvZiB0aGUgbW90aGVyXG4gICAgfVxufVxuIiwiaW1wb3J0IHsganNQREYgfSBmcm9tIFwianNwZGZcIjtcbmltcG9ydCB7IHN2ZzJwZGYgfSBmcm9tIFwic3ZnMnBkZi5qc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQZGZSZW5kZXJlciB9IGZyb20gJy4vQWJzdHJhY3RQZGZSZW5kZXJlcic7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5jb25zdCBQREZfSEFSRF9MSU1JVCA9IDUwODA7IC8vUERGIGlzIGxpbWl0ZWQgdG8gNTA4MCBtbSBtYXggaHR0cHM6Ly9naXRodWIuY29tL3BhcmFsbGF4L2pzUERGL2lzc3Vlcy83MDVcbmV4cG9ydCBjbGFzcyBQREZSZW5kZXJlciBleHRlbmRzIEFic3RyYWN0UGRmUmVuZGVyZXIge1xuICAgIGNvbnN0cnVjdG9yKCkgeyBzdXBlcigpOyB9XG4gICAgZ2VuZXJhdGVQZGYoKSB7XG4gICAgICAgIHN1cGVyLmdlbmVyYXRlUGRmKCk7XG4gICAgICAgIGlmIChTdG9yZS5wb3NpdGlvbllNYXggPCBTdG9yZS5wb3NpdGlvblhNYXgpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZW50YXRpb24gPSAnbCc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhdGlvVXNlZCA9IFBERlJlbmRlcmVyLlJBVElPX1BYXzJfQ007XG4gICAgICAgIGlmICh0aGlzLm9yaWVudGF0aW9uID09ICdsJyAmJiBTdG9yZS5wb3NpdGlvblhNYXggLyBQREZSZW5kZXJlci5SQVRJT19QWF8yX0NNICogMTAgPiBQREZfSEFSRF9MSU1JVCkge1xuICAgICAgICAgICAgcmF0aW9Vc2VkID0gU3RvcmUucG9zaXRpb25YTWF4ICogMTAgLyBQREZfSEFSRF9MSU1JVDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcmllbnRhdGlvbiA9PSAncCcgJiYgU3RvcmUucG9zaXRpb25ZTWF4IC8gUERGUmVuZGVyZXIuUkFUSU9fUFhfMl9DTSAqIDEwID4gUERGX0hBUkRfTElNSVQpIHtcbiAgICAgICAgICAgIHJhdGlvVXNlZCA9IFN0b3JlLnBvc2l0aW9uWU1heCAqIDEwIC8gUERGX0hBUkRfTElNSVQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wZGYgPSBuZXcganNQREYodGhpcy5vcmllbnRhdGlvbiwgJ2NtJywgW1N0b3JlLnBvc2l0aW9uWE1heCAvIHJhdGlvVXNlZCwgU3RvcmUucG9zaXRpb25ZTWF4IC8gcmF0aW9Vc2VkXSk7XG4gICAgICAgIC8vIHJlbmRlciB0aGUgc3ZnIGVsZW1lbnRcbiAgICAgICAgbGV0IHByb21pc2UgPSBzdmcycGRmKHRoaXMuc3ZnRWxlbWVudCwgdGhpcy5wZGYsIHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAwLFxuICAgICAgICAgICAgd2lkdGg6IFN0b3JlLnBvc2l0aW9uWE1heCAvIHJhdGlvVXNlZCxcbiAgICAgICAgICAgIGhlaWdodDogU3RvcmUucG9zaXRpb25ZTWF4IC8gcmF0aW9Vc2VkXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlc29sdmVTdmcyUGRmKHByb21pc2UpO1xuICAgIH1cbiAgICBzdGF0aWMgZXhwZWN0ZWRTaXplKCkge1xuICAgICAgICByZXR1cm4geyB4OiBTdG9yZS5wb3NpdGlvblhNYXggLyBQREZSZW5kZXJlci5SQVRJT19QWF8yX0NNLCB5OiBTdG9yZS5wb3NpdGlvbllNYXggLyBQREZSZW5kZXJlci5SQVRJT19QWF8yX0NNIH07XG4gICAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IF9IRV9GSUxFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUnKTtcbmV4cG9ydCBjb25zdCBfSEVfRk9STSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3gnKTtcbmV4cG9ydCBjb25zdCBfSEVfUERGX0FDVElPTl9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmMScpO1xuZXhwb3J0IGNvbnN0IF9IRV9QREZfTVVMVElQQUdFX0FDVElPTl9CVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmMicpO1xuZXhwb3J0IGNvbnN0IF9IRV9QTkdfQUNUSU9OX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcxJyk7XG5leHBvcnQgY29uc3QgX0hFX09QVElPTlNfQUNUSU9OX0JVVFRPTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaG93T3B0aW9ucycpO1xuZXhwb3J0IGNvbnN0IF9IRV9TVkdXUkFQUEVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N2Z1dyYXBwZXInKTtcbmV4cG9ydCBjb25zdCBfSEVfTUlOSVNWR1dSQVBQRVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWluaW1hcFdyYXBwZXInKTtcbmV4cG9ydCBjb25zdCBfSEVfUk9PVF9JTlBVVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFJvb3QnKTtcbmV4cG9ydCBjb25zdCBfSEVfUk9PVF9FWEVDID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4ZWNSb290Jyk7XG5leHBvcnQgY29uc3QgX0hFX1JPT1RfQ0FOQ0VMID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFJvb3QnKTtcbmV4cG9ydCBjb25zdCBfSEVfUk9PVF9TV0lUQ0ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3dpdGNoUm9vdCcpO1xuZXhwb3J0IGNvbnN0IF9IRV9ST09UX1JFU1VMVFMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0c1Jvb3QnKTtcbmV4cG9ydCBjb25zdCBfSEVfUk9PVF9TRUxFQ1RXUkFQUEVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbGVjdFJvb3RXcmFwcGVyJyk7XG5leHBvcnQgY29uc3QgX0hFX1JPT1RfTk9SRVNVTFQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9SZXN1bHQnKTtcbmV4cG9ydCBjb25zdCBfSEVfUFJPR1JFU1NCQVIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZ3Jlc3NCYXInKTtcbmV4cG9ydCBjb25zdCBfSEVfUFJPR1JFU1NCQVJfU1VCID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1YlByb2dyZXNzQmFyJyk7XG5leHBvcnQgY29uc3QgX0hFX1BST0dSRVNTQkFSX1RYVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0UHJvZ3Jlc3NCYXInKTtcbmV4cG9ydCBjb25zdCBfSEVfSEVBREVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuZXhwb3J0IGNvbnN0IF9IRV9QREZXUkFQUEVSID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BkZm9iamVjdFdyYXBwZXInKTtcbmV4cG9ydCBjb25zdCBfSEVfU1RBUlRUWVBFID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0VHlwZScpO1xuZXhwb3J0IGNvbnN0IF9IRV9XQUlUID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhaXQnKTtcbmV4cG9ydCBjb25zdCBfSEVfV0FJVF9DUFQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FpdF9jcHQnKTtcbmV4cG9ydCBjb25zdCBfSEVfTUVTU0FHRSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XG4vKiBPcHRpb25zIHNlY3Rpb24gKi9cbmV4cG9ydCBjb25zdCBfSEVfT1BUSU9OUyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zJyk7XG5leHBvcnQgY29uc3QgX0hFX09QVElPTlNfV0FMTCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcHRpb25zV2FsbCcpO1xuZXhwb3J0IGNvbnN0IF9IRV9PUFRJT05TX0lNUExFWEVTX05PVEhJTkcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aGluZycpO1xuZXhwb3J0IGNvbnN0IF9IRV9PUFRJT05TX0lNUExFWEVTX0hJREUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlkZScpO1xuZXhwb3J0IGNvbnN0IF9IRV9PUFRJT05TX0lNUExFWEVTX0NPTE9SID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbG9yJyk7XG5leHBvcnQgY29uc3QgX0hFX09QVElPTlNfSU1QTEVYRVNfQ09MT1JfSElERSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2xvckhpZGUnKTtcbmV4cG9ydCBjb25zdCBfSEVfT1BUSU9OU19URU1QTEFURSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cGwnKTtcbmV4cG9ydCBjb25zdCBfSEVfT1BUSU9OU19URU1QTEFURV9SRVNFVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cGxfcmVzZXQnKTtcbmV4cG9ydCBjb25zdCBfSEVfT1BUSU9OU19NQVhHRU4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWF4R2VuZXJhdGlvbicpO1xuZXhwb3J0IGNvbnN0IF9IRV9PUFRJT05TX1NVQk1JVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRPcHRpb25zJyk7XG5leHBvcnQgZnVuY3Rpb24gaGlkZShodG1sRWxlbWVudElkcykge1xuICAgIGh0bWxFbGVtZW50SWRzLmZvckVhY2goaHRtbEVsZW1lbnQgPT4ge1xuICAgICAgICBodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGh0bWxFbGVtZW50SWRzKSB7XG4gICAgaHRtbEVsZW1lbnRJZHMuZm9yRWFjaChodG1sRWxlbWVudCA9PiB7XG4gICAgICAgIGh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHB1cmdlKGh0bWxFbGVtZW50KSB7XG4gICAgLy8gLmlubmVySHRtbD0nJyBpcyBub3QgcmVjb21tZW5kZWQgYmVjYXVzZSBpdCBkb2VzbuKAmXQgcmVtb3ZlIHRoZSBldmVudCBoYW5kbGVycyBvZiB0aGUgY2hpbGQgbm9kZXMsIHdoaWNoIG1pZ2h0IGNhdXNlIGEgbWVtb3J5IGxlYWsuXG4gICAgd2hpbGUgKGh0bWxFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgaHRtbEVsZW1lbnQucmVtb3ZlQ2hpbGQoaHRtbEVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcIi4vTG9nZ2VyXCI7XG5leHBvcnQgY2xhc3MgVGFza09yY2hlc3RyYXRvciB7XG4gICAgY29uc3RydWN0b3IocHJvZ3Jlc3NCYXIpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBudWxsO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSBwcm9ncmVzc0JhcjtcbiAgICB9XG4gICAgYWRkKGNvbW1hbmRlLCBhcmdzLCBtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMudGFza3MucHVzaChbY29tbWFuZGUsIGFyZ3MsIG1lc3NhZ2VdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgaWYgKHRoaXMudGFza3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGFza0NvbW1hbmRlID0gdGhpcy50YXNrc1swXVswXTsgLy8gQ29tbWFuZGVcbiAgICAgICAgbGV0IHRhc2tBcmdzID0gdGhpcy50YXNrc1swXVsxXTsgLy8gQXJnc1xuICAgICAgICBsZXQgdGFza01lc3NhZ2UgPSB0aGlzLnRhc2tzWzBdWzJdOyAvLyBDdXN0b20gTWVzc2FnZVxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm1vdmluZ1Byb2dyZXNzQmFyKHRhc2tNZXNzYWdlKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBMb2dnZXIubG9nKFwiU3RhcnQgXCIgKyB0YXNrTWVzc2FnZSk7XG4gICAgICAgICAgICB0YXNrQ29tbWFuZGUoLi4udGFza0FyZ3MpO1xuICAgICAgICAgICAgTG9nZ2VyLmxvZyhcIkVuZCBcIiArIHRhc2tNZXNzYWdlKTtcbiAgICAgICAgICAgIC8vUmVtb3ZlIGZpcnN0IHRhc2tcbiAgICAgICAgICAgIHRoaXMudGFza3Muc2hpZnQoKTtcbiAgICAgICAgICAgIC8vUmVydW4gbXlzZWxmXG4gICAgICAgICAgICB0aGlzLnJ1bigpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTVkcgfSBmcm9tIFwiQHN2Z2RvdGpzL3N2Zy5qc1wiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi9TdG9yZVwiO1xuaW1wb3J0IHsgX0hFX01JTklTVkdXUkFQUEVSIGFzIF9IRV9NSU5JTUFQV1JBUFBFUiwgX0hFX1NWR1dSQVBQRVIgfSBmcm9tIFwiLi9IdG1sRWxlbWVudHNcIjtcbmltcG9ydCB7IFNWR1JlbmRlcmVyIH0gZnJvbSBcIi4vU1ZHUmVuZGVyZXJcIjtcbmV4cG9ydCBjbGFzcyBNaW5pbWFwUmVuZGVyZXIge1xuICAgIHN0YXRpYyBkcmF3TWluaW1hcCgpIHtcbiAgICAgICAgTWluaW1hcFJlbmRlcmVyLm1pbmltYXAgPSBTVkcoKS5hZGRUbyhfSEVfTUlOSU1BUFdSQVBQRVIpO1xuICAgICAgICBNaW5pbWFwUmVuZGVyZXIubWluaW1hcFJlc2l6ZSgpO1xuICAgICAgICBNaW5pbWFwUmVuZGVyZXIubWluaW1hcEJveCgpO1xuICAgIH1cbiAgICBzdGF0aWMgbWluaW1hcFJlc2l6ZSgpIHtcbiAgICAgICAgY29uc3QgbWF4ID0gMjAwO1xuICAgICAgICBjb25zdCBtaW4gPSAxMDA7XG4gICAgICAgIGxldCB3LCBoID0gMDtcbiAgICAgICAgaWYgKFN0b3JlLnBvc2l0aW9uWE1heCA+IFN0b3JlLnBvc2l0aW9uWU1heCkge1xuICAgICAgICAgICAgdyA9IG1heDtcbiAgICAgICAgICAgIGggPSBNYXRoLm1heChtaW4sIFN0b3JlLnBvc2l0aW9uWU1heCAqIG1heCAvIFN0b3JlLnBvc2l0aW9uWE1heCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3ID0gTWF0aC5tYXgobWluLCBTdG9yZS5wb3NpdGlvblhNYXggKiBtYXggLyBTdG9yZS5wb3NpdGlvbllNYXgpO1xuICAgICAgICAgICAgaCA9IG1heDtcbiAgICAgICAgfVxuICAgICAgICBfSEVfTUlOSU1BUFdSQVBQRVIuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcbiAgICAgICAgX0hFX01JTklNQVBXUkFQUEVSLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuICAgICAgICAvL1Jlc2V0IGZvY3VzIHJlY3RcbiAgICAgICAgTWluaW1hcFJlbmRlcmVyLmZvY3VzID0gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIHBsdWdFdmVudHMoKSB7XG4gICAgICAgIC8vRXZlbnQgb24gdGhlIG1haW4gU1ZHXG4gICAgICAgIGxldCBzdmdUYWcgPSBfSEVfU1ZHV1JBUFBFUi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKVswXTtcbiAgICAgICAgc3ZnVGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJ6b29tXCIsIGZ1bmN0aW9uIChldmVudCkgeyBNaW5pbWFwUmVuZGVyZXIuZHJhd0ZvY3VzKCk7IH0sIGZhbHNlKTtcbiAgICAgICAgc3ZnVGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd24gXCIsIGZ1bmN0aW9uIChldmVudCkgeyBNaW5pbWFwUmVuZGVyZXIuZHJhd0ZvY3VzKCk7IH0sIGZhbHNlKTtcbiAgICAgICAgc3ZnVGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldmVudCkgeyBNaW5pbWFwUmVuZGVyZXIuZHJhd0ZvY3VzKCk7IH0sIGZhbHNlKTtcbiAgICAgICAgLy9FdmVudCBvbiB0aGUgbWFpbiBTVkdcbiAgICAgICAgbGV0IG1pbmltYXBUYWcgPSBfSEVfTUlOSU1BUFdSQVBQRVIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdmdcIilbMF07XG4gICAgICAgIG1pbmltYXBUYWcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93biBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7IFNWR1JlbmRlcmVyLmNoYW5nZUZvY3VzKGV2ZW50KTsgfSwgZmFsc2UpO1xuICAgICAgICBtaW5pbWFwVGFnLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldmVudCkgeyBTVkdSZW5kZXJlci5jaGFuZ2VGb2N1cyhldmVudCk7IH0sIGZhbHNlKTtcbiAgICB9XG4gICAgc3RhdGljIGRyYXdGb2N1cygpIHtcbiAgICAgICAgbGV0IGJveCA9IFNWR1JlbmRlcmVyLmNvbnRhaW5lci52aWV3Ym94KCk7XG4gICAgICAgIGlmICh0aGlzLmZvY3VzID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZm9jdXMgPSBNaW5pbWFwUmVuZGVyZXIubWluaW1hcC5yZWN0KDEsIDEpXG4gICAgICAgICAgICAgICAgLmZpbGwoXCJyZ2JhKDI1NSwgMCwgMCwgMC4yKVwiKVxuICAgICAgICAgICAgICAgIC5tb3ZlKC0xMDAwMCwgLTEwMDAwKVxuICAgICAgICAgICAgICAgIC5zdHJva2UoeyB3aWR0aDogMiwgY29sb3I6IFwicmdiYSgyNTUsIDAsIDAsIDAuMzcpXCIgfSlcbiAgICAgICAgICAgICAgICAuZnJvbnQoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvY3VzLngoYm94LngpLnkoYm94LnkpLndpZHRoKGJveC53aWR0aCkuaGVpZ2h0KGJveC5oZWlnaHQpO1xuICAgIH1cbiAgICBzdGF0aWMgbWluaW1hcEJveCgpIHtcbiAgICAgICAgTWluaW1hcFJlbmRlcmVyLm1pbmltYXBcbiAgICAgICAgICAgIC52aWV3Ym94KDAsIDAsIFN0b3JlLnBvc2l0aW9uWE1heCwgU3RvcmUucG9zaXRpb25ZTWF4KVxuICAgICAgICAgICAgLnNpemUoJzEwMCUnLCAnMTAwJScpO1xuICAgIH1cbn1cbk1pbmltYXBSZW5kZXJlci5taW5pbWFwID0gbnVsbDtcbk1pbmltYXBSZW5kZXJlci5mb2N1cyA9IG51bGw7XG4iLCJjb25zdCBDT05TVF9MRUZUX01BUkdJTiA9IDIwOyAvLyBsZWZ0IG1hcmdpblxuY29uc3QgQ09OU1RfVE9QX01BUkdJTiA9IDIwOyAvLyB0b3AgbWFyZ2luXG5jb25zdCBDT05TVF9XSURUSF9QQURESU5HID0gMTA7IC8vIGhvcml6b250YWwgcGFkZGluZyBiZXR3ZWVuIGJveFxuY29uc3QgQ09OU1RfSEVJR0hUX1BBRERJTkcgPSAzMDsgLy8gdmVydGljYWwgcGFkZGluZyBiZXR3ZWVuIGJveFxuY29uc3QgQ09OU1RfV0lEVEggPSAyMDA7IC8vd2lkdGggb2YgYm94IGluIHB4XG5jb25zdCBDT05TVF9IRUlHSFQgPSA3NTsgLy9oZWlnaHQgb2YgYm94IGluIHB4XG5jb25zdCBDT05TVF9XSURUSF9WID0gOTU7IC8vd2lkdGggb2YgYm94IGluIHB4XG5jb25zdCBDT05TVF9IRUlHSFRfViA9IDE1MDsgLy9oZWlnaHQgb2YgYm94IGluIHB4XG5leHBvcnQgY2xhc3MgQm94QWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKHNvc2FXcmFwcGVyLCBtYXhHZW5lcmF0aW9uKSB7XG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuc29zYSA9IG51bGw7XG4gICAgICAgIHRoaXMueCA9IG51bGw7XG4gICAgICAgIHRoaXMueSA9IG51bGw7XG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvbiA9IG1heEdlbmVyYXRpb247XG4gICAgICAgIHRoaXMuZ2VuZXJhdGlvbiA9IHNvc2FXcmFwcGVyLmdlbmVyYXRpb247XG4gICAgICAgIHRoaXMuc29zYSA9IHNvc2FXcmFwcGVyLnNvc2E7XG4gICAgICAgIHRoaXMueCA9IDA7XG4gICAgICAgIHRoaXMueSA9IDA7XG4gICAgfVxuICAgIHNldFgodmFsdWUpIHtcbiAgICAgICAgdGhpcy54ID0gdmFsdWU7XG4gICAgfVxuICAgIHNldFkodmFsdWUpIHtcbiAgICAgICAgdGhpcy55ID0gdmFsdWU7XG4gICAgfVxuICAgIHNoaWZ0UmlnaHQodmFsdWUpIHtcbiAgICAgICAgdGhpcy54ICs9IHZhbHVlO1xuICAgIH1cbiAgICBnZXRTb3NhT2ZNYXhGYXRoZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNvc2EgKiBNYXRoLnBvdygyLCB0aGlzLm1heEdlbmVyYXRpb24gLSB0aGlzLmdlbmVyYXRpb24pO1xuICAgIH1cbiAgICBnZXRNaW5Tb3NhT2ZHZW5lcmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gTWF0aC5wb3coMiwgKHRoaXMuZ2VuZXJhdGlvbiAtIDEpKTtcbiAgICB9XG4gICAgZ2V0WCgpIHsgcmV0dXJuIHRoaXMueDsgfVxuICAgIGdldFkoKSB7IHJldHVybiB0aGlzLnk7IH1cbiAgICBzdGF0aWMgbGVmdE1hcmdpbigpIHsgcmV0dXJuIENPTlNUX0xFRlRfTUFSR0lOOyB9XG4gICAgc3RhdGljIHRvcE1hcmdpbigpIHsgcmV0dXJuIENPTlNUX1RPUF9NQVJHSU47IH1cbiAgICBzdGF0aWMgd2lkdGhQYWRkaW5nKCkgeyByZXR1cm4gQ09OU1RfV0lEVEhfUEFERElORzsgfVxuICAgIHN0YXRpYyBoZWlnaHRQYWRkaW5nKCkgeyByZXR1cm4gQ09OU1RfSEVJR0hUX1BBRERJTkc7IH1cbn1cbmV4cG9ydCBjbGFzcyBCb3ggZXh0ZW5kcyBCb3hBYnN0cmFjdCB7XG4gICAgY29uc3RydWN0b3Ioc29zYVdyYXBwZXIsIG1heEdlbmVyYXRpb24pIHtcbiAgICAgICAgc3VwZXIoc29zYVdyYXBwZXIsIG1heEdlbmVyYXRpb24pO1xuICAgIH1cbiAgICBnZXRCb3R0b21KdW5jdGlvblBvaW50KCkge1xuICAgICAgICByZXR1cm4geyBcInhcIjogdGhpcy54ICsgQm94LndpZHRoKCkgLyAyLCBcInlcIjogdGhpcy55ICsgQm94LmhlaWdodCgpIH07XG4gICAgfVxuICAgIGdldFRvcEp1bmN0aW9uUG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB7IFwieFwiOiB0aGlzLnggKyBCb3gud2lkdGgoKSAvIDIsIFwieVwiOiB0aGlzLnkgfTtcbiAgICB9XG4gICAgc3RhdGljIHdpZHRoKCkgeyByZXR1cm4gQ09OU1RfV0lEVEg7IH1cbiAgICBzdGF0aWMgaGVpZ2h0KCkgeyByZXR1cm4gQ09OU1RfSEVJR0hUOyB9XG59XG5leHBvcnQgY2xhc3MgQm94ViBleHRlbmRzIEJveEFic3RyYWN0IHtcbiAgICBjb25zdHJ1Y3Rvcihzb3NhV3JhcHBlciwgbWF4R2VuZXJhdGlvbikge1xuICAgICAgICBzdXBlcihzb3NhV3JhcHBlciwgbWF4R2VuZXJhdGlvbik7XG4gICAgfVxuICAgIGdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKSB7XG4gICAgICAgIHJldHVybiB7IFwieFwiOiB0aGlzLnggKyBCb3hWLndpZHRoKCkgLyAyLCBcInlcIjogdGhpcy55ICsgQm94Vi5oZWlnaHQoKSB9O1xuICAgIH1cbiAgICBnZXRUb3BKdW5jdGlvblBvaW50KCkge1xuICAgICAgICByZXR1cm4geyBcInhcIjogdGhpcy54ICsgQm94Vi53aWR0aCgpIC8gMiwgXCJ5XCI6IHRoaXMueSB9O1xuICAgIH1cbiAgICAvL05vdCByZWFkeSBmb3IgYSBwcm9kdWN0aW9uIHVzZVxuICAgIC8vc3RhdGljIHdpZHRoKCl7cmV0dXJuIENPTlNUX1dJRFRIX1Z9XG4gICAgLy9zdGF0aWMgaGVpZ2h0KCl7cmV0dXJuIENPTlNUX0hFSUdIVF9WfVxuICAgIHN0YXRpYyB3aWR0aCgpIHsgcmV0dXJuIENPTlNUX1dJRFRIOyB9XG4gICAgc3RhdGljIGhlaWdodCgpIHsgcmV0dXJuIENPTlNUX0hFSUdIVDsgfVxufVxuIiwiaW1wb3J0IHsgaGlkZSwgcHVyZ2UsIHNob3csIF9IRV9QREZXUkFQUEVSLCBfSEVfU1ZHV1JBUFBFUiwgX0hFX1dBSVQgfSBmcm9tIFwiLi9IdG1sRWxlbWVudHNcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCB7IFNWR1JlbmRlcmVyIH0gZnJvbSBcIi4vU1ZHUmVuZGVyZXJcIjtcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFBkZlJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zdmdFbGVtZW50ID0gX0hFX1NWR1dSQVBQRVIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdmdcIilbMF07XG4gICAgICAgIHRoaXMub3JpZW50YXRpb24gPSAncCc7XG4gICAgICAgIHRoaXMucGRmID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91cyA9IHsgdmlld2JveDogJycsIHc6ICcwJywgaDogJzAnLCB6b29tOiAwIH07XG4gICAgfVxuICAgIGdlbmVyYXRlUGRmKCkge1xuICAgICAgICAvL1Nob3cgV2FpdGluZyBzcGlubmVyICYgUERGIFdyYXBwZXJcbiAgICAgICAgc2hvdyhbX0hFX1dBSVQsIF9IRV9QREZXUkFQUEVSXSk7XG4gICAgICAgIC8vUHVyZ2UgYWxsIHByZXZpb3VzIDxlbWJlZCAvPiB0YWcgZ2VuZXJhdGVkXG4gICAgICAgIHB1cmdlKF9IRV9QREZXUkFQUEVSKTtcbiAgICAgICAgLy9TYXZpbmcgY3VycmVudCBzZXR0aW5nXG4gICAgICAgIGxldCBjb21wID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoX0hFX1NWR1dSQVBQRVIpO1xuICAgICAgICB0aGlzLnByZXZpb3VzID0geyB2aWV3Ym94OiBTVkdSZW5kZXJlci5jb250YWluZXIudmlld2JveCgpLnRvU3RyaW5nKCksXG4gICAgICAgICAgICB3OiBjb21wLmdldFByb3BlcnR5VmFsdWUoJ3dpZHRoJyksXG4gICAgICAgICAgICBoOiBjb21wLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLFxuICAgICAgICAgICAgem9vbTogU1ZHUmVuZGVyZXIuY29udGFpbmVyLnpvb20oKSB9O1xuICAgICAgICB0aGlzLnBkZlZpZXdCb3goKTtcbiAgICB9XG4gICAgcmVzb2x2ZVN2ZzJQZGYocHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlLnRoZW4oKGpzcGRmKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1cmkgPSBqc3BkZi5vdXRwdXQoJ2RhdGF1cmlzdHJpbmcnKTtcbiAgICAgICAgICAgIGlmICh1cmkubGVuZ3RoIDwgNTAwMDAwMCkge1xuICAgICAgICAgICAgICAgIGxldCBwZGZvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZW1iZWRcIik7XG4gICAgICAgICAgICAgICAgcGRmb2JqZWN0LnNldEF0dHJpYnV0ZShcInNyY1wiLCB1cmkpO1xuICAgICAgICAgICAgICAgIHBkZm9iamVjdC5pZCA9IFwicGRmb2JqZWN0XCI7XG4gICAgICAgICAgICAgICAgcGRmb2JqZWN0LnR5cGUgPSBcImFwcGxpY2F0aW9uL3BkZlwiO1xuICAgICAgICAgICAgICAgIF9IRV9QREZXUkFQUEVSLmFwcGVuZENoaWxkKHBkZm9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBqc3BkZi5zYXZlKCdteVBERi5wZGYnKTtcbiAgICAgICAgICAgICAgICBoaWRlKFtfSEVfUERGV1JBUFBFUl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgIGhpZGUoW19IRV9XQUlUXSk7XG4gICAgICAgICAgICAvL1Jlc2V0IGluZm9ybWF0aW9uIHBvc3QgcGRmIGdlbmVyYXRpb24gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lclxuICAgICAgICAgICAgICAgIC52aWV3Ym94KHRoaXMucHJldmlvdXMudmlld2JveClcbiAgICAgICAgICAgICAgICAuc2l6ZSh0aGlzLnByZXZpb3VzLncsIHRoaXMucHJldmlvdXMuaClcbiAgICAgICAgICAgICAgICAuem9vbSh0aGlzLnByZXZpb3VzLnpvb20pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcGRmVmlld0JveCgpIHtcbiAgICAgICAgbGV0IHcgPSAxMDA7XG4gICAgICAgIGlmIChTdG9yZS5wb3NpdGlvblhNYXggLyB3aW5kb3cuaW5uZXJXaWR0aCA8IFN0b3JlLnBvc2l0aW9uWU1heCAvIHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgdyA9ICh3aW5kb3cuaW5uZXJXaWR0aCAqIDEwMCAvIChTdG9yZS5wb3NpdGlvbllNYXggKiB3aW5kb3cuaW5uZXJIZWlnaHQgLyB3aW5kb3cuaW5uZXJXaWR0aCkpO1xuICAgICAgICB9XG4gICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lclxuICAgICAgICAgICAgLnZpZXdib3goMCwgMCwgU3RvcmUucG9zaXRpb25YTWF4LCBTdG9yZS5wb3NpdGlvbllNYXgpXG4gICAgICAgICAgICAuc2l6ZSh3ICsgJyUnLCAnMTAwJScpO1xuICAgIH1cbn1cbkFic3RyYWN0UGRmUmVuZGVyZXIuUkFUSU9fUFhfMl9DTSA9IDQwOyAvL0RlZmF1bHQgUmF0aW8gcHggPT4gY21cbiIsImltcG9ydCB7IFNWRyB9IGZyb20gXCJAc3ZnZG90anMvc3ZnLmpzXCI7XG5pbXBvcnQgJ0Bzdmdkb3Rqcy9zdmcucGFuem9vbS5qcyc7XG5pbXBvcnQgeyBCb3gsIEJveFYgfSBmcm9tIFwiLi9Cb3guY2xhc3NcIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCB7IF9IRV9NSU5JU1ZHV1JBUFBFUiBhcyBfSEVfTUlOSU1BUFdSQVBQRVIsIF9IRV9TVkdXUkFQUEVSIH0gZnJvbSBcIi4vSHRtbEVsZW1lbnRzXCI7XG5pbXBvcnQgeyBJbXBsZXhlc1R5cGUgfSBmcm9tIFwiLi9PcHRpb25zXCI7XG5pbXBvcnQgeyBNaW5pbWFwUmVuZGVyZXIgfSBmcm9tIFwiLi9NaW5pbWFwUmVuZGVyZWRcIjtcbmV4cG9ydCBjbGFzcyBTVkdSZW5kZXJlciB7XG4gICAgc3RhdGljIGRyYXdTVkcoKSB7XG4gICAgICAgIC8vUHJlcGFyZSBmaXJzdCB0aGUgbWluaW1hcFxuICAgICAgICBNaW5pbWFwUmVuZGVyZXIuZHJhd01pbmltYXAoKTtcbiAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyID0gU1ZHKCkuYWRkVG8oX0hFX1NWR1dSQVBQRVIpO1xuICAgICAgICBTVkdSZW5kZXJlci5zdmdWaWV3Qm94KCk7XG4gICAgICAgIFNWR1JlbmRlcmVyLnBvbHlsaW5lKFswLCAwLCAwLCBTdG9yZS5wb3NpdGlvbllNYXgsIFN0b3JlLnBvc2l0aW9uWE1heCwgU3RvcmUucG9zaXRpb25ZTWF4LCBTdG9yZS5wb3NpdGlvblhNYXgsIDAsIDAsIDBdKTtcbiAgICAgICAgU1ZHUmVuZGVyZXIuZHJhd0xvb3AoMSk7XG4gICAgICAgIC8vaW5pdGlhdGUgZXZlbnQgb24gdGhlIG5ld3MgPHN2ZyB0YWdzPlxuICAgICAgICBNaW5pbWFwUmVuZGVyZXIucGx1Z0V2ZW50cygpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vdXBkYXRlIG1pbmltYXAncyBmb2N1c1xuICAgICAgICAgICAgTWluaW1hcFJlbmRlcmVyLmRyYXdGb2N1cygpO1xuICAgICAgICB9LCA1MCk7XG4gICAgfVxuICAgIHN0YXRpYyBkcmF3TG9vcChnZW5lcmF0aW9uKSB7XG4gICAgICAgIGlmIChnZW5lcmF0aW9uID4gU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNvc2FXcmFwcGVyID0gbnVsbDtcbiAgICAgICAgbGV0IGJveCA9IG51bGw7XG4gICAgICAgIGxldCB3aWR0aCA9IG51bGw7XG4gICAgICAgIGxldCBoZWlnaHQgPSBudWxsO1xuICAgICAgICBsZXQgeUluY3JlbWVudCA9IG51bGw7XG4gICAgICAgIGlmIChnZW5lcmF0aW9uID4gNSkge1xuICAgICAgICAgICAgd2lkdGggPSBCb3hWLndpZHRoKCk7XG4gICAgICAgICAgICBoZWlnaHQgPSBCb3hWLmhlaWdodCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2lkdGggPSBCb3gud2lkdGgoKTtcbiAgICAgICAgICAgIGhlaWdodCA9IEJveC5oZWlnaHQoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc29zYXMgPSBTdG9yZS5ncmlkLm1hcEdlbmVyYXRpb25Tb3NhLmdldChnZW5lcmF0aW9uKTtcbiAgICAgICAgbGV0IGxlbiA9IHNvc2FzLmxlbmd0aDtcbiAgICAgICAgbGV0IHNvc2EgPSBudWxsO1xuICAgICAgICBsZXQgZ3JpZEVudHJ5ID0gbnVsbDtcbiAgICAgICAgY29uc3QgcmVnZXhCZWZvcmUgPSAvXkJFRi9pO1xuICAgICAgICBjb25zdCByZWdleEFmdGVyID0gL15BRlQvaTtcbiAgICAgICAgLy9QYXR0ZXJuIGZvciBpbXBsZXhlIHdpdGggY29sb3JhdGlvblxuICAgICAgICBsZXQgcGF0dGVybkltcGxleGUgPSBTVkdSZW5kZXJlci5jb250YWluZXIucGF0dGVybig5LjUsIDkuNSwgZnVuY3Rpb24gKGFkZCkge1xuICAgICAgICAgICAgYWRkLnJlY3QoOS41LCA5LjUpLmZpbGwoJyNmZmYnKTtcbiAgICAgICAgICAgIGFkZC5saW5lKDAsIDAsIDUsIDkuNSkuc3Ryb2tlKHsgY29sb3I6ICcjZDlmMmNlJywgd2lkdGg6IDEgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgdHBsTGluZXMgPSBTdG9yZS5nZXRPcHRpb25zKCkudGVtcGxhdGUuc3BsaXQoL1tcXHJcXG5dKy8pO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBzb3NhID0gc29zYXNbaV07XG4gICAgICAgICAgICBpZiAoIVN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyhzb3NhKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcImdyaWQubWFwU29zYVRvR3JpZEVudHJ5IGRvZXNuJ3QgaGF2ZSBzb3NhICVvXCIsIHNvc2EpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ3JpZEVudHJ5ID0gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHNvc2EpO1xuICAgICAgICAgICAgeUluY3JlbWVudCA9IDE1O1xuICAgICAgICAgICAgc29zYVdyYXBwZXIgPSBncmlkRW50cnkuc29zYVdyYXBwZXI7XG4gICAgICAgICAgICBib3ggPSBncmlkRW50cnkuYm94O1xuICAgICAgICAgICAgbGV0IGNsZWFuRGF0ZSA9IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRlLnJlcGxhY2UocmVnZXhCZWZvcmUsICc8JykucmVwbGFjZShyZWdleEFmdGVyLCAnPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgY2xlYW5QbGFjZSA9IGZ1bmN0aW9uIChwbGFjZSkge1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBsYWNlLnNwbGl0KCcsJylbMF0udHJpbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgY2xlYW5QbGFjZUNvZGUgPSBmdW5jdGlvbiAocGxhY2UpIHtcbiAgICAgICAgICAgICAgICBpZiAocGxhY2UgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB6aXAgPSBwbGFjZS5zcGxpdCgnLCcpWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoemlwICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHppcC50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbGV0IGNsZWFuT2NjdXBhdGlvbiA9IGZ1bmN0aW9uIChvY2N1cGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9jY3VwYXRpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvY2N1cGF0aW9uO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgcmVjID0gU1ZHUmVuZGVyZXIuY29udGFpbmVyLnJlY3Qod2lkdGgsIGhlaWdodClcbiAgICAgICAgICAgICAgICAuZmlsbChcIiNFRUVcIilcbiAgICAgICAgICAgICAgICAubW92ZShib3guZ2V0WCgpLCBib3guZ2V0WSgpKVxuICAgICAgICAgICAgICAgIC5zdHJva2UoeyB3aWR0aDogMSwgY29sb3I6ICcjY2NjJyB9KVxuICAgICAgICAgICAgICAgIC5yYWRpdXMoMTApO1xuICAgICAgICAgICAgLy9BbHNvIGFkZCB0byBtaW5pbWFwIChzaW1wbGlmaWVkKVxuICAgICAgICAgICAgTWluaW1hcFJlbmRlcmVyLm1pbmltYXAucmVjdCh3aWR0aCwgaGVpZ2h0KVxuICAgICAgICAgICAgICAgIC5maWxsKFwiI0VFRVwiKVxuICAgICAgICAgICAgICAgIC5tb3ZlKGJveC5nZXRYKCksIGJveC5nZXRZKCkpXG4gICAgICAgICAgICAgICAgLnN0cm9rZSh7IHdpZHRoOiAxLCBjb2xvcjogJyM1NTUnIH0pO1xuICAgICAgICAgICAgaWYgKHNvc2FXcmFwcGVyLmlzSW1wbGV4ZSAmJiAoU3RvcmUuZ2V0T3B0aW9ucygpLmltcGxleGVzID09IEltcGxleGVzVHlwZS5jb2xvciB8fCBTdG9yZS5nZXRPcHRpb25zKCkuaW1wbGV4ZXMgPT0gSW1wbGV4ZXNUeXBlLmNvbG9ySGlkZSkpIHtcbiAgICAgICAgICAgICAgICByZWMuZmlsbChwYXR0ZXJuSW1wbGV4ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0ZvciBkZWJ1ZyBvbmx5XG4gICAgICAgICAgICAvL25hbWUgPSAnIycrIGdyaWRFbnRyeS5zb3NhV3JhcHBlci5zb3NhICsgXCIgXCIgKyBuYW1lXG4gICAgICAgICAgICAvL0ZvciBkZWJ1ZyBvbmx5XG4gICAgICAgICAgICBsZXQgZmlyc3QgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHN0ciA9ICcnO1xuICAgICAgICAgICAgdHBsTGluZXMuZm9yRWFjaCh0cGxMaW5lID0+IHtcbiAgICAgICAgICAgICAgICBzdHIgPSB0cGxMaW5lLnJlcGxhY2UoJ19TT1NBXycsIHNvc2EgKyAnJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ19GSVJTVE5BTUVfJywgZ3JpZEVudHJ5LmZpcnN0bmFtZSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ19MQVNUTkFNRV8nLCBncmlkRW50cnkubGFzdG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdfQklSVEhfREFURV8nLCBjbGVhbkRhdGUoZ3JpZEVudHJ5LmJpcnRoRGF0ZSkpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdfQklSVEhfUExBQ0VfJywgY2xlYW5QbGFjZShncmlkRW50cnkuYmlydGhQbGFjZSkpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdfQklSVEhfUExBQ0VaSVBfJywgY2xlYW5QbGFjZUNvZGUoZ3JpZEVudHJ5LmJpcnRoUGxhY2UpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnX0RFQVRIX0RBVEVfJywgY2xlYW5EYXRlKGdyaWRFbnRyeS5kZWF0aERhdGUpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnX0RFQVRIX1BMQUNFXycsIGNsZWFuUGxhY2UoZ3JpZEVudHJ5LmRlYXRoUGxhY2UpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnX0RFQVRIX1BMQUNFWklQXycsIGNsZWFuUGxhY2VDb2RlKGdyaWRFbnRyeS5kZWF0aFBsYWNlKSlcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoJ19NQVJSSUFHRV9EQVRFXycsIGNsZWFuRGF0ZShncmlkRW50cnkubWFyaWFnZURhdGUpKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgnX01BUlJJQUdFX1BMQUNFXycsIGNsZWFuUGxhY2UoZ3JpZEVudHJ5Lm1hcmlhZ2VQbGFjZSkpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdfTUFSUklBR0VfUExBQ0VaSVBfJywgY2xlYW5QbGFjZUNvZGUoZ3JpZEVudHJ5Lm1hcmlhZ2VQbGFjZSkpXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKCdfT0NDVVBBVElPTl8nLCBjbGVhbk9jY3VwYXRpb24oZ3JpZEVudHJ5Lm9jY3VwYXRpb24pKVxuICAgICAgICAgICAgICAgICAgICAudHJpbSgpO1xuICAgICAgICAgICAgICAgIGlmIChzdHIubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlJbmNyZW1lbnQgKz0gU1ZHUmVuZGVyZXIuaDEoc3RyLCBib3gsIHlJbmNyZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHlJbmNyZW1lbnQgKz0gU1ZHUmVuZGVyZXIuaDIoc3RyLCBib3gsIHlJbmNyZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL1NpIHDDqHJlIGV4aXN0ZSA6IGxpYWlzb25cbiAgICAgICAgICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYUZhdGhlcikpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmF0aGVyID0gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHNvc2FXcmFwcGVyLnNvc2FGYXRoZXIpLmJveDtcbiAgICAgICAgICAgICAgICBsZXQgbWlkZGxlWSA9IChmYXRoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLnkgKyBib3guZ2V0VG9wSnVuY3Rpb25Qb2ludCgpLnkpIC8gMjtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlsaW5lKFtib3guZ2V0VG9wSnVuY3Rpb25Qb2ludCgpLngsIGJveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueSxcbiAgICAgICAgICAgICAgICAgICAgYm94LmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS54LCBtaWRkbGVZLFxuICAgICAgICAgICAgICAgICAgICBmYXRoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLngsIG1pZGRsZVksXG4gICAgICAgICAgICAgICAgICAgIGZhdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueCwgZmF0aGVyLmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS55XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1NpIG3DqHJlIGV4aXN0ZSA6IGxpYWlzb25cbiAgICAgICAgICAgIGlmIChTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5oYXMoc29zYVdyYXBwZXIuc29zYU1vdGhlcikpIHtcbiAgICAgICAgICAgICAgICBsZXQgbW90aGVyID0gU3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuZ2V0KHNvc2FXcmFwcGVyLnNvc2FNb3RoZXIpLmJveDtcbiAgICAgICAgICAgICAgICBsZXQgbWlkZGxlWSA9IChtb3RoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLnkgKyBib3guZ2V0VG9wSnVuY3Rpb25Qb2ludCgpLnkpIC8gMjtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlsaW5lKFtib3guZ2V0VG9wSnVuY3Rpb25Qb2ludCgpLngsIGJveC5nZXRUb3BKdW5jdGlvblBvaW50KCkueSxcbiAgICAgICAgICAgICAgICAgICAgYm94LmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS54LCBtaWRkbGVZLFxuICAgICAgICAgICAgICAgICAgICBtb3RoZXIuZ2V0Qm90dG9tSnVuY3Rpb25Qb2ludCgpLngsIG1pZGRsZVksXG4gICAgICAgICAgICAgICAgICAgIG1vdGhlci5nZXRCb3R0b21KdW5jdGlvblBvaW50KCkueCwgbW90aGVyLmdldEJvdHRvbUp1bmN0aW9uUG9pbnQoKS55XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZ2VuZXJhdGlvbisrO1xuICAgICAgICAvL0FsbG93IHJlZnJlc2hpbmcgSUhNXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmF3TG9vcChnZW5lcmF0aW9uKTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuICAgIHN0YXRpYyBoMShzdHIsIGJveCwgeUluY3JlbWVudCkge1xuICAgICAgICByZXR1cm4gU1ZHUmVuZGVyZXIuaDAoc3RyLCBTVkdSZW5kZXJlci5jYXJhY0gxLCBib3gsIHlJbmNyZW1lbnQpO1xuICAgIH1cbiAgICBzdGF0aWMgaDIoc3RyLCBib3gsIHlJbmNyZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIFNWR1JlbmRlcmVyLmgwKHN0ciwgU1ZHUmVuZGVyZXIuY2FyYWNIMiwgYm94LCB5SW5jcmVtZW50KTtcbiAgICB9XG4gICAgc3RhdGljIGgwKHN0ciwgY2FyYWMsIGJveCwgeUluY3JlbWVudCkge1xuICAgICAgICBpZiAoc3RyLnRyaW0oKSA9PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyLnBsYWluKHN0ci5zdWJzdHJpbmcoMCwgY2FyYWNbJ2Nhck1heCddKSkuZm9udCgnc2l6ZScsIGNhcmFjWydmb250U2l6ZSddKS5tb3ZlKGJveC5nZXRYKCkgKyA1LCBib3guZ2V0WSgpICsgeUluY3JlbWVudCAtIDEwKTtcbiAgICAgICAgaWYgKHN0ci5sZW5ndGggPiBjYXJhY1snY2FyTWF4J10pIHtcbiAgICAgICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lci5wbGFpbihzdHIuc3Vic3RyaW5nKGNhcmFjWydjYXJNYXgnXSwgMiAqIGNhcmFjWydjYXJNYXgnXSkpLmZvbnQoJ3NpemUnLCBjYXJhY1snZm9udFNpemUnXSkubW92ZShib3guZ2V0WCgpICsgNSwgYm94LmdldFkoKSArIHlJbmNyZW1lbnQgLSAxMCArIGNhcmFjWydpbmNyZW0nXSk7XG4gICAgICAgICAgICByZXR1cm4gMiAqIGNhcmFjWydpbmNyZW0nXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAxICogY2FyYWNbJ2luY3JlbSddO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBzdmdWaWV3Qm94KCkge1xuICAgICAgICAvLyBYIHBvc2l0aW9uIG9mIHRoZSBTT1NBICMxXG4gICAgICAgIGxldCB2aWV3Ym94WCA9IFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5LmdldCgxKS5ib3guZ2V0WCgpIC0gKCh3aW5kb3cuaW5uZXJXaWR0aCAtIDEwKSAvIDIpICsgQm94LndpZHRoKCkgLyAyO1xuICAgICAgICBsZXQgdmlld2JveFkgPSBTdG9yZS5wb3NpdGlvbllNYXggLSB3aW5kb3cuaW5uZXJIZWlnaHQgKyAxMDA7XG4gICAgICAgIGlmIChTdG9yZS5wb3NpdGlvbllNYXggPCB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgICAgIHZpZXdib3hZID0gKFN0b3JlLnBvc2l0aW9uWU1heCAtIHdpbmRvdy5pbm5lckhlaWdodCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lclxuICAgICAgICAgICAgLnZpZXdib3godmlld2JveFgsIHZpZXdib3hZLCB3aW5kb3cuaW5uZXJXaWR0aCAtIDEwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMClcbiAgICAgICAgICAgIC5zaXplKCcxMDAlJywgJzEwMCUnKVxuICAgICAgICAgICAgLnBhblpvb20oeyB6b29tTWluOiAwLjAyLCB6b29tTWF4OiAyMCwgem9vbUZhY3RvcjogMC4xNSB9KVxuICAgICAgICAgICAgLnpvb20oMSk7XG4gICAgfVxuICAgIHN0YXRpYyBwb2x5bGluZShjb29yZCkge1xuICAgICAgICBTVkdSZW5kZXJlci5jb250YWluZXIucG9seWxpbmUoY29vcmQpXG4gICAgICAgICAgICAuZmlsbCgnbm9uZScpXG4gICAgICAgICAgICAuc3Ryb2tlKHsgd2lkdGg6IDEsIGNvbG9yOiAnIzAwMCcgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBjaGFuZ2VGb2N1cyhldmVudCkge1xuICAgICAgICBsZXQgbWluaW1hcFRhZyA9IF9IRV9NSU5JTUFQV1JBUFBFUi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN2Z1wiKVswXTtcbiAgICAgICAgbGV0IHggPSBldmVudC5jbGllbnRYIC0gbWluaW1hcFRhZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICBsZXQgeSA9IGV2ZW50LmNsaWVudFkgLSBtaW5pbWFwVGFnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICAgICAgbGV0IHcgPSBfSEVfTUlOSU1BUFdSQVBQRVIuY2xpZW50V2lkdGg7XG4gICAgICAgIGxldCBoID0gX0hFX01JTklNQVBXUkFQUEVSLmNsaWVudEhlaWdodDtcbiAgICAgICAgbGV0IHZpZXdCb3ggPSBTVkdSZW5kZXJlci5jb250YWluZXIudmlld2JveCgpO1xuICAgICAgICBsZXQgcnggPSB4ICogU3RvcmUucG9zaXRpb25YTWF4IC8gdyAtIHZpZXdCb3gudyAvIDI7XG4gICAgICAgIGxldCByeSA9IHkgKiBTdG9yZS5wb3NpdGlvbllNYXggLyBoIC0gdmlld0JveC5oIC8gMjtcbiAgICAgICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyLnZpZXdib3gocngsIHJ5LCB2aWV3Qm94LncsIHZpZXdCb3guaCk7XG4gICAgICAgIE1pbmltYXBSZW5kZXJlci5kcmF3Rm9jdXMoKTtcbiAgICB9XG59XG5TVkdSZW5kZXJlci5jb250YWluZXIgPSBudWxsO1xuU1ZHUmVuZGVyZXIuY2FyYWNIMSA9IHsgY2FyTWF4OiAyNiwgZm9udFNpemU6ICcxMycsIGluY3JlbTogMTUgfTtcblNWR1JlbmRlcmVyLmNhcmFjSDIgPSB7IGNhck1heDogMzQsIGZvbnRTaXplOiAnMTAnLCBpbmNyZW06IDEwIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMGYzYzRiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZWRmMTtcXG59XFxuXFxuXFxuYXtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZSwgYm9yZGVyLWJvdHRvbS1jb2xvciAwLjJzIGVhc2U7XFxuICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMXB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW57XFxuICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqL1xcbi8qIERyb3AgRmlsZSBCb3ggKi9cXG4vKioqKioqKioqKioqKioqKiovXFxuXFxuI2JveHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGRhZGY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuLmJveF9fZmlsZSB7XFxuICB3aWR0aDogMC4xcHg7XFxuICBoZWlnaHQ6IDAuMXB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmJveF9fZmlsZSArIGxhYmVsIHtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmJveF9fYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2U1ZWRmMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWJmZDM7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBtYXJnaW46IDQwcHggYXV0byAwO1xcbn1cXG4uYm94X19pbnB1dHtcXG4gIHBhZGRpbmc6IDI1dmg7XFxuICAvKnBhZGRpbmc6IDMwJSAyMHB4IDAgMjBweDsqL1xcbn1cXG4uYm94X19kcmFnbmRyb3AsXFxuLmJveF9fdXBsb2FkaW5nLFxcbi5ib3hfX3N1Y2Nlc3MsXFxuLmJveF9fZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2JveC5oYXMtYWR2YW5jZWQtdXBsb2FkIHtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzkyYjBiMztcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMTBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxufVxcblxcbiNib3guaGFzLWFkdmFuY2VkLXVwbG9hZCAuYm94X19kcmFnbmRyb3Age1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4jYm94LmlzLWRyYWdvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKi9cXG4vKiBQcm9ncmVzc0JhciAqL1xcbi8qKioqKioqKioqKioqKioqKi9cXG5cXG4jcHJvZ3Jlc3NCYXJ7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3N1YlByb2dyZXNzQmFye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcXG4gIG1pbi1oZWlnaHQ6IDkwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4jdGV4dFByb2dyZXNzQmFye1xcbiAgY29sb3I6ICNEREQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2FtcGxle1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIG1hcmdpbi10b3A6MjBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqL1xcbi8qIFNWRyBSZW5kZXIgQm94ICovXFxuLyoqKioqKioqKioqKioqKioqL1xcblxcbiNzdmdXcmFwcGVye1xcblxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2QwZjQ7XFxuICBwYWRkaW5nOjEwcHg7XFxuICBvdXRsaW5lOiAycHggZGFzaGVkICM4Y2I3Zjc7XFxuICBvdXRsaW5lLW9mZnNldDogLTEwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBvdXRsaW5lLW9mZnNldCAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgbGluZWFyO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKi9cXG4vKiAgSGVhZGVyIE1lbnUgICAqL1xcbi8qKioqKioqKioqKioqKioqKiovXFxuI2hlYWRlcntcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuI2hlYWRlciBhe1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLmVudHJ5e1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZW50cnk6aG92ZXJ7XFxuICBjb2xvcjogIzgyYjBlZDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKiovXFxuLyogIFJvb3QgU3dpdGNoaW5nICAgKi9cXG4vKioqKioqKioqKioqKioqKioqKioqL1xcblxcbiNzZWxlY3RSb290V3JhcHBlcntcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4jc2VsZWN0Um9vdHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIG1hcmdpbjogMjV2aCBhdXRvO1xcbn1cXG5cXG4jaW5wdXRSb290e1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbiNzZWxlY3RSb290V3JhcHBlciBzZWxlY3R7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ1dHRvbnN7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b257XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkODljO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNjNWQ2MjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxhYmVse1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyoqKioqKioqKioqKioqKioqKi9cXG4vKiBQREYgUmVuZGVyIEJveCAqL1xcbi8qKioqKioqKioqKioqKioqKiovXFxuI3BkZm9iamVjdFdyYXBwZXJ7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogNSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNwZGZvYmplY3R7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndhbGx7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogT3ZlcmxheSB3aGVuIHVzZXIgd2FpdCAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4jd2FpdHtcXG4gIGN1cnNvcjp3YWl0O1xcbn1cXG5cXG4jd2FpdCBzcGFue1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIHRvcDogNDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6I0ZGRjtcXG59XFxuXFxuI3dhaXRfY3B0e1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBNZXNzYWdlIGJveCBsZWZ0IGJvdHRvbSAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI21lc3NhZ2V7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvdHRvbTogMjBweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIG1pbmltYXAgcmlnaCBib3R0b20gKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbiNtaW5pbWFwV3JhcHBlcntcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTliNGM2O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmQ3ZjU7XFxufVxcblxcbi8qKioqKioqKioqKioqKiovXFxuLyogT3B0aW9ucyBCb3ggKi9cXG4vKioqKioqKioqKioqKioqL1xcbiNvcHRpb25zV2FsbHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI29wdGlvbnMge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMTAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIHRvcDogMCU7XFxufVxcblxcbiNvcHRpb25zIC5vcHRpb24ge1xcblxcbn1cXG5cXG4jb3B0aW9ucyBmaWVsZHNldCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jb3B0aW9ucyBsZWdlbmQge1xcblxcbn1cXG5cXG4jb3B0aW9ucyAub3B0aW9uIGRpdiB7XFxuXFxufVxcblxcbiNvcHRpb25zIGxhYmVsIHtcXG5cXG59XFxuXFxuI3RwbHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcblxcbiN0cGxMYWJlbHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi50cGxfbGVmdCwgLnRwbF9yaWdodHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmbG9hdDpsZWZ0O1xcbn1cXG4udHBsX2xpc3R7XFxuICBjb2x1bW5zOiAyO1xcbiAgLXdlYmtpdC1jb2x1bW5zOiAyO1xcbiAgLW1vei1jb2x1bW5zOiAyO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5ub0J1bGxldHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbiNvcHRpb25zIGlucHV0W3R5cGU9J2J1dHRvbiddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5M2Q4OWM7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDBweCBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46YXV0bztcXG4gIHBhZGRpbmc6NXB4O1xcbn1cXG4jb3B0aW9ucyBpbnB1dFt0eXBlPSdidXR0b24nXTpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZGM5OTU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNvcHRpb25zIGlucHV0W3R5cGU9J2J1dHRvbiddOmFjdGl2ZXtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkYzk5NTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3MvZGVtby5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULCtCQUErQjtFQUMvQixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOzs7QUFHQTtFQUNFLDBEQUEwRDtFQUMxRCx5QkFBeUI7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QUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0FBQzNCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsIGJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiAjMGYzYzRiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZWRmMTtcXG59XFxuXFxuXFxuYXtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZSwgYm9yZGVyLWJvdHRvbS1jb2xvciAwLjJzIGVhc2U7XFxuICBib3JkZXItYm90dG9tOiBkb3R0ZWQgMXB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oaWRkZW57XFxuICBkaXNwbGF5Om5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqL1xcbi8qIERyb3AgRmlsZSBCb3ggKi9cXG4vKioqKioqKioqKioqKioqKiovXFxuXFxuI2JveHtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGRhZGY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuLmJveF9fZmlsZSB7XFxuICB3aWR0aDogMC4xcHg7XFxuICBoZWlnaHQ6IDAuMXB4O1xcbiAgb3BhY2l0eTogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuLmJveF9fZmlsZSArIGxhYmVsIHtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmJveF9fYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogI2U1ZWRmMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWJmZDM7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBtYXJnaW46IDQwcHggYXV0byAwO1xcbn1cXG4uYm94X19pbnB1dHtcXG4gIHBhZGRpbmc6IDI1dmg7XFxuICAvKnBhZGRpbmc6IDMwJSAyMHB4IDAgMjBweDsqL1xcbn1cXG4uYm94X19kcmFnbmRyb3AsXFxuLmJveF9fdXBsb2FkaW5nLFxcbi5ib3hfX3N1Y2Nlc3MsXFxuLmJveF9fZXJyb3Ige1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI2JveC5oYXMtYWR2YW5jZWQtdXBsb2FkIHtcXG4gIG91dGxpbmU6IDJweCBkYXNoZWQgIzkyYjBiMztcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMTBweDtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3V0bGluZS1vZmZzZXQgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGxpbmVhcjtcXG4gIHRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxufVxcblxcbiNib3guaGFzLWFkdmFuY2VkLXVwbG9hZCAuYm94X19kcmFnbmRyb3Age1xcbiAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG4jYm94LmlzLWRyYWdvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcblxcbi8qKioqKioqKioqKioqKioqKi9cXG4vKiBQcm9ncmVzc0JhciAqL1xcbi8qKioqKioqKioqKioqKioqKi9cXG5cXG4jcHJvZ3Jlc3NCYXJ7XFxuICB3aWR0aDogNTAlO1xcbiAgbWF4LXdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3N1YlByb2dyZXNzQmFye1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcXG4gIG1pbi1oZWlnaHQ6IDkwJTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4jdGV4dFByb2dyZXNzQmFye1xcbiAgY29sb3I6ICNEREQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uc2FtcGxle1xcbiAgZm9udC1zaXplOiAwLjhlbTtcXG4gIG1hcmdpbi10b3A6MjBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqL1xcbi8qIFNWRyBSZW5kZXIgQm94ICovXFxuLyoqKioqKioqKioqKioqKioqL1xcblxcbiNzdmdXcmFwcGVye1xcblxcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2QwZjQ7XFxuICBwYWRkaW5nOjEwcHg7XFxuICBvdXRsaW5lOiAycHggZGFzaGVkICM4Y2I3Zjc7XFxuICBvdXRsaW5lLW9mZnNldDogLTEwcHg7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IG91dGxpbmUtb2Zmc2V0IC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBsaW5lYXI7XFxuICB0cmFuc2l0aW9uOiBvdXRsaW5lLW9mZnNldCAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgbGluZWFyO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKi9cXG4vKiAgSGVhZGVyIE1lbnUgICAqL1xcbi8qKioqKioqKioqKioqKioqKiovXFxuI2hlYWRlcntcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBjb2xvcjogI0ZGRjtcXG4gIGZvbnQtc2l6ZTogMS4zZW07XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuI2hlYWRlciBhe1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuXFxuLmVudHJ5e1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZW50cnk6aG92ZXJ7XFxuICBjb2xvcjogIzgyYjBlZDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQ7XFxufVxcblxcbi8qKioqKioqKioqKioqKioqKioqKiovXFxuLyogIFJvb3QgU3dpdGNoaW5nICAgKi9cXG4vKioqKioqKioqKioqKioqKioqKioqL1xcblxcbiNzZWxlY3RSb290V3JhcHBlcntcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJhY2tncm91bmQ6ICMwMDA7XFxuICBvcGFjaXR5OiAwLjg1O1xcbn1cXG5cXG4jc2VsZWN0Um9vdHtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIG1hcmdpbjogMjV2aCBhdXRvO1xcbn1cXG5cXG4jaW5wdXRSb290e1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbiNzZWxlY3RSb290V3JhcHBlciBzZWxlY3R7XFxuICBmb250LXNpemU6IDEuMmVtO1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ1dHRvbnN7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5idXR0b257XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTNkODljO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzNjNWQ2MjtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxhYmVse1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDEwcHg7XFxuICBmb250LXNpemU6IDEuM2VtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLyoqKioqKioqKioqKioqKioqKi9cXG4vKiBQREYgUmVuZGVyIEJveCAqL1xcbi8qKioqKioqKioqKioqKioqKiovXFxuI3BkZm9iamVjdFdyYXBwZXJ7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICB0b3A6IDUlO1xcbiAgbGVmdDogNSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbiNwZGZvYmplY3R7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLndhbGx7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdG9wOiAwO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuLyogT3ZlcmxheSB3aGVuIHVzZXIgd2FpdCAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5cXG4jd2FpdHtcXG4gIGN1cnNvcjp3YWl0O1xcbn1cXG5cXG4jd2FpdCBzcGFue1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIHRvcDogNDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6I0ZGRjtcXG59XFxuXFxuI3dhaXRfY3B0e1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG59XFxuXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBNZXNzYWdlIGJveCBsZWZ0IGJvdHRvbSAqL1xcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxuI21lc3NhZ2V7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvdHRvbTogMjBweDtcXG4gIGxlZnQ6IDIwcHg7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qIG1pbmltYXAgcmlnaCBib3R0b20gKi9cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbiNtaW5pbWFwV3JhcHBlcntcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTliNGM2O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjMmQ3ZjU7XFxufVxcblxcbi8qKioqKioqKioqKioqKiovXFxuLyogT3B0aW9ucyBCb3ggKi9cXG4vKioqKioqKioqKioqKioqL1xcbiNvcHRpb25zV2FsbHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI29wdGlvbnMge1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMTAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gIHRvcDogMCU7XFxufVxcblxcbiNvcHRpb25zIC5vcHRpb24ge1xcblxcbn1cXG5cXG4jb3B0aW9ucyBmaWVsZHNldCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jb3B0aW9ucyBsZWdlbmQge1xcblxcbn1cXG5cXG4jb3B0aW9ucyAub3B0aW9uIGRpdiB7XFxuXFxufVxcblxcbiNvcHRpb25zIGxhYmVsIHtcXG5cXG59XFxuXFxuI3RwbHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcblxcbiN0cGxMYWJlbHtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxufVxcblxcbi50cGxfbGVmdCwgLnRwbF9yaWdodHtcXG4gIHdpZHRoOiA1MCU7XFxuICBmbG9hdDpsZWZ0O1xcbn1cXG4udHBsX2xpc3R7XFxuICBjb2x1bW5zOiAyO1xcbiAgLXdlYmtpdC1jb2x1bW5zOiAyO1xcbiAgLW1vei1jb2x1bW5zOiAyO1xcbiAgZm9udC1zaXplOiAwLjllbTtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcbi5ub0J1bGxldHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbiNvcHRpb25zIGlucHV0W3R5cGU9J2J1dHRvbiddIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5M2Q4OWM7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBib3JkZXI6IDBweCBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46YXV0bztcXG4gIHBhZGRpbmc6NXB4O1xcbn1cXG4jb3B0aW9ucyBpbnB1dFt0eXBlPSdidXR0b24nXTpob3ZlcntcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZGM5OTU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNvcHRpb25zIGlucHV0W3R5cGU9J2J1dHRvbiddOmFjdGl2ZXtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkYzk5NTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCB7IGhpZGUsIF9IRV9QUk9HUkVTU0JBUiwgX0hFX1BST0dSRVNTQkFSX1NVQiwgX0hFX1BST0dSRVNTQkFSX1RYVCB9IGZyb20gXCIuL0h0bWxFbGVtZW50c1wiO1xuZXhwb3J0IGNsYXNzIFByb2dyZXNzQmFyIHtcbiAgICBjb25zdHJ1Y3RvcihuYlN0ZXBzKSB7XG4gICAgICAgIHRoaXMubmJTdGVwcyA9IG51bGw7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSBudWxsO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBudWxsO1xuICAgICAgICB0aGlzLm5iU3RlcHMgPSBuYlN0ZXBzO1xuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgaW5pdGlhdGVQcm9ncmVzc0JhcihtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICBtb3ZpbmdQcm9ncmVzc0JhcihtZXNzYWdlKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuY3VycmVudFN0ZXArKztcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gICAgaGlkaW5nUHJvZ3Jlc3NCYXIoKSB7XG4gICAgICAgIGhpZGUoW19IRV9QUk9HUkVTU0JBUl0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIF9IRV9QUk9HUkVTU0JBUl9TVUIuc3R5bGUud2lkdGggPSB0aGlzLmN1cnJlbnRTdGVwICogKDEwMCAvIHRoaXMubmJTdGVwcykgKyAnJSc7XG4gICAgICAgIF9IRV9QUk9HUkVTU0JBUl9UWFQuaW5uZXJIVE1MID0gdGhpcy5tZXNzYWdlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCB7IEZhbWlseSwgSW5kaXZpZHVhbCB9IGZyb20gXCIuL3N0cnVjdC5jbGFzc1wiO1xuY29uc3QgUkVHRVhfSU5ESSA9IC9eMCBAST8oWzAtOV0qKUAgSU5ESSQvO1xuY29uc3QgUkVHRVhfTkFNRSA9IC9eMSBOQU1FICguKilcXC8oLiopXFwvJC87XG5jb25zdCBSRUdFWF9GQU1DID0gL14xIEZBTUMgQEY/KFswLTldKylAJC87XG5jb25zdCBSRUdFWF9TRVggPSAvXjEgU0VYIChbRk1dKSQvO1xuY29uc3QgUkVHRVhfRkFNSUxZID0gL14wIEBGPyhbMC05XSopQCBGQU0kLztcbmNvbnN0IFJFR0VYX0hVU0IgPSAvXjEgSFVTQiBAST8oWzAtOV0qKUAkLztcbmNvbnN0IFJFR0VYX1dJRkUgPSAvXjEgV0lGRSBAST8oWzAtOV0qKUAkLztcbmNvbnN0IFJFR0VYX0JJUlRIID0gL14xIEJJUlRbIF0/JC87XG5jb25zdCBSRUdFWF9ERUFUSCA9IC9eMSBERUFUWyBdPyQvO1xuY29uc3QgUkVHRVhfTUFSUklBR0UgPSAvXjEgTUFSUlsgXT8kLztcbmNvbnN0IFJFR0VYX0RBVEUgPSAvXjIgREFURSAoLiopJC87XG5jb25zdCBSRUdFWF9QTEFDRSA9IC9eMiBQTEFDICguKikkLztcbmNvbnN0IFJFR0VYX09DQ1VQQVRJT04gPSAvXjEgT0NDVSAoLiopJC87XG5jb25zdCBSRUdFWF9SRVBMQUNFX05BTUUgPSAvXCIvZztcbmV4cG9ydCBjbGFzcyBHZWRjb21QYXJzZXIge1xuICAgIHN0YXRpYyBwYXJzZShnZWRjb21Db250ZW50KSB7XG4gICAgICAgIGxldCBsaW5lID0gbnVsbDtcbiAgICAgICAgbGV0IGluZGl2aWR1YWwgPSBudWxsOyAvLyBPbmUgSW5kaXZpZHVcbiAgICAgICAgbGV0IGZhbWlseSA9IG51bGw7IC8vT25lIEZhbWlsbHlcbiAgICAgICAgbGV0IG1hdGNoZXMgPSBudWxsO1xuICAgICAgICBsZXQgbGluZXMgPSBnZWRjb21Db250ZW50LnNwbGl0KC9bXFxyXFxuXSsvKTtcbiAgICAgICAgbGV0IGlzSW5kaXZpZHVhbFBhcnQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGlzRmFtaWx5UGFydCA9IGZhbHNlO1xuICAgICAgICBsZXQgaXNCaXJ0aFBhcnQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGlzRGVhdGhQYXJ0ID0gZmFsc2U7XG4gICAgICAgIGxldCBpc01hcmlhZ2VQYXJ0ID0gZmFsc2U7XG4gICAgICAgIGxldCBsZW4gPSBsaW5lcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX0lOREkpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBpc0luZGl2aWR1YWxQYXJ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpc0ZhbWlseVBhcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL1NhdmUgcHJldmlvdXMgaW5kaXZcbiAgICAgICAgICAgICAgICBpZiAoaW5kaXZpZHVhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWwuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsLnNldChpbmRpdmlkdWFsLmlkLCBpbmRpdmlkdWFsKTtcbiAgICAgICAgICAgICAgICAgICAgaXNCaXJ0aFBhcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaXNEZWF0aFBhcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFN0b3JlLmZpcnN0R2VkVGVjaElkUGFyc2VkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN0b3JlLmZpcnN0R2VkVGVjaElkUGFyc2VkID0gaW5kaXZpZHVhbC5pZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJbml0aWF0ZSBjbGFzc1xuICAgICAgICAgICAgICAgIGluZGl2aWR1YWwgPSBuZXcgSW5kaXZpZHVhbCgpO1xuICAgICAgICAgICAgICAgIGluZGl2aWR1YWwuaWQgPSBwYXJzZUludChtYXRjaGVzWzFdLnRyaW0oKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9GQU1JTFkpO1xuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBpc0ZhbWlseVBhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlzSW5kaXZpZHVhbFBhcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL1NhdmUgcHJldmlvdXMgZmFtaWx5XG4gICAgICAgICAgICAgICAgaWYgKGZhbWlseSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIFN0b3JlLm1hcENvZGVGYW1pbHkuc2V0KGZhbWlseS5pZCwgZmFtaWx5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSW5pdGlhdGUgYXJyYXlcbiAgICAgICAgICAgICAgICBmYW1pbHkgPSBuZXcgRmFtaWx5KCk7XG4gICAgICAgICAgICAgICAgZmFtaWx5LmlkID0gcGFyc2VJbnQobWF0Y2hlc1sxXS50cmltKCkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzSW5kaXZpZHVhbFBhcnQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9OQU1FKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5maXJzdG5hbWUgPSBtYXRjaGVzWzFdLnJlcGxhY2UoUkVHRVhfUkVQTEFDRV9OQU1FLCAnJykudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmxhc3RuYW1lID0gbWF0Y2hlc1syXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9GQU1DKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5mYW1jID0gcGFyc2VJbnQobWF0Y2hlc1sxXS50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfU0VYKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5zZXggPSBtYXRjaGVzWzFdLnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX0JJUlRIKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNCaXJ0aFBhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpc0RlYXRoUGFydCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfREVBVEgpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpc0RlYXRoUGFydCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlzQmlydGhQYXJ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9EQVRFKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQmlydGhQYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmJpcnRoRGF0ZSA9IG1hdGNoZXNbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzRGVhdGhQYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRpdmlkdWFsLmRlYXRoRGF0ZSA9IG1hdGNoZXNbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9QTEFDRSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgaW5kaXZpZHVhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0JpcnRoUGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5iaXJ0aFBsYWNlID0gbWF0Y2hlc1sxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNEZWF0aFBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGl2aWR1YWwuZGVhdGhQbGFjZSA9IG1hdGNoZXNbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9PQ0NVUEFUSU9OKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5vY2N1cGF0aW9uID0gbWF0Y2hlc1sxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc0ZhbWlseVBhcnQpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9IVVNCKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZmFtaWx5LmZhdGhlciA9IHBhcnNlSW50KG1hdGNoZXNbMV0udHJpbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBsaW5lLm1hdGNoKFJFR0VYX1dJRkUpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzICYmIGluZGl2aWR1YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBmYW1pbHkubW90aGVyID0gcGFyc2VJbnQobWF0Y2hlc1sxXS50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWF0Y2hlcyA9IGxpbmUubWF0Y2goUkVHRVhfTUFSUklBR0UpO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzKVxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTWFyaWFnZVBhcnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9EQVRFKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcyAmJiBpbmRpdmlkdWFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTWFyaWFnZVBhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbWlseS50bXBNYXJpYWdlRGF0ZSA9IG1hdGNoZXNbMV0udHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXRjaGVzID0gbGluZS5tYXRjaChSRUdFWF9QTEFDRSk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMgJiYgaW5kaXZpZHVhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc01hcmlhZ2VQYXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmYW1pbHkudG1wTWFyaWFnZVBsYWNlID0gbWF0Y2hlc1sxXS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vUmUgd29yayBmYW1pbHkgdG8gcHJvcGFnYXRlIFdlZGRpbmdzIGluZm9ybWF0aW9ucyB0byBwYXJlbnRzXG4gICAgICAgIFN0b3JlLm1hcENvZGVGYW1pbHkuZm9yRWFjaCgoZmFtaWx5LCBjb2RlRmFtaWx5KSA9PiB7XG4gICAgICAgICAgICAvL1Byb2Nlc3MgdGhlIGZhdGhlclxuICAgICAgICAgICAgaWYgKGZhbWlseS5mYXRoZXIgIT09IHVuZGVmaW5lZCAmJiBmYW1pbHkuZmF0aGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbCA9IFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5nZXQoZmFtaWx5LmZhdGhlcik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGl2aWR1YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJpbmRpdmlkdWFsIG51bGwgZm9yIGlkVGVjaCAlbyBcIiwgZmFtaWx5LmZhdGhlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZGl2aWR1YWwubWFyaWFnZURhdGUgPSBmYW1pbHkudG1wTWFyaWFnZURhdGU7XG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5tYXJpYWdlUGxhY2UgPSBmYW1pbHkudG1wTWFyaWFnZVBsYWNlO1xuICAgICAgICAgICAgICAgIFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5zZXQoZmFtaWx5LmZhdGhlciwgaW5kaXZpZHVhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL1Byb2Nlc3MgdGhlIG1vdGhlclxuICAgICAgICAgICAgaWYgKGZhbWlseS5tb3RoZXIgIT09IHVuZGVmaW5lZCAmJiBmYW1pbHkubW90aGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbCA9IFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5nZXQoZmFtaWx5Lm1vdGhlcik7XG4gICAgICAgICAgICAgICAgaWYgKGluZGl2aWR1YWwgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oXCJpbmRpdmlkdWFsIG51bGwgZm9yIGlkVGVjaCAlbyBcIiwgZmFtaWx5Lm1vdGhlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluZGl2aWR1YWwubWFyaWFnZURhdGUgPSBmYW1pbHkudG1wTWFyaWFnZURhdGU7XG4gICAgICAgICAgICAgICAgaW5kaXZpZHVhbC5tYXJpYWdlUGxhY2UgPSBmYW1pbHkudG1wTWFyaWFnZVBsYWNlO1xuICAgICAgICAgICAgICAgIFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbC5zZXQoZmFtaWx5Lm1vdGhlciwgaW5kaXZpZHVhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmYW1pbHkudG1wTWFyaWFnZURhdGUgPSBudWxsO1xuICAgICAgICAgICAgZmFtaWx5LnRtcE1hcmlhZ2VQbGFjZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi9hc3NldHMvY3NzL2RlbW8uY3NzJztcbmltcG9ydCAnLi9hc3NldHMvaW1ncy9kb3dubG9hZC5wbmcnO1xuaW1wb3J0ICcuL2Fzc2V0cy9nZWRjb20vSEFQSU9UX0VtaWxlX3NhbXBsZS5nZWQnO1xuaW1wb3J0IHsgU1ZHUmVuZGVyZXIgfSBmcm9tICcuL1NWR1JlbmRlcmVyJztcbmltcG9ydCB7IEdlZGNvbVBhcnNlciB9IGZyb20gJy4vR2VkY29tUGFyc2VyJztcbmltcG9ydCB7IFByb2dyZXNzQmFyIH0gZnJvbSAnLi9Qcm9ncmVzc0Jhci5jbGFzcyc7XG5pbXBvcnQgeyBTb3NhV3JhcHBlciB9IGZyb20gJy4vc3RydWN0LmNsYXNzJztcbmltcG9ydCB7IFRhc2tPcmNoZXN0cmF0b3IgfSBmcm9tICcuL1Rhc2tPcmNoZXN0cmF0b3IuY2xhc3MnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL1N0b3JlJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJy4vTG9nZ2VyJztcbmltcG9ydCB7IEJveCwgQm94ViB9IGZyb20gJy4vQm94LmNsYXNzJztcbmltcG9ydCB7IHBvcHVsYXRlR3JpZCwgc2V0dXBCb3hGb3JHcmlkRW50cnksIGNvbXByZXNzQ29udGFpbmVyIH0gZnJvbSAnLi9Db250YWluZXJGYWN0b3J5JztcbmltcG9ydCB7IHRha2VzaG90IH0gZnJvbSAnLi9JbWdSZW5kZXJlcic7XG5pbXBvcnQgeyBoaWRlLCBwdXJnZSwgc2hvdywgX0hFX0ZJTEUsIF9IRV9GT1JNLCBfSEVfSEVBREVSLCBfSEVfTUVTU0FHRSwgX0hFX01JTklTVkdXUkFQUEVSLCBfSEVfT1BUSU9OU19BQ1RJT05fQlVUVE9OLCBfSEVfT1BUSU9OU19TVUJNSVQsIF9IRV9PUFRJT05TX1RFTVBMQVRFX1JFU0VULCBfSEVfT1BUSU9OU19XQUxMLCBfSEVfUERGV1JBUFBFUiwgX0hFX1BERl9BQ1RJT05fQlVUVE9OLCBfSEVfUERGX01VTFRJUEFHRV9BQ1RJT05fQlVUVE9OLCBfSEVfUE5HX0FDVElPTl9CVVRUT04sIF9IRV9QUk9HUkVTU0JBUiwgX0hFX1JPT1RfQ0FOQ0VMLCBfSEVfUk9PVF9FWEVDLCBfSEVfUk9PVF9JTlBVVCwgX0hFX1JPT1RfUkVTVUxUUywgX0hFX1JPT1RfU1dJVENILCBfSEVfU1ZHV1JBUFBFUiB9IGZyb20gJy4vSHRtbEVsZW1lbnRzJztcbmltcG9ydCB7IGNhbmNlbFJvb3QsIHNob3dSb290LCB0eXBpbmdSb290IH0gZnJvbSAnLi9Sb290U3dpdGNoZXInO1xuaW1wb3J0IHsgTXVsdGlQREZSZW5kZXJlciB9IGZyb20gJy4vTXVsdGlQREZSZW5kZXJlcic7XG5pbXBvcnQgeyBQREZSZW5kZXJlciB9IGZyb20gJy4vUERGUmVuZGVyZXInO1xuaW1wb3J0IHsgT3B0aW9uQnVzaW5lc3MgfSBmcm9tICcuL09wdGlvbnMnO1xuY29uc3QgU09TQV9PTkUgPSBuZXcgU29zYVdyYXBwZXIoMSk7XG5sZXQgcHJvZ3Jlc3NCYXIgPSBudWxsO1xubGV0IHRhc2tPcmNoZXN0cmF0b3IgPSBudWxsO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBfSEVfRklMRS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBydW4oX0hFX0ZJTEUuZmlsZXNbMF0pO1xuICAgIH0pO1xuICAgIGxldCBpc0FkdmFuY2VkVXBsb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHJldHVybiAoKCdkcmFnZ2FibGUnIGluIGRpdikgfHwgKCdvbmRyYWdzdGFydCcgaW4gZGl2ICYmICdvbmRyb3AnIGluIGRpdikpICYmICdGb3JtRGF0YScgaW4gd2luZG93ICYmICdGaWxlUmVhZGVyJyBpbiB3aW5kb3c7XG4gICAgfSgpO1xuICAgIGlmIChpc0FkdmFuY2VkVXBsb2FkKSB7XG4gICAgICAgIF9IRV9GT1JNLmNsYXNzTGlzdC5hZGQoJ2hhcy1hZHZhbmNlZC11cGxvYWQnKTtcbiAgICAgICAgbGV0IGZ1bmNEcmFnID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBmdW5jRHJhZ092ZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfSEVfRk9STS5jbGFzc0xpc3QuYWRkKCdpcy1kcmFnb3ZlcicpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgZnVuY0RyYWdMZWF2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9IRV9GT1JNLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWRyYWdvdmVyJyk7XG4gICAgICAgIH07XG4gICAgICAgIF9IRV9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWcnLCBmdW5jRHJhZyk7XG4gICAgICAgIF9IRV9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGZ1bmNEcmFnKTtcbiAgICAgICAgX0hFX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGZ1bmNEcmFnKTtcbiAgICAgICAgX0hFX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBmdW5jRHJhZyk7XG4gICAgICAgIF9IRV9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGZ1bmNEcmFnKTtcbiAgICAgICAgX0hFX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZnVuY0RyYWcpO1xuICAgICAgICBfSEVfRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZnVuY0RyYWcpO1xuICAgICAgICBfSEVfRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGZ1bmNEcmFnT3Zlcik7XG4gICAgICAgIF9IRV9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGZ1bmNEcmFnT3Zlcik7XG4gICAgICAgIF9IRV9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGZ1bmNEcmFnTGVhdmUpO1xuICAgICAgICBfSEVfRk9STS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZnVuY0RyYWdMZWF2ZSk7XG4gICAgICAgIF9IRV9GT1JNLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBmdW5jRHJhZ0xlYXZlKTtcbiAgICAgICAgX0hFX0ZPUk0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBsZXQgZHJvcHBlZEZpbGVzID0gZS5kYXRhVHJhbnNmZXIuZmlsZXM7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRyb3BwZWRGaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChkcm9wcGVkRmlsZXNbaV1bJ25hbWUnXS5lbmRzV2l0aCgnLmdlZGNvbScpIHx8IGRyb3BwZWRGaWxlc1tpXVsnbmFtZSddLmVuZHNXaXRoKCcuZ2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVuKGRyb3BwZWRGaWxlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9IRV9QTkdfQUNUSU9OX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRha2VzaG90KTtcbiAgICBfSEVfUERGX0FDVElPTl9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZVBkZik7XG4gICAgX0hFX1BERl9NVUxUSVBBR0VfQUNUSU9OX0JVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdlbmVyYXRlTXVsdGlwYWdlUGRmKTtcbiAgICBfSEVfU1ZHV1JBUFBFUi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGRlUGRmb2JqZWN0V3JhcHBlcik7XG4gICAgX0hFX1JPT1RfSU5QVVQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0eXBpbmdSb290KTtcbiAgICBfSEVfUk9PVF9FWEVDLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hhbmdlUm9vdEFuZFJlZHJhdyk7XG4gICAgX0hFX1JPT1RfQ0FOQ0VMLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FuY2VsUm9vdCk7XG4gICAgX0hFX1JPT1RfU1dJVENILmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1Jvb3QpO1xuICAgIF9IRV9PUFRJT05TX0FDVElPTl9CVVRUT04uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBPcHRpb25CdXNpbmVzcy5yZWZyZXNoT3B0aW9uc0ludG9VSSk7XG4gICAgX0hFX09QVElPTlNfU1VCTUlULmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgT3B0aW9uQnVzaW5lc3Muc2F2ZU9wdGlvbnNmcm9tVUkpO1xuICAgIF9IRV9PUFRJT05TX1dBTEwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBPcHRpb25CdXNpbmVzcy5oaWRlT3B0aW9ucyk7XG4gICAgX0hFX09QVElPTlNfVEVNUExBVEVfUkVTRVQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBPcHRpb25CdXNpbmVzcy5yZWZyZXNoVGVtcGxhdGVJbnRvVUkpO1xufVxuZnVuY3Rpb24gcnVuKGZpbGUpIHtcbiAgICAvL0luaXQgdGhlIGludGVybmFsIFN0b3JlXG4gICAgU3RvcmUuaW5pdCgpO1xuICAgIC8vSW5pdCB0aGUgTG9nZ2VyIHN5c3RlbVxuICAgIExvZ2dlci5pbml0KCk7XG4gICAgc2hvdyhbX0hFX1BST0dSRVNTQkFSXSk7XG4gICAgcHJvZ3Jlc3NCYXIgPSBuZXcgUHJvZ3Jlc3NCYXIoOCk7XG4gICAgcHJvZ3Jlc3NCYXIubW92aW5nUHJvZ3Jlc3NCYXIoXCJSZWFkaW5nIEZpbGVcIik7XG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgLy8gRGVzY3JpYmUgZnVuY3Rpb24gb2YgcmVhZGluZ1xuICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGFza09yY2hlc3RyYXRvciA9IG5ldyBUYXNrT3JjaGVzdHJhdG9yKHByb2dyZXNzQmFyKTtcbiAgICAgICAgdGFza09yY2hlc3RyYXRvci5hZGQoR2VkY29tUGFyc2VyLnBhcnNlLCBbZXZlbnQudGFyZ2V0LnJlc3VsdF0sIFwiUGFyc2luZyBHZWRjb20gRGF0YVwiKVxuICAgICAgICAgICAgLmFkZChleHBsb2l0LCBbU09TQV9PTkVdLCBcIkV4cGxvaXRpbmcgR2VkY29tIERhdGFcIilcbiAgICAgICAgICAgIC5hZGQoY29tcHJlc3NDb250YWluZXIsIFtTT1NBX09ORV0sIFwiQ29tcHJlc3NpbmcgeW91ciBBbmNlc3RvcnNcIilcbiAgICAgICAgICAgIC5hZGQoZ2V0TWF4U2l6ZU9mRHJhd2luZywgW10sIFwiQ2FsY3VsYXRlIHNpemUgb2YgZ3JhcGhcIilcbiAgICAgICAgICAgIC5hZGQoZHJhdywgW10sIFwiRHJhd2luZyB5b3VyIGdyYXBoXCIpXG4gICAgICAgICAgICAucnVuKCk7XG4gICAgfTtcbiAgICAvL0V4ZWN1dGUgcmVhZGluZ1xuICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUsICd1dGYtOCcpO1xufVxuZnVuY3Rpb24gZXhwbG9pdChzb3NhV3JhcHBlciwgcG9zaXRpb24pIHtcbiAgICBoaWRlKFtfSEVfRk9STV0pO1xuICAgIGlmIChwb3NpdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIHBvc2l0aW9uID0gU3RvcmUuZmlyc3RHZWRUZWNoSWRQYXJzZWQ7XG4gICAgfVxuICAgIHBvcHVsYXRlR3JpZChzb3NhV3JhcHBlciwgcG9zaXRpb24pO1xuICAgIHNldHVwQm94Rm9yR3JpZEVudHJ5KCk7XG59XG5mdW5jdGlvbiBnZXRNYXhTaXplT2ZEcmF3aW5nKCkge1xuICAgIGxldCB0bXBfYm94ID0gbnVsbDtcbiAgICBsZXQgd2lkdGhCb3ggPSBudWxsO1xuICAgIGxldCBoZWlnaHRCb3ggPSBudWxsO1xuICAgIGxldCBtYXhYT2ZHZW4gPSBudWxsO1xuICAgIGxldCBtYXhZT2ZHZW4gPSBudWxsO1xuICAgIGxldCB0bXBfc29zYSA9IG51bGw7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkOyBpKyspIHtcbiAgICAgICAgdG1wX3Nvc2EgPSBTdG9yZS5ncmlkLm1hcFJpZ2h0U29zYUJ5R2VuZXJhdGlvbi5nZXQoaSkuc29zYTtcbiAgICAgICAgaWYgKFN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5Lmhhcyh0bXBfc29zYSkpIHtcbiAgICAgICAgICAgIHRtcF9ib3ggPSBTdG9yZS5ncmlkLm1hcFNvc2FUb0dyaWRFbnRyeS5nZXQodG1wX3Nvc2EpLmJveDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhcIlN0b3JlLmdyaWQubWFwU29zYVRvR3JpZEVudHJ5IGRvZXNuJ3QgaGF2ZSBzb3NhICVvIGluIGZ1bmN0aW9uIGdldE1heFNpemVPZkRyYXdpbmcoKVwiLCB0bXBfc29zYSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtYXhYT2ZHZW4gPSB0bXBfYm94LmdldFgoKTtcbiAgICAgICAgaWYgKG1heFhPZkdlbiA+IFN0b3JlLnBvc2l0aW9uWE1heCkge1xuICAgICAgICAgICAgU3RvcmUucG9zaXRpb25YTWF4ID0gbWF4WE9mR2VuO1xuICAgICAgICAgICAgaWYgKGkgPiA1KSB7XG4gICAgICAgICAgICAgICAgd2lkdGhCb3ggPSBCb3hWLndpZHRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aWR0aEJveCA9IEJveC53aWR0aCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1heFlPZkdlbiA9IHRtcF9ib3guZ2V0WSgpO1xuICAgICAgICBpZiAobWF4WU9mR2VuID4gU3RvcmUucG9zaXRpb25ZTWF4KSB7XG4gICAgICAgICAgICBTdG9yZS5wb3NpdGlvbllNYXggPSBtYXhZT2ZHZW47XG4gICAgICAgICAgICBpZiAoaSA+IDUpIHtcbiAgICAgICAgICAgICAgICBoZWlnaHRCb3ggPSBCb3hWLmhlaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0Qm94ID0gQm94LmhlaWdodCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFN0b3JlLnBvc2l0aW9uWE1heCArPSB3aWR0aEJveCArIDIwO1xuICAgIFN0b3JlLnBvc2l0aW9uWU1heCArPSBoZWlnaHRCb3ggKyAyMDtcbiAgICAvL0NvbnRyb2wgb2Ygc2l6ZVxuICAgIHNob3coW19IRV9NRVNTQUdFXSk7XG4gICAgbGV0IGxpbWl0QnlPcHRpb24gPSAnJztcbiAgICBpZiAoU3RvcmUuZ2V0T3B0aW9ucygpLm1heEdlbmVyYXRpb24gPT0gU3RvcmUuZ3JpZC5tYXhHZW5lcmF0aW9uUHJvY2Vzc2VkKSB7XG4gICAgICAgIGxpbWl0QnlPcHRpb24gPSAnIENoZWNrIHRoZSBvcHRpb25zIHRvIGNoYW5nZSB0aGlzIGxpbWl0Lic7XG4gICAgfVxuICAgIF9IRV9NRVNTQUdFLmlubmVySFRNTCA9IGBNYXggR2VuZXJhdGlvbiBwcmVzZW50ZWQgOiAke1N0b3JlLmdyaWQubWF4R2VuZXJhdGlvblByb2Nlc3NlZH0uJHtsaW1pdEJ5T3B0aW9ufTxici8+XG4gICR7U3RvcmUuZ3JpZC5tYXBTb3NhVG9HcmlkRW50cnkuc2l6ZX0gaW5kaXZpZHVhbHMgcHJlc2VudGVkLCAke1N0b3JlLmdyaWQuaW1wbGV4ZXMubGVuZ3RofSBvZiB3aGljaCBhcmUgPHU+PHNwYW4gdGl0bGU9J0ZSIDogSW1wbGV4ZXMnPlBlZGlncmVlIGNvbGxhcHNlPC9zcGFuPjwvdT4uPGJyLz5cbiAgRXhwZWN0ZWQgc2l6ZSBvZiBQREYgOiAke1BERlJlbmRlcmVyLmV4cGVjdGVkU2l6ZSgpLnh9Y20gKiAke1BERlJlbmRlcmVyLmV4cGVjdGVkU2l6ZSgpLnl9Y20uPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhwZXJ0ZWQgcGFnZXMgb2YgQTQgUERGIDogJHtNdWx0aVBERlJlbmRlcmVyLmV4cGVjdGVkUGFnZUNvdW50KCl9IHBhZ2VzLjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4cGVjdGVkIHNpemUgb2YgUE5HIDogJHtTdG9yZS5wb3NpdGlvblhNYXggKyAyMH1weCAqICR7U3RvcmUucG9zaXRpb25ZTWF4ICsgMjB9cHhgO1xufVxuZnVuY3Rpb24gZHJhdygpIHtcbiAgICBzaG93KFtfSEVfSEVBREVSLCBfSEVfU1ZHV1JBUFBFUiwgX0hFX01JTklTVkdXUkFQUEVSXSk7XG4gICAgU1ZHUmVuZGVyZXIuZHJhd1NWRygpO1xufVxuZnVuY3Rpb24gaGlkZGVQZGZvYmplY3RXcmFwcGVyKCkge1xuICAgIGhpZGUoW19IRV9QREZXUkFQUEVSXSk7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZVBkZigpIHtcbiAgICBsZXQgcmVuZGVyZXIgPSBuZXcgUERGUmVuZGVyZXIoKTtcbiAgICByZW5kZXJlci5nZW5lcmF0ZVBkZigpO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVNdWx0aXBhZ2VQZGYoKSB7XG4gICAgbGV0IHJlbmRlcmVyID0gbmV3IE11bHRpUERGUmVuZGVyZXIoKTtcbiAgICByZW5kZXJlci5nZW5lcmF0ZVBkZigpO1xufVxuZnVuY3Rpb24gY2hhbmdlUm9vdEFuZFJlZHJhdygpIHtcbiAgICByZURyYXcoZmFsc2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlRHJhdyhzYW1lSWRUZWNoKSB7XG4gICAgLy9Jbml0IHRoZSBMb2dnZXIgc3lzdGVtXG4gICAgTG9nZ2VyLmluaXQoKTtcbiAgICBMb2dnZXIubG9nKFwic3RhcnRpbmcgcHVyZ2luZyBkYXRhXCIpO1xuICAgIC8vIFB1cmdlIFN0b3JlIHZhbHVlcyBmb3IgYSBuZXcgZHJhd1xuICAgIFN0b3JlLnJlc2V0Rm9yUmVkcmF3KCk7XG4gICAgbGV0IGtleTtcbiAgICBpZiAoc2FtZUlkVGVjaCkge1xuICAgICAgICAvL3JldGlldmUgY3VycmVudCBpZFRlY2hcbiAgICAgICAga2V5ID0gU3RvcmUuZmlyc3RHZWRUZWNoSWRJbkdyaWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBrZXkgPSBwYXJzZUludChfSEVfUk9PVF9SRVNVTFRTLnZhbHVlKTtcbiAgICAgICAgU3RvcmUuZmlyc3RHZWRUZWNoSWRJbkdyaWQgPSBudWxsO1xuICAgIH1cbiAgICBsZXQgc29zYU9uZSA9IG5ldyBTb3NhV3JhcHBlcigxKTtcbiAgICAvL1B1cmdlIFNWRyAmIG1pbmltYXBcbiAgICBwdXJnZShfSEVfU1ZHV1JBUFBFUik7XG4gICAgcHVyZ2UoX0hFX01JTklTVkdXUkFQUEVSKTtcbiAgICAvL1Jlc2V0IHZhclxuICAgIFN0b3JlLnBvc2l0aW9uWE1heCA9IDA7XG4gICAgU3RvcmUucG9zaXRpb25ZTWF4ID0gMDtcbiAgICBTdG9yZS5tYXBHZWRUZWNoSWRUb0luZGl2aWR1YWwuZm9yRWFjaCgoaW5kaXZpZHVhbCwgc29zYSkgPT4ge1xuICAgICAgICBpbmRpdmlkdWFsLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgfSk7XG4gICAgTG9nZ2VyLmxvZyhcImVuZGluZyBwdXJnaW5nIGRhdGFcIik7XG4gICAgdGFza09yY2hlc3RyYXRvciA9IG5ldyBUYXNrT3JjaGVzdHJhdG9yKHByb2dyZXNzQmFyKTtcbiAgICB0YXNrT3JjaGVzdHJhdG9yLmFkZChleHBsb2l0LCBbc29zYU9uZSwga2V5XSwgXCJFeHBsb2l0aW5nIEdlZGNvbSBEYXRhXCIpXG4gICAgICAgIC5hZGQoY29tcHJlc3NDb250YWluZXIsIFtzb3NhT25lXSwgXCJDb21wcmVzc2luZyB5b3VyIEFuY2VzdG9yc1wiKVxuICAgICAgICAuYWRkKGdldE1heFNpemVPZkRyYXdpbmcsIFtdLCBcIkNhbGN1bGF0ZSBzaXplIG9mIGdyYXBoXCIpXG4gICAgICAgIC5hZGQoZHJhdywgW10sIFwiRHJhd2luZyB5b3VyIGdyYXBoXCIpXG4gICAgICAgIC5ydW4oKTtcbiAgICBjYW5jZWxSb290KCk7XG59XG5pbml0KCk7XG4iLCJpbXBvcnQgeyBqc1BERiB9IGZyb20gXCJqc3BkZlwiO1xuaW1wb3J0IHsgc3ZnMnBkZiB9IGZyb20gXCJzdmcycGRmLmpzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBkZlJlbmRlcmVyIH0gZnJvbSAnLi9BYnN0cmFjdFBkZlJlbmRlcmVyJztcbmltcG9ydCB7IF9IRV9XQUlUX0NQVCB9IGZyb20gJy4vSHRtbEVsZW1lbnRzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vU3RvcmVcIjtcbmltcG9ydCB7IFNWR1JlbmRlcmVyIH0gZnJvbSBcIi4vU1ZHUmVuZGVyZXJcIjtcbmV4cG9ydCBjbGFzcyBNdWx0aVBERlJlbmRlcmVyIGV4dGVuZHMgQWJzdHJhY3RQZGZSZW5kZXJlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuUERGX01VTFRJUEFHRV9NQVJHSU5fQ00gPSAxOyAvL01hcmdpbiBvbiBlYWNoIHBkZiBwYWdlIGluIGNtXG4gICAgfVxuICAgIGdlbmVyYXRlUGRmKCkge1xuICAgICAgICBzdXBlci5nZW5lcmF0ZVBkZigpO1xuICAgICAgICBsZXQgcGRmID0gbmV3IGpzUERGKHRoaXMub3JpZW50YXRpb24sIFwiY21cIiwgXCJhNFwiKTtcbiAgICAgICAgbGV0IHBhZFdpZHRoID0gcGRmLmludGVybmFsLnBhZ2VTaXplLmdldFdpZHRoKCkgLSAyICogdGhpcy5QREZfTVVMVElQQUdFX01BUkdJTl9DTTtcbiAgICAgICAgbGV0IHBhZEhlaWdodCA9IHBkZi5pbnRlcm5hbC5wYWdlU2l6ZS5nZXRIZWlnaHQoKSAtIDIgKiB0aGlzLlBERl9NVUxUSVBBR0VfTUFSR0lOX0NNO1xuICAgICAgICBsZXQgdG90YWxQYWdlcyA9IE11bHRpUERGUmVuZGVyZXIuZXhwZWN0ZWRQYWdlQ291bnQoKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvbWlzZSA9IHRoaXMuYWRkUGFnZSh0aGlzLnN2Z0VsZW1lbnQsIHBkZiwgMCwgcGFkV2lkdGgsIDAsIHBhZEhlaWdodCwgMCwgdG90YWxQYWdlcyk7XG4gICAgICAgICAgICB0aGlzLnJlc29sdmVTdmcyUGRmKHByb21pc2UpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG4gICAgYWRkUGFnZShzdmdFbGVtZW50LCBwZGYsIF94LCBwYWRXaWR0aENtLCBfeSwgcGFkSGVpZ2h0Q20sIHN0ZXAsIHRvdGFsUGFnZXMpIHtcbiAgICAgICAgbGV0IGlzRW5kID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wZGZQYXJ0aWFsVmlld0JveChfeCAqIHBhZFdpZHRoQ20gKiBNdWx0aVBERlJlbmRlcmVyLlJBVElPX1BYXzJfQ00sIF95ICogcGFkSGVpZ2h0Q20gKiBNdWx0aVBERlJlbmRlcmVyLlJBVElPX1BYXzJfQ00sIHBhZFdpZHRoQ20gKiBNdWx0aVBERlJlbmRlcmVyLlJBVElPX1BYXzJfQ00sIHBhZEhlaWdodENtICogTXVsdGlQREZSZW5kZXJlci5SQVRJT19QWF8yX0NNKTtcbiAgICAgICAgICAgIHN2ZzJwZGYoc3ZnRWxlbWVudCwgcGRmLCB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5QREZfTVVMVElQQUdFX01BUkdJTl9DTSxcbiAgICAgICAgICAgICAgICB5OiB0aGlzLlBERl9NVUxUSVBBR0VfTUFSR0lOX0NNLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBwYWRXaWR0aENtLFxuICAgICAgICAgICAgICAgIGhlaWdodDogcGFkSGVpZ2h0Q20sIC8vTGFyZ2V1ciBwcmlzZSBzdXIgbGUgUERGID0+IEE0ID0gcGFkV2lkdGhcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIF95Kys7XG4gICAgICAgICAgICAgICAgLy9JZiB3ZSByZWFjaCB0aGUgYm90dG9tIG9mIHRoZSBTVkdcbiAgICAgICAgICAgICAgICBpZiAoX3kgKiBwYWRIZWlnaHRDbSA+IFN0b3JlLnBvc2l0aW9uWU1heCAvIE11bHRpUERGUmVuZGVyZXIuUkFUSU9fUFhfMl9DTSkge1xuICAgICAgICAgICAgICAgICAgICBfeSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIF94Kys7XG4gICAgICAgICAgICAgICAgICAgIC8vSWYgd2UgcmVhY2ggdGhlIGJvdHRvbS9yaWdodCBvZiB0aGUgU1ZHXG4gICAgICAgICAgICAgICAgICAgIGlmIChfeCAqIHBhZFdpZHRoQ20gPiBTdG9yZS5wb3NpdGlvblhNYXggLyBNdWx0aVBERlJlbmRlcmVyLlJBVElPX1BYXzJfQ00pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNFbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShwZGYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGRmLmFkZFBhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgc3RlcCsrO1xuICAgICAgICAgICAgICAgICAgICBfSEVfV0FJVF9DUFQuaW5uZXJIVE1MID0gYCR7c3RlcH0gLyAke3RvdGFsUGFnZXN9YDtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZFBhZ2Uoc3ZnRWxlbWVudCwgcGRmLCBfeCwgcGFkV2lkdGhDbSwgX3ksIHBhZEhlaWdodENtLCBzdGVwLCB0b3RhbFBhZ2VzKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHBkZik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwZGZQYXJ0aWFsVmlld0JveCh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lclxuICAgICAgICAgICAgLnZpZXdib3goeCwgeSwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgICAgIC5zaXplKCcxMDAlJywgJzEwMCUnKTtcbiAgICB9XG4gICAgc3RhdGljIGV4cGVjdGVkUGFnZUNvdW50KCkge1xuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKFN0b3JlLnBvc2l0aW9uWE1heCAvIE11bHRpUERGUmVuZGVyZXIuUkFUSU9fUFhfMl9DTSAvICgyMSAtIDIpKSAqIE1hdGguY2VpbChTdG9yZS5wb3NpdGlvbllNYXggLyBNdWx0aVBERlJlbmRlcmVyLlJBVElPX1BYXzJfQ00gLyAoMjkuNyAtIDIpKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnO1xuaW1wb3J0IHsgaGlkZSwgc2hvdywgX0hFX1NWR1dSQVBQRVIgYXMgX0hFX1NWR1dSQVBQRVIsIF9IRV9XQUlUIH0gZnJvbSAnLi9IdG1sRWxlbWVudHMnO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL1N0b3JlJztcbmltcG9ydCB7IFNWR1JlbmRlcmVyIH0gZnJvbSAnLi9TVkdSZW5kZXJlcic7XG4vKipcbiAqIEdlbmVyYXRlIGEgc2NyZWVuc2hvdCBmcm9tIHRoZSBjaGFydCBhbmQgc2F2ZSBpdCBvbiBjb21wdXRlciBhcyBhIHBuZyBpbWFnZVxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFrZXNob3QoKSB7XG4gICAgc2hvdyhbX0hFX1dBSVRdKTtcbiAgICBsZXQgY29tcCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKF9IRV9TVkdXUkFQUEVSKTtcbiAgICBsZXQgcHJldmlvdXMgPSB7IHZpZXdib3g6IFNWR1JlbmRlcmVyLmNvbnRhaW5lci52aWV3Ym94KCkudG9TdHJpbmcoKSxcbiAgICAgICAgdzogY29tcC5nZXRQcm9wZXJ0eVZhbHVlKCd3aWR0aCcpLFxuICAgICAgICBoOiBjb21wLmdldFByb3BlcnR5VmFsdWUoJ2hlaWdodCcpLFxuICAgICAgICB6b29tOiBTVkdSZW5kZXJlci5jb250YWluZXIuem9vbSgpIH07XG4gICAgX0hFX1NWR1dSQVBQRVIuc3R5bGUud2lkdGggPSBTdG9yZS5wb3NpdGlvblhNYXggKyAncHgnO1xuICAgIF9IRV9TVkdXUkFQUEVSLnN0eWxlLmhlaWdodCA9IFN0b3JlLnBvc2l0aW9uWU1heCArICdweCc7XG4gICAgU1ZHUmVuZGVyZXIuY29udGFpbmVyXG4gICAgICAgIC52aWV3Ym94KDAsIDAsIFN0b3JlLnBvc2l0aW9uWE1heCwgU3RvcmUucG9zaXRpb25ZTWF4KVxuICAgICAgICAuc2l6ZShTdG9yZS5wb3NpdGlvblhNYXgsIFN0b3JlLnBvc2l0aW9uWU1heClcbiAgICAgICAgLnpvb20oMSk7XG4gICAgaHRtbDJjYW52YXMoX0hFX1NWR1dSQVBQRVIsIHtcbiAgICAgICAgaWdub3JlRWxlbWVudHM6IGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b0V4Y2x1ZGVGcm9tU25hcHNob3QnKTsgfSxcbiAgICAgICAgbG9nZ2luZzogZmFsc2VcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICAgICAgY2FudmFzLnRvQmxvYihmdW5jdGlvbiAoYmxvYikge1xuICAgICAgICAgICAgZG93bmxvYWQoYmxvYiwgXCIucG5nXCIpO1xuICAgICAgICB9KTtcbiAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgaGlkZShbX0hFX1dBSVRdKTtcbiAgICAgICAgLy9SZXNldCBpbmZvcm1hdGlvbiBwb3N0IHBkZiBnZW5lcmF0aW9uICAgICAgICAgICAgICAgICAgXG4gICAgICAgIFNWR1JlbmRlcmVyLmNvbnRhaW5lclxuICAgICAgICAgICAgLnZpZXdib3gocHJldmlvdXMudmlld2JveClcbiAgICAgICAgICAgIC5zaXplKHByZXZpb3VzLncsIHByZXZpb3VzLmgpXG4gICAgICAgICAgICAuem9vbShwcmV2aW91cy56b29tKTtcbiAgICAgICAgX0hFX1NWR1dSQVBQRVIuc3R5bGUud2lkdGggPSBcIlwiO1xuICAgICAgICBfSEVfU1ZHV1JBUFBFUi5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgIH0pO1xufVxuLyoqXG4gKiBJbXBsZW1lbnQgYSBjdXN0b20gZG93bmxvYWQgZmlsZVxuICogQHBhcmFtIGJsb2IgdGhlIGJpbmFyaWVzIHRvIGRvd25sb2FkXG4gKiBAcGFyYW0gZXh0ZW5zaW9uTmFtZSB0aGUgbmFtZSBvZiB0aGUgZmlsZVxuICovXG5mdW5jdGlvbiBkb3dubG9hZChibG9iLCBleHRlbnNpb25OYW1lKSB7XG4gICAgdmFyIHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgdmFyIGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGRvd25sb2FkTGluay5ocmVmID0gdXJsO1xuICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IFwiZ2VkY29tX1wiXG4gICAgICAgICsgdG9ZWVlZTU1ERF9oaG1tKG5ldyBEYXRlKCkpXG4gICAgICAgICsgZXh0ZW5zaW9uTmFtZTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvd25sb2FkTGluayk7XG4gICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb3dubG9hZExpbmspO1xufVxuLyoqXG4gKiBSZXR1cm4gdGhlIGRhdGUgdG8gYSBzdHJpbmcgdmFsaWRhdGluZyB0aGUgZm9ybWF0IFlZWVlNTUREX0hIbW1cbiAqIEBwYXJhbSBkYXRlIHRoZSBkYXRlIHRvIHBhcnNlIGludG8gYSBJU08gZGF0ZSBmb3JtYXQgWVlZWU1NRERfSEhtbVxuICogQHJldHVybnMgc3RyaW5nIHRoZSBmb3JtYXQgWVlZWU1NRERfSEhtbVxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9ZWVlZTU1ERF9oaG1tKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCkucGFkU3RhcnQoNCwgJzAnKVxuICAgICAgICArIChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJylcbiAgICAgICAgKyBkYXRlLmdldERhdGUoKS50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJylcbiAgICAgICAgKyAnXydcbiAgICAgICAgKyBkYXRlLmdldEhvdXJzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpXG4gICAgICAgICsgZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKS5wYWRTdGFydCgyLCAnMCcpO1xufVxuIiwiaW1wb3J0IHsgcmVEcmF3IH0gZnJvbSBcIi4vZGVtb1wiO1xuaW1wb3J0IHsgaGlkZSwgc2hvdywgX0hFX09QVElPTlMsIF9IRV9PUFRJT05TX0lNUExFWEVTX0NPTE9SLCBfSEVfT1BUSU9OU19JTVBMRVhFU19DT0xPUl9ISURFLCBfSEVfT1BUSU9OU19JTVBMRVhFU19ISURFLCBfSEVfT1BUSU9OU19JTVBMRVhFU19OT1RISU5HLCBfSEVfT1BUSU9OU19NQVhHRU4sIF9IRV9PUFRJT05TX1RFTVBMQVRFLCBfSEVfT1BUSU9OU19XQUxMIH0gZnJvbSBcIi4vSHRtbEVsZW1lbnRzXCI7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuL1N0b3JlXCI7XG5leHBvcnQgY2xhc3MgSW1wbGV4ZXNUeXBlIHtcbn1cbkltcGxleGVzVHlwZS5ub3RoaW5nID0gXCJub3RoaW5nXCI7XG5JbXBsZXhlc1R5cGUuaGlkZSA9IFwiaGlkZVwiO1xuSW1wbGV4ZXNUeXBlLmNvbG9yID0gXCJjb2xvclwiO1xuSW1wbGV4ZXNUeXBlLmNvbG9ySGlkZSA9IFwiY29sb3JIaWRlXCI7XG5jb25zdCBERUZBVUxUX1RFTVBMQVRFID0gYF9GSVJTVE5BTUVfIF9MQVNUTkFNRV9cbsKkIF9CSVJUSF9EQVRFXyBfQklSVEhfUExBQ0VfXG5VIF9NQVJSSUFHRV9EQVRFXyBfTUFSUklBR0VfUExBQ0VfXG5YIF9ERUFUSF9EQVRFXyBfREVBVEhfUExBQ0VfXG5fT0NDVVBBVElPTl9gO1xuZXhwb3J0IGNsYXNzIE9wdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKGltcGxleGVzID0gbnVsbCwgbWF4R2VuZXJhdGlvbiA9IG51bGwsIHRlbXBsYXRlID0gbnVsbCkge1xuICAgICAgICB0aGlzLmltcGxleGVzID0gSW1wbGV4ZXNUeXBlLm5vdGhpbmc7XG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvbiA9IDEwMDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IERFRkFVTFRfVEVNUExBVEU7XG4gICAgICAgIHRoaXMuaW1wbGV4ZXMgPSB0aGlzLmdldFZhbGlkSW1wbGV4ZShpbXBsZXhlcyk7XG4gICAgICAgIHRoaXMubWF4R2VuZXJhdGlvbiA9IHRoaXMuZ2V0VmFsaWRlTWF4R2VuZXJhdGlvbihtYXhHZW5lcmF0aW9uKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuZ2V0VmFsaWRlVGVtcGxhdGUodGVtcGxhdGUpO1xuICAgIH1cbiAgICBwYXJzZShqc29uKSB7XG4gICAgICAgIGxldCBvYmplY3QgPSB7fTtcbiAgICAgICAgaWYgKGpzb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgb2JqZWN0ID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmltcGxleGVzID0gdGhpcy5nZXRWYWxpZEltcGxleGUob2JqZWN0WydpbXBsZXhlcyddKTtcbiAgICAgICAgdGhpcy5tYXhHZW5lcmF0aW9uID0gdGhpcy5nZXRWYWxpZGVNYXhHZW5lcmF0aW9uKFwiXCIgKyBvYmplY3RbJ21heEdlbmVyYXRpb24nXSk7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLmdldFZhbGlkZVRlbXBsYXRlKG9iamVjdFsndGVtcGxhdGUnXSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRWYWxpZEltcGxleGUoc3RyKSB7XG4gICAgICAgIGlmIChJbXBsZXhlc1R5cGUubm90aGluZyA9PT0gc3RyKSB7XG4gICAgICAgICAgICByZXR1cm4gSW1wbGV4ZXNUeXBlLm5vdGhpbmc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEltcGxleGVzVHlwZS5oaWRlID09PSBzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBJbXBsZXhlc1R5cGUuaGlkZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoSW1wbGV4ZXNUeXBlLmNvbG9yID09PSBzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBJbXBsZXhlc1R5cGUuY29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEltcGxleGVzVHlwZS5jb2xvckhpZGUgPT09IHN0cikge1xuICAgICAgICAgICAgcmV0dXJuIEltcGxleGVzVHlwZS5jb2xvckhpZGU7XG4gICAgICAgIH1cbiAgICAgICAgLy9EZWZhdWx0IHZhbHVlXG4gICAgICAgIHJldHVybiBJbXBsZXhlc1R5cGUubm90aGluZztcbiAgICB9XG4gICAgZ2V0VmFsaWRlTWF4R2VuZXJhdGlvbihzdHIpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gMTAwO1xuICAgICAgICBpZiAoc3RyICE9IG51bGwgJiYgc3RyLm1hdGNoKC9eXFwtP1swLTldKyQvKSkge1xuICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludChzdHIpO1xuICAgICAgICAgICAgaWYgKHZhbHVlID4gMTAwIHx8IHZhbHVlID09IDAgfHwgdmFsdWUgPCAtMSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0VmFsaWRlVGVtcGxhdGUoc3RyKSB7XG4gICAgICAgIGlmIChzdHIgPT0gbnVsbCB8fCBzdHIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gREVGQVVMVF9URU1QTEFURTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgICAgICAvL1RPRE8gdmVyaWZ5IHZhbGlkYXRpb24gJiByZXR1cm4gZGVmYXVsdCB0ZW1wbGF0ZVxuICAgICAgICAvL3JldHVybiBERUZBVUxUX1RFTVBMQVRFXG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE9wdGlvblJlcG9zaXRvcnkge1xuICAgIC8qKlxuICAgICAqICBTYXZlIE9wdGlvbiBpbnRvIHRoZSBsb2NhbHN0b3JhZ2VcbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIHN0YXRpYyBzYXZlT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdHZWRjb21PcHRpb25zJywgSlNPTi5zdHJpbmdpZnkob3B0aW9ucykpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgT3B0aW9ucygpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnR2VkY29tT3B0aW9ucycpKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgT3B0aW9uQnVzaW5lc3Mge1xuICAgIHN0YXRpYyByZWZyZXNoVGVtcGxhdGVJbnRvVUkoKSB7XG4gICAgICAgIF9IRV9PUFRJT05TX1RFTVBMQVRFLnZhbHVlID0gREVGQVVMVF9URU1QTEFURTtcbiAgICB9XG4gICAgc3RhdGljIHJlZnJlc2hPcHRpb25zSW50b1VJKCkge1xuICAgICAgICBzaG93KFtfSEVfT1BUSU9OUywgX0hFX09QVElPTlNfV0FMTF0pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IE9wdGlvblJlcG9zaXRvcnkuZ2V0T3B0aW9ucygpO1xuICAgICAgICBfSEVfT1BUSU9OU19URU1QTEFURS52YWx1ZSA9IG9wdGlvbnMudGVtcGxhdGU7XG4gICAgICAgIF9IRV9PUFRJT05TX01BWEdFTi52YWx1ZSA9IG9wdGlvbnMubWF4R2VuZXJhdGlvbiArICcnO1xuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMuaW1wbGV4ZXMpIHtcbiAgICAgICAgICAgIGNhc2UgSW1wbGV4ZXNUeXBlLm5vdGhpbmc6XG4gICAgICAgICAgICAgICAgX0hFX09QVElPTlNfSU1QTEVYRVNfTk9USElORy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSW1wbGV4ZXNUeXBlLmhpZGU6XG4gICAgICAgICAgICAgICAgX0hFX09QVElPTlNfSU1QTEVYRVNfSElERS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSW1wbGV4ZXNUeXBlLmNvbG9yOlxuICAgICAgICAgICAgICAgIF9IRV9PUFRJT05TX0lNUExFWEVTX0NPTE9SLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBJbXBsZXhlc1R5cGUuY29sb3JIaWRlOlxuICAgICAgICAgICAgICAgIF9IRV9PUFRJT05TX0lNUExFWEVTX0NPTE9SX0hJREUuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIF9IRV9PUFRJT05TX0lNUExFWEVTX05PVEhJTkcuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHNhdmVPcHRpb25zZnJvbVVJKCkge1xuICAgICAgICBsZXQgaW1wbGV4ZXMgPSBJbXBsZXhlc1R5cGUubm90aGluZztcbiAgICAgICAgaWYgKF9IRV9PUFRJT05TX0lNUExFWEVTX0hJREUuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW1wbGV4ZXMgPSBJbXBsZXhlc1R5cGUuaGlkZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoX0hFX09QVElPTlNfSU1QTEVYRVNfQ09MT1IuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW1wbGV4ZXMgPSBJbXBsZXhlc1R5cGUuY29sb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKF9IRV9PUFRJT05TX0lNUExFWEVTX0NPTE9SX0hJREUuY2hlY2tlZCkge1xuICAgICAgICAgICAgaW1wbGV4ZXMgPSBJbXBsZXhlc1R5cGUuY29sb3JIaWRlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IE9wdGlvbnMoaW1wbGV4ZXMsIF9IRV9PUFRJT05TX01BWEdFTi52YWx1ZSwgX0hFX09QVElPTlNfVEVNUExBVEUudmFsdWUpO1xuICAgICAgICAvL3Jlc2V0IGNhY2hlIG9mIFN0b3JlXG4gICAgICAgIFN0b3JlLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIC8vc2F2aW5nIG9wdGlvbnMgXG4gICAgICAgIE9wdGlvblJlcG9zaXRvcnkuc2F2ZU9wdGlvbnMob3B0aW9ucyk7XG4gICAgICAgIE9wdGlvbkJ1c2luZXNzLmhpZGVPcHRpb25zKCk7XG4gICAgICAgIC8vUmVkcmF3XG4gICAgICAgIHJlRHJhdyh0cnVlKTtcbiAgICB9XG4gICAgc3RhdGljIGhpZGVPcHRpb25zKCkge1xuICAgICAgICAvL2hpZGluZyBvcHRpb25zIEhUTUwgZWxlbWVudHNcbiAgICAgICAgaGlkZShbX0hFX09QVElPTlMsIF9IRV9PUFRJT05TX1dBTExdKTtcbiAgICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGVtby5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlbW8uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IGNsYXNzIExvZ2dlciB7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIExvZ2dlci50aW1lclN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgTG9nZ2VyLnRpbWVyU3RlcCA9IERhdGUubm93KCk7XG4gICAgfVxuICAgIHN0YXRpYyBsb2cobWVzc2FnZSkge1xuICAgICAgICBjb25zb2xlLmRlYnVnKG1lc3NhZ2UgKyBcIiBtcyBlbGFwc2VkID0gXCIgKyAoRGF0ZS5ub3coKSAtIExvZ2dlci50aW1lclN0ZXApICsgXCJtc1wiICsgXCIgLyBcIiArIChEYXRlLm5vdygpIC0gTG9nZ2VyLnRpbWVyU3RhcnQpICsgXCJtc1wiKTtcbiAgICAgICAgTG9nZ2VyLnRpbWVyU3RlcCA9IERhdGUubm93KCk7XG4gICAgfVxufVxuTG9nZ2VyLnRpbWVyU3RhcnQgPSBudWxsO1xuTG9nZ2VyLnRpbWVyU3RlcCA9IG51bGw7XG4iLCJpbXBvcnQgeyBPcHRpb25SZXBvc2l0b3J5IH0gZnJvbSBcIi4vT3B0aW9uc1wiO1xuaW1wb3J0IHsgVmlydHVhbEdyaWQgfSBmcm9tIFwiLi9zdHJ1Y3QuY2xhc3NcIjtcbmV4cG9ydCBjbGFzcyBTdG9yZSB7XG4gICAgc3RhdGljIGluaXQoKSB7XG4gICAgICAgIFN0b3JlLm1hcEdlZFRlY2hJZFRvSW5kaXZpZHVhbCA9IG5ldyBNYXAoKTtcbiAgICAgICAgU3RvcmUubWFwQ29kZUZhbWlseSA9IG5ldyBNYXAoKTtcbiAgICAgICAgU3RvcmUuZmlyc3RHZWRUZWNoSWRQYXJzZWQgPSBudWxsOyAvLyBuZWVkIHRvIGJlIG51bGxcbiAgICAgICAgU3RvcmUuZmlyc3RHZWRUZWNoSWRJbkdyaWQgPSBudWxsOyAvLyBuZWVkIHRvIGJlIG51bGxcbiAgICAgICAgU3RvcmUucmVzZXRGb3JSZWRyYXcoKTtcbiAgICB9XG4gICAgc3RhdGljIHJlc2V0Rm9yUmVkcmF3KCkge1xuICAgICAgICBTdG9yZS5wb3NpdGlvblhNYXggPSAwO1xuICAgICAgICBTdG9yZS5wb3NpdGlvbllNYXggPSAwO1xuICAgICAgICBTdG9yZS5ncmlkID0gbmV3IFZpcnR1YWxHcmlkKCk7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgU3RvcmUub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRPcHRpb25zKCkge1xuICAgICAgICBpZiAoU3RvcmUub3B0aW9ucyA9PSBudWxsKSB7XG4gICAgICAgICAgICBTdG9yZS5vcHRpb25zID0gT3B0aW9uUmVwb3NpdG9yeS5nZXRPcHRpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFN0b3JlLm9wdGlvbnM7XG4gICAgfVxufVxuU3RvcmUubWFwR2VkVGVjaElkVG9JbmRpdmlkdWFsID0gbnVsbDsgLy8gbWFwIFNvc2EgLyBHZWRjb20gSW5kaXZpZHVzXG5TdG9yZS5tYXBDb2RlRmFtaWx5ID0gbnVsbDsgLy8gbWFwIFNvc2EgLyBHZWRjb20gZmFtaWxsaWVzXG5TdG9yZS5maXJzdEdlZFRlY2hJZFBhcnNlZCA9IG51bGw7IC8vIEZpcnN0IEdldFRlY2hJZCBwcm9jZXNzZWQgYnkgdGhlIHBhcnNlclxuU3RvcmUuZmlyc3RHZWRUZWNoSWRJbkdyaWQgPSBudWxsOyAvLyBGaXJzdCBHZXRUZWNoSWQgcHJvY2Vzc2VkIGluIHRoZSBHcmlkIHVuZGVyIHRoZSBTT1NBIGNvZGUgIzFcblN0b3JlLnBvc2l0aW9uWE1heCA9IDA7XG5TdG9yZS5wb3NpdGlvbllNYXggPSAwO1xuU3RvcmUuZ3JpZCA9IG51bGw7XG5TdG9yZS5vcHRpb25zID0gbnVsbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==