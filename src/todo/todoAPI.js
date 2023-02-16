import projectlist from "./projectlist";
import project from "./project"
import todo from "./todo";


const todoAPI = (() => {

    //getters
    const getLength = (projectName) => {
        return projectlist.getProject(projectName).length;
    }

    const getProjectList = (projectName) => {
        return projectlist.getProject(projectName);
    }

    const getName = todo => {
        return todo.name;
    }

    const getDate = todo => {
        return todo.dueDate;
    }

    const getStatus = todo => {
        return todo.status;
    }

    //setters? updaters?
    const toggleStatus = (index, todo) => {
        todo.status = !todo.status;
        project.updateTodo(index, todo);
    }

    const removeTodo = (index, todo) => {
        let project = projectlist.getProject(todo.project);
        project.splice(index, 1)
        projectlist.updateProject(todo.project, project);
        console.log(project);
    }   

    return {
        getLength, getProjectList, getName, getDate, getStatus,
        toggleStatus, removeTodo
    }
})();

export default todoAPI;