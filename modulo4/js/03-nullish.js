// --- Nullish Coalescing ---

// null
// undefined

const nombreUsuariDB = null;

const nombreMostrar = nombreUsuariDB ?? "Invitado";

console.log(`Bienvenido, ${nombreMostrar}`);