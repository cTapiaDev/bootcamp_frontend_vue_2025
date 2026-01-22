// .sort() --> Nos sirve para ordenar

const numeros = [2, 10, 5, 1];
numeros.sort();
console.log(numeros);

numeros.sort((a, b) => a - b);
console.log(numeros);

// Existe una solución más actualizada a este problema -> .toSorted()

const productos = [
    { nombre: 'Zapatillas', precio: 100 },
    { nombre: 'Gorro', precio: 20 },
    { nombre: 'Reloj', precio: 300 },
];

const productosOrdenados = productos.toSorted((a, b) => {
    return a.precio - b.precio;
});

console.log("Original:", productos[0].nombre);
console.log("Ordenado:", productosOrdenados[0].nombre);
console.log(productosOrdenados);



// --- .flat() ---
// Lo utilizamos principalmente para limpiar datos anidados.
const datosSucios = [1, 2, [3, 4], [5, [6, 7]]];
console.log(datosSucios.flat());

console.log(datosSucios.flat(Infinity));

//---
const articulos = [
    { titulo: 'Noticia 1', tags: ['política', 'economía']},
    { titulo: 'Noticia 2', tags: ['deportes']},
    { titulo: 'Noticia 3', tags: ['política', 'tecnología']},
];

const allTags = articulos.flatMap(art => art.tags);
// console.log(allTags);
const tagsUnicos = [...new Set(allTags)];
console.log(tagsUnicos);



// --- .reduce() ---
// Transforma una lista enorme de datos, en una sola cosa.
const ventas = [100, 50, 20];

const total = ventas.reduce((acumulador, ventaActual) => {
    console.log(`Acumulador: ${acumulador} | Suma: ${ventaActual}`);
    return acumulador + ventaActual;
}, 0)

console.log(`Total Ventas: ${total}`);


// .map - .filter - .reduce
// .map nos devuelve un array del mismo tamaño
// .filter nos devuelve un array más pequeño
// .reduce nos devuelve un dato

const nombre = "curso de javascript avanzado";

const iniciales = nombre
    .split(" ") //["curso", "de", "javascript", "avanzado"]
    .reduce((acc, palabra) => {
        return acc + palabra[0].toUpperCase();
    }, "");

console.log(iniciales);