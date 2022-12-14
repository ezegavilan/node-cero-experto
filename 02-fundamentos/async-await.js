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

const getInfoUsuario = async id => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `Empleado: ${empleado}, Salario: $${salario}`;
    } catch (err) {
        throw err;
    }
}

const id = 1;

getInfoUsuario(id)
    .then(msg => {
        console.log("OK");
        console.log(msg);
    })
    .catch(err => {
        console.log("ERROR");
        console.error(err);
    });
