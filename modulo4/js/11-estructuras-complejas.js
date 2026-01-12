// --- Array de Objetos ---

const productos = [
    { id: 1, nombre: 'Mouse', precio: 20, tags: ['Oficina', 'Gamer'] },
    { id: 2, nombre: 'Teclado', precio: 40, tags: ['Oficina'] },
    { id: 3, nombre: 'Monitor', precio: 200, tags: ['Pantalla'] }
];

// console.log(productos[0].tags[1]);

for (const prod of productos) {
    console.log(`Producto: ${prod.nombre} ($${prod.precio})`);
}


// --- Destructuración (Destructuring) ---

const usuario = {
    username: "Goku",
    email: "goku@gmail.com",
    nivel: 50,
    rol: 'Saiyan'
};

// console.log(usuario.username);

const { username, nivel } = usuario; // <-- Destructuring

console.log(username);
console.log(nivel);


// --- Alias ---
const { username: apodo } = usuario;
console.log(apodo);

const { pais = "Chile" } = usuario;
console.log(pais);

// --- Destructuring Arrays ---
const coordenadas = [10, 50, 99];
const [x, y] = coordenadas;
console.log(`Mover a: ${x}, ${y}`);


// --- Spread (...) en Array (Copiar y Unir) ---
const frutas = ["Manzana", "Pera"];
const verduras = ["Lechuga", "Papa"];

const alimentos = [...frutas, ...verduras, "Carne"];
console.log(alimentos);

// --- Spread en Objetos ---
const perfilOriginal = {
    nombre: 'Ana',
    edad: 30,
    tema: 'Claro'
};

const perfilActualizado = {
    ...perfilOriginal, // La cualidad que tiene, que el objeto original queda intacto
    tema: 'Oscuro',
    activo: true
}

console.log(perfilOriginal.tema);
console.log(perfilActualizado.tema);

// --- Los ... también sirven para agrupar elementos ---
const dataBaseUser = {
    id: 99,
    user: 'admin',
    pass: '12345',
    token: 'abc-zxc'
};

const { pass, ...usuarioSeguro } = dataBaseUser;

console.log(usuarioSeguro);

// --- Ejercicio Integrador ---
const estadoInicial = {
    usuario: 'Invitado',
    carrito: [],
    config: {
        moneda: 'USD',
        idioma: 'EN'
    }
};

// 1. Función de Login
// Recibe el estado actual y devuelve uno nuevo con el usuario cambiado.
const loguearUsuario = (estado, nuevoUsuario) => {
    return {
        ...estado,
        usuario: nuevoUsuario
    };
};

const estado2 = loguearUsuario(estadoInicial, 'Administrador');
console.log(estado2);


// 2. Función para agregar al carrito.
const agregarItem = (estado, item) => {
    return {
        ...estado,
        carrito: [...estado.carrito, item]
    };
};

const estado3 = agregarItem(estado2, "Monitor 4K-Oled");
console.log(estado3);
const estado4 = agregarItem(estado3, "Teclado Redragon");
console.log(estado4);