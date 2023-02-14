import createEdit from "../inputforms/createEdit";
import manageTodo from "../todo/manageTodo";
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
        title.innerHTML = `${manageTodo.getTitle(key)} (${manageTodo.getProject(key)})`;
        
        title.style.textDecoration = manageTodo.getComplete(key) === true ? 'line-through' :'none';
        

        const buttons = _makeTodoButtons();

        todoDiv.append(title, buttons[0], buttons[1]);
        div.append(todoDiv);

        title.addEventListener('click', _edit);

        
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
        const createBtn = document.createElement('button');
        createBtn.setAttribute('id','create');

        createBtn.addEventListener('click',_createBtn);
        createBtn.append('Add');

        return createBtn;
    }

    const _completeBtn = (e) => {
        const id = e.target.parentNode.id;
        manageTodo.changeComplete(id);
        console.log(manageTodo.getComplete(id));
        updateList();
    }

    const _removeBtn = (e) => {
        const id = e.target.parentNode.id;
        manageTodo.removeTodo(id);
        updateList();
    }

    const _createBtn = () => {
        createEdit.create();
    }

    const _edit = (e) => {
        createEdit.edit(e);
    }

    const updateList = () => {
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

    return { printPage, updateList }
})()

export default todolist;