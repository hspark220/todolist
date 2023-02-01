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
        getTodo, getTitle, getDescription, getDueDate, getPriorty, getChecklist,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlVG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQXNCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5RUFBd0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwRUFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnRkFBK0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0RUFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0RUFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4RUFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUF1QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhFQUE2QjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDRFQUEyQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUN0RXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7QUNsRG5CO0FBQ0E7QUFDQTtBQUM2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0IsS0FBSyxzQkFBc0IsS0FBSyxrQkFBa0IsS0FBSyxrQkFBa0IsS0FBSyxvQkFBb0I7QUFDcEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQUk7QUFDdkIsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby90b2RvU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9kb1N0b3JhZ2UgZnJvbSAnLi90b2RvL3RvZG9TdG9yYWdlLmpzJztcclxuXHJcbmNvbnN0IG1hbmFnZVRvZG8gPSAoKCkgPT4ge1xyXG4gICAgLy9jb25zdHJ1Y3Rvcj9cclxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS5zdG9yZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSBrZXkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLmRlbGV0ZVRvZG8oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldHRlcnNcclxuICAgIGNvbnN0IGdldFRvZG8gPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVRvZG8oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRUaXRsZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlVGl0bGUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlRGVzY3JpcHRpb24oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREdWVEYXRlID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVEdWVEYXRlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJpb3J0eSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlUHJpb3J0eShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldENoZWNrbGlzdCA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlQ2hlY2tsaXN0KGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jaGFuZ2Vyc1xyXG4gICAgY29uc3QgIGNoYW5nZVRpdGxlID0gKGtleSwgbmV3VGl0bGUpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS51cGRhdGVUaXRsZShrZXksIG5ld1RpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjaGFuZ2VEZXNjcmlwdGlvbiA9IChrZXksIG5ld0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlRGVzY3JpcHRpb24oa2V5LCBuZXdEZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRHVlRGF0ZSA9IChrZXksIG5ld0R1ZURhdGUpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS51cGRhdGVEdWVEYXRlKGtleSwgbmV3RHVlRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlUHJpb3J0eSA9IChrZXksIG5ld1ByaW9ydHkpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS51cGRhdGVQcmlvcnR5KGtleSwgbmV3UHJpb3J0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlQ2hlY2tsaXN0ID0gKGtleSwgbmV3Q2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlQ2hlY2tsaXN0KGtleSwgbmV3Q2hlY2tsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vY29uc3RydWN0b3IgYW5kIHJlbW92ZXI/XHJcbiAgICAgICAgY3JlYXRlVG9kbywgcmVtb3ZlVG9kbyxcclxuICAgICAgICAvL2dldHRlclxyXG4gICAgICAgIGdldFRvZG8sIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3J0eSwgZ2V0Q2hlY2tsaXN0LFxyXG4gICAgICAgIC8vY2hhbmdlclxyXG4gICAgICAgIGNoYW5nZVRpdGxlLCBjaGFuZ2VEZXNjcmlwdGlvbiwgY2hhbmdlRHVlRGF0ZSwgY2hhbmdlUHJpb3J0eSwgY2hhbmdlQ2hlY2tsaXN0XHJcblxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWFuYWdlVG9kbzsiLCJjb25zdCB0b2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KSA9PiB7XHJcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJpb3J0eSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJpb3J0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDaGVja2xpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHRlcnNcclxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UHJpb3J0eSA9IChuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgcHJpb3J0eSA9IG5ld1ByaW9ydHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q2hlY2tsaXN0ID0gKG5ld0NoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIGNoZWNrbGlzdCA9IG5ld0NoZWNrbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vZ2V0dGVyXHJcbiAgICAgICAgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcnR5LCBnZXRDaGVja2xpc3QsXHJcbiAgICAgICAgLy9zZXR0ZXJcclxuICAgICAgICBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldER1ZURhdGUsIHNldFByaW9ydHksIHNldENoZWNrbGlzdFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvOyIsIi8vIFxyXG4vLyBmdW5jdGlvbiBmb3Igc3RvcmluZyBhbmQgcmV0cmlldmluZyB0b2Rvc1xyXG4vLyBcclxuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvLmpzJztcclxuXHJcbmNvbnN0IHRvZG9TdG9yYWdlID0gKCgpID0+IHtcclxuICAgIC8vcHJpdmF0ZSBtZXRob2RzXHJcbiAgICBjb25zdCBfc3RyaW5nVG9kbyA9IHRvZG8gPT4ge1xyXG4gICAgICAgIHJldHVybiBgJHt0b2RvLmdldFRpdGxlKCl9Oiw6JHt0b2RvLmdldERlc2NyaXB0aW9uKCl9Oiw6JHt0b2RvLmdldER1ZURhdGUoKX06LDoke3RvZG8uZ2V0UHJpb3J0eSgpfTosOiR7dG9kby5nZXRDaGVja2xpc3QoKX1gXHJcbiAgICB9XHJcbiAgICAvL3N0b3JlXHJcbiAgICBjb25zdCBzdG9yZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpID0+IHtcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aXRsZSkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy9jYXVzZSBhbiBlcnJvcj9cclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHRlbXBUb2RvID0gdG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGl0bGUsX3N0cmluZ1RvZG8odGVtcFRvZG8pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZVxyXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGtleSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0ocmV0cmlldmVUaXRsZShrZXkpKTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy9yZXRyaWV2ZVxyXG4gICAgY29uc3QgcmV0cmlldmVUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvU3RyaW5nID0gbG9jYWxTdG9yYWdlLmtleShrZXkpO1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvQXJyYXkgPSB0b2RvU3RyaW5nLnNwbGl0KCc6LDonKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvZG8odG9kb0FycmF5WzBdLCB0b2RvQXJyYXlbMV0sIHRvZG9BcnJheVsyXSwgdG9kb0FycmF5WzNdLCB0b2RvQXJyYXlbNF0pO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVUaXRsZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldFRpdGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVEZXNjcmlwdGlvbiA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVEdWVEYXRlID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0RHVlRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlUHJpb3J0eSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldFByaW9ydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZUNoZWNrbGlzdCA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldENoZWNrbGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdXBkYXRlXHJcbiAgICBjb25zdCB1cGRhdGVUaXRsZSA9IChrZXksIG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0VGl0bGUobmV3VGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZURlc2NyaXB0aW9uID0gKGtleSwgbmV3RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlRHVlRGF0ZSA9IChrZXksIG5ld0R1ZURhdGUpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXREdWVEYXRlKG5ld0R1ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVByaW9ydHkgPSAoa2V5LCBuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0UHJpb3J0eShuZXdQcmlvcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVDaGVja2xpc3QgPSAoa2V5LCBuZXdDaGVja2xpc3QpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXRDaGVja2xpc3QobmV3Q2hlY2tsaXN0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3N0b3JlIGFuZCBkZWxldGVcclxuICAgICAgICBzdG9yZVRvZG8sIGRlbGV0ZVRvZG8sXHJcbiAgICAgICAgLy9yZXRyaWV2ZVxyXG4gICAgICAgIHJldHJpZXZlVG9kbywgcmV0cmlldmVUaXRsZSwgcmV0cmlldmVEZXNjcmlwdGlvbiwgcmV0cmlldmVEdWVEYXRlLCByZXRyaWV2ZVByaW9ydHksIHJldHJpZXZlQ2hlY2tsaXN0LFxyXG4gICAgICAgIC8vdXBkYXRlXHJcbiAgICAgICAgdXBkYXRlVGl0bGUsIHVwZGF0ZURlc2NyaXB0aW9uLCB1cGRhdGVEdWVEYXRlLCB1cGRhdGVQcmlvcnR5LCB1cGRhdGVDaGVja2xpc3RcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvU3RvcmFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=