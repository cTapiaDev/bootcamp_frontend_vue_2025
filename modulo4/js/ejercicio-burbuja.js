// Capturamos los elementos del DOM
const btnCalcular = document.querySelector('#btn-calcular');
const divResultado = document.querySelector('#resultado');

// Helpers -- Pero son funciones de validación o de captura de datos.
const obtenerNumeros = () => {
    const inputs = Array.from(document.querySelectorAll('.form-input'));
    return inputs.map(input => parseFloat(input.value));
}

const mostrarResultado = (mensaje, esError = false) => {
    divResultado.innerHTML = mensaje;
    divResultado.classList.remove('hidden');
}

// Función principal
const procesarDatos = (event) => {
    event.preventDefault();
    const listaNumeros = obtenerNumeros();

    // Validación de los NaN (Not a Number)
    if (listaNumeros.some(num => isNaN(num))) {
        mostrarResultado("Por favor, completa todos los campos con números validos", true);
        return;
    }

    // Lógica de negocio

    const menor = Math.min(...listaNumeros);
    const mayor = Math.max(...listaNumeros);

    const mensaje = `
        <strong>Resultados:</strong><br>
        El número menor es: <strong>${menor}</strong><br>
        El número mayor es: <strong>${mayor}</strong>
    `;

    mostrarResultado(mensaje);
};

btnCalcular.addEventListener('click', procesarDatos)