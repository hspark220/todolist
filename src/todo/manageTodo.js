import todoStorage from './todoStorage.js';

const manageTodo = (() => {
    //constructor?
    const createTodo = (title, project, dueDate, priorty, complete) => {
        todoStorage.storeTodo(title, project, dueDate, priorty, complete);
        
    }

    const removeTodo = key => {
        todoStorage.deleteTodo(key);
    }

    //getters
    const getTodo = key => {
        return todoStorage.retrieveTodo(key);
    }

    const getTitle = key => {
        console.log(getCurrentList());
        return todoStorage.retrieveTodo(key).title;
    }

    const getProject = key => {
        return todoStorage.retrieveTodo(key).project;
    }

    const getDueDate = key => {
        return todoStorage.retrieveTodo(key).dueDate;
    }

    const getPriorty = key => {
        return todoStorage.retrieveTodo(key).priorty;
    }

    const getComplete = key => {
        return todoStorage.retrieveTodo(key).complete;
    }

    const getProjects = () => {
        return todoStorage.retrieveProjects();
    }

    const getLength = () => {
        return todoStorage.retrieveTodoLength();
    }
    
    const getCurrentList = () => {
        return todoStorage.retrieveList();
    }

    //changers
    const  changeTitle = (key, newTitle) => {
        const todo = todoStorage.retrieveTodo(key);
        todoStorage.updateTodo(key, newTitle, todo.project, todo.dueDate, todo.priorty, todo.complete);
    }

    const changeProject = (key, newProject) => {
        const todo = todoStorage.retrieveTodo(key);
        todoStorage.updateTodo(key, todo.title, newProject, todo.dueDate, todo.priorty, todo.complete);
    }

    const changeDueDate = (key, newDueDate) => {
        const todo = todoStorage.retrieveTodo(key);
        todoStorage.updateTodo(key, todo.title, todo.project, newDueDate, todo.priorty, todo.complete);
    }

    const changePriorty = (key, newPriorty) => {
        const todo = todoStorage.retrieveTodo(key);
        todoStorage.updateTodo(key, todo.title, todo.project, todo.dueDate, newPriorty, todo.complete);
    }

    const changeComplete = (key) => {
        const todo = todoStorage.retrieveTodo(key);
        todoStorage.updateTodo(key, todo.title, todo.project, todo.dueDate, todo.priorty, !todo.complete);
    }

    const changeCurrentList = (list) => {
        todoStorage.storeList(list);
    }




    return {
        //constructor and remover?
        createTodo, removeTodo,
        //getter
        getTodo, getTitle, getProject, getDueDate, getPriorty, getComplete, getProjects, getLength, getCurrentList,
        //changer
        changeTitle, changeProject, changeDueDate, changePriorty, changeComplete, changeCurrentList

    }
})();

export default manageTodo;