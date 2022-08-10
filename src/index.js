import "./style.css";

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

let toDoList = [
  new Task("Wash the disc", false, 0),
  new Task("Read about JS", false, 1),
  new Task("Walk with my girlfrind", false, 2),
  new Task("do my to do list app", false, 3),
  new Task("Read Book", false, 4),
];

function displayTodoList() {
  let toDo = document.querySelector(".to-do-list");
  toDo.innerHTML = `<li><p class="todo-title">Todays To Do</p></li>
            <li><input type="text" id="todo-box" placeholder="Add to your list..."></li>`;
  toDoList.forEach((task) => {
    let li = document.createElement("li");
    li.innerHTML = `
            <input type="checkbox"  id="complete" class="complete">
            ${task["description"]} <i class="fa-thin fa-ellipsis-vertical"></i>
         `;
    toDo.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", displayTodoList);
