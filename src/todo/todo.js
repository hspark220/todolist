const todo = (id, title, description, dueDate, priorty, checklist) => {
    // getters
    const getId = () => {
        return id;
    }
    const getTitle = () => {
        return title;
    }

    const getDescription = () => {
        return description;
    }

    const getDueDate = () => {
        return dueDate;
    }

    const getPriorty = () => {
        return priorty;
    }

    const getChecklist = () => {
        return checklist;
    }

    //setters
    const setTitle = (newTitle) => {
        title = newTitle;
    }

    const setDescription = (newDescription) => {
        description = newDescription;
    }

    const setDueDate = (newDueDate) => {
        dueDate = newDueDate;
    }

    const setPriorty = (newPriorty) => {
        priorty = newPriorty;
    }

    const setChecklist = (newChecklist) => {
        checklist = newChecklist;
    }

    return {
        //getter
        getId, getTitle, getDescription, getDueDate, getPriorty, getChecklist,
        //setter
        setTitle, setDescription, setDueDate, setPriorty, setChecklist
    }
}

export default todo;