// Helper o Clase utilitaria (static)
class StreamifyConfig {
    static getPlanDetails(type) {
        if (type === "PREMIUM") {
            return {
                price: 9.99,
                resolution: "4K",
                downloads: true
            }
        }
        return {
            price: 4.99,
            resolution: "720p",
            downloads: false
        }
    }
}


// Clase Padre
class User {
    #password;

    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.#password = password;
    }

    login(inputPassword) {
        if (inputPassword === this.#password) {
            return `Login exitoso. Bienvenido ${this.name}`;
        }
        return `Contraseña Incorrecta. ¡Vuelve a intentarlo!`;
    }

    set newPassword(inputPassword) {
        if (inputPassword.length < 6) {
            console.error("La contraseña debe tener un mínimo de 6 chars.");
            return;
        }
        this.#password = inputPassword;
        console.log("¡Contraseña actualizada!");
    }

    watchContent(content) {
        throw new Error("Este método lo vamos a implementar en las clases hijas");
    }
}

// Clases hijas
class BasicUser extends User {
    constructor(name, email, password) {
        super(name, email, password);
        this.adsWatched = 0;
    }

    watchContent(content) {
        this.adsWatched++;
        return `Viendo '${content}' (Anuncio ${this.adsWatched} reproduciendose...)`;
    }
}

class PremiumUser extends User {
    constructor(name, email, password) {
        super(name, email, password);
        this.subscriptionDate = new Date();
    }

    watchContent(content) {
        return `Viendo '${content}' en 4K sin anuncios`;
    }

    downloadContent(content) {
        return `Descargando '${content}' en almacenamiento local`;
    }
}

console.log("--- CONFIGURACIÓN ---");
console.log(StreamifyConfig.getPlanDetails("PREMIUM"));

console.log("\n--- BASIC USER ---");
const basic = new BasicUser("Pepe", "pepe@gmail.com", "123456");
console.log(basic.login("asdasdasd"));
console.log(basic.login("123456"));
console.log(basic.watchContent('Batman'));
console.log(basic.watchContent("Superman"));

console.log("\n--- PREMIUM USER ---");
const premium = new PremiumUser("Sarah", "sarah@gmail.com", "pass");
premium.newPassword = "123";
premium.newPassword = "nuevacontraseniasegura";

console.log(premium.watchContent("Avengers"));
console.log(premium.downloadContent("Avengers"));