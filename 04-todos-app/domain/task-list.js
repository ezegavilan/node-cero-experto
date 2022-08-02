const Task = require("./task");

class TaskList {
    /**
     * En lugar de manejar las tareas como un listado, se las maneja con un objeto literal: 'id' => task; similar a utilizar un Map.
     */
    tasks;

    constructor() {
        this.tasks = {};
    }

    createTask(description = '') {
        const task = new Task(description);
        this.tasks[task.id] = task;

    }

    load(tasks = []) {
        tasks.forEach(task => {
            this.tasks[task.id] = task;
        });
    }

    filter(status, callback) {
        const filtered = this.list
            .filter(task => {
                const currentState = task.completedAt
                    ? 'COMPLETADA'
                    : 'PENDIENTE';
                return status === currentState;
            });
        callback(filtered);
    }

    deleteTask(id = '') {
        if (this.tasks[id]) {
            delete this.tasks[id];
        }
    }

    completeTasks(ids = []) {
        ids.forEach(id => {
            this.completeTask(id);
        });

        this.list.forEach(task => {
            if (!ids.includes(task.id)) {
                this.tasks[task.id].completedAt = null;
            }
        });
    }

    completeTask(id = '') {
        const task = this.tasks[id];

        if (!task.completedAt) {
            task.completedAt = new Date().toLocaleString();
        }
    }

    /**
     * No debería ser responsabilidad de task list transformar su objeto en array. Si la lista de tareas es un objeto literal, debería devolverse dicho objeto, y la clase
     * que utiliza task list transformarlo como desee.
     */
    get list() {
        const list = [];
        Object.keys(this.tasks)
            .forEach(key => list.push(this.tasks[key]));

        return list;
    }
}

module.exports = TaskList;
