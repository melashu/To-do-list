/**
 * @jest-environment jsdom
 */
describe('Add Task to the task list', () => {
  test('Add New Task', () => {
    const addLi = jest.fn((desc, index) => ({
      description: desc,
      index,
    }));

    document.body.innerHTML = '<div> <ul id="task-list"></ul> </div>';
    const list = document.querySelector('#task-list');
    const task = addLi('Read about Jest Testing', 0);
    list.innerHTML = ` <li> <form class="before"> 
           <input type='text' id="${task.index + 1}" value="${
  task.description
}" class='task-editable'/>
    <i class="fa-solid fa-trash-can  delete-icon" id="${task.index + 1}"></i> 
    <i class="fa-solid fa-ellipsis-vertical menu-icon"></i>
    <input type='hidden' value='${task.description}'/>
    </form> </li>`;
    const newLi = document.querySelectorAll('#task-list li');
    expect(addLi).toBeCalled();
    expect(newLi.length).toBe(1);
  });
});

describe('Remove task list', () => {
  test('Remove Task', () => {
    const removeTask = jest.fn(() => true);
    document.body.innerHTML = '<div> <ul class="task-list"></ul> </div>';
    const list = document.querySelector('.task-list');
    list.innerHTML = ` <li class="task"> <form class="before"> 
           <input type='text' id="1" value="Read jest" class='task-editable'/>
    <i class="fa-solid fa-trash-can  delete-icon" id="1"></i> 
    <i class="fa-solid fa-ellipsis-vertical menu-icon"></i>
    <input type='hidden' value='Read jest'/>
    </form> </li>`;

    const result = removeTask();
    const newLi = document.getElementsByClassName('task-list');
    newLi[0].remove();
    expect(result).toBeTruthy();
    expect(newLi.length).toBe(0);
  });
});
