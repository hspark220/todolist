import project from "../project/projects";
import projectlist from "./projectlist";
import todo from "./todo";


const todoAPI = (() => {

    //create
    const makeTodo = (name, project, dueDate, priorty) => {
        const todo1 = todo(name, project, dueDate, priorty, false);
        return todo1;
    }

    const addTodo = (todo) => {
        const project = projectlist.getProject(todo.project);

        project.push(todo);
        projectlist.getProject(todo.project).push(todo);

        projectlist.updateProject(todo.project, project);
    }

    const addProject = projectName => {
        projectlist.addProject(projectName);
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

    const getProject = (projectName) => {
        return projectlist.getProject(projectName);
    }

    const getName = todo => {
        return todo.name;
    }

    const getProjectName = todo => {
        return todo.project;
    }

    const getDate = todo => {
        return todo.dueDate;
    }

    const getPriorty = todo => {
        return todo.priorty;
    }

    const getStatus = todo => {
        return todo.status;
    }

    const getProjectList = () => {
        return projectlist.getProjectList();
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
        project.splice(index, 1);
        projectlist.updateProject(todo.project, project);
    }

    const removeProject = (projectName) => {
        projectlist.removeProject(projectName);
        // const projectNames = projectlist.getProjectList();
        // const projects = projectlist.getProjects();
        // index = projectNames.indexOf(projectName);
        // projects.splice(index,1);
        

    }

    return {
        //create
        addTodo, makeTodo, addProject,
        //read
        getTodo, getLength, getProject, getProjectList, getName, getProjectName, getDate, getPriorty, getStatus,
        //update
        updateTodo, toggleStatus,
        //delete
        removeTodo, removeProject
    }
})();

export default todoAPI;