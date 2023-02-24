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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --icon-color: #a1a1aa;\r\n\r\n}\r\n\r\n.todolist {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.todolist-title {\r\n    margin: 0;\r\n}\r\n\r\n.add-button {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#addtodo {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-color: white;\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    \r\n}\r\n#addtodo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.list > * {\r\n    display: grid;\r\n    grid-template: 30px/ 30px 1fr 30px;\r\n    grid-template-areas:\r\n    \"check nameDate delete\";\r\n    align-items: center;\r\n    column-gap: 0.5rem;\r\n    row-gap: 5px;\r\n}\r\n.list > * p {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.list > * button {\r\n    height: 100%;\r\n}\r\n\r\n#todocheck {\r\n    grid-area: check;\r\n    height: 80%;\r\n    width: 80%;\r\n    place-self: center;\r\n    border-radius: 50%;\r\n    border: solid 1px var(--icon-color);\r\n    background-color: white;\r\n}\r\n#todocheck:hover {\r\n    background-color: var(--icon-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-content {\r\n    grid-area: nameDate;\r\n}\r\n\r\n.todo-name {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.todo-date {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n#todoremove {\r\n    grid-area: delete;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    background-color: white;\r\n    border: none;\r\n}\r\n#todoremove:hover {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* \r\naddDiv\r\n*/\r\n.add-div {\r\n    border: solid 1px;\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    padding: 1rem;\r\n\r\n    display: grid;\r\n    grid-template: repeat(2, 50px) / 110px 80px 60px 70px;\r\n    grid-template-areas:\r\n    \"name name name name\"\r\n    \"date priorty cancel submit\";\r\n\r\n    gap: 0.3rem;\r\n}\r\n\r\n#name-input {\r\n    grid-area: name;\r\n}\r\n\r\n#date-input {\r\n    grid-area: date;\r\n}\r\n\r\n.priorty-inputs {\r\n    grid-area: priorty;\r\n}\r\n\r\n#cancel-button {\r\n    grid-area: cancel;\r\n    \r\n}\r\n\r\n#submit-button {\r\n    grid-area: submit;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/todolist/todolist.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;;AAEzB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,yDAAuC;IACvC,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;;AAEtB;AACA;IACI,eAAe;AACnB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC;2BACuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;AACA;IACI,SAAS;IACT,UAAU;AACd;AACA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,UAAU;IACV,kBAAkB;IAClB,kBAAkB;IAClB,mCAAmC;IACnC,uBAAuB;AAC3B;AACA;IACI,mCAAmC;IACnC,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,yDAA0C;IAC1C,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,yDAAkD;IAClD,eAAe;AACnB;;;AAGA;;CAEC;AACD;IACI,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;;IAEhC,aAAa;;IAEb,aAAa;IACb,qDAAqD;IACrD;;gCAE4B;;IAE5B,WAAW;AACf;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;;AAErB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[":root {\r\n    --icon-color: #a1a1aa;\r\n\r\n}\r\n\r\n.todolist {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.todolist-title {\r\n    margin: 0;\r\n}\r\n\r\n.add-button {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n#addtodo {\r\n    background-image: url(../icons/add.svg);\r\n    background-color: white;\r\n    width: 50px;\r\n    height: 50px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    \r\n}\r\n#addtodo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n}\r\n\r\n.list > * {\r\n    display: grid;\r\n    grid-template: 30px/ 30px 1fr 30px;\r\n    grid-template-areas:\r\n    \"check nameDate delete\";\r\n    align-items: center;\r\n    column-gap: 0.5rem;\r\n    row-gap: 5px;\r\n}\r\n.list > * p {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.list > * button {\r\n    height: 100%;\r\n}\r\n\r\n#todocheck {\r\n    grid-area: check;\r\n    height: 80%;\r\n    width: 80%;\r\n    place-self: center;\r\n    border-radius: 50%;\r\n    border: solid 1px var(--icon-color);\r\n    background-color: white;\r\n}\r\n#todocheck:hover {\r\n    background-color: var(--icon-color);\r\n    cursor: pointer;\r\n}\r\n\r\n.todo-content {\r\n    grid-area: nameDate;\r\n}\r\n\r\n.todo-name {\r\n    font-size: 1.1rem;\r\n}\r\n\r\n.todo-date {\r\n    font-size: 0.8rem;\r\n}\r\n\r\n#todoremove {\r\n    grid-area: delete;\r\n    background-image: url(../icons/delete.svg);\r\n    background-color: white;\r\n    border: none;\r\n}\r\n#todoremove:hover {\r\n    background-image: url(../icons/delete-outline.svg);\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* \r\naddDiv\r\n*/\r\n.add-div {\r\n    border: solid 1px;\r\n    position: absolute;\r\n    top: 25%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n\r\n    padding: 1rem;\r\n\r\n    display: grid;\r\n    grid-template: repeat(2, 50px) / 110px 80px 60px 70px;\r\n    grid-template-areas:\r\n    \"name name name name\"\r\n    \"date priorty cancel submit\";\r\n\r\n    gap: 0.3rem;\r\n}\r\n\r\n#name-input {\r\n    grid-area: name;\r\n}\r\n\r\n#date-input {\r\n    grid-area: date;\r\n}\r\n\r\n.priorty-inputs {\r\n    grid-area: priorty;\r\n}\r\n\r\n#cancel-button {\r\n    grid-area: cancel;\r\n    \r\n}\r\n\r\n#submit-button {\r\n    grid-area: submit;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _todo_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo/todo */ "./src/todo/todo.js");
/* harmony import */ var _todo_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo/project */ "./src/todo/project.js");
/* harmony import */ var _todo_projectlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo/projectlist */ "./src/todo/projectlist.js");
/* harmony import */ var _todolist_todolist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todolist/todolist */ "./src/todolist/todolist.js");





