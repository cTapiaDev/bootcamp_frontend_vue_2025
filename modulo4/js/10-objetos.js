// --- Objetos Literales ---

const celular = {
    // Clave: Valor,
    marca: "Samsung",
    modelo: "Galaxy S24",
    ram: 12,
    es5g: true,
    colores: ["Negro", "Blanco", "Plateado"]
};

console.log(celular);

console.log(celular.marca); // Prácticamente esta es al forma que se utiliza.
console.log(celular["marca"]);

const miClave = "ram";
console.log(celular[miClave]);


// --- ¿Podemos modificar un objeto?
const usuario = {
    nombre: 'Pedro',
    nivel: 1
};

usuario.nivel = 2;
usuario.email = "pedro@gmail.com";
console.log(usuario);

// --- Eliminar una propiedad del objeto ---
const cuenta = {
    usuario: "admin",
    password: "123"
}

delete cuenta.password;
console.log(cuenta);


// --- Objetos Anidados ---
const estudiante = {
    nombre: "Clara",
    direccion: {
        calle: "Av. Siempre Viva",
        numero: 123,
        ciudad: "Springfield"
    }
};

console.log(estudiante.direccion.ciudad);


// --- Objetos con vida ---
const reproductor = {
    cancion: "Enter Sandman",
    volumen: 100,

    reproducir: function() {
        console.log("Reproduciendo canción...");
    },

    pausar() { // Es muy probable encontrarse siempre esta forma
        console.log("Canción pausada");
    }
};

reproductor.reproducir();
reproductor.pausar();

// --- this ---
const persona = {
    nombre: 'Bruce Wayne',
    alias: 'Batman',

    saludar() {
        return `Hola, soy ${this.nombre}, también conocido como ${this.alias}`;
        // this siempre busca la propiedad que existe DENTRO de este objeto.
    }
}

console.log(persona.saludar());

// --- Transformar un objeto en un array
const producto = {
    nombre: 'Monitor',
    precio: 200,
    stock: 50
};

const claves = Object.keys(producto);
console.log(claves);

const valores = Object.values(producto);
console.log(valores);

// --- Creación local de un objeto ---
const nombre = "Luisa";
const edad = 25;

const nuevoUsuario = { nombre, edad }; // Esto es exactamente lo mismo que está abajo
// const nuevoUsuario = {
//     nombre: nombre,
//     edad: edad
// };

console.log(nuevoUsuario);

// --- Integrador ---
// Crear un objeto carrito que tenga:
// 1. Una lista de productos (Array de objetos con nombre y precio).
// 2. Un método agregarProductos(nombre, precio).
// 3. Un método calcularTotal() (podrían utilizar un forEach para la suma).

const carrito = {
    productos: [],

    agregarProductos(nombre, precio) {
        const nuevoProducto = { nombre, precio };
        this.productos.push(nuevoProducto);
        console.log(`${nombre} agregado al carrito`);
    },

    calcularTotal() {
        let total = 0;

        for (const prod of this.productos) {
            total += prod.precio;
        }

        return total;
    }    
};

carrito.agregarProductos("Zapatillas", 100);
carrito.agregarProductos("Calcetines", 10);

console.log(carrito);

const totalPagar = carrito.calcularTotal();
console.log(`Total a pagar: $${totalPagar}`);