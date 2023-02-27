import storage from "./storage";

const projectlist = (() => {
    const addProject = (name) => {
        let list = storage.retrieveProjects();
        let nameList = storage.retrieveNames();

        if(list === null) {
            list = [];
            nameList = [];
        }

        //checks for dulicate projects
        if (nameList.indexOf(name) === -1) {
            const project = [];
            list.push(project);
            nameList.push(name);

            storage.storeProjects(list);
            storage.storeNames(nameList);
        } else {
            console.log('duplicate project name?')
        }
    }

    const getProject = (projectName) => {
        const projects = storage.retrieveProjects();
        const nameList = storage.retrieveNames();

        const index = nameList.indexOf(projectName);

        return projects[index];
    }

    const getProjects = () => {
        const projects = storage.retrieveProjects();
        return projects;
    }

    const removeProject = (projectName) => {
        const list = storage.retrieveProjects();
        const nameList = storage.retrieveNames();

        const index = nameList.indexOf(projectName);
        if (index != -1) {
            nameList.splice(index,1);
            list.splice(index,1);
        } else {
            console.log('no project?');
        }
        

        storage.storeProjects(list);
        storage.storeNames(nameList);
    }

    const updateProject = (projectName, project) => {
        const list = storage.retrieveProjects();
        const nameList = storage.retrieveNames();

        const index = nameList.indexOf(projectName);

        list[index] = (project);

        storage.storeProjects(list);
    }

    const getProjectList = () => {
        return storage.retrieveNames();
    }

    return {
        addProject, getProject, getProjects, getProjectList, removeProject, updateProject
    }
})();

export default projectlist;