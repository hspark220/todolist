"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["todolist"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "/* \r\ntodolist\r\n*/\r\n.todolist {\r\n    padding: 10px;\r\n}\r\n\r\n\r\n/* \r\nlist\r\n*/\r\n.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.list-item {\r\n    display: grid;\r\n    grid-template-columns: 16px 1fr 16px;\r\n    grid-template-areas: \"complete title description delete\";\r\n    align-items: center;\r\n    gap: 1rem;\r\n}   \r\n#complete {\r\n    grid-area: complete;\r\n    \r\n}\r\n.list-title {\r\n    grid-area: title;\r\n}\r\n#delete {\r\n    grid-area: delete;\r\n}\r\n.list-item input {\r\n    height: 16px;\r\n    width: 16px;\r\n}\r\n\r\n/* \r\ninput forms\r\n*/\r\n", "",{"version":3,"sources":["webpack://./src/todolist/todolist.css"],"names":[],"mappings":"AAAA;;CAEC;AACD;IACI,aAAa;AACjB;;;AAGA;;CAEC;AACD;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,aAAa;IACb,oCAAoC;IACpC,wDAAwD;IACxD,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,mBAAmB;;AAEvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;;CAEC","sourcesContent":["/* \r\ntodolist\r\n*/\r\n.todolist {\r\n    padding: 10px;\r\n}\r\n\r\n\r\n/* \r\nlist\r\n*/\r\n.list {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.list-item {\r\n    display: grid;\r\n    grid-template-columns: 16px 1fr 16px;\r\n    grid-template-areas: \"complete title description delete\";\r\n    align-items: center;\r\n    gap: 1rem;\r\n}   \r\n#complete {\r\n    grid-area: complete;\r\n    \r\n}\r\n.list-title {\r\n    grid-area: title;\r\n}\r\n#delete {\r\n    grid-area: delete;\r\n}\r\n.list-item input {\r\n    height: 16px;\r\n    width: 16px;\r\n}\r\n\r\n/* \r\ninput forms\r\n*/\r\n"],"sourceRoot":""}]);
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

/***/ "./src/inputforms/createEdit.js":
/*!**************************************!*\
  !*** ./src/inputforms/createEdit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todolist_manageTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../todolist/manageTodo */ "./src/todolist/manageTodo.js");


