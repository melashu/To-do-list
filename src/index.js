import "./style.css";

let toDoList = [
  {
    description: "Wash the disc",
    completed: false,
    index: 0,
  },
  {
    description: "Read about JS",
    completed: false,
    index: 1,
  },
  {
    description: "Walk with my girlfrind",
    completed: false,
    index: 2,
  },
  {
    description: "do my to do list app",
    completed: false,
    index: 3,
  },
];

function displayTodoList() {
  let toDo = document.querySelector(".to-do-list");
  toDo.innerHTML = `<li><p class="todo-title">Todays To Do</p></li>
            <li><input type="text" id="todo-box" placeholder="Add to your list"></li>`;
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
