import todo from "./todo/todo";
import project from "./todo/project";
import projectlist from "./todo/projectlist";
import todolist from "./todolist/todolist";

todolist.printProject('one');
const todo1 = todo('name2','one','duedate2','priorty2','status2');
//project.addTodo(todo1);
console.log(projectlist.getProject('one'));