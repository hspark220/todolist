"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/details/details.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/details/details.css ***!
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* \r\nLayout\r\n*/\r\n\r\n.details {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    padding: 10px;\r\n}\r\n\r\n.details p {\r\n    margin: 0;\r\n    padding: 0;\r\n}", "",{"version":3,"sources":["webpack://./src/details/details.css"],"names":[],"mappings":"AAAA;;CAEC;;AAED;IACI,aAAa;IACb,sBAAsB;;IAEtB,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,UAAU;AACd","sourcesContent":["/* \r\nLayout\r\n*/\r\n\r\n.details {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    padding: 10px;\r\n}\r\n\r\n.details p {\r\n    margin: 0;\r\n    padding: 0;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/inputforms/createEdit.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/inputforms/createEdit.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* \r\ninput forms \r\n*/\r\n#fieldset {\r\n    display: grid;\r\n    grid-template: repeat(5 1fr) / repeat(2 1fr);\r\n    grid-template-areas: \r\n    \"title title\"\r\n    \"project project\"\r\n    \"dueDate dueDate\"\r\n    \"priorty priorty\"\r\n    \"exit submit\";\r\n    padding: 10px;\r\n    margin: 0 auto;\r\n\r\n    width: min(500px, 90%);\r\n}\r\n.title-div {\r\n    grid-area: title;\r\n}\r\n.project-div {\r\n    grid-area: project;\r\n}\r\n.dueDate-div {\r\n    grid-area: dueDate;\r\n}\r\n.priorty-div {\r\n    grid-area: priorty;\r\n}\r\n#exit-form {\r\n    grid-area: exit;\r\n\r\n    /* height: 16px;\r\n    width: 16px; */\r\n}\r\n#create-submit {\r\n    grid-area: submit;\r\n}\r\n#edit-submit {\r\n    grid-area: submit;\r\n}\r\n\r\n#fieldset > div {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n}", "",{"version":3,"sources":["webpack://./src/inputforms/createEdit.css"],"names":[],"mappings":"AAAA;;CAEC;AACD;IACI,aAAa;IACb,4CAA4C;IAC5C;;;;;iBAKa;IACb,aAAa;IACb,cAAc;;IAEd,sBAAsB;AAC1B;AACA;IACI,gBAAgB;AACpB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;;IAEf;kBACc;AAClB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["/* \r\ninput forms \r\n*/\r\n#fieldset {\r\n    display: grid;\r\n    grid-template: repeat(5 1fr) / repeat(2 1fr);\r\n    grid-template-areas: \r\n    \"title title\"\r\n    \"project project\"\r\n    \"dueDate dueDate\"\r\n    \"priorty priorty\"\r\n    \"exit submit\";\r\n    padding: 10px;\r\n    margin: 0 auto;\r\n\r\n    width: min(500px, 90%);\r\n}\r\n.title-div {\r\n    grid-area: title;\r\n}\r\n.project-div {\r\n    grid-area: project;\r\n}\r\n.dueDate-div {\r\n    grid-area: dueDate;\r\n}\r\n.priorty-div {\r\n    grid-area: priorty;\r\n}\r\n#exit-form {\r\n    grid-area: exit;\r\n\r\n    /* height: 16px;\r\n    width: 16px; */\r\n}\r\n#create-submit {\r\n    grid-area: submit;\r\n}\r\n#edit-submit {\r\n    grid-area: submit;\r\n}\r\n\r\n#fieldset > div {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    font-family: Roboto, san-serif;\r\n}\r\n\r\n/* \r\ntemplate layout\r\n*/\r\nbody {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-areas:\r\n    \"project todolist\"\r\n    \"project todolist\";\r\n}\r\n\r\n.projects {\r\n    grid-area: project;\r\n    border: solid;\r\n}\r\n.todolist {\r\n    grid-area: todolist;\r\n    border: solid;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,8BAA8B;AAClC;;AAEA;;CAEC;AACD;IACI,aAAa;IACb,aAAa;IACb,gCAAgC;IAChC;;sBAEkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,aAAa;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,900&display=swap');\r\n\r\n* {\r\n    font-family: Roboto, san-serif;\r\n}\r\n\r\n/* \r\ntemplate layout\r\n*/\r\nbody {\r\n    height: 100vh;\r\n    display: grid;\r\n    grid-template-columns: 300px 1fr;\r\n    grid-template-areas:\r\n    \"project todolist\"\r\n    \"project todolist\";\r\n}\r\n\r\n.projects {\r\n    grid-area: project;\r\n    border: solid;\r\n}\r\n.todolist {\r\n    grid-area: todolist;\r\n    border: solid;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* \r\ntodolist\r\n*/\r\n.todolist {\r\n    padding: 10px;\r\n}\r\n\r\n\r\n/* \r\nlist\r\n*/\r\n.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.list-item {\r\n    display: grid;\r\n    grid-template-columns: 16px 1fr 16px;\r\n    grid-template-areas: \"complete title delete\";\r\n    align-items: center;\r\n    gap: 1rem;\r\n}   \r\n#complete {\r\n    grid-area: complete;\r\n}\r\n.list-title {\r\n    grid-area: title;\r\n}\r\n.list-title:hover {\r\n    cursor: pointer;\r\n}\r\n#delete {\r\n    grid-area: delete;\r\n}\r\n.list-item input {\r\n    height: 16px;\r\n    width: 16px;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/todolist/todolist.css"],"names":[],"mappings":"AAAA;;CAEC;AACD;IACI,aAAa;AACjB;;;AAGA;;CAEC;AACD;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,4CAA4C;IAC5C,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,WAAW;AACf","sourcesContent":["/* \r\ntodolist\r\n*/\r\n.todolist {\r\n    padding: 10px;\r\n}\r\n\r\n\r\n/* \r\nlist\r\n*/\r\n.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.list-item {\r\n    display: grid;\r\n    grid-template-columns: 16px 1fr 16px;\r\n    grid-template-areas: \"complete title delete\";\r\n    align-items: center;\r\n    gap: 1rem;\r\n}   \r\n#complete {\r\n    grid-area: complete;\r\n}\r\n.list-title {\r\n    grid-area: title;\r\n}\r\n.list-title:hover {\r\n    cursor: pointer;\r\n}\r\n#delete {\r\n    grid-area: delete;\r\n}\r\n.list-item input {\r\n    height: 16px;\r\n    width: 16px;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/details/details.css":
/*!*********************************!*\
  !*** ./src/details/details.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_details_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./details.css */ "./node_modules/css-loader/dist/cjs.js!./src/details/details.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_details_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_details_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_details_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_details_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/inputforms/createEdit.css":
