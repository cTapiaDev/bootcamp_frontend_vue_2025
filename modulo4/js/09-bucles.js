// --- El Ciclo While (Mientras...) ---

let contador = 10;

while (contador > 0) { // Mientras el contador sea mayor a 0...
    console.log(`Despegue en: ${contador}`);
    contador--;
}

console.log("¡Despegue!");

// --- Simular una lanzada de dados ---
const tirarDado = () => Math.floor(Math.random() * 6) + 1;
// Math.random -> 0.0 - 0.9

let dado = tirarDado();

while (dado !== 6) {
    console.log(`Salió un ${dado}, sigo lanzando...`);
    dado = tirarDado();
}
console.log("¡Por fin salió un 6!");


// --- For ---
// Inicialización: let i = 0
// Condición: i < 10
// Actualización: i++ o i--
// for (inicialización; condición; actualización) {}

for (let i = 1; i <= 10; i++) {
    const resultado = 5 * i;
    console.log(`5 x ${i} = ${resultado}`);
}

// --- Recorrer una lista con for ---
const lenguajes = ["JavaScript", "Java", "Python"];

for (let i = 0; i < lenguajes.length; i++) {
    console.log(`Lenguaje: ${lenguajes[i]}`);
}

// --- for...of (forEach) ---
const estudiantes = ["E1", "E2", "E3", "E4", "E5"];

for (const estudiante of estudiantes) {
    console.log(estudiante);
}

// --- Practica ---
const precios = [100, 200, 50, 300];
let total = 0;

for (const precio of precios) {
    total += precio;
}

console.log(`El total es: ${total}`);

// ---
const numeros = [10, 45, 2, 99, 5];
let mayor = numeros[0];

for (const num of numeros) {
    if (num > mayor) {
        mayor = num;
    }
}
console.log(`El número mayor es: ${mayor}`);

// ---
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];

for (const num of numeros2) {
    if (num % 2 === 0) {
        pares.push(num);
    }
}

console.log(pares);

// --- Ejercicio ---
// Crear una función que reciba un texto y nos diga cuántas vocales tiene.
// Tip: Podemos recorrer las caracteres un String, con for...of

const contarVocales = (texto) => {
    let contador = 0;
    const vocales = "aeiouáéíóúäëïöü";
    const textoMin = texto.toLowerCase();

    for (const letra of textoMin) {
        if (vocales.includes(letra)) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVocales("Murciélago"));