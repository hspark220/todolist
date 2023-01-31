import todo from './todo.js';

const manageTodo = () => {
    //constructor?
    const createTodo = (title, description, dueDate, priorty, checklist) => {
        return todo(title, description, dueDate, priorty, checklist);
    }

    //getters
    const getTitle = todo => {
        return todo.getTitle();
    }

    const getDescription = todo => {
        return todo.getDescription();
    }

    const getDueDate = todo => {
        return todo.getDueDate();
    }

    const getPriorty = todo => {
        return todo.getPriorty();
    }

    const getChecklist = todo => {
        return todo.getChecklist();
    }

    //changers
    const  changeTitle = (todo, newTitle) => {
        todo.setTitle(newTitle);
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
        getTitle, getDescription, getDueDate, getPriorty, getChecklist,
        //changer
        changeTitle, changeDescription, changeDueDate, changePriorty, changeChecklist,

    
    }
}

export default manageTodo;