"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/project/project.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/project/project.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/add.svg */ "./src/icons/add.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/delete.svg */ "./src/icons/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".projects {\r\n\r\n    padding: 1rem;\r\n}\r\n\r\n.project-title {\r\n    padding: 0;\r\n    margin-top: 1rem;\r\n}\r\n\r\n#add-project {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-color: rgba(255, 255, 255, 0);\r\n    width: 30px;\r\n    height: 30px;\r\n    border: none;\r\n\r\n    margin: 0rem -0.4rem;\r\n}\r\n#add-project:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.project {\r\n    display: grid;\r\n    grid-template:30px / 1fr 30px;\r\n    grid-template-areas:\r\n    \"name delete\";\r\n    align-items: center;\r\n}\r\n.project-name {\r\n    grid-area: name;\r\n}\r\n.remove-project {\r\n    grid-area: delete;\r\n    height: 100%;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-color: white;\r\n    border: none;\r\n}\r\n\r\n\r\n.project > *:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.project-form {\r\n    display: grid;\r\n    grid-template-columns: 1fr 50px;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/project/project.css"],"names":[],"mappings":"AAAA;;IAEI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,yDAAuC;IACvC,wCAAwC;IACxC,WAAW;IACX,YAAY;IACZ,YAAY;;IAEZ,oBAAoB;AACxB;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B;iBACa;IACb,mBAAmB;AACvB;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,YAAY;IACZ,yDAA0C;IAC1C,uBAAuB;IACvB,YAAY;AAChB;;;AAGA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,+BAA+B;AACnC","sourcesContent":[".projects {\r\n\r\n    padding: 1rem;\r\n}\r\n\r\n.project-title {\r\n    padding: 0;\r\n    margin-top: 1rem;\r\n}\r\n\r\n#add-project {\r\n    background-image: url(../icons/add.svg);\r\n    background-color: rgba(255, 255, 255, 0);\r\n    width: 30px;\r\n    height: 30px;\r\n    border: none;\r\n\r\n    margin: 0rem -0.4rem;\r\n}\r\n#add-project:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.project {\r\n    display: grid;\r\n    grid-template:30px / 1fr 30px;\r\n    grid-template-areas:\r\n    \"name delete\";\r\n    align-items: center;\r\n}\r\n.project-name {\r\n    grid-area: name;\r\n}\r\n.remove-project {\r\n    grid-area: delete;\r\n    height: 100%;\r\n    background-image: url(../icons/delete.svg);\r\n    background-color: white;\r\n    border: none;\r\n}\r\n\r\n\r\n.project > *:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.project-form {\r\n    display: grid;\r\n    grid-template-columns: 1fr 50px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    font-family: Roboto, san-serif;\r\n}\r\n\r\n/* \r\ntemplate layout\r\n*/\r\nbody {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template: 100px / 300px 1fr;\r\n    grid-template-areas:\r\n    \"header header\"\r\n    \"project todolist\";\r\n}\r\n\r\n.header {\r\n    grid-area: header;\r\n}\r\n\r\n.projects {\r\n    grid-area: project;\r\n    border: 1px solid;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.todolist {\r\n    grid-area: todolist;\r\n    border: 1px solid;\r\n    padding: 1.5rem;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,8BAA8B;AAClC;;AAEA;;CAEC;AACD;IACI,aAAa;IACb,aAAa;IACb,gCAAgC;IAChC;;sBAEkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,mBAAmB;IACnB,iBAAiB;IACjB,eAAe;AACnB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,900&display=swap');\r\n\r\n* {\r\n    font-family: Roboto, san-serif;\r\n}\r\n\r\n/* \r\ntemplate layout\r\n*/\r\nbody {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template: 100px / 300px 1fr;\r\n    grid-template-areas:\r\n    \"header header\"\r\n    \"project todolist\";\r\n}\r\n\r\n.header {\r\n    grid-area: header;\r\n}\r\n\r\n.projects {\r\n    grid-area: project;\r\n    border: 1px solid;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.todolist {\r\n    grid-area: todolist;\r\n    border: 1px solid;\r\n    padding: 1.5rem;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/todolist/todolist.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/todolist/todolist.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/add.svg */ "./src/icons/add.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/delete.svg */ "./src/icons/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../icons/delete-outline.svg */ "./src/icons/delete-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --icon-color: #a1a1aa;\r\n\r\n}\r\n\r\n.todolist {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n\r\n    padding: 1rem;\r\n    \r\n}\r\n\r\n.todolist-title {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.add-button {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#addtodo {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-color: white;\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    \r\n}\r\n#addtodo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: min(100%, 800px);\r\n}\r\n\r\n.list > * {\r\n    display: grid;\r\n    grid-template: 35px/ 35px 1fr 35px;\r\n    grid-template-areas:\r\n    \"check nameDate delete\";\r\n    align-items: center;\r\n    column-gap: 0.5rem;\r\n    row-gap: 5px;\r\n}\r\n.list > * p {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.list > * button {\r\n    height: 100%;\r\n}\r\n\r\n#todocheck {\r\n    grid-area: check;\r\n    height: 80%;\r\n    width: 80%;\r\n    place-self: center;\r\n    border-radius: 50%;\r\n    border: solid 1px var(--icon-color);\r\n    background-color: white;\r\n}\r\n#todocheck:hover {\r\n    background-color: var(--icon-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-content {\r\n    grid-area: nameDate;\r\n    align-self: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.todo-content:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-name {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.todo-date {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n#todoremove {\r\n    grid-area: delete;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-color: white;\r\n    border: none;\r\n}\r\n#todoremove:hover {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* \r\naddDiv\r\n*/\r\n.add-div {\r\n    border: solid 1px;\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    padding: 1rem;\r\n\r\n    display: grid;\r\n    grid-template: repeat(2, 50px) / 110px 80px 60px 70px;\r\n    grid-template-areas:\r\n    \"name name name name\"\r\n    \"date priorty cancel submit\";\r\n    gap: 0.3rem;\r\n\r\n    background-color: white;\r\n\r\n}\r\n\r\n#name-input {\r\n    grid-area: name;\r\n}\r\n\r\n#date-input {\r\n    grid-area: date;\r\n}\r\n\r\n.priorty-inputs {\r\n    grid-area: priorty;\r\n}\r\n\r\n#cancel-button {\r\n    grid-area: cancel;\r\n    \r\n}\r\n\r\n#submit-button {\r\n    grid-area: submit;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/todolist/todolist.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;;IAET,aAAa;;AAEjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,yDAAuC;IACvC,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;;AAEtB;AACA;IACI,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC;2BACuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,kBAAkB;IAClB,mCAAmC;IACnC,uBAAuB;AAC3B;AACA;IACI,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;AACA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,yDAA0C;IAC1C,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,yDAAkD;IAClD,eAAe;AACnB;;;AAGA;;CAEC;AACD;IACI,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;;IAEhC,aAAa;;IAEb,aAAa;IACb,qDAAqD;IACrD;;gCAE4B;IAC5B,WAAW;;IAEX,uBAAuB;;AAE3B;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[":root {\r\n    --icon-color: #a1a1aa;\r\n\r\n}\r\n\r\n.todolist {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n\r\n    padding: 1rem;\r\n    \r\n}\r\n\r\n.todolist-title {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.add-button {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#addtodo {\r\n    background-image: url(../icons/add.svg);\r\n    background-color: white;\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    \r\n}\r\n#addtodo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: min(100%, 800px);\r\n}\r\n\r\n.list > * {\r\n    display: grid;\r\n    grid-template: 35px/ 35px 1fr 35px;\r\n    grid-template-areas:\r\n    \"check nameDate delete\";\r\n    align-items: center;\r\n    column-gap: 0.5rem;\r\n    row-gap: 5px;\r\n}\r\n.list > * p {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.list > * button {\r\n    height: 100%;\r\n}\r\n\r\n#todocheck {\r\n    grid-area: check;\r\n    height: 80%;\r\n    width: 80%;\r\n    place-self: center;\r\n    border-radius: 50%;\r\n    border: solid 1px var(--icon-color);\r\n    background-color: white;\r\n}\r\n#todocheck:hover {\r\n    background-color: var(--icon-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-content {\r\n    grid-area: nameDate;\r\n    align-self: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.todo-content:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-name {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.todo-date {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n#todoremove {\r\n    grid-area: delete;\r\n    background-image: url(../icons/delete.svg);\r\n    background-color: white;\r\n    border: none;\r\n}\r\n#todoremove:hover {\r\n    background-image: url(../icons/delete-outline.svg);\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* \r\naddDiv\r\n*/\r\n.add-div {\r\n    border: solid 1px;\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    padding: 1rem;\r\n\r\n    display: grid;\r\n    grid-template: repeat(2, 50px) / 110px 80px 60px 70px;\r\n    grid-template-areas:\r\n    \"name name name name\"\r\n    \"date priorty cancel submit\";\r\n    gap: 0.3rem;\r\n\r\n    background-color: white;\r\n\r\n}\r\n\r\n#name-input {\r\n    grid-area: name;\r\n}\r\n\r\n#date-input {\r\n    grid-area: date;\r\n}\r\n\r\n.priorty-inputs {\r\n    grid-area: priorty;\r\n}\r\n\r\n#cancel-button {\r\n    grid-area: cancel;\r\n    \r\n}\r\n\r\n#submit-button {\r\n    grid-area: submit;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/project/project.css":
/*!*********************************!*\
  !*** ./src/project/project.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./project.css */ "./node_modules/css-loader/dist/cjs.js!./src/project/project.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_project_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/todolist/todolist.css":
