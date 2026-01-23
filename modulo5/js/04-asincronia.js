// --- Stack vs Queue ---
// Stack (Call Stack - Pila): El proceso en que un mesero toma nota de tu pedido.
// Web APIs: La tarea principal en donde se van a procesar los datos. El mesero no se queda a esperar que esté listo tu plato.
// Callback Queue (Cola): Esto es cuando la información (plato) está listo y a la espera del mesero.

console.log("1. Inicio");

setTimeout(() => {
    console.log("2. Proceso Asíncrono (2 segundos)");
}, 2000);

setTimeout(() => {
    console.log("3. Proceso Asíncrono (0 segundos)");
}, 0);

console.log("4. Fin");

// --- Callback Hell --- Un ejemplo de lo que NO debemos realizar
// pedirUsuario((usuario) => {
//     obtenerUsuario(usuario.id, (pedidos) => {
//         obtenerDetalle(pedidos[0], (detalle) => {
//             console.log(detalle);
//         });
//     });
// });


// --- PROMESAS ---
// Es e un objeto que representa un valor que "estará disponible ahora, en el futuro o nunca"
// Estados: Tiene 3 -->
// Pending: Esperando... (Cocinando)
// Resolved (Fulfilled): Éxito (La comida está lista)
// Rejected: Fracaso (La comida se quemó)

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

console.log("Iniciando operación...");
esperar(6000)
    .then((mensaje) => {
        console.log('Éxito:', mensaje);
        return esperar(5000);
    })
    .then((mensaje2) => {
        console.log('Segundo then:', mensaje2);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log('Esto se ejecuta al final');
    });


// --- Ejemplo de Promesa ---
// 1. Pending: Este va a ser el momento en que la app busca conductor. Está en un limbo.
// 2. Resolved: La carrera fue aceptada y nos aparecen los datos del conductor, además del tiempo estimado de llegado.
// 3. Rejected: Esto ocurría cuando no hay conductores disponibles o nadie acepta la carrera.

const solicitarUber = (ubicacion) => {

    return new Promise((resolve, reject) => {

        // Pending
        console.log(`Buscando conductores cerca de ${ubicacion}...`);

        setTimeout(() => {
            const hayConductor = Math.random() < 0.7;

            if (hayConductor) {
                // Resolved
                resolve({
                    nombre: 'Juanito Pérez',
                    auto: 'Toyota Yaris Blanco',
                    patente: 'JS-2026',
                    estrellas: 4.8
                });
            } else {
                // Rejected
                reject(`Lo sentimos, no hay conductores disponibles en tu ubicación: ${ubicacion}`)
            }
        }, 3000)
    });
};

solicitarUber('Plaza de Armas')
    .then((infoConductor) => {
        console.log('¡Conductor encontrado!');
        console.log(`El conductor ${infoConductor.nombre} va en camino...`);
        console.log(`Auto: ${infoConductor.auto} (${infoConductor.patente})`);
    })
    .catch((mensajeError) => {
        console.log(mensajeError);
    })
    .finally(() => {
        console.log('--- Solicitud finalizada ---')
    });
