const CONFIG = {
    BOARD_SIZE: 6,
    MAX_SHIPS: 5,
    DELAY_CPU: 1000 // ms
};

const TOTAL_CELLS = CONFIG.BOARD_SIZE * CONFIG.BOARD_SIZE;

const DOM = {
    playerCount: document.querySelector('#player-ships-count'),
    playerBoard: document.querySelector('#player-board'),
    cpuCount: document.querySelector('#cpu-ships-count'),
    cpuBoard: document.querySelector('#cpu-board'),
    statusText: document.querySelector('#status-text'),
    btnAction: document.querySelector('#btn-action'),
    btnRestart: document.querySelector('#btn-restart'),
    combatLog: document.querySelector('#combat-log')
};

// Gestión de Estados
let state = {
    phase: 'PLANNING', // PLANNING | PLAYING | FINISHED
    playerTurn: true,
    playerBoard: [],
    cpuBoard: [],
    cpuMemory: {
        targetStack: []
    }
}

// Inicializador
const initGameData = () => {
    state.phase = 'PLANNING',
    state.playerTurn = true,
    state.cpuMemory.targetStack = [];

    state.playerBoard = Array(TOTAL_CELLS).fill(null).map((_, i) => createCell(i));
    state.cpuBoard = Array(TOTAL_CELLS).fill(null).map((_, i) => createCell(i));

    updateCounters();
    log("Fase de planificación iniciada.", "sys");    
};

const createCell = (id) => ({
    id,
    hasShip: false,
    status: 'empty' // empty | hit | miss
});

// RENDERIZADO (Vista)
const render = () => {
    renderBoard(DOM.playerBoard, state.playerBoard, false);
    renderBoard(DOM.cpuBoard, state.cpuBoard, true);
    updateCounters();
};

const renderBoard = (container, boardData, isEnemy) => {
    container.innerHTML = '';

    boardData.forEach(cell => {
        const el = document.createElement('div');
        el.classList.add('cell');

        // Esto es para visualizar nuestros barcos
        if (cell.hasShip && !isEnemy) el.classList.add('ship');

        if (cell.status === 'hit') {
            el.classList.add('hit');
            el.innerText = '🔥';
        } else if (cell.status === 'miss') {
            el.classList.add('miss');
            el.innerText = "💧";
        }

        if (isEnemy && state.phase === 'PLAYING' && cell.status === 'empty') {
            el.classList.add('cursor-target');
        }

        el.addEventListener('click', () => handleCellClick(cell.id, isEnemy));

        container.appendChild(el);
    });
};

const updateCounters = () => {
    const playerShips = state.playerBoard.filter(c => c.hasShip && c.status === 'empty').length;
    const cpuShips = state.cpuBoard.filter(c => c.hasShip && c.status === 'empty').length;

    const playerAlive = state.playerBoard.filter(c => c.hasShip && c.status !== 'hit').length;
    const cpuAlive = state.cpuBoard.filter(c => c.hasShip && c.status !== 'hit').length;

    DOM.playerCount.innerText = playerAlive;
    DOM.cpuCount.innerText = cpuAlive;

    if (state.phase === 'PLANNING') {
        const placed = state.playerBoard.filter(c => c.hasShip).length;
        DOM.playerCount.innerText = `${placed}/${CONFIG.MAX_SHIPS}`;
    } else {
        DOM.cpuCount.innerText = cpuAlive;
    }
}

const log = (msg, type = 'sys') => {
    const entry = document.createElement('div');
    entry.classList.add('log-entry', `log-${type}`);
    entry.innerText = `> ${msg}`;
    DOM.combatLog.prepend(entry);
}


// LÓGICA DEL JUEGO (Controladores)
const handleCellClick = (index, isEnemyBoard) => {
    if (state.phase === 'FINISHED') return;

    // Agregamos barcos
    if (state.phase === 'PLANNING' && !isEnemyBoard) {
        toggleShip(index)
        render();
    }

    // Disparar
    if (state.phase === 'PLAYING' && isEnemyBoard && state.playerTurn) {
        playerShoot(index);
    }
}

const toggleShip = (index) => {
    const currentShips = state.playerBoard.filter(c => c.hasShip).length;
    const cell = state.playerBoard[index];

    if (!cell.hasShip && currentShips >= CONFIG.MAX_SHIPS) {
        log("¡Flota completa! Inicia la batalla...", "sys");
        return;
    }

    cell.hasShip = !cell.hasShip;
}