const createEdit = (() => {
    const create = () => {
        _createForm();
        const fieldset = document.getElementById('fieldset');
        const createSubmit = document.createElement('input');
        createSubmit.setAttribute('type','button');
        createSubmit.setAttribute('id','create-submit');

        createSubmit.addEventListener('click', _submitCreate);

        fieldset.append(createSubmit);
        
    }

    const edit = (e) => {
        _createForm();
        const fieldset = document.getElementById('fieldset');
        const editSubmit = document.createElement('input');
        editSubmit.setAttribute('type','button');
        editSubmit.setAttribute('id','create-submit');

        createSubmit.addEventListener('click', _submitEdit);

        fieldset.append(createSubmit);
    }

    const _submitCreate = () => {
        const titleInput = document.querySelector('#title-input');
        const descriptionInput = document.querySelector('#description-input');
        const dueDateInput = document.querySelector('#dueDate-input');
        const priortyInput = documnet.querySelector('#priorty-input');

        _todolist_manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(titleInput.ariaValueMax, descriptionInput.ariaValueMax, dueDateInput.ariaValueMax, priortyInput.value, '???');
        _clearForm();
    }

    const _clearForm = () => {
        const fieldset = document.getElementById('fieldset');
        fieldset.remove();
    }

    _createForm = () => {
        const fieldset = document.createElement('fieldset');
        fieldset.setAttribute('id','fieldset');
        
        const titleDiv = documnet.createElement('div');
        const descriptionDiv = documnet.createElement('div');
        const dueDateDiv = documnet.createElement('div');
        const priortyDiv = documnet.createElement('div');

        const titleLabel = document.createElement('label');
        const titleInput = document.createElement('input');
        const descriptionLabel = document.createElement('label');
        const descriptionInput = document.createElement('input');
        const dueDateLabel = document.createElement('label');
        const dueDateInput = document.createElement('input');
        const priortyInput = document.createElement('select');
        const optgroup = document.createElement('optgroup');
        const optionLow = document.createElement('option');
        const optionMedium = document.createElement('option');
        const optionHigh = document.createElement('option');

        titleDiv.setAttribute('class','title-div')
        titleLabel.setAttribute('for','title-inpu');
        titleInput.setAttribute('type','text');
        titleInput.setAttribute('id','title-input');

        descriptionDiv.setAttribute('class','description-div');
        descriptionLabel.setAttribute('for','description-input');
        descriptionInput.setAttribute('type','text');
        descriptionInput.setAttribute('id','description-input');

        dueDateDiv.setAttribute('class','dueDate-div');
        dueDateLabel.setAttribute('for','dueDate-input');
        dueDateInput.setAttribute('type','date');
        dueDateInput.setAttribute('id','dueDate-input');

        priortyDiv.setAttribute('class','priorty-div');
        priortyInput.setAttribute('id','priorty-input');
        optionLow.setAttribute('value','low');
        optionMedium.setAttribute('value','medium');
        optionHigh.setAttribute('value','high');

        optionLow.innerHTML('Low');
        optionMedium.innerHTML('Medium');
        optionHigh.innerHTML('High');
        optgroup.append(optionLow, optionMedium, optionHigh);
        priortyInput.append(optgroup);

        priortyDiv.append(priortyInput);
        dueDateDiv.append(dueDateLabel, dueDateInput);
        descriptionDiv.append(descriptionLabel, descriptionInput);
        titleDiv.append(titleLabel, titleInput);

        fieldset.append(titleDiv, descriptionDiv, dueDateDiv, priortyDiv);

        const todolist = document.querySelector('.todolist');
        todolist.append(fieldset);

    }

    return {create, edit}

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEdit);

/***/ }),

/***/ "./src/todolist/manageTodo.js":
/*!************************************!*\
  !*** ./src/todolist/manageTodo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoStorage.js */ "./src/todolist/todoStorage.js");


const manageTodo = (() => {
    //constructor?
    const createTodo = (title, description, dueDate, priorty, checklist) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].storeTodo(title, description, dueDate, priorty, checklist);
        
    }

    const removeTodo = key => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(key);
    }

    //getters
    const getTodo = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key);
    }

    const getTitle = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTitle(key);
    }

    const getDescription = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveDescription(key);
    }

    const getDueDate = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveDueDate(key);
    }

    const getPriorty = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrievePriorty(key);
    }

    const getChecklist = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveChecklist(key);
    }

    //changers
    const  changeTitle = (key, newTitle) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTitle(key, newTitle);
    }

    const changeDescription = (key, newDescription) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateDescription(key, newDescription);
    }

    const changeDueDate = (key, newDueDate) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateDueDate(key, newDueDate);
    }

    const changePriorty = (key, newPriorty) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updatePriorty(key, newPriorty);
    }

    const changeChecklist = (key, newChecklist) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateChecklist(key, newChecklist);
    }

    return {
        //constructor and remover?
        createTodo, removeTodo,
        //getter
        getTodo, getTitle, getDescription, getDueDate, getPriorty, getChecklist,
        //changer
        changeTitle, changeDescription, changeDueDate, changePriorty, changeChecklist

    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manageTodo);

/***/ }),

