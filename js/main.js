//ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    distance: '150%',
    origin: 'top',
});
sr.reveal('.header-content-left', {
    delay: 750,
    duration: 2000,
    distance: '150%',
    origin: 'left'
})
sr.reveal('.header-content-right', {
    duration: 2000,
    distance: '150%',
    origin: 'bottom'
})
sr.reveal('#proyectos', {
    duration: 2000,
    delay: 750
})
sr.reveal('.project-content-left', {
    duration: 2000,
    origin: 'left',
    distance: '150%'
})
sr.reveal('.project-content-right', {
    duration: 2000,
    origin: 'right',
    distance: '150%'
})
sr.reveal('#experiencias', {
    duration: 3000,
    delay: 750
})
sr.reveal('.experience-right-content', {
    duration: 2000,
    origin: 'right',
    distance: '150%'
})
sr.reveal('.experience-left-content', {
    duration: 2000,
    origin: 'left',
    distance: '150%'
})
sr.reveal('.contacto-content-qr', {
    duration: 2000,
    origin: 'bottom',
    distance: '150%'
})
sr.reveal('#contacto', {
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