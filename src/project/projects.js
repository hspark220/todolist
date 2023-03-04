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
        _addDateRangeList();
        

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
            _shadeWord(projectName);
        });
    }

    const _addDateRangeList = () => {
        const projectListDiv = document.querySelector('.project-list');

        const dateRangeDiv = document.createElement('div');
        dateRangeDiv.setAttribute('class','date-range');

        const dateRangeName = document.createElement('p');
        dateRangeName.setAttribute('class','project-name date-range-name');
        dateRangeName.append('date range');

        const dateInput1 = document.createElement('input');
        dateInput1.setAttribute('type','date');
        dateInput1.setAttribute('id','date-input1');

        const dateInput2 = document.createElement('input');
        dateInput2.setAttribute('type','date');
        dateInput2.setAttribute('id','date-input2');

        dateRangeDiv.append(dateRangeName, dateInput1, dateInput2);

        dateRangeName.addEventListener('click', (e) => {
            if (dateInput1.value != '' && dateInput2.value != '') {
                todolist.printDateRange(dateInput1.value, dateInput2.value);
                _shadeWord(dateRangeName);
            }
        });

        projectListDiv.append(dateRangeDiv);

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
                _shadeWord(projectName);
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

        projectsForm.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                todoAPI.addProject(projectInput.value);
                projectsForm.remove();
                addProjectBtn.disabled = false;
                _refreshList();
            }
        })

        projectsForm.append(projectInput, projectSubmit);
        projectsDiv.append(projectsForm);

        projectInput.focus();
        
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

    const _shadeWord = (element) => {
        const projectList = document.querySelector('.project-list');
        const projectListChildren = projectList.childNodes;

        for (let i = 0; i < projectListChildren.length; i++) {
            const project = projectListChildren[i];
            
            try {
                project.firstChild.style.removeProperty('box-shadow');
                console.log(project.firstChild);
            } catch {
                continue;
            }
        }

        element.style.setProperty('box-shadow','inset 0 -0.4rem 0 #fcd34dda');
        
        
    }
    

    return {printProjects}

})();

export default projects;