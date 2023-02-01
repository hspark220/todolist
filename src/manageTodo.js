import todoStorage from './todoStorage.js';

const manageTodo = () => {
    //constructor?
    const createTodo = (id, title, description, dueDate, priorty, checklist) => {
        todoStorage.storeTodo(id, title, description, dueDate, priorty, checklist);
    }

    const removeTodo = key => {
        todoStorage.deleteTodo(key);
    }

    //getters
    const getId = key => {
        return todoStorage.retrieveId(key);
    }

    const getTitle = key => {
        return todoStorage.retrieveTodo(key);
    }

    const getDescription = key => {
        return todoStorage.retrieveTodo(key);
    }

    const getDueDate = key => {
        return todoStorage.retrieveTodo(key);
    }

    const getPriorty = key => {
        return todoStorage.retrieveTodo(key);
    }

    const getChecklist = key => {
        return todoStorage.retrieveTodo(key);
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

    const changeChecklist = (key, newChecklist) => {
        todoStorage.updateChecklist(key, newChecklist);
    }


    return {
        //constructor and remover?
        createTodo, removeTodo,
        //getter
        getId, getTitle, getDescription, getDueDate, getPriorty, getChecklist,
        //changer
        changeTitle, changeDescription, changeDueDate, changePriorty, changeChecklist

    }
}

export default manageTodo();