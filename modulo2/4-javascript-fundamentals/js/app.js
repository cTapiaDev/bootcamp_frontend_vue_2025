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


// === Funciones ===
// function calcularPrecioFinal(precioNeto) {
// }

const calcularPrecioFinal = (precioNeto) => {
    const iva = precioNeto * impuesto;
    const total = precioNeto + iva;
    return total;
};

const precioMonitor = calcularPrecioFinal(300);
const precioTeclado = calcularPrecioFinal(50);

console.log(`Precios con IVA incluido: Monitor $${precioMonitor}, Teclado $${precioTeclado}`);

// --- Lógica de descuentos ---
const aplicarDescuento = (totalCompra, tipoCliente = "REGULAR") => {
    let totalConDescuento = totalCompra;

    if (tipoCliente === "VIP") {
        // 20% de descuento
        totalConDescuento = totalCompra * 0.8;
        console.log("Descuento VIP aplicado (20%)");
    } else if (tipoCliente === "NUEVO") {
        // se le van a regalar $10
        totalConDescuento = totalCompra - 10;
        console.log("Bono de bienvenida aplicado ($10)");
    } else {
        console.log("Sin descuentos aplicables");
    }

    return totalConDescuento;
}

let carritoTotal = 1000;
let tipoUsuario = "VIP";

let totalConImpuestos = calcularPrecioFinal(carritoTotal);
let totalPagar = aplicarDescuento(totalConImpuestos, tipoUsuario);

console.log(`
    Monto Neto: $${carritoTotal}
    Total con Impuestos: $${totalConImpuestos}
    --------------------------
    TOTAL A PAGAR: $${totalPagar}
`);
