// 
// function for storing and retrieving todos
// 
import todo from './todo.js';

const todoStorage = (() => {
    //store
    const storeTodo = (title, project, dueDate, priorty, complete) => {
        if(localStorage.getItem(title) != null) {
            //cause an error?
            console.log('duplicate todo...');
            return
        }
        const tempTodo = todo(title, project, dueDate, priorty, complete);
        localStorage.setItem(title,JSON.stringify(tempTodo));
    }

    const storeProjects = (newProject) => {
        try {
            projectList = JSON.parse(localStorage.getItem('__projectlist__'));
            projectList.push(newProject);
        } catch {
            projectList = [newProject];
        }
        localStorage.setItem('__projectlist__',JSON.stringify(newProject));
    }

    const storeList = (list) => {
        localStorage.setItem('__currentList__', list)
    }

    //delete
    const deleteTodo = key => {
        localStorage.removeItem(localStorage.key(key));    
    }

    //retrieve
    const retrieveTodo = key => {
        try {
            const todo = JSON.parse(localStorage.getItem(localStorage.key(key)));
            return todo;
        } catch {
            return null;
        }
        
    }

    const retrieveProjects = () => {
        try {
            return JSON.parse(localStorage.getItem('__projectlist__'))    
        } catch {
            return;
        }
        
    }

    const retrieveTodoLength = () => {
        return localStorage.length;
    }

    const retrieveList = () => {
        return localStorage.getItem('__currentList__');
    }

    //update
    const updateTodo = (key, title, project, dueDate, priorty, complete) => {
        const tempTodo = todo(title, project, dueDate, priorty, complete);
        localStorage.removeItem(localStorage.key(key));
        localStorage.setItem(title,JSON.stringify(tempTodo));
    }

    return {
        storeTodo, storeProjects, storeList,
        deleteTodo, 
        updateTodo, 
        retrieveTodo, retrieveProjects, retrieveTodoLength, retrieveList
    }

})();

export default todoStorage;