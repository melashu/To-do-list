import "./style.css";
import TaskStorage from "../js/TaskStorage.js";
import UI from "../js/UI.js";
import Task from "../js/Task";

UI.displayTodoList();

const container = document.querySelectorAll(".list");
let toDoList = TaskStorage.getAllTask();
for (let i = 0; i < toDoList.length; i += 1) {
  container[i].firstElementChild.checked = toDoList[i].completed;
}

const toDo = document.querySelector(".form");
toDo.addEventListener("change", () => {
  let taskInput = document.getElementById("todo-box").value;
  TaskStorage.addNewTask(taskInput);
});

const lists = document.querySelectorAll(".list");

lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    let form = list.children[1];
    let inputBox = form.children[0];
    let deleteIcon = form.children[1];
    let menuIcon = form.children[2];
    deleteIcon.style.display = "block";
    menuIcon.style.display = "none";
    list.style.backgroundColor = "#f2f2f2";
    inputBox.style.backgroundColor = "#f2f2f2";
  });
});

lists.forEach((list) => {
  list.addEventListener("change", (e) => {
    let form = list.children[1];
    let inputBox = form.children[0];
    let deleteIcon = form.children[1];
    let menuIcon = form.children[2];
    let hiddenInput = form.children[3];

    deleteIcon.style.display = "none";
    menuIcon.style.display = "block";

    list.style.backgroundColor = "";
    inputBox.style.backgroundColor = "";

    if (inputBox.value !== hiddenInput.value) {
      TaskStorage.updateTask(inputBox.value, parseInt(inputBox.id));
    }
  });
});

lists.forEach((list) => {
  list.addEventListener("focusout", (e) => {
    let form = list.children[1];
    let inputBox = form.children[0];
    let deleteIcon = form.children[1];
    let menuIcon = form.children[2];
    let hiddenInput = form.children[3];

    deleteIcon.style.display = "none";
    menuIcon.style.display = "block";

    list.style.backgroundColor = "";
    inputBox.style.backgroundColor = "";
  });
});



document.querySelectorAll(".delete-icon").forEach((del) => {
  del.addEventListener("click", (e) => {
    let li = e.target.parentElement.parentElement;
    li.remove();
    let index = e.target.id;
    TaskStorage.deleteTask(index);
 
  });
});
