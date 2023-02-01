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
        
    }

    const removeTodo = key => {
        _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteTodo(key);
    }

    //getters
    const getTodo = key => {
        return _todo_todoStorage_js__WEBPACK_IMPORTED_MODULE_0__["default"].retrieveTodo(key);
    }

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
        try {
            const todoString = localStorage.getItem(key);
            const todoArray = todoString.split(':,:');
            return (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key, todoArray[0], todoArray[1], todoArray[2], todoArray[3], todoArray[4]);
        } catch {
            return null;
        }
        
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFuYWdlVG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNFQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUVBQXNCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5RUFBd0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsZUFBZSx1RUFBc0I7QUFDckM7QUFDQTtBQUNBO0FBQ0EsZUFBZSwwRUFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnRkFBK0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0RUFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0RUFBMkI7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsZUFBZSw4RUFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdFQUF1QjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhFQUE2QjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDBFQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxRQUFRLDRFQUEyQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7QUMxRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ3REbkI7QUFDQTtBQUNBO0FBQzZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQixLQUFLLHNCQUFzQixLQUFLLGtCQUFrQixLQUFLLGtCQUFrQixLQUFLLG9CQUFvQjtBQUNwSTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsb0RBQUk7QUFDdkIsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYW5hZ2VUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8vdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvL3RvZG9TdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2RvU3RvcmFnZSBmcm9tICcuL3RvZG8vdG9kb1N0b3JhZ2UuanMnO1xyXG5cclxuY29uc3QgbWFuYWdlVG9kbyA9ICgoKSA9PiB7XHJcbiAgICAvL2NvbnN0cnVjdG9yP1xyXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS5zdG9yZVRvZG8oaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS5kZWxldGVUb2RvKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXR0ZXJzXHJcbiAgICBjb25zdCBnZXRUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0SWQgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZUlkKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVRpdGxlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZURlc2NyaXB0aW9uKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlRHVlRGF0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9ydHkgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVByaW9ydHkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDaGVja2xpc3QgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZUNoZWNrbGlzdChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY2hhbmdlcnNcclxuICAgIGNvbnN0ICBjaGFuZ2VUaXRsZSA9IChrZXksIG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlVGl0bGUoa2V5LCBuZXdUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAoa2V5LCBuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZURlc2NyaXB0aW9uKGtleSwgbmV3RGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUR1ZURhdGUgPSAoa2V5LCBuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlRHVlRGF0ZShrZXksIG5ld0R1ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVByaW9ydHkgPSAoa2V5LCBuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlUHJpb3J0eShrZXksIG5ld1ByaW9ydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNoZWNrbGlzdCA9IChrZXksIG5ld0NoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZUNoZWNrbGlzdChrZXksIG5ld0NoZWNrbGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL2NvbnN0cnVjdG9yIGFuZCByZW1vdmVyP1xyXG4gICAgICAgIGNyZWF0ZVRvZG8sIHJlbW92ZVRvZG8sXHJcbiAgICAgICAgLy9nZXR0ZXJcclxuICAgICAgICBnZXRUb2RvLCBnZXRJZCwgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcnR5LCBnZXRDaGVja2xpc3QsXHJcbiAgICAgICAgLy9jaGFuZ2VyXHJcbiAgICAgICAgY2hhbmdlVGl0bGUsIGNoYW5nZURlc2NyaXB0aW9uLCBjaGFuZ2VEdWVEYXRlLCBjaGFuZ2VQcmlvcnR5LCBjaGFuZ2VDaGVja2xpc3RcclxuXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYW5hZ2VUb2RvOyIsImNvbnN0IHRvZG8gPSAoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KSA9PiB7XHJcbiAgICAvLyBnZXR0ZXJzXHJcbiAgICBjb25zdCBnZXRJZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBnZXRUaXRsZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldER1ZURhdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGR1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0UHJpb3J0eSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJpb3J0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDaGVja2xpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNoZWNrbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHRlcnNcclxuICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgdGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXREZXNjcmlwdGlvbiA9IChuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIGRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RHVlRGF0ZSA9IChuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgZHVlRGF0ZSA9IG5ld0R1ZURhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0UHJpb3J0eSA9IChuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgcHJpb3J0eSA9IG5ld1ByaW9ydHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0Q2hlY2tsaXN0ID0gKG5ld0NoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIGNoZWNrbGlzdCA9IG5ld0NoZWNrbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vZ2V0dGVyXHJcbiAgICAgICAgZ2V0SWQsIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3J0eSwgZ2V0Q2hlY2tsaXN0LFxyXG4gICAgICAgIC8vc2V0dGVyXHJcbiAgICAgICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcnR5LCBzZXRDaGVja2xpc3RcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kbzsiLCIvLyBcclxuLy8gZnVuY3Rpb24gZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmcgdG9kb3NcclxuLy8gXHJcbmltcG9ydCB0b2RvIGZyb20gJy4vdG9kby5qcyc7XHJcblxyXG5jb25zdCB0b2RvU3RvcmFnZSA9ICgoKSA9PiB7XHJcbiAgICAvL3ByaXZhdGUgbWV0aG9kc1xyXG4gICAgY29uc3QgX3N0cmluZ1RvZG8gPSB0b2RvID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7dG9kby5nZXRUaXRsZSgpfTosOiR7dG9kby5nZXREZXNjcmlwdGlvbigpfTosOiR7dG9kby5nZXREdWVEYXRlKCl9Oiw6JHt0b2RvLmdldFByaW9ydHkoKX06LDoke3RvZG8uZ2V0Q2hlY2tsaXN0KCl9YFxyXG4gICAgfVxyXG4gICAgLy9zdG9yZVxyXG4gICAgY29uc3Qgc3RvcmVUb2RvID0gKGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlbXBUb2RvID0gdG9kbyhpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkLCBfc3RyaW5nVG9kbyh0ZW1wVG9kbykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZGVsZXRlXHJcbiAgICBjb25zdCBkZWxldGVUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICAvL3JldHJpZXZlXHJcbiAgICBjb25zdCByZXRyaWV2ZVRvZG8gPSBrZXkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvZG9TdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvQXJyYXkgPSB0b2RvU3RyaW5nLnNwbGl0KCc6LDonKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvZG8oa2V5LCB0b2RvQXJyYXlbMF0sIHRvZG9BcnJheVsxXSwgdG9kb0FycmF5WzJdLCB0b2RvQXJyYXlbM10sIHRvZG9BcnJheVs0XSk7XHJcbiAgICAgICAgfSBjYXRjaCB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZUlkID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0SWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZVRpdGxlID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0VGl0bGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZURlc2NyaXB0aW9uID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0RGVzY3JpcHRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZUR1ZURhdGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXREdWVEYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVQcmlvcnR5ID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0UHJpb3J0eSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlQ2hlY2tsaXN0ID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0Q2hlY2tsaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy91cGRhdGVcclxuICAgIGNvbnN0IHVwZGF0ZVRpdGxlID0gKGtleSwgbmV3VGl0bGUpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXRUaXRsZShuZXdUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlRGVzY3JpcHRpb24gPSAoa2V5LCBuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldERlc2NyaXB0aW9uKG5ld0Rlc2NyaXB0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVEdWVEYXRlID0gKGtleSwgbmV3RHVlRGF0ZSkgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldER1ZURhdGUobmV3RHVlRGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlUHJpb3J0eSA9IChrZXksIG5ld1ByaW9ydHkpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXRQcmlvcnR5KG5ld1ByaW9ydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUNoZWNrbGlzdCA9IChrZXksIG5ld0NoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldENoZWNrbGlzdChuZXdDaGVja2xpc3QpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vc3RvcmUgYW5kIGRlbGV0ZVxyXG4gICAgICAgIHN0b3JlVG9kbywgZGVsZXRlVG9kbyxcclxuICAgICAgICAvL3JldHJpZXZlXHJcbiAgICAgICAgcmV0cmlldmVJZCwgcmV0cmlldmVUb2RvLCByZXRyaWV2ZVRpdGxlLCByZXRyaWV2ZURlc2NyaXB0aW9uLCByZXRyaWV2ZUR1ZURhdGUsIHJldHJpZXZlUHJpb3J0eSwgcmV0cmlldmVDaGVja2xpc3QsXHJcbiAgICAgICAgLy91cGRhdGVcclxuICAgICAgICB1cGRhdGVUaXRsZSwgdXBkYXRlRGVzY3JpcHRpb24sIHVwZGF0ZUR1ZURhdGUsIHVwZGF0ZVByaW9ydHksIHVwZGF0ZUNoZWNrbGlzdFxyXG4gICAgfVxyXG5cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG9TdG9yYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==