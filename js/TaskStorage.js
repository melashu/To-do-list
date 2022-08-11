export class TaskStorage {
  static getAllTask = () => {
    let tasks = [];
    if (localStorage.getItem("task") !== null) {
      tasks = JSON.parse(localStorage.getItem("task"));
    }

    return tasks;
  };

  static addNewTask = (task) => {
    let tasks = this.getAllTask();
    tasks.push(task);
    localStorage.setItem("task", JSON.stringify(tasks));
  };

  static deleteTask = (index) => {
    let tasks = this.getAllTask();

    let leftTask = tasks.filter((eachTask) => eachTask.index !== index);

    let filteredID = [];

    modifiedWords.forEach((el, i) => {
      el.index = i + 1;
      filteredID.push(el);
    });

    localStorage.setItem("task", JSON.stringify(filteredID));
  };

    static updateTask = (desc, index) => {
      
  };
}
