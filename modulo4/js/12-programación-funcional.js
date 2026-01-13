// --- Callbacks ---
// En palabras simples, es el uso de funciones dentro de funciones.

const gritar = (texto) => {
    console.log(`¡¡ ${texto.toUpperCase()} !!`);
}

const hablar = (texto) => {
    console.log(texto.toLowerCase());
}

const procesarEntrada = (mensaje, accionCallback) => {
    accionCallback(mensaje);
    // gritar("hola mundo");
};

procesarEntrada("hola mundo", gritar);
procesarEntrada("HOLA MUNDO", hablar);

// Callbacks anónimos
const ejecutarOperacion = (num1, num2, operacion) => {
    return operacion(num1, num2);
};

const suma = ejecutarOperacion(10, 5, (a, b) => a + b); // (10, 5) => 10 + 5  =  operacion(10, 5) { return 10 + 5 }
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


const nombres = ["beto", "carla", "josefa"];
const nombresMayusculas = nombres.map( nombre => nombre.toUpperCase() );
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


// Podemos mapear objetos
const usuarios = [
    {id: 1, nombre: 'Usuario 1', email: 'usuario1@gmail.com' },
    {id: 2, nombre: 'Usuario 2', email: 'usuario2@gmail.com' },
    {id: 3, nombre: 'Usuario 3', email: 'usuario3@gmail.com' }
];

const listaEmails = usuarios.map( usuario => usuario.email );
console.log(listaEmails);

// Crear un nuevo objeto a partir de los ya existentes
const productos = [
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Mouse', precio: 20 }
];

const productosOferta = productos.map( prod => {
    return {
        ...prod,
        enOferta: true,
        precio: prod.precio * 0.9
    };
});

console.log(productos);
console.log(productosOferta);

// --- Ejercicio Integrador ---
// 1. Tienes una lista de canciones base.
// 2. Usa .map() para transformar cada objeto en un string HTML.
// 3. Utiliza .join("") para unir todo en un solo gran string.

const canciones = [
    { titulo: "", artista: "", views: 1000 },
    { titulo: "", artista: "", views: 1000 },
    { titulo: "", artista: "", views: 1000 },
];

`<div class="card">
    <h3>titulo</h3>
    <p>artista</p>
    <small>views</small>
</div>`