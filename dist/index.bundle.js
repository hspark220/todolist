"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --icon-color: #a1a1aa;\r\n\r\n}\r\n\r\n.todolist {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: min(100%, 800px);\r\n}\r\n\r\n.todolist-title {\r\n    margin: 0;\r\n}\r\n\r\n.add-button {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#addtodo {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-color: white;\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    \r\n}\r\n#addtodo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.list > * {\r\n    display: grid;\r\n    grid-template: 35px/ 35px 1fr 35px;\r\n    grid-template-areas:\r\n    \"check nameDate delete\";\r\n    align-items: center;\r\n    column-gap: 0.5rem;\r\n    row-gap: 5px;\r\n}\r\n.list > * p {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.list > * button {\r\n    height: 100%;\r\n}\r\n\r\n#todocheck {\r\n    grid-area: check;\r\n    height: 80%;\r\n    width: 80%;\r\n    place-self: center;\r\n    border-radius: 50%;\r\n    border: solid 1px var(--icon-color);\r\n    background-color: white;\r\n}\r\n#todocheck:hover {\r\n    background-color: var(--icon-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-content {\r\n    grid-area: nameDate;\r\n    align-self: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.todo-name {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.todo-date {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n#todoremove {\r\n    grid-area: delete;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-color: white;\r\n    border: none;\r\n}\r\n#todoremove:hover {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* \r\naddDiv\r\n*/\r\n.add-div {\r\n    border: solid 1px;\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    padding: 1rem;\r\n\r\n    display: grid;\r\n    grid-template: repeat(2, 50px) / 110px 80px 60px 70px;\r\n    grid-template-areas:\r\n    \"name name name name\"\r\n    \"date priorty cancel submit\";\r\n\r\n    gap: 0.3rem;\r\n}\r\n\r\n#name-input {\r\n    grid-area: name;\r\n}\r\n\r\n#date-input {\r\n    grid-area: date;\r\n}\r\n\r\n.priorty-inputs {\r\n    grid-area: priorty;\r\n}\r\n\r\n#cancel-button {\r\n    grid-area: cancel;\r\n    \r\n}\r\n\r\n#submit-button {\r\n    grid-area: submit;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/todolist/todolist.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,uBAAuB;AAC3B;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,yDAAuC;IACvC,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;;AAEtB;AACA;IACI,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC;2BACuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,kBAAkB;IAClB,mCAAmC;IACnC,uBAAuB;AAC3B;AACA;IACI,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,yDAA0C;IAC1C,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,yDAAkD;IAClD,eAAe;AACnB;;;AAGA;;CAEC;AACD;IACI,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;;IAEhC,aAAa;;IAEb,aAAa;IACb,qDAAqD;IACrD;;gCAE4B;;IAE5B,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[":root {\r\n    --icon-color: #a1a1aa;\r\n\r\n}\r\n\r\n.todolist {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    width: min(100%, 800px);\r\n}\r\n\r\n.todolist-title {\r\n    margin: 0;\r\n}\r\n\r\n.add-button {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#addtodo {\r\n    background-image: url(../icons/add.svg);\r\n    background-color: white;\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    \r\n}\r\n#addtodo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.list > * {\r\n    display: grid;\r\n    grid-template: 35px/ 35px 1fr 35px;\r\n    grid-template-areas:\r\n    \"check nameDate delete\";\r\n    align-items: center;\r\n    column-gap: 0.5rem;\r\n    row-gap: 5px;\r\n}\r\n.list > * p {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.list > * button {\r\n    height: 100%;\r\n}\r\n\r\n#todocheck {\r\n    grid-area: check;\r\n    height: 80%;\r\n    width: 80%;\r\n    place-self: center;\r\n    border-radius: 50%;\r\n    border: solid 1px var(--icon-color);\r\n    background-color: white;\r\n}\r\n#todocheck:hover {\r\n    background-color: var(--icon-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-content {\r\n    grid-area: nameDate;\r\n    align-self: center;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.todo-name {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.todo-date {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n#todoremove {\r\n    grid-area: delete;\r\n    background-image: url(../icons/delete.svg);\r\n    background-color: white;\r\n    border: none;\r\n}\r\n#todoremove:hover {\r\n    background-image: url(../icons/delete-outline.svg);\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* \r\naddDiv\r\n*/\r\n.add-div {\r\n    border: solid 1px;\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    padding: 1rem;\r\n\r\n    display: grid;\r\n    grid-template: repeat(2, 50px) / 110px 80px 60px 70px;\r\n    grid-template-areas:\r\n    \"name name name name\"\r\n    \"date priorty cancel submit\";\r\n\r\n    gap: 0.3rem;\r\n}\r\n\r\n#name-input {\r\n    grid-area: name;\r\n}\r\n\r\n#date-input {\r\n    grid-area: date;\r\n}\r\n\r\n.priorty-inputs {\r\n    grid-area: priorty;\r\n}\r\n\r\n#cancel-button {\r\n    grid-area: cancel;\r\n    \r\n}\r\n\r\n#submit-button {\r\n    grid-area: submit;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _todolist_todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist/todolist */ "./src/todolist/todolist.js");
/* harmony import */ var _project_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project/project.js */ "./src/project/project.js");



