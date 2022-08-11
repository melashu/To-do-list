import TaskStorage from "./TaskStorage.js";
export default class UI {
  static displayTodoList() {
    let toDoList = TaskStorage.getAllTask();
    const toDo = document.querySelector(".to-do-list");

    toDo.innerHTML = `<li class="top-list"><p class="todo-title">Todays To Do</p><i class="fa-solid fa-arrows-rotate top-icon"></i></li>
           <li class="top-list"> <input type="text" id="todo-box" placeholder="Add to your list..."><span class='enter-icon top-icon'></span></li>`;

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
           <div class="before"> <h4>${
             task.description
           } </h4><i class="fa-solid fa-ellipsis-vertical menu-icon"></i></div>
           <div class="after"> <input type='text' value="${
             task.description
           }"/> <i class="fa-solid fa-ellipsis-vertical menu-icon"></i></div>
           `;

    toDo.appendChild(li);
  }
}