_todolist_todolist__WEBPACK_IMPORTED_MODULE_3__["default"].printProject('two');


/***/ }),

/***/ "./src/todo/project.js":
/*!*****************************!*\
  !*** ./src/todo/project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectlist */ "./src/todo/projectlist.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo/todo.js");



const project = (() => {
    const addTodo = (todo) => {
        const project = _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.project);

        project.push(todo);
        _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.project).push(todo);

        _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].updateProject(todo.project, project);
    }

    const getTodo = todo => {
        const project = _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.project);
        const index = project.indexOf(todo.name);

        return project[index];
    }

    const removeTodo = (index, todo) => {
        const project = _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.project);
        project = project.splice(index, 1)
        _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].updateProject(project);

    }

    const updateTodo = (index, todo) => {
        const project = _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.project);
        project[index] = todo;
        _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].updateProject(todo.project, project);
        console.log(_projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.project));
    }

    return { addTodo, getTodo, removeTodo, updateTodo}
})();

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

    return {
        addProject, getProject, removeProject, updateProject
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
/* harmony import */ var _projectlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectlist */ "./src/todo/projectlist.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo/todo.js");




const todoAPI = (() => {

    //create
    const makeTodo = (name, project, dueDate, priorty) => {
        const todo1 = (0,_todo__WEBPACK_IMPORTED_MODULE_1__["default"])(name, project, dueDate, priorty, false);
        return todo1;
    }

    const addTodo = (todo) => {
        const project = _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.project);

        project.push(todo);
        _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.project).push(todo);

        _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].updateProject(todo.project, project);
    }

    //read
    const getTodo = todo => {
        const project = _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.project);
        const index = project.indexOf(todo.name);

        return project[index];
    }

    const getLength = (projectName) => {
        return _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(projectName).length;
    }

    const getProjectList = (projectName) => {
        return _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(projectName);
    }

    const getName = todo => {
        return todo.name;
    }

    const getProject = todo => {
        return todo.project;
    }

    const getDate = todo => {
        return todo.dueDate;
    }

    const getStatus = todo => {
        return todo.status;
    }

    // updaters?
    const updateTodo = (index, todo) => {
        const project = _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.project);
        project[index] = todo;
        _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].updateProject(todo.project, project);
    }


    const toggleStatus = (index, todo) => {  
        todo.status = !todo.status;
        updateTodo(index, todo);
    }


    //delete
    const removeTodo = (index, todo) => {
        let project = _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].getProject(todo.project);
        project.splice(index, 1)
        _projectlist__WEBPACK_IMPORTED_MODULE_0__["default"].updateProject(todo.project, project);
    }   

    return {
        //create
        addTodo, makeTodo,
        //read
        getTodo, getLength, getProjectList, getName, getProject, getDate, getStatus,
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
            } else {
                priorty = 'low';
            }
            const todo1 = _todo_todoAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].makeTodo(nameInput.value, projectName, dateInput.value, priorty, false);
            _todo_todoAPI_js__WEBPACK_IMPORTED_MODULE_0__["default"].addTodo(todo1);
            console.log(todo1);
            _todolist_js__WEBPACK_IMPORTED_MODULE_1__["default"].refreshList(projectName);
            _cancelSubmit();
        });

        const addDiv = document.querySelector('.add-div');
        
        addDiv.append(nameInput, dateInput, priortyInputs, cancelBtn, submitBtn);
        nameInput.focus();

    }


    const _editForms = (i, projectName) => {
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

        const editBtn = document.createElement('input');
        editBtn.setAttribute('type','button');
        editBtn.setAttribute('id','edit-button');
        editBtn.value = 'Submit';

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

    return {addTodo}


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
/* harmony import */ var _todo_todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todo/todo */ "./src/todo/todo.js");
/* harmony import */ var _todo_todoAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todo/todoAPI */ "./src/todo/todoAPI.js");
/* harmony import */ var _todo_project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todo/project */ "./src/todo/project.js");
/* harmony import */ var _addEditTodo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addEditTodo.js */ "./src/todolist/addEditTodo.js");