/***/ "./src/todolist/todo.js":
/*!******************************!*\
  !*** ./src/todolist/todo.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todo = (title, description, dueDate, priorty, checklist) => {
    const getTitle = () => {
        return title;
    }

    const getDescription = () => {
        return description;
    }

    const getDueDate = () => {
        return dueDate;
    }

    const getPriorty = () => {
        return priorty;
    }

    const getChecklist = () => {
        return checklist;
    }

    //setters
    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const setDescription = (newDescription) => {
        description = newDescription;
    }

    const setDueDate = (newDueDate) => {
        dueDate = newDueDate;
    }

    const setPriorty = (newPriorty) => {
        priorty = newPriorty;
    }

    const setChecklist = (newChecklist) => {
        checklist = newChecklist;
    }

    return {
        //getter
        getTitle, getDescription, getDueDate, getPriorty, getChecklist,
        //setter
        setTitle, setDescription, setDueDate, setPriorty, setChecklist
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);

/***/ }),

/***/ "./src/todolist/todoStorage.js":
/*!*************************************!*\
  !*** ./src/todolist/todoStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todolist/todo.js");
// 
// function for storing and retrieving todos
// 


const todoStorage = (() => {
    //private methods
    const _stringTodo = todo => {
        return `${todo.getTitle()}:,:${todo.getDescription()}:,:${todo.getDueDate()}:,:${todo.getPriorty()}:,:${todo.getChecklist()}`
    }
    //store
    const storeTodo = (title, description, dueDate, priorty, checklist) => {
        if(localStorage.getItem(title) === null) {
            //cause an error?
            return
        }
        const tempTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priorty, checklist);
        localStorage.setItem(title,_stringTodo(tempTodo));
    }

    //delete
    const deleteTodo = key => {
        localStorage.removeItem(retrieveTitle(key));    
    }

    //retrieve
    const retrieveTodo = key => {
        try {
            const todoString = localStorage.getItem(localStorage.key(key));
            const todoArray = todoString.split(':,:');
            return (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todoArray[0], todoArray[1], todoArray[2], todoArray[3], todoArray[4]);
        } catch {
            return null;
        }
        
    }

    const retrieveTitle = key => {
        return retrieveTodo(key).getTitle();
    }

    const retrieveDescription = key => {
        return retrieveTodo(key).getDescription();
    }

    const retrieveDueDate = key => {
        return retrieveTodo(key).getDueDate();
    }

    const retrievePriorty = key => {
        return retrieveTodo(key).getPriorty();
    }

    const retrieveChecklist = key => {
        return retrieveTodo(key).getChecklist();
    }

    //update
    const updateTitle = (key, newTitle) => {
        retrieveTodo(key).setTitle(newTitle);
    }

    const updateDescription = (key, newDescription) => {
        retrieveTodo(key).setDescription(newDescription);
    }

    const updateDueDate = (key, newDueDate) => {
        retrieveTodo(key).setDueDate(newDueDate);
    }

    const updatePriorty = (key, newPriorty) => {
        retrieveTodo(key).setPriorty(newPriorty);
    }

    const updateChecklist = (key, newChecklist) => {
        retrieveTodo(key).setChecklist(newChecklist);
    }


    return {
        //store and delete
        storeTodo, deleteTodo,
        //retrieve
        retrieveTodo, retrieveTitle, retrieveDescription, retrieveDueDate, retrievePriorty, retrieveChecklist,
        //update
        updateTitle, updateDescription, updateDueDate, updatePriorty, updateChecklist
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
/* harmony import */ var _manageTodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageTodo */ "./src/todolist/manageTodo.js");
/* harmony import */ var _todolist_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todolist.css */ "./src/todolist/todolist.css");




