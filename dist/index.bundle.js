"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo/todolist.js */ "./src/todo/todolist.js");
/* harmony import */ var _todo_todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo/todo.js */ "./src/todo/todo.js");
/* harmony import */ var _todo_projectlist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo/projectlist.js */ "./src/todo/projectlist.js");




const todo1 = (0,_todo_todo_js__WEBPACK_IMPORTED_MODULE_1__["default"])('name','project','dueDate','priorty','status');
const todolist1 = (0,_todo_todolist_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
const projectlist1 = (0,_todo_projectlist_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

todolist1.addTodo(todo1);

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
const projectlist = () => {

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectlist);

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

/***/ "./src/todo/todolist.js":
/*!******************************!*\
  !*** ./src/todo/todolist.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo/todo.js");


const todolist = (name) => {
    const list = [];

    const addTodo = (todo) => {
        list.push(todo);
    }

    const getTodo = () => {
        return list;
    }

    return { addTodo, getTodo}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todolist);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFDUjtBQUNjO0FBQ2hEO0FBQ0EsY0FBYyx5REFBSTtBQUNsQixrQkFBa0IsNkRBQVE7QUFDMUIscUJBQXFCLGdFQUFXO0FBQ2hDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7OztBQ0oxQjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsaUVBQWUsSUFBSTs7Ozs7Ozs7Ozs7Ozs7O0FDSk87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby9wcm9qZWN0bGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby90b2RvbGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9kb2xpc3QgZnJvbSAnLi90b2RvL3RvZG9saXN0LmpzJztcclxuaW1wb3J0IHRvZG8gZnJvbSAnLi90b2RvL3RvZG8uanMnO1xyXG5pbXBvcnQgcHJvamVjdGxpc3QgZnJvbSAnLi90b2RvL3Byb2plY3RsaXN0LmpzJztcclxuXHJcbmNvbnN0IHRvZG8xID0gdG9kbygnbmFtZScsJ3Byb2plY3QnLCdkdWVEYXRlJywncHJpb3J0eScsJ3N0YXR1cycpO1xyXG5jb25zdCB0b2RvbGlzdDEgPSB0b2RvbGlzdCgpO1xyXG5jb25zdCBwcm9qZWN0bGlzdDEgPSBwcm9qZWN0bGlzdCgpO1xyXG5cclxudG9kb2xpc3QxLmFkZFRvZG8odG9kbzEpOyIsImNvbnN0IHByb2plY3RsaXN0ID0gKCkgPT4ge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdGxpc3Q7IiwiY29uc3QgdG9kbyA9IChuYW1lLCBwcm9qZWN0LCBkdWVEYXRlLCBwcmlvcnR5LCBzdGF0dXMpID0+IHtcclxuICAgIHJldHVybiB7bmFtZSwgcHJvamVjdCwgZHVlRGF0ZSwgcHJpb3J0eSwgc3RhdHVzfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvOyIsImltcG9ydCB0b2RvIGZyb20gXCIuL3RvZG9cIjtcclxuXHJcbmNvbnN0IHRvZG9saXN0ID0gKG5hbWUpID0+IHtcclxuICAgIGNvbnN0IGxpc3QgPSBbXTtcclxuXHJcbiAgICBjb25zdCBhZGRUb2RvID0gKHRvZG8pID0+IHtcclxuICAgICAgICBsaXN0LnB1c2godG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VG9kbyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBhZGRUb2RvLCBnZXRUb2RvfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvbGlzdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=