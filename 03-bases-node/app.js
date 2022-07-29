const { crearArchivoTabla } = require('./util/file-creator');
const argv = require('./config/yargs');

/*
    imprimir tabla de multiplicar por consola, luego crear un archivo con la tabla
*/
console.clear();

const list = argv.l;
const base = argv.b;

crearArchivoTabla(base, list)
    .then(archivo => console.log(`${archivo} creado con éxito`))
    .catch(err => console.error(err));
