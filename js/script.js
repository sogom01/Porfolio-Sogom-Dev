let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('activate');
};

// Cerrar el menú al hacer clic en un enlace
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x');
        navBar.classList.remove('activate');
    };
});
