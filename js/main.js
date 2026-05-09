// Smooth Active Navbar
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {

  let current = '';

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }

  });

  navLinks.forEach(link => {

    link.classList.remove('active-link');

    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active-link');
    }

  });

});

// Smooth Scroll
navLinks.forEach(link => {

  link.addEventListener('click', e => {

    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });

  });

});

console.log('Main JS Loaded');