//ScrollReveal

ScrollReveal().reveal('.navbar', {
    duration: 2000,
    distance: '150%',
    origin: 'top',
});
ScrollReveal().reveal('.header-content-left', {
    delay: 750,
    duration: 2000,
    distance: '150%',
    origin: 'left'
})
ScrollReveal().reveal('.header-content-right', {
    duration: 2000,
    distance: '150%',
    origin: 'bottom'
})
ScrollReveal().reveal('#proyectos', {
    duration: 2000,
    delay: 750
})
ScrollReveal().reveal('.project-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '150%'
})
ScrollReveal().reveal('.project-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '150%'
})
ScrollReveal().reveal('#experiencias', {
    duration: 3000,
    delay: 750
})
ScrollReveal().reveal('.experience-right-content', {
    duration: 2000,
    origin: 'right',
    distance: '150%'
})
ScrollReveal().reveal('.experience-left-content', {
    duration: 2000,
    origin: 'left',
    distance: '150%'
})
ScrollReveal().reveal('.contacto-content-qr', {
    duration: 2000,
    origin: 'bottom',
    distance: '150%'
})
ScrollReveal().reveal('#contacto', {
    duration: 3000,
    delay: 750
})

//Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});