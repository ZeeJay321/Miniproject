"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
const readline = __importStar(require("readline"));
;
function addToDoList(todoArray, newTask) {
    todoArray.push(newTask);
    console.log(`\n\nNew Task (${newTask}) pushed successfully`);
}
;
function printToDoList(todoArray) {
    console.log('\n\nYour Todo list for the day is as follows:');
    todoArray.forEach(task => {
        console.log(`Task ID ${task.id} | Task Name ${task.name} | Task Creation Time ${task.createdAt} | Task Status ${task.completed}`);
    });
}
;
function markToDoList(todoArray, id) {
    const markTask = todoArray.find(task => {
        return task.id === id;
    }) || {
        id: -1,
        completed: false
    };
    if (markTask.id !== -1 && markTask.completed === false) {
        markTask.completed = true;
        console.log(`\n\nTask ID ${markTask.id} completed successfully\n`);
    }
    else if (markTask && markTask.completed === true) {
        console.log(`\n\nTask ID ${markTask.id} already completed successfully\n`);
    }
    else {
        console.log(`\n\nTask ID ${id} does not exist\n`);
    }
}
;
const todoList = [];
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
function handleMenu(option) {
    switch (option.trim()) {
        case "1":
            printToDoList(todoList);
            showMenu();
            break;
        case "2":
            rl.question("\nEnter Task Name: ", (taskName) => {
                const newTask = {
                    id: todoList.length + 1,
                    name: taskName,
                    createdAt: (0, moment_1.default)().format("LLL"),
                    completed: false
                };
                addToDoList(todoList, newTask);
                showMenu();
            });
            break;
        case "3":
            rl.question("\nEnter Task ID to mark as done: ", (taskId) => {
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
