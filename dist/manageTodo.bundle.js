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
    const createTodo = (title, description, dueDate, priorty, checklist) => {
        _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].storeTodo(title, description, dueDate, priorty, checklist);
        
    }

    const removeTodo = key => {
        _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(key);
    }

    //getters
    const getTodo = key => {
        return _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key);
    }

    const getId = todo => {
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
        getTodo, getId, getTitle, getDescription, getDueDate, getPriorty, getChecklist,
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
    const storeTodo = (title, description, dueDate, priorty, checklist) => {
        const tempTodo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(title, description, dueDate, priorty, checklist);
        localStorage.setItem(title,_stringTodo(tempTodo));
    }

    //delete
    const deleteTodo = key => {
        localStorage.removeItem(key);    
    }

    //retrieve
    const retrieveTodo = key => {
        try {
            const todoString = localStorage.key(key);
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/manageTodo.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlVG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQXNCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5RUFBd0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1RUFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwRUFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnRkFBK0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0RUFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0RUFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4RUFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUF1QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhFQUE2QjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDRFQUEyQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUMxRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNsRG5CO0FBQ0E7QUFDQTtBQUM2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0IsS0FBSyxzQkFBc0IsS0FBSyxrQkFBa0IsS0FBSyxrQkFBa0IsS0FBSyxvQkFBb0I7QUFDcEk7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFJO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG9EQUFJO0FBQ3ZCLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL21hbmFnZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby90b2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8vdG9kb1N0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvZG9TdG9yYWdlIGZyb20gJy4vdG9kby90b2RvU3RvcmFnZS5qcyc7XHJcblxyXG5jb25zdCBtYW5hZ2VUb2RvID0gKCgpID0+IHtcclxuICAgIC8vY29uc3RydWN0b3I/XHJcbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2Uuc3RvcmVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS5kZWxldGVUb2RvKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXR0ZXJzXHJcbiAgICBjb25zdCBnZXRUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0SWQgPSB0b2RvID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVJZChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFRpdGxlID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVUaXRsZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVEZXNjcmlwdGlvbihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldER1ZURhdGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZUR1ZURhdGUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcmlvcnR5ID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVQcmlvcnR5KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0Q2hlY2tsaXN0ID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVDaGVja2xpc3Qoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2NoYW5nZXJzXHJcbiAgICBjb25zdCAgY2hhbmdlVGl0bGUgPSAoa2V5LCBuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZVRpdGxlKGtleSwgbmV3VGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZURlc2NyaXB0aW9uID0gKGtleSwgbmV3RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS51cGRhdGVEZXNjcmlwdGlvbihrZXksIG5ld0Rlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VEdWVEYXRlID0gKGtleSwgbmV3RHVlRGF0ZSkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZUR1ZURhdGUoa2V5LCBuZXdEdWVEYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VQcmlvcnR5ID0gKGtleSwgbmV3UHJpb3J0eSkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZVByaW9ydHkoa2V5LCBuZXdQcmlvcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VDaGVja2xpc3QgPSAoa2V5LCBuZXdDaGVja2xpc3QpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS51cGRhdGVDaGVja2xpc3Qoa2V5LCBuZXdDaGVja2xpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9jb25zdHJ1Y3RvciBhbmQgcmVtb3Zlcj9cclxuICAgICAgICBjcmVhdGVUb2RvLCByZW1vdmVUb2RvLFxyXG4gICAgICAgIC8vZ2V0dGVyXHJcbiAgICAgICAgZ2V0VG9kbywgZ2V0SWQsIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3J0eSwgZ2V0Q2hlY2tsaXN0LFxyXG4gICAgICAgIC8vY2hhbmdlclxyXG4gICAgICAgIGNoYW5nZVRpdGxlLCBjaGFuZ2VEZXNjcmlwdGlvbiwgY2hhbmdlRHVlRGF0ZSwgY2hhbmdlUHJpb3J0eSwgY2hhbmdlQ2hlY2tsaXN0XHJcblxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFuYWdlVG9kbzsiLCJjb25zdCB0b2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KSA9PiB7XHJcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJpb3J0eSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJpb3J0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDaGVja2xpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHRlcnNcclxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UHJpb3J0eSA9IChuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgcHJpb3J0eSA9IG5ld1ByaW9ydHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q2hlY2tsaXN0ID0gKG5ld0NoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIGNoZWNrbGlzdCA9IG5ld0NoZWNrbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vZ2V0dGVyXHJcbiAgICAgICAgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcnR5LCBnZXRDaGVja2xpc3QsXHJcbiAgICAgICAgLy9zZXR0ZXJcclxuICAgICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIHNldFByaW9ydHksIHNldENoZWNrbGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvOyIsIi8vIFxyXG4vLyBmdW5jdGlvbiBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZyB0b2Rvc1xyXG4vLyBcclxuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvLmpzJztcclxuXHJcbmNvbnN0IHRvZG9TdG9yYWdlID0gKCgpID0+IHtcclxuICAgIC8vcHJpdmF0ZSBtZXRob2RzXHJcbiAgICBjb25zdCBfc3RyaW5nVG9kbyA9IHRvZG8gPT4ge1xyXG4gICAgICAgIHJldHVybiBgJHt0b2RvLmdldFRpdGxlKCl9Oiw6JHt0b2RvLmdldERlc2NyaXB0aW9uKCl9Oiw6JHt0b2RvLmdldER1ZURhdGUoKX06LDoke3RvZG8uZ2V0UHJpb3J0eSgpfTosOiR7dG9kby5nZXRDaGVja2xpc3QoKX1gXHJcbiAgICB9XHJcbiAgICAvL3N0b3JlXHJcbiAgICBjb25zdCBzdG9yZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpID0+IHtcclxuICAgICAgICBjb25zdCB0ZW1wVG9kbyA9IHRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRpdGxlLF9zdHJpbmdUb2RvKHRlbXBUb2RvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZWxldGVcclxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSBrZXkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vcmV0cmlldmVcclxuICAgIGNvbnN0IHJldHJpZXZlVG9kbyA9IGtleSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kb1N0cmluZyA9IGxvY2FsU3RvcmFnZS5rZXkoa2V5KTtcclxuICAgICAgICAgICAgY29uc3QgdG9kb0FycmF5ID0gdG9kb1N0cmluZy5zcGxpdCgnOiw6Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2RvKHRvZG9BcnJheVswXSwgdG9kb0FycmF5WzFdLCB0b2RvQXJyYXlbMl0sIHRvZG9BcnJheVszXSwgdG9kb0FycmF5WzRdKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlVGl0bGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXRUaXRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlRGVzY3JpcHRpb24gPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlRHVlRGF0ZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldER1ZURhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZVByaW9ydHkgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXRQcmlvcnR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVDaGVja2xpc3QgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXRDaGVja2xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3VwZGF0ZVxyXG4gICAgY29uc3QgdXBkYXRlVGl0bGUgPSAoa2V5LCBuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldFRpdGxlKG5ld1RpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVEZXNjcmlwdGlvbiA9IChrZXksIG5ld0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUR1ZURhdGUgPSAoa2V5LCBuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0RHVlRGF0ZShuZXdEdWVEYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcmlvcnR5ID0gKGtleSwgbmV3UHJpb3J0eSkgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldFByaW9ydHkobmV3UHJpb3J0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQ2hlY2tsaXN0ID0gKGtleSwgbmV3Q2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0Q2hlY2tsaXN0KG5ld0NoZWNrbGlzdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9zdG9yZSBhbmQgZGVsZXRlXHJcbiAgICAgICAgc3RvcmVUb2RvLCBkZWxldGVUb2RvLFxyXG4gICAgICAgIC8vcmV0cmlldmVcclxuICAgICAgICByZXRyaWV2ZVRvZG8sIHJldHJpZXZlVGl0bGUsIHJldHJpZXZlRGVzY3JpcHRpb24sIHJldHJpZXZlRHVlRGF0ZSwgcmV0cmlldmVQcmlvcnR5LCByZXRyaWV2ZUNoZWNrbGlzdCxcclxuICAgICAgICAvL3VwZGF0ZVxyXG4gICAgICAgIHVwZGF0ZVRpdGxlLCB1cGRhdGVEZXNjcmlwdGlvbiwgdXBkYXRlRHVlRGF0ZSwgdXBkYXRlUHJpb3J0eSwgdXBkYXRlQ2hlY2tsaXN0XHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb1N0b3JhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9