import TaskStorage from '../module/TaskStorage.js';
/* eslint-disable */

jest.mock('../module/TaskStorage.js', () => class {
  addNewTask(val) {
    const collection = [];
    collection.push(val);
    return collection.length;
  }

  deleteTask(index) {
    const collection = [
      { description: 'Read about JS Module' },
      { description: 'Cook breakfast ' },
    ];
    if (index > collection.length || index < 0) return -1;

    const leftTask = collection.filter((eachTask, i) => i != index);
    return leftTask.length;
  }
});

describe('Test Add task', () => {
  const storageTask = new TaskStorage();
  test('Add Read CSS', () => {
    expect(storageTask.addNewTask('Read CSS')).toBe(1);
  });

  test('Add Walking with my GF', () => {
    expect(storageTask.addNewTask('Walking with my GF')).not.toBe(0);
  });

  test('Add Read JavaScript', () => {
    expect(storageTask.addNewTask('Read JAvascript')).toBeDefined();
  });
});

describe('Test Delete task', () => {
  const storageTask = new TaskStorage();
  test('Delete the 10th task', () => {
    expect(storageTask.deleteTask(9)).toBe(-1);
  });

  test('Delete the first task', () => {
    expect(storageTask.deleteTask(0)).toBe(1);
  });

  test('Delete the second task', () => {
    expect(storageTask.deleteTask(1)).toBe(1);
  });

  test('Delete task at index -1', () => {
    expect(storageTask.deleteTask(-1)).not.toBe(1);
  });
});
