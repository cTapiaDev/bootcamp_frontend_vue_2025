const input = document.querySelector('#usernameInput');
const btn = document.querySelector('#btnBuscar');
const divResultado = document.querySelector('#resultado');

const buscarGithub = async (username) => {

    divResultado.innerHTML = "Buscando en la base de datos de GitHub...";

    try {
        const respuesta = await fetch(`https://api.github.com/users/${username}`);

        if (respuesta.status === 404) {
            divResultado.innerHTML = `El usuario "${username}" no existe`;
            return;
        }

        const data = await respuesta.json();

        divResultado.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <img src="${data.avatar_url}" width="80" style="border-radius: 50%">
                <div>
                    <h2>${data.name || data.login}</h2>
                    <p>${data.bio || 'Sin biografía'}</p>
                    <strong>Repositorios: ${data.public_repos}</strong>
                </div>        
            </div>
        `;

    } catch (error) {
        divResultado.innerHTML = "Error de conexión. Intenta más tarde";
        console.error(error);
    }
};

btn.addEventListener('click', () => {
    const user = input.value;
    if (user) buscarGithub(user);
});