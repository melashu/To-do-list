import './style.css';

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const toDoList = [
  new Task('Wash the disc', false, 0),
  new Task('Read about JS', false, 1),
  new Task('Walk with my girlfrind', false, 2),
  new Task('do my to do list app', false, 3),
  new Task('Read Book', false, 4),
];

function displayTodoList() {
  const toDo = document.querySelector('.to-do-list');

  toDo.innerHTML = `<li class="top-list"><p class="todo-title">Todays To Do</p><i class="fa-solid fa-arrows-rotate top-icon"></i></li>
           <li class="top-list"> <input type="text" id="todo-box" placeholder="Add to your list..."><span class='enter-icon top-icon'></span></li>`;
  toDoList.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'list';
    li.innerHTML = `
           <input type="checkbox" class="complete" id="${index}">
           <div class="before"> <h4>${task.description} </h4><i class="fa-solid fa-ellipsis-vertical menu-icon"></i></div>
         `;

    toDo.appendChild(li);
  });
}

displayTodoList();
const container = document.querySelectorAll('.list');

for (let i = 0; i < toDoList.length; i += 1) {
  container[i].firstElementChild.checked = toDoList[i].completed;
}
