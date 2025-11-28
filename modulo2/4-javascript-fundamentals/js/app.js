console.log('JavaScript Fundamentals');

// --- Variables ---
let cantidad = 2;
let stock = 10;
let estado = true; // Boolean: True o False. ¿El usuario inició sesión?
let dia = "Viernes";
let mes = 'Noviembre' //El uso de punto y coma no es obligatorio

// --- Constantes ---
const impuesto = 0.19;
const precioBase = 300;
const nombreProducto = "Monitor 4K UHD";



// === Cálculos ===
let subtotal = precioBase * cantidad; // 300 * 2
const costoGarantia = 20;

subtotal += costoGarantia; // subtotal = subtotal + costoGarantia;

console.log("Subtotal:", subtotal);

// === Concatenación ===
const resumenPantalla = `
    Resumen de Compra:
    ------------------
    Articulo: ${nombreProducto}
    Cantidad: ${cantidad} unidades
    Total sin impuestos: ${subtotal}
`;

console.log(resumenPantalla);


// === Reglas de Negocio (Validaciones) ===
// - No puedes comprar si no hay stock.
// - El precio cambia según dónde vivas.
// - El precio cambia si tienes cupones o códigos de descuento.


// === Validación de Venta ===

let saldoCliente = 1500;
const costoTotal = subtotal;

console.log(`Intentando procesar el pago de: ${costoTotal}...`);

// Lógica:
// 1. Debe existir stock.
// 2. El cliente debe tener saldo suficiente.

if (stock >= cantidad) { // 10 >= 2 ???? -> True o False / Verdadero o Falso / Sí o No
    // Bloque True -> Esto ocurre si la condición es verdadera
    if (saldoCliente >= costoTotal) {
        console.log("Pago Aprobado. Generando boleta...");
        saldoCliente -= costoTotal;
    } else {
        console.log("Saldo insuficiente...");
    }
} else {
    // Bloque False -> Esto ocurre si la condición es falsa
    console.log("Error: No hay stock suficiente para esta compra.");
}


// === Operador Ternario / IF Ternario ===
// let costoEnvio = 0;
let costoEnvio = costoTotal > 500 ? 0 : 15;

// if (costoTotal > 500) {
//     costoEnvio = 0;
// } else {
//     costoEnvio = 15;
// }

console.log(`Costo de envío aplicado: ${costoEnvio}`)


// === Switch ===
const codigoRegion = "LATAM"; // "NAM", "EU", "APAC"
let diasEntrega;

switch (codigoRegion) {
    case "LATAM":
        console.log("Almacén local detectado");
        diasEntrega = "1-3 días hábiles";
        break;
    case "NAM":
        console.log("Envío internacional estándar");
        diasEntrega = "5-10 días hábiles";
        break;
    case "EU":
        console.log("Envío transatlántico");
        diasEntrega = "7-15 días hábiles";
        break;
    default:
        console.log("Región no encontrada. Consultar a soporte");
        diasEntrega = "Por definir";
}

console.log(`Tiempo estimado: ${diasEntrega}`);