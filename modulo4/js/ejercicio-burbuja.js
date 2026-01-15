// Capturamos los elementos del DOM
const btnCalcular = document.querySelector('#btn-calcular');
const divResultado = document.querySelector('#resultado');

const btnAgregar = document.querySelector('#btn-agregar');
const contenedorInputs = document.querySelector('#form-group');
const selectorOrden = document.querySelector('#selector-orden');

// Helpers -- Pero son funciones de validación o de captura de datos.
const obtenerNumeros = () => {
    const inputs = Array.from(document.querySelectorAll('.form-input'));
    return inputs.map(input => parseFloat(input.value));
}

const agregarInput = () => {
    const nuevoInput = document.createElement('input');
    nuevoInput.type = 'number';
    nuevoInput.placeholder = 'Nuevo número';
    nuevoInput.className = 'form-input';

    contenedorInputs.appendChild(nuevoInput);
    nuevoInput.focus();
}

const mostrarResultado = (mensaje, esError = false) => {
    divResultado.innerHTML = mensaje;
    divResultado.classList.remove('hidden');
    divResultado.style.borderColor = !esError ? '#ef4444' : '#2563eb';
    divResultado.style.backgroundColor = !esError ? '#fee2e2' : '#dbeafe';
}

// Función principal
const procesarDatos = (event) => {
    event.preventDefault();
    const listaNumeros = obtenerNumeros();
    const orden = selectorOrden.value;

    // Validación de los NaN (Not a Number)
    if (listaNumeros.some(num => isNaN(num))) {
        mostrarResultado("Por favor, completa todos los campos con números validos");
        return;
    }

    // Cantidad mínima de números
    if (listaNumeros.length <= 1) {
        mostrarResultado("Por favor, ingresa al menos dos números validos.");
        return;
    }

    // Lógica de negocio
    const sonIguales = listaNumeros.every(num => num === listaNumeros[0]);

    if (sonIguales) {
        mostrarResultado(`Los números son iguales (${listaNumeros[0]}).`);
        return;
    }

    const menor = Math.min(...listaNumeros);
    const mayor = Math.max(...listaNumeros);

    // Ordenamiento de Menor a Mayor / Mayor a Menor
    if (orden === 'asc') {
        listaNumeros.sort((a, b) => a - b); // Ordena de manera Ascendente
    } else {
        listaNumeros.sort((a, b) => b - a); // Ordena de manera Descendente
    }

    const mensaje = `
        <strong>Lista Ordenada (${orden === 'asc' ? 'Menor a Mayor' : 'Mayor a Menor'}):</strong>
        <p>${listaNumeros.join(' -> ')}</p>
        <br>
        <small>Menor: <strong>${menor}</strong> | Mayor: <strong>${mayor}</strong></small>
    `;

    mostrarResultado(mensaje, true);
};

btnCalcular.addEventListener('click', procesarDatos);
btnAgregar.addEventListener('click', agregarInput);