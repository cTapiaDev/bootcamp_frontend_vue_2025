class Alumno {
    constructor(nombre, rut, edad, carrera, ingreso) {
        this.nombre = nombre;
        this.rut = rut;
        this.edad = edad;
        this.carrera = carrera;
        this.ingreso = ingreso;
    }

    monstrarAtributos = () => {
        console.log('=== Datos del Alumno ===');
        console.log(`Nombre       : ${this.nombre}`);
        console.log(`Rut          : ${this.rut}`);
        console.log(`Edad         : ${this.edad}`);
        console.log(`Carrera      : ${this.carrera}`);
        console.log(`Año Ingreso  : ${this.ingreso}\n\n`);
    };
}

const estudiante1 = new Alumno('Juanito', '19.234.567-k', 21, 'Informatica', 2026);
estudiante1.monstrarAtributos();

// -----

class BandaMusical {
    constructor(nombre, genero, numeroIntegrantes, discosPublicados) {
        this.nombre = nombre;
        this.genero = genero;
        this.numeroIntegrantes = numeroIntegrantes;
        this.discosPublicados = discosPublicados;
    }

    monstrarAtributos = () => {
        console.log('=== Datos de la Banda ===');
        console.log(`Nombre        : ${this.nombre}`);
        console.log(`Género        : ${this.genero}`);
        console.log(`Integrantes   : ${this.numeroIntegrantes}`);
        console.log(`Total Discos  : ${this.discosPublicados.length}\n\n`);
    };

    listarDiscos = () => {
        console.log(`--- Discos de ${this.nombre} ---`);
        this.discosPublicados.forEach((disco, index) => {
            console.log(`${index + 1}. ${disco}`);
        });
    };
}

const miBandaFavorita = new BandaMusical('Guns n Roses', 'HardRock', 5, [
    'Appetite for Destruction',
    'Use Your Illusion I',
    'Use Your Illusion II',
    'Chinese Democracy',
]);

miBandaFavorita.monstrarAtributos();
miBandaFavorita.listarDiscos();

// ----

class Perro {
    constructor(nombre, raza, color, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
        this.edad = edad;
    }

    monstrarAtributos = () => {
        console.log('=== Datos del Perro ===');
        console.log(`Nombre       : ${this.nombre}`);
        console.log(`Raza         : ${this.raza}`);
        console.log(`Color        : ${this.color}`);
        console.log(`Edad         : ${this.edad} años\n\n`);
    };

    ladrar = () => {
        console.log(`${this.nombre} está ladrando: ¡Guau, guau!`);
    };
}

const perroLipigas = new Perro('Spike', 'Quiltro', 'Amarillo', 14);
perroLipigas.monstrarAtributos();
perroLipigas.ladrar();
