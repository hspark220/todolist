import './todolist.css';
import todoAPI from '../todo/todoAPI';
import addEditTodo from './addEditTodo.js';
import { format } from 'date-fns';

const todolist = (() => {

    const printProject = projectName => {

        if (document.querySelector('.list')) {
            _clearList();
        }

        _createTitle(`${projectName}`);
        _createAddButton(projectName);
        _createListDiv();
        if (projectName === 'today') {
            _printTodayList();
        } else {
            _printList(projectName);
        }
        
    }

    const _printList = projectName => {
        const list = document.querySelector('.list');
        
        const length = todoAPI.getLength(projectName);
        const project = todoAPI.getProject(projectName);
        
        for (let i = 0; i < length; i++) {
            const todo = document.createElement('div');
            todo.setAttribute('id',i);
            list.append(todo);
            _createTodoButtons(i, project, projectName, i);
            _todoNameAndDate(i, project, projectName, i);
        }
    }

    const _printTodayList = () => {
        const list = document.querySelector('.list');
        
        const projects = todoAPI.getProjects();
        const projectNames = todoAPI.getProjectList();
        const today = format(new Date(), 'yyyy-MM-dd');
        let id = 0;

        for (let i = 0; i < projects.length; i++){
            const project = projects[i];
            const projectName = projectNames[i];
            for (let j = 0; j < project.length; j++) {
                const date = todoAPI.getDate(project[j])
                if (date === today) {
                    const todo = document.createElement('div');
                    todo.setAttribute('id',id);
                    list.append(todo);
                    _createTodoButtons(j, project, projectName, id);
                    _todoNameAndDate(j, project, projectName, id);
                    id++;
                }
                
            }
        }

    }

    const refreshList = projectName => {
        const todolistDiv = document.querySelector('.todolist');
        const oldList = document.querySelector('.list');
        todolistDiv.removeChild(oldList);

        const list = document.createElement('div');
        list.setAttribute('class','list');
        todolistDiv.append(list);

        _printList(projectName);
    }

    const _createAddButton = projectName => {
        const todolistDiv = document.querySelector('.todolist');
        const addButtonDiv = document.createElement('div');
        addButtonDiv.setAttribute('class','add-button');

        const add = document.createElement('button');
        add.setAttribute('id','addtodo');
        add.addEventListener('click', (e) => {
            addEditTodo.addTodo(projectName);
        });

        const label = document.createElement('label');
        label.setAttribute('for','addtodo');
        label.innerHTML = 'add a todo';
        
        addButtonDiv.append(add, label);
        todolistDiv.append(addButtonDiv);
    }

    const _createTitle = (titleName) => {
        const todolistDiv = document.querySelector('.todolist');
        const title = document.createElement('h3');
        title.setAttribute('class','todolist-title');
        title.innerHTML = titleName;
        todolistDiv.append(title);
    }

    const _createListDiv = () => {
        const todolistDiv = document.querySelector('.todolist');
        const list = document.createElement('div');
        list.setAttribute('class','list');
        todolistDiv.append(list);
    }

    const _createTodoButtons = (i, project, projectName, id) => {

        const todo = document.getElementById(id);

        const check = document.createElement('button');
        check.setAttribute('id','todocheck');
        check.style.backgroundColor = todoAPI.getStatus(project[i]) ? 'var(--icon-color)' : 'white';

        check.addEventListener('click',  (e) => {
            todoAPI.toggleStatus(i, project[i]);
            check.style.backgroundColor = todoAPI.getStatus(project[i]) ? 'var(--icon-color)' : 'white';
        });

        const remove = document.createElement('button');
        remove.setAttribute('id','todoremove');
        remove.addEventListener('click', (e) => {
            todoAPI.removeTodo(i, project[i]);
            refreshList(projectName);
        });

        todo.append(check, remove);
    }

    const _todoNameAndDate = (i, project, projectName, id) => {

        const todo = document.getElementById(id);

        const todoContent = document.createElement('div');
        todoContent.setAttribute('class','todo-content');

        const name = document.createElement('p');
        name.setAttribute('class', 'todo-name');
        name.innerHTML = `${todoAPI.getName(project[i])}`;

        const date = document.createElement('p');
        date.setAttribute('class','todo-date');
        date.innerHTML = `${todoAPI.getDate(project[i])}`;

        todo.append(todoContent);
        todoContent.append(name, date);

        todoContent.addEventListener('click', (e) => {
            addEditTodo.editTodo(i, project, projectName);
        })
    }

    const _clearList = () => {
        const todolistTitle = document.querySelector('.todolist-title');
        const todolistAddButton = document.querySelector('.add-button');
        const todolistList = document.querySelector('.list');

        todolistTitle.remove();
        todolistAddButton.remove();
        todolistList.remove();
    }

    return {printProject, refreshList}

})();

export default todolist;