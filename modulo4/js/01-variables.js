console.log('¡Hola mundo!');

// --- Variables ---
// const (constantes) -- No podemos cambiarlas.
// let (variable) -- Es un dato que puede cambiar cuando queramos.

const nombre = 'Vecna';
const fechaNacimiento = 1980;

let energia = 100;
let tieneHambre = false; // Es un dato booleano (Pueden tener true o false)

// ! No se pueden reasignar valores en las constantes
// nombre = 'Max';

console.log(energia);
energia = 200;
console.log(energia);

// String (Texto): Van siempre entre comillas simples o dobles.
// Number (int): No llevan comillas.
// Boolean: Simula un interruptor, que puede estar encendido (true) o apagado (false).

const nivelFalso = "55"; // Esto va a ser un texto. Tener cuidado cuando y dónde usarlo.


// Template String/Template Literals
// Nos ayuda a incluir variables dentro de una cadena de texto.

const producto = 'Iphone 15';
const precio = 850;
const moneda = "USD";

console.log("El " + producto + " cuesta " + precio + " " + moneda); // Forma antigua de escribir variables en texto

const mensaje = `Oferta del día: El ${producto} tiene un valor de ${precio} ${moneda}`;

console.log(mensaje);
