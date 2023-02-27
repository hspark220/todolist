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

        projectsDiv.append(addProjectBtn);

        addProjectBtn.addEventListener('click', (e) => {
            _addProjectForm();
            //add project to the list
            //reprint the projectlist?
            
        });

    }

    const _addProjectForm = () => {
        const projectsDiv = document.querySelector('.projects');
        const projectsForm = document.createElement('form');
        projectsForm.setAttribute('class','project-form');

        const projectInput = document.createElement('input');
        projectInput.setAttribute('id','project-input');
        projectInput.setAttribute('type','text');

        const projectSubmit = document.createElement('input');
        projectSubmit.setAttribute('type','button');
        projectSubmit.setAttribute('id','project-form');
        projectSubmit.addEventListener('click', (e) => {
            todoAPI.addProject(projectInput.value);
            _refreshList();
        })

        projectsForm.append(projectInput, projectSubmit);
        projectsDiv.append(projectsForm);
    }

    const _refreshList = () => {
        const projectList = document.querySelector('.project-list');
        const projectForm = document.querySelector('.project-form');
        projectList.remove();
        projectForm.remove();
        _printProjectList();
    }

    const printProjects = () => {
        const projectsDiv = document.querySelector('.projects');
        _addProjectButton();
        _printProjectList();

    }

    return {printProjects}

})();

export default projects;