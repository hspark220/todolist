import todoStorage from './todoStorage.js';

const manageTodo = () => {
    //constructor?
    const createTodo = (id, title, description, dueDate, priorty, checklist) => {
        return todo(id, title, description, dueDate, priorty, checklist);
    }

    //getters
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
        
    }

    const changeDescription = (todo, newDescription) => {
        todo.setDescription(newDescription);
    }

    const changeDueDate = (todo, newDueDate) => {
        todo.setDueDate(newDueDate);
    }

    const changePriorty = (todo, newPriorty) => {
        todo.setPriorty(newPriorty);
    }

    const changeChecklist = (todo, newChecklist) => {
        todo.setChecklist(newChecklist);
    }

    return {
        //constructor
        createTodo,
        //getter
        getId, getTitle, getDescription, getDueDate, getPriorty, getChecklist,
        //changer
        changeTitle, changeDescription, changeDueDate, changePriorty, changeChecklist,

    
    }
}

export default manageTodo;