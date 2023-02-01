// 
// function for storing and retrieving todos
// 
import todo from './todo.js';

const todoStorage = () => {
    //private methods
    const _stringTodo = todo => {
        return `${todo.getName}:,:${todo.getDescription}:,:${todo.getDueDate}:,:${todo.getPriorty}:,:${todo.getChecklist}`
    }
    //store
    const storeTodo = todo => {
        localStorage.setItem(todo.getId, _stringTodo(todo));
    }


    //retrieve
    const retrieveTodo = key => {
        const todoString = localStorage.getItem(key);
        const todoArray = todoString.split(':,:');
        return todo(key, todoArray[0], todoArray[1], todoArray[2], todoArray[3], todoArray[4]);
    }

    const retrieveId = key => {
        return retrieveTodo(key).getId();
    }

    const retrieveTitle = key => {
        return retrieveTodo(key).getName();
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

    const retrieveChecklist = key => {
        return retrieveTodo(key).getChecklist();
    }

    //update
    const updateTitle = (key, newTitle) => {
        retrieveTodo(key).setTitle(newTitle);
    }


    return {
        //store
        storeTodo,
        //retrieve
        retrieveTodo, retrieveTitle, retrieveDescription, retrieveDueDate, retrievePriorty, retrieveChecklist
    }

}

export default todoStorage;