/*!***************************************!*\
  !*** ./src/inputforms/createEdit.css ***!
  \***************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_createEdit_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./createEdit.css */ "./node_modules/css-loader/dist/cjs.js!./src/inputforms/createEdit.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_createEdit_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_createEdit_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_createEdit_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_createEdit_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/details/details.js":
/*!********************************!*\
  !*** ./src/details/details.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo/manageTodo */ "./src/todo/manageTodo.js");
/* harmony import */ var _details_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.css */ "./src/details/details.css");



const details = (() => {
    const showTodo = (id) => {
        //const id = e.target.parentNode.id;
        const details = document.querySelector('.details');

        const title = document.createElement('p');
        const project = document.createElement('p');
        const dueDate = document.createElement('p');
        const priorty = document.createElement('p');
        const complete = document.createElement('p');

        if (_todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getTodo(id) != null) {
            title.append(`Title: ${_todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getTitle(id)}`);
            project.append(`Descsription: ${_todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(id)}`);
            dueDate.append(`Due Date: ${_todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getDueDate(id)}`);
            priorty.append(`Priorty: ${_todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getPriorty(id)}`);
        }
        details.append(title, project, dueDate, priorty, complete);

    }

    return { showTodo };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (details);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todolist_todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist/todolist.js */ "./src/todolist/todolist.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _details_details_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./details/details.js */ "./src/details/details.js");




_todolist_todolist_js__WEBPACK_IMPORTED_MODULE_0__["default"].printPage('project1');


/***/ }),

/***/ "./src/inputforms/createEdit.js":
/*!**************************************!*\
  !*** ./src/inputforms/createEdit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo/manageTodo */ "./src/todo/manageTodo.js");
/* harmony import */ var _todolist_todolist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todolist/todolist */ "./src/todolist/todolist.js");
/* harmony import */ var _createEdit_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createEdit.css */ "./src/inputforms/createEdit.css");




const createEdit = (() => {
    const create = () => {
        _createForm();
        const fieldset = document.getElementById('fieldset');
        const createSubmit = document.createElement('input');
        createSubmit.setAttribute('type','button');
        createSubmit.setAttribute('id','create-submit');
        createSubmit.value = 'Submit';

        createSubmit.addEventListener('click', _submitCreate);

        fieldset.append(createSubmit);
    }

    const edit = (e) => {
        const id = e.target.parentNode.id;

        _createForm();
        const fieldset = document.getElementById('fieldset');
        const editSubmit = document.createElement('input');
        editSubmit.setAttribute('type','button');
        editSubmit.setAttribute('id','edit-submit');
        editSubmit.value = 'Submit';

        const titleInput = document.querySelector('#title-input');
        const projectInput = document.querySelector('#project-input');
        const dueDateInput = document.querySelector('#dueDate-input');
        const priortyInput = document.querySelector('#priorty-input');

        titleInput.value = _todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getTitle(id);
        projectInput.value = _todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(id);
        dueDateInput.value = _todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getDueDate(id);
        priortyInput.value = _todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getPriorty(id);

        editSubmit.addEventListener('click', function _submitEdit() {
            _todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].changeTitle(id, titleInput.value);
            _todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].changeProject(id, projectInput.value);
            _todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].changeDueDate(id, dueDateInput.value);
            _todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].changePriorty(id, priortyInput.value);
            _clearForm();
            _todolist_todolist__WEBPACK_IMPORTED_MODULE_1__["default"].updateList();
        });

        fieldset.append(editSubmit);
    }

    const _submitCreate = () => {
        const titleInput = document.querySelector('#title-input');
        const projectInput = document.querySelector('#project-input');
        const dueDateInput = document.querySelector('#dueDate-input');
        const priortyInput = document.querySelector('#priorty-input');

        _todo_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(titleInput.value, projectInput.value, dueDateInput.value, priortyInput.value, false);
        _clearForm();
        _todolist_todolist__WEBPACK_IMPORTED_MODULE_1__["default"].updateList();
    }


    const _clearForm = () => {
        const fieldset = document.getElementById('fieldset');
        fieldset.remove();
    }

    const _createForm = () => {
        const fieldset = document.createElement('fieldset');
        fieldset.setAttribute('id','fieldset');
        
        const titleDiv = document.createElement('div');
        const projectDiv = document.createElement('div');
        const dueDateDiv = document.createElement('div');
        const priortyDiv = document.createElement('div');
        const exitForm = document.createElement('button');

        const titleLabel = document.createElement('label');
        const titleInput = document.createElement('input');
        const projectLabel = document.createElement('label');
        const projectInput = document.createElement('input');
        const dueDateLabel = document.createElement('label');
        const dueDateInput = document.createElement('input');
        const priortyLabel = document.createElement('label');
        const priortyInput = document.createElement('select');
        const optgroup = document.createElement('optgroup');
        const optionLow = document.createElement('option');
        const optionMedium = document.createElement('option');
        const optionHigh = document.createElement('option');

        titleDiv.setAttribute('class','title-div')
        titleLabel.setAttribute('for','title-input');
        titleInput.setAttribute('type','text');
        titleInput.setAttribute('id','title-input');

        projectDiv.setAttribute('class','project-div');
        projectLabel.setAttribute('for','project-input');
        projectInput.setAttribute('type','text');
        projectInput.setAttribute('id','project-input');

        dueDateDiv.setAttribute('class','dueDate-div');
        dueDateLabel.setAttribute('for','dueDate-input');
        dueDateInput.setAttribute('type','date');
        dueDateInput.setAttribute('id','dueDate-input');

        priortyDiv.setAttribute('class','priorty-div');
        priortyLabel.setAttribute('for','priorty-input')
        priortyInput.setAttribute('id','priorty-input');
        optionLow.setAttribute('value','low');
        optionMedium.setAttribute('value','medium');
        optionHigh.setAttribute('value','high');

        exitForm.setAttribute('id','exit-form')
        exitForm.addEventListener('click', _clearForm);
        exitForm.append('Cancel');

        optionLow.append('Low');
        optionMedium.append('Medium');
        optionHigh.append('High');

        titleLabel.append('Title: ');
        projectLabel.append('Project: ')
        dueDateLabel.append('Due Date: ')
        priortyLabel.append('Priorty: ')

        optgroup.append(optionLow, optionMedium, optionHigh);
        priortyInput.append(optgroup);

        priortyDiv.append(priortyLabel, priortyInput);
        dueDateDiv.append(dueDateLabel, dueDateInput);
        projectDiv.append(projectLabel, projectInput);
        titleDiv.append(titleLabel, titleInput);

        fieldset.append(titleDiv, projectDiv, dueDateDiv, priortyDiv, exitForm);

        const todolist = document.querySelector('.todolist');
        todolist.append(fieldset);
        titleInput.focus();
    }

    return {create, edit}

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEdit);