/*!***********************************!*\
  !*** ./src/todolist/todolist.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todolist_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./todolist.css */ "./node_modules/css-loader/dist/cjs.js!./src/todolist/todolist.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todolist_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _todolist_todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist/todolist */ "./src/todolist/todolist.js");
/* harmony import */ var _project_projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project/projects.js */ "./src/project/projects.js");
/* harmony import */ var _todo_todoAPI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo/todoAPI */ "./src/todo/todoAPI.js");






// todolist.printProject('one');
_project_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"].printProjects();


/***/ }),

/***/ "./src/project/projects.js":
/*!*********************************!*\
  !*** ./src/project/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.css */ "./src/project/project.css");
/* harmony import */ var _todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo/todoAPI */ "./src/todo/todoAPI.js");
/* harmony import */ var _todolist_todolist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todolist/todolist */ "./src/todolist/todolist.js");




const projects = (() => {

    const _printProjectList = () => {
        const projectsDiv = document.querySelector('.projects');
        const projectListDiv = document.createElement('div');
        projectListDiv.setAttribute('class','project-list');
        projectsDiv.append(projectListDiv);
        _addProjectButton();

        const projectList = _todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList();
        

        for (let i = 0; i < projectList.length; i++) {
            //add clickable projects?
            const projectDiv = document.createElement('div');
            projectDiv.setAttribute('class','project');
            projectDiv.setAttribute('id',`project${i}`);

            const projectName = document.createElement('p');
            projectName.setAttribute('class','project-name');
            projectName.append(projectList[i]);

            const removeProject = document.createElement('button');
            removeProject.setAttribute('class','remove-project');

            projectDiv.append(projectName, removeProject);
            projectListDiv.append(projectDiv);

            projectName.addEventListener('click', (e) => {
                _todolist_todolist__WEBPACK_IMPORTED_MODULE_2__["default"].printProject(projectList[i]);
            });

            removeProject.addEventListener('click', (e) => {
                _todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(projectList[i]);
                _refreshList();
            });
        }

        

    }

    const _addProjectButton = () => {
        const projectsDiv = document.querySelector('.project-list');
        const addProjectBtn = document.createElement('button');
        addProjectBtn.setAttribute('id','add-project');

        projectsDiv.append(addProjectBtn);

        addProjectBtn.addEventListener('click', (e) => {
            addProjectBtn.disabled = true;
            _addProjectForm();
            
        });


    }

    const _addProjectForm = () => {
        const addProjectBtn = document.querySelector('#add-project')

        const projectsDiv = document.querySelector('.projects');
        const projectsForm = document.createElement('form');
        projectsForm.setAttribute('class','project-form');

        const projectInput = document.createElement('input');
        projectInput.setAttribute('id','project-input');
        projectInput.setAttribute('type','text');

        const projectSubmit = document.createElement('input');
        projectSubmit.setAttribute('type','button');
        projectSubmit.setAttribute('id','project-form');
        projectSubmit.value = 'add';
        projectSubmit.addEventListener('click', (e) => {
            _todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(projectInput.value);
            projectsForm.remove();
            addProjectBtn.disabled = false;
            _refreshList();
        })

        projectsForm.append(projectInput, projectSubmit);
        projectsDiv.append(projectsForm);
    }

    const _refreshList = () => {
        const projectList = document.querySelector('.project-list');
        projectList.remove();
        
        _printProjectList();
    }

    const printProjects = () => {
        const projectsDiv = document.querySelector('.projects');
        const projectTitle = document.createElement('h3');        
        projectTitle.setAttribute('class','project-title');
        projectTitle.append('Projects');
        projectsDiv.append(projectTitle);
        _printProjectList();

    }

    return {printProjects}

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./src/todo/projectlist.js":
/*!*********************************!*\
  !*** ./src/todo/projectlist.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/todo/storage.js");


const projectlist = (() => {
    const addProject = (name) => {
        let list = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveProjects();
        let nameList = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveNames();

        if(list === null) {
            list = [];
            nameList = [];
        }

        //checks for dulicate projects
        if (nameList.indexOf(name) === -1) {
            const project = [];
            list.push(project);
            nameList.push(name);

            _storage__WEBPACK_IMPORTED_MODULE_0__["default"].storeProjects(list);
            _storage__WEBPACK_IMPORTED_MODULE_0__["default"].storeNames(nameList);
        } else {
            console.log('duplicate project name?')
        }
    }

    const getProject = (projectName) => {
        const projects = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveProjects();
        const nameList = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveNames();

        const index = nameList.indexOf(projectName);

        return projects[index];
    }

    const getProjects = () => {
        const projects = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveProjects();
        return projects;
    }

    const removeProject = (projectName) => {
        const list = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveProjects();
        const nameList = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveNames();

        const index = nameList.indexOf(projectName);
        if (index != -1) {
            nameList.splice(index,1);
            list.splice(index,1);
        } else {
            console.log('no project?');
        }
        

        _storage__WEBPACK_IMPORTED_MODULE_0__["default"].storeProjects(list);
        _storage__WEBPACK_IMPORTED_MODULE_0__["default"].storeNames(nameList);
    }

    const updateProject = (projectName, project) => {
        const list = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveProjects();
        const nameList = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveNames();

        const index = nameList.indexOf(projectName);

        list[index] = (project);

        _storage__WEBPACK_IMPORTED_MODULE_0__["default"].storeProjects(list);
    }

    const getProjectList = () => {
        return _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveNames();
    }

    return {
        addProject, getProject, getProjects, getProjectList, removeProject, updateProject
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectlist);

/***/ }),

/***/ "./src/todo/storage.js":
/*!*****************************!*\
  !*** ./src/todo/storage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const storage = (() => {
    const storeProjects = (projects) => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const retrieveProjects = () => {
        return JSON.parse(localStorage.getItem('projects'));
    }

    const storeNames = names => {
        localStorage.setItem('projectNames',JSON.stringify(names));
    }

    const retrieveNames = names => {
        return JSON.parse(localStorage.getItem('projectNames'));
    }

    

    return {storeProjects, retrieveProjects, storeNames, retrieveNames}
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storage);

/***/ }),

/***/ "./src/todo/todo.js":
/*!**************************!*\
  !*** ./src/todo/todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todo = (name, project, dueDate, priorty, status) => {
    return {name, project, dueDate, priorty, status}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);

/***/ }),

