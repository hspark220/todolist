const storage = (() => {
    const storeProjects = (projects) => {
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    const retrieveProjects = () => {
        return JSON.parse(localStorage.getItem('projects'));
    }

    const storeNames = names => {
        localStorage.setItem('projectNames',JSON.stringify(names));
    }

    const retrieveNames = names => {
        return JSON.parse(localStorage.getItem('projectNames'));
    }

    

    return {storeProjects, retrieveProjects, storeNames, retrieveNames}
})();

export default storage;