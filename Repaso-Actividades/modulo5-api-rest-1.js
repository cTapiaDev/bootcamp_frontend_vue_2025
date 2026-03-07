const btnDirector = document.querySelector('#btn-director');
const btnYear = document.querySelector('#btn-year');
const btnDesc = document.querySelector('#btn-desc');
const btnId = document.querySelector('#btn-id');

let peliculasCache = null;

const obtenerPeliculas = async () => {
    if (!peliculasCache) {
        console.log('Consultando API por primera vez...');
        try {
            const response = await fetch('https://ghibliapi.vercel.app/films/');
            if (!response.ok) throw new Error('Error en la petición de red');

            peliculasCache = await response.json();
            console.log('Datos guardados de manera local');
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            return [];
        }
    } else {
        console.log('Usando la información almacenada en caché');
    }

    return peliculasCache;
};

const listarDirectores = async () => {
    const peliculas = await obtenerPeliculas();

    peliculas.forEach((pelicula) => {
        console.log(`Título: ${pelicula.title} | Director: ${pelicula.director}`);
    });
};

const listarAnios = async () => {
    const peliculas = await obtenerPeliculas();

    peliculas.forEach((pelicula) => {
        console.log(`Título: ${pelicula.title} | Año: ${pelicula.release_date}`);
    });
};

const listarDescripciones = async () => {
    const peliculas = await obtenerPeliculas();
    peliculas.forEach((pelicula) => {
        console.log(`Título: ${pelicula.title} | Descripción: ${pelicula.description}`);
    });
};

const listarIds = async () => {
    const peliculas = await obtenerPeliculas();
    peliculas.forEach((pelicula) => {
        console.log(`ID: ${pelicula.id} (${pelicula.title})`);
    });
};

btnDirector.addEventListener('click', listarDirectores);
btnYear.addEventListener('click', listarAnios);
btnDesc.addEventListener('click', listarDescripciones);
btnId.addEventListener('click', listarIds);
