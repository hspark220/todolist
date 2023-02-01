/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/*!***************************!*\
  !*** ./src/manageTodo.js ***!
  \***************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZG9saXN0Ly4vc3JjL3RvZG9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlVG9kby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0b2RvID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCkgPT4ge1xyXG4gICAgLy8gZ2V0dGVyc1xyXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9ydHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByaW9ydHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0Q2hlY2tsaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjaGVja2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXR0ZXJzXHJcbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xyXG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFByaW9ydHkgPSAobmV3UHJpb3J0eSkgPT4ge1xyXG4gICAgICAgIHByaW9ydHkgPSBuZXdQcmlvcnR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENoZWNrbGlzdCA9IChuZXdDaGVja2xpc3QpID0+IHtcclxuICAgICAgICBjaGVja2xpc3QgPSBuZXdDaGVja2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL2dldHRlclxyXG4gICAgICAgIGdldElkLCBnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9ydHksIGdldENoZWNrbGlzdCxcclxuICAgICAgICAvL3NldHRlclxyXG4gICAgICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0RHVlRGF0ZSwgc2V0UHJpb3J0eSwgc2V0Q2hlY2tsaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG87IiwiLy8gXHJcbi8vIGZ1bmN0aW9uIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nIHRvZG9zXHJcbi8vIFxyXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8uanMnO1xyXG5cclxuY29uc3QgdG9kb1N0b3JhZ2UgPSAoKCkgPT4ge1xyXG4gICAgLy9wcml2YXRlIG1ldGhvZHNcclxuICAgIGNvbnN0IF9zdHJpbmdUb2RvID0gdG9kbyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RvZG8uZ2V0VGl0bGUoKX06LDoke3RvZG8uZ2V0RGVzY3JpcHRpb24oKX06LDoke3RvZG8uZ2V0RHVlRGF0ZSgpfTosOiR7dG9kby5nZXRQcmlvcnR5KCl9Oiw6JHt0b2RvLmdldENoZWNrbGlzdCgpfWBcclxuICAgIH1cclxuICAgIC8vc3RvcmVcclxuICAgIGNvbnN0IHN0b3JlVG9kbyA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpID0+IHtcclxuICAgICAgICBjb25zdCB0ZW1wVG9kbyA9IHRvZG8oaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZCwgX3N0cmluZ1RvZG8odGVtcFRvZG8pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZVxyXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGtleSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTsgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vcmV0cmlldmVcclxuICAgIGNvbnN0IHJldHJpZXZlVG9kbyA9IGtleSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgY29uc3QgdG9kb0FycmF5ID0gdG9kb1N0cmluZy5zcGxpdCgnOiw6Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRvZG8oa2V5LCB0b2RvQXJyYXlbMF0sIHRvZG9BcnJheVsxXSwgdG9kb0FycmF5WzJdLCB0b2RvQXJyYXlbM10sIHRvZG9BcnJheVs0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVJZCA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldElkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVUaXRsZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldFRpdGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVEZXNjcmlwdGlvbiA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVEdWVEYXRlID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0RHVlRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlUHJpb3J0eSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldFByaW9ydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZUNoZWNrbGlzdCA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldENoZWNrbGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdXBkYXRlXHJcbiAgICBjb25zdCB1cGRhdGVUaXRsZSA9IChrZXksIG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0VGl0bGUobmV3VGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZURlc2NyaXB0aW9uID0gKGtleSwgbmV3RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlRHVlRGF0ZSA9IChrZXksIG5ld0R1ZURhdGUpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXREdWVEYXRlKG5ld0R1ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVByaW9ydHkgPSAoa2V5LCBuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0UHJpb3J0eShuZXdQcmlvcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVDaGVja2xpc3QgPSAoa2V5LCBuZXdDaGVja2xpc3QpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXRDaGVja2xpc3QobmV3Q2hlY2tsaXN0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3N0b3JlIGFuZCBkZWxldGVcclxuICAgICAgICBzdG9yZVRvZG8sIGRlbGV0ZVRvZG8sXHJcbiAgICAgICAgLy9yZXRyaWV2ZVxyXG4gICAgICAgIHJldHJpZXZlSWQsIHJldHJpZXZlVG9kbywgcmV0cmlldmVUaXRsZSwgcmV0cmlldmVEZXNjcmlwdGlvbiwgcmV0cmlldmVEdWVEYXRlLCByZXRyaWV2ZVByaW9ydHksIHJldHJpZXZlQ2hlY2tsaXN0LFxyXG4gICAgICAgIC8vdXBkYXRlXHJcbiAgICAgICAgdXBkYXRlVGl0bGUsIHVwZGF0ZURlc2NyaXB0aW9uLCB1cGRhdGVEdWVEYXRlLCB1cGRhdGVQcmlvcnR5LCB1cGRhdGVDaGVja2xpc3RcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvU3RvcmFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0b2RvIGZyb20gJy4vdG9kby5qcyc7XHJcbmltcG9ydCB0b2RvU3RvcmFnZSBmcm9tICcuL3RvZG9TdG9yYWdlLmpzJztcclxuXHJcbmNvbnN0IG1hbmFnZVRvZG8gPSAoKCkgPT4ge1xyXG4gICAgLy9jb25zdHJ1Y3Rvcj9cclxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2Uuc3RvcmVUb2RvKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCk7XHJcbiAgICAgICAgcmV0dXJuIHRvZG8oaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS5kZWxldGVUb2RvKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXR0ZXJzXHJcbiAgICBjb25zdCBnZXRJZCA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlSWQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRUaXRsZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlVGl0bGUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlRGVzY3JpcHRpb24oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREdWVEYXRlID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVEdWVEYXRlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJpb3J0eSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlUHJpb3J0eShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldENoZWNrbGlzdCA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlQ2hlY2tsaXN0KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGFuZ2Vyc1xyXG4gICAgY29uc3QgIGNoYW5nZVRpdGxlID0gKGtleSwgbmV3VGl0bGUpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS51cGRhdGVUaXRsZShrZXksIG5ld1RpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChrZXksIG5ld0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlRGVzY3JpcHRpb24oa2V5LCBuZXdEZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRHVlRGF0ZSA9IChrZXksIG5ld0R1ZURhdGUpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS51cGRhdGVEdWVEYXRlKGtleSwgbmV3RHVlRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUHJpb3J0eSA9IChrZXksIG5ld1ByaW9ydHkpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS51cGRhdGVQcmlvcnR5KGtleSwgbmV3UHJpb3J0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlQ2hlY2tsaXN0ID0gKGtleSwgbmV3Q2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlQ2hlY2tsaXN0KGtleSwgbmV3Q2hlY2tsaXN0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL2NvbnN0cnVjdG9yIGFuZCByZW1vdmVyP1xyXG4gICAgICAgIGNyZWF0ZVRvZG8sIHJlbW92ZVRvZG8sXHJcbiAgICAgICAgLy9nZXR0ZXJcclxuICAgICAgICBnZXRJZCwgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcnR5LCBnZXRDaGVja2xpc3QsXHJcbiAgICAgICAgLy9jaGFuZ2VyXHJcbiAgICAgICAgY2hhbmdlVGl0bGUsIGNoYW5nZURlc2NyaXB0aW9uLCBjaGFuZ2VEdWVEYXRlLCBjaGFuZ2VQcmlvcnR5LCBjaGFuZ2VDaGVja2xpc3RcclxuXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYW5hZ2VUb2RvOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==