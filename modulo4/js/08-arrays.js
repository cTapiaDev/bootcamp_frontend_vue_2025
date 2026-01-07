// --- Arrays (Arreglos) ---

// Array = Es el edificio completo.
// Elemento = Representa a cada departamento del edificio.
// Indice = El número que tiene asignado cada piso. (Comenzamos desde 0)

// Una lista o array de tipo String
const listaDeCompras = ["Pan", "Queso", "Huevos"];

// Array de números
const notas = [10, 5, 8, 4];

// Lista mixta
const mix = ["Hola", 100, true] // Su uso no es recomendado.

console.log(listaDeCompras);


// --- Conteo de index ---
const diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

console.log(diasSemana[0]);
console.log(diasSemana[2]);

console.log(diasSemana[10]); // Retorna un undefined, básicamente diciendo "no tenemos dato aquí"

console.log(diasSemana.length);

const listaVacia = [];
console.log(listaVacia.length);


// --- ¿Cuál es el último elemento? ---
const frutas = ["Manzana", "Pera", "Uva", "Sandía", "Melón"];

const ultimoIndice = frutas.length - 1;
console.log(frutas[ultimoIndice]);



// --- Modificación de un Array ---
const invitados = ["Mario", "Luigi", "Browser"];

invitados[2] = "Bowser";

console.log(invitados);


// --- La paradoja de const y mutabilidad ---
const miMochila = ["Notebook", "Agua"];

miMochila[1] = "Jugo"
console.log(miMochila);

// miMochila = ["Libros"]; // No podemos cambiar la estructura que envuelve al array

// --- .push() ---
const inventario = ["Espada", "Escudo"];

inventario.push("Poción");
console.log(inventario);

inventario.push("Mapa", "Antorcha");
console.log(inventario);

// --- .pop() ---
// Elimina el último elemento del array.
inventario.pop();
console.log(inventario);


// --- Ejercicio ---
// Vamos a simular el botón de "atrás" del navegador, utilizando un array como historial.
// 1. Crear un array historial con la página de "inicio".
// 2. El usuario navega a "Google" (push)
// 3. El usuario navega a "Youtube" (push)
// 4. El usuario presiona "Atrás". Esto saca la última página visitada. Debe mostrar en que pag. quedó.

const inicio = ["Home"];

console.log("Navegando a Google...");
inicio.push("Google");
console.log(`Usted esta visitando ${inicio[inicio.length -1]}`);

console.log("Navegando a Youtube...");
inicio.push("Youtube");
console.log(`Usted esta visitando ${inicio[inicio.length -1]}`);

console.log(`Historial actual: ${inicio}`);

console.log("Usuario presiona 'Atrás' <--");
inicio.pop();
console.log(`Usted esta visitando ${inicio[inicio.length -1]}`)



// --- .unshift() ---
// Colarse al principio
const fila = ["Ana", "Roberto"];
fila.unshift("Juan");
console.log(fila);

// --- .shift() ---
// Eliminar el primer elemento (indice 0)
fila.shift();
console.log(fila);

const turno = ["A1", "A2", "A3"];
turno.push("A4");
console.log(turno);

const atendido = turno.shift();
console.log(`Atiendiendo a ticket: ${atendido}`);
console.log(`Quedan en espera: ${turno}`);


// --- .includes() ---
const frutasDisponibles = ["Manzana", "Kiwi", "Naranja"];
const clientePide = "Mandarina";

const tenemosFruta = frutasDisponibles.includes(clientePide);

if (tenemosFruta) {
    console.log("Si, tenemos");
} else {
    console.log("Lo siento, no nos queda");
}


// --- .indexOf() --- 
// ¿Dónde está? - Nos devuelve el índice del elemento.
// * Si no lo encuentra, nos devuelve un -1
const colores = ["Rojo", "Verde", "Azul", "Amarillo"];
const posicionVerde = colores.indexOf("Verde");
console.log(posicionVerde);

const posicionNegro = colores.indexOf("Negro");
console.log(posicionNegro);


// --- Combinando lógica
const invitados2 = ["Mario", "Luigi", "Peach", "Bowser"];
const nuevoInvitado = "Bowser";

if (invitados2.indexOf(nuevoInvitado) === -1) {
    invitados2.push(nuevoInvitado);
    console.log("Invitado agregado con éxito.");
} else {
    console.log(`${nuevoInvitado} ya está en la lista.`);
}


// --- .slice() ---
// Nos sirve para cortar un array, pero el original queda intacto
// .slice(inicio, fin_no_incluido);
const corredores = ["Henrique", "Marcos", "Juan", "Sofia", "Magda"];

// Si yo quiero mostrar los primeros 3 corredores (0, 1 y 2)
// Tenemos que cortar desde 0 hasta 3 (el 3 no se incluye)
const top3 = corredores.slice(0, 3);

console.log(`Top 3 de corredores: ${top3}`);
console.log(top3);
console.log(corredores);


// --- .splice() ---
// Nos sirve para reemplazar y eliminar elementos, modificando el original
// .splice(donde_empiezo, cuantos_borro, ...lo_que_agrego);
const meses = ["Enero", "Febrero", "Marzo", "Abril"];

// --- Eliminar un elemento con splice
meses.splice(1, 1);
console.log(meses);

// --- Reemplazar un elemento con splice
meses.splice(1, 1, "Noviembre");
console.log(meses);


// --- Transformar de String a Array - .split()
const data = "Samsung,iPhone,Xiaomi,Motorola";
console.log(data);

const listaMoviles = data.split(",");

console.log(listaMoviles);
console.log(listaMoviles[0]);

// --- Transformar de Array a String - .join()
const nuevaData = listaMoviles.join(";");
console.log(nuevaData);


// --- Integrador --- "Aprender programación es divertido"
const generarHashtags = (frase) => {
    // 1. Convertir a lista de palabras
    const listaPalabras = frase.toLowerCase().split(" ");

    // 2. Buscamos si existen palabras prohibidas.
    const indiceMalo = listaPalabras.indexOf("es");

    // 3. Si existen, las borramos
    if (indiceMalo !== -1) {
        listaPalabras.splice(indiceMalo, 1);
    }

    const resultado = "#" + listaPalabras.join(" #");

    return resultado;
};

const post = "Aprender programación es divertido";
console.log(generarHashtags(post));