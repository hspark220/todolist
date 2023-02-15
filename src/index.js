import project from './todo/project.js';
import todo from './todo/todo.js';
import projectlist from './todo/projectlist.js';


// projectlist.addProject('one');
const todo2 = todo('name2','one','priorty2','duedate2','status2');
project.addTodo(todo2);
console.log(projectlist.getProject('one'))