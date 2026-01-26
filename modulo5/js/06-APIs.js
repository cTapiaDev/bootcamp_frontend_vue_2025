// JSON --> en el fondo es un String

const usuarioJS = {
    nombre: 'Jason',
    edad: 30,
    isAdmin: false
};

console.log(usuarioJS);
const jsonParaEnviar = JSON.stringify(usuarioJS); // Objeto -> JSON
console.log(jsonParaEnviar);

// Y al recibir la data:...
const respuestaServidor = '{"id": 99, "status": "ok"}';
const datosReales = JSON.parse(respuestaServidor); // JSON -> Objeto
console.log(datosReales);


// -- Verbos HTTP --
// GET: Leer datos
// POST: Crear datos
// PUT: Modificar datos
// DELETE: Eliminar datos

// -- Fetch API --> Petición GET
// fetch() --> nos retorna una promesa

const obtenerUsuarios = async () => {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        const usuarios = await respuesta.json();

        console.log(usuarios);
        console.log(`Se recibieron ${usuarios.length} usuarios`);
        console.log(usuarios[0].name);

    } catch(error) {
        console.error("Falló la petición a la api:", error.message);
    }
}

obtenerUsuarios();


// POST
const crearPost = async (titulo, mensaje) => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const nuevoPost = {
        title: titulo,
        body: mensaje,
        userId: 1
    };

    try {
        const respuesta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoPost)
        });

        const datosGuardados = await respuesta.json();
        console.log(datosGuardados);


    } catch (err) {
        console.error("Error al publicar:", err);
    }
}

crearPost("Aprendiendo Fetch", "JavaScript es lo mejor!! woooow!!");