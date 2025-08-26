"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
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
    const markTask = todoArray.find(task => {
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
const todoList = [{
        id: 1,
        name: "Learn JavaScript",
        createdAt: (0, moment_1.default)().format('LLL'),
        completed: false
    }, {
        id: 2,
        name: "Learn TypeScript",
        createdAt: (0, moment_1.default)().format('LLL'),
        completed: false
    }, {
        id: 3,
        name: "Build To-Do App",
        createdAt: (0, moment_1.default)().format('LLL'),
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
    createdAt: (0, moment_1.default)().format('LLL'),
    completed: false
});
printToDoList(todoList);
