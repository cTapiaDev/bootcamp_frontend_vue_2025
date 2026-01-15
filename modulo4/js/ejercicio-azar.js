const crearJuegoAdivinanza = () => {

    const CONFIG = {
        MAX_INTENTOS: 3,
        MIN: 1,
        MAX: 10
    };

    let estado = {
        numeroSecreto: 0,
        intentos: 0,
        historial: []
    };

    const ui = {
        input: document.querySelector('#input-numero'),
        btnAdivinar: document.querySelector('#btn-adivinar'),
        btnReiniciar: document.querySelector('#btn-reiniciar'),
        txtIntentos: document.querySelector('#intentos'),
        txtMensaje: document.querySelector('#feedback'),
        txtHistorial: document.querySelector('#historial-lista'),
    };

    // Generar el número al azar
    const generarNumero = () => Math.floor(Math.random() * CONFIG.MAX) + CONFIG.MIN;

    const actualizarUI = (mensaje, tipo, finJuego = false) => {

        ui.txtMensaje.textContent = mensaje;
        ui.txtMensaje.className = `mensaje texto-${tipo}`;
        ui.txtIntentos.textContent = CONFIG.MAX_INTENTOS - estado.intentos;

        if (estado.historial.length > 0) {
            ui.txtHistorial.textContent = `Números probados: ${estado.historial.join(', ')}`;
        }

        if (finJuego) {
            ui.input.disabled = true;
            ui.btnAdivinar.classList.add('oculto');
            ui.btnReiniciar.classList.remove('oculto');
        } else {
            ui.input.disabled = false;
            ui.btnAdivinar.classList.remove('oculto');
            ui.btnReiniciar.classList.add('oculto');
            ui.input.focus();
        }
    }

    const procesarIntento = () => {
        const valor = parseInt(ui.input.value);

        // Validaciones
        if (isNaN(valor)) return actualizarUI("Ingresa un número válido", "error");
        if (valor < CONFIG.MIN || valor > CONFIG.MAX) return actualizarUI(`Solo ingresar números entre ${CONFIG.MIN} y ${CONFIG.MAX}`, 'error');
        if (estado.historial.includes(valor)) return actualizarUI('¡Ya probaste ese número!', error);

        estado.intentos++;
        estado.historial.push(valor);

        if (valor === estado.numeroSecreto) {
            actualizarUI('¡Ganaste! Adivinaste el número', 'exito', true);
        } else if (estado.intentos >= CONFIG.MAX_INTENTOS) {
            actualizarUI(`GAME OVER. Era el ${estado.numeroSecreto}.`, 'error', true);
        } else {
            actualizarUI('Intenta de nuevo', 'neutro');
            ui.input.value = '';
        }
    };

    const iniciar = () => {
        estado.numeroSecreto = generarNumero();
        estado.intentos = 0;
        estado.historial = [];

        ui.input.value = '';
        actualizarUI('¡Juego Nuevo! Adivina el número', 'neutro', false);
        console.log('Secreto:', estado.numeroSecreto);
    }

    ui.btnAdivinar.addEventListener('click', procesarIntento);
    ui.btnReiniciar.addEventListener('click', iniciar);

    ui.input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            procesarIntento();
        }
    });

    return { iniciar };

};

const juego = crearJuegoAdivinanza();
juego.iniciar();