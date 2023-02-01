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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gui/todolist.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9ndWkvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvbWFuYWdlVG9kby5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90b2RvL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvdG9kby90b2RvU3RvcmFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWFuYWdlVG9kbyBmcm9tIFwiLi4vbWFuYWdlVG9kb1wiO1xyXG5cclxuY29uc3QgdG9kb2xpc3QgPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBfbWFrZUxpc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3QnKTtcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKGxvY2FsU3RvcmFnZS5rZXkoaSkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBfbWFrZVRvZG8oaSwgbGlzdCk7XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IF9tYWtlVG9kbyA9IChrZXksIGRpdikgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgXHJcblxyXG4gICAgICAgIHRvZG9EaXYuc2V0QXR0cmlidXRlKCdpZCcsIGtleSk7XHJcbiAgICAgICAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdC1pdGVtJylcclxuXHJcbiAgICAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3QtdGl0bGUnKTtcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBtYW5hZ2VUb2RvLmdldFRpdGxlKGtleSk7XHJcbiAgICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3QtZGVzY3JpcHRpb24nKVxyXG4gICAgICAgIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IG1hbmFnZVRvZG8uZ2V0RGVzY3JpcHRpb24oa2V5KTtcclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9ucyA9IF9tYWtlVG9kb0J1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgdG9kb0Rpdi5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uLCBidXR0b25zWzBdLCBidXR0b25zWzFdKTtcclxuICAgICAgICBkaXYuYXBwZW5kKHRvZG9EaXYpO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfbWFrZVRvZG9CdXR0b25zID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnZWRpdCcpO1xyXG5cclxuICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdidXR0b24nKTtcclxuICAgICAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ2RlbGV0ZScpO1xyXG5cclxuICAgICAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX2VkaXRCdG4pO1xyXG4gICAgICAgIHJlbW92ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9yZW1vdmVCdG4pO1xyXG5cclxuICAgICAgICByZXR1cm4gW2VkaXRCdG4sIHJlbW92ZUJ0bl07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX21ha2VDcmVhdGVCdXR0b24gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjcmVhdGVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnYnV0dG9uJyk7XHJcbiAgICAgICAgY3JlYXRlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdjcmVhdGUnKTtcclxuXHJcbiAgICAgICAgY3JlYXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxfY3JlYXRlQnRuKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUJ0bjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfZWRpdEJ0biA9IChlKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9yZW1vdmVCdG4gPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQucGFyZW50Tm9kZS5pZDtcclxuICAgICAgICBtYW5hZ2VUb2RvLnJlbW92ZVRvZG8oaWQpO1xyXG4gICAgICAgIF91cGRhdGVQYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2NyZWF0ZUJ0biA9IChlKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF91cGRhdGVQYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb2xpc3QnKTtcclxuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1haW4ubGFzdENoaWxkKTtcclxuICAgICAgICBjb25zdCBsaXN0ID0gX21ha2VMaXN0KCk7XHJcbiAgICBcclxuICAgICAgICBtYWluLmFwcGVuZChsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwcmludFBhZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IGxpc3QgPSBfbWFrZUxpc3QoKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVCdG4gPSBfbWFrZUNyZWF0ZUJ1dHRvbigpO1xyXG4gICAgXHJcbiAgICAgICAgbWFpbi5hcHBlbmQoY3JlYXRlQnRuLCBsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwcmludFBhZ2UgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvbGlzdDsiLCJpbXBvcnQgdG9kb1N0b3JhZ2UgZnJvbSAnLi90b2RvL3RvZG9TdG9yYWdlLmpzJztcclxuXHJcbmNvbnN0IG1hbmFnZVRvZG8gPSAoKCkgPT4ge1xyXG4gICAgLy9jb25zdHJ1Y3Rvcj9cclxuICAgIGNvbnN0IGNyZWF0ZVRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpID0+IHtcclxuICAgICAgICB0b2RvU3RvcmFnZS5zdG9yZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZVRvZG8gPSBrZXkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLmRlbGV0ZVRvZG8oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldHRlcnNcclxuICAgIGNvbnN0IGdldFRvZG8gPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVRvZG8oa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRJZCA9IHRvZG8gPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZUlkKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0VGl0bGUgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVRpdGxlKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZURlc2NyaXB0aW9uKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRvZG9TdG9yYWdlLnJldHJpZXZlRHVlRGF0ZShrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldFByaW9ydHkgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZVByaW9ydHkoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRDaGVja2xpc3QgPSBrZXkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0b2RvU3RvcmFnZS5yZXRyaWV2ZUNoZWNrbGlzdChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY2hhbmdlcnNcclxuICAgIGNvbnN0ICBjaGFuZ2VUaXRsZSA9IChrZXksIG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlVGl0bGUoa2V5LCBuZXdUaXRsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2hhbmdlRGVzY3JpcHRpb24gPSAoa2V5LCBuZXdEZXNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZURlc2NyaXB0aW9uKGtleSwgbmV3RGVzY3JpcHRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUR1ZURhdGUgPSAoa2V5LCBuZXdEdWVEYXRlKSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlRHVlRGF0ZShrZXksIG5ld0R1ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVByaW9ydHkgPSAoa2V5LCBuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgdG9kb1N0b3JhZ2UudXBkYXRlUHJpb3J0eShrZXksIG5ld1ByaW9ydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoYW5nZUNoZWNrbGlzdCA9IChrZXksIG5ld0NoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIHRvZG9TdG9yYWdlLnVwZGF0ZUNoZWNrbGlzdChrZXksIG5ld0NoZWNrbGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL2NvbnN0cnVjdG9yIGFuZCByZW1vdmVyP1xyXG4gICAgICAgIGNyZWF0ZVRvZG8sIHJlbW92ZVRvZG8sXHJcbiAgICAgICAgLy9nZXR0ZXJcclxuICAgICAgICBnZXRUb2RvLCBnZXRJZCwgZ2V0VGl0bGUsIGdldERlc2NyaXB0aW9uLCBnZXREdWVEYXRlLCBnZXRQcmlvcnR5LCBnZXRDaGVja2xpc3QsXHJcbiAgICAgICAgLy9jaGFuZ2VyXHJcbiAgICAgICAgY2hhbmdlVGl0bGUsIGNoYW5nZURlc2NyaXB0aW9uLCBjaGFuZ2VEdWVEYXRlLCBjaGFuZ2VQcmlvcnR5LCBjaGFuZ2VDaGVja2xpc3RcclxuXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYW5hZ2VUb2RvOyIsImNvbnN0IHRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcnR5LCBjaGVja2xpc3QpID0+IHtcclxuICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0RHVlRGF0ZSA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gZHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcmlvcnR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmlvcnR5O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldENoZWNrbGlzdCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gY2hlY2tsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0dGVyc1xyXG4gICAgY29uc3Qgc2V0VGl0bGUgPSAobmV3VGl0bGUpID0+IHtcclxuICAgICAgICB0aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNldERlc2NyaXB0aW9uID0gKG5ld0Rlc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXREdWVEYXRlID0gKG5ld0R1ZURhdGUpID0+IHtcclxuICAgICAgICBkdWVEYXRlID0gbmV3RHVlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRQcmlvcnR5ID0gKG5ld1ByaW9ydHkpID0+IHtcclxuICAgICAgICBwcmlvcnR5ID0gbmV3UHJpb3J0eTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZXRDaGVja2xpc3QgPSAobmV3Q2hlY2tsaXN0KSA9PiB7XHJcbiAgICAgICAgY2hlY2tsaXN0ID0gbmV3Q2hlY2tsaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy9nZXR0ZXJcclxuICAgICAgICBnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9ydHksIGdldENoZWNrbGlzdCxcclxuICAgICAgICAvL3NldHRlclxyXG4gICAgICAgIHNldFRpdGxlLCBzZXREZXNjcmlwdGlvbiwgc2V0RHVlRGF0ZSwgc2V0UHJpb3J0eSwgc2V0Q2hlY2tsaXN0XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRvZG87IiwiLy8gXHJcbi8vIGZ1bmN0aW9uIGZvciBzdG9yaW5nIGFuZCByZXRyaWV2aW5nIHRvZG9zXHJcbi8vIFxyXG5pbXBvcnQgdG9kbyBmcm9tICcuL3RvZG8uanMnO1xyXG5cclxuY29uc3QgdG9kb1N0b3JhZ2UgPSAoKCkgPT4ge1xyXG4gICAgLy9wcml2YXRlIG1ldGhvZHNcclxuICAgIGNvbnN0IF9zdHJpbmdUb2RvID0gdG9kbyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RvZG8uZ2V0VGl0bGUoKX06LDoke3RvZG8uZ2V0RGVzY3JpcHRpb24oKX06LDoke3RvZG8uZ2V0RHVlRGF0ZSgpfTosOiR7dG9kby5nZXRQcmlvcnR5KCl9Oiw6JHt0b2RvLmdldENoZWNrbGlzdCgpfWBcclxuICAgIH1cclxuICAgIC8vc3RvcmVcclxuICAgIGNvbnN0IHN0b3JlVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRlbXBUb2RvID0gdG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9ydHksIGNoZWNrbGlzdCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGl0bGUsX3N0cmluZ1RvZG8odGVtcFRvZG8pKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZVxyXG4gICAgY29uc3QgZGVsZXRlVG9kbyA9IGtleSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLy9yZXRyaWV2ZVxyXG4gICAgY29uc3QgcmV0cmlldmVUb2RvID0ga2V5ID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvU3RyaW5nID0gbG9jYWxTdG9yYWdlLmtleShrZXkpO1xyXG4gICAgICAgICAgICBjb25zdCB0b2RvQXJyYXkgPSB0b2RvU3RyaW5nLnNwbGl0KCc6LDonKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRvZG8odG9kb0FycmF5WzBdLCB0b2RvQXJyYXlbMV0sIHRvZG9BcnJheVsyXSwgdG9kb0FycmF5WzNdLCB0b2RvQXJyYXlbNF0pO1xyXG4gICAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVUaXRsZSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldFRpdGxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVEZXNjcmlwdGlvbiA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldERlc2NyaXB0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmV0cmlldmVEdWVEYXRlID0ga2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gcmV0cmlldmVUb2RvKGtleSkuZ2V0RHVlRGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJldHJpZXZlUHJpb3J0eSA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldFByaW9ydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXRyaWV2ZUNoZWNrbGlzdCA9IGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJldHJpZXZlVG9kbyhrZXkpLmdldENoZWNrbGlzdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vdXBkYXRlXHJcbiAgICBjb25zdCB1cGRhdGVUaXRsZSA9IChrZXksIG5ld1RpdGxlKSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0VGl0bGUobmV3VGl0bGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZURlc2NyaXB0aW9uID0gKGtleSwgbmV3RGVzY3JpcHRpb24pID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdXBkYXRlRHVlRGF0ZSA9IChrZXksIG5ld0R1ZURhdGUpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXREdWVEYXRlKG5ld0R1ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVByaW9ydHkgPSAoa2V5LCBuZXdQcmlvcnR5KSA9PiB7XHJcbiAgICAgICAgcmV0cmlldmVUb2RvKGtleSkuc2V0UHJpb3J0eShuZXdQcmlvcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1cGRhdGVDaGVja2xpc3QgPSAoa2V5LCBuZXdDaGVja2xpc3QpID0+IHtcclxuICAgICAgICByZXRyaWV2ZVRvZG8oa2V5KS5zZXRDaGVja2xpc3QobmV3Q2hlY2tsaXN0KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICAvL3N0b3JlIGFuZCBkZWxldGVcclxuICAgICAgICBzdG9yZVRvZG8sIGRlbGV0ZVRvZG8sXHJcbiAgICAgICAgLy9yZXRyaWV2ZVxyXG4gICAgICAgIHJldHJpZXZlVG9kbywgcmV0cmlldmVUaXRsZSwgcmV0cmlldmVEZXNjcmlwdGlvbiwgcmV0cmlldmVEdWVEYXRlLCByZXRyaWV2ZVByaW9ydHksIHJldHJpZXZlQ2hlY2tsaXN0LFxyXG4gICAgICAgIC8vdXBkYXRlXHJcbiAgICAgICAgdXBkYXRlVGl0bGUsIHVwZGF0ZURlc2NyaXB0aW9uLCB1cGRhdGVEdWVEYXRlLCB1cGRhdGVQcmlvcnR5LCB1cGRhdGVDaGVja2xpc3RcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvU3RvcmFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=