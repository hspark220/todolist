//mini form generator for adding adding and editing todos
import todoAPI from "../todo/todoAPI.js";
import todolist from "./todolist.js";

const addEditTodo = (() => {
    const addTodo = projectName => {
        const todolist = document.querySelector('.todolist');
        const addDiv = document.createElement('div');
        addDiv.setAttribute('class','add-div');
        todolist.append(addDiv);
        _addForms(projectName);
        
        

        
    }

    const _addForms = projectName => {
        const addTodo = document.getElementById('addtodo');
        addTodo.disabled = true;

        const nameInput = document.createElement('input');
        nameInput.setAttribute('type','text');
        nameInput.setAttribute('id','name-input');
        nameInput.setAttribute('autocomplete','off');

        const dateInput = document.createElement('input');
        dateInput.setAttribute('type','date');
        dateInput.setAttribute('id','date-input');

        const priortyInputs = document.createElement('div');
        priortyInputs.setAttribute('class','priorty-inputs');

        const priortyLow = document.createElement('input');
        priortyLow.setAttribute('name','priorty');
        priortyLow.setAttribute('type','radio');
        priortyLow.append('x');

        const priortyMedium = document.createElement('input');
        priortyMedium.setAttribute('type','radio');
        priortyMedium.setAttribute('name','priorty');

        const priortyHigh = document.createElement('input');
        priortyHigh.setAttribute('type','radio');
        priortyHigh.setAttribute('name','priorty');

        priortyInputs.append(priortyLow, priortyMedium, priortyHigh);

        const cancelBtn = document.createElement('input');
        cancelBtn.setAttribute('type','button');
        cancelBtn.setAttribute('id','cancel-button');
        cancelBtn.value = 'Cancel';
        cancelBtn.addEventListener('click', _cancelSubmit);

        const submitBtn = document.createElement('input');
        submitBtn.setAttribute('type','button');
        submitBtn.setAttribute('id','submit-button');
        submitBtn.value = 'Submit';

        submitBtn.addEventListener('click', (e) => {
            let priorty;
            if (priortyMedium.checked) {
                priorty = 'medium';
            } else if (priortyHigh.checked) {
                priorty = 'high';
            } else {
                priorty = 'low';
            }
            todoAPI.makeTodo(nameInput.value, projectName, dateInput.value, priorty, false);
            todolist.refreshList(projectName);
            _cancelSubmit();
        });

        const addDiv = document.querySelector('.add-div');
        
        addDiv.append(nameInput, dateInput, priortyInputs, cancelBtn, submitBtn);
        nameInput.focus();

    }

    const _cancelSubmit = () => {
        const addDiv = document.querySelector('.add-div');
        const addTodo = document.getElementById('addtodo');
        addDiv.remove();
        addTodo.disabled = false;
    }

    return {addTodo}


})();

export default addEditTodo;