const inquirer = require('inquirer');
require('colors');

const choices = [
    { value: '1', name: `${'1.'.brightMagenta} Crear tarea` },
    { value: '2', name: `${'2.'.brightMagenta} Listar tareas` },
    { value: '3', name: `${'3.'.brightMagenta} Listar tareas completadas` },
    { value: '4', name: `${'4.'.brightMagenta} Listar tareas pendientes` },
    { value: '5', name: `${'5.'.brightMagenta} Completar tarea(s)` },
    { value: '6', name: `${'6.'.brightMagenta} Borrar tarea` },
    { value: '0', name: `${'0.'.brightMagenta} Salir` },
];

const questions = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices
    }
];

const inquirerMenu = async () => {
    console.clear();

    console.log('==========================='.green);
    console.log(' Seleccione una opción '.white);
    console.log('===========================\n'.green);

    const { opcion } = await inquirer.prompt(questions);
    return opcion;
}

const pause = async () => {
    const msg = `Presione ${'ENTER'.green} para continuar\n`;
    const input = {
        type: 'input',
        name: 'pause',
        message: msg,
    }

    console.log('\n');
    return await inquirer.prompt(input);
}

const readInput = async message => {
    const question = {
        type: 'input',
        name: 'response',
        message,

        validate(value) {
            if (value.length === 0) {
                return 'Porfavor, ingrese un valor';
            }
            return true;
        }
    }

    const { response } = await inquirer.prompt(question);
    return response;
}

const selectTaskId = async (tasks = []) => {

    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}.`.green;

        return {
            value: task.id,
            name: `${idx} ${task.description}`
        }
    });

    choices.unshift({
        value: '0',
        name: `${'0'.green} Cancelar`
    });

    const questions = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(questions);
    return id;
}

const confirm = async message => {
    const questions = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(questions);
    return ok;
}

const selectionTasks = async (tasks = []) => {

    const choices = tasks.map((task, i) => {
        const idx = `${i + 1}.`.green;

        return {
            value: task.id,
            name: `${idx} ${task.description}`,
            checked: (task.completedAt) ? true : false
        }
    });

    const questions = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(questions);
    return ids;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    selectTaskId,
    confirm,
    selectionTasks,
}
