"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["manageTodo"],{

/***/ "./src/manageTodo.js":
/*!***************************!*\
  !*** ./src/manageTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo/todoStorage.js */ "./src/todo/todoStorage.js");


const manageTodo = (() => {
    //constructor?
    const createTodo = (id, title, description, dueDate, priorty, checklist) => {
        _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].storeTodo(id, title, description, dueDate, priorty, checklist);
        return todo(id, title, description, dueDate, priorty, checklist);
    }

    const removeTodo = key => {
        _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(key);
    }

    //getters
    const getId = key => {
        return _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveId(key);
    }

    const getTitle = key => {
        return _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTitle(key);
    }

    const getDescription = key => {
        return _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveDescription(key);
    }

    const getDueDate = key => {
        return _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveDueDate(key);
    }

    const getPriorty = key => {
        return _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrievePriorty(key);
    }

    const getChecklist = key => {
        return _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveChecklist(key);
    }

    //changers
    const  changeTitle = (key, newTitle) => {
        _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateTitle(key, newTitle);
    }

    const changeDescription = (key, newDescription) => {
        _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateDescription(key, newDescription);
    }

    const changeDueDate = (key, newDueDate) => {
        _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateDueDate(key, newDueDate);
    }

    const changePriorty = (key, newPriorty) => {
        _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updatePriorty(key, newPriorty);
    }

    const changeChecklist = (key, newChecklist) => {
        _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateChecklist(key, newChecklist);
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

/***/ "./src/todo/todo.js":
/*!**************************!*\
  !*** ./src/todo/todo.js ***!
  \**************************/
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

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/manageTodo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlVG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQXNCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1RUFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwRUFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnRkFBK0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0RUFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0RUFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4RUFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUF1QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhFQUE2QjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDRFQUEyQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ3ZFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDdERuQjtBQUNBO0FBQ0E7QUFDNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCLEtBQUssc0JBQXNCLEtBQUssa0JBQWtCLEtBQUssa0JBQWtCLEtBQUssb0JBQW9CO0FBQ3BJO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0RBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21hbmFnZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby90b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8vdG9kb1N0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG9TdG9yYWdlIGZyb20gJy4vdG9kby90b2RvU3RvcmFnZS5qcyc7XHJcblxyXG5jb25zdCBtYW5hZ2VUb2RvID0gKCgpID0+IHtcclxuICAgIC8vY29uc3RydWN0b3I/XHJcbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnN0b3JlVG9kbyhpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpO1xyXG4gICAgICAgIHJldHVybiB0b2RvKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlVG9kbyA9IGtleSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UuZGVsZXRlVG9kbyhrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZ2V0dGVyc1xyXG4gICAgY29uc3QgZ2V0SWQgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZUlkKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVRpdGxlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZURlc2NyaXB0aW9uKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlRHVlRGF0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9ydHkgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVByaW9ydHkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDaGVja2xpc3QgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZUNoZWNrbGlzdChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY2hhbmdlcnNcclxuICAgIGNvbnN0ICBjaGFuZ2VUaXRsZSA9IChrZXksIG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlVGl0bGUoa2V5LCBuZXdUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAoa2V5LCBuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZURlc2NyaXB0aW9uKGtleSwgbmV3RGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUR1ZURhdGUgPSAoa2V5LCBuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlRHVlRGF0ZShrZXksIG5ld0R1ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVByaW9ydHkgPSAoa2V5LCBuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlUHJpb3J0eShrZXksIG5ld1ByaW9ydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNoZWNrbGlzdCA9IChrZXksIG5ld0NoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZUNoZWNrbGlzdChrZXksIG5ld0NoZWNrbGlzdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9jb25zdHJ1Y3RvciBhbmQgcmVtb3Zlcj9cclxuICAgICAgICBjcmVhdGVUb2RvLCByZW1vdmVUb2RvLFxyXG4gICAgICAgIC8vZ2V0dGVyXHJcbiAgICAgICAgZ2V0SWQsIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3J0eSwgZ2V0Q2hlY2tsaXN0LFxyXG4gICAgICAgIC8vY2hhbmdlclxyXG4gICAgICAgIGNoYW5nZVRpdGxlLCBjaGFuZ2VEZXNjcmlwdGlvbiwgY2hhbmdlRHVlRGF0ZSwgY2hhbmdlUHJpb3J0eSwgY2hhbmdlQ2hlY2tsaXN0XHJcblxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFuYWdlVG9kbzsiLCJjb25zdCB0b2RvID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCkgPT4ge1xyXG4gICAgLy8gZ2V0dGVyc1xyXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGlkO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9ydHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByaW9ydHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0Q2hlY2tsaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjaGVja2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXR0ZXJzXHJcbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xyXG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFByaW9ydHkgPSAobmV3UHJpb3J0eSkgPT4ge1xyXG4gICAgICAgIHByaW9ydHkgPSBuZXdQcmlvcnR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENoZWNrbGlzdCA9IChuZXdDaGVja2xpc3QpID0+IHtcclxuICAgICAgICBjaGVja2xpc3QgPSBuZXdDaGVja2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL2dldHRlclxyXG4gICAgICAgIGdldElkLCBnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9ydHksIGdldENoZWNrbGlzdCxcclxuICAgICAgICAvL3NldHRlclxyXG4gICAgICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0RHVlRGF0ZSwgc2V0UHJpb3J0eSwgc2V0Q2hlY2tsaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG87IiwiLy8gXHJcbi8vIGZ1bmN0aW9uIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nIHRvZG9zXHJcbi8vIFxyXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8uanMnO1xyXG5cclxuY29uc3QgdG9kb1N0b3JhZ2UgPSAoKCkgPT4ge1xyXG4gICAgLy9wcml2YXRlIG1ldGhvZHNcclxuICAgIGNvbnN0IF9zdHJpbmdUb2RvID0gdG9kbyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RvZG8uZ2V0VGl0bGUoKX06LDoke3RvZG8uZ2V0RGVzY3JpcHRpb24oKX06LDoke3RvZG8uZ2V0RHVlRGF0ZSgpfTosOiR7dG9kby5nZXRQcmlvcnR5KCl9Oiw6JHt0b2RvLmdldENoZWNrbGlzdCgpfWBcclxuICAgIH1cclxuICAgIC8vc3RvcmVcclxuICAgIGNvbnN0IHN0b3JlVG9kbyA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpID0+IHtcclxuICAgICAgICBjb25zdCB0ZW1wVG9kbyA9IHRvZG8oaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZCwgX3N0cmluZ1RvZG8odGVtcFRvZG8pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZVxyXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGtleSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTsgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vcmV0cmlldmVcclxuICAgIGNvbnN0IHJldHJpZXZlVG9kbyA9IGtleSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9kb1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgY29uc3QgdG9kb0FycmF5ID0gdG9kb1N0cmluZy5zcGxpdCgnOiw6Jyk7XHJcbiAgICAgICAgcmV0dXJuIHRvZG8oa2V5LCB0b2RvQXJyYXlbMF0sIHRvZG9BcnJheVsxXSwgdG9kb0FycmF5WzJdLCB0b2RvQXJyYXlbM10sIHRvZG9BcnJheVs0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVJZCA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldElkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVUaXRsZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldFRpdGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVEZXNjcmlwdGlvbiA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVEdWVEYXRlID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0RHVlRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlUHJpb3J0eSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldFByaW9ydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZUNoZWNrbGlzdCA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldENoZWNrbGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdXBkYXRlXHJcbiAgICBjb25zdCB1cGRhdGVUaXRsZSA9IChrZXksIG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0VGl0bGUobmV3VGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZURlc2NyaXB0aW9uID0gKGtleSwgbmV3RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlRHVlRGF0ZSA9IChrZXksIG5ld0R1ZURhdGUpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXREdWVEYXRlKG5ld0R1ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVByaW9ydHkgPSAoa2V5LCBuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0UHJpb3J0eShuZXdQcmlvcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVDaGVja2xpc3QgPSAoa2V5LCBuZXdDaGVja2xpc3QpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXRDaGVja2xpc3QobmV3Q2hlY2tsaXN0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3N0b3JlIGFuZCBkZWxldGVcclxuICAgICAgICBzdG9yZVRvZG8sIGRlbGV0ZVRvZG8sXHJcbiAgICAgICAgLy9yZXRyaWV2ZVxyXG4gICAgICAgIHJldHJpZXZlSWQsIHJldHJpZXZlVG9kbywgcmV0cmlldmVUaXRsZSwgcmV0cmlldmVEZXNjcmlwdGlvbiwgcmV0cmlldmVEdWVEYXRlLCByZXRyaWV2ZVByaW9ydHksIHJldHJpZXZlQ2hlY2tsaXN0LFxyXG4gICAgICAgIC8vdXBkYXRlXHJcbiAgICAgICAgdXBkYXRlVGl0bGUsIHVwZGF0ZURlc2NyaXB0aW9uLCB1cGRhdGVEdWVEYXRlLCB1cGRhdGVQcmlvcnR5LCB1cGRhdGVDaGVja2xpc3RcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvU3RvcmFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=