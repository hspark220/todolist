import './project.css';
import todoAPI from "../todo/todoAPI";
import todolist from "../todolist/todolist";

const projects = (() => {

    const _printList = () => {
        const projectsDiv = document.querySelector('.projects');
        const projectListDiv = document.createElement('div');
        projectListDiv.setAttribute('class','project-list');

        

        projectsDiv.append(projectListDiv);
        
        _addTodayList();

        

        _addProjectList();
        _addProjectButton();
    }

    const _addTodayList = () => {
        const projectListDiv = document.querySelector('.project-list');

        const projectDiv = document.createElement('div');
        projectDiv.setAttribute('class','project');
        projectDiv.setAttribute('id',`project-today`);

        const projectName = document.createElement('p');
        projectName.setAttribute('class','project-name');
        projectName.append('today');

        projectDiv.append(projectName);
        projectListDiv.append(projectDiv);

        projectName.addEventListener('click', (e) => {
            todolist.printProject('today');
        });
    }

    const _addProjectList = () => {
        const projectListDiv = document.querySelector('.project-list');
        const projectTitle = document.createElement('p');        
        projectTitle.setAttribute('class','project-title');
        projectTitle.append('Projects');
        projectListDiv.append(projectTitle);

        
        const projectList = todoAPI.getProjectList();
        for (let i = 0; i < projectList.length; i++) {
            const projectDiv = document.createElement('div');
            projectDiv.setAttribute('class','project');
            projectDiv.setAttribute('id',`project${i}`);

            const projectName = document.createElement('p');
            projectName.setAttribute('class','project-name');
            projectName.append(projectList[i]);

            const removeProject = document.createElement('button');
            removeProject.setAttribute('class','remove-project');

            projectDiv.append(projectName, removeProject);
            projectListDiv.append(projectDiv);

            projectName.addEventListener('click', (e) => {
                todolist.printProject(projectList[i]);
            });

            removeProject.addEventListener('click', (e) => {
                todoAPI.removeProject(projectList[i]);
                _refreshList();
            });
        }
    }

    const _addProjectButton = () => {
        const project = document.querySelector('.projects');
        
        const projectsDiv = document.querySelector('.project-list');
        const addProjectBtn = document.createElement('button');
        addProjectBtn.setAttribute('id','add-project');

        projectsDiv.append(addProjectBtn);

        addProjectBtn.addEventListener('click', (e) => {
            addProjectBtn.disabled = true;
            _addProjectForm();
            project.addEventListener('click', _closeForm);
            
        });
    }

    const _closeForm = (e) => {
        const project = document.querySelector('.projects');
        const addButton = document.getElementById('add-project');
        const projectsForm = document.querySelector('.project-form');

        if (projectsForm === null) {
            return;
        }
        if (e.target === project) {
            projectsForm.remove();
            addButton.disabled = false;
        }
    }

    const _addProjectForm = () => {
        const project = document.querySelector('.projects');
        const addProjectBtn = document.querySelector('#add-project')

        const projectsDiv = document.querySelector('.projects');
        const projectsForm = document.createElement('form');
        projectsForm.setAttribute('class','project-form');

        const projectInput = document.createElement('input');
        projectInput.setAttribute('id','project-input');
        projectInput.setAttribute('type','text');
        projectInput.setAttribute('autocomplete','off');

        const projectSubmit = document.createElement('input');
        projectSubmit.setAttribute('type','button');
        projectSubmit.setAttribute('id','project-form');
        projectSubmit.value = 'add';

        
        
        projectSubmit.addEventListener('click', (e) => {
            todoAPI.addProject(projectInput.value);
            projectsForm.remove();
            addProjectBtn.disabled = false;
            _refreshList();
            
        })

        
        

        projectsForm.append(projectInput, projectSubmit);
        projectsDiv.append(projectsForm);
        
    }

    const _refreshList = () => {
        const projectList = document.querySelector('.project-list');
        projectList.remove();
        
        _printList();
    }

    const printProjects = () => {
        _printList();
        todolist.printProject('today');

    }

    return {printProjects}

})();

export default projects;