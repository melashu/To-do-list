import TaskStorage from "../module/TaskStorage";
/* eslint-disable */

jest.mock(
  "../module/TaskStorage",
  () =>
    class {
      updateTask(index, desc) {
        const collection = [
          { description: "Read about JS Module" },
          { description: "Cook breakfast" },
        ];
        collection[index].description = desc;
        return collection;
      }
    }
);

describe("Test updateTask", () => {
  const taskStorage = new TaskStorage();
  const newDesc = "Read about Jest";

  test("Update description at index 0", () => {
    const updatedTask = taskStorage.updateTask(0, newDesc);

    const expectedTask = [
      { description: "Read about Jest" },
      { description: "Cook breakfast" },
    ];
    expect(updatedTask).toEqual(expectedTask);
  });

  test("Update description at index 0", () => {
    const updatedTask = taskStorage.updateTask(0, newDesc);

    const expectedTask = [
      { description: "Cook breakfast" },
      { description: "Read about Jest" },
    ];
    expect(updatedTask).not.toEqual(expectedTask);
  });

  test("Update description at index 1", () => {
    const updatedTask = taskStorage.updateTask(1, newDesc);

    const expectedTask = [
      { description: "Read about JS Module" },
      { description: "Read about Jest" },
    ];
    expect(updatedTask).toEqual(expectedTask);
  });
});

describe("Update compelted Status", () => {
  const taskStatus = jest.fn((status, index) => {
    const collection = [
      { description: "Read about JS Module", completed: false },
      { description: "Cook breakfast", completed: false },
    ];

    collection[index].completed = status;
    return collection[index].completed;
  });

  test("Compelete task at index 0", () => {
    expect(taskStatus(true, 0)).toBeTruthy();
  });

  test("Compelete task at index 0", () => {
    expect(taskStatus(false, 0)).toBeFalsy();
  });

  test("Compelete task at index 1", () => {
    expect(taskStatus(true, 1)).toBeTruthy();
  });
    
});



