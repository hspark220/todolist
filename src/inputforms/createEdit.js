import manageTodo from "../todolist/manageTodo";
import todolist from "../todolist/todolist";
import './createEdit.css'

const createEdit = (() => {
    const create = () => {
        _createForm();
        const fieldset = document.getElementById('fieldset');
        const createSubmit = document.createElement('input');
        createSubmit.setAttribute('type','button');
        createSubmit.setAttribute('id','create-submit');
        createSubmit.value = 'Submit';

        createSubmit.addEventListener('click', _submitCreate);

        fieldset.append(createSubmit);
    }

    const edit = (e) => {
        const id = e.target.parentNode.id;

        _createForm();
        const fieldset = document.getElementById('fieldset');
        const editSubmit = document.createElement('input');
        editSubmit.setAttribute('type','button');
        editSubmit.setAttribute('id','edit-submit');
        editSubmit.value = 'Submit';

        const titleInput = document.querySelector('#title-input');
        const descriptionInput = document.querySelector('#description-input');
        const dueDateInput = document.querySelector('#dueDate-input');
        const priortyInput = document.querySelector('#priorty-input');

        titleInput.value = manageTodo.getTitle(id);
        descriptionInput.value = manageTodo.getDescription(id);
        dueDateInput.value = manageTodo.getDueDate(id);
        priortyInput.value = manageTodo.getPriorty(id);

        editSubmit.addEventListener('click', function _submitEdit() {
            manageTodo.changeTitle(id, titleInput.value);
            manageTodo.changeDescription(id, descriptionInput.value);
            manageTodo.changeDueDate(id, dueDateInput.value);
            manageTodo.changePriorty(id, priortyInput.value);
            _clearForm();
            todolist.updateList();
        });

        fieldset.append(editSubmit);
    }

    const _submitCreate = () => {
        const titleInput = document.querySelector('#title-input');
        const descriptionInput = document.querySelector('#description-input');
        const dueDateInput = document.querySelector('#dueDate-input');
        const priortyInput = document.querySelector('#priorty-input');

        manageTodo.createTodo(titleInput.value, descriptionInput.value, dueDateInput.value, priortyInput.value, '???');
        _clearForm();
        todolist.updateList();
    }


    const _clearForm = () => {
        const fieldset = document.getElementById('fieldset');
        fieldset.remove();
    }

    const _createForm = () => {
        const fieldset = document.createElement('fieldset');
        fieldset.setAttribute('id','fieldset');
        
        const titleDiv = document.createElement('div');
        const descriptionDiv = document.createElement('div');
        const dueDateDiv = document.createElement('div');
        const priortyDiv = document.createElement('div');
        const exitForm = document.createElement('button');

        const titleLabel = document.createElement('label');
        const titleInput = document.createElement('input');
        const descriptionLabel = document.createElement('label');
        const descriptionInput = document.createElement('input');
        const dueDateLabel = document.createElement('label');
        const dueDateInput = document.createElement('input');
        const priortyLabel = document.createElement('label');
        const priortyInput = document.createElement('select');
        const optgroup = document.createElement('optgroup');
        const optionLow = document.createElement('option');
        const optionMedium = document.createElement('option');
        const optionHigh = document.createElement('option');

        titleDiv.setAttribute('class','title-div')
        titleLabel.setAttribute('for','title-input');
        titleInput.setAttribute('type','text');
        titleInput.setAttribute('id','title-input');

        descriptionDiv.setAttribute('class','description-div');
        descriptionLabel.setAttribute('for','description-input');
        descriptionInput.setAttribute('type','text');
        descriptionInput.setAttribute('id','description-input');

        dueDateDiv.setAttribute('class','dueDate-div');
        dueDateLabel.setAttribute('for','dueDate-input');
        dueDateInput.setAttribute('type','date');
        dueDateInput.setAttribute('id','dueDate-input');

        priortyDiv.setAttribute('class','priorty-div');
        priortyLabel.setAttribute('for','priorty-input')
        priortyInput.setAttribute('id','priorty-input');
        optionLow.setAttribute('value','low');
        optionMedium.setAttribute('value','medium');
        optionHigh.setAttribute('value','high');

        exitForm.setAttribute('id','exit-form')
        exitForm.addEventListener('click', _clearForm);
        exitForm.append('Cancel');

        optionLow.append('Low');
        optionMedium.append('Medium');
        optionHigh.append('High');

        titleLabel.append('Title: ');
        descriptionLabel.append('Description: ')
        dueDateLabel.append('Due Date: ')
        priortyLabel.append('Priorty: ')

        optgroup.append(optionLow, optionMedium, optionHigh);
        priortyInput.append(optgroup);

        priortyDiv.append(priortyLabel, priortyInput);
        dueDateDiv.append(dueDateLabel, dueDateInput);
        descriptionDiv.append(descriptionLabel, descriptionInput);
        titleDiv.append(titleLabel, titleInput);

        fieldset.append(titleDiv, descriptionDiv, dueDateDiv, priortyDiv, exitForm);

        const todolist = document.querySelector('.todolist');
        todolist.append(fieldset);
        titleInput.focus();
    }

    return {create, edit}

})();

export default createEdit;