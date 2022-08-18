/**
 * @jest-environment jsdom
 */
import UI from "../module/UI";
describe("Add Task to the task list", () => {
  test("Add New Task", () => {
    let addLi = jest.fn((desc, index) => ({
      description: desc,
      index: index,
    }));

    document.body.innerHTML = "<div>" + '  <ul id="task-list"></ul>' + "</div>";
    const list = document.querySelector("#task-list");
    const task = addLi("Read about Jest Testing", 0);
    list.innerHTML = ` <li> <form class="before"> 
           <input type='text' id="${task.index + 1}" value="${
      task.description
    }" class='task-editable'/>
    <i class="fa-solid fa-trash-can  delete-icon" id="${task.index + 1}"></i> 
    <i class="fa-solid fa-ellipsis-vertical menu-icon"></i>
    <input type='hidden' value='${task.description}'/>
    </form> </li>`;
    const newLi = document.querySelectorAll("#task-list li");
    expect(addLi).toBeCalled();
    expect(newLi.length).toBe(1);
  });
});

