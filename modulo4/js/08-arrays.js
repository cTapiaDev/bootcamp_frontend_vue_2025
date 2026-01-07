// --- Arrays (Arreglos) ---

// Array = Es el edificio completo.
// Elemento = Representa a cada departamento del edificio.
// Indice = El número que tiene asignado cada piso. (Comenzamos desde 0)

// Una lista o array de tipo String
const listaDeCompras = ["Pan", "Queso", "Huevos"];

// Array de números
const notas = [10, 5, 8, 4];

// Lista mixta
const mix = ["Hola", 100, true] // Su uso no es recomendado.

console.log(listaDeCompras);


// --- Conteo de index ---
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

console.log(diasSemana[0]);
console.log(diasSemana[2]);

console.log(diasSemana[10]); // Retorna un undefined, básicamente diciendo "no tenemos dato aquí"

console.log(diasSemana.length);

const listaVacia = [];
console.log(listaVacia.length);


// --- ¿Cuál es el último elemento? ---
const frutas = ["Manzana", "Pera", "Uva", "Sandía", "Melón"];

const ultimoIndice = frutas.length - 1;
console.log(frutas[ultimoIndice]);



// --- Modificación de un Array ---
const invitados = ["Mario", "Luigi", "Browser"];

invitados[2] = "Bowser";

console.log(invitados);


// --- La paradoja de const y mutabilidad ---
const miMochila = ["Notebook", "Agua"];

miMochila[1] = "Jugo"
console.log(miMochila);

// miMochila = ["Libros"]; // No podemos cambiar la estructura que envuelve al array

// --- .push() ---
const inventario = ["Espada", "Escudo"];

inventario.push("Poción");
console.log(inventario);

inventario.push("Mapa", "Antorcha");
console.log(inventario);

// --- .pop() ---
// Elimina el último elemento del array.
inventario.pop();
console.log(inventario);