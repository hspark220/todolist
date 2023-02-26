import './style.css';
import todolist from "./todolist/todolist";
import projects from "./project/projects.js";
import todoAPI from './todo/todoAPI';

todoAPI.addProject('one');
todolist.printProject('two');
projects.printProjects();
