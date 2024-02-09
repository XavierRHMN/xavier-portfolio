/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')


/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Clicking on the nav__link removes the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

emailjs.init("PfCHeiMzzt0BOJ5yA"); // Correctly initializes EmailJS with your user ID.

const sendEmail = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior.

    // Calls emailjs.sendForm with the service ID, template ID, and the form element.
    emailjs.sendForm('service_rtzx68c', 'template_c1y7x2r', contactForm, 'PfCHeiMzzt0BOJ5yA')
        .then(() => {
            // This callback function is executed when the email has been sent successfully.
            contactMessage.textContent = "Your message has been sent successfully 🍪";

            setTimeout(() => {
                contactMessage.textContent = "";
            }, 5000);

            //Clear input fields
            contactForm.reset();

        }, () => {
            // This callback function is executed when there was an error sending the email.
            contactMessage.textContent = "An error occurred, please try again later ❌";
        });
};

contactForm.addEventListener('submit', sendEmail); // Adds an event listener for the form submission.


/*=============== THEME CLICK ===============*/
// Get the theme button
const themeButton = document.getElementById('theme-button');

// Add click event listener
themeButton.addEventListener('click', function() {
    // Toggle the 'light-theme' class on the body
    document.body.classList.toggle('light-theme');
});

/*=============== THEME TOGGLE ===============*/
// document.getElementById('theme-button').addEventListener('click', function() {
//     var themeOptions = document.querySelector('.theme-options');
//     var isExpanded = this.getAttribute('aria-expanded') === 'true';
//     this.setAttribute('aria-expanded', !isExpanded);
//     themeOptions.hidden = isExpanded;
// });
//
// document.querySelectorAll('.theme-option').forEach(function(button) {
//     button.addEventListener('click', function() {
//         var selectedTheme = this.getAttribute('data-theme');
//         // Apply the selected theme
//         // This is where you would update the page's styles or classes based on the selected theme
//         console.log("Theme selected:", selectedTheme); // Example action
//     });
// });

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // This option is disabled to keep the animation visible after scrolling
})

sr.reveal('.home__data, .home__social, .contact__container, .footer__content')
sr.reveal('.home__img', {origin: 'bottom'})

sr.reveal('.about__img, .skills__data', {origin: 'left'})
sr.reveal('.about__data, .skills__content', {origin: 'right'})

sr.reveal('.services__header', {
    duration: 2000, // Duration of the animation (in milliseconds)
    distance: '0px', // Element does not move, only fades in
    opacity: 0, // Start fully transparent
    interval: 100 // Time between each reveal when revealing multiple elements
});

sr.reveal('.services__card', {interval: 100})

sr.reveal('.projects__header', {
    duration: 2000, // Duration of the animation (in milliseconds)
    delay: 1200,
    distance: '0px', // Element does not move, only fades in
    opacity: 0, // Start fully transparent
    interval: 100 // Time between each reveal when revealing multiple elements
});

sr.reveal('.projects__card', {interval: 100})

sr.reveal('.contact__header', {
    duration: 2000, // Duration of the animation (in milliseconds)
    delay: 900,
    distance: '0px', // Element does not move, only fades in
    opacity: 0, // Start fully transparent
    interval: 100 // Time between each reveal when revealing multiple elements
});

