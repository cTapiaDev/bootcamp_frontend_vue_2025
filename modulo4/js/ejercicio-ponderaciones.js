const PORCENTAJES = {
    n1: 0.25,
    n2: 0.35,
    n3: 0.40
};

const dataAlumnos = [];

const form = document.querySelector('#studentForm');
const tableBody = document.querySelector('#gradesTable tbody');
const avgDisplay = document.querySelector('#courseAvg');


// Función para promedio
const calculateAvg = (n1, n2, n3) => {
    const avg = (n1 * PORCENTAJES.n1) + (n2 * PORCENTAJES.n2) + (n3 * PORCENTAJES.n3);
    return parseFloat(avg.toFixed(2));
};

const updateTable = () => {
    tableBody.innerHTML = '';
    let totalSum = 0;

    dataAlumnos.forEach((estudiante, i) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${estudiante.nombre || `Alumno ${i + 1}`}</td>
            <td>${estudiante.n1}</td>
            <td>${estudiante.n2}</td>
            <td>${estudiante.n3}</td>
            <td><strong>${estudiante.average}</strong></td>
        `
        tableBody.appendChild(row);

        totalSum += estudiante.average;
    });

    const courseAvg = dataAlumnos.length > 0 ? (totalSum / dataAlumnos.length) : 0;
    avgDisplay.textContent = courseAvg.toFixed(2);
};


// Manejar eventos
const handleAddStudent = (event) => {
    event.preventDefault();
    
    const nombreEstudiante = document.querySelector('#studentName');
    const nota1 = document.querySelector('#grade1');
    const nota2 = document.querySelector('#grade2');
    const nota3 = document.querySelector('#grade3');

    const n1 = parseFloat(nota1.value);
    const n2 = parseFloat(nota2.value);
    const n3 = parseFloat(nota3.value);

    const nuevoAlumno = {
        nombre: nombreEstudiante.value.trim(),
        n1,
        n2,
        n3,
        average: calculateAvg(n1, n2, n3)
    };

    dataAlumnos.push(nuevoAlumno);
    updateTable();

    form.reset(); // Nos sirve para limpiar los datos de formulario
    nombreEstudiante.focus(); // Es para que el input vuelva a estar disponible luego del reset.
};

form.addEventListener('submit', handleAddStudent);