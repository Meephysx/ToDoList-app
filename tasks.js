let tasks = [];

function addTask(taskName) {
    tasks.push({ name: taskName, completed: false });
}

function getTasks() {
    return tasks;
}

function completeTask(index) {
    if (tasks[index]) {
        tasks[index].completed = true;
        return true;
    }
    return false;
}

function deleteTask(index) {
    if (tasks[index]) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = { addTask, getTasks, completeTask, deleteTask };
