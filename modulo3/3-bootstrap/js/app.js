document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,
        once: true
    });
});


const navbar = document.querySelector('#mainNav');

const handleScroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
        navbar.classList.remove('bg-dark');
    } else {
        navbar.classList.remove('navbar-scrolled');
        navbar.classList.add('bg-dark');
    }
}

window.addEventListener('scroll', handleScroll);

const form = document.querySelector('#contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('¡Mensaje recibido!');
    form.reset();
});