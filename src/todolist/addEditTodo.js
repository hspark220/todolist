//mini form generator for adding adding and editing todos
const addEditTodo = (() => {
    const addTodo = projectName => {
        const todolist = document.querySelector('.todolist');
        const addDiv = document.createElement('div');
        addDiv.setAttribute('class','add-div');

        todolist.append(addDiv);
    }

    return {addTodo}


})();

export default addEditTodo;