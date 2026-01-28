// --- Uso de Fragments --
const lista = document.querySelector('#lista-productos');
const btn = document.querySelector('#btn-cargar');

const productos = Array.from({ length: 10000 }, (_, i) => `Producto ${i + 1}`);

btn.addEventListener('click', () => {
    console.time('Renderizado');

    const fragmento = document.createDocumentFragment();

    productos.forEach(prod => {
        const li = document.createElement('li');
        li.textContent = prod;

        fragmento.appendChild(li);
    });

    lista.appendChild(fragmento);

    console.timeEnd('Renderizado');
});




// --- Delegación de Eventos ---
const listaTareas = document.querySelector('#lista-tareas');

listaTareas.addEventListener('click', (e) => {
    const boton = e.target.closest('.btn-delete');

    if (boton) {
        const id = boton.dataset.id;
        const texto = boton.parentElement.firstChild.textContent.trim();

        // if (confirm(`¿Borrar tarea: ${texto}?`)) {
        //     boton.closest('li').remove();
        //     console.log(`Tarea ${id} eliminada`);
        // }

        boton.closest('li').remove();
        console.log(`Tarea ${id} eliminada`);
    }
});




// --- UI en base a un cambio de estado ---
let estado = {
    contador: 0,
    usuario: 'Estudiante'
};

const render = () => {
    const app = document.querySelector('#app');

    app.innerHTML = `
        <div style="text-align: center; font-family: sans-serif;">
            <h1>Hola, ${estado.usuario}</h1>
            <h2>Cuenta: ${estado.contador}</h2>
            <button onclick="subir()">+ Aumentar</button>
            <button onclick="bajar()">- Disminuir</button>
            <button onclick="reset()">Reset</button>
        </div>
    `;
};

window.subir = () => {
    estado.contador++;
    render();
};

window.bajar = () => {
    estado.contador--;
    render();
}

window.reset = () => {
    estado.contador = 0;
    render();
}

render();




// --- Persistencia de Datos (localStorage) ---
const btnTheme = document.querySelector('#btn-theme');
const body = document.body;

const temaGuardado = localStorage.getItem('tema');

if (temaGuardado === 'oscuro') {
    body.style.backgroundColor = '#333';
    body.style.color = 'white';
}

btnTheme.addEventListener('click', () => {

    if (body.style.backgroundColor === "rgb(51, 51, 51)") {
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        localStorage.setItem('tema', 'claro');
    } else {
        body.style.backgroundColor = '#333';
        body.style.color = 'white';
        localStorage.setItem('tema', 'oscuro');
    }
});





// --- Ejercicio Agenda ---
const formAgenda = document.querySelector('#agenda-form');
const listaContactos = document.querySelector('#lista-contactos');
const nombreContacto = document.querySelector('#nombre');
const telefonoContacto = document.querySelector('#telefono');

let contactos = JSON.parse(localStorage.getItem('mis_contactos')) || [];

const renderContactos = () => {
    listaContactos.innerHTML = '';

    contactos.forEach((contacto, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${contacto.nombre}</strong>: ${contacto.telefono}
            <button class="btn-borrar" data-index="${index}">🗑️</button>
        `;
        listaContactos.appendChild(li);
    });
};

const sincronizarStorage = () => {
    localStorage.setItem('mis_contactos', JSON.stringify(contactos));
    renderContactos();
};

formAgenda.addEventListener('submit', (e) => {
    e.preventDefault();

    const nuevoContacto = {
        nombre: nombreContacto.value,
        telefono: telefonoContacto.value
    };

    contactos.push(nuevoContacto);
    sincronizarStorage();
    formAgenda.reset();
});

listaContactos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-borrar')) {
        const index = e.target.dataset.index;

        contactos.splice(index, 1);

        sincronizarStorage();
    }
});

renderContactos();



