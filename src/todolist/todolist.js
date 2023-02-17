import './todolist.css'
import todo from '../todo/todo';
import todoAPI from '../todo/todoAPI';

//FIX THE CREATETODOBUTTONS AND TODONAMESANDDATE
const todolist = (() => {

    const printProject = projectName => {
        _createTitle('some title');
        _createAddButton(projectName);
        _createListDiv();
        _printList(projectName);
    }

    const _printList = projectName => {
        const list = document.querySelector('.list');

        const length = todoAPI.getLength(projectName);
        const project = todoAPI.getProjectList(projectName);
        
        for (let i = 0; i < length; i++) {
            const todo = document.createElement('div');
            todo.setAttribute('id',i);
            list.append(todo);
            _createTodoButtons(i, project, projectName);
            _todoNameAndDate(i, project);

            
        }
        
        
    }

    const _refreshList = projectName => {
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
        const add = document.createElement('button');
        add.setAttribute('id','addtodo');
        add.addEventListener('click', (e) => {
            //dummy add at the moment...
            const todo1 = todo('name',projectName,'dueDate','priorty',false);
            todoAPI.addTodo(todo1);
            _refreshList(projectName);
        });
        
        todolistDiv.append(add);
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

    const _createTodoButtons = (i, project, projectName) => {

        const todo = document.getElementById(i);

        const check = document.createElement('button');
        check.setAttribute('id','todocheck');
        check.addEventListener('click',  (e) => {
            todoAPI.toggleStatus(i, project[i]);
        });

        const remove = document.createElement('button');
        remove.setAttribute('id','todoremove');
        remove.addEventListener('click', (e) => {
            todoAPI.removeTodo(i, project[i]);
            _refreshList(projectName);
        });

        todo.append(check, remove);
    }

    const _todoNameAndDate = (i, project) => {

        const todo = document.getElementById(i);

        const name = document.createElement('p');
        name.setAttribute('class', 'todo-name');
        name.innerHTML = `${todoAPI.getName(project[i])}`;

        const date = document.createElement('p');
        date.setAttribute('class','todo-date');
        date.innerHTML = `${todoAPI.getDate(project[i])}`;

        todo.append(name, date);
    }

    return {printProject}

})();

export default todolist;