import manageTodo from "../todo/manageTodo";
import './details.css';

const details = (() => {
    const showTodo = (id) => {
        //const id = e.target.parentNode.id;
        const details = document.querySelector('.details');

        const title = document.createElement('p');
        const project = document.createElement('p');
        const dueDate = document.createElement('p');
        const priorty = document.createElement('p');
        const complete = document.createElement('p');

        if (manageTodo.getTodo(id) != null) {
            title.append(`Title: ${manageTodo.getTitle(id)}`);
            project.append(`Descsription: ${manageTodo.getProject(id)}`);
            dueDate.append(`Due Date: ${manageTodo.getDueDate(id)}`);
            priorty.append(`Priorty: ${manageTodo.getPriorty(id)}`);
        }
        details.append(title, project, dueDate, priorty, complete);

    }

    return { showTodo };
})();

export default details;