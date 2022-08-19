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
