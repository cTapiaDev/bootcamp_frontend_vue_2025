// --- Nullish Coalescing ---

// null
// undefined

const nombreUsuarioDB = null;

const nombreMostrar = nombreUsuarioDB ?? "Invitado";

console.log(`Bienvenido, ${nombreMostrar}`);