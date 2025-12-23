document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('#menu-toggle');
    const mainNav = document.querySelector('#main-nav');

    const toggleMenu = () => {
        mainNav.classList.toggle('active');
    }

    menuToggle.addEventListener('click', toggleMenu);
});