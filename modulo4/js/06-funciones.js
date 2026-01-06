// --- Functions (Arrow Functions) ---

// Lo malo, es utilizar código repetitivo.
// DRY -- No debemos repetir código.

console.log("Hola Juan, ¡Bienvenido al sistema!");
console.log("Hola Maria, ¡Bienvenido al sistema!");
console.log("Hola Juanito, ¡Bienvenido al sistema!");
// ESTO ESTÁ MALO, NO DEBEMOS REPETIR CÓDIGO.

// Sintaxis
// const : es constante porque la función no cambia.
// nombre : es el como vamos a llamar a nuestra función.
// = () => : es la flecha que apunta a la función.
// { } : el bloque o cuerpo de la función.


// function saludar() {
//     console.log("Saludo desde function");
// }

const saludar = () => {
    console.log("¡Hola! Bienvenido al curso.");
};

saludar();
saludar();
saludar();
saludar();


// --- Parámetros ---
// Es una variable que SOLO existe dentro de la función.
const saludarUsuario = (nombreUsuario) => {
    console.log(`Hola ${nombreUsuario}, es un gusto tenerte de vuelta`);
};

let nombre = "Fernanda";

saludarUsuario(nombre);
saludarUsuario("Camila");


// --- Múltiples parámetros ---
const presentar = (nombre, edad, pais) => {
    console.log(`Me llamo ${nombre}, tengo ${edad} años y soy de ${pais}.`);
};

presentar("Gustavo", 25, "Chile");
// presentar(30, "Chile", "Gustavo"); // EL ORDEN ES IMPORTANTE!!


// --- Parámetros por defecto
const saludarInvitados = (nombre = "Invitado") => {
    console.log(`Bienvenido/a, ${nombre}`);
};

saludarInvitados("Sofia");
saludarInvitados();


// --- RETURN ---
const sumar = (num1, num2) => {
    const resultado = num1 + num2;
    return resultado;
};

const total = sumar(10, 20);

console.log(`El total es: ${total}`);

// Límite del return
const pruebaReturn = () => {
    console.log("Esto es antes del return");
    return "Esto se retorna";
    console.log("Esto NUNCA se va a ver"); // Código muerto.
};

const texto = pruebaReturn();
console.log(texto);


// --- Ejercicio ---
// Realizar una función que pueda calcular el área de un rectángulo, para saber cuánta pintura comprar.
// base * altura - idealmente usar un return para devolver el dato.

const areaPintar = (altoCentimetros = 0, anchoCentimetros = 0) => {
    const areaM2 = (altoCentimetros * anchoCentimetros) / 10000;
    return `El área a pintar es de ${areaM2} metros cuadrados (m²).`;
}

const total2 = areaPintar(100, 50);
console.log(total2);


// --- Return implicito ---
const duplicar = (numero) => {
    return numero * 2;
}

const duplicarPro = (numero) => numero * 2;

console.log(duplicar(10));
console.log(duplicarPro(10));


// --- Ejercicio 2 ---
// Crea una función "ataque" que reciba el tipo de ataque y el daño.
// 1. Si el ataque es "Fuego", el daño se multiplica por 2.
// 2. Si es "Agua", el daño es normal
// 3. Cualquier otro tipo de ataque, tiene daño 1.
// 4. Retornar un string con el reporte de daños.