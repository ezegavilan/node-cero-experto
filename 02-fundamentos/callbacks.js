/*
  Ejemplo de callback en setTimeout(), el cuál recibe como primer parámetro una función callback.
  setTimeout(() => console.log('Hola!'), 1000);
*/

const getUserById = (id, callback) => {
    const user = {
        id,
        name: 'Ezequiel'
    }

    setTimeout(() => callback(user), 1500);
}

getUserById(12, ({id, name}) => {
    console.log(id);
    console.log(name.toUpperCase());
});