/***/ }),

/***/ "./src/todo/manageTodo.js":
/*!********************************!*\
  !*** ./src/todo/manageTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoStorage.js */ "./src/todo/todoStorage.js");


const manageTodo = (() => {
    //constructor?
    const createTodo = (title, project, dueDate, priorty, complete) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].storeTodo(title, project, dueDate, priorty, complete);
        
    }

    const removeTodo = key => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(key);
    }

    //getters
    const getTodo = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key);
    }

    const getTitle = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key).title;
    }

    const getProject = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key).project;
    }

    const getDueDate = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key).dueDate;
    }

    const getPriorty = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key).priorty;
    }

    const getComplete = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key).complete;
    }

    const getLength = () => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodoLength();
    }

    //changers
    const  changeTitle = (key, newTitle) => {
        const todo = _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key);
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(key, newTitle, todo.project, todo.dueDate, todo.priorty, todo.complete);
    }

    const changeProject = (key, newProject) => {
        const todo = _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key);
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(key, todo.title, newProject, todo.dueDate, todo.priorty, todo.complete);
    }

    const changeDueDate = (key, newDueDate) => {
        const todo = _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key);
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(key, todo.title, todo.project, newDueDate, todo.priorty, todo.complete);
    }

    const changePriorty = (key, newPriorty) => {
        const todo = _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key);
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(key, todo.title, todo.project, todo.dueDate, newPriorty, todo.complete);
    }

    const changeComplete = (key) => {
        const todo = _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key);
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTodo(key, todo.title, todo.project, todo.dueDate, todo.priorty, !todo.complete);
    }




    return {
        //constructor and remover?
        createTodo, removeTodo,
        //getter
        getTodo, getTitle, getProject, getDueDate, getPriorty, getComplete, getLength,
        //changer
        changeTitle, changeProject, changeDueDate, changePriorty, changeComplete

    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manageTodo);

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
const todo = (title, project, dueDate, priorty, complete) => {

    return {
        title, project, dueDate, priorty, complete
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);

/***/ }),

/***/ "./src/todo/todoProjects.js":
/*!**********************************!*\
  !*** ./src/todo/todoProjects.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manageTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageTodo */ "./src/todo/manageTodo.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo/todo.js");



const todoProjects = (() => {
    const getList = projectName => {
        const todos = [];
        for(let i = 0; i < _manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getLength(); i++) {
            _todo__WEBPACK_IMPORTED_MODULE_1__["default"] = _manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getTodo(i);
            try {
                if (_todo__WEBPACK_IMPORTED_MODULE_1__["default"].getProject() === projectName) {
                    todos.push(_todo__WEBPACK_IMPORTED_MODULE_1__["default"]);
                }
            } catch {
                continue
            }
        }
        return todos;

    }

    return {getList}

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoProjects);

/***/ }),

/***/ "./src/todo/todoStorage.js":
/*!*********************************!*\
  !*** ./src/todo/todoStorage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo/todo.js");
// 
// function for storing and retrieving todos
// 


const todoStorage = (() => {
    //store
    const storeTodo = (title, project, dueDate, priorty, complete) => {
        if(localStorage.getItem(title) != null) {
            //cause an error?
            console.log('duplicate todo...');
            return
        }
        const tempTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, project, dueDate, priorty, complete);
        localStorage.setItem(title,JSON.stringify(tempTodo));
    }

    //store project list
    const storeProjects = (newProject) => {
        try {
            projectList = JSON.parse(localStorage.getItem('__projectlist__'));
            projectList.push(newProject);
        } catch {
            projectList = [newProject];
        }
        localStorage.setItem('__projectlist__',JSON.stringify(newProject));
    }

    //delete
    const deleteTodo = key => {
        localStorage.removeItem(localStorage.key(key));    
    }

    //retrieve
    const retrieveTodo = key => {
        try {
            const todo = JSON.parse(localStorage.getItem(localStorage.key(key)));
            return todo;
        } catch {
            return null;
        }
        
    }

    const retrieveProjects = () => {
        try {
            return JSON.parse(localStorage.getItem('__projectlist__'))    
        } catch {
            return;
        }
        
    }

    const retrieveTodoLength = () => {
        return localStorage.length;
    }

    //update
    const updateTodo = (key, title, project, dueDate, priorty, complete) => {
        const tempTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, project, dueDate, priorty, complete);
        localStorage.removeItem(localStorage.key(key));
        localStorage.setItem(title,JSON.stringify(tempTodo));
    }

    return {
        storeTodo, deleteTodo, updateTodo, retrieveTodo, storeProjects, retrieveProjects, retrieveTodoLength
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoStorage);

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
/* harmony import */ var _inputforms_createEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../inputforms/createEdit */ "./src/inputforms/createEdit.js");
/* harmony import */ var _todo_manageTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo/manageTodo */ "./src/todo/manageTodo.js");
/* harmony import */ var _todo_todoProjects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo/todoProjects */ "./src/todo/todoProjects.js");
/* harmony import */ var _todolist_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todolist.css */ "./src/todolist/todolist.css");





