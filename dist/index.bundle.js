/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/manageTodo.js":
/*!***************************!*\
  !*** ./src/manageTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
/* harmony import */ var _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoStorage.js */ "./src/todoStorage.js");



const manageTodo = (() => {
    //constructor?
    const createTodo = (id, title, description, dueDate, priorty, checklist) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].storeTodo(id, title, description, dueDate, priorty, checklist);
        return (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id, title, description, dueDate, priorty, checklist);
    }

    const removeTodo = key => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo(key);
    }

    //getters
    const getId = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].retrieveId(key);
    }

    const getTitle = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].retrieveTitle(key);
    }

    const getDescription = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].retrieveDescription(key);
    }

    const getDueDate = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].retrieveDueDate(key);
    }

    const getPriorty = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].retrievePriorty(key);
    }

    const getChecklist = key => {
        return _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].retrieveChecklist(key);
    }

    //changers
    const  changeTitle = (key, newTitle) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateTitle(key, newTitle);
    }

    const changeDescription = (key, newDescription) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateDescription(key, newDescription);
    }

    const changeDueDate = (key, newDueDate) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateDueDate(key, newDueDate);
    }

    const changePriorty = (key, newPriorty) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].updatePriorty(key, newPriorty);
    }

    const changeChecklist = (key, newChecklist) => {
        _todoStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"].updateChecklist(key, newChecklist);
    }


    return {
        //constructor and remover?
        createTodo, removeTodo,
        //getter
        getId, getTitle, getDescription, getDueDate, getPriorty, getChecklist,
        //changer
        changeTitle, changeDescription, changeDueDate, changePriorty, changeChecklist

    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manageTodo);

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const todo = (id, title, description, dueDate, priorty, checklist) => {
    // getters
    const getId = () => {
        return id;
    }
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
        getId, getTitle, getDescription, getDueDate, getPriorty, getChecklist,
        //setter
        setTitle, setDescription, setDueDate, setPriorty, setChecklist
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);

/***/ }),

/***/ "./src/todoStorage.js":
/*!****************************!*\
  !*** ./src/todoStorage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");
// 
// function for storing and retrieving todos
// 


const todoStorage = (() => {
    //private methods
    const _stringTodo = todo => {
        return `${todo.getTitle()}:,:${todo.getDescription()}:,:${todo.getDueDate()}:,:${todo.getPriorty()}:,:${todo.getChecklist()}`
    }
    //store
    const storeTodo = (id, title, description, dueDate, priorty, checklist) => {
        const tempTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(id, title, description, dueDate, priorty, checklist);
        localStorage.setItem(id, _stringTodo(tempTodo));
    }

    //delete
    const deleteTodo = key => {
        localStorage.removeItem(key);    
    }


    //retrieve
    const retrieveTodo = key => {
        const todoString = localStorage.getItem(key);
        const todoArray = todoString.split(':,:');
        return (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key, todoArray[0], todoArray[1], todoArray[2], todoArray[3], todoArray[4]);
    }

    const retrieveId = key => {
        return retrieveTodo(key).getId();
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
        retrieveId, retrieveTodo, retrieveTitle, retrieveDescription, retrieveDueDate, retrievePriorty, retrieveChecklist,
        //update
        updateTitle, updateDescription, updateDueDate, updatePriorty, updateChecklist
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoStorage);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _manageTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageTodo.js */ "./src/manageTodo.js");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/todo.js");



const todo1 = _manageTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"].createTodo(0, 'title', 'description', 'dueDate','priorty','checklist');

