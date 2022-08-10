import "./style.css";

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const toDoList = [
  new Task("Wash the disc", false, 0),
  new Task("Read about JS", false, 1),
  new Task("Walk with my girlfrind", false, 2),
  new Task("do my to do list app", false, 3),
  new Task("Read Book", false, 4),
];

function displayTodoList() {
  const toDo = document.querySelector(".to-do-list");
  toDo.innerHTML = `<li><p class="todo-title">Todays To Do</p></li>
            <li><input type="text" id="todo-box" placeholder="Add to your list..."></li>`;
  toDoList.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "list";
    li.innerHTML = `
            <input type="checkbox" class="complete" id="${task.index}">
           <div class="before"> <h4>${task.description} </h4><i class="fa-solid fa-ellipsis-vertical"></i></div>
         `;

    toDo.appendChild(li);
    // const chInput = document.getElementById(task.index);
    // console.log(task.index);
    // chInput.setAttribute("checked", task.completed);
  });
}

displayTodoList();
const container = document.querySelectorAll(".list");

for (let i = 0; i < toDoList.length; i++) {
  container[i].firstElementChild.checked = toDoList[i].completed;
}

// console.log(container.firstElementChild)

// document.addEventListener('DOMContentLoaded', displayTodoList);
