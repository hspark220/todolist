import createEdit from "../inputforms/createEdit";
import manageTodo from "./manageTodo";
import './todolist.css';

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

        todoDiv.setAttribute('id', key);
        todoDiv.setAttribute('class','list-item')

        title.setAttribute('class','list-title');
        title.innerHTML = manageTodo.getTitle(key);

        const buttons = _makeTodoButtons();

        todoDiv.append(title, buttons[0], buttons[1]);
        div.append(todoDiv);

        
    }

    const _makeTodoButtons = () => {
        const completeBtn = document.createElement('input');
        completeBtn.setAttribute('type','button');
        completeBtn.setAttribute('id','complete');

        const removeBtn = document.createElement('input');
        removeBtn.setAttribute('type','button');
        removeBtn.setAttribute('id','delete');

        completeBtn.addEventListener('click', _completeBtn);
        removeBtn.addEventListener('click', _removeBtn);

        return [completeBtn, removeBtn];
    }

    const _makeCreateButton = () => {
        const createBtn = document.createElement('input');
        createBtn.setAttribute('type','button');
        createBtn.setAttribute('id','create');

        createBtn.addEventListener('click',_createBtn);

        return createBtn;
    }

    const _completeBtn = (e) => {

    }

    const _removeBtn = (e) => {
        const id = e.target.parentNode.id;
        manageTodo.removeTodo(id);
        _updatePage();
    }

    const _createBtn = () => {
        createEdit.create();
        //_updatePage();
        
    }

    const _edit = (e) => {

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

export default todolist;