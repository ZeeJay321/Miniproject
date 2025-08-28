import moment from "moment";
import * as readline from "readline";

interface Todo {
  id: number,
  name: string,
  createdAt: string,
  completed: boolean
};

function addToDoList(todoArray: Todo[], newTask: Todo): void {
  todoArray.push(newTask);
  console.log(`\n\nNew Task (${newTask}) pushed successfully`);
};

function printToDoList(todoArray: Todo[]): void {
  console.log('\n\nYour Todo list for the day is as follows:');
  todoArray.forEach(task => {
    console.log(`Task ID ${task.id} | Task Name ${task.name} | Task Creation Time ${task.createdAt} | Task Status ${task.completed}`);
  });
};

function markToDoList(todoArray: Todo[], id: number): void {
  const markTask = todoArray.find(task => {
    return task.id === id;
  }) || {
    id: -1,
    completed: false
  };

  if (markTask.id !== -1 && markTask.completed === false) {
    markTask.completed = true;
    console.log(`\n\nTask ID ${markTask.id} completed successfully\n`);
  } else if (markTask && markTask.completed === true) {
    console.log(`\n\nTask ID ${markTask.id} already completed successfully\n`);
  } else {
    console.log(`\n\nTask ID ${id} does not exist\n`);
  }
};

const todoList: Todo[] = [];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function showMenu() {
  console.log(`\n\n
=============================
=         Todo Menu         =
=============================
= 1. Print Todo List        =
= 2. Add a New Task         =
= 3. Mark Task as Done      =
= 4. Exit                   =
=============================
`);
  rl.question('\n\nChoose an option (1-4): ', handleMenu);
}

function handleMenu(option: string) {
  switch (option.trim()) {
    case "1":
      printToDoList(todoList);
      showMenu();
      break;

    case "2":
      rl.question("\nEnter Task Name: ", (taskName: string) => {
        const newTask: Todo = {
          id: todoList.length + 1,
          name: taskName,
          createdAt: moment().format("LLL"),
          completed: false
        };
        addToDoList(todoList, newTask);
        showMenu();
      });
      break;

    case "3":
      rl.question("\nEnter Task ID to mark as done: ", (taskId: string) => {
        markToDoList(todoList, parseInt(taskId));
        showMenu();
      });
      break;

    case "4":
      console.log("\nExiting Todo App. Goodbye!");
      rl.close();
      break;

    default:
      console.log("\nInvalid option, please try again");
      showMenu();
      break;
  }
}

showMenu();