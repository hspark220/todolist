"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["todolist"],{

/***/ "./src/gui/todolist.js":
/*!*****************************!*\
  !*** ./src/gui/todolist.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _manageTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manageTodo */ "./src/manageTodo.js");


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
        const description = document.createElement('p'); 

        todoDiv.setAttribute('id', key);
        todoDiv.setAttribute('class','list-item')

        title.setAttribute('class','list-title');
        title.innerHTML = _manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getTitle(key);
        description.setAttribute('class','list-description')
        description.innerHTML = _manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].getDescription(key);

        const buttons = _makeTodoButtons();

        todoDiv.append(title, description, buttons[0], buttons[1]);
        div.append(todoDiv);

        
    }

    const _makeTodoButtons = () => {
        const editBtn = document.createElement('input');
        editBtn.setAttribute('type','button');
        editBtn.setAttribute('id','edit');

        const removeBtn = document.createElement('input');
        removeBtn.setAttribute('type','button');
        removeBtn.setAttribute('id','delete');

        editBtn.addEventListener('click', _editBtn);
        removeBtn.addEventListener('click', _removeBtn);

        return [editBtn, removeBtn];
    }

    const _makeCreateButton = () => {
        const createBtn = document.createElement('input');
        createBtn.setAttribute('type','button');
        createBtn.setAttribute('id','create');

        createBtn.addEventListener('click',_createBtn);

        return createBtn;
    }

    const _editBtn = (e) => {

    }

    const _removeBtn = (e) => {
        const id = e.target.parentNode.id;
        _manageTodo__WEBPACK_IMPORTED_MODULE_0__["default"].removeTodo(id);
        _updatePage();
    }

    const _createBtn = (e) => {
        
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

/***/ }),

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gui/todolist.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2d1aS90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9tYW5hZ2VUb2RvLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3RvZG8vdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvL3RvZG9TdG9yYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYW5hZ2VUb2RvIGZyb20gXCIuLi9tYW5hZ2VUb2RvXCI7XHJcblxyXG5jb25zdCB0b2RvbGlzdCA9ICgoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IF9tYWtlTGlzdCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGlzdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdCcpO1xyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICB3aGlsZSAobG9jYWxTdG9yYWdlLmtleShpKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIF9tYWtlVG9kbyhpLCBsaXN0KTtcclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgX21ha2VUb2RvID0gKGtleSwgZGl2KSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpOyBcclxuXHJcbiAgICAgICAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywga2V5KTtcclxuICAgICAgICB0b2RvRGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaXN0LWl0ZW0nKVxyXG5cclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdC10aXRsZScpO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IG1hbmFnZVRvZG8uZ2V0VGl0bGUoa2V5KTtcclxuICAgICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdC1kZXNjcmlwdGlvbicpXHJcbiAgICAgICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gbWFuYWdlVG9kby5nZXREZXNjcmlwdGlvbihrZXkpO1xyXG5cclxuICAgICAgICBjb25zdCBidXR0b25zID0gX21ha2VUb2RvQnV0dG9ucygpO1xyXG5cclxuICAgICAgICB0b2RvRGl2LmFwcGVuZCh0aXRsZSwgZGVzY3JpcHRpb24sIGJ1dHRvbnNbMF0sIGJ1dHRvbnNbMV0pO1xyXG4gICAgICAgIGRpdi5hcHBlbmQodG9kb0Rpdik7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9tYWtlVG9kb0J1dHRvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdlZGl0Jyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlbW92ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgcmVtb3ZlQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsJ2J1dHRvbicpO1xyXG4gICAgICAgIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVsZXRlJyk7XHJcblxyXG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfZWRpdEJ0bik7XHJcbiAgICAgICAgcmVtb3ZlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX3JlbW92ZUJ0bik7XHJcblxyXG4gICAgICAgIHJldHVybiBbZWRpdEJ0biwgcmVtb3ZlQnRuXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfbWFrZUNyZWF0ZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGNyZWF0ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgICAgICBjcmVhdGVCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2NyZWF0ZScpO1xyXG5cclxuICAgICAgICBjcmVhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLF9jcmVhdGVCdG4pO1xyXG5cclxuICAgICAgICByZXR1cm4gY3JlYXRlQnRuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9lZGl0QnRuID0gKGUpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3JlbW92ZUJ0biA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5wYXJlbnROb2RlLmlkO1xyXG4gICAgICAgIG1hbmFnZVRvZG8ucmVtb3ZlVG9kbyhpZCk7XHJcbiAgICAgICAgX3VwZGF0ZVBhZ2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfY3JlYXRlQnRuID0gKGUpID0+IHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfdXBkYXRlUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9saXN0Jyk7XHJcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtYWluLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IF9tYWtlTGlzdCgpO1xyXG4gICAgXHJcbiAgICAgICAgbWFpbi5hcHBlbmQobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJpbnRQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2xpc3QnKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gX21ha2VMaXN0KCk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQnRuID0gX21ha2VDcmVhdGVCdXR0b24oKTtcclxuICAgIFxyXG4gICAgICAgIG1haW4uYXBwZW5kKGNyZWF0ZUJ0biwgbGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcHJpbnRQYWdlIH1cclxufSkoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb2xpc3Q7IiwiaW1wb3J0IHRvZG9TdG9yYWdlIGZyb20gJy4vdG9kby90b2RvU3RvcmFnZS5qcyc7XHJcblxyXG5jb25zdCBtYW5hZ2VUb2RvID0gKCgpID0+IHtcclxuICAgIC8vY29uc3RydWN0b3I/XHJcbiAgICBjb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2Uuc3RvcmVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS5kZWxldGVUb2RvKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXR0ZXJzXHJcbiAgICBjb25zdCBnZXRUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gdG9kb1N0b3JhZ2UucmV0cmlldmVUb2RvKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVRpdGxlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZURlc2NyaXB0aW9uKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlRHVlRGF0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9ydHkgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVByaW9ydHkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDaGVja2xpc3QgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZUNoZWNrbGlzdChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY2hhbmdlcnNcclxuICAgIGNvbnN0ICBjaGFuZ2VUaXRsZSA9IChrZXksIG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlVGl0bGUoa2V5LCBuZXdUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAoa2V5LCBuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZURlc2NyaXB0aW9uKGtleSwgbmV3RGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUR1ZURhdGUgPSAoa2V5LCBuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlRHVlRGF0ZShrZXksIG5ld0R1ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVByaW9ydHkgPSAoa2V5LCBuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlUHJpb3J0eShrZXksIG5ld1ByaW9ydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNoZWNrbGlzdCA9IChrZXksIG5ld0NoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZUNoZWNrbGlzdChrZXksIG5ld0NoZWNrbGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL2NvbnN0cnVjdG9yIGFuZCByZW1vdmVyP1xyXG4gICAgICAgIGNyZWF0ZVRvZG8sIHJlbW92ZVRvZG8sXHJcbiAgICAgICAgLy9nZXR0ZXJcclxuICAgICAgICBnZXRUb2RvLCBnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9ydHksIGdldENoZWNrbGlzdCxcclxuICAgICAgICAvL2NoYW5nZXJcclxuICAgICAgICBjaGFuZ2VUaXRsZSwgY2hhbmdlRGVzY3JpcHRpb24sIGNoYW5nZUR1ZURhdGUsIGNoYW5nZVByaW9ydHksIGNoYW5nZUNoZWNrbGlzdFxyXG5cclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hbmFnZVRvZG87IiwiY29uc3QgdG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldERlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBkdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9ydHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHByaW9ydHk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0Q2hlY2tsaXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjaGVja2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXR0ZXJzXHJcbiAgICBjb25zdCBzZXRUaXRsZSA9IChuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2V0RGVzY3JpcHRpb24gPSAobmV3RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldER1ZURhdGUgPSAobmV3RHVlRGF0ZSkgPT4ge1xyXG4gICAgICAgIGR1ZURhdGUgPSBuZXdEdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldFByaW9ydHkgPSAobmV3UHJpb3J0eSkgPT4ge1xyXG4gICAgICAgIHByaW9ydHkgPSBuZXdQcmlvcnR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldENoZWNrbGlzdCA9IChuZXdDaGVja2xpc3QpID0+IHtcclxuICAgICAgICBjaGVja2xpc3QgPSBuZXdDaGVja2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL2dldHRlclxyXG4gICAgICAgIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJpb3J0eSwgZ2V0Q2hlY2tsaXN0LFxyXG4gICAgICAgIC8vc2V0dGVyXHJcbiAgICAgICAgc2V0VGl0bGUsIHNldERlc2NyaXB0aW9uLCBzZXREdWVEYXRlLCBzZXRQcmlvcnR5LCBzZXRDaGVja2xpc3RcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kbzsiLCIvLyBcclxuLy8gZnVuY3Rpb24gZm9yIHN0b3JpbmcgYW5kIHJldHJpZXZpbmcgdG9kb3NcclxuLy8gXHJcbmltcG9ydCB0b2RvIGZyb20gJy4vdG9kby5qcyc7XHJcblxyXG5jb25zdCB0b2RvU3RvcmFnZSA9ICgoKSA9PiB7XHJcbiAgICAvL3ByaXZhdGUgbWV0aG9kc1xyXG4gICAgY29uc3QgX3N0cmluZ1RvZG8gPSB0b2RvID0+IHtcclxuICAgICAgICByZXR1cm4gYCR7dG9kby5nZXRUaXRsZSgpfTosOiR7dG9kby5nZXREZXNjcmlwdGlvbigpfTosOiR7dG9kby5nZXREdWVEYXRlKCl9Oiw6JHt0b2RvLmdldFByaW9ydHkoKX06LDoke3RvZG8uZ2V0Q2hlY2tsaXN0KCl9YFxyXG4gICAgfVxyXG4gICAgLy9zdG9yZVxyXG4gICAgY29uc3Qgc3RvcmVUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3J0eSwgY2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0odGl0bGUpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vY2F1c2UgYW4gZXJyb3I/XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB0ZW1wVG9kbyA9IHRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRpdGxlLF9zdHJpbmdUb2RvKHRlbXBUb2RvKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9kZWxldGVcclxuICAgIGNvbnN0IGRlbGV0ZVRvZG8gPSBrZXkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHJldHJpZXZlVGl0bGUoa2V5KSk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vcmV0cmlldmVcclxuICAgIGNvbnN0IHJldHJpZXZlVG9kbyA9IGtleSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdG9kb1N0cmluZyA9IGxvY2FsU3RvcmFnZS5rZXkoa2V5KTtcclxuICAgICAgICAgICAgY29uc3QgdG9kb0FycmF5ID0gdG9kb1N0cmluZy5zcGxpdCgnOiw6Jyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2RvKHRvZG9BcnJheVswXSwgdG9kb0FycmF5WzFdLCB0b2RvQXJyYXlbMl0sIHRvZG9BcnJheVszXSwgdG9kb0FycmF5WzRdKTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlVGl0bGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXRUaXRsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlRGVzY3JpcHRpb24gPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXREZXNjcmlwdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlRHVlRGF0ZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldER1ZURhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZVByaW9ydHkgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXRQcmlvcnR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVDaGVja2xpc3QgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXRyaWV2ZVRvZG8oa2V5KS5nZXRDaGVja2xpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL3VwZGF0ZVxyXG4gICAgY29uc3QgdXBkYXRlVGl0bGUgPSAoa2V5LCBuZXdUaXRsZSkgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldFRpdGxlKG5ld1RpdGxlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVEZXNjcmlwdGlvbiA9IChrZXksIG5ld0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZUR1ZURhdGUgPSAoa2V5LCBuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0RHVlRGF0ZShuZXdEdWVEYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVQcmlvcnR5ID0gKGtleSwgbmV3UHJpb3J0eSkgPT4ge1xyXG4gICAgICAgIHJldHJpZXZlVG9kbyhrZXkpLnNldFByaW9ydHkobmV3UHJpb3J0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlQ2hlY2tsaXN0ID0gKGtleSwgbmV3Q2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0Q2hlY2tsaXN0KG5ld0NoZWNrbGlzdCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9zdG9yZSBhbmQgZGVsZXRlXHJcbiAgICAgICAgc3RvcmVUb2RvLCBkZWxldGVUb2RvLFxyXG4gICAgICAgIC8vcmV0cmlldmVcclxuICAgICAgICByZXRyaWV2ZVRvZG8sIHJldHJpZXZlVGl0bGUsIHJldHJpZXZlRGVzY3JpcHRpb24sIHJldHJpZXZlRHVlRGF0ZSwgcmV0cmlldmVQcmlvcnR5LCByZXRyaWV2ZUNoZWNrbGlzdCxcclxuICAgICAgICAvL3VwZGF0ZVxyXG4gICAgICAgIHVwZGF0ZVRpdGxlLCB1cGRhdGVEZXNjcmlwdGlvbiwgdXBkYXRlRHVlRGF0ZSwgdXBkYXRlUHJpb3J0eSwgdXBkYXRlQ2hlY2tsaXN0XHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdG9kb1N0b3JhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9