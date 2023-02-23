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

    const removeTodo = (index, todo) => {
        const project = projectlist.getProject(todo.project);
        project = project.splice(index, 1)
        projectlist.updateProject(project);

    }

    const updateTodo = (index, todo) => {
        const project = projectlist.getProject(todo.project);
        project[index] = todo;
        projectlist.updateProject(todo.project, project);
        console.log(projectlist.getProject(todo.project));
    }

    return { addTodo, getTodo, removeTodo, updateTodo}
})();

export default project;