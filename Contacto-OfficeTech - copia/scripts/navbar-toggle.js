const navbar_toggle = document.querySelector('.navbar__content-toggle');
const navbar = document.querySelector('.navbar__content-list');
const navbar_toggleIcon = document.querySelector('.navbar__content-toggle i')

navbar_toggle.addEventListener('click', () => {
    if(navbar.classList.contains('navbar__content-list')) {
        navbar.classList.replace('navbar__content-list', 'navbar__content-active');
        
        // cambiando el icono a la X
        navbar_toggleIcon.setAttribute('class', 'fa fa-times');
    }
    else {
        navbar.classList.replace('navbar__content-active', 'navbar__content-list');
        navbar_toggleIcon.setAttribute('class', 'fa fa-bars');
    }
});