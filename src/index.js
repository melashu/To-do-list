import './style.css';
import TaskStorage from '../js/TaskStorage;'
import UI from '../js/UI';


UI.displayTodoList();

const container = document.querySelectorAll('.list');
let toDoList = TaskStorage.getAllTask();
for (let i = 0; i < toDoList.length; i += 1) {
  container[i].firstElementChild.checked = toDoList[i].completed;
}
