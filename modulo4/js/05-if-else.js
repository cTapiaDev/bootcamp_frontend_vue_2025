// --- IF ---
// Validación básica

const bateria = 10;

if (bateria < 20) {
    // Este bloque solo se ejecuta si la condición es true
    console.log('Batería baja. Conecta el cargador.');
}


// --- ELSE ---
const nota = 55;
const notaMinima = 60;

if (nota >= notaMinima) {
    console.log("¡Felicidades! Aprobaste el curso.");
} else {
    // Si la condición del if es falsa, se ejecuta este bloque
    console.log("Lo siento, debes repetir el curso.");
}


// --- SCOPE ---
// - scope básico
if (true) {
    const secreto = "1234";
}
// console.log(secreto);


// --- ELSE IF ---
// - Lógica anidada - Múltiples opciones

const temperatura = 5;

if (temperatura > 30) {
    console.log('¡Hace mucho calor!');
} else if (temperatura > 20) {
    console.log('Día agradable');
} else if (temperatura > 10) {
    console.log('Está fresco');
} else {
    console.log('Hace frío!!!');
}


// --- COMBINACIÓN DE OPERADORES ---
const saldoCliente = 500;
const precioProducto = 400;
const hayStock = false;

if ((saldoCliente >= precioProducto) && hayStock) {
    console.log('Compra realizada con éxito!');
} else {
    console.log('No se puede realizar la compra.');
}


// --- OPERADOR TERNARIO ---
// - En resumen, es construir un IF en una sola línea
// - condición ? valor_true : valor_false

const edad = 10;
let mensaje;

if (edad >= 18) {
    mensaje = 'Es adulto';
} else {
    mensaje = 'Es niño';
}

// - Refactorizar a operador ternario
const mensajeModerno = edad >= 18 ? 'Es adulto' : 'Es niño';

console.log(mensajeModerno);


// --- EJERCICIO ---
// "Vamos a crear un script que decida si una persona entra a la zona VIP, a la zona normal, o no entra"
// - 1. Si tiene menos de 18 años, no entra.
// - 2. Si tiene 18 o más, entra.
// - 3. Si entra y tiene "Ticket VIP", va la zona VIP, si no, a zona general.
