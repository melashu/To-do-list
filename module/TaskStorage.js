/* eslint-disable */

import Task from "./Task.js";
import UI from "./UI.js";

export default class TaskStorage {
  static getAllTask = () => {
    let tasks = [];
    if (localStorage.getItem("task") !== null) {
      tasks = JSON.parse(localStorage.getItem("task"));
    }

    return tasks;
  };

  static addNewTask = (taskInput) => {
    const tasks = this.getAllTask();
    const index = tasks.length + 1;
    const task = new Task(taskInput, index);
    tasks.push(task);
    localStorage.setItem("task", JSON.stringify(tasks));
    UI.addTaskToScreen(task, index);
  };

  static deleteTask = (index) => {
    const tasks = this.getAllTask();
    const leftTask = tasks.filter((eachTask) => eachTask.index != index);
    const filteredID = [];
    leftTask.forEach((el, i) => {
      el.index = i + 1;
      filteredID.push(el);
    });
    localStorage.setItem("task", JSON.stringify(filteredID));
  };


  static updateTask = (desc, newIndex) => {
    const index = newIndex - 1;
    const tasks = this.getAllTask();
    tasks.forEach((task) => {
      if (task.index == newIndex) {
        tasks[index].description = desc;
      }
    });
    localStorage.setItem("task", JSON.stringify(tasks));
  };
}