/***/ "./src/todo/todoAPI.js":
/*!*****************************!*\
  !*** ./src/todo/todoAPI.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project/projects */ "./src/project/projects.js");
/* harmony import */ var _projectlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectlist */ "./src/todo/projectlist.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ "./src/todo/todo.js");





const todoAPI = (() => {

    //create
    const makeTodo = (name, project, dueDate, priorty) => {
        const todo1 = (0,_todo__WEBPACK_IMPORTED_MODULE_2__["default"])(name, project, dueDate, priorty, false);
        return todo1;
    }

    const addTodo = (todo) => {
        const project = _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(todo.project);

        project.push(todo);
        _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(todo.project).push(todo);

        _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].updateProject(todo.project, project);
    }

    const addProject = projectName => {
        _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(projectName);
    }

    //read
    const getTodo = todo => {
        const project = _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(todo.project);
        const index = project.indexOf(todo.name);

        return project[index];
    }

    const getLength = (projectName) => {
        return _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(projectName).length;
    }

    const getProject = (projectName) => {
        return _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(projectName);
    }

    const getName = todo => {
        return todo.name;
    }

    const getProjectName = todo => {
        return todo.project;
    }

    const getDate = todo => {
        return todo.dueDate;
    }

    const getPriorty = todo => {
        return todo.priorty;
    }

    const getStatus = todo => {
        return todo.status;
    }

    const getProjectList = () => {
        return _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].getProjectList();
    }

    // updaters?
    const updateTodo = (index, todo) => {
        const project = _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(todo.project);
        project[index] = todo;
        _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].updateProject(todo.project, project);
    }


    const toggleStatus = (index, todo) => {
        todo.status = !todo.status;
        updateTodo(index, todo);
    }


    //delete
    const removeTodo = (index, todo) => {
        let project = _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(todo.project);
        project.splice(index, 1);
        _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].updateProject(todo.project, project);
    }

    const removeProject = (projectName) => {
        _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(projectName);
        // const projectNames = projectlist.getProjectList();
        // const projects = projectlist.getProjects();
        // index = projectNames.indexOf(projectName);
        // projects.splice(index,1);
        

    }

    return {
        //create
        addTodo, makeTodo, addProject,
        //read
        getTodo, getLength, getProject, getProjectList, getName, getProjectName, getDate, getPriorty, getStatus,
        //update
        updateTodo, toggleStatus,
        //delete
        removeTodo, removeProject
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoAPI);

/***/ }),

/***/ "./src/todolist/addEditTodo.js":
/*!*************************************!*\
  !*** ./src/todolist/addEditTodo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_todoAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo/todoAPI.js */ "./src/todo/todoAPI.js");
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todolist.js */ "./src/todolist/todolist.js");
//mini form generator for adding adding and editing todos



const addEditTodo = (() => {
    const addTodo = projectName => {
        const todolist = document.querySelector('.todolist');
        const addDiv = document.createElement('div');
        addDiv.setAttribute('class','add-div');
        todolist.append(addDiv);
        _addForms(projectName);
        
    }

    const _addForms = projectName => {
        const addTodo = document.getElementById('addtodo');
        addTodo.disabled = true;

        const nameInput = document.createElement('input');
        nameInput.setAttribute('type','text');
        nameInput.setAttribute('id','name-input');
        nameInput.setAttribute('autocomplete','off');

        const dateInput = document.createElement('input');
        dateInput.setAttribute('type','date');
        dateInput.setAttribute('id','date-input');

        const priortyInputs = document.createElement('div');
        priortyInputs.setAttribute('class','priorty-inputs');

        const priortyLow = document.createElement('input');
        priortyLow.setAttribute('name','priorty');
        priortyLow.setAttribute('type','radio');
        priortyLow.append('x');

        const priortyMedium = document.createElement('input');
        priortyMedium.setAttribute('type','radio');
        priortyMedium.setAttribute('name','priorty');

        const priortyHigh = document.createElement('input');
        priortyHigh.setAttribute('type','radio');
        priortyHigh.setAttribute('name','priorty');

        priortyInputs.append(priortyLow, priortyMedium, priortyHigh);

        const cancelBtn = document.createElement('input');
        cancelBtn.setAttribute('type','button');
        cancelBtn.setAttribute('id','cancel-button');
        cancelBtn.value = 'Cancel';
        cancelBtn.addEventListener('click', _cancelSubmit);

        const submitBtn = document.createElement('input');
        submitBtn.setAttribute('type','button');
        submitBtn.setAttribute('id','submit-button');
        submitBtn.value = 'Submit';

        submitBtn.addEventListener('click', (e) => {
            let priorty;
            if (priortyMedium.checked) {
                priorty = 'medium';
            } else if (priortyHigh.checked) {
                priorty = 'high';
            } else if (priortyLow.checked) {
                priorty = 'low';
            } else {
                priorty = null;
            }
            const todo1 = _todo_todoAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeTodo(nameInput.value, projectName, dateInput.value, priorty, false);
            _todo_todoAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(todo1);
            _todolist_js__WEBPACK_IMPORTED_MODULE_1__["default"].refreshList(projectName);
            _cancelSubmit();
        });

        const addDiv = document.querySelector('.add-div');
        
        addDiv.append(nameInput, dateInput, priortyInputs, cancelBtn, submitBtn);
        nameInput.focus();

    }

    const editTodo = (i, project, projectName) => {
        const todolist = document.querySelector('.todolist');
        const addDiv = document.createElement('div');
        addDiv.setAttribute('class','add-div');
        todolist.append(addDiv);
        _editForms(i, project, projectName);
    }

    const _editForms = (i, project, projectName) => {
        const addTodo = document.getElementById('addtodo');
        addTodo.disabled = true;

        const nameInput = document.createElement('input');
        nameInput.setAttribute('type','text');
        nameInput.setAttribute('id','name-input');
        nameInput.setAttribute('autocomplete','off');
        nameInput.value = _todo_todoAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].getName(project[i]);

        const dateInput = document.createElement('input');
        dateInput.setAttribute('type','date');
        dateInput.setAttribute('id','date-input');
        dateInput.value = _todo_todoAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].getDate(project[i]);

        const priortyInputs = document.createElement('div');
        priortyInputs.setAttribute('class','priorty-inputs');

        const priortyLow = document.createElement('input');
        priortyLow.setAttribute('name','priorty');
        priortyLow.setAttribute('type','radio');

        const priortyMedium = document.createElement('input');
        priortyMedium.setAttribute('type','radio');
        priortyMedium.setAttribute('name','priorty');

        const priortyHigh = document.createElement('input');
        priortyHigh.setAttribute('type','radio');
        priortyHigh.setAttribute('name','priorty');

        priortyInputs.append(priortyLow, priortyMedium, priortyHigh);

        const priortyValue = _todo_todoAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].getPriorty(project[i]);
        if (priortyValue === 'low') { priortyLow.setAttribute('checked', 'true')}
        else if(priortyValue === 'medium') { priortyMedium.setAttribute('checked','true')}
        else if (priortyValue === 'high') {priortyHigh.setAttribute('checked','true')}
        else {};


        const cancelBtn = document.createElement('input');
        cancelBtn.setAttribute('type','button');
        cancelBtn.setAttribute('id','cancel-button');
        cancelBtn.value = 'Cancel';
        cancelBtn.addEventListener('click', _cancelSubmit);

        const editBtn = document.createElement('input');
        editBtn.setAttribute('type','button');
        editBtn.setAttribute('id','edit-button');
        editBtn.value = 'Edit';

        editBtn.addEventListener('click', (e) => {
            let priorty;
            if (priortyMedium.checked) {
                priorty = 'medium';
            } else if (priortyHigh.checked) {
                priorty = 'high';
            } else {
                priorty = 'low';
            }
            const todo1 = _todo_todoAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeTodo(nameInput.value, projectName, dateInput.value, priorty, false);
            _todo_todoAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(i, todo1);
            _todolist_js__WEBPACK_IMPORTED_MODULE_1__["default"].refreshList(projectName);
            _cancelSubmit();
        });

        const addDiv = document.querySelector('.add-div');
        
        addDiv.append(nameInput, dateInput, priortyInputs, cancelBtn, editBtn);
        nameInput.focus();
    }

    const _cancelSubmit = () => {
        const addDiv = document.querySelector('.add-div');
        const addTodo = document.getElementById('addtodo');
        addDiv.remove();
        addTodo.disabled = false;
    }

    return {addTodo, editTodo}


})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEditTodo);

