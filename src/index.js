import manageTodo from './manageTodo.js';
import todolist from './gui/todolist.js';
import './style.css';

manageTodo.createTodo('title', 'description', 'dueDate', 'priorty','checklist');
manageTodo.createTodo('title2', 'description', 'dueDate', 'priorty','checklist');
todolist.printPage();
