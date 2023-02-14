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

    //update
    const updateTodo = (key, title, project, dueDate, priorty, complete) => {
        const tempTodo = todo(title, project, dueDate, priorty, complete);
        localStorage.removeItem(localStorage.key(key));
        localStorage.setItem(title,JSON.stringify(tempTodo));
    }

    return {
        storeTodo, deleteTodo, updateTodo, retrieveTodo
    }

})();

export default todoStorage;