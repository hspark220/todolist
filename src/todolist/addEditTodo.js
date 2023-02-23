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
        const titleInput = document.createElement('input');
        titleInput.setAttribute('type','text');

        const dateInput = document.createElement('input');
        dateInput.setAttribute('type','date');

        const priortyInputs = document.createElement('div');
        priortyInputs.setAttribute('class','priorty-inputs');
        const priortyLow = document.createElement('input');
        priortyLow.setAttribute('name','low');
        priortyLow.setAttribute('type','radio');
        const priortyMedium = document.createElement('input');
        priortyMedium.setAttribute('type','radio');
        priortyMedium.setAttribute('name','medium');
        const priortyHigh = document.createElement('input');
        priortyHigh.setAttribute('type','radio');
        priortyHigh.setAttribute('name','high');
        priortyInputs.append(priortyLow, priortyMedium, priortyHigh);

        const cancelBtn = document.createElement('input');
        cancelBtn.setAttribute('type','button');
        cancelBtn.addEventListener('click', _cancelSubmit);

        const submitBtn = document.createElement('input');
        submitBtn.setAttribute('type','button');

        submitBtn.addEventListener('click', (e) => {
            let priorty;
            if (priortyMedium.checked) {
                priorty = 'medium';
            } else if (priortyHigh.checked) {
                priorty = 'high';
            } else {
                priorty = 'low';
            }
            todoAPI.makeTodo(titleInput.value, projectName, dateInput.value, priorty, false);
            todolist.refreshList(projectName);
            _cancelSubmit();
        });

        const addDiv = document.querySelector('.add-div');
        
        addDiv.append(titleInput, dateInput, priortyInputs, cancelBtn, submitBtn);

    }

    const _cancelSubmit = () => {
        const addDiv = document.querySelector('.add-div');
        addDiv.remove();
    }

    return {addTodo}


})();

export default addEditTodo;