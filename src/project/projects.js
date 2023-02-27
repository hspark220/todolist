import './project.css';
import todoAPI from "../todo/todoAPI";
import todolist from "../todolist/todolist";

const projects = (() => {

    const _printProjectList = () => {
        const projectsDiv = document.querySelector('.projects');
        const projectDiv = document.createElement('div');
        projectDiv.setAttribute('class','project-list');

        const projectList = todoAPI.getProjectList();
        projectsDiv.append(projectDiv);

        for (let i = 0; i < projectList.length; i++) {
            //add clickable projects?
            const projectName = document.createElement('p');
            projectName.append(projectList[i]);
            projectDiv.append(projectName);

            projectName.addEventListener('click', (e) => {
                todolist.printProject(projectList[i]);
            })


        }

    }

    const _addProjectButton = () => {
        const projectsDiv = document.querySelector('.projects');
        const addProjectBtn = document.createElement('button');

        addProjectBtn.addEventListener('click', (e) => {
            //add project to the list
            //print the projectlist?
            
        });

    }

    const printProjects = () => {
        const projectsDiv = document.querySelector('.projects');
        _addProjectButton();
        _printProjectList();

    }

    return {printProjects}

})();

export default projects;