const todolist = (() => {
    
    const _makeList = () => {
        const list = document.createElement('div');
        list.setAttribute('class','list');
        let i = 0;
        while (localStorage.key(i) != null) {
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
        title.innerHTML = _manageTodo__WEBPACK_IMPORTED_MODULE_1__["default"].getTitle(key);

        const buttons = _makeTodoButtons();

        todoDiv.append(title, buttons[0], buttons[1]);
        div.append(todoDiv);

        
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
        const createBtn = document.createElement('input');
        createBtn.setAttribute('type','button');
        createBtn.setAttribute('id','create');

        createBtn.addEventListener('click',_createBtn);

        return createBtn;
    }

    const _completeBtn = (e) => {

    }

    const _removeBtn = (e) => {
        const id = e.target.parentNode.id;
        _manageTodo__WEBPACK_IMPORTED_MODULE_1__["default"].removeTodo(id);
        _updatePage();
    }

    const _createBtn = (e) => {
        _inputforms_createEdit__WEBPACK_IMPORTED_MODULE_0__["default"].create();
        
    }

    const _edit = (e) => {

    }

    const _updatePage = () => {
        const main = document.querySelector('.todolist');
        main.removeChild(main.lastChild);
        const list = _makeList();
    
        main.append(list);
    }

    const printPage = () => {
        const main = document.querySelector('.todolist');
        const list = _makeList();
        const createBtn = _makeCreateButton();
    
        main.append(createBtn, list);
    }

    return { printPage }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todolist);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/todolist/todolist.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb2xpc3QvdG9kb2xpc3QuY3NzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9saXN0L3RvZG9saXN0LmNzcz9kOTFjIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5wdXRmb3Jtcy9jcmVhdGVFZGl0LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9saXN0L21hbmFnZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kb2xpc3QvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvbGlzdC90b2RvU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvbGlzdC90b2RvbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFxcclxcbnRvZG9saXN0XFxyXFxuKi9cXHJcXG4udG9kb2xpc3Qge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBcXHJcXG5saXN0XFxyXFxuKi9cXHJcXG4ubGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcbi5saXN0LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE2cHggMWZyIDE2cHg7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJjb21wbGV0ZSB0aXRsZSBkZXNjcmlwdGlvbiBkZWxldGVcXFwiO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufSAgIFxcclxcbiNjb21wbGV0ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogY29tcGxldGU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4ubGlzdC10aXRsZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxyXFxufVxcclxcbiNkZWxldGUge1xcclxcbiAgICBncmlkLWFyZWE6IGRlbGV0ZTtcXHJcXG59XFxyXFxuLmxpc3QtaXRlbSBpbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMTZweDtcXHJcXG4gICAgd2lkdGg6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi8qIFxcclxcbmlucHV0IGZvcm1zXFxyXFxuKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9kb2xpc3QvdG9kb2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDO0FBQ0Q7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTs7Q0FFQztBQUNEO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyx3REFBd0Q7SUFDeEQsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7O0NBRUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogXFxyXFxudG9kb2xpc3RcXHJcXG4qL1xcclxcbi50b2RvbGlzdCB7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFxcclxcbmxpc3RcXHJcXG4qL1xcclxcbi5saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuLmxpc3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTZweCAxZnIgMTZweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImNvbXBsZXRlIHRpdGxlIGRlc2NyaXB0aW9uIGRlbGV0ZVxcXCI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59ICAgXFxyXFxuI2NvbXBsZXRlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjb21wbGV0ZTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5saXN0LXRpdGxlIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXHJcXG59XFxyXFxuI2RlbGV0ZSB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGVsZXRlO1xcclxcbn1cXHJcXG4ubGlzdC1pdGVtIGlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgICB3aWR0aDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogXFxyXFxuaW5wdXQgZm9ybXNcXHJcXG4qL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG9saXN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdG9kb2xpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBtYW5hZ2VUb2RvIGZyb20gXCIuLi90b2RvbGlzdC9tYW5hZ2VUb2RvXCI7XHJcblxyXG5jb25zdCBjcmVhdGVFZGl0ID0gKCgpID0+IHtcclxuICAgIGNvbnN0IGNyZWF0ZSA9ICgpID0+IHtcclxuICAgICAgICBfY3JlYXRlRm9ybSgpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjcmVhdGVTdWJtaXQuc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgY3JlYXRlU3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCdjcmVhdGUtc3VibWl0Jyk7XHJcblxyXG4gICAgICAgIGNyZWF0ZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zdWJtaXRDcmVhdGUpO1xyXG5cclxuICAgICAgICBmaWVsZHNldC5hcHBlbmQoY3JlYXRlU3VibWl0KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0ID0gKGUpID0+IHtcclxuICAgICAgICBfY3JlYXRlRm9ybSgpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkc2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgY29uc3QgZWRpdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZWRpdFN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgICAgICBlZGl0U3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCdjcmVhdGUtc3VibWl0Jyk7XHJcblxyXG4gICAgICAgIGNyZWF0ZVN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9zdWJtaXRFZGl0KTtcclxuXHJcbiAgICAgICAgZmllbGRzZXQuYXBwZW5kKGNyZWF0ZVN1Ym1pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3N1Ym1pdENyZWF0ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlLWlucHV0Jyk7XHJcbiAgICAgICAgY29uc3QgcHJpb3J0eUlucHV0ID0gZG9jdW1uZXQucXVlcnlTZWxlY3RvcignI3ByaW9ydHktaW5wdXQnKTtcclxuXHJcbiAgICAgICAgbWFuYWdlVG9kby5jcmVhdGVUb2RvKHRpdGxlSW5wdXQuYXJpYVZhbHVlTWF4LCBkZXNjcmlwdGlvbklucHV0LmFyaWFWYWx1ZU1heCwgZHVlRGF0ZUlucHV0LmFyaWFWYWx1ZU1heCwgcHJpb3J0eUlucHV0LnZhbHVlLCAnPz8/Jyk7XHJcbiAgICAgICAgX2NsZWFyRm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9jbGVhckZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGRzZXQnKTtcclxuICAgICAgICBmaWVsZHNldC5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBfY3JlYXRlRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgZmllbGRzZXQuc2V0QXR0cmlidXRlKCdpZCcsJ2ZpZWxkc2V0Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bW5ldC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtbmV0LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGR1ZURhdGVEaXYgPSBkb2N1bW5ldC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBwcmlvcnR5RGl2ID0gZG9jdW1uZXQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb25zdCBwcmlvcnR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcclxuICAgICAgICBjb25zdCBvcHRncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGdyb3VwJyk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG5cclxuICAgICAgICB0aXRsZURpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndGl0bGUtZGl2JylcclxuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGl0bGUtaW5wdScpO1xyXG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xyXG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsJ3RpdGxlLWlucHV0Jyk7XHJcblxyXG4gICAgICAgIGRlc2NyaXB0aW9uRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdkZXNjcmlwdGlvbi1kaXYnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZGVzY3JpcHRpb24taW5wdXQnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCdkZXNjcmlwdGlvbi1pbnB1dCcpO1xyXG5cclxuICAgICAgICBkdWVEYXRlRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdkdWVEYXRlLWRpdicpO1xyXG4gICAgICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2R1ZURhdGUtaW5wdXQnKTtcclxuICAgICAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywnZGF0ZScpO1xyXG4gICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywnZHVlRGF0ZS1pbnB1dCcpO1xyXG5cclxuICAgICAgICBwcmlvcnR5RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdwcmlvcnR5LWRpdicpO1xyXG4gICAgICAgIHByaW9ydHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJpb3J0eS1pbnB1dCcpO1xyXG4gICAgICAgIG9wdGlvbkxvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbG93Jyk7XHJcbiAgICAgICAgb3B0aW9uTWVkaXVtLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdtZWRpdW0nKTtcclxuICAgICAgICBvcHRpb25IaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdoaWdoJyk7XHJcblxyXG4gICAgICAgIG9wdGlvbkxvdy5pbm5lckhUTUwoJ0xvdycpO1xyXG4gICAgICAgIG9wdGlvbk1lZGl1bS5pbm5lckhUTUwoJ01lZGl1bScpO1xyXG4gICAgICAgIG9wdGlvbkhpZ2guaW5uZXJIVE1MKCdIaWdoJyk7XHJcbiAgICAgICAgb3B0Z3JvdXAuYXBwZW5kKG9wdGlvbkxvdywgb3B0aW9uTWVkaXVtLCBvcHRpb25IaWdoKTtcclxuICAgICAgICBwcmlvcnR5SW5wdXQuYXBwZW5kKG9wdGdyb3VwKTtcclxuXHJcbiAgICAgICAgcHJpb3J0eURpdi5hcHBlbmQocHJpb3J0eUlucHV0KTtcclxuICAgICAgICBkdWVEYXRlRGl2LmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCk7XHJcbiAgICAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xyXG4gICAgICAgIHRpdGxlRGl2LmFwcGVuZCh0aXRsZUxhYmVsLCB0aXRsZUlucHV0KTtcclxuXHJcbiAgICAgICAgZmllbGRzZXQuYXBwZW5kKHRpdGxlRGl2LCBkZXNjcmlwdGlvbkRpdiwgZHVlRGF0ZURpdiwgcHJpb3J0eURpdik7XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZG9saXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9saXN0Jyk7XHJcbiAgICAgICAgdG9kb2xpc3QuYXBwZW5kKGZpZWxkc2V0KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtjcmVhdGUsIGVkaXR9XHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRWRpdDsiLCJpbXBvcnQgdG9kb1N0b3JhZ2UgZnJvbSAnLi90b2RvU3RvcmFnZS5qcyc7XHJcblxyXG5jb25zdCBtYW5hZ2VUb2RvID0gKCgpID0+IHtcclxuICAgIC8vY29uc3RydWN0b3I/XHJcbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2Uuc3RvcmVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS5kZWxldGVUb2RvKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXR0ZXJzXHJcbiAgICBjb25zdCBnZXRUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVRpdGxlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZURlc2NyaXB0aW9uKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlRHVlRGF0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9ydHkgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVByaW9ydHkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDaGVja2xpc3QgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZUNoZWNrbGlzdChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY2hhbmdlcnNcclxuICAgIGNvbnN0ICBjaGFuZ2VUaXRsZSA9IChrZXksIG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlVGl0bGUoa2V5LCBuZXdUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAoa2V5LCBuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZURlc2NyaXB0aW9uKGtleSwgbmV3RGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUR1ZURhdGUgPSAoa2V5LCBuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlRHVlRGF0ZShrZXksIG5ld0R1ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVByaW9ydHkgPSAoa2V5LCBuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlUHJpb3J0eShrZXksIG5ld1ByaW9ydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNoZWNrbGlzdCA9IChrZXksIG5ld0NoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZUNoZWNrbGlzdChrZXksIG5ld0NoZWNrbGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL2NvbnN0cnVjdG9yIGFuZCByZW1vdmVyP1xyXG4gICAgICAgIGNyZWF0ZVRvZG8sIHJlbW92ZVRvZG8sXHJcbiAgICAgICAgLy9nZXR0ZXJcclxuICAgICAgICBnZXRUb2RvLCBnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9ydHksIGdldENoZWNrbGlzdCxcclxuICAgICAgICAvL2NoYW5nZXJcclxuICAgICAgICBjaGFuZ2VUaXRsZSwgY2hhbmdlRGVzY3JpcHRpb24sIGNoYW5nZUR1ZURhdGUsIGNoYW5nZVByaW9ydHksIGNoYW5nZUNoZWNrbGlzdFxyXG5cclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hbmFnZVRvZG87IiwiY29uc3QgdG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9ydHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByaW9ydHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0Q2hlY2tsaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjaGVja2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXR0ZXJzXHJcbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xyXG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFByaW9ydHkgPSAobmV3UHJpb3J0eSkgPT4ge1xyXG4gICAgICAgIHByaW9ydHkgPSBuZXdQcmlvcnR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENoZWNrbGlzdCA9IChuZXdDaGVja2xpc3QpID0+IHtcclxuICAgICAgICBjaGVja2xpc3QgPSBuZXdDaGVja2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL2dldHRlclxyXG4gICAgICAgIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3J0eSwgZ2V0Q2hlY2tsaXN0LFxyXG4gICAgICAgIC8vc2V0dGVyXHJcbiAgICAgICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcnR5LCBzZXRDaGVja2xpc3RcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kbzsiLCIvLyBcclxuLy8gZnVuY3Rpb24gZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmcgdG9kb3NcclxuLy8gXHJcbmltcG9ydCB0b2RvIGZyb20gJy4vdG9kby5qcyc7XHJcblxyXG5jb25zdCB0b2RvU3RvcmFnZSA9ICgoKSA9PiB7XHJcbiAgICAvL3ByaXZhdGUgbWV0aG9kc1xyXG4gICAgY29uc3QgX3N0cmluZ1RvZG8gPSB0b2RvID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7dG9kby5nZXRUaXRsZSgpfTosOiR7dG9kby5nZXREZXNjcmlwdGlvbigpfTosOiR7dG9kby5nZXREdWVEYXRlKCl9Oiw6JHt0b2RvLmdldFByaW9ydHkoKX06LDoke3RvZG8uZ2V0Q2hlY2tsaXN0KCl9YFxyXG4gICAgfVxyXG4gICAgLy9zdG9yZVxyXG4gICAgY29uc3Qgc3RvcmVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0odGl0bGUpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vY2F1c2UgYW4gZXJyb3I/XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0ZW1wVG9kbyA9IHRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRpdGxlLF9zdHJpbmdUb2RvKHRlbXBUb2RvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZWxldGVcclxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSBrZXkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHJldHJpZXZlVGl0bGUoa2V5KSk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vcmV0cmlldmVcclxuICAgIGNvbnN0IHJldHJpZXZlVG9kbyA9IGtleSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kb1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZS5rZXkoa2V5KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9BcnJheSA9IHRvZG9TdHJpbmcuc3BsaXQoJzosOicpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9kbyh0b2RvQXJyYXlbMF0sIHRvZG9BcnJheVsxXSwgdG9kb0FycmF5WzJdLCB0b2RvQXJyYXlbM10sIHRvZG9BcnJheVs0XSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZVRpdGxlID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0VGl0bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZURlc2NyaXB0aW9uID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZUR1ZURhdGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXREdWVEYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVQcmlvcnR5ID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0UHJpb3J0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlQ2hlY2tsaXN0ID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0Q2hlY2tsaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy91cGRhdGVcclxuICAgIGNvbnN0IHVwZGF0ZVRpdGxlID0gKGtleSwgbmV3VGl0bGUpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXRUaXRsZShuZXdUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlRGVzY3JpcHRpb24gPSAoa2V5LCBuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVEdWVEYXRlID0gKGtleSwgbmV3RHVlRGF0ZSkgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldER1ZURhdGUobmV3RHVlRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlUHJpb3J0eSA9IChrZXksIG5ld1ByaW9ydHkpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXRQcmlvcnR5KG5ld1ByaW9ydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUNoZWNrbGlzdCA9IChrZXksIG5ld0NoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldENoZWNrbGlzdChuZXdDaGVja2xpc3QpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc3RvcmUgYW5kIGRlbGV0ZVxyXG4gICAgICAgIHN0b3JlVG9kbywgZGVsZXRlVG9kbyxcclxuICAgICAgICAvL3JldHJpZXZlXHJcbiAgICAgICAgcmV0cmlldmVUb2RvLCByZXRyaWV2ZVRpdGxlLCByZXRyaWV2ZURlc2NyaXB0aW9uLCByZXRyaWV2ZUR1ZURhdGUsIHJldHJpZXZlUHJpb3J0eSwgcmV0cmlldmVDaGVja2xpc3QsXHJcbiAgICAgICAgLy91cGRhdGVcclxuICAgICAgICB1cGRhdGVUaXRsZSwgdXBkYXRlRGVzY3JpcHRpb24sIHVwZGF0ZUR1ZURhdGUsIHVwZGF0ZVByaW9ydHksIHVwZGF0ZUNoZWNrbGlzdFxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9TdG9yYWdlOyIsImltcG9ydCBjcmVhdGVFZGl0IGZyb20gXCIuLi9pbnB1dGZvcm1zL2NyZWF0ZUVkaXRcIjtcclxuaW1wb3J0IG1hbmFnZVRvZG8gZnJvbSBcIi4vbWFuYWdlVG9kb1wiO1xyXG5pbXBvcnQgJy4vdG9kb2xpc3QuY3NzJztcclxuXHJcbmNvbnN0IHRvZG9saXN0ID0gKCgpID0+IHtcclxuICAgIFxyXG4gICAgY29uc3QgX21ha2VMaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsaXN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaXN0Jyk7XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIHdoaWxlIChsb2NhbFN0b3JhZ2Uua2V5KGkpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgX21ha2VUb2RvKGksIGxpc3QpO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBfbWFrZVRvZG8gPSAoa2V5LCBkaXYpID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gICAgICAgIHRvZG9EaXYuc2V0QXR0cmlidXRlKCdpZCcsIGtleSk7XHJcbiAgICAgICAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdC1pdGVtJylcclxuXHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3QtdGl0bGUnKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBtYW5hZ2VUb2RvLmdldFRpdGxlKGtleSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBfbWFrZVRvZG9CdXR0b25zKCk7XHJcblxyXG4gICAgICAgIHRvZG9EaXYuYXBwZW5kKHRpdGxlLCBidXR0b25zWzBdLCBidXR0b25zWzFdKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHRvZG9EaXYpO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfbWFrZVRvZG9CdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjb21wbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgICAgICBjb21wbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcGxldGUnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgcmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdkZWxldGUnKTtcclxuXHJcbiAgICAgICAgY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfY29tcGxldGVCdG4pO1xyXG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9yZW1vdmVCdG4pO1xyXG5cclxuICAgICAgICByZXR1cm4gW2NvbXBsZXRlQnRuLCByZW1vdmVCdG5dO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9tYWtlQ3JlYXRlQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY3JlYXRlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xyXG4gICAgICAgIGNyZWF0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnY3JlYXRlJyk7XHJcblxyXG4gICAgICAgIGNyZWF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsX2NyZWF0ZUJ0bik7XHJcblxyXG4gICAgICAgIHJldHVybiBjcmVhdGVCdG47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2NvbXBsZXRlQnRuID0gKGUpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3JlbW92ZUJ0biA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xyXG4gICAgICAgIG1hbmFnZVRvZG8ucmVtb3ZlVG9kbyhpZCk7XHJcbiAgICAgICAgX3VwZGF0ZVBhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfY3JlYXRlQnRuID0gKGUpID0+IHtcclxuICAgICAgICBjcmVhdGVFZGl0LmNyZWF0ZSgpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9lZGl0ID0gKGUpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3VwZGF0ZVBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWFpbi5sYXN0Q2hpbGQpO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBfbWFrZUxpc3QoKTtcclxuICAgIFxyXG4gICAgICAgIG1haW4uYXBwZW5kKGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHByaW50UGFnZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9saXN0Jyk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IF9tYWtlTGlzdCgpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZUJ0biA9IF9tYWtlQ3JlYXRlQnV0dG9uKCk7XHJcbiAgICBcclxuICAgICAgICBtYWluLmFwcGVuZChjcmVhdGVCdG4sIGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IHByaW50UGFnZSB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9saXN0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==