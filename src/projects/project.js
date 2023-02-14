import './projects.css';
import manageTodo from '../todo/manageTodo';
import todolist from '../todolist/todolist';
import todoProjects from '../todo/todoProjects';

const projects = (() => {
    const printProjects = () => {
        const projects = document.querySelector('.projects');
        const todayTab = document.createElement('button');
        todayTab.addEventListener('click', _printTodayList);

        projects.append(todayTab);

    }

    const _printTodayList = () => {
        todolist.updateList(todoProjects.getTodayList());
    }
    
    return {printProjects};
})();

export default projects;