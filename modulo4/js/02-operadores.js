let saldo = 1000;

// Le quiero agregar $500 a mi saldo
// saldo = saldo + 500; // No es la mejor forma de hacerlo
saldo += 500;
console.log(`Saldo tras cobro: $${saldo}`);

saldo -= 15;
console.log(`Saldo tras pagar Netflix: $${saldo}`);


// Comparación Estricta (Siempre responde con un booleano)
// = : Asignación (Guarda esto aquí).
// == : Comparación débil (¿Se parecen?).
// === : Comparación fuerte (¿Son idénticos en valor y tipo?).

const numero = 7;
const intentos = "7";

console.log(numero == intentos); // Idealmente NO USARLA

console.log(numero === intentos); // Siempre utilizar este.
