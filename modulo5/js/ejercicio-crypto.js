const container = document.querySelector('#crypto-container');
const btnRefresh = document.querySelector('#btn-refresh');

const getCryptos = async () => {

    try {

        const respuesta = await fetch('https://api.coinlore.net/api/ticker/');

        if (!respuesta.ok) {
            throw new Error('No se pudo conectar con el servidor');
        }

        const data = await respuesta.json();
        // const monedas = data.data.slice(0, 10);

        renderCards(data.data);
        
    } catch (error) {
        console.error("Fallo:", error);
    }
}

const renderCards = (listaMonedas) => {
    container.innerHTML = '';

    listaMonedas.forEach(moneda => {
        const precio = parseFloat(moneda.price_usd).toFixed(2);
        const variacion = parseFloat(moneda.percent_change_24h).toFixed(2);

        const esPositivo = variacion >= 0;
        const claseColor = esPositivo ? 'up' : 'down';
        const flecha = esPositivo ? '▲' : '▼';

        const htmlTarjeta = `
            <div class="card">
                <div class="name">
                    ${moneda.name} <span class="symbol">${moneda.symbol}</span>
                </div>
                <div class="price">${precio}</div>
                <div class="${claseColor}">
                    ${flecha} ${variacion}%
                </div>
            </div>
        `

        container.innerHTML += htmlTarjeta;
    });
}

btnRefresh.addEventListener('click', getCryptos);

getCryptos();