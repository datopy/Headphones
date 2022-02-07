/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')  

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll('.nav-link');

function linkAction() {
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(e => e.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)



/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
    const scrollUp = document.getElementById('scrollup');
    if (this.scrollY >= 200) {
        scrollUp.classList.add('show-scrollup')
    } else {
        scrollUp.classList.remove('show-scrollup')
    }
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal('.home-header, .section-title', {delay:600})
sr.reveal('.home-footer', {delay:700})
sr.reveal('.home-img', {delay:900, origin: 'top'})

sr.reveal('.sponsor-img, .products-card, .footer-logo, .footer-content, .footer-copy', {origin: 'top', interval: 100})

sr.reveal('.specs-data, .discount-animate', {origin: 'left', interval: 100})
sr.reveal('.specs-img, .discount-img', {origin: 'right'})

sr.reveal('.case-img', {origin: 'top'})
sr.reveal('.case-data')
