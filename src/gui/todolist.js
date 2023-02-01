import manageTodo from "../manageTodo";

const todolist = (() => {
    //printing the whole list
    const _printList = div => {
        let i = 0;
        while (manageTodo.getTodo(i) != null) {
            _printTodo(i, div);
            i++;
        }
    }
    //printing individual todo
    const _printTodo = (key, div) => {
        
        const todoDiv = document.createElement('div');
        todoDiv.setAttribute('id', `todo${key}`);
        todoDiv.setAttribute('class','list-item')

        const title = document.createElement('p');
        const description = document.createElement('p');   
        title.setAttribute('class','list-title');
        description.setAttribute('class','list-description')
        title.innerHTML = manageTodo.getTitle(key);
        description.innerHTML = manageTodo.getDescription(key);

        todoDiv.append(title, description);
        div.append(todoDiv);
    }

    const printPage = () => {
        const main = document.querySelector('.todolist');
        const list = document.createElement('div');
        list.setAttribute('class','list');

        _printList(list);
        main.appendChild(list);
    }

    return { printPage }
})()

export default todolist;