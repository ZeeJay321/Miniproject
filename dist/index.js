"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
function addToDoList(todoArray, newTask) {
    todoArray.push(newTask);
    console.log(`New Task (${newTask}) pushed successfully\n`);
}
;
function printToDoList(todoArray) {
    todoArray.forEach(task => {
        console.log(`Task ID ${task.id} | Task Name ${task.name} | Task Creation Time ${task.createdAt} | Task Status ${task.completed}`);
    });
    console.log('\n');
}
;
function markToDoList(todoArray, id) {
    let [markTask] = todoArray.filter(task => {
        return task.id === id;
    });
    if (markTask && markTask.completed === false) {
        markTask.completed = true;
        console.log(`Task ID ${markTask.id} completed successfully\n`);
    }
    else if (markTask && markTask.completed === true) {
        console.log(`Task ID ${markTask.id} already completed successfully\n`);
    }
    else {
        console.log(`Task ID ${id} does not exist\n`);
    }
}
;
let todoList = [{
        id: 1,
        name: "Learn JavaScript",
        createdAt: new Date(),
        completed: false
    }, {
        id: 2,
        name: "Learn TypeScript",
        createdAt: new Date(),
        completed: false
    }, {
        id: 3,
        name: "Build To-Do App",
        createdAt: new Date(),
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
    createdAt: new Date(),
    completed: false
});
printToDoList(todoList);