const todolist = (() => {
    
    const _makeList = (projectName) => {
        const list = document.createElement('div');
        list.setAttribute('class','list');
        let i = 0;
        const todos = _todo_todoProjects__WEBPACK_IMPORTED_MODULE_2__["default"].getList(projectName);
        for(const todo in todos) {
            _makeTodo(i, list);
            i++;
        }
        return list;
    }
    
    const _makeTodo = (key, div) => {
        const todoDiv = document.createElement('div');
        const title = document.createElement('p');

        todoDiv.setAttribute('id', key);
        todoDiv.setAttribute('class','list-item')

        title.setAttribute('class','list-title');
        title.innerHTML = `${_todo_manageTodo__WEBPACK_IMPORTED_MODULE_1__["default"].getTitle(key)} (${_todo_manageTodo__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(key)})`;
        
        title.style.textDecoration = _todo_manageTodo__WEBPACK_IMPORTED_MODULE_1__["default"].getComplete(key) === true ? 'line-through' :'none';
        

        const buttons = _makeTodoButtons();

        todoDiv.append(title, buttons[0], buttons[1]);
        div.append(todoDiv);

        title.addEventListener('click', _edit);

        
    }

    const _makeTodoButtons = () => {
        const completeBtn = document.createElement('input');
        completeBtn.setAttribute('type','button');
        completeBtn.setAttribute('id','complete');

        const removeBtn = document.createElement('input');
        removeBtn.setAttribute('type','button');
        removeBtn.setAttribute('id','delete');

        completeBtn.addEventListener('click', _completeBtn);
        removeBtn.addEventListener('click', _removeBtn);

        return [completeBtn, removeBtn];
    }

    const _makeCreateButton = () => {
        const createBtn = document.createElement('button');
        createBtn.setAttribute('id','create');

        createBtn.addEventListener('click',_createBtn);
        createBtn.append('Add');

        return createBtn;
    }

    const _completeBtn = (e) => {
        const id = e.target.parentNode.id;
        _todo_manageTodo__WEBPACK_IMPORTED_MODULE_1__["default"].changeComplete(id);
        console.log(_todo_manageTodo__WEBPACK_IMPORTED_MODULE_1__["default"].getComplete(id));
        updateList();
    }

    const _removeBtn = (e) => {
        const id = e.target.parentNode.id;
        _todo_manageTodo__WEBPACK_IMPORTED_MODULE_1__["default"].removeTodo(id);
        updateList();
    }

    const _createBtn = () => {
        _inputforms_createEdit__WEBPACK_IMPORTED_MODULE_0__["default"].create();
    }

    const _edit = (e) => {
        _inputforms_createEdit__WEBPACK_IMPORTED_MODULE_0__["default"].edit(e);
    }

    const updateList = () => {
        const main = document.querySelector('.todolist');
        main.removeChild(main.lastChild);
        const list = _makeList();

        main.append(list);
        
    }

    const printPage = (projectName) => {
        const main = document.querySelector('.todolist');
        const list = _makeList(projectName);
        const createBtn = _makeCreateButton();
    
        main.append(createBtn, list);
    }

    return { printPage, updateList }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todolist);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSx5QkFBeUIsb0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFd0I7QUFDTjtBQUNJO0FBQ3hCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtFQUFvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsaUVBQW1CLE9BQU8sR0FBRyxtRUFBcUIsTUFBTTtBQUNyRjtBQUNBLHFDQUFxQyxvRUFBc0I7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1RUFBeUI7QUFDakMsb0JBQW9CLG9FQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtRUFBcUI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFFQUFpQjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1FQUFlO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDtBQUNBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kZXRhaWxzL2RldGFpbHMuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2lucHV0Zm9ybXMvY3JlYXRlRWRpdC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9saXN0L3RvZG9saXN0LmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9kZXRhaWxzL2RldGFpbHMuY3NzPzc0YTEiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5wdXRmb3Jtcy9jcmVhdGVFZGl0LmNzcz81MDhjIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9saXN0L3RvZG9saXN0LmNzcz9kOTFjIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZGV0YWlscy9kZXRhaWxzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2lucHV0Zm9ybXMvY3JlYXRlRWRpdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvL21hbmFnZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby90b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8vdG9kb1Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8vdG9kb1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb2xpc3QvdG9kb2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBcXHJcXG5MYXlvdXRcXHJcXG4qL1xcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2RldGFpbHMvZGV0YWlscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBRUM7O0FBRUQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztJQUV0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBcXHJcXG5MYXlvdXRcXHJcXG4qL1xcclxcblxcclxcbi5kZXRhaWxzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbHMgcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogXFxyXFxuaW5wdXQgZm9ybXMgXFxyXFxuKi9cXHJcXG4jZmllbGRzZXQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNSAxZnIpIC8gcmVwZWF0KDIgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJ0aXRsZSB0aXRsZVxcXCJcXHJcXG4gICAgXFxcInByb2plY3QgcHJvamVjdFxcXCJcXHJcXG4gICAgXFxcImR1ZURhdGUgZHVlRGF0ZVxcXCJcXHJcXG4gICAgXFxcInByaW9ydHkgcHJpb3J0eVxcXCJcXHJcXG4gICAgXFxcImV4aXQgc3VibWl0XFxcIjtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuXFxyXFxuICAgIHdpZHRoOiBtaW4oNTAwcHgsIDkwJSk7XFxyXFxufVxcclxcbi50aXRsZS1kaXYge1xcclxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcclxcbn1cXHJcXG4ucHJvamVjdC1kaXYge1xcclxcbiAgICBncmlkLWFyZWE6IHByb2plY3Q7XFxyXFxufVxcclxcbi5kdWVEYXRlLWRpdiB7XFxyXFxuICAgIGdyaWQtYXJlYTogZHVlRGF0ZTtcXHJcXG59XFxyXFxuLnByaW9ydHktZGl2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcnR5O1xcclxcbn1cXHJcXG4jZXhpdC1mb3JtIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBleGl0O1xcclxcblxcclxcbiAgICAvKiBoZWlnaHQ6IDE2cHg7XFxyXFxuICAgIHdpZHRoOiAxNnB4OyAqL1xcclxcbn1cXHJcXG4jY3JlYXRlLXN1Ym1pdCB7XFxyXFxuICAgIGdyaWQtYXJlYTogc3VibWl0O1xcclxcbn1cXHJcXG4jZWRpdC1zdWJtaXQge1xcclxcbiAgICBncmlkLWFyZWE6IHN1Ym1pdDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZpZWxkc2V0ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5wdXRmb3Jtcy9jcmVhdGVFZGl0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FFQztBQUNEO0lBQ0ksYUFBYTtJQUNiLDRDQUE0QztJQUM1Qzs7Ozs7aUJBS2E7SUFDYixhQUFhO0lBQ2IsY0FBYzs7SUFFZCxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTs7SUFFZjtrQkFDYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFxcclxcbmlucHV0IGZvcm1zIFxcclxcbiovXFxyXFxuI2ZpZWxkc2V0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDUgMWZyKSAvIHJlcGVhdCgyIDFmcik7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwidGl0bGUgdGl0bGVcXFwiXFxyXFxuICAgIFxcXCJwcm9qZWN0IHByb2plY3RcXFwiXFxyXFxuICAgIFxcXCJkdWVEYXRlIGR1ZURhdGVcXFwiXFxyXFxuICAgIFxcXCJwcmlvcnR5IHByaW9ydHlcXFwiXFxyXFxuICAgIFxcXCJleGl0IHN1Ym1pdFxcXCI7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcblxcclxcbiAgICB3aWR0aDogbWluKDUwMHB4LCA5MCUpO1xcclxcbn1cXHJcXG4udGl0bGUtZGl2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXHJcXG59XFxyXFxuLnByb2plY3QtZGl2IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xcclxcbn1cXHJcXG4uZHVlRGF0ZS1kaXYge1xcclxcbiAgICBncmlkLWFyZWE6IGR1ZURhdGU7XFxyXFxufVxcclxcbi5wcmlvcnR5LWRpdiB7XFxyXFxuICAgIGdyaWQtYXJlYTogcHJpb3J0eTtcXHJcXG59XFxyXFxuI2V4aXQtZm9ybSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZXhpdDtcXHJcXG5cXHJcXG4gICAgLyogaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTZweDsgKi9cXHJcXG59XFxyXFxuI2NyZWF0ZS1zdWJtaXQge1xcclxcbiAgICBncmlkLWFyZWE6IHN1Ym1pdDtcXHJcXG59XFxyXFxuI2VkaXQtc3VibWl0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzdWJtaXQ7XFxyXFxufVxcclxcblxcclxcbiNmaWVsZHNldCA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2FuLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG50ZW1wbGF0ZSBsYXlvdXRcXHJcXG4qL1xcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcInByb2plY3QgdG9kb2xpc3RcXFwiXFxyXFxuICAgIFxcXCJwcm9qZWN0IHRvZG9saXN0XFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwcm9qZWN0O1xcclxcbiAgICBib3JkZXI6IHNvbGlkO1xcclxcbn1cXHJcXG4udG9kb2xpc3Qge1xcclxcbiAgICBncmlkLWFyZWE6IHRvZG9saXN0O1xcclxcbiAgICBib3JkZXI6IHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBOztDQUVDO0FBQ0Q7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdDQUFnQztJQUNoQzs7c0JBRWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbi1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLyogXFxyXFxudGVtcGxhdGUgbGF5b3V0XFxyXFxuKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMDBweCAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJwcm9qZWN0IHRvZG9saXN0XFxcIlxcclxcbiAgICBcXFwicHJvamVjdCB0b2RvbGlzdFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICAgIGdyaWQtYXJlYTogcHJvamVjdDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZDtcXHJcXG59XFxyXFxuLnRvZG9saXN0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0b2RvbGlzdDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogXFxyXFxudG9kb2xpc3RcXHJcXG4qL1xcclxcbi50b2RvbGlzdCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFxcclxcbmxpc3RcXHJcXG4qL1xcclxcbi5saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmxpc3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZweCAxZnIgMTZweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNvbXBsZXRlIHRpdGxlIGRlbGV0ZVxcXCI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59ICAgXFxyXFxuI2NvbXBsZXRlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjb21wbGV0ZTtcXHJcXG59XFxyXFxuLmxpc3QtdGl0bGUge1xcclxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcclxcbn1cXHJcXG4ubGlzdC10aXRsZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI2RlbGV0ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcclxcbn1cXHJcXG4ubGlzdC1pdGVtIGlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvZG9saXN0L3RvZG9saXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FFQztBQUNEO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7O0NBRUM7QUFDRDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsNENBQTRDO0lBQzVDLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogXFxyXFxudG9kb2xpc3RcXHJcXG4qL1xcclxcbi50b2RvbGlzdCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFxcclxcbmxpc3RcXHJcXG4qL1xcclxcbi5saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmxpc3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZweCAxZnIgMTZweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNvbXBsZXRlIHRpdGxlIGRlbGV0ZVxcXCI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59ICAgXFxyXFxuI2NvbXBsZXRlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjb21wbGV0ZTtcXHJcXG59XFxyXFxuLmxpc3QtdGl0bGUge1xcclxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcclxcbn1cXHJcXG4ubGlzdC10aXRsZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuI2RlbGV0ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcclxcbn1cXHJcXG4ubGlzdC1pdGVtIGlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGV0YWlscy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RldGFpbHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NyZWF0ZUVkaXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jcmVhdGVFZGl0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9saXN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgbWFuYWdlVG9kbyBmcm9tIFwiLi4vdG9kby9tYW5hZ2VUb2RvXCI7XHJcbmltcG9ydCAnLi9kZXRhaWxzLmNzcyc7XHJcblxyXG5jb25zdCBkZXRhaWxzID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHNob3dUb2RvID0gKGlkKSA9PiB7XHJcbiAgICAgICAgLy9jb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XHJcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXRhaWxzJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBwcmlvcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgICAgICBpZiAobWFuYWdlVG9kby5nZXRUb2RvKGlkKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRpdGxlLmFwcGVuZChgVGl0bGU6ICR7bWFuYWdlVG9kby5nZXRUaXRsZShpZCl9YCk7XHJcbiAgICAgICAgICAgIHByb2plY3QuYXBwZW5kKGBEZXNjc3JpcHRpb246ICR7bWFuYWdlVG9kby5nZXRQcm9qZWN0KGlkKX1gKTtcclxuICAgICAgICAgICAgZHVlRGF0ZS5hcHBlbmQoYER1ZSBEYXRlOiAke21hbmFnZVRvZG8uZ2V0RHVlRGF0ZShpZCl9YCk7XHJcbiAgICAgICAgICAgIHByaW9ydHkuYXBwZW5kKGBQcmlvcnR5OiAke21hbmFnZVRvZG8uZ2V0UHJpb3J0eShpZCl9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRldGFpbHMuYXBwZW5kKHRpdGxlLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcnR5LCBjb21wbGV0ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHNob3dUb2RvIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxzOyIsImltcG9ydCB0b2RvbGlzdCBmcm9tICcuL3RvZG9saXN0L3RvZG9saXN0LmpzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBkZXRhaWxzIGZyb20gJy4vZGV0YWlscy9kZXRhaWxzLmpzJztcclxuXHJcbnRvZG9saXN0LnByaW50UGFnZSgncHJvamVjdDEnKTtcclxuIiwiaW1wb3J0IG1hbmFnZVRvZG8gZnJvbSBcIi4uL3RvZG8vbWFuYWdlVG9kb1wiO1xyXG5pbXBvcnQgdG9kb2xpc3QgZnJvbSBcIi4uL3RvZG9saXN0L3RvZG9saXN0XCI7XHJcbmltcG9ydCAnLi9jcmVhdGVFZGl0LmNzcydcclxuXHJcbmNvbnN0IGNyZWF0ZUVkaXQgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgY3JlYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIF9jcmVhdGVGb3JtKCk7XHJcbiAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGRzZXQnKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNyZWF0ZVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgICAgICBjcmVhdGVTdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsJ2NyZWF0ZS1zdWJtaXQnKTtcclxuICAgICAgICBjcmVhdGVTdWJtaXQudmFsdWUgPSAnU3VibWl0JztcclxuXHJcbiAgICAgICAgY3JlYXRlU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3N1Ym1pdENyZWF0ZSk7XHJcblxyXG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZChjcmVhdGVTdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVkaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcclxuXHJcbiAgICAgICAgX2NyZWF0ZUZvcm0oKTtcclxuICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZHNldCcpO1xyXG4gICAgICAgIGNvbnN0IGVkaXRTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGVkaXRTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgZWRpdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ2lkJywnZWRpdC1zdWJtaXQnKTtcclxuICAgICAgICBlZGl0U3VibWl0LnZhbHVlID0gJ1N1Ym1pdCc7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUtaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlLWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgcHJpb3J0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9ydHktaW5wdXQnKTtcclxuXHJcbiAgICAgICAgdGl0bGVJbnB1dC52YWx1ZSA9IG1hbmFnZVRvZG8uZ2V0VGl0bGUoaWQpO1xyXG4gICAgICAgIHByb2plY3RJbnB1dC52YWx1ZSA9IG1hbmFnZVRvZG8uZ2V0UHJvamVjdChpZCk7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnZhbHVlID0gbWFuYWdlVG9kby5nZXREdWVEYXRlKGlkKTtcclxuICAgICAgICBwcmlvcnR5SW5wdXQudmFsdWUgPSBtYW5hZ2VUb2RvLmdldFByaW9ydHkoaWQpO1xyXG5cclxuICAgICAgICBlZGl0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gX3N1Ym1pdEVkaXQoKSB7XHJcbiAgICAgICAgICAgIG1hbmFnZVRvZG8uY2hhbmdlVGl0bGUoaWQsIHRpdGxlSW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICBtYW5hZ2VUb2RvLmNoYW5nZVByb2plY3QoaWQsIHByb2plY3RJbnB1dC52YWx1ZSk7XHJcbiAgICAgICAgICAgIG1hbmFnZVRvZG8uY2hhbmdlRHVlRGF0ZShpZCwgZHVlRGF0ZUlucHV0LnZhbHVlKTtcclxuICAgICAgICAgICAgbWFuYWdlVG9kby5jaGFuZ2VQcmlvcnR5KGlkLCBwcmlvcnR5SW5wdXQudmFsdWUpO1xyXG4gICAgICAgICAgICBfY2xlYXJGb3JtKCk7XHJcbiAgICAgICAgICAgIHRvZG9saXN0LnVwZGF0ZUxpc3QoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZmllbGRzZXQuYXBwZW5kKGVkaXRTdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9zdWJtaXRDcmVhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUtaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBwcmlvcnR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3J0eS1pbnB1dCcpO1xyXG5cclxuICAgICAgICBtYW5hZ2VUb2RvLmNyZWF0ZVRvZG8odGl0bGVJbnB1dC52YWx1ZSwgcHJvamVjdElucHV0LnZhbHVlLCBkdWVEYXRlSW5wdXQudmFsdWUsIHByaW9ydHlJbnB1dC52YWx1ZSwgZmFsc2UpO1xyXG4gICAgICAgIF9jbGVhckZvcm0oKTtcclxuICAgICAgICB0b2RvbGlzdC51cGRhdGVMaXN0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IF9jbGVhckZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGRzZXQnKTtcclxuICAgICAgICBmaWVsZHNldC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfY3JlYXRlRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgZmllbGRzZXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHByaW9ydHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBleGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IHByaW9ydHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgcHJpb3J0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XHJcbiAgICAgICAgY29uc3Qgb3B0Z3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRncm91cCcpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbk1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbkhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuXHJcbiAgICAgICAgdGl0bGVEaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RpdGxlLWRpdicpXHJcbiAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RpdGxlLWlucHV0Jyk7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUtaW5wdXQnKTtcclxuXHJcbiAgICAgICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJvamVjdC1kaXYnKTtcclxuICAgICAgICBwcm9qZWN0TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcm9qZWN0LWlucHV0Jyk7XHJcbiAgICAgICAgcHJvamVjdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcclxuICAgICAgICBwcm9qZWN0SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3Byb2plY3QtaW5wdXQnKTtcclxuXHJcbiAgICAgICAgZHVlRGF0ZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZHVlRGF0ZS1kaXYnKTtcclxuICAgICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkdWVEYXRlLWlucHV0Jyk7XHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcclxuICAgICAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2R1ZURhdGUtaW5wdXQnKTtcclxuXHJcbiAgICAgICAgcHJpb3J0eURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJpb3J0eS1kaXYnKTtcclxuICAgICAgICBwcmlvcnR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcmlvcnR5LWlucHV0JylcclxuICAgICAgICBwcmlvcnR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3ByaW9ydHktaW5wdXQnKTtcclxuICAgICAgICBvcHRpb25Mb3cuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ2xvdycpO1xyXG4gICAgICAgIG9wdGlvbk1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbWVkaXVtJyk7XHJcbiAgICAgICAgb3B0aW9uSGlnaC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnaGlnaCcpO1xyXG5cclxuICAgICAgICBleGl0Rm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywnZXhpdC1mb3JtJylcclxuICAgICAgICBleGl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jbGVhckZvcm0pO1xyXG4gICAgICAgIGV4aXRGb3JtLmFwcGVuZCgnQ2FuY2VsJyk7XHJcblxyXG4gICAgICAgIG9wdGlvbkxvdy5hcHBlbmQoJ0xvdycpO1xyXG4gICAgICAgIG9wdGlvbk1lZGl1bS5hcHBlbmQoJ01lZGl1bScpO1xyXG4gICAgICAgIG9wdGlvbkhpZ2guYXBwZW5kKCdIaWdoJyk7XHJcblxyXG4gICAgICAgIHRpdGxlTGFiZWwuYXBwZW5kKCdUaXRsZTogJyk7XHJcbiAgICAgICAgcHJvamVjdExhYmVsLmFwcGVuZCgnUHJvamVjdDogJylcclxuICAgICAgICBkdWVEYXRlTGFiZWwuYXBwZW5kKCdEdWUgRGF0ZTogJylcclxuICAgICAgICBwcmlvcnR5TGFiZWwuYXBwZW5kKCdQcmlvcnR5OiAnKVxyXG5cclxuICAgICAgICBvcHRncm91cC5hcHBlbmQob3B0aW9uTG93LCBvcHRpb25NZWRpdW0sIG9wdGlvbkhpZ2gpO1xyXG4gICAgICAgIHByaW9ydHlJbnB1dC5hcHBlbmQob3B0Z3JvdXApO1xyXG5cclxuICAgICAgICBwcmlvcnR5RGl2LmFwcGVuZChwcmlvcnR5TGFiZWwsIHByaW9ydHlJbnB1dCk7XHJcbiAgICAgICAgZHVlRGF0ZURpdi5hcHBlbmQoZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQpO1xyXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kKHByb2plY3RMYWJlbCwgcHJvamVjdElucHV0KTtcclxuICAgICAgICB0aXRsZURpdi5hcHBlbmQodGl0bGVMYWJlbCwgdGl0bGVJbnB1dCk7XHJcblxyXG4gICAgICAgIGZpZWxkc2V0LmFwcGVuZCh0aXRsZURpdiwgcHJvamVjdERpdiwgZHVlRGF0ZURpdiwgcHJpb3J0eURpdiwgZXhpdEZvcm0pO1xyXG5cclxuICAgICAgICBjb25zdCB0b2RvbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIHRvZG9saXN0LmFwcGVuZChmaWVsZHNldCk7XHJcbiAgICAgICAgdGl0bGVJbnB1dC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7Y3JlYXRlLCBlZGl0fVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUVkaXQ7IiwiaW1wb3J0IHRvZG9TdG9yYWdlIGZyb20gJy4vdG9kb1N0b3JhZ2UuanMnO1xyXG5cclxuY29uc3QgbWFuYWdlVG9kbyA9ICgoKSA9PiB7XHJcbiAgICAvL2NvbnN0cnVjdG9yP1xyXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9ICh0aXRsZSwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3J0eSwgY29tcGxldGUpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS5zdG9yZVRvZG8odGl0bGUsIHByb2plY3QsIGR1ZURhdGUsIHByaW9ydHksIGNvbXBsZXRlKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS5kZWxldGVUb2RvKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXR0ZXJzXHJcbiAgICBjb25zdCBnZXRUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVRvZG8oa2V5KS50aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0ID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvKGtleSkucHJvamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREdWVEYXRlID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvKGtleSkuZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcmlvcnR5ID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvKGtleSkucHJpb3J0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDb21wbGV0ZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlVG9kbyhrZXkpLmNvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldExlbmd0aCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvTGVuZ3RoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGFuZ2Vyc1xyXG4gICAgY29uc3QgIGNoYW5nZVRpdGxlID0gKGtleSwgbmV3VGl0bGUpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvID0gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvKGtleSk7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlVG9kbyhrZXksIG5ld1RpdGxlLCB0b2RvLnByb2plY3QsIHRvZG8uZHVlRGF0ZSwgdG9kby5wcmlvcnR5LCB0b2RvLmNvbXBsZXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VQcm9qZWN0ID0gKGtleSwgbmV3UHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG8gPSB0b2RvU3RvcmFnZS5yZXRyaWV2ZVRvZG8oa2V5KTtcclxuICAgICAgICB0b2RvU3RvcmFnZS51cGRhdGVUb2RvKGtleSwgdG9kby50aXRsZSwgbmV3UHJvamVjdCwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9ydHksIHRvZG8uY29tcGxldGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUR1ZURhdGUgPSAoa2V5LCBuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kbyA9IHRvZG9TdG9yYWdlLnJldHJpZXZlVG9kbyhrZXkpO1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZVRvZG8oa2V5LCB0b2RvLnRpdGxlLCB0b2RvLnByb2plY3QsIG5ld0R1ZURhdGUsIHRvZG8ucHJpb3J0eSwgdG9kby5jb21wbGV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUHJpb3J0eSA9IChrZXksIG5ld1ByaW9ydHkpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvID0gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvKGtleSk7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlVG9kbyhrZXksIHRvZG8udGl0bGUsIHRvZG8ucHJvamVjdCwgdG9kby5kdWVEYXRlLCBuZXdQcmlvcnR5LCB0b2RvLmNvbXBsZXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDb21wbGV0ZSA9IChrZXkpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvID0gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvKGtleSk7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlVG9kbyhrZXksIHRvZG8udGl0bGUsIHRvZG8ucHJvamVjdCwgdG9kby5kdWVEYXRlLCB0b2RvLnByaW9ydHksICF0b2RvLmNvbXBsZXRlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vY29uc3RydWN0b3IgYW5kIHJlbW92ZXI/XHJcbiAgICAgICAgY3JlYXRlVG9kbywgcmVtb3ZlVG9kbyxcclxuICAgICAgICAvL2dldHRlclxyXG4gICAgICAgIGdldFRvZG8sIGdldFRpdGxlLCBnZXRQcm9qZWN0LCBnZXREdWVEYXRlLCBnZXRQcmlvcnR5LCBnZXRDb21wbGV0ZSwgZ2V0TGVuZ3RoLFxyXG4gICAgICAgIC8vY2hhbmdlclxyXG4gICAgICAgIGNoYW5nZVRpdGxlLCBjaGFuZ2VQcm9qZWN0LCBjaGFuZ2VEdWVEYXRlLCBjaGFuZ2VQcmlvcnR5LCBjaGFuZ2VDb21wbGV0ZVxyXG5cclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hbmFnZVRvZG87IiwiY29uc3QgdG9kbyA9ICh0aXRsZSwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3J0eSwgY29tcGxldGUpID0+IHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcnR5LCBjb21wbGV0ZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvOyIsImltcG9ydCBtYW5hZ2VUb2RvIGZyb20gXCIuL21hbmFnZVRvZG9cIjtcclxuaW1wb3J0IHRvZG8gZnJvbSBcIi4vdG9kb1wiO1xyXG5cclxuY29uc3QgdG9kb1Byb2plY3RzID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGdldExpc3QgPSBwcm9qZWN0TmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb3MgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWFuYWdlVG9kby5nZXRMZW5ndGgoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRvZG8gPSBtYW5hZ2VUb2RvLmdldFRvZG8oaSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9kby5nZXRQcm9qZWN0KCkgPT09IHByb2plY3ROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9kb3MucHVzaCh0b2RvKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b2RvcztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtnZXRMaXN0fVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9Qcm9qZWN0czsiLCIvLyBcclxuLy8gZnVuY3Rpb24gZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmcgdG9kb3NcclxuLy8gXHJcbmltcG9ydCB0b2RvIGZyb20gJy4vdG9kby5qcyc7XHJcblxyXG5jb25zdCB0b2RvU3RvcmFnZSA9ICgoKSA9PiB7XHJcbiAgICAvL3N0b3JlXHJcbiAgICBjb25zdCBzdG9yZVRvZG8gPSAodGl0bGUsIHByb2plY3QsIGR1ZURhdGUsIHByaW9ydHksIGNvbXBsZXRlKSA9PiB7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0odGl0bGUpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy9jYXVzZSBhbiBlcnJvcj9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2R1cGxpY2F0ZSB0b2RvLi4uJyk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0ZW1wVG9kbyA9IHRvZG8odGl0bGUsIHByb2plY3QsIGR1ZURhdGUsIHByaW9ydHksIGNvbXBsZXRlKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aXRsZSxKU09OLnN0cmluZ2lmeSh0ZW1wVG9kbykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc3RvcmUgcHJvamVjdCBsaXN0XHJcbiAgICBjb25zdCBzdG9yZVByb2plY3RzID0gKG5ld1Byb2plY3QpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ19fcHJvamVjdGxpc3RfXycpKTtcclxuICAgICAgICAgICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcHJvamVjdExpc3QgPSBbbmV3UHJvamVjdF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdfX3Byb2plY3RsaXN0X18nLEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZVxyXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGtleSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlLmtleShrZXkpKTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy9yZXRyaWV2ZVxyXG4gICAgY29uc3QgcmV0cmlldmVUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShsb2NhbFN0b3JhZ2Uua2V5KGtleSkpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvZG87XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZVByb2plY3RzID0gKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdfX3Byb2plY3RsaXN0X18nKSkgICAgXHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVUb2RvTGVuZ3RoID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdXBkYXRlXHJcbiAgICBjb25zdCB1cGRhdGVUb2RvID0gKGtleSwgdGl0bGUsIHByb2plY3QsIGR1ZURhdGUsIHByaW9ydHksIGNvbXBsZXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcFRvZG8gPSB0b2RvKHRpdGxlLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcnR5LCBjb21wbGV0ZSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0obG9jYWxTdG9yYWdlLmtleShrZXkpKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aXRsZSxKU09OLnN0cmluZ2lmeSh0ZW1wVG9kbykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RvcmVUb2RvLCBkZWxldGVUb2RvLCB1cGRhdGVUb2RvLCByZXRyaWV2ZVRvZG8sIHN0b3JlUHJvamVjdHMsIHJldHJpZXZlUHJvamVjdHMsIHJldHJpZXZlVG9kb0xlbmd0aFxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9TdG9yYWdlOyIsImltcG9ydCBjcmVhdGVFZGl0IGZyb20gXCIuLi9pbnB1dGZvcm1zL2NyZWF0ZUVkaXRcIjtcclxuaW1wb3J0IG1hbmFnZVRvZG8gZnJvbSBcIi4uL3RvZG8vbWFuYWdlVG9kb1wiO1xyXG5pbXBvcnQgdG9kb1Byb2plY3RzIGZyb20gXCIuLi90b2RvL3RvZG9Qcm9qZWN0c1wiO1xyXG5pbXBvcnQgJy4vdG9kb2xpc3QuY3NzJztcclxuXHJcbmNvbnN0IHRvZG9saXN0ID0gKCgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgX21ha2VMaXN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3QnKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgY29uc3QgdG9kb3MgPSB0b2RvUHJvamVjdHMuZ2V0TGlzdChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgZm9yKGNvbnN0IHRvZG8gaW4gdG9kb3MpIHtcclxuICAgICAgICAgICAgX21ha2VUb2RvKGksIGxpc3QpO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBfbWFrZVRvZG8gPSAoa2V5LCBkaXYpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgIHRvZG9EaXYuc2V0QXR0cmlidXRlKCdpZCcsIGtleSk7XHJcbiAgICAgICAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdC1pdGVtJylcclxuXHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3QtdGl0bGUnKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBgJHttYW5hZ2VUb2RvLmdldFRpdGxlKGtleSl9ICgke21hbmFnZVRvZG8uZ2V0UHJvamVjdChrZXkpfSlgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gbWFuYWdlVG9kby5nZXRDb21wbGV0ZShrZXkpID09PSB0cnVlID8gJ2xpbmUtdGhyb3VnaCcgOidub25lJztcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IF9tYWtlVG9kb0J1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQodGl0bGUsIGJ1dHRvbnNbMF0sIGJ1dHRvbnNbMV0pO1xyXG4gICAgICAgIGRpdi5hcHBlbmQodG9kb0Rpdik7XHJcblxyXG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2VkaXQpO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfbWFrZVRvZG9CdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb21wbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgICAgICBjb21wbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcGxldGUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgcmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdkZWxldGUnKTtcclxuXHJcbiAgICAgICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfY29tcGxldGVCdG4pO1xyXG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9yZW1vdmVCdG4pO1xyXG5cclxuICAgICAgICByZXR1cm4gW2NvbXBsZXRlQnRuLCByZW1vdmVCdG5dO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9tYWtlQ3JlYXRlQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGNyZWF0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnY3JlYXRlJyk7XHJcblxyXG4gICAgICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsX2NyZWF0ZUJ0bik7XHJcbiAgICAgICAgY3JlYXRlQnRuLmFwcGVuZCgnQWRkJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBjcmVhdGVCdG47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2NvbXBsZXRlQnRuID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XHJcbiAgICAgICAgbWFuYWdlVG9kby5jaGFuZ2VDb21wbGV0ZShpZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWFuYWdlVG9kby5nZXRDb21wbGV0ZShpZCkpO1xyXG4gICAgICAgIHVwZGF0ZUxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfcmVtb3ZlQnRuID0gKGUpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XHJcbiAgICAgICAgbWFuYWdlVG9kby5yZW1vdmVUb2RvKGlkKTtcclxuICAgICAgICB1cGRhdGVMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZUJ0biA9ICgpID0+IHtcclxuICAgICAgICBjcmVhdGVFZGl0LmNyZWF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9lZGl0ID0gKGUpID0+IHtcclxuICAgICAgICBjcmVhdGVFZGl0LmVkaXQoZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlTGlzdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9saXN0Jyk7XHJcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IF9tYWtlTGlzdCgpO1xyXG5cclxuICAgICAgICBtYWluLmFwcGVuZChsaXN0KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmludFBhZ2UgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9saXN0Jyk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IF9tYWtlTGlzdChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQnRuID0gX21ha2VDcmVhdGVCdXR0b24oKTtcclxuICAgIFxyXG4gICAgICAgIG1haW4uYXBwZW5kKGNyZWF0ZUJ0biwgbGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcHJpbnRQYWdlLCB1cGRhdGVMaXN0IH1cclxufSkoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb2xpc3Q7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9