import manageTodo from './manageTodo.js';
import todo from './todo.js';

const todo1 = manageTodo.createTodo(0, 'title', 'description', 'dueDate','priorty','checklist');

console.log(manageTodo.getTitle(0));