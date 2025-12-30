// --- Lógica Booleana ---
// TRUE - FALSE

// --- Tabla de la Verdad ---
// - Operador AND (&&) : Ambas cosas deben ser verdad.
// - Operador OR (||) : Al menos una debe ser verdad.
// - Operador NOT (!) : Lo contrario.


// --- AND ---
let tieneUsuario = true;
let tienePassword = true;
const puedeEntrar = tieneUsuario && tienePassword; // true && true : true
console.log(`¿Puede entrar? : ${puedeEntrar}`);

tienePassword = false;
const puedeEntrar2 = tieneUsuario && tienePassword; // true && false : false
console.log(`¿Puede entrar? : ${puedeEntrar2}`);

// --- OR ---
let esEstudiante = false;
let esJubilado = true;

const tieneDescuento = esEstudiante || esJubilado; // false || true : true
console.log(`¿Tiene descuento? : ${tieneDescuento}`);

esJubilado = false;
const tieneDescuento2 = esEstudiante || esJubilado; // false || false : false
console.log(`¿Tiene descuento? : ${tieneDescuento2}`);

// --- NOT ---
const estaEncendido = true;
const estaApagado = !estaEncendido; // false

console.log(estaApagado);