/***/ }),

/***/ "./src/todolist/todolist.js":
/*!**********************************!*\
  !*** ./src/todolist/todolist.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todolist_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.css */ "./src/todolist/todolist.css");
/* harmony import */ var _todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo/todoAPI */ "./src/todo/todoAPI.js");
/* harmony import */ var _addEditTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addEditTodo.js */ "./src/todolist/addEditTodo.js");




const todolist = (() => {

    const printProject = projectName => {

        if (document.querySelector('.list')) {
            _clearList();
        }

        _createTitle(`${projectName}`);
        _createAddButton(projectName);
        _createListDiv();
        _printList(projectName);
    }

    const _printList = projectName => {
        const list = document.querySelector('.list');

        const length = _todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getLength(projectName);
        const project = _todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(projectName);
        
        for (let i = 0; i < length; i++) {
            const todo = document.createElement('div');
            todo.setAttribute('id',i);
            list.append(todo);
            _createTodoButtons(i, project, projectName);
            _todoNameAndDate(i, project, projectName);
        }
    }

    const refreshList = projectName => {
        const todolistDiv = document.querySelector('.todolist');
        const oldList = document.querySelector('.list');
        todolistDiv.removeChild(oldList);

        const list = document.createElement('div');
        list.setAttribute('class','list');
        todolistDiv.append(list);

        _printList(projectName);
    }

    const _createAddButton = projectName => {
        const todolistDiv = document.querySelector('.todolist');
        const addButtonDiv = document.createElement('div');
        addButtonDiv.setAttribute('class','add-button');

        const add = document.createElement('button');
        add.setAttribute('id','addtodo');
        add.addEventListener('click', (e) => {
            _addEditTodo_js__WEBPACK_IMPORTED_MODULE_2__["default"].addTodo(projectName);
        });

        const label = document.createElement('label');
        label.setAttribute('for','addtodo');
        label.innerHTML = 'add a todo';
        
        addButtonDiv.append(add, label);
        todolistDiv.append(addButtonDiv);
    }

    const _createTitle = (titleName) => {
        const todolistDiv = document.querySelector('.todolist');
        const title = document.createElement('h3');
        title.setAttribute('class','todolist-title');
        title.innerHTML = titleName;
        todolistDiv.append(title);
    }

    const _createListDiv = () => {
        const todolistDiv = document.querySelector('.todolist');
        const list = document.createElement('div');
        list.setAttribute('class','list');
        todolistDiv.append(list);
    }

    const _createTodoButtons = (i, project, projectName) => {

        const todo = document.getElementById(i);

        const check = document.createElement('button');
        check.setAttribute('id','todocheck');
        check.style.backgroundColor = _todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getStatus(project[i]) ? 'var(--icon-color)' : 'white';

        check.addEventListener('click',  (e) => {
            _todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__["default"].toggleStatus(i, project[i]);
            check.style.backgroundColor = _todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getStatus(project[i]) ? 'var(--icon-color)' : 'white';
        });

        const remove = document.createElement('button');
        remove.setAttribute('id','todoremove');
        remove.addEventListener('click', (e) => {
            _todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__["default"].removeTodo(i, project[i]);
            refreshList(projectName);
        });

        todo.append(check, remove);
    }

    const _todoNameAndDate = (i, project, projectName) => {

        const todo = document.getElementById(i);

        const todoContent = document.createElement('div');
        todoContent.setAttribute('class','todo-content');

        const name = document.createElement('p');
        name.setAttribute('class', 'todo-name');
        name.innerHTML = `${_todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getName(project[i])}`;

        const date = document.createElement('p');
        date.setAttribute('class','todo-date');
        date.innerHTML = `${_todo_todoAPI__WEBPACK_IMPORTED_MODULE_1__["default"].getDate(project[i])}`;

        todo.append(todoContent);
        todoContent.append(name, date);

        todoContent.addEventListener('click', (e) => {
            _addEditTodo_js__WEBPACK_IMPORTED_MODULE_2__["default"].editTodo(i, project, projectName);
        })
    }

    const _clearList = () => {
        const todolistTitle = document.querySelector('.todolist-title');
        const todolistAddButton = document.querySelector('.add-button');
        const todolistList = document.querySelector('.list');

        todolistTitle.remove();
        todolistAddButton.remove();
        todolistList.remove();
    }

    return {printProject, refreshList}

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todolist);

/***/ }),

/***/ "./src/icons/add.svg":
/*!***************************!*\
  !*** ./src/icons/add.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3cffe9a515498593b872.svg";

/***/ }),

/***/ "./src/icons/delete-outline.svg":
/*!**************************************!*\
  !*** ./src/icons/delete-outline.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0414f35cf2e9343ce412.svg";

/***/ }),

