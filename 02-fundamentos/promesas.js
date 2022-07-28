const empleados = [
    {
        id: 1,
        nombre: "Ezequiel",
    },
    {
        id: 2,
        nombre: "Linda",
    },
    {
        id: 3,
        nombre: "Karen",
    },
];

const salarios = [
    {
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 1500,
    },
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id === id)?.nombre;
        empleado ? resolve(empleado) : reject(reject(`No existe empleado ${id}`));
    });
};

const getSalario = (id) => {
    return new Promise((res, rej) => {
        const salario = salarios.find((s) => s.id === id)?.salario;
        salario ? res(salario) : rej(`No existe salario ${id}`);
    });
};

const id = 1;

let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`${nombre} - $ ${salario}`))
    .catch(err => console.error(err));
