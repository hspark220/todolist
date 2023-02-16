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

    const removeProject = (projectName) => {
        const list = storage.retrieveProjects();
        const nameList = storage.retrieveNames();

        const index = nameList.indexOf(projectName);
        nameList.slice(index);
        list.slice(index);

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

    return {
        addProject, getProject, removeProject, updateProject
    }
})();

export default projectlist;