import "./style.css";
import TaskStorage from "../module/TaskStorage.js";
import UI from "../module/UI.js";
import ManageTask from "../module/ManageTask.js";

UI.displayTodoList();
ManageTask.fillCheckBox();
ManageTask.addEventToCheckBox();
ManageTask.cleanAll();

const toDo = document.querySelector(".form");
toDo.addEventListener("change", () => {
  const taskInput = document.getElementById("todo-box").value;
  TaskStorage.addNewTask(taskInput);
  window.location.reload();
});

const lists = document.querySelectorAll(".list");
lists.forEach((list) => {
  list.addEventListener("click", () => {
    const form = list.children[1];
    const inputBox = form.children[0];
    const deleteIcon = form.children[1];
    const menuIcon = form.children[2];
    deleteIcon.style.display = "block";
    menuIcon.style.display = "none";
    list.style.backgroundColor = "#f2f2f2";
    inputBox.style.backgroundColor = "#f2f2f2";
  });
});

lists.forEach((list) => {
  list.addEventListener("change", () => {
    const form = list.children[1];
    const inputBox = form.children[0];
    const deleteIcon = form.children[1];
    const menuIcon = form.children[2];
    const hiddenInput = form.children[3];

    deleteIcon.style.display = "none";
    menuIcon.style.display = "block";

    list.style.backgroundColor = "";
    inputBox.style.backgroundColor = "";

    if (inputBox.value !== hiddenInput.value) {
      TaskStorage.updateTask(inputBox.value, Number(inputBox.id));
    }
  });
});

lists.forEach((list) => {
  list.addEventListener("focusout", () => {
    const form = list.children[1];
    const inputBox = form.children[0];
    const deleteIcon = form.children[1];
    const menuIcon = form.children[2];

    deleteIcon.style.display = "none";
    menuIcon.style.display = "block";

    list.style.backgroundColor = "";
    inputBox.style.backgroundColor = "";
  });
});

document.querySelectorAll(".delete-icon").forEach((del) => {
  del.addEventListener("click", (e) => {
    const li = e.target.parentElement.parentElement;
    li.remove();
    const index = e.target.id;
    TaskStorage.deleteTask(index);
  });
});

document.querySelector(".referesh").addEventListener("click", () => {
  window.location.reload();
});
