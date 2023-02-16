import projectlist from "./projectlist";
import todo from "./todo";

const project = (() => {
    const addTodo = (todo) => {
        const project = projectlist.getProject(todo.project);

        project.push(todo);
        projectlist.getProject(todo.project).push(todo);

        projectlist.updateProject(todo.project, project);
    }

    const getTodo = todo => {
        const project = projectlist.getProject(todo.project);
        const index = project.indexOf(todo.name);

        return project[index];
    }

    const removeTodo = todo => {
        const project = projectlist.getProject(todo.project);
        const index = project.indexOf(todo.name);
        project.slice(index)
        projectlist.updateProject(project);

    }

    const updateTodo = (todoName, todo) => {
        const project = projectlist.getProject(todo.project);
        const index = project.indexOf(todoName);
        project[index] = todo;
        projectlist.updateProject(project);
    }

    return { addTodo, getTodo, removeTodo, updateTodo}
})();

export default project;