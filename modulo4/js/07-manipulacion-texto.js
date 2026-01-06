// --- Scope ---
const ciudad = "Talca"; // Variable Global

if (true) {
    const barrio = "Centro"; // Variable Local
    console.log(`Desde dentro del bloque: ${ciudad} - ${barrio}`);
}

console.log(`Desde fuera del bloque: ${ciudad}`);
// Si intento utilizar barrio fuera del IF, se considera una variable no definida.



// --- Scope en Funciones ---
const banco = "Banco Vue";

const abrirBoveda = () => {
    const dinero = 99999999;
    console.log(`Bienvenido al ${banco}`);
}

abrirBoveda();
// console.log(dinero);


// --- Variables de tipo Shadown ---
const nombre = "Juan";

const saludar = () => {
    const nombre = "Pedro";
    console.log(nombre); // Siempre imprime la variable priorizando la Local.
}

saludar();
console.log(nombre); // Fuera de la estructura, prioriza la Global.



// === Métodos de String ===
// 1. Transformar Mayúsculas/Minúsculas (toUpperCase/toLowerCase)

const email = "UsuarioNUEvO@Gmail.COM";

// 1.1 Convertir a minúsculas
const emailMin = email.toLowerCase();
console.log(emailMin);

// 1.2 Convertir a mayúsculas
const grito = "silencio por favor".toUpperCase();
console.log(grito);

// ---

// 2. Trim
const password = "     1234     ";

const passwordLimpia = password.trim();
console.log(password);
console.log(passwordLimpia);


const inputSucio = "     holA@mundo.CL  ";
const input = inputSucio.trim().toLowerCase();
console.log(input);


// 3. Buscar .includes()
// Nos retorna un true o false
const mensaje = "Gana dinero rápido haciendo clic aquí";
const esSpam = mensaje.includes("dinero rápido");

console.log(esSpam);

if (esSpam) {
    console.log("Mensaje bloqueado por sospecha de spam.");
} else {
    console.log("Mensaje recibido.");
}


// 4. replace() y replaceAll()
// Cambia partes del texto
const comentario = "Este producto es una basura, una basura total";

console.log(comentario.replace("basura", "*****"));
console.log(comentario.replaceAll("basura", "*****"));


// 5. slice()
// Nos sirve para cortar texto
const articulo = "JavaScript es un lenguaje de programación muy versátil...";

const resumen = articulo.slice(0, 20);

console.log(`${resumen}...`);

console.log(`El articulo tiene: ${articulo.length} caracteres`);
console.log(`El resumen tiene: ${resumen.length} caracteres`);
