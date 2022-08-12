import Task from "../js/Task";
import UI from "../js/UI";
export default class TaskStorage {
  static getAllTask = () => {
    let tasks = [];
    if (localStorage.getItem("task") !== null) {
      tasks = JSON.parse(localStorage.getItem("task"));
    }

    return tasks;
  };

  static addNewTask = (taskInput) => {
    let tasks = this.getAllTask();
    let index = tasks.length + 1;
    let task = new Task(taskInput, index);
    tasks.push(task);

    localStorage.setItem("task", JSON.stringify(tasks));
    UI.addTaskToScreen(task, index);
  };

  static deleteTask = (index) => {
    let tasks = this.getAllTask();

    let leftTask = tasks.filter((eachTask) => eachTask.index !== index);

    let filteredID = [];

    leftTask.forEach((el, i) => {
      el.index = i + 1;
      filteredID.push(el);
    });

    localStorage.setItem("task", JSON.stringify(filteredID));
  };

  static updateTask = (desc, newIndex) => {
    let index = newIndex - 1;
    let tasks = this.getAllTask();

    for (const task of tasks) {
      if (task.index == newIndex) {
        tasks[index].description = desc;
      }
    }
    console.log(tasks);

    localStorage.setItem("task", JSON.stringify(tasks));
  };
}