/***/ "./src/icons/delete.svg":
/*!******************************!*\
  !*** ./src/icons/delete.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05a1015cf5d03056c30d.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLCtEQUFpQjtBQUN2RDtBQUNBO0FBQ0EsWUFBWSxrRUFBb0I7QUFDaEMsMENBQTBDLCtEQUFpQjtBQUMzRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdFQUFrQjtBQUM5QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2REFBZSxhQUFhO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2REFBZSxhQUFhO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdFQUFvQjtBQUNoQyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QvcHJvamVjdC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9saXN0L3RvZG9saXN0LmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC9wcm9qZWN0LmNzcz8wNzI0Iiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9saXN0L3RvZG9saXN0LmNzcz9kOTFjIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvcHJvamVjdC9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvL3Byb2plY3RsaXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8vc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby90b2RvQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9saXN0L2FkZEVkaXRUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9saXN0L3RvZG9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pY29ucy9hZGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaWNvbnMvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvamVjdHMge1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwcmVtIC0wLjRyZW07XFxyXFxufVxcclxcbiNhZGQtcHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOjMwcHggLyAxZnIgMzBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcIm5hbWUgZGVsZXRlXFxcIjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnByb2plY3QtbmFtZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXHJcXG59XFxyXFxuLnJlbW92ZS1wcm9qZWN0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBkZWxldGU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QgPiAqOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Byb2plY3QvcHJvamVjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5REFBdUM7SUFDdkMsd0NBQXdDO0lBQ3hDLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTs7SUFFWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCO2lCQUNhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHlEQUEwQztJQUMxQyx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtBQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvamVjdHMge1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZSB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiNhZGQtcHJvamVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pY29ucy9hZGQuc3ZnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcblxcclxcbiAgICBtYXJnaW46IDByZW0gLTAuNHJlbTtcXHJcXG59XFxyXFxuI2FkZC1wcm9qZWN0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6MzBweCAvIDFmciAzMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwibmFtZSBkZWxldGVcXFwiO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4ucHJvamVjdC1uYW1lIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xcclxcbn1cXHJcXG4ucmVtb3ZlLXByb2plY3Qge1xcclxcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaWNvbnMvZGVsZXRlLnN2Zyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5wcm9qZWN0ID4gKjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDUwcHg7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbi1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogXFxyXFxudGVtcGxhdGUgbGF5b3V0XFxyXFxuKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAwcHggLyAzMDBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICBcXFwicHJvamVjdCB0b2RvbGlzdFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnRvZG9saXN0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0b2RvbGlzdDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTs7Q0FFQztBQUNEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEM7O3NCQUVrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbi1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogXFxyXFxudGVtcGxhdGUgbGF5b3V0XFxyXFxuKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTAwcHggLyAzMDBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICBcXFwicHJvamVjdCB0b2RvbGlzdFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLnRvZG9saXN0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0b2RvbGlzdDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pY29ucy9hZGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaWNvbnMvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ljb25zL2RlbGV0ZS1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWljb24tY29sb3I6ICNhMWExYWE7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50b2RvbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi50b2RvbGlzdC10aXRsZSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuI2FkZHRvZG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4jYWRkdG9kbzpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCA+ICoge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAzNXB4LyAzNXB4IDFmciAzNXB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY2hlY2sgbmFtZURhdGUgZGVsZXRlXFxcIjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMC41cmVtO1xcclxcbiAgICByb3ctZ2FwOiA1cHg7XFxyXFxufVxcclxcbi5saXN0ID4gKiBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4ubGlzdCA+ICogYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb2NoZWNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjaGVjaztcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1pY29uLWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbiN0b2RvY2hlY2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250ZW50IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYW1lRGF0ZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4udG9kby1jb250ZW50OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9yZW1vdmUge1xcclxcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuI3RvZG9yZW1vdmU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFxcclxcbmFkZERpdlxcclxcbiovXFxyXFxuLmFkZC1kaXYge1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDUwcHgpIC8gMTEwcHggODBweCA2MHB4IDcwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJuYW1lIG5hbWUgbmFtZSBuYW1lXFxcIlxcclxcbiAgICBcXFwiZGF0ZSBwcmlvcnR5IGNhbmNlbCBzdWJtaXRcXFwiO1xcclxcbiAgICBnYXA6IDAuM3JlbTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNuYW1lLWlucHV0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9ydHktaW5wdXRzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcnR5O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2FuY2VsO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IHN1Ym1pdDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvZG9saXN0L3RvZG9saXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7O0lBRVQsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5REFBdUM7SUFDdkMsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQzsyQkFDdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5REFBMEM7SUFDMUMsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlEQUFrRDtJQUNsRCxlQUFlO0FBQ25COzs7QUFHQTs7Q0FFQztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQzs7SUFFaEMsYUFBYTs7SUFFYixhQUFhO0lBQ2IscURBQXFEO0lBQ3JEOztnQ0FFNEI7SUFDNUIsV0FBVzs7SUFFWCx1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1pY29uLWNvbG9yOiAjYTFhMWFhO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udG9kb2xpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4udG9kb2xpc3QtdGl0bGUge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbiNhZGR0b2RvIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ljb25zL2FkZC5zdmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4jYWRkdG9kbzpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCA+ICoge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAzNXB4LyAzNXB4IDFmciAzNXB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiY2hlY2sgbmFtZURhdGUgZGVsZXRlXFxcIjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgY29sdW1uLWdhcDogMC41cmVtO1xcclxcbiAgICByb3ctZ2FwOiA1cHg7XFxyXFxufVxcclxcbi5saXN0ID4gKiBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4ubGlzdCA+ICogYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb2NoZWNrIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjaGVjaztcXHJcXG4gICAgaGVpZ2h0OiA4MCU7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1pY29uLWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbiN0b2RvY2hlY2s6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29uLWNvbG9yKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb250ZW50IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYW1lRGF0ZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4udG9kby1jb250ZW50OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9yZW1vdmUge1xcclxcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ljb25zL2RlbGV0ZS5zdmcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG4jdG9kb3JlbW92ZTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pY29ucy9kZWxldGUtb3V0bGluZS5zdmcpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFxcclxcbmFkZERpdlxcclxcbiovXFxyXFxuLmFkZC1kaXYge1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDUwcHgpIC8gMTEwcHggODBweCA2MHB4IDcwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJuYW1lIG5hbWUgbmFtZSBuYW1lXFxcIlxcclxcbiAgICBcXFwiZGF0ZSBwcmlvcnR5IGNhbmNlbCBzdWJtaXRcXFwiO1xcclxcbiAgICBnYXA6IDAuM3JlbTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNuYW1lLWlucHV0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9ydHktaW5wdXRzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcnR5O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2FuY2VsO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IHN1Ym1pdDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Byb2plY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wcm9qZWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9saXN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHRvZG9saXN0IGZyb20gXCIuL3RvZG9saXN0L3RvZG9saXN0XCI7XHJcbmltcG9ydCBwcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0L3Byb2plY3RzLmpzXCI7XHJcbmltcG9ydCB0b2RvQVBJIGZyb20gJy4vdG9kby90b2RvQVBJJztcclxuXHJcblxyXG4vLyB0b2RvbGlzdC5wcmludFByb2plY3QoJ29uZScpO1xyXG5wcm9qZWN0cy5wcmludFByb2plY3RzKCk7XHJcbiIsImltcG9ydCAnLi9wcm9qZWN0LmNzcyc7XHJcbmltcG9ydCB0b2RvQVBJIGZyb20gXCIuLi90b2RvL3RvZG9BUElcIjtcclxuaW1wb3J0IHRvZG9saXN0IGZyb20gXCIuLi90b2RvbGlzdC90b2RvbGlzdFwiO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IF9wcmludFByb2plY3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0TGlzdERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvamVjdC1saXN0Jyk7XHJcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kKHByb2plY3RMaXN0RGl2KTtcclxuICAgICAgICBfYWRkUHJvamVjdEJ1dHRvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IHRvZG9BUEkuZ2V0UHJvamVjdExpc3QoKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAvL2FkZCBjbGlja2FibGUgcHJvamVjdHM/XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvamVjdCcpO1xyXG4gICAgICAgICAgICBwcm9qZWN0RGl2LnNldEF0dHJpYnV0ZSgnaWQnLGBwcm9qZWN0JHtpfWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9qZWN0LW5hbWUnKTtcclxuICAgICAgICAgICAgcHJvamVjdE5hbWUuYXBwZW5kKHByb2plY3RMaXN0W2ldKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncmVtb3ZlLXByb2plY3QnKTtcclxuXHJcbiAgICAgICAgICAgIHByb2plY3REaXYuYXBwZW5kKHByb2plY3ROYW1lLCByZW1vdmVQcm9qZWN0KTtcclxuICAgICAgICAgICAgcHJvamVjdExpc3REaXYuYXBwZW5kKHByb2plY3REaXYpO1xyXG5cclxuICAgICAgICAgICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdG9kb2xpc3QucHJpbnRQcm9qZWN0KHByb2plY3RMaXN0W2ldKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZW1vdmVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRvZG9BUEkucmVtb3ZlUHJvamVjdChwcm9qZWN0TGlzdFtpXSk7XHJcbiAgICAgICAgICAgICAgICBfcmVmcmVzaExpc3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2FkZFByb2plY3RCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0Jyk7XHJcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGFkZFByb2plY3RCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2FkZC1wcm9qZWN0Jyk7XHJcblxyXG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZChhZGRQcm9qZWN0QnRuKTtcclxuXHJcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBfYWRkUHJvamVjdEZvcm0oKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfYWRkUHJvamVjdEZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJyk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIHByb2plY3RzRm9ybS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvamVjdC1mb3JtJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWlucHV0Jyk7XHJcbiAgICAgICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJvamVjdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgICAgICBwcm9qZWN0U3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCdwcm9qZWN0LWZvcm0nKTtcclxuICAgICAgICBwcm9qZWN0U3VibWl0LnZhbHVlID0gJ2FkZCc7XHJcbiAgICAgICAgcHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG9BUEkuYWRkUHJvamVjdChwcm9qZWN0SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICBwcm9qZWN0c0Zvcm0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGFkZFByb2plY3RCdG4uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgX3JlZnJlc2hMaXN0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcHJvamVjdHNGb3JtLmFwcGVuZChwcm9qZWN0SW5wdXQsIHByb2plY3RTdWJtaXQpO1xyXG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZChwcm9qZWN0c0Zvcm0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9yZWZyZXNoTGlzdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKTtcclxuICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmUoKTtcclxuICAgICAgICBcclxuICAgICAgICBfcHJpbnRQcm9qZWN0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByaW50UHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpOyAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcm9qZWN0LXRpdGxlJyk7XHJcbiAgICAgICAgcHJvamVjdFRpdGxlLmFwcGVuZCgnUHJvamVjdHMnKTtcclxuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmQocHJvamVjdFRpdGxlKTtcclxuICAgICAgICBfcHJpbnRQcm9qZWN0TGlzdCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3ByaW50UHJvamVjdHN9XHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7IiwiaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5cclxuY29uc3QgcHJvamVjdGxpc3QgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBzdG9yYWdlLnJldHJpZXZlUHJvamVjdHMoKTtcclxuICAgICAgICBsZXQgbmFtZUxpc3QgPSBzdG9yYWdlLnJldHJpZXZlTmFtZXMoKTtcclxuXHJcbiAgICAgICAgaWYobGlzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsaXN0ID0gW107XHJcbiAgICAgICAgICAgIG5hbWVMaXN0ID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NoZWNrcyBmb3IgZHVsaWNhdGUgcHJvamVjdHNcclxuICAgICAgICBpZiAobmFtZUxpc3QuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFtdO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgICAgIG5hbWVMaXN0LnB1c2gobmFtZSk7XHJcblxyXG4gICAgICAgICAgICBzdG9yYWdlLnN0b3JlUHJvamVjdHMobGlzdCk7XHJcbiAgICAgICAgICAgIHN0b3JhZ2Uuc3RvcmVOYW1lcyhuYW1lTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2R1cGxpY2F0ZSBwcm9qZWN0IG5hbWU/JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gc3RvcmFnZS5yZXRyaWV2ZVByb2plY3RzKCk7XHJcbiAgICAgICAgY29uc3QgbmFtZUxpc3QgPSBzdG9yYWdlLnJldHJpZXZlTmFtZXMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBuYW1lTGlzdC5pbmRleE9mKHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHN0b3JhZ2UucmV0cmlldmVQcm9qZWN0cygpO1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IHN0b3JhZ2UucmV0cmlldmVQcm9qZWN0cygpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVMaXN0ID0gc3RvcmFnZS5yZXRyaWV2ZU5hbWVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmFtZUxpc3QuaW5kZXhPZihwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgaWYgKGluZGV4ICE9IC0xKSB7XHJcbiAgICAgICAgICAgIG5hbWVMaXN0LnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgbGlzdC5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIHByb2plY3Q/Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBzdG9yYWdlLnN0b3JlUHJvamVjdHMobGlzdCk7XHJcbiAgICAgICAgc3RvcmFnZS5zdG9yZU5hbWVzKG5hbWVMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IHN0b3JhZ2UucmV0cmlldmVQcm9qZWN0cygpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVMaXN0ID0gc3RvcmFnZS5yZXRyaWV2ZU5hbWVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmFtZUxpc3QuaW5kZXhPZihwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgICAgIGxpc3RbaW5kZXhdID0gKHByb2plY3QpO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnN0b3JlUHJvamVjdHMobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UucmV0cmlldmVOYW1lcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkUHJvamVjdCwgZ2V0UHJvamVjdCwgZ2V0UHJvamVjdHMsIGdldFByb2plY3RMaXN0LCByZW1vdmVQcm9qZWN0LCB1cGRhdGVQcm9qZWN0XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0bGlzdDsiLCJjb25zdCBzdG9yYWdlID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3JlTmFtZXMgPSBuYW1lcyA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3ROYW1lcycsSlNPTi5zdHJpbmdpZnkobmFtZXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZU5hbWVzID0gbmFtZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TmFtZXMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIHtzdG9yZVByb2plY3RzLCByZXRyaWV2ZVByb2plY3RzLCBzdG9yZU5hbWVzLCByZXRyaWV2ZU5hbWVzfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCJjb25zdCB0b2RvID0gKG5hbWUsIHByb2plY3QsIGR1ZURhdGUsIHByaW9ydHksIHN0YXR1cykgPT4ge1xyXG4gICAgcmV0dXJuIHtuYW1lLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcnR5LCBzdGF0dXN9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG87IiwiaW1wb3J0IHByb2plY3QgZnJvbSBcIi4uL3Byb2plY3QvcHJvamVjdHNcIjtcclxuaW1wb3J0IHByb2plY3RsaXN0IGZyb20gXCIuL3Byb2plY3RsaXN0XCI7XHJcbmltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcblxyXG5jb25zdCB0b2RvQVBJID0gKCgpID0+IHtcclxuXHJcbiAgICAvL2NyZWF0ZVxyXG4gICAgY29uc3QgbWFrZVRvZG8gPSAobmFtZSwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3J0eSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG8xID0gdG9kbyhuYW1lLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcnR5LCBmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIHRvZG8xO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0bGlzdC5nZXRQcm9qZWN0KHRvZG8ucHJvamVjdCk7XHJcblxyXG4gICAgICAgIHByb2plY3QucHVzaCh0b2RvKTtcclxuICAgICAgICBwcm9qZWN0bGlzdC5nZXRQcm9qZWN0KHRvZG8ucHJvamVjdCkucHVzaCh0b2RvKTtcclxuXHJcbiAgICAgICAgcHJvamVjdGxpc3QudXBkYXRlUHJvamVjdCh0b2RvLnByb2plY3QsIHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBwcm9qZWN0TmFtZSA9PiB7XHJcbiAgICAgICAgcHJvamVjdGxpc3QuYWRkUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZWFkXHJcbiAgICBjb25zdCBnZXRUb2RvID0gdG9kbyA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RsaXN0LmdldFByb2plY3QodG9kby5wcm9qZWN0KTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHByb2plY3QuaW5kZXhPZih0b2RvLm5hbWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gcHJvamVjdFtpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0TGVuZ3RoID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RsaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RsaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldE5hbWUgPSB0b2RvID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kby5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByb2plY3ROYW1lID0gdG9kbyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG8ucHJvamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREYXRlID0gdG9kbyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG8uZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcmlvcnR5ID0gdG9kbyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG8ucHJpb3J0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRTdGF0dXMgPSB0b2RvID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kby5zdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RsaXN0LmdldFByb2plY3RMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlcnM/XHJcbiAgICBjb25zdCB1cGRhdGVUb2RvID0gKGluZGV4LCB0b2RvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RsaXN0LmdldFByb2plY3QodG9kby5wcm9qZWN0KTtcclxuICAgICAgICBwcm9qZWN0W2luZGV4XSA9IHRvZG87XHJcbiAgICAgICAgcHJvamVjdGxpc3QudXBkYXRlUHJvamVjdCh0b2RvLnByb2plY3QsIHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCB0b2dnbGVTdGF0dXMgPSAoaW5kZXgsIHRvZG8pID0+IHtcclxuICAgICAgICB0b2RvLnN0YXR1cyA9ICF0b2RvLnN0YXR1cztcclxuICAgICAgICB1cGRhdGVUb2RvKGluZGV4LCB0b2RvKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9kZWxldGVcclxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgsIHRvZG8pID0+IHtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RsaXN0LmdldFByb2plY3QodG9kby5wcm9qZWN0KTtcclxuICAgICAgICBwcm9qZWN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcHJvamVjdGxpc3QudXBkYXRlUHJvamVjdCh0b2RvLnByb2plY3QsIHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgICBwcm9qZWN0bGlzdC5yZW1vdmVQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICAvLyBjb25zdCBwcm9qZWN0TmFtZXMgPSBwcm9qZWN0bGlzdC5nZXRQcm9qZWN0TGlzdCgpO1xyXG4gICAgICAgIC8vIGNvbnN0IHByb2plY3RzID0gcHJvamVjdGxpc3QuZ2V0UHJvamVjdHMoKTtcclxuICAgICAgICAvLyBpbmRleCA9IHByb2plY3ROYW1lcy5pbmRleE9mKHByb2plY3ROYW1lKTtcclxuICAgICAgICAvLyBwcm9qZWN0cy5zcGxpY2UoaW5kZXgsMSk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9jcmVhdGVcclxuICAgICAgICBhZGRUb2RvLCBtYWtlVG9kbywgYWRkUHJvamVjdCxcclxuICAgICAgICAvL3JlYWRcclxuICAgICAgICBnZXRUb2RvLCBnZXRMZW5ndGgsIGdldFByb2plY3QsIGdldFByb2plY3RMaXN0LCBnZXROYW1lLCBnZXRQcm9qZWN0TmFtZSwgZ2V0RGF0ZSwgZ2V0UHJpb3J0eSwgZ2V0U3RhdHVzLFxyXG4gICAgICAgIC8vdXBkYXRlXHJcbiAgICAgICAgdXBkYXRlVG9kbywgdG9nZ2xlU3RhdHVzLFxyXG4gICAgICAgIC8vZGVsZXRlXHJcbiAgICAgICAgcmVtb3ZlVG9kbywgcmVtb3ZlUHJvamVjdFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0FQSTsiLCIvL21pbmkgZm9ybSBnZW5lcmF0b3IgZm9yIGFkZGluZyBhZGRpbmcgYW5kIGVkaXRpbmcgdG9kb3NcclxuaW1wb3J0IHRvZG9BUEkgZnJvbSBcIi4uL3RvZG8vdG9kb0FQSS5qc1wiO1xyXG5pbXBvcnQgdG9kb2xpc3QgZnJvbSBcIi4vdG9kb2xpc3QuanNcIjtcclxuXHJcbmNvbnN0IGFkZEVkaXRUb2RvID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGFkZFRvZG8gPSBwcm9qZWN0TmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2xpc3QnKTtcclxuICAgICAgICBjb25zdCBhZGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhZGREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2FkZC1kaXYnKTtcclxuICAgICAgICB0b2RvbGlzdC5hcHBlbmQoYWRkRGl2KTtcclxuICAgICAgICBfYWRkRm9ybXMocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9hZGRGb3JtcyA9IHByb2plY3ROYW1lID0+IHtcclxuICAgICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHRvZG8nKTtcclxuICAgICAgICBhZGRUb2RvLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnbmFtZS1pbnB1dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsJ29mZicpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XHJcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkYXRlLWlucHV0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaW9ydHlJbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcmlvcnR5SW5wdXRzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcmlvcnR5LWlucHV0cycpO1xyXG5cclxuICAgICAgICBjb25zdCBwcmlvcnR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBwcmlvcnR5TG93LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9ydHknKTtcclxuICAgICAgICBwcmlvcnR5TG93LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgcHJpb3J0eUxvdy5hcHBlbmQoJ3gnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpb3J0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJpb3J0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIHByaW9ydHlNZWRpdW0uc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3J0eScpO1xyXG5cclxuICAgICAgICBjb25zdCBwcmlvcnR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJpb3J0eUhpZ2guc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBwcmlvcnR5SGlnaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcnR5Jyk7XHJcblxyXG4gICAgICAgIHByaW9ydHlJbnB1dHMuYXBwZW5kKHByaW9ydHlMb3csIHByaW9ydHlNZWRpdW0sIHByaW9ydHlIaWdoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdjYW5jZWwtYnV0dG9uJyk7XHJcbiAgICAgICAgY2FuY2VsQnRuLnZhbHVlID0gJ0NhbmNlbCc7XHJcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2NhbmNlbFN1Ym1pdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnc3VibWl0LWJ1dHRvbicpO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi52YWx1ZSA9ICdTdWJtaXQnO1xyXG5cclxuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJpb3J0eTtcclxuICAgICAgICAgICAgaWYgKHByaW9ydHlNZWRpdW0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcHJpb3J0eSA9ICdtZWRpdW0nO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByaW9ydHlIaWdoLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHByaW9ydHkgPSAnaGlnaCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJpb3J0eUxvdy5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBwcmlvcnR5ID0gJ2xvdyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmlvcnR5ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0b2RvMSA9IHRvZG9BUEkubWFrZVRvZG8obmFtZUlucHV0LnZhbHVlLCBwcm9qZWN0TmFtZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcnR5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRvZG9BUEkuYWRkVG9kbyh0b2RvMSk7XHJcbiAgICAgICAgICAgIHRvZG9saXN0LnJlZnJlc2hMaXN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgX2NhbmNlbFN1Ym1pdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBhZGREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpdicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkZERpdi5hcHBlbmQobmFtZUlucHV0LCBkYXRlSW5wdXQsIHByaW9ydHlJbnB1dHMsIGNhbmNlbEJ0biwgc3VibWl0QnRuKTtcclxuICAgICAgICBuYW1lSW5wdXQuZm9jdXMoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdFRvZG8gPSAoaSwgcHJvamVjdCwgcHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IGFkZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFkZERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYWRkLWRpdicpO1xyXG4gICAgICAgIHRvZG9saXN0LmFwcGVuZChhZGREaXYpO1xyXG4gICAgICAgIF9lZGl0Rm9ybXMoaSwgcHJvamVjdCwgcHJvamVjdE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9lZGl0Rm9ybXMgPSAoaSwgcHJvamVjdCwgcHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHRvZG8nKTtcclxuICAgICAgICBhZGRUb2RvLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnbmFtZS1pbnB1dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsJ29mZicpO1xyXG4gICAgICAgIG5hbWVJbnB1dC52YWx1ZSA9IHRvZG9BUEkuZ2V0TmFtZShwcm9qZWN0W2ldKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xyXG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZGF0ZS1pbnB1dCcpO1xyXG4gICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IHRvZG9BUEkuZ2V0RGF0ZShwcm9qZWN0W2ldKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpb3J0eUlucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByaW9ydHlJbnB1dHMuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3ByaW9ydHktaW5wdXRzJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaW9ydHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHByaW9ydHlMb3cuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3J0eScpO1xyXG4gICAgICAgIHByaW9ydHlMb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpb3J0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJpb3J0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIHByaW9ydHlNZWRpdW0uc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3J0eScpO1xyXG5cclxuICAgICAgICBjb25zdCBwcmlvcnR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJpb3J0eUhpZ2guc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBwcmlvcnR5SGlnaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcnR5Jyk7XHJcblxyXG4gICAgICAgIHByaW9ydHlJbnB1dHMuYXBwZW5kKHByaW9ydHlMb3csIHByaW9ydHlNZWRpdW0sIHByaW9ydHlIaWdoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpb3J0eVZhbHVlID0gdG9kb0FQSS5nZXRQcmlvcnR5KHByb2plY3RbaV0pO1xyXG4gICAgICAgIGlmIChwcmlvcnR5VmFsdWUgPT09ICdsb3cnKSB7IHByaW9ydHlMb3cuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ3RydWUnKX1cclxuICAgICAgICBlbHNlIGlmKHByaW9ydHlWYWx1ZSA9PT0gJ21lZGl1bScpIHsgcHJpb3J0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCd0cnVlJyl9XHJcbiAgICAgICAgZWxzZSBpZiAocHJpb3J0eVZhbHVlID09PSAnaGlnaCcpIHtwcmlvcnR5SGlnaC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCd0cnVlJyl9XHJcbiAgICAgICAgZWxzZSB7fTtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xyXG4gICAgICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnY2FuY2VsLWJ1dHRvbicpO1xyXG4gICAgICAgIGNhbmNlbEJ0bi52YWx1ZSA9ICdDYW5jZWwnO1xyXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jYW5jZWxTdWJtaXQpO1xyXG5cclxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xyXG4gICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2VkaXQtYnV0dG9uJyk7XHJcbiAgICAgICAgZWRpdEJ0bi52YWx1ZSA9ICdFZGl0JztcclxuXHJcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcmlvcnR5O1xyXG4gICAgICAgICAgICBpZiAocHJpb3J0eU1lZGl1bS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBwcmlvcnR5ID0gJ21lZGl1bSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJpb3J0eUhpZ2guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcHJpb3J0eSA9ICdoaWdoJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByaW9ydHkgPSAnbG93JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB0b2RvMSA9IHRvZG9BUEkubWFrZVRvZG8obmFtZUlucHV0LnZhbHVlLCBwcm9qZWN0TmFtZSwgZGF0ZUlucHV0LnZhbHVlLCBwcmlvcnR5LCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHRvZG9BUEkudXBkYXRlVG9kbyhpLCB0b2RvMSk7XHJcbiAgICAgICAgICAgIHRvZG9saXN0LnJlZnJlc2hMaXN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgX2NhbmNlbFN1Ym1pdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBhZGREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpdicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkZERpdi5hcHBlbmQobmFtZUlucHV0LCBkYXRlSW5wdXQsIHByaW9ydHlJbnB1dHMsIGNhbmNlbEJ0biwgZWRpdEJ0bik7XHJcbiAgICAgICAgbmFtZUlucHV0LmZvY3VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2NhbmNlbFN1Ym1pdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhZGREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpdicpO1xyXG4gICAgICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkdG9kbycpO1xyXG4gICAgICAgIGFkZERpdi5yZW1vdmUoKTtcclxuICAgICAgICBhZGRUb2RvLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHthZGRUb2RvLCBlZGl0VG9kb31cclxuXHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkRWRpdFRvZG87IiwiaW1wb3J0ICcuL3RvZG9saXN0LmNzcydcclxuaW1wb3J0IHRvZG9BUEkgZnJvbSAnLi4vdG9kby90b2RvQVBJJztcclxuaW1wb3J0IGFkZEVkaXRUb2RvIGZyb20gJy4vYWRkRWRpdFRvZG8uanMnO1xyXG5cclxuY29uc3QgdG9kb2xpc3QgPSAoKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHByaW50UHJvamVjdCA9IHByb2plY3ROYW1lID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0JykpIHtcclxuICAgICAgICAgICAgX2NsZWFyTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgX2NyZWF0ZVRpdGxlKGAke3Byb2plY3ROYW1lfWApO1xyXG4gICAgICAgIF9jcmVhdGVBZGRCdXR0b24ocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIF9jcmVhdGVMaXN0RGl2KCk7XHJcbiAgICAgICAgX3ByaW50TGlzdChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3ByaW50TGlzdCA9IHByb2plY3ROYW1lID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdG9kb0FQSS5nZXRMZW5ndGgocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0b2RvQVBJLmdldFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB0b2RvLnNldEF0dHJpYnV0ZSgnaWQnLGkpO1xyXG4gICAgICAgICAgICBsaXN0LmFwcGVuZCh0b2RvKTtcclxuICAgICAgICAgICAgX2NyZWF0ZVRvZG9CdXR0b25zKGksIHByb2plY3QsIHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgX3RvZG9OYW1lQW5kRGF0ZShpLCBwcm9qZWN0LCBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlZnJlc2hMaXN0ID0gcHJvamVjdE5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9saXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9saXN0Jyk7XHJcbiAgICAgICAgY29uc3Qgb2xkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcbiAgICAgICAgdG9kb2xpc3REaXYucmVtb3ZlQ2hpbGQob2xkTGlzdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaXN0Jyk7XHJcbiAgICAgICAgdG9kb2xpc3REaXYuYXBwZW5kKGxpc3QpO1xyXG5cclxuICAgICAgICBfcHJpbnRMaXN0KHByb2plY3ROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfY3JlYXRlQWRkQnV0dG9uID0gcHJvamVjdE5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9saXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9saXN0Jyk7XHJcbiAgICAgICAgY29uc3QgYWRkQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYWRkQnV0dG9uRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdhZGQtYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGFkZC5zZXRBdHRyaWJ1dGUoJ2lkJywnYWRkdG9kbycpO1xyXG4gICAgICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGFkZEVkaXRUb2RvLmFkZFRvZG8ocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdhZGR0b2RvJyk7XHJcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gJ2FkZCBhIHRvZG8nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkZEJ1dHRvbkRpdi5hcHBlbmQoYWRkLCBsYWJlbCk7XHJcbiAgICAgICAgdG9kb2xpc3REaXYuYXBwZW5kKGFkZEJ1dHRvbkRpdik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZVRpdGxlID0gKHRpdGxlTmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9saXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9saXN0Jyk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0b2RvbGlzdC10aXRsZScpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHRpdGxlTmFtZTtcclxuICAgICAgICB0b2RvbGlzdERpdi5hcHBlbmQodGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVMaXN0RGl2ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9saXN0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9saXN0Jyk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3QnKTtcclxuICAgICAgICB0b2RvbGlzdERpdi5hcHBlbmQobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZVRvZG9CdXR0b25zID0gKGksIHByb2plY3QsIHByb2plY3ROYW1lKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBjaGVjay5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kb2NoZWNrJyk7XHJcbiAgICAgICAgY2hlY2suc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdG9kb0FQSS5nZXRTdGF0dXMocHJvamVjdFtpXSkgPyAndmFyKC0taWNvbi1jb2xvciknIDogJ3doaXRlJztcclxuXHJcbiAgICAgICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAgKGUpID0+IHtcclxuICAgICAgICAgICAgdG9kb0FQSS50b2dnbGVTdGF0dXMoaSwgcHJvamVjdFtpXSk7XHJcbiAgICAgICAgICAgIGNoZWNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRvZG9BUEkuZ2V0U3RhdHVzKHByb2plY3RbaV0pID8gJ3ZhcigtLWljb24tY29sb3IpJyA6ICd3aGl0ZSc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHJlbW92ZS5zZXRBdHRyaWJ1dGUoJ2lkJywndG9kb3JlbW92ZScpO1xyXG4gICAgICAgIHJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG9BUEkucmVtb3ZlVG9kbyhpLCBwcm9qZWN0W2ldKTtcclxuICAgICAgICAgICAgcmVmcmVzaExpc3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b2RvLmFwcGVuZChjaGVjaywgcmVtb3ZlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfdG9kb05hbWVBbmREYXRlID0gKGksIHByb2plY3QsIHByb2plY3ROYW1lKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kb0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0b2RvQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9kby1jb250ZW50Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tbmFtZScpO1xyXG4gICAgICAgIG5hbWUuaW5uZXJIVE1MID0gYCR7dG9kb0FQSS5nZXROYW1lKHByb2plY3RbaV0pfWA7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9kby1kYXRlJyk7XHJcbiAgICAgICAgZGF0ZS5pbm5lckhUTUwgPSBgJHt0b2RvQVBJLmdldERhdGUocHJvamVjdFtpXSl9YDtcclxuXHJcbiAgICAgICAgdG9kby5hcHBlbmQodG9kb0NvbnRlbnQpO1xyXG4gICAgICAgIHRvZG9Db250ZW50LmFwcGVuZChuYW1lLCBkYXRlKTtcclxuXHJcbiAgICAgICAgdG9kb0NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBhZGRFZGl0VG9kby5lZGl0VG9kbyhpLCBwcm9qZWN0LCBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfY2xlYXJMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9saXN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2xpc3QtdGl0bGUnKTtcclxuICAgICAgICBjb25zdCB0b2RvbGlzdEFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnV0dG9uJyk7XHJcbiAgICAgICAgY29uc3QgdG9kb2xpc3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuXHJcbiAgICAgICAgdG9kb2xpc3RUaXRsZS5yZW1vdmUoKTtcclxuICAgICAgICB0b2RvbGlzdEFkZEJ1dHRvbi5yZW1vdmUoKTtcclxuICAgICAgICB0b2RvbGlzdExpc3QucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtwcmludFByb2plY3QsIHJlZnJlc2hMaXN0fVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9saXN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==