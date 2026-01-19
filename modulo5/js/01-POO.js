// PROGRAMACIÓN ORIENTADA A OBJETOS (POO)

const usuario1 = {
    nombre: 'Duncan',
    email: 'duncan@got.com',
    login: () => console.log("Usuario logueado")
};

// Un objeto literal no es muy útil en solitario para la POO.
// La solución a esto son las clases (class)

// --- CLASS ---
// class: es el molde de los objetos.
// constructor(): El método inicial de una clase que se ejecuta de manera automática.
// this: Hace referencia al contexto.

class User {
    role = "member";
    active = true;

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        return `Bienvenido al sistema, ${this.name} (${this.email})`;
    }
}

const usuario2 = new User("Egg", "egg@got.com");

console.log(usuario2.login());


// Mejorando el Scope -> #
class Wallet {
    #balance;
    #pin;

    constructor(balance, pin) {
        this.#balance = balance;
        this.#pin = pin;
    }

    // Getter
    getBalance() {
        return `Saldo actual: ${this.#balance}`;
    }
}

const myWallet = new Wallet(1000, 1234);

console.log(myWallet.getBalance());


// Getters & Setters
class Person {
    #name;
    #age;

    constructor(name) {
        this.#name = name;
        this.#age = 0; // Valor inicial seguro
    }

    // Getter (Sirven para leer la información)
    get age() {
        return `${this.#name} tiene ${this.#age} años.`;
    }

    // Setter (Sirve para modificar la información)
    set age(newAge) {
        if (typeof newAge !== 'number') {
            console.error("Error: la edad debe ser un número.");
            return;
        }
        if (newAge < 0 || newAge > 120) {
            console.error("Error: edad imposible.");
            return;
        }

        this.#age = newAge;
    }
}

const persona1 = new Person("Erik");
persona1.age = "Veinte";
persona1.age = -5;
persona1.age = 25;

console.log(persona1.age);


// --- EXTENDS & super()

// Clase Padre
class Usuario {
    #username;
    #email;

    constructor(username, email) {
        this.#username = username;
        this.#email = email;
    }

    login() {
        return `${this.#username} ha iniciado sesión.`;
    }
}

// Clase Hija
class Admin extends Usuario {
    #permissionLevel;

    constructor(username, email, permissionLevel) {
        super(username, email);
        this.#permissionLevel = permissionLevel;
    }

    deleteAccount() {
        return "Borrando cuenta...";
    }
}

const admin = new Admin("Superadmin", "admin@gmail.com", "GOD_MODE");
console.log(admin.login());
console.log(admin.deleteAccount());

const usuario = new Usuario("Usuario3", "usuario3@gmail.com");
console.log(usuario.login());

