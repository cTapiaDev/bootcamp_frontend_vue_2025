// --- ASYNC - AWAIT ---
// await solo se puede utilizar dentro de una función que tenga un async

const esperar = (ms) => {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject("Error: el tiempo no puede ser negativo");
        } else {
            setTimeout(() => {
                resolve(`Operación terminada en ${ms}ms`);
            }, ms);
        }
    });
}

const procesoComplejo = async () => {
    console.log('Iniciando proceso...');

    const resultado1 = await esperar(2000);
    console.log(resultado1);

    const resultado2 = await esperar(1000);
    console.log(resultado2);

    console.log('Fin del proceso...');
};

procesoComplejo();