//FIX THE CREATETODOBUTTONS AND TODONAMESANDDATE
const todolist = (() => {

    const printProject = projectName => {
        _createTitle(`Project: ${projectName}`);
        _createAddButton(projectName);
        _createListDiv();
        _printList(projectName);
    }

    const _printList = projectName => {
        const list = document.querySelector('.list');

        const length = _todo_todoAPI__WEBPACK_IMPORTED_MODULE_2__["default"].getLength(projectName);
        const project = _todo_todoAPI__WEBPACK_IMPORTED_MODULE_2__["default"].getProjectList(projectName);
        
        for (let i = 0; i < length; i++) {
            const todo = document.createElement('div');
            todo.setAttribute('id',i);
            list.append(todo);
            _createTodoButtons(i, project, projectName);
            _todoNameAndDate(i, project, projectName);
            // todo.addEventListener('click', (e) => {
            //     addEditTodo.addTodo(projectName);
            // })
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
            _addEditTodo_js__WEBPACK_IMPORTED_MODULE_4__["default"].addTodo(projectName);
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
        check.style.backgroundColor = _todo_todoAPI__WEBPACK_IMPORTED_MODULE_2__["default"].getStatus(project[i]) ? 'var(--icon-color)' : 'white';

        check.addEventListener('click',  (e) => {
            _todo_todoAPI__WEBPACK_IMPORTED_MODULE_2__["default"].toggleStatus(i, project[i]);
            check.style.backgroundColor = _todo_todoAPI__WEBPACK_IMPORTED_MODULE_2__["default"].getStatus(project[i]) ? 'var(--icon-color)' : 'white';
        });

        const remove = document.createElement('button');
        remove.setAttribute('id','todoremove');
        remove.addEventListener('click', (e) => {
            _todo_todoAPI__WEBPACK_IMPORTED_MODULE_2__["default"].removeTodo(i, project[i]);
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
        name.innerHTML = `${_todo_todoAPI__WEBPACK_IMPORTED_MODULE_2__["default"].getName(project[i])}`;

        const date = document.createElement('p');
        date.setAttribute('class','todo-date');
        date.innerHTML = `${_todo_todoAPI__WEBPACK_IMPORTED_MODULE_2__["default"].getDate(project[i])}`;

        todo.append(todoContent);
        todoContent.append(name, date);

        todoContent.addEventListener('click', (e) => {
            _addEditTodo_js__WEBPACK_IMPORTED_MODULE_4__["default"].addTodo(projectName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLCtEQUFtQjtBQUMvQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvbGlzdC90b2RvbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9saXN0L3RvZG9saXN0LmNzcz9kOTFjIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8vcHJvamVjdGxpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8vdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvL3RvZG9BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb2xpc3QvYWRkRWRpdFRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb2xpc3QvdG9kb2xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ljb25zL2FkZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9pY29ucy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi4vaWNvbnMvZGVsZXRlLW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxyXFxuICAgIC0taWNvbi1jb2xvcjogI2ExYTFhYTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb2xpc3QtdGl0bGUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuI2FkZHRvZG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4jYWRkdG9kbzpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmxpc3Qge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5saXN0ID4gKiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDMwcHgvIDMwcHggMWZyIDMwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJjaGVjayBuYW1lRGF0ZSBkZWxldGVcXFwiO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAwLjVyZW07XFxyXFxuICAgIHJvdy1nYXA6IDVweDtcXHJcXG59XFxyXFxuLmxpc3QgPiAqIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi5saXN0ID4gKiBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiN0b2RvY2hlY2sge1xcclxcbiAgICBncmlkLWFyZWE6IGNoZWNrO1xcclxcbiAgICBoZWlnaHQ6IDgwJTtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWljb24tY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuI3RvZG9jaGVjazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb24tY29sb3IpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbnRlbnQge1xcclxcbiAgICBncmlkLWFyZWE6IG5hbWVEYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1uYW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWRhdGUge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9yZW1vdmUge1xcclxcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG59XFxyXFxuI3RvZG9yZW1vdmU6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFxcclxcbmFkZERpdlxcclxcbiovXFxyXFxuLmFkZC1kaXYge1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDI1JTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIDUwcHgpIC8gMTEwcHggODBweCA2MHB4IDcwcHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJuYW1lIG5hbWUgbmFtZSBuYW1lXFxcIlxcclxcbiAgICBcXFwiZGF0ZSBwcmlvcnR5IGNhbmNlbCBzdWJtaXRcXFwiO1xcclxcblxcclxcbiAgICBnYXA6IDAuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuI25hbWUtaW5wdXQge1xcclxcbiAgICBncmlkLWFyZWE6IG5hbWU7XFxyXFxufVxcclxcblxcclxcbiNkYXRlLWlucHV0IHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBkYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJpb3J0eS1pbnB1dHMge1xcclxcbiAgICBncmlkLWFyZWE6IHByaW9ydHk7XFxyXFxufVxcclxcblxcclxcbiNjYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjYW5jZWw7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jc3VibWl0LWJ1dHRvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogc3VibWl0O1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9kb2xpc3QvdG9kb2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCOztBQUV6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseURBQXVDO0lBQ3ZDLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7O0FBRXRCO0FBQ0E7SUFDSSxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQzsyQkFDdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQ0FBbUM7SUFDbkMsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5REFBMEM7SUFDMUMsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlEQUFrRDtJQUNsRCxlQUFlO0FBQ25COzs7QUFHQTs7Q0FFQztBQUNEO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQzs7SUFFaEMsYUFBYTs7SUFFYixhQUFhO0lBQ2IscURBQXFEO0lBQ3JEOztnQ0FFNEI7O0lBRTVCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0taWNvbi1jb2xvcjogI2ExYTFhYTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb2xpc3QtdGl0bGUge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuI2FkZHRvZG8ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaWNvbnMvYWRkLnN2Zyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgXFxyXFxufVxcclxcbiNhZGR0b2RvOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QgPiAqIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMzBweC8gMzBweCAxZnIgMzBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImNoZWNrIG5hbWVEYXRlIGRlbGV0ZVxcXCI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDAuNXJlbTtcXHJcXG4gICAgcm93LWdhcDogNXB4O1xcclxcbn1cXHJcXG4ubGlzdCA+ICogcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLmxpc3QgPiAqIGJ1dHRvbiB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI3RvZG9jaGVjayB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2hlY2s7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0taWNvbi1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4jdG9kb2NoZWNrOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taWNvbi1jb2xvcik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tY29udGVudCB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmFtZURhdGU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZGF0ZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdG9kb3JlbW92ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaWNvbnMvZGVsZXRlLnN2Zyk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcbiN0b2RvcmVtb3ZlOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ljb25zL2RlbGV0ZS1vdXRsaW5lLnN2Zyk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogXFxyXFxuYWRkRGl2XFxyXFxuKi9cXHJcXG4uYWRkLWRpdiB7XFxyXFxuICAgIGJvcmRlcjogc29saWQgMXB4O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMjUlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgNTBweCkgLyAxMTBweCA4MHB4IDYwcHggNzBweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcIm5hbWUgbmFtZSBuYW1lIG5hbWVcXFwiXFxyXFxuICAgIFxcXCJkYXRlIHByaW9ydHkgY2FuY2VsIHN1Ym1pdFxcXCI7XFxyXFxuXFxyXFxuICAgIGdhcDogMC4zcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jbmFtZS1pbnB1dCB7XFxyXFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXHJcXG59XFxyXFxuXFxyXFxuI2RhdGUtaW5wdXQge1xcclxcbiAgICBncmlkLWFyZWE6IGRhdGU7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcnR5LWlucHV0cyB7XFxyXFxuICAgIGdyaWQtYXJlYTogcHJpb3J0eTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbC1idXR0b24ge1xcclxcbiAgICBncmlkLWFyZWE6IGNhbmNlbDtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtYnV0dG9uIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBzdWJtaXQ7XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9saXN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdG9kbyBmcm9tIFwiLi90b2RvL3RvZG9cIjtcclxuaW1wb3J0IHByb2plY3QgZnJvbSBcIi4vdG9kby9wcm9qZWN0XCI7XHJcbmltcG9ydCBwcm9qZWN0bGlzdCBmcm9tIFwiLi90b2RvL3Byb2plY3RsaXN0XCI7XHJcbmltcG9ydCB0b2RvbGlzdCBmcm9tIFwiLi90b2RvbGlzdC90b2RvbGlzdFwiO1xyXG5cclxudG9kb2xpc3QucHJpbnRQcm9qZWN0KCd0d28nKTtcclxuIiwiaW1wb3J0IHByb2plY3RsaXN0IGZyb20gXCIuL3Byb2plY3RsaXN0XCI7XHJcbmltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmNvbnN0IHByb2plY3QgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkVG9kbyA9ICh0b2RvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RsaXN0LmdldFByb2plY3QodG9kby5wcm9qZWN0KTtcclxuXHJcbiAgICAgICAgcHJvamVjdC5wdXNoKHRvZG8pO1xyXG4gICAgICAgIHByb2plY3RsaXN0LmdldFByb2plY3QodG9kby5wcm9qZWN0KS5wdXNoKHRvZG8pO1xyXG5cclxuICAgICAgICBwcm9qZWN0bGlzdC51cGRhdGVQcm9qZWN0KHRvZG8ucHJvamVjdCwgcHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VG9kbyA9IHRvZG8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0bGlzdC5nZXRQcm9qZWN0KHRvZG8ucHJvamVjdCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0LmluZGV4T2YodG9kby5uYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgsIHRvZG8pID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdGxpc3QuZ2V0UHJvamVjdCh0b2RvLnByb2plY3QpO1xyXG4gICAgICAgIHByb2plY3QgPSBwcm9qZWN0LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBwcm9qZWN0bGlzdC51cGRhdGVQcm9qZWN0KHByb2plY3QpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVUb2RvID0gKGluZGV4LCB0b2RvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RsaXN0LmdldFByb2plY3QodG9kby5wcm9qZWN0KTtcclxuICAgICAgICBwcm9qZWN0W2luZGV4XSA9IHRvZG87XHJcbiAgICAgICAgcHJvamVjdGxpc3QudXBkYXRlUHJvamVjdCh0b2RvLnByb2plY3QsIHByb2plY3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RsaXN0LmdldFByb2plY3QodG9kby5wcm9qZWN0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgYWRkVG9kbywgZ2V0VG9kbywgcmVtb3ZlVG9kbywgdXBkYXRlVG9kb31cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByb2plY3Q7IiwiaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5cclxuY29uc3QgcHJvamVjdGxpc3QgPSAoKCkgPT4ge1xyXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IChuYW1lKSA9PiB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBzdG9yYWdlLnJldHJpZXZlUHJvamVjdHMoKTtcclxuICAgICAgICBsZXQgbmFtZUxpc3QgPSBzdG9yYWdlLnJldHJpZXZlTmFtZXMoKTtcclxuXHJcbiAgICAgICAgaWYobGlzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsaXN0ID0gW107XHJcbiAgICAgICAgICAgIG5hbWVMaXN0ID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NoZWNrcyBmb3IgZHVsaWNhdGUgcHJvamVjdHNcclxuICAgICAgICBpZiAobmFtZUxpc3QuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IFtdO1xyXG4gICAgICAgICAgICBsaXN0LnB1c2gocHJvamVjdCk7XHJcbiAgICAgICAgICAgIG5hbWVMaXN0LnB1c2gobmFtZSk7XHJcblxyXG4gICAgICAgICAgICBzdG9yYWdlLnN0b3JlUHJvamVjdHMobGlzdCk7XHJcbiAgICAgICAgICAgIHN0b3JhZ2Uuc3RvcmVOYW1lcyhuYW1lTGlzdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2R1cGxpY2F0ZSBwcm9qZWN0IG5hbWU/JylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gc3RvcmFnZS5yZXRyaWV2ZVByb2plY3RzKCk7XHJcbiAgICAgICAgY29uc3QgbmFtZUxpc3QgPSBzdG9yYWdlLnJldHJpZXZlTmFtZXMoKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBuYW1lTGlzdC5pbmRleE9mKHByb2plY3ROYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IHN0b3JhZ2UucmV0cmlldmVQcm9qZWN0cygpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVMaXN0ID0gc3RvcmFnZS5yZXRyaWV2ZU5hbWVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmFtZUxpc3QuaW5kZXhPZihwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgbmFtZUxpc3Quc2xpY2UoaW5kZXgpO1xyXG4gICAgICAgIGxpc3Quc2xpY2UoaW5kZXgpO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnN0b3JlUHJvamVjdHMobGlzdCk7XHJcbiAgICAgICAgc3RvcmFnZS5zdG9yZU5hbWVzKG5hbWVMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKHByb2plY3ROYW1lLCBwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IHN0b3JhZ2UucmV0cmlldmVQcm9qZWN0cygpO1xyXG4gICAgICAgIGNvbnN0IG5hbWVMaXN0ID0gc3RvcmFnZS5yZXRyaWV2ZU5hbWVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbmFtZUxpc3QuaW5kZXhPZihwcm9qZWN0TmFtZSk7XHJcblxyXG4gICAgICAgIGxpc3RbaW5kZXhdID0gKHByb2plY3QpO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnN0b3JlUHJvamVjdHMobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRQcm9qZWN0LCBnZXRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCB1cGRhdGVQcm9qZWN0XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0bGlzdDsiLCJjb25zdCBzdG9yYWdlID0gKCgpID0+IHtcclxuICAgIGNvbnN0IHN0b3JlUHJvamVjdHMgPSAocHJvamVjdHMpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3JlTmFtZXMgPSBuYW1lcyA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3ROYW1lcycsSlNPTi5zdHJpbmdpZnkobmFtZXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZU5hbWVzID0gbmFtZXMgPT4ge1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TmFtZXMnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIHtzdG9yZVByb2plY3RzLCByZXRyaWV2ZVByb2plY3RzLCBzdG9yZU5hbWVzLCByZXRyaWV2ZU5hbWVzfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZTsiLCJjb25zdCB0b2RvID0gKG5hbWUsIHByb2plY3QsIGR1ZURhdGUsIHByaW9ydHksIHN0YXR1cykgPT4ge1xyXG4gICAgcmV0dXJuIHtuYW1lLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcnR5LCBzdGF0dXN9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG87IiwiaW1wb3J0IHByb2plY3RsaXN0IGZyb20gXCIuL3Byb2plY3RsaXN0XCI7XHJcbmltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcblxyXG5jb25zdCB0b2RvQVBJID0gKCgpID0+IHtcclxuXHJcbiAgICAvL2NyZWF0ZVxyXG4gICAgY29uc3QgbWFrZVRvZG8gPSAobmFtZSwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3J0eSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG8xID0gdG9kbyhuYW1lLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcnR5LCBmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIHRvZG8xO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFRvZG8gPSAodG9kbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0bGlzdC5nZXRQcm9qZWN0KHRvZG8ucHJvamVjdCk7XHJcblxyXG4gICAgICAgIHByb2plY3QucHVzaCh0b2RvKTtcclxuICAgICAgICBwcm9qZWN0bGlzdC5nZXRQcm9qZWN0KHRvZG8ucHJvamVjdCkucHVzaCh0b2RvKTtcclxuXHJcbiAgICAgICAgcHJvamVjdGxpc3QudXBkYXRlUHJvamVjdCh0b2RvLnByb2plY3QsIHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vcmVhZFxyXG4gICAgY29uc3QgZ2V0VG9kbyA9IHRvZG8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0bGlzdC5nZXRQcm9qZWN0KHRvZG8ucHJvamVjdCk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBwcm9qZWN0LmluZGV4T2YodG9kby5uYW1lKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldExlbmd0aCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0bGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdExpc3QgPSAocHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdGxpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0TmFtZSA9IHRvZG8gPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IHRvZG8gPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvLnByb2plY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGF0ZSA9IHRvZG8gPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvLmR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0U3RhdHVzID0gdG9kbyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG8uc3RhdHVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZXJzP1xyXG4gICAgY29uc3QgdXBkYXRlVG9kbyA9IChpbmRleCwgdG9kbykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0bGlzdC5nZXRQcm9qZWN0KHRvZG8ucHJvamVjdCk7XHJcbiAgICAgICAgcHJvamVjdFtpbmRleF0gPSB0b2RvO1xyXG4gICAgICAgIHByb2plY3RsaXN0LnVwZGF0ZVByb2plY3QodG9kby5wcm9qZWN0LCBwcm9qZWN0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlU3RhdHVzID0gKGluZGV4LCB0b2RvKSA9PiB7ICBcclxuICAgICAgICB0b2RvLnN0YXR1cyA9ICF0b2RvLnN0YXR1cztcclxuICAgICAgICB1cGRhdGVUb2RvKGluZGV4LCB0b2RvKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy9kZWxldGVcclxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSAoaW5kZXgsIHRvZG8pID0+IHtcclxuICAgICAgICBsZXQgcHJvamVjdCA9IHByb2plY3RsaXN0LmdldFByb2plY3QodG9kby5wcm9qZWN0KTtcclxuICAgICAgICBwcm9qZWN0LnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBwcm9qZWN0bGlzdC51cGRhdGVQcm9qZWN0KHRvZG8ucHJvamVjdCwgcHJvamVjdCk7XHJcbiAgICB9ICAgXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL2NyZWF0ZVxyXG4gICAgICAgIGFkZFRvZG8sIG1ha2VUb2RvLFxyXG4gICAgICAgIC8vcmVhZFxyXG4gICAgICAgIGdldFRvZG8sIGdldExlbmd0aCwgZ2V0UHJvamVjdExpc3QsIGdldE5hbWUsIGdldFByb2plY3QsIGdldERhdGUsIGdldFN0YXR1cyxcclxuICAgICAgICAvL3VwZGF0ZVxyXG4gICAgICAgIHVwZGF0ZVRvZG8sIHRvZ2dsZVN0YXR1cywgXHJcbiAgICAgICAgLy9kZWxldGVcclxuICAgICAgICByZW1vdmVUb2RvLFxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb0FQSTsiLCIvL21pbmkgZm9ybSBnZW5lcmF0b3IgZm9yIGFkZGluZyBhZGRpbmcgYW5kIGVkaXRpbmcgdG9kb3NcclxuaW1wb3J0IHRvZG9BUEkgZnJvbSBcIi4uL3RvZG8vdG9kb0FQSS5qc1wiO1xyXG5pbXBvcnQgdG9kb2xpc3QgZnJvbSBcIi4vdG9kb2xpc3QuanNcIjtcclxuXHJcbmNvbnN0IGFkZEVkaXRUb2RvID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGFkZFRvZG8gPSBwcm9qZWN0TmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb2xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2xpc3QnKTtcclxuICAgICAgICBjb25zdCBhZGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhZGREaXYuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2FkZC1kaXYnKTtcclxuICAgICAgICB0b2RvbGlzdC5hcHBlbmQoYWRkRGl2KTtcclxuICAgICAgICBfYWRkRm9ybXMocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9hZGRGb3JtcyA9IHByb2plY3ROYW1lID0+IHtcclxuICAgICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHRvZG8nKTtcclxuICAgICAgICBhZGRUb2RvLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnbmFtZS1pbnB1dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsJ29mZicpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XHJcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkYXRlLWlucHV0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaW9ydHlJbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcmlvcnR5SW5wdXRzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcmlvcnR5LWlucHV0cycpO1xyXG5cclxuICAgICAgICBjb25zdCBwcmlvcnR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBwcmlvcnR5TG93LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9ydHknKTtcclxuICAgICAgICBwcmlvcnR5TG93LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgcHJpb3J0eUxvdy5hcHBlbmQoJ3gnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpb3J0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJpb3J0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIHByaW9ydHlNZWRpdW0uc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3J0eScpO1xyXG5cclxuICAgICAgICBjb25zdCBwcmlvcnR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJpb3J0eUhpZ2guc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBwcmlvcnR5SGlnaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcnR5Jyk7XHJcblxyXG4gICAgICAgIHByaW9ydHlJbnB1dHMuYXBwZW5kKHByaW9ydHlMb3csIHByaW9ydHlNZWRpdW0sIHByaW9ydHlIaWdoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdjYW5jZWwtYnV0dG9uJyk7XHJcbiAgICAgICAgY2FuY2VsQnRuLnZhbHVlID0gJ0NhbmNlbCc7XHJcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2NhbmNlbFN1Ym1pdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnc3VibWl0LWJ1dHRvbicpO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi52YWx1ZSA9ICdTdWJtaXQnO1xyXG5cclxuICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJpb3J0eTtcclxuICAgICAgICAgICAgaWYgKHByaW9ydHlNZWRpdW0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcHJpb3J0eSA9ICdtZWRpdW0nO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByaW9ydHlIaWdoLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHByaW9ydHkgPSAnaGlnaCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmlvcnR5ID0gJ2xvdyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdG9kbzEgPSB0b2RvQVBJLm1ha2VUb2RvKG5hbWVJbnB1dC52YWx1ZSwgcHJvamVjdE5hbWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3J0eSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0b2RvQVBJLmFkZFRvZG8odG9kbzEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvMSk7XHJcbiAgICAgICAgICAgIHRvZG9saXN0LnJlZnJlc2hMaXN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgX2NhbmNlbFN1Ym1pdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBhZGREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWRpdicpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGFkZERpdi5hcHBlbmQobmFtZUlucHV0LCBkYXRlSW5wdXQsIHByaW9ydHlJbnB1dHMsIGNhbmNlbEJ0biwgc3VibWl0QnRuKTtcclxuICAgICAgICBuYW1lSW5wdXQuZm9jdXMoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IF9lZGl0Rm9ybXMgPSAoaSwgcHJvamVjdE5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHRvZG8nKTtcclxuICAgICAgICBhZGRUb2RvLmRpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnbmFtZS1pbnB1dCcpO1xyXG4gICAgICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsJ29mZicpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XHJcbiAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkYXRlLWlucHV0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByaW9ydHlJbnB1dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcmlvcnR5SW5wdXRzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcmlvcnR5LWlucHV0cycpO1xyXG5cclxuICAgICAgICBjb25zdCBwcmlvcnR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBwcmlvcnR5TG93LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9ydHknKTtcclxuICAgICAgICBwcmlvcnR5TG93LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XHJcbiAgICAgICAgcHJpb3J0eUxvdy5hcHBlbmQoJ3gnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJpb3J0eU1lZGl1bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJpb3J0eU1lZGl1bS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xyXG4gICAgICAgIHByaW9ydHlNZWRpdW0uc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3J0eScpO1xyXG5cclxuICAgICAgICBjb25zdCBwcmlvcnR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcHJpb3J0eUhpZ2guc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcclxuICAgICAgICBwcmlvcnR5SGlnaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcnR5Jyk7XHJcblxyXG4gICAgICAgIHByaW9ydHlJbnB1dHMuYXBwZW5kKHByaW9ydHlMb3csIHByaW9ydHlNZWRpdW0sIHByaW9ydHlIaWdoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdjYW5jZWwtYnV0dG9uJyk7XHJcbiAgICAgICAgY2FuY2VsQnRuLnZhbHVlID0gJ0NhbmNlbCc7XHJcbiAgICAgICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2NhbmNlbFN1Ym1pdCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnZWRpdC1idXR0b24nKTtcclxuICAgICAgICBlZGl0QnRuLnZhbHVlID0gJ1N1Ym1pdCc7XHJcblxyXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHJpb3J0eTtcclxuICAgICAgICAgICAgaWYgKHByaW9ydHlNZWRpdW0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcHJpb3J0eSA9ICdtZWRpdW0nO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByaW9ydHlIaWdoLmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHByaW9ydHkgPSAnaGlnaCc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcmlvcnR5ID0gJ2xvdyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdG9kbzEgPSB0b2RvQVBJLm1ha2VUb2RvKG5hbWVJbnB1dC52YWx1ZSwgcHJvamVjdE5hbWUsIGRhdGVJbnB1dC52YWx1ZSwgcHJpb3J0eSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB0b2RvQVBJLnVwZGF0ZVRvZG8oaSwgdG9kbzEpO1xyXG4gICAgICAgICAgICB0b2RvbGlzdC5yZWZyZXNoTGlzdChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgIF9jYW5jZWxTdWJtaXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kaXYnKTtcclxuICAgICAgICBcclxuICAgICAgICBhZGREaXYuYXBwZW5kKG5hbWVJbnB1dCwgZGF0ZUlucHV0LCBwcmlvcnR5SW5wdXRzLCBjYW5jZWxCdG4sIGVkaXRCdG4pO1xyXG4gICAgICAgIG5hbWVJbnB1dC5mb2N1cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9jYW5jZWxTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWRkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1kaXYnKTtcclxuICAgICAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHRvZG8nKTtcclxuICAgICAgICBhZGREaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgYWRkVG9kby5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7YWRkVG9kb31cclxuXHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkRWRpdFRvZG87IiwiaW1wb3J0ICcuL3RvZG9saXN0LmNzcydcclxuaW1wb3J0IHRvZG8gZnJvbSAnLi4vdG9kby90b2RvJztcclxuaW1wb3J0IHRvZG9BUEkgZnJvbSAnLi4vdG9kby90b2RvQVBJJztcclxuaW1wb3J0IHByb2plY3QgZnJvbSAnLi4vdG9kby9wcm9qZWN0JztcclxuaW1wb3J0IGFkZEVkaXRUb2RvIGZyb20gJy4vYWRkRWRpdFRvZG8uanMnO1xyXG5cclxuLy9GSVggVEhFIENSRUFURVRPRE9CVVRUT05TIEFORCBUT0RPTkFNRVNBTkREQVRFXHJcbmNvbnN0IHRvZG9saXN0ID0gKCgpID0+IHtcclxuXHJcbiAgICBjb25zdCBwcmludFByb2plY3QgPSBwcm9qZWN0TmFtZSA9PiB7XHJcbiAgICAgICAgX2NyZWF0ZVRpdGxlKGBQcm9qZWN0OiAke3Byb2plY3ROYW1lfWApO1xyXG4gICAgICAgIF9jcmVhdGVBZGRCdXR0b24ocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIF9jcmVhdGVMaXN0RGl2KCk7XHJcbiAgICAgICAgX3ByaW50TGlzdChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3ByaW50TGlzdCA9IHByb2plY3ROYW1lID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QnKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdG9kb0FQSS5nZXRMZW5ndGgocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0b2RvQVBJLmdldFByb2plY3RMaXN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgdG9kby5zZXRBdHRyaWJ1dGUoJ2lkJyxpKTtcclxuICAgICAgICAgICAgbGlzdC5hcHBlbmQodG9kbyk7XHJcbiAgICAgICAgICAgIF9jcmVhdGVUb2RvQnV0dG9ucyhpLCBwcm9qZWN0LCBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgIF90b2RvTmFtZUFuZERhdGUoaSwgcHJvamVjdCwgcHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICAvLyB0b2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGFkZEVkaXRUb2RvLmFkZFRvZG8ocHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWZyZXNoTGlzdCA9IHByb2plY3ROYW1lID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IG9sZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdCcpO1xyXG4gICAgICAgIHRvZG9saXN0RGl2LnJlbW92ZUNoaWxkKG9sZExpc3QpO1xyXG5cclxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdCcpO1xyXG4gICAgICAgIHRvZG9saXN0RGl2LmFwcGVuZChsaXN0KTtcclxuXHJcbiAgICAgICAgX3ByaW50TGlzdChwcm9qZWN0TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZUFkZEJ1dHRvbiA9IHByb2plY3ROYW1lID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IGFkZEJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGFkZEJ1dHRvbkRpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYWRkLWJ1dHRvbicpO1xyXG5cclxuICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBhZGQuc2V0QXR0cmlidXRlKCdpZCcsJ2FkZHRvZG8nKTtcclxuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBhZGRFZGl0VG9kby5hZGRUb2RvKHByb2plY3ROYW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnYWRkdG9kbycpO1xyXG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9ICdhZGQgYSB0b2RvJztcclxuICAgICAgICBcclxuICAgICAgICBhZGRCdXR0b25EaXYuYXBwZW5kKGFkZCwgbGFiZWwpO1xyXG4gICAgICAgIHRvZG9saXN0RGl2LmFwcGVuZChhZGRCdXR0b25EaXYpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVUaXRsZSA9ICh0aXRsZU5hbWUpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndG9kb2xpc3QtdGl0bGUnKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZU5hbWU7XHJcbiAgICAgICAgdG9kb2xpc3REaXYuYXBwZW5kKHRpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfY3JlYXRlTGlzdERpdiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2RvbGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaXN0Jyk7XHJcbiAgICAgICAgdG9kb2xpc3REaXYuYXBwZW5kKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9jcmVhdGVUb2RvQnV0dG9ucyA9IChpLCBwcm9qZWN0LCBwcm9qZWN0TmFtZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgY2hlY2suc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9jaGVjaycpO1xyXG4gICAgICAgIGNoZWNrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRvZG9BUEkuZ2V0U3RhdHVzKHByb2plY3RbaV0pID8gJ3ZhcigtLWljb24tY29sb3IpJyA6ICd3aGl0ZSc7XHJcblxyXG4gICAgICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgIChlKSA9PiB7XHJcbiAgICAgICAgICAgIHRvZG9BUEkudG9nZ2xlU3RhdHVzKGksIHByb2plY3RbaV0pO1xyXG4gICAgICAgICAgICBjaGVjay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0b2RvQVBJLmdldFN0YXR1cyhwcm9qZWN0W2ldKSA/ICd2YXIoLS1pY29uLWNvbG9yKScgOiAnd2hpdGUnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICByZW1vdmUuc2V0QXR0cmlidXRlKCdpZCcsJ3RvZG9yZW1vdmUnKTtcclxuICAgICAgICByZW1vdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICB0b2RvQVBJLnJlbW92ZVRvZG8oaSwgcHJvamVjdFtpXSk7XHJcbiAgICAgICAgICAgIHJlZnJlc2hMaXN0KHByb2plY3ROYW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG9kby5hcHBlbmQoY2hlY2ssIHJlbW92ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3RvZG9OYW1lQW5kRGF0ZSA9IChpLCBwcm9qZWN0LCBwcm9qZWN0TmFtZSkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdG9kb0NvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8tY29udGVudCcpO1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIG5hbWUuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLW5hbWUnKTtcclxuICAgICAgICBuYW1lLmlubmVySFRNTCA9IGAke3RvZG9BUEkuZ2V0TmFtZShwcm9qZWN0W2ldKX1gO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGRhdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RvZG8tZGF0ZScpO1xyXG4gICAgICAgIGRhdGUuaW5uZXJIVE1MID0gYCR7dG9kb0FQSS5nZXREYXRlKHByb2plY3RbaV0pfWA7XHJcblxyXG4gICAgICAgIHRvZG8uYXBwZW5kKHRvZG9Db250ZW50KTtcclxuICAgICAgICB0b2RvQ29udGVudC5hcHBlbmQobmFtZSwgZGF0ZSk7XHJcblxyXG4gICAgICAgIHRvZG9Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgYWRkRWRpdFRvZG8uYWRkVG9kbyhwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge3ByaW50UHJvamVjdCwgcmVmcmVzaExpc3R9XHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb2xpc3Q7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9