// --- SET (Conjuntos) ---
const inventario = new Set(["Espada", "Escudo", "Espada", "Poción"]);
console.log(inventario);

// Por si solo, limpia los datos. No permite los repetidos.

inventario.add("Mapa"); // Agregar
inventario.delete("Escudo"); // Eliminar
const tienePocion = inventario.has("Poción"); // Retorna un true o false.
console.log(tienePocion);
console.log(inventario.size);


// --- Conversión de Array <-> Set
const emailsSucios = ["a@a.com", "b@b.com", "c@c.com", "a@a.com"];
console.log(emailsSucios);

const emailsUnicos = [...new Set(emailsSucios)];
console.log(emailsUnicos);


// Caso: Intersección de Arrays
const amigosFacebook = ["Juanito", "Pedrito", "Marquitos"];
const amigosInstagram = ["Pedrito", "Anita", "Juanito"];

const encontrarComunes = (lista1, lista2) => {
    const set1 = new Set(lista1);
    return lista2.filter(amigo => set1.has(amigo));
}

const interseccion = encontrarComunes(amigosFacebook, amigosInstagram);
console.log(interseccion);


// --- MAP ---
const diccionario = new Map();

diccionario.set('nombre', 'JS');
diccionario.set(1, 'Nivel uno');
diccionario.set(true, 'Es verdad');

console.log(diccionario.get(1));
console.log(diccionario.get("1"));
// En MAP importa el tipo de dato que tiene su clave.


const texto = "hola mundo hola javascript mundo mundo";

const contarFrecuencia = (str) => {
    const palabras = str.split(" ");
    const mapaFrecuencia = new Map();

    for (const palabra of palabras) {
        const cuentaActual = mapaFrecuencia.get(palabra) ?? 0;
        mapaFrecuencia.set(palabra, cuentaActual + 1);
    }

    return mapaFrecuencia;
};

const resultado = contarFrecuencia(texto);
console.log(resultado);

// Forma clave de iterar un mapa
for (const [palabra, cantidad] of resultado) {
    console.log(`La palabra "${palabra}" aparece ${cantidad} de veces.`);
}


// --- Funciones o Algoritmos Lazy (function*) ---
function* generadorId() {
    let id = 1;
    while(true) {
        yield id; // Esto permite pausar y entregar el valor.
        id++;
    }
}

const gen = generadorId();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// --- Función de Fibonacci ---
function* fibonacciGenerator() {
    let a = 0, b = 1;

    yield a;
    yield b;

    while(true) {
        const next = a + b;
        yield next;

        a = b;
        b = next;
    }
}

const fibo = fibonacciGenerator();

for (let i = 0; i < 5000; i++) {
    console.log(fibo.next().value);
}


// --- Ejercicio ---
// Tenemos un array gigante de accesos al servidor (simulado)
// 1. Detectar cuántas IPs únicas visitaron el sitio (Set).
// 2. Contar cuántas visitas tuvo cada URL (Map).
// 3. Identificar la URL más visitada.

// Datos simulados
const logsServidor = [
    { ip: "192.168.1.1", url: "/home", timestamp: "10:00" },
    { ip: "192.168.1.2", url: "/contacto", timestamp: "10:01" },
    { ip: "192.168.1.1", url: "/home", timestamp: "10:02" },
    { ip: "192.168.1.3", url: "/home", timestamp: "10:03" },
    { ip: "192.168.1.2", url: "/productos", timestamp: "10:04" },
];