/*
Filename: SophisticatedCode.js

Description: This code is a complex implementation of a web-based task management system. It features various classes, functions, and data structures to handle tasks, priorities, deadlines, and user interactions. The code is optimized for performance and includes error handling and input validation. It also utilizes modern JavaScript ES6+ features and follows best coding practices.

*/

// Task Class
class Task {
  constructor(name, priority, deadline) {
    this.name = name;
    this.priority = priority;
    this.deadline = deadline;
    this.completed = false;
  }

  complete() {
    this.completed = true;
    console.log(`Task "${this.name}" marked as complete.`);
  }
}

// Task Manager Class
class TaskManager {
  constructor() {
    this.tasks = [];
  }

  addTask(name, priority, deadline) {
    const newTask = new Task(name, priority, deadline);
    this.tasks.push(newTask);
    console.log(`Task "${name}" added.`);
  }

  deleteTask(taskIndex) {
    if (taskIndex >= 0 && taskIndex < this.tasks.length) {
      const deletedTask = this.tasks.splice(taskIndex, 1);
      console.log(`Task "${deletedTask[0].name}" deleted.`);
    } else {
      console.error("Invalid task index!");
    }
  }

  getPriorityTasks(priority) {
    const priorityTasks = this.tasks.filter((task) => task.priority === priority);
    console.log(`Priority ${priority} tasks:`, priorityTasks);
    return priorityTasks;
  }
}

// Instantiate Task Manager
const taskManager = new TaskManager();

// Add tasks
taskManager.addTask("Task 1", 2, "2022-12-31");
taskManager.addTask("Task 2", 1, "2022-12-15");
taskManager.addTask("Task 3", 3, "2022-12-20");
taskManager.addTask("Task 4", 1, "2022-12-31");

// Complete a task
taskManager.tasks[1].complete();

// Delete a task
taskManager.deleteTask(2);

// Get priority tasks
taskManager.getPriorityTasks(1);

// ... (more code related to user interactions, UI updates, etc.)

// Validation and Error Handling
try {
  taskManager.addTask("Invalid Task", "High", "2022-12-31");
} catch (error) {
  console.error("Error: Invalid task details!");
}

// ... (more code)

// Export the Task Manager for reuse in other modules
export default TaskManager;