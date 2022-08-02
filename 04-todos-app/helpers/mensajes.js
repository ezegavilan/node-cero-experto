require('colors');

const mostrarMenu = () => {
    return new Promise(resolve => {
        console.clear();
        console.log('==========================='.green);
        console.log(' Seleccione una opción '.green);
        console.log('===========================\n'.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir\n`);

        const input = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        input.question('Seleccione una opción: ', (op) => {
            input.close();
            resolve(op);
        });
    });
}

const pausa = () => {
    return new Promise(resolve => {
        const input = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        input.question(`Presione ${'ENTER'.green} para continuar\n`, () => {
            input.close();
            resolve();
        });
    });
}

module.exports = {
    mostrarMenu,
    pausa
}
