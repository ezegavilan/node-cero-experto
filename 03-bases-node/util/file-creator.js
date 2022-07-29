const fs = require('fs');


const crearArchivoTabla = async (base = 5, list = false) => {

    try {
        let fileName = `tabla-${base}.txt`;

        let salida = '';
        let currentResult;
        for (let i = 1; i <= 10; i++) {
            currentResult = base * i;
            salida += `${base} x ${i} = ${currentResult}\n`;
        }

        fs.writeFileSync(`./out/${fileName}`, salida);

        if (list) {
            printResult(base, salida);
        }

        return fileName;
    } catch (error) {
        throw error;
    }
}

const printResult = async (base, salida) => {

    console.log('**************');
    console.log('   Tabla del: ', base);
    console.log('**************');
    console.log();

    console.log(salida);
}

module.exports = {
    crearArchivoTabla
}
