import './todolist.css'
import project from '../todo/project.js';
import projectlist from '../todo/projectlist';

const todolist = (() => {

    const printProject = projectName => {
        const todolistDiv = document.querySelector('.todolist');

        const title = document.createElement('h3');
        title.setAttribute('class','todolist-title');
        
        const list = document.createElement('div');
        list.setAttribute('class','list');

        _printList(projectName);

    }

    const _printList = projectName => {
        const list = document.querySelector('.list');

        for (project.)
        const todo = document.createElement('div');
        todo.setAttribute('id',i);

        const check = document.createElement('button');
        check.setAttribute('id','check');

        const name = document.createElement('p');
        name.setAttribute('id')
    }

    const _clearList = () => {

    }


})();

export default todolist;