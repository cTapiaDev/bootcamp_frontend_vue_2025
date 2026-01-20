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