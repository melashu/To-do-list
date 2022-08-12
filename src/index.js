import './style.css';
import TaskStorage from '../js/TaskStorage.js';
import UI from '../js/UI.js';

UI.displayTodoList();

const container = document.querySelectorAll('.list');
const toDoList = TaskStorage.getAllTask();
for (let i = 0; i < toDoList.length; i += 1) {
  container[i].firstElementChild.checked = toDoList[i].completed;
}

const toDo = document.querySelector('.form');
toDo.addEventListener('change', () => {
  const taskInput = document.getElementById('todo-box').value;
  TaskStorage.addNewTask(taskInput);
});

const lists = document.querySelectorAll('.list');

lists.forEach((list) => {
  list.addEventListener('click', () => {
    const form = list.children[1];
    const inputBox = form.children[0];
    const deleteIcon = form.children[1];
    const menuIcon = form.children[2];
    deleteIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    list.style.backgroundColor = '#f2f2f2';
    inputBox.style.backgroundColor = '#f2f2f2';
  });
});

lists.forEach((list) => {
  list.addEventListener('change', () => {
    const form = list.children[1];
    const inputBox = form.children[0];
    const deleteIcon = form.children[1];
    const menuIcon = form.children[2];
    const hiddenInput = form.children[3];

    deleteIcon.style.display = 'none';
    menuIcon.style.display = 'block';

    list.style.backgroundColor = '';
    inputBox.style.backgroundColor = '';

    if (inputBox.value !== hiddenInput.value) {
      TaskStorage.updateTask(inputBox.value, Number(inputBox.id));
    }
  });
});

lists.forEach((list) => {
  list.addEventListener('focusout', () => {
    const form = list.children[1];
    const inputBox = form.children[0];
    const deleteIcon = form.children[1];
    const menuIcon = form.children[2];

    deleteIcon.style.display = 'none';
    menuIcon.style.display = 'block';

    list.style.backgroundColor = '';
    inputBox.style.backgroundColor = '';
  });
});

document.querySelectorAll('.delete-icon').forEach((del) => {
  del.addEventListener('click', (e) => {
    const li = e.target.parentElement.parentElement;
    li.remove();
    const index = e.target.id;
    TaskStorage.deleteTask(index);
  });
});
