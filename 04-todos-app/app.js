require('colors');

const TaskList = require('./domain/task-list');
const { save, read } = require('./db/file-repository');
const { inquirerMenu, pause, readInput, selectTaskId, confirm, selectionTasks } = require('./helpers/inquirer');
const { print } = require('./helpers/tasks-presenter');

const COMPLETED = "completada".toUpperCase();
const PENDING = "pendiente".toUpperCase();

const main = async () => {
    console.clear();

    const taskList = new TaskList();

    const tasksEntity = read();

    if (tasksEntity) {
        taskList.load(tasksEntity);
    }

    let op = '';
    do {
        op = await inquirerMenu();

        switch (op) {
            case '1':
                const description = await readInput('Descripción: ');
                taskList.createTask(description);
                break;
            case '2':
                const tasks = taskList.list;
                print(tasks);
                break;
            case '3':
                taskList.filter(COMPLETED, (tasks) => print(tasks));
                break;
            case '4':
                taskList.filter(PENDING, (tasks) => print(tasks));
                break;
            case '5':
                const ids = await selectionTasks(taskList.list);
                taskList.completeTasks(ids);
                break;
            case '6':
                const id = await selectTaskId(taskList.list);

                if (id === '0') break;

                const deleteConfirmation = await confirm('Confirmar');

                if (!deleteConfirmation) {
                    console.log('Borrado de tarea cancelado');
                } else {
                    taskList.deleteTask(id);
                    console.log('Tarea borrada con éxito');
                }

                break;
            case '0':
                console.clear();
                console.log('Bye!'.bgGreen);
                break;
            default:
                console.log('Opción no implementada aún!');
                break;
        }

        save(taskList.list);

        if (op !== '0') await pause();
    } while (op !== '0');

}

main();