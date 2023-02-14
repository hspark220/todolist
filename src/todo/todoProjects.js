import manageTodo from "./manageTodo";
import format from "date-fns/format";

const todoProjects = (() => {

    const getList = () => {
        const todos = [];
        for(let i = 0; i < manageTodo.getLength(); i++) {            
            try {
                manageTodo.getTitle(i); //verifying that the stored item is a todo
                todos.push(manageTodo.getTodo(i));
            } catch {
                continue;
            }
        }
        return todos;
    }

    const getProjectList = projectName => {
        const todos = [];
        for(let i = 0; i < manageTodo.getLength(); i++) {
            try {
                if (manageTodo.getProject(i) === projectName) {
                    todos.push(manageTodo.getTodo(i));
                }
                
            } catch {
                continue
            }
        }
        return todos;

    }

    const getTodayList = () => {
        const todos = [];
        const today = format(new Date(), 'yyyy-MM-dd');
        for (let i = 0; i < manageTodo.getLength(); i++) {
            try {
                if (manageTodo.getDueDate(i) === today) {
                    todos.push(manageTodo.getTodo(i));
                }
            } catch {
                continue;
            }
        }
        return todos;
    }

    const getDateList = date => {
        const todos = [];
        const day = format(date, 'yyyy-MM-dd');
        for (let i = 0; i < manageTodo.getLength(); i++) {
            try {
                if (manageTodo.getDueDate(i) === day) {
                    todos.push(manageTodo.getTodo(i));
                }
            } catch {
                continue;
            }
        }
        return todos;
    }

    const getDateRangeList = (startDate, endDate) => {
        const todos = [];
        for (let i = 0; i < manageTodo.getLength(); i++) {
            try {
                if (manageTodo.getDueDate(i) > startDate && manageTodo.getDueDate(i) < endDate) {
                    todos.push(manageTodo.getTodo(i));
                }
            } catch {
                continue;
            }
        }
        return todos;
    }

    const getCompleteList = () => {
        const todos = [];
        for (let i = 0; i < manageTodo.getLength(); i++) {
            try {
                if (manageTodo.getComplete()) {
                    todos.push(manageTodo.getTodo(i));
                }
            } catch {
                continue
            }
        }
        return todos;
    }

    const getIncompleteList = () => {
        const todos = [];
        for (let i = 0; i < manageTodo.getLength(); i++) {
            try {
                if (!manageTodo.getComplete()) {
                    todos.push(manageTodo.getTodo(i));
                }
            } catch {
                continue
            }
        }
        return todos;
    }


    const getCurrentTabList = () => {
        try {
            return manageTodo.getCurrentList();

        } catch {
            return getList();
        }
        

    }


    return {
        getList, getProjectList, getCurrentTabList,
        getTodayList, getDateList, getDateRangeList,
        getCompleteList, getIncompleteList

    }

})();

export default todoProjects;