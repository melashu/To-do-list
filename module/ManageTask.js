/* eslint-disable */

import TaskStorage from "./TaskStorage";

export default class ManageTask {
  static fillCheckBox() {
    const container = document.querySelectorAll(".list");
    const inputItem = document.querySelectorAll(".task-editable");
    const toDoList = TaskStorage.getAllTask();
    for (let i = 0; i < toDoList.length; i += 1) {
      if (toDoList[i].completed) {
        container[i].firstElementChild.checked = toDoList[i].completed;
        inputItem[i].style.textDecoration = "line-through";
        inputItem[i].readOnly = "true";
      }
    }
  }

  static addEventToCheckBox() {
    const allCheckBox = document.querySelectorAll(".complete");
    const inputItem = document.querySelectorAll(".task-editable");

    allCheckBox.forEach((eachBox) => {
      eachBox.addEventListener("change", (e) => {
        const allList = TaskStorage.getAllTask();
        const index = Number(e.target.id) - 1;
        if (e.target.checked) {
          allList.forEach((task) => {
            if (task.index == index + 1) {
              allList[index].completed = e.target.checked;
            }
          });
// getSelection
          inputItem[index].style.textDecoration = "line-through";
          inputItem[index].setAttribute("readOnly", true);
          localStorage.setItem("task", JSON.stringify(allList));
        } else {
          allList.forEach((task) => {
            if (task.index == index + 1) {
              allList[index].completed = e.target.checked;
            }
          });
          inputItem[index].style.textDecoration = "none";
          inputItem[index].removeAttribute("readOnly");
          localStorage.setItem("task", JSON.stringify(allList));
        }
      });
    });
  }

  static cleanAll() {
    const clean = document.querySelector(".clean");
    clean.addEventListener("click", (e) => {
      e.preventDefault();
      const allList = TaskStorage.getAllTask();

      let leftTask = [];
      leftTask = allList.filter((task) => !task.completed);

      if (leftTask.length == allList.length) {
        alert("There is no compelted task!!");
      } else {
        localStorage.setItem("task", JSON.stringify(leftTask));
        window.location.reload();
      }
    });
  }
}