console.log(_manageTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTitle(0));
_manageTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"].removeTodo(0);
console.log(_manageTodo_js__WEBPACK_IMPORTED_MODULE_0__["default"].getTitle(0));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQXFCO0FBQzdCLGVBQWUsb0RBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBc0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtFQUFzQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxlQUFlLHFFQUF5QjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxlQUFlLDJFQUErQjtBQUM5QztBQUNBO0FBQ0E7QUFDQSxlQUFlLHVFQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxlQUFlLHVFQUEyQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxlQUFlLHlFQUE2QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsbUVBQXVCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUVBQTZCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQTJCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDeEV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUN0RG5CO0FBQ0E7QUFDQTtBQUM2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0IsS0FBSyxzQkFBc0IsS0FBSyxrQkFBa0IsS0FBSyxrQkFBa0IsS0FBSyxvQkFBb0I7QUFDcEk7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxvREFBSTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7VUN0RjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ1o7QUFDN0I7QUFDQSxjQUFjLGlFQUFxQjtBQUNuQztBQUNBLFlBQVksK0RBQW1CO0FBQy9CLGlFQUFxQjtBQUNyQixZQUFZLCtEQUFtQixLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvLmpzJztcclxuaW1wb3J0IHRvZG9TdG9yYWdlIGZyb20gJy4vdG9kb1N0b3JhZ2UuanMnO1xyXG5cclxuY29uc3QgbWFuYWdlVG9kbyA9ICgoKSA9PiB7XHJcbiAgICAvL2NvbnN0cnVjdG9yP1xyXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS5zdG9yZVRvZG8oaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KTtcclxuICAgICAgICByZXR1cm4gdG9kbyhpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSBrZXkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLmRlbGV0ZVRvZG8oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldHRlcnNcclxuICAgIGNvbnN0IGdldElkID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVJZChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRpdGxlID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVUaXRsZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVEZXNjcmlwdGlvbihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldER1ZURhdGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZUR1ZURhdGUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcmlvcnR5ID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVQcmlvcnR5KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0Q2hlY2tsaXN0ID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVDaGVja2xpc3Qoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NoYW5nZXJzXHJcbiAgICBjb25zdCAgY2hhbmdlVGl0bGUgPSAoa2V5LCBuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZVRpdGxlKGtleSwgbmV3VGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZURlc2NyaXB0aW9uID0gKGtleSwgbmV3RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS51cGRhdGVEZXNjcmlwdGlvbihrZXksIG5ld0Rlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VEdWVEYXRlID0gKGtleSwgbmV3RHVlRGF0ZSkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZUR1ZURhdGUoa2V5LCBuZXdEdWVEYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VQcmlvcnR5ID0gKGtleSwgbmV3UHJpb3J0eSkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZVByaW9ydHkoa2V5LCBuZXdQcmlvcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDaGVja2xpc3QgPSAoa2V5LCBuZXdDaGVja2xpc3QpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS51cGRhdGVDaGVja2xpc3Qoa2V5LCBuZXdDaGVja2xpc3QpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vY29uc3RydWN0b3IgYW5kIHJlbW92ZXI/XHJcbiAgICAgICAgY3JlYXRlVG9kbywgcmVtb3ZlVG9kbyxcclxuICAgICAgICAvL2dldHRlclxyXG4gICAgICAgIGdldElkLCBnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9ydHksIGdldENoZWNrbGlzdCxcclxuICAgICAgICAvL2NoYW5nZXJcclxuICAgICAgICBjaGFuZ2VUaXRsZSwgY2hhbmdlRGVzY3JpcHRpb24sIGNoYW5nZUR1ZURhdGUsIGNoYW5nZVByaW9ydHksIGNoYW5nZUNoZWNrbGlzdFxyXG5cclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hbmFnZVRvZG87IiwiY29uc3QgdG9kbyA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpID0+IHtcclxuICAgIC8vIGdldHRlcnNcclxuICAgIGNvbnN0IGdldElkID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcmlvcnR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmlvcnR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldENoZWNrbGlzdCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gY2hlY2tsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0dGVyc1xyXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcclxuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtcclxuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRQcmlvcnR5ID0gKG5ld1ByaW9ydHkpID0+IHtcclxuICAgICAgICBwcmlvcnR5ID0gbmV3UHJpb3J0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRDaGVja2xpc3QgPSAobmV3Q2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgY2hlY2tsaXN0ID0gbmV3Q2hlY2tsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9nZXR0ZXJcclxuICAgICAgICBnZXRJZCwgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcnR5LCBnZXRDaGVja2xpc3QsXHJcbiAgICAgICAgLy9zZXR0ZXJcclxuICAgICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIHNldFByaW9ydHksIHNldENoZWNrbGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvOyIsIi8vIFxyXG4vLyBmdW5jdGlvbiBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZyB0b2Rvc1xyXG4vLyBcclxuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvLmpzJztcclxuXHJcbmNvbnN0IHRvZG9TdG9yYWdlID0gKCgpID0+IHtcclxuICAgIC8vcHJpdmF0ZSBtZXRob2RzXHJcbiAgICBjb25zdCBfc3RyaW5nVG9kbyA9IHRvZG8gPT4ge1xyXG4gICAgICAgIHJldHVybiBgJHt0b2RvLmdldFRpdGxlKCl9Oiw6JHt0b2RvLmdldERlc2NyaXB0aW9uKCl9Oiw6JHt0b2RvLmdldER1ZURhdGUoKX06LDoke3RvZG8uZ2V0UHJpb3J0eSgpfTosOiR7dG9kby5nZXRDaGVja2xpc3QoKX1gXHJcbiAgICB9XHJcbiAgICAvL3N0b3JlXHJcbiAgICBjb25zdCBzdG9yZVRvZG8gPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGVtcFRvZG8gPSB0b2RvKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaWQsIF9zdHJpbmdUb2RvKHRlbXBUb2RvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZWxldGVcclxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSBrZXkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7ICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL3JldHJpZXZlXHJcbiAgICBjb25zdCByZXRyaWV2ZVRvZG8gPSBrZXkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRvZG9TdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIGNvbnN0IHRvZG9BcnJheSA9IHRvZG9TdHJpbmcuc3BsaXQoJzosOicpO1xyXG4gICAgICAgIHJldHVybiB0b2RvKGtleSwgdG9kb0FycmF5WzBdLCB0b2RvQXJyYXlbMV0sIHRvZG9BcnJheVsyXSwgdG9kb0FycmF5WzNdLCB0b2RvQXJyYXlbNF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlSWQgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXRJZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlVGl0bGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXRUaXRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlRGVzY3JpcHRpb24gPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlRHVlRGF0ZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldER1ZURhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZVByaW9ydHkgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXRQcmlvcnR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVDaGVja2xpc3QgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXRDaGVja2xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3VwZGF0ZVxyXG4gICAgY29uc3QgdXBkYXRlVGl0bGUgPSAoa2V5LCBuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldFRpdGxlKG5ld1RpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVEZXNjcmlwdGlvbiA9IChrZXksIG5ld0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUR1ZURhdGUgPSAoa2V5LCBuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0RHVlRGF0ZShuZXdEdWVEYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcmlvcnR5ID0gKGtleSwgbmV3UHJpb3J0eSkgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldFByaW9ydHkobmV3UHJpb3J0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQ2hlY2tsaXN0ID0gKGtleSwgbmV3Q2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0Q2hlY2tsaXN0KG5ld0NoZWNrbGlzdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9zdG9yZSBhbmQgZGVsZXRlXHJcbiAgICAgICAgc3RvcmVUb2RvLCBkZWxldGVUb2RvLFxyXG4gICAgICAgIC8vcmV0cmlldmVcclxuICAgICAgICByZXRyaWV2ZUlkLCByZXRyaWV2ZVRvZG8sIHJldHJpZXZlVGl0bGUsIHJldHJpZXZlRGVzY3JpcHRpb24sIHJldHJpZXZlRHVlRGF0ZSwgcmV0cmlldmVQcmlvcnR5LCByZXRyaWV2ZUNoZWNrbGlzdCxcclxuICAgICAgICAvL3VwZGF0ZVxyXG4gICAgICAgIHVwZGF0ZVRpdGxlLCB1cGRhdGVEZXNjcmlwdGlvbiwgdXBkYXRlRHVlRGF0ZSwgdXBkYXRlUHJpb3J0eSwgdXBkYXRlQ2hlY2tsaXN0XHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb1N0b3JhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgbWFuYWdlVG9kbyBmcm9tICcuL21hbmFnZVRvZG8uanMnO1xyXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8uanMnO1xyXG5cclxuY29uc3QgdG9kbzEgPSBtYW5hZ2VUb2RvLmNyZWF0ZVRvZG8oMCwgJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ2R1ZURhdGUnLCdwcmlvcnR5JywnY2hlY2tsaXN0Jyk7XHJcblxyXG5jb25zb2xlLmxvZyhtYW5hZ2VUb2RvLmdldFRpdGxlKDApKTtcclxubWFuYWdlVG9kby5yZW1vdmVUb2RvKDApO1xyXG5jb25zb2xlLmxvZyhtYW5hZ2VUb2RvLmdldFRpdGxlKDApKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=