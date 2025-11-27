console.log("Hola Mundo desde consola");

// --- SECTION BOTÓN LIKE ---
const botonLike = document.querySelector('#btn-like');
console.log(botonLike);

// botonLike.innerHTML = "<strong>Botón manipulado desde JS</strong>";

botonLike.addEventListener('click', () => {
    console.log("Este es un console.log dentro del evento click")
    botonLike.innerText = "¡Te gusta!";
})




// --- SECTION INPUT NOMBRE ---
const inputNombre = document.querySelector('#input-nombre');
const spanUsuario = document.querySelector('#nombre-usuario');

// El evento 'input' se dispara cada vez que escribo
inputNombre.addEventListener('input', () => {
    spanUsuario.innerText = inputNombre.value;
});




// --- SECTION CONTADOR ---
const btnSumar = document.querySelector('#btn-sumar');
const btnRestar = document.querySelector('#btn-restar');
const textoContador = document.querySelector('#contador');

// El tipo de mi variable es let, porque estoy seguro que va a cambiar
let contador = 0;

btnSumar.addEventListener('click', () => {
    contador++; // Es lo mismo que poner -> contador = contador + 1;
    textoContador.innerText = contador;
});

btnRestar.addEventListener('click', () => {
    // contador--; // Es lo mismo que poner -> contador = contador - 1;
    // textoContador.innerText = contador;
    if (contador > 0) { // Condicional IF -> Evalúa que la condición sea verdadera.
        contador--;
        textoContador.innerText = contador;
    }
});




// --- SECTION MODO OSCURO ---
const btnTema = document.querySelector('#btn-tema');
const body = document.body;

console.log(body);

btnTema.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});