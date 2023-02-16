import './todolist.css'
import todo from '../todo/todo';
import todoAPI from '../todo/todoAPI';

const todolist = (() => {

    const printProject = projectName => {
        const todolistDiv = document.querySelector('.todolist');

        const title = document.createElement('h3');
        title.setAttribute('class','todolist-title');
        title.innerHTML = 'some title';
        
        const list = document.createElement('div');
        list.setAttribute('class','list');

        const add = document.createElement('button');
        add.setAttribute('id','addtodo');
        add.addEventListener('click', (e) => {
            //dummy add at the moment...
            const todo1 = todo('name','one','dueDate','priorty',false);
            todoAPI.addTodo(todo1);
            _refreshList(projectName);
        });

        todolistDiv.append(title,add,list);
        _printList(projectName);
    }

    const _printList = projectName => {
        const list = document.querySelector('.list');
        const length = todoAPI.getLength(projectName);
        const project = todoAPI.getProjectList(projectName);
        
        for (let i = 0; i < length; i++) {
            const todo = document.createElement('div');
            todo.setAttribute('id',i);

            const check = document.createElement('button');
            check.setAttribute('id','todocheck');
            check.addEventListener('click',  (e) => {
                todoAPI.toggleStatus(i, project[i]);
            });

            const name = document.createElement('p');
            name.setAttribute('class', 'todo-name');
            name.innerHTML = `${todoAPI.getName(project[i])}`;

            const date = document.createElement('p');
            date.setAttribute('class','todo-date');
            date.innerHTML = `${todoAPI.getDate(project[i])}`;

            const remove = document.createElement('button');
            remove.setAttribute('id','todoremove');
            remove.addEventListener('click', (e) => {
                todoAPI.removeTodo(i, project[i]);
                _refreshList(projectName);
            });

            todo.append(check, name, date, remove);
            list.append(todo);
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

    return {printProject}

})();

export default todolist;