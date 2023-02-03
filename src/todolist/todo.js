const todo = (title, description, dueDate, priorty, complete) => {
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

    const getComplete = () => {
        return complete;
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

    const setComplete = (newComplete) => {
        complete = newComplete;
    }

    return {
        //getter
        getTitle, getDescription, getDueDate, getPriorty, getComplete,
        //setter
        setTitle, setDescription, setDueDate, setPriorty, setComplete
    }
}

export default todo;