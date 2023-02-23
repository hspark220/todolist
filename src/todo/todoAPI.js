import projectlist from "./projectlist";
import todo from "./todo";


const todoAPI = (() => {

    //create
    const makeTodo = (name, project, dueDate, priorty) => {
        const todo1 = todo(name, project, dueDate, priorty, false);
        addTodo(todo1);
    }

    const addTodo = (todo) => {
        const project = projectlist.getProject(todo.project);

        project.push(todo);
        projectlist.getProject(todo.project).push(todo);

        projectlist.updateProject(todo.project, project);
    }

    //read
    const getTodo = todo => {
        const project = projectlist.getProject(todo.project);
        const index = project.indexOf(todo.name);

        return project[index];
    }

    const getLength = (projectName) => {
        return projectlist.getProject(projectName).length;
    }

    const getProjectList = (projectName) => {
        return projectlist.getProject(projectName);
    }

    const getName = todo => {
        return todo.name;
    }

    const getProject = todo => {
        return todo.project;
    }

    const getDate = todo => {
        return todo.dueDate;
    }

    const getStatus = todo => {
        return todo.status;
    }

    // updaters?
    const updateTodo = (index, todo) => {
        const project = projectlist.getProject(todo.project);
        project[index] = todo;
        projectlist.updateProject(todo.project, project);
    }


    const toggleStatus = (index, todo) => {  
        todo.status = !todo.status;
        updateTodo(index, todo);
    }


    //delete
    const removeTodo = (index, todo) => {
        let project = projectlist.getProject(todo.project);
        project.splice(index, 1)
        projectlist.updateProject(todo.project, project);
    }   

    return {
        //create
        addTodo, makeTodo,
        //read
        getTodo, getLength, getProjectList, getName, getProject, getDate, getStatus,
        //update
        updateTodo, toggleStatus, 
        //delete
        removeTodo,
    }
})();

export default todoAPI;