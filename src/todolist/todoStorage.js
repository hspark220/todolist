// 
// function for storing and retrieving todos
// 
import todo from './todo.js';

const todoStorage = (() => {
    //private methods
    const _stringTodo = todo => {
        return `${todo.getTitle()}:,:${todo.getDescription()}:,:${todo.getDueDate()}:,:${todo.getPriorty()}:,:${todo.getComplete()}`
    }
    //store
    const storeTodo = (title, description, dueDate, priorty, checklist) => {
        if(localStorage.getItem(title) != null) {
            //cause an error?
            console.log('error');
            return
        }
        const tempTodo = todo(title, description, dueDate, priorty, checklist);
        localStorage.setItem(title,_stringTodo(tempTodo));
    }

    //delete
    const deleteTodo = key => {
        localStorage.removeItem(retrieveTitle(key));    
    }

    //retrieve
    const retrieveTodo = key => {
        try {
            const todoString = localStorage.getItem(localStorage.key(key));
            const todoArray = todoString.split(':,:');
            return todo(todoArray[0], todoArray[1], todoArray[2], todoArray[3], todoArray[4]);
        } catch {
            return null;
        }
        
    }

    const retrieveTitle = key => {
        return retrieveTodo(key).getTitle();
    }

    const retrieveDescription = key => {
        return retrieveTodo(key).getDescription();
    }

    const retrieveDueDate = key => {
        return retrieveTodo(key).getDueDate();
    }

    const retrievePriorty = key => {
        return retrieveTodo(key).getPriorty();
    }

    const retrieveComplete = key => {
        return retrieveTodo(key).getComplete();
    }

    //update
    const updateTitle = (key, newTitle) => {
        const tempTodo = retrieveTodo(key)
        const tempTitle = tempTodo.getTitle();
        tempTodo.setTitle(newTitle);
        localStorage.setItem(tempTodo.getTitle(), _stringTodo(tempTodo));
        localStorage.removeItem(tempTitle);
    }

    const updateDescription = (key, newDescription) => {
        const tempTodo = retrieveTodo(key)
        tempTodo.setDescription(newDescription);
        localStorage.setItem(tempTodo.getTitle(),_stringTodo(tempTodo));
    }

    const updateDueDate = (key, newDueDate) => {
        const tempTodo = retrieveTodo(key)
        tempTodo.setDueDate(newDueDate);
        localStorage.setItem(tempTodo.getTitle(),_stringTodo(tempTodo));
    }

    const updatePriorty = (key, newPriorty) => {
        const tempTodo = retrieveTodo(key)
        tempTodo.setPriorty(newPriorty);
        localStorage.setItem(tempTodo.getTitle(),_stringTodo(tempTodo));
    }

    const updateComplete = (key, newComplete) => {
        const tempTodo = retrieveTodo(key)
        tempTodo.setComplete(newComplete);
        localStorage.setItem(tempTodo.getTitle(),_stringTodo(tempTodo));
    }


    return {
        //store and delete
        storeTodo, deleteTodo,
        //retrieve
        retrieveTodo, retrieveTitle, retrieveDescription, retrieveDueDate, retrievePriorty, retrieveComplete,
        //update
        updateTitle, updateDescription, updateDueDate, updatePriorty, updateComplete
    }

})();

export default todoStorage;