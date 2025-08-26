import moment from "moment";

interface Todo {
  id: number
  name: string
  createdAt: string
  completed: boolean
};

function addToDoList(todoArray: Todo[],newTask: Todo): void {
  todoArray.push(newTask);
  console.log(`New Task (${newTask}) pushed successfully\n`);
};

function printToDoList(todoArray: Todo[]): void {
  todoArray.forEach(task => {
    console.log(`Task ID ${task.id} | Task Name ${task.name} | Task Creation Time ${task.createdAt} | Task Status ${task.completed}`);
  })

  console.log('\n');
};

function markToDoList(todoArray: Todo[], id: number): void {
  const markTask = todoArray.find(task => {
    return task.id === id;
  })

  if (markTask && markTask.completed === false) {
    markTask.completed = true;
    console.log(`Task ID ${markTask.id} completed successfully\n`);
  } else if (markTask && markTask.completed === true) {
    console.log(`Task ID ${markTask.id} already completed successfully\n`);
  } else {
    console.log(`Task ID ${id} does not exist\n`);
  }
};

const todoList: Todo[] = [{ 
  id: 1,
  name: "Learn JavaScript",
  createdAt: moment().format('LLL'),
  completed: false 
}, { 
  id: 2,
  name: "Learn TypeScript",
  createdAt: moment().format('LLL'),
  completed: false 
}, { 
  id: 3,
  name: "Build To-Do App",
  createdAt: moment().format('LLL'),
  completed: false 
}];

printToDoList(todoList);

markToDoList(todoList, 2);

markToDoList(todoList, 2);

markToDoList(todoList, 10);

printToDoList(todoList);

addToDoList(todoList, {
  id: 4,
  name: "Practice OOP in TS",
  createdAt: moment().format('LLL'),
  completed: false
});

printToDoList(todoList);