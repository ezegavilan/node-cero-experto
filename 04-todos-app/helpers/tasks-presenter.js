require('colors');

const print = (tasks = []) => {
    if (tasks.length === 0) {
        console.log('No hay tareas para mostrar');
        return ;
    };
    console.log();
    tasks.forEach((task, order) => {
        order++;
        const { description, completedAt } = task;
        const status = completedAt
            ? `COMPLETADA`.green
            : `PENDIENTE`.yellow;

        let msg = `${order.toString().green} ${description} :: ${status}`;

        if (status == 'COMPLETADA'.green) {
            msg = msg.concat(` - ${completedAt}`.green);
        }

        console.log(msg);
    });
}

module.exports = {
    print
}