_todolist_todolist__WEBPACK_IMPORTED_MODULE_0__["default"].printProject('two');
_project_project_js__WEBPACK_IMPORTED_MODULE_1__["default"].printProjects();


/***/ }),

/***/ "./src/project/project.js":
/*!********************************!*\
  !*** ./src/project/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_todoAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todo/todoAPI */ "./src/todo/todoAPI.js");


const project = () => {

    const _printProjectList = () => {
        console.log(_todo_todoAPI__WEBPACK_IMPORTED_MODULE_0__["default"].getProjectList());
    }

    const printProjects = () => {
        _printProjectList();
    }

    return {printProjects}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);

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

    const removeProject = (projectName) => {
        const list = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveProjects();
        const nameList = _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveNames();

        const index = nameList.indexOf(projectName);
        nameList.slice(index);
        list.slice(index);

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
        return _storage__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveProjects();
    }

    return {
        addProject, getProject, getProjectList, removeProject, updateProject
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
/* harmony import */ var _project_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project/project */ "./src/project/project.js");
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
        project.splice(index, 1)
        _projectlist__WEBPACK_IMPORTED_MODULE_1__["default"].updateProject(todo.project, project);
    }   

    return {
        //create
        addTodo, makeTodo,
        //read
        getTodo, getLength, getProject, getProjectList, getName, getProjectName, getDate, getPriorty, getStatus,
        //update
        updateTodo, toggleStatus, 
        //delete
        removeTodo,
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
        _createTitle(`Project: ${projectName}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUNPO0FBQ25HLDRDQUE0Qyw0R0FBbUM7QUFDL0UsNENBQTRDLGtIQUFzQztBQUNsRiw0Q0FBNEMsa0lBQThDO0FBQzFGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQSxpREFBaUQsOEJBQThCLFNBQVMsbUJBQW1CLHNCQUFzQiwrQkFBK0Isa0JBQWtCLGdDQUFnQyxLQUFLLHlCQUF5QixrQkFBa0IsS0FBSyxxQkFBcUIsc0JBQXNCLCtCQUErQixLQUFLLGNBQWMsMEVBQTBFLGdDQUFnQyxvQkFBb0IscUJBQXFCLHFCQUFxQiwyQkFBMkIsYUFBYSxvQkFBb0Isd0JBQXdCLEtBQUssbUJBQW1CLHNCQUFzQiwrQkFBK0Isa0JBQWtCLEtBQUssbUJBQW1CLHNCQUFzQiwyQ0FBMkMsOERBQThELDRCQUE0QiwyQkFBMkIscUJBQXFCLEtBQUssaUJBQWlCLGtCQUFrQixtQkFBbUIsS0FBSyxzQkFBc0IscUJBQXFCLEtBQUssb0JBQW9CLHlCQUF5QixvQkFBb0IsbUJBQW1CLDJCQUEyQiwyQkFBMkIsNENBQTRDLGdDQUFnQyxLQUFLLHNCQUFzQiw0Q0FBNEMsd0JBQXdCLEtBQUssdUJBQXVCLDRCQUE0QiwyQkFBMkIscUJBQXFCLG9CQUFvQixLQUFLLG9CQUFvQiwwQkFBMEIsS0FBSyxvQkFBb0IsMEJBQTBCLEtBQUsscUJBQXFCLDBCQUEwQiwwRUFBMEUsZ0NBQWdDLHFCQUFxQixLQUFLLHVCQUF1QiwwRUFBMEUsd0JBQXdCLEtBQUssNkNBQTZDLDBCQUEwQiwyQkFBMkIsaUJBQWlCLGtCQUFrQix5Q0FBeUMsMEJBQTBCLDBCQUEwQiw4REFBOEQsa0dBQWtHLHdCQUF3QixLQUFLLHFCQUFxQix3QkFBd0IsS0FBSyxxQkFBcUIsd0JBQXdCLEtBQUsseUJBQXlCLDJCQUEyQixLQUFLLHdCQUF3QiwwQkFBMEIsYUFBYSx3QkFBd0IsMEJBQTBCLEtBQUssZUFBZSw0RkFBNEYsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsYUFBYSxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsUUFBUSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsWUFBWSxVQUFVLFlBQVksT0FBTyxRQUFRLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksaUNBQWlDLDhCQUE4QixTQUFTLG1CQUFtQixzQkFBc0IsK0JBQStCLGtCQUFrQixnQ0FBZ0MsS0FBSyx5QkFBeUIsa0JBQWtCLEtBQUsscUJBQXFCLHNCQUFzQiwrQkFBK0IsS0FBSyxjQUFjLGdEQUFnRCxnQ0FBZ0Msb0JBQW9CLHFCQUFxQixxQkFBcUIsMkJBQTJCLGFBQWEsb0JBQW9CLHdCQUF3QixLQUFLLG1CQUFtQixzQkFBc0IsK0JBQStCLGtCQUFrQixLQUFLLG1CQUFtQixzQkFBc0IsMkNBQTJDLDhEQUE4RCw0QkFBNEIsMkJBQTJCLHFCQUFxQixLQUFLLGlCQUFpQixrQkFBa0IsbUJBQW1CLEtBQUssc0JBQXNCLHFCQUFxQixLQUFLLG9CQUFvQix5QkFBeUIsb0JBQW9CLG1CQUFtQiwyQkFBMkIsMkJBQTJCLDRDQUE0QyxnQ0FBZ0MsS0FBSyxzQkFBc0IsNENBQTRDLHdCQUF3QixLQUFLLHVCQUF1Qiw0QkFBNEIsMkJBQTJCLHFCQUFxQixvQkFBb0IsS0FBSyxvQkFBb0IsMEJBQTBCLEtBQUssb0JBQW9CLDBCQUEwQixLQUFLLHFCQUFxQiwwQkFBMEIsbURBQW1ELGdDQUFnQyxxQkFBcUIsS0FBSyx1QkFBdUIsMkRBQTJELHdCQUF3QixLQUFLLDZDQUE2QywwQkFBMEIsMkJBQTJCLGlCQUFpQixrQkFBa0IseUNBQXlDLDBCQUEwQiwwQkFBMEIsOERBQThELGtHQUFrRyx3QkFBd0IsS0FBSyxxQkFBcUIsd0JBQXdCLEtBQUsscUJBQXFCLHdCQUF3QixLQUFLLHlCQUF5QiwyQkFBMkIsS0FBSyx3QkFBd0IsMEJBQTBCLGFBQWEsd0JBQXdCLDBCQUEwQixLQUFLLDJCQUEyQjtBQUMzak07QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNkMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBeUc7QUFDekc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx5RkFBTzs7OztBQUltRDtBQUMzRSxPQUFPLGlFQUFlLHlGQUFPLElBQUksZ0dBQWMsR0FBRyxnR0FBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNmMkM7QUFDQTtBQUMzQztBQUNBLHVFQUFxQjtBQUNyQix5RUFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKaUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0VBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNoQlU7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlFQUF3QjtBQUMzQyx1QkFBdUIsOERBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQXFCO0FBQ2pDLFlBQVksMkRBQWtCO0FBQzlCLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlFQUF3QjtBQUNqRCx5QkFBeUIsOERBQXFCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlFQUF3QjtBQUM3Qyx5QkFBeUIsOERBQXFCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhEQUFxQjtBQUM3QixRQUFRLDJEQUFrQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUVBQXdCO0FBQzdDLHlCQUF5Qiw4REFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOERBQXFCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUVBQXdCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ2xFMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUN0QnRCO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pzQjtBQUNEO0FBQ2Q7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFJO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtEQUFzQjtBQUM5QztBQUNBO0FBQ0EsUUFBUSwrREFBc0I7QUFDOUI7QUFDQSxRQUFRLGtFQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwrREFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsZUFBZSwrREFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUVBQTBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLCtEQUFzQjtBQUM5QztBQUNBLFFBQVEsa0VBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsK0RBQXNCO0FBQzVDO0FBQ0EsUUFBUSxrRUFBeUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7OztBQy9GdEI7QUFDeUM7QUFDSjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLDBCQUEwQixpRUFBZ0I7QUFDMUMsWUFBWSxnRUFBZTtBQUMzQixZQUFZLGdFQUFvQjtBQUNoQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0VBQWU7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLG1FQUFrQjtBQUMvQyxzQ0FBc0M7QUFDdEMsNkNBQTZDO0FBQzdDLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLDBCQUEwQixpRUFBZ0I7QUFDMUMsWUFBWSxtRUFBa0I7QUFDOUIsWUFBWSxnRUFBb0I7QUFDaEM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzS0g7QUFDZTtBQUNLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFlBQVk7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrREFBaUI7QUFDeEMsd0JBQXdCLGdFQUFrQjtBQUMxQztBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwrREFBbUI7QUFDL0IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrREFBaUI7QUFDdkQ7QUFDQTtBQUNBLFlBQVksa0VBQW9CO0FBQ2hDLDBDQUEwQywrREFBaUI7QUFDM0QsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnRUFBa0I7QUFDOUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkRBQWUsYUFBYTtBQUN4RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkRBQWUsYUFBYTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnRUFBb0I7QUFDaEMsU0FBUztBQUNUO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb2xpc3QvdG9kb2xpc3QuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvbGlzdC90b2RvbGlzdC5jc3M/ZDkxYyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3Byb2plY3QvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvL3Byb2plY3RsaXN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8vc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby90b2RvQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9saXN0L2FkZEVkaXRUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9saXN0L3RvZG9saXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pY29ucy9hZGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vaWNvbnMvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL2ljb25zL2RlbGV0ZS1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWljb24tY29sb3I6ICNhMWExYWE7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi50b2RvbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgd2lkdGg6IG1pbigxMDAlLCA4MDBweCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvbGlzdC10aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG4jYWRkdG9kbyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgXFxyXFxufVxcclxcbiNhZGR0b2RvOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QgPiAqIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMzVweC8gMzVweCAxZnIgMzVweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImNoZWNrIG5hbWVEYXRlIGRlbGV0ZVxcXCI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDAuNXJlbTtcXHJcXG4gICAgcm93LWdhcDogNXB4O1xcclxcbn1cXHJcXG4ubGlzdCA+ICogcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLmxpc3QgPiAqIGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9jaGVjayB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2hlY2s7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0taWNvbi1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4jdG9kb2NoZWNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGVudCB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmFtZURhdGU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbiN0b2RvcmVtb3ZlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBkZWxldGU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbiN0b2RvcmVtb3ZlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG5hZGREaXZcXHJcXG4qL1xcclxcbi5hZGQtZGl2IHtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyNSU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCA1MHB4KSAvIDExMHB4IDgwcHggNjBweCA3MHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwibmFtZSBuYW1lIG5hbWUgbmFtZVxcXCJcXHJcXG4gICAgXFxcImRhdGUgcHJpb3J0eSBjYW5jZWwgc3VibWl0XFxcIjtcXHJcXG5cXHJcXG4gICAgZ2FwOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbiNuYW1lLWlucHV0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9ydHktaW5wdXRzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcnR5O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2FuY2VsO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IHN1Ym1pdDtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvZG9saXN0L3RvZG9saXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjs7QUFFekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSx5REFBdUM7SUFDdkMsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjs7QUFFdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDOzJCQUN1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlEQUEwQztJQUMxQyx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseURBQWtEO0lBQ2xELGVBQWU7QUFDbkI7OztBQUdBOztDQUVDO0FBQ0Q7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDOztJQUVoQyxhQUFhOztJQUViLGFBQWE7SUFDYixxREFBcUQ7SUFDckQ7O2dDQUU0Qjs7SUFFNUIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1pY29uLWNvbG9yOiAjYTFhMWFhO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4udG9kb2xpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb2xpc3QtdGl0bGUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuI2FkZHRvZG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaWNvbnMvYWRkLnN2Zyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgXFxyXFxufVxcclxcbiNhZGR0b2RvOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QgPiAqIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMzVweC8gMzVweCAxZnIgMzVweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImNoZWNrIG5hbWVEYXRlIGRlbGV0ZVxcXCI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDAuNXJlbTtcXHJcXG4gICAgcm93LWdhcDogNXB4O1xcclxcbn1cXHJcXG4ubGlzdCA+ICogcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLmxpc3QgPiAqIGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9jaGVjayB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2hlY2s7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0taWNvbi1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4jdG9kb2NoZWNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGVudCB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmFtZURhdGU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1kYXRlIHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbiN0b2RvcmVtb3ZlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBkZWxldGU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pY29ucy9kZWxldGUuc3ZnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuI3RvZG9yZW1vdmU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaWNvbnMvZGVsZXRlLW91dGxpbmUuc3ZnKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG5hZGREaXZcXHJcXG4qL1xcclxcbi5hZGQtZGl2IHtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyNSU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCA1MHB4KSAvIDExMHB4IDgwcHggNjBweCA3MHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwibmFtZSBuYW1lIG5hbWUgbmFtZVxcXCJcXHJcXG4gICAgXFxcImRhdGUgcHJpb3J0eSBjYW5jZWwgc3VibWl0XFxcIjtcXHJcXG5cXHJcXG4gICAgZ2FwOiAwLjNyZW07XFxyXFxufVxcclxcblxcclxcbiNuYW1lLWlucHV0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZS1pbnB1dCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGF0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW9ydHktaW5wdXRzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwcmlvcnR5O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FuY2VsLWJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2FuY2VsO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IHN1Ym1pdDtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9saXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb2xpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0b2RvbGlzdCBmcm9tIFwiLi90b2RvbGlzdC90b2RvbGlzdFwiO1xyXG5pbXBvcnQgcHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0L3Byb2plY3QuanNcIjtcclxuXHJcbnRvZG9saXN0LnByaW50UHJvamVjdCgndHdvJyk7XHJcbnByb2plY3QucHJpbnRQcm9qZWN0cygpO1xyXG4iLCJpbXBvcnQgdG9kb0FQSSBmcm9tIFwiLi4vdG9kby90b2RvQVBJXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IF9wcmludFByb2plY3RMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG9BUEkuZ2V0UHJvamVjdExpc3QoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJpbnRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgICAgICBfcHJpbnRQcm9qZWN0TGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7cHJpbnRQcm9qZWN0c31cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7IiwiaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5cclxuY29uc3QgcHJvamVjdGxpc3QgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBzdG9yYWdlLnJldHJpZXZlUHJvamVjdHMoKTtcclxuICAgICAgICBsZXQgbmFtZUxpc3QgPSBzdG9yYWdlLnJldHJpZXZlTmFtZXMoKTtcclxuXHJcbiAgICAgICAgaWYobGlzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsaXN0ID0gW107XHJcbiAgICAgICAgICAgIG5hbWVMaXN0ID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NoZWNrcyBmb3IgZHVsaWNhdGUgcHJvamVjdHNcclxuICAgICAgICBpZiAobmFtZUxpc3QuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFtdO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgICAgIG5hbWVMaXN0LnB1c2gobmFtZSk7XHJcblxyXG4gICAgICAgICAgICBzdG9yYWdlLnN0b3JlUHJvamVjdHMobGlzdCk7XHJcbiAgICAgICAgICAgIHN0b3JhZ2Uuc3RvcmVOYW1lcyhuYW1lTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2R1cGxpY2F0ZSBwcm9qZWN0IG5hbWU/JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gc3RvcmFnZS5yZXRyaWV2ZVByb2plY3RzKCk7XHJcbiAgICAgICAgY29uc3QgbmFtZUxpc3QgPSBzdG9yYWdlLnJldHJpZXZlTmFtZXMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBuYW1lTGlzdC5pbmRleE9mKHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IHN0b3JhZ2UucmV0cmlldmVQcm9qZWN0cygpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVMaXN0ID0gc3RvcmFnZS5yZXRyaWV2ZU5hbWVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmFtZUxpc3QuaW5kZXhPZihwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgbmFtZUxpc3Quc2xpY2UoaW5kZXgpO1xyXG4gICAgICAgIGxpc3Quc2xpY2UoaW5kZXgpO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnN0b3JlUHJvamVjdHMobGlzdCk7XHJcbiAgICAgICAgc3RvcmFnZS5zdG9yZU5hbWVzKG5hbWVMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IHN0b3JhZ2UucmV0cmlldmVQcm9qZWN0cygpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVMaXN0ID0gc3RvcmFnZS5yZXRyaWV2ZU5hbWVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmFtZUxpc3QuaW5kZXhPZihwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgICAgIGxpc3RbaW5kZXhdID0gKHByb2plY3QpO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnN0b3JlUHJvamVjdHMobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UucmV0cmlldmVQcm9qZWN0cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkUHJvamVjdCwgZ2V0UHJvamVjdCwgZ2V0UHJvamVjdExpc3QsIHJlbW92ZVByb2plY3QsIHVwZGF0ZVByb2plY3RcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3RsaXN0OyIsImNvbnN0IHN0b3JhZ2UgPSAoKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RvcmVQcm9qZWN0cyA9IChwcm9qZWN0cykgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3RvcmVOYW1lcyA9IG5hbWVzID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdE5hbWVzJyxKU09OLnN0cmluZ2lmeShuYW1lcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlTmFtZXMgPSBuYW1lcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3ROYW1lcycpKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4ge3N0b3JlUHJvamVjdHMsIHJldHJpZXZlUHJvamVjdHMsIHN0b3JlTmFtZXMsIHJldHJpZXZlTmFtZXN9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlOyIsImNvbnN0IHRvZG8gPSAobmFtZSwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3J0eSwgc3RhdHVzKSA9PiB7XHJcbiAgICByZXR1cm4ge25hbWUsIHByb2plY3QsIGR1ZURhdGUsIHByaW9ydHksIHN0YXR1c31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kbzsiLCJpbXBvcnQgcHJvamVjdCBmcm9tIFwiLi4vcHJvamVjdC9wcm9qZWN0XCI7XHJcbmltcG9ydCBwcm9qZWN0bGlzdCBmcm9tIFwiLi9wcm9qZWN0bGlzdFwiO1xyXG5pbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvXCI7XHJcblxyXG5cclxuY29uc3QgdG9kb0FQSSA9ICgoKSA9PiB7XHJcblxyXG4gICAgLy9jcmVhdGVcclxuICAgIGNvbnN0IG1ha2VUb2RvID0gKG5hbWUsIHByb2plY3QsIGR1ZURhdGUsIHByaW9ydHkpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvMSA9IHRvZG8obmFtZSwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3J0eSwgZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiB0b2RvMTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdGxpc3QuZ2V0UHJvamVjdCh0b2RvLnByb2plY3QpO1xyXG5cclxuICAgICAgICBwcm9qZWN0LnB1c2godG9kbyk7XHJcbiAgICAgICAgcHJvamVjdGxpc3QuZ2V0UHJvamVjdCh0b2RvLnByb2plY3QpLnB1c2godG9kbyk7XHJcblxyXG4gICAgICAgIHByb2plY3RsaXN0LnVwZGF0ZVByb2plY3QodG9kby5wcm9qZWN0LCBwcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3JlYWRcclxuICAgIGNvbnN0IGdldFRvZG8gPSB0b2RvID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdGxpc3QuZ2V0UHJvamVjdCh0b2RvLnByb2plY3QpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdC5pbmRleE9mKHRvZG8ubmFtZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0W2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRMZW5ndGggPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdGxpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdGxpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0TmFtZSA9IHRvZG8gPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdE5hbWUgPSB0b2RvID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kby5wcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERhdGUgPSB0b2RvID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kby5kdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9ydHkgPSB0b2RvID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kby5wcmlvcnR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFN0YXR1cyA9IHRvZG8gPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvLnN0YXR1cztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0TGlzdCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdGxpc3QuZ2V0UHJvamVjdExpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGVycz9cclxuICAgIGNvbnN0IHVwZGF0ZVRvZG8gPSAoaW5kZXgsIHRvZG8pID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdGxpc3QuZ2V0UHJvamVjdCh0b2RvLnByb2plY3QpO1xyXG4gICAgICAgIHByb2plY3RbaW5kZXhdID0gdG9kbztcclxuICAgICAgICBwcm9qZWN0bGlzdC51cGRhdGVQcm9qZWN0KHRvZG8ucHJvamVjdCwgcHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVN0YXR1cyA9IChpbmRleCwgdG9kbykgPT4geyAgXHJcbiAgICAgICAgdG9kby5zdGF0dXMgPSAhdG9kby5zdGF0dXM7XHJcbiAgICAgICAgdXBkYXRlVG9kbyhpbmRleCwgdG9kbyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vZGVsZXRlXHJcbiAgICBjb25zdCByZW1vdmVUb2RvID0gKGluZGV4LCB0b2RvKSA9PiB7XHJcbiAgICAgICAgbGV0IHByb2plY3QgPSBwcm9qZWN0bGlzdC5nZXRQcm9qZWN0KHRvZG8ucHJvamVjdCk7XHJcbiAgICAgICAgcHJvamVjdC5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgcHJvamVjdGxpc3QudXBkYXRlUHJvamVjdCh0b2RvLnByb2plY3QsIHByb2plY3QpO1xyXG4gICAgfSAgIFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9jcmVhdGVcclxuICAgICAgICBhZGRUb2RvLCBtYWtlVG9kbyxcclxuICAgICAgICAvL3JlYWRcclxuICAgICAgICBnZXRUb2RvLCBnZXRMZW5ndGgsIGdldFByb2plY3QsIGdldFByb2plY3RMaXN0LCBnZXROYW1lLCBnZXRQcm9qZWN0TmFtZSwgZ2V0RGF0ZSwgZ2V0UHJpb3J0eSwgZ2V0U3RhdHVzLFxyXG4gICAgICAgIC8vdXBkYXRlXHJcbiAgICAgICAgdXBkYXRlVG9kbywgdG9nZ2xlU3RhdHVzLCBcclxuICAgICAgICAvL2RlbGV0ZVxyXG4gICAgICAgIHJlbW92ZVRvZG8sXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvQVBJOyIsIi8vbWluaSBmb3JtIGdlbmVyYXRvciBmb3IgYWRkaW5nIGFkZGluZyBhbmQgZWRpdGluZyB0b2Rvc1xyXG5pbXBvcnQgdG9kb0FQSSBmcm9tIFwiLi4vdG9kby90b2RvQVBJLmpzXCI7XHJcbmltcG9ydCB0b2RvbGlzdCBmcm9tIFwiLi90b2RvbGlzdC5qc1wiO1xyXG5cclxuY29uc3QgYWRkRWRpdFRvZG8gPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkVG9kbyA9IHByb2plY3ROYW1lID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IGFkZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFkZERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYWRkLWRpdicpO1xyXG4gICAgICAgIHRvZG9saXN0LmFwcGVuZChhZGREaXYpO1xyXG4gICAgICAgIF9hZGRGb3Jtcyhwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2FkZEZvcm1zID0gcHJvamVjdE5hbWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkdG9kbycpO1xyXG4gICAgICAgIGFkZFRvZG8uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XHJcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCduYW1lLWlucHV0Jyk7XHJcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywnb2ZmJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcclxuICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ2RhdGUtaW5wdXQnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpb3J0eUlucHV0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByaW9ydHlJbnB1dHMuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3ByaW9ydHktaW5wdXRzJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaW9ydHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHByaW9ydHlMb3cuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3J0eScpO1xyXG4gICAgICAgIHByaW9ydHlMb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBwcmlvcnR5TG93LmFwcGVuZCgneCcpO1xyXG5cclxuICAgICAgICBjb25zdCBwcmlvcnR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBwcmlvcnR5TWVkaXVtLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgcHJpb3J0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcnR5Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaW9ydHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBwcmlvcnR5SGlnaC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIHByaW9ydHlIaWdoLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9ydHknKTtcclxuXHJcbiAgICAgICAgcHJpb3J0eUlucHV0cy5hcHBlbmQocHJpb3J0eUxvdywgcHJpb3J0eU1lZGl1bSwgcHJpb3J0eUhpZ2gpO1xyXG5cclxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2NhbmNlbC1idXR0b24nKTtcclxuICAgICAgICBjYW5jZWxCdG4udmFsdWUgPSAnQ2FuY2VsJztcclxuICAgICAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfY2FuY2VsU3VibWl0KTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdzdWJtaXQtYnV0dG9uJyk7XHJcbiAgICAgICAgc3VibWl0QnRuLnZhbHVlID0gJ1N1Ym1pdCc7XHJcblxyXG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcmlvcnR5O1xyXG4gICAgICAgICAgICBpZiAocHJpb3J0eU1lZGl1bS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBwcmlvcnR5ID0gJ21lZGl1bSc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJpb3J0eUhpZ2guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcHJpb3J0eSA9ICdoaWdoJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmlvcnR5TG93LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHByaW9ydHkgPSAnbG93JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByaW9ydHkgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG8xID0gdG9kb0FQSS5tYWtlVG9kbyhuYW1lSW5wdXQudmFsdWUsIHByb2plY3ROYW1lLCBkYXRlSW5wdXQudmFsdWUsIHByaW9ydHksIGZhbHNlKTtcclxuICAgICAgICAgICAgdG9kb0FQSS5hZGRUb2RvKHRvZG8xKTtcclxuICAgICAgICAgICAgdG9kb2xpc3QucmVmcmVzaExpc3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBfY2FuY2VsU3VibWl0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGl2Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRkRGl2LmFwcGVuZChuYW1lSW5wdXQsIGRhdGVJbnB1dCwgcHJpb3J0eUlucHV0cywgY2FuY2VsQnRuLCBzdWJtaXRCdG4pO1xyXG4gICAgICAgIG5hbWVJbnB1dC5mb2N1cygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0VG9kbyA9IChpLCBwcm9qZWN0LCBwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9saXN0Jyk7XHJcbiAgICAgICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYWRkRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdhZGQtZGl2Jyk7XHJcbiAgICAgICAgdG9kb2xpc3QuYXBwZW5kKGFkZERpdik7XHJcbiAgICAgICAgX2VkaXRGb3JtcyhpLCBwcm9qZWN0LCBwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2VkaXRGb3JtcyA9IChpLCBwcm9qZWN0LCBwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkdG9kbycpO1xyXG4gICAgICAgIGFkZFRvZG8uZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XHJcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCduYW1lLWlucHV0Jyk7XHJcbiAgICAgICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywnb2ZmJyk7XHJcbiAgICAgICAgbmFtZUlucHV0LnZhbHVlID0gdG9kb0FQSS5nZXROYW1lKHByb2plY3RbaV0pO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XHJcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkYXRlLWlucHV0Jyk7XHJcbiAgICAgICAgZGF0ZUlucHV0LnZhbHVlID0gdG9kb0FQSS5nZXREYXRlKHByb2plY3RbaV0pO1xyXG5cclxuICAgICAgICBjb25zdCBwcmlvcnR5SW5wdXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJpb3J0eUlucHV0cy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncHJpb3J0eS1pbnB1dHMnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpb3J0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJpb3J0eUxvdy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcnR5Jyk7XHJcbiAgICAgICAgcHJpb3J0eUxvdy5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG5cclxuICAgICAgICBjb25zdCBwcmlvcnR5TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBwcmlvcnR5TWVkaXVtLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgcHJpb3J0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcnR5Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaW9ydHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBwcmlvcnR5SGlnaC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIHByaW9ydHlIaWdoLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9ydHknKTtcclxuXHJcbiAgICAgICAgcHJpb3J0eUlucHV0cy5hcHBlbmQocHJpb3J0eUxvdywgcHJpb3J0eU1lZGl1bSwgcHJpb3J0eUhpZ2gpO1xyXG5cclxuICAgICAgICBjb25zdCBwcmlvcnR5VmFsdWUgPSB0b2RvQVBJLmdldFByaW9ydHkocHJvamVjdFtpXSk7XHJcbiAgICAgICAgaWYgKHByaW9ydHlWYWx1ZSA9PT0gJ2xvdycpIHsgcHJpb3J0eUxvdy5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAndHJ1ZScpfVxyXG4gICAgICAgIGVsc2UgaWYocHJpb3J0eVZhbHVlID09PSAnbWVkaXVtJykgeyBwcmlvcnR5TWVkaXVtLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJ3RydWUnKX1cclxuICAgICAgICBlbHNlIGlmIChwcmlvcnR5VmFsdWUgPT09ICdoaWdoJykge3ByaW9ydHlIaWdoLnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsJ3RydWUnKX1cclxuICAgICAgICBlbHNlIHt9O1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdjYW5jZWwtYnV0dG9uJyk7XHJcbiAgICAgICAgY2FuY2VsQnRuLnZhbHVlID0gJ0NhbmNlbCc7XHJcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2NhbmNlbFN1Ym1pdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnZWRpdC1idXR0b24nKTtcclxuICAgICAgICBlZGl0QnRuLnZhbHVlID0gJ0VkaXQnO1xyXG5cclxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IHByaW9ydHk7XHJcbiAgICAgICAgICAgIGlmIChwcmlvcnR5TWVkaXVtLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHByaW9ydHkgPSAnbWVkaXVtJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmlvcnR5SGlnaC5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICBwcmlvcnR5ID0gJ2hpZ2gnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcHJpb3J0eSA9ICdsb3cnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG8xID0gdG9kb0FQSS5tYWtlVG9kbyhuYW1lSW5wdXQudmFsdWUsIHByb2plY3ROYW1lLCBkYXRlSW5wdXQudmFsdWUsIHByaW9ydHksIGZhbHNlKTtcclxuICAgICAgICAgICAgdG9kb0FQSS51cGRhdGVUb2RvKGksIHRvZG8xKTtcclxuICAgICAgICAgICAgdG9kb2xpc3QucmVmcmVzaExpc3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICBfY2FuY2VsU3VibWl0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGl2Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYWRkRGl2LmFwcGVuZChuYW1lSW5wdXQsIGRhdGVJbnB1dCwgcHJpb3J0eUlucHV0cywgY2FuY2VsQnRuLCBlZGl0QnRuKTtcclxuICAgICAgICBuYW1lSW5wdXQuZm9jdXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfY2FuY2VsU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFkZERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGR0b2RvJyk7XHJcbiAgICAgICAgYWRkRGl2LnJlbW92ZSgpO1xyXG4gICAgICAgIGFkZFRvZG8uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2FkZFRvZG8sIGVkaXRUb2RvfVxyXG5cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRFZGl0VG9kbzsiLCJpbXBvcnQgJy4vdG9kb2xpc3QuY3NzJ1xyXG5pbXBvcnQgdG9kb0FQSSBmcm9tICcuLi90b2RvL3RvZG9BUEknO1xyXG5pbXBvcnQgYWRkRWRpdFRvZG8gZnJvbSAnLi9hZGRFZGl0VG9kby5qcyc7XHJcblxyXG5jb25zdCB0b2RvbGlzdCA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgcHJpbnRQcm9qZWN0ID0gcHJvamVjdE5hbWUgPT4ge1xyXG4gICAgICAgIF9jcmVhdGVUaXRsZShgUHJvamVjdDogJHtwcm9qZWN0TmFtZX1gKTtcclxuICAgICAgICBfY3JlYXRlQWRkQnV0dG9uKHByb2plY3ROYW1lKTtcclxuICAgICAgICBfY3JlYXRlTGlzdERpdigpO1xyXG4gICAgICAgIF9wcmludExpc3QocHJvamVjdE5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9wcmludExpc3QgPSBwcm9qZWN0TmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRvZG9BUEkuZ2V0TGVuZ3RoKHByb2plY3ROYW1lKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gdG9kb0FQSS5nZXRQcm9qZWN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdG9kby5zZXRBdHRyaWJ1dGUoJ2lkJyxpKTtcclxuICAgICAgICAgICAgbGlzdC5hcHBlbmQodG9kbyk7XHJcbiAgICAgICAgICAgIF9jcmVhdGVUb2RvQnV0dG9ucyhpLCBwcm9qZWN0LCBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgIF90b2RvTmFtZUFuZERhdGUoaSwgcHJvamVjdCwgcHJvamVjdE5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWZyZXNoTGlzdCA9IHByb2plY3ROYW1lID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IG9sZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xyXG4gICAgICAgIHRvZG9saXN0RGl2LnJlbW92ZUNoaWxkKG9sZExpc3QpO1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdCcpO1xyXG4gICAgICAgIHRvZG9saXN0RGl2LmFwcGVuZChsaXN0KTtcclxuXHJcbiAgICAgICAgX3ByaW50TGlzdChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZUFkZEJ1dHRvbiA9IHByb2plY3ROYW1lID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFkZEJ1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYWRkLWJ1dHRvbicpO1xyXG5cclxuICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBhZGQuc2V0QXR0cmlidXRlKCdpZCcsJ2FkZHRvZG8nKTtcclxuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBhZGRFZGl0VG9kby5hZGRUb2RvKHByb2plY3ROYW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnYWRkdG9kbycpO1xyXG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdhZGQgYSB0b2RvJztcclxuICAgICAgICBcclxuICAgICAgICBhZGRCdXR0b25EaXYuYXBwZW5kKGFkZCwgbGFiZWwpO1xyXG4gICAgICAgIHRvZG9saXN0RGl2LmFwcGVuZChhZGRCdXR0b25EaXYpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVUaXRsZSA9ICh0aXRsZU5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9kb2xpc3QtdGl0bGUnKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZU5hbWU7XHJcbiAgICAgICAgdG9kb2xpc3REaXYuYXBwZW5kKHRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfY3JlYXRlTGlzdERpdiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaXN0Jyk7XHJcbiAgICAgICAgdG9kb2xpc3REaXYuYXBwZW5kKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVUb2RvQnV0dG9ucyA9IChpLCBwcm9qZWN0LCBwcm9qZWN0TmFtZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY2hlY2suc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9jaGVjaycpO1xyXG4gICAgICAgIGNoZWNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRvZG9BUEkuZ2V0U3RhdHVzKHByb2plY3RbaV0pID8gJ3ZhcigtLWljb24tY29sb3IpJyA6ICd3aGl0ZSc7XHJcblxyXG4gICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG9BUEkudG9nZ2xlU3RhdHVzKGksIHByb2plY3RbaV0pO1xyXG4gICAgICAgICAgICBjaGVjay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0b2RvQVBJLmdldFN0YXR1cyhwcm9qZWN0W2ldKSA/ICd2YXIoLS1pY29uLWNvbG9yKScgOiAnd2hpdGUnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICByZW1vdmUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9yZW1vdmUnKTtcclxuICAgICAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0b2RvQVBJLnJlbW92ZVRvZG8oaSwgcHJvamVjdFtpXSk7XHJcbiAgICAgICAgICAgIHJlZnJlc2hMaXN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG9kby5hcHBlbmQoY2hlY2ssIHJlbW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3RvZG9OYW1lQW5kRGF0ZSA9IChpLCBwcm9qZWN0LCBwcm9qZWN0TmFtZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8tY29udGVudCcpO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLW5hbWUnKTtcclxuICAgICAgICBuYW1lLmlubmVySFRNTCA9IGAke3RvZG9BUEkuZ2V0TmFtZShwcm9qZWN0W2ldKX1gO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8tZGF0ZScpO1xyXG4gICAgICAgIGRhdGUuaW5uZXJIVE1MID0gYCR7dG9kb0FQSS5nZXREYXRlKHByb2plY3RbaV0pfWA7XHJcblxyXG4gICAgICAgIHRvZG8uYXBwZW5kKHRvZG9Db250ZW50KTtcclxuICAgICAgICB0b2RvQ29udGVudC5hcHBlbmQobmFtZSwgZGF0ZSk7XHJcblxyXG4gICAgICAgIHRvZG9Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgYWRkRWRpdFRvZG8uZWRpdFRvZG8oaSwgcHJvamVjdCwgcHJvamVjdE5hbWUpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtwcmludFByb2plY3QsIHJlZnJlc2hMaXN0fVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9saXN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==