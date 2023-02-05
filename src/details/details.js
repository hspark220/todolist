import manageTodo from "../todolist/manageTodo";
import './details.css';

const details = (() => {
    const showTodo = (id) => {
        //const id = e.target.parentNode.id;
        const details = document.querySelector('.details');

        const title = document.createElement('p');
        const description = document.createElement('p');
        const dueDate = document.createElement('p');
        const priorty = document.createElement('p');
        const complete = document.createElement('p');

        title.append(manageTodo.getTitle(id));
        description.append(manageTodo.getDescription(id));
        dueDate.append(manageTodo.getDueDate(id));
        priorty.append(manageTodo.getPriorty(id));
        complete.append(manageTodo.getComplete(id));

        details.append(title, description, dueDate, priorty, complete);

    }

    return { showTodo };
})();

export default details;