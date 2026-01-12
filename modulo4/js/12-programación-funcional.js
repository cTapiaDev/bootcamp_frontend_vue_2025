// --- Callbacks ---
// En palabras simples, es el uso de funciones dentro de funciones.

const gritar = (texto) => {
    console.log(`¡¡ ${texto.toUpperCase()} !!`);
}

const procesarEntrada = (mensaje, accionCallback) => {
    accionCallback(mensaje);
    // gritar("hola mundo");
};

procesarEntrada("hola mundo", gritar);

// Callbacks anónimos
const ejecutarOperacion = (num1, num2, operacion) => {
    return operacion(num1, num2);
};

const suma = ejecutarOperacion(10, 5, (a, b) => a + b);
console.log(suma);

const resta = ejecutarOperacion(20, 10, (a, b) => a - b);
console.log(resta);



// --- .map() ---
// Va a tomar un arreglo y le va a agregar una función a CADA elemento que tengamos.
// Los resultados te los devuelve en un nuevo arreglo.
const numeros = [2, 4, 6, 8];

const dobles = numeros.map((num) => {
    return num * 2;
});

console.log(numeros);
console.log(dobles);


const nombre = ["beto", "carla", "josefa"];
const nombresMayusculas = nombre.map( nombre => nombre.toUpperCase() );
console.log(nombresMayusculas);

// --- Diferencias con bucle ---
const precios = [100, 200];
const precioIva = [];
for (const precio of precios) {
    precioIva.push(precio * 1.19);
}

console.log(precioIva);

// Ahora con map
const precioIvaMap = precios.map(precio => precio * 1.19);
console.log(precioIvaMap);
