import todoAPI from "../todo/todoAPI";

const projects = (() => {

    const _printProjectList = () => {
        const projectsDiv = document.querySelector('.projects');
        const projectList = todoAPI.getProjectList();
        console.log(projectList);

        for (let i = 0; i < projectList.length; i++) {
            projectsDiv.append(projectList[i]);
        }

    }

    const printProjects = () => {
        const projectsDiv = document.querySelector('.projects');
        _printProjectList();

    }

    return {printProjects}

})();

export default projects;