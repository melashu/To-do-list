/* eslint-disable */

import TaskStorage from "./TaskStorage.js";
export default class UI {
  static displayTodoList() {
    const toDoList = TaskStorage.getAllTask();
    const toDo = document.querySelector(".to-do-list");

    toDo.innerHTML = `<li class="top-list"><p class="todo-title">Todays To Do</p><i class="fa-solid fa-arrows-rotate top-icon referesh"></i></li>
           <li class="top-list"> <form class='form'><input type="text" required id="todo-box" placeholder="Add to your list..."></form><span class='enter-icon top-icon'></span></li>`;

    toDoList.forEach((task, index) => {
      this.addTaskToScreen(task, index);
    });
  }

  static addTaskToScreen(task, index) {
    const toDo = document.querySelector(".to-do-list");
    const li = document.createElement("li");
    li.className = "list";
    li.innerHTML = ` 
           <input type="checkbox" class="complete" id="${index + 1}">

           <form class="before"> 
           <input type='text' id="${index + 1}" value="${
      task.description
    }" class='task-editable'/>
    <i class="fa-solid fa-trash-can  delete-icon" id="${index + 1}"></i> 
    <i class="fa-solid fa-ellipsis-vertical menu-icon"></i>
    <input type='hidden' value='${task.description}'/>

    </form>

                    `;

    toDo.appendChild(li);
  }
}
