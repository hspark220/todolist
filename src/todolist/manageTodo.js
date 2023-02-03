import todoStorage from './todoStorage.js';

const manageTodo = (() => {
    //constructor?
    const createTodo = (title, description, dueDate, priorty, complete) => {
        todoStorage.storeTodo(title, description, dueDate, priorty, complete);
        
    }

    const removeTodo = key => {
        todoStorage.deleteTodo(key);
    }

    //getters
    const getTodo = key => {
        return todoStorage.retrieveTodo(key);
    }

    const getTitle = key => {
        return todoStorage.retrieveTitle(key);
    }

    const getDescription = key => {
        return todoStorage.retrieveDescription(key);
    }

    const getDueDate = key => {
        return todoStorage.retrieveDueDate(key);
    }

    const getPriorty = key => {
        return todoStorage.retrievePriorty(key);
    }

    const getComplete = key => {
        const bool_value =  todoStorage.retrieveComplete(key);
        if (bool_value == "true") {
            return true;
        } else {
            return false;
        }
    }

    //changers
    const  changeTitle = (key, newTitle) => {
        todoStorage.updateTitle(key, newTitle);
    }

    const changeDescription = (key, newDescription) => {
        todoStorage.updateDescription(key, newDescription);
    }

    const changeDueDate = (key, newDueDate) => {
        todoStorage.updateDueDate(key, newDueDate);
    }

    const changePriorty = (key, newPriorty) => {
        todoStorage.updatePriorty(key, newPriorty);
    }

    const changeComplete = (key) => {
        if (getComplete(key) == true) {
            todoStorage.updateComplete(key, false);
        } else {
            todoStorage.updateComplete(key, true)
        }
    }

    return {
        //constructor and remover?
        createTodo, removeTodo,
        //getter
        getTodo, getTitle, getDescription, getDueDate, getPriorty, getComplete,
        //changer
        changeTitle, changeDescription, changeDueDate, changePriorty, changeComplete

    }
})();

export default manageTodo;