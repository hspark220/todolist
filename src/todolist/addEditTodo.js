//mini form generator for adding adding and editing todos
import todoAPI from "../todo/todoAPI.js";
import todolist from "./todolist.js";

const addEditTodo = (() => {
    const addTodo = projectName => {
        const todolist = document.querySelector('.todolist');
        const addDiv = document.createElement('form');
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

        const projectInput = document.createElement('select');
        projectInput.setAttribute('id','project-input');
        projectInput.setAttribute('autocomplete','off');
        projectInput.required = true;
        const projectList = todoAPI.getProjectList();
        const option = document.createElement('option');
        projectInput.append(option);
        for (let i = 0; i < projectList.length; i++) {
            const option = document.createElement('option');
            option.append(projectList[i]);
            if (projectName === projectList[i]) {
                option.selected = true;
                
            } 
            projectInput.append(option);
        }


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
            } else if (priortyLow.checked) {
                priorty = 'low';
            } else {
                priorty = null;
            }
            const todo1 = todoAPI.makeTodo(nameInput.value, projectInput.value, dateInput.value, priorty, false);
            todoAPI.addTodo(todo1);
            todolist.refreshList(projectName);
            _cancelSubmit();
        });

        const addDiv = document.querySelector('.add-div');
        
        addDiv.append(nameInput, projectInput, dateInput, priortyInputs, cancelBtn, submitBtn);
        nameInput.focus();

        addDiv.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                let priorty;
            if (priortyMedium.checked) {
                priorty = 'medium';
            } else if (priortyHigh.checked) {
                priorty = 'high';
            } else if (priortyLow.checked) {
                priorty = 'low';
            } else {
                priorty = null;
            }
            const todo1 = todoAPI.makeTodo(nameInput.value, projectInput.value, dateInput.value, priorty, false);
            todoAPI.addTodo(todo1);
            todolist.refreshList(projectName);
            _cancelSubmit();
            }
        });

    }

    const editTodo = (i, project, projectName) => {
        const todolist = document.querySelector('.todolist');
        if (document.querySelector('.add-div')) {
            _cancelSubmit();
        }
        const addDiv = document.createElement('div');
        addDiv.setAttribute('class','add-div');
        todolist.append(addDiv);
        _editForms(i, project, projectName);
    }

    const _editForms = (i, project, projectName) => {
        const addTodo = document.getElementById('addtodo');
        addTodo.disabled = true;

        const nameInput = document.createElement('input');
        nameInput.setAttribute('type','text');
        nameInput.setAttribute('id','name-input');
        nameInput.setAttribute('autocomplete','off');
        nameInput.value = todoAPI.getName(project[i]);

        const projectInput = document.createElement('select');
        projectInput.setAttribute('id','project-input');
        projectInput.setAttribute('autocomplete','off');
        projectInput.required = true;
        const projectList = todoAPI.getProjectList();
        const option = document.createElement('option');
        projectInput.append(option);
        for (let j = 0; j < projectList.length; j++) {
            const option = document.createElement('option');
            option.append(projectList[j]);
            if (todoAPI.getProjectName(project[i]) === projectList[j]) {
                option.selected = true;
                
            } 
            projectInput.append(option);
        }

        const dateInput = document.createElement('input');
        dateInput.setAttribute('type','date');
        dateInput.setAttribute('id','date-input');
        dateInput.value = todoAPI.getDate(project[i]);

        const priortyInputs = document.createElement('div');
        priortyInputs.setAttribute('class','priorty-inputs');

        const priortyLow = document.createElement('input');
        priortyLow.setAttribute('name','priorty');
        priortyLow.setAttribute('type','radio');

        const priortyMedium = document.createElement('input');
        priortyMedium.setAttribute('type','radio');
        priortyMedium.setAttribute('name','priorty');

        const priortyHigh = document.createElement('input');
        priortyHigh.setAttribute('type','radio');
        priortyHigh.setAttribute('name','priorty');

        priortyInputs.append(priortyLow, priortyMedium, priortyHigh);

        const priortyValue = todoAPI.getPriorty(project[i]);
        if (priortyValue === 'low') { priortyLow.setAttribute('checked', 'true')}
        else if(priortyValue === 'medium') { priortyMedium.setAttribute('checked','true')}
        else if (priortyValue === 'high') {priortyHigh.setAttribute('checked','true')}
        else {};


        const cancelBtn = document.createElement('input');
        cancelBtn.setAttribute('type','button');
        cancelBtn.setAttribute('id','cancel-button');
        cancelBtn.value = 'Cancel';
        cancelBtn.addEventListener('click', _cancelSubmit);

        const editBtn = document.createElement('input');
        editBtn.setAttribute('type','button');
        editBtn.setAttribute('id','edit-button');
        editBtn.value = 'Edit';

        editBtn.addEventListener('click', (e) => {
            let priorty;
            if (priortyMedium.checked) {
                priorty = 'medium';
            } else if (priortyHigh.checked) {
                priorty = 'high';
            } else {
                priorty = 'low';
            }
            
            const todo1 = todoAPI.makeTodo(nameInput.value, projectInput.value, dateInput.value, priorty, false);
            if (projectName != projectInput.value) {
                todoAPI.removeTodo(i, project[i]);
                todoAPI.addTodo(todo1);
            } else {
                todoAPI.updateTodo(i, todo1);
            }
            
            todolist.refreshList(projectName);
            _cancelSubmit();
        });

        const addDiv = document.querySelector('.add-div');
        
        addDiv.append(nameInput, projectInput, dateInput, priortyInputs, cancelBtn, editBtn);
        nameInput.focus();

        addDiv.addEventListener('keydown',(e) => {
            if (e.key === 'Enter') {
                let priorty;
                if (priortyMedium.checked) {
                    priorty = 'medium';
                } else if (priortyHigh.checked) {
                    priorty = 'high';
                } else {
                    priorty = 'low';
                }
                
                const todo1 = todoAPI.makeTodo(nameInput.value, projectInput.value, dateInput.value, priorty, false);
                if (projectName != projectInput.value) {
                    todoAPI.removeTodo(i, project[i]);
                    todoAPI.addTodo(todo1);
                } else {
                    todoAPI.updateTodo(i, todo1);
                }
                
                todolist.refreshList(projectName);
                _cancelSubmit();
            }
        });
    }

    const _cancelSubmit = () => {
        const addDiv = document.querySelector('.add-div');
        const addTodo = document.getElementById('addtodo');
        addDiv.remove();
        addTodo.disabled = false;
    }

    return {addTodo, editTodo}


})();

export default addEditTodo;