const playerShoot = (index) => {
    const target = state.cpuBoard[index];

    if (target.status !== 'empty') {
        log("Ya disparaste ahí, comandante.", "sys");
        return;
    }

    if (target.hasShip) {
        target.status = 'hit';
        log(`¡IMPACTO en cuadrante ${index}! Tira de nuevo.`, "player");
        checkWinCondition();
    } else {
        target.status = 'miss';
        log(`Disparo al agua en ${index}. Cambio de turno.`, "player");
        state.playerTurn = false;
        DOM.statusText.innerHTML = "Turno de la CPU...";
        setTimeout(cpuTurn, CONFIG.DELAY_CPU);
    }
    render();
};

// CPU
const cpuTurn = () => {
    if (state.phase !== 'PLAYING') return;

    let targetIndex;

    if (state.cpuMemory.targetStack.length > 0) {
        targetIndex = state.cpuMemory.targetStack.pop();

        if (state.playerBoard[targetIndex].status !== 'empty') {
            cpuTurn();
            return;
        }
    } else {
        targetIndex = getRandomEmptyCell();
    }

    const target = state.playerBoard[targetIndex];

    if (target.hasShip) {
        target.status = 'hit';
        log(`¡ALERTA! El enemigo alcanzó un barco en el sector ${targetIndex}.`, "cpu");

        addNeighborsToStack(targetIndex);
        checkWinCondition();
        render();

        if (state.phase === 'PLAYING') setTimeout(cpuTurn, CONFIG.DELAY_CPU);
    } else {
        target.status = 'miss';
        log(`El enemigo falló su disparo en ${targetIndex}`, "sys");
        state.playerTurn = true;
        DOM.statusText.innerText = "Tu turno, comandante.";
        render();
    }
}

const addNeighborsToStack = (index) => {
    const size = CONFIG.BOARD_SIZE;
    const neighbors = [];

    // izquierda
    if (index % size !== 0) neighbors.push(index - 1);
    // derecha
    if (index % size !== size - 1) neighbors.push(index + 1);
    // arriba
    if (index >= size) neighbors.push(index - size);
    // abajo
    if (index < TOTAL_CELLS - size) neighbors.push(index + size);

    if (index >= size && index % size !== 0) neighbors.push(index - (size - 1));

    const validNeighbors = neighbors.filter(i => state.playerBoard[i].status === 'empty');

    state.cpuMemory.targetStack.push(...validNeighbors);
};

const getRandomEmptyCell = () => {
    let found = false;
    let idx;
    while(!found) {
        idx = Math.floor(Math.random() * TOTAL_CELLS);
        if (state.playerBoard[idx].status === 'empty') found = true;
    }
    return idx;
}



// CONTROL DE FLUJOS
const checkWinCondition = () => {
    const playerLost = state.playerBoard.every(c => !c.hasShip || c.status === 'hit');
    const cpuLost = state.cpuBoard.every(c => !c.hasShip || c.status === 'hit');

    if (playerLost) endGame(false);
    else if (cpuLost) endGame(true); 
}

const endGame = (playerWon) => {
    state.phase = 'FINISHED';
    const msg = playerWon ? '¡VICTORIA!' : 'NOS DERROTARON...';
    DOM.statusText.innerText = msg;
    DOM.statusText.style.color = playerWon ? 'var(--accent)' : 'var(--danger)';

    log("-------------------", "sys");
    log(msg, playerWon ? 'player' : 'cpu');

    DOM.btnAction.style.display = 'none';
    DOM.btnRestart.style.display = 'block';
}

const placeCpuShips = () => {
    let placed = 0;
    while (placed < CONFIG.MAX_SHIPS) {
        const idx = Math.floor(Math.random() * TOTAL_CELLS);
        if (!state.cpuBoard[idx].hasShip) {
            state.cpuBoard[idx].hasShip = true;
            placed++;
        }
    }
    log("Radar enemigo detectado...", "sys");
}




// EVENTOS
DOM.btnAction.addEventListener('click', () => {
    const placed = state.playerBoard.filter(c => c.hasShip).length;
    if (placed !== CONFIG.MAX_SHIPS) {
        log(`Faltan barcos. Debes color ${CONFIG.MAX_SHIPS}.`, "sys");
        return;
    }

    state.phase = 'PLAYING';
    placeCpuShips();
    render();

    DOM.statusText.innerText = "¡BATALLA INICIADA! Tu turno.";
    DOM.btnAction.style.display = 'none';
    log("Sistemas de armas activados", "sys");
});

DOM.btnRestart.addEventListener('click', () => {
    initGameData();
    render();
    DOM.btnRestart.style.display = 'none';
    DOM.btnAction.style.display = 'block';
    DOM.statusText.innerText = 'Fase de Planificación';
    DOM.statusText.style.color = 'var(--text-main)';
    DOM.combatLog.innerHTML = '';
    log("Sistema reiniciado...", "sys");
})

initGameData();
render();