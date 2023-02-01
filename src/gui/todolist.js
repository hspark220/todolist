import manageTodo from "../manageTodo";

const todolist = (() => {
    
    const _makeList = () => {
        const list = document.createElement('div');
        list.setAttribute('class','list');
        let i = 0;
        while (manageTodo.getTodo(i) != null) {
            _makeTodo(i, list);
            i++;
        }
        return list;
    }
    
    const _makeTodo = (key, div) => {
        
        const todoDiv = document.createElement('div');
        todoDiv.setAttribute('id', `todo${key}`);
        todoDiv.setAttribute('class','list-item')
        //title
        const title = document.createElement('p');
        title.setAttribute('class','list-title');
        title.innerHTML = manageTodo.getTitle(key);
        //description
        const description = document.createElement('p');   
        description.setAttribute('class','list-description')
        description.innerHTML = manageTodo.getDescription(key);

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

    }

    const _createBtn = (e) => {

    }

    const printPage = () => {
        const main = document.querySelector('.todolist');
        const list = _makeList();
        const createBtn = _makeCreateButton();
    
        main.append(createBtn, list);
    }

    return { printPage }
})()

export default todolist;