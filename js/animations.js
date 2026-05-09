const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {

  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(element => {

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      element.classList.add('active');
    }

  });

}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Floating Animation Delay
const floatingCards = document.querySelectorAll('.floating-card');

floatingCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.5}s`;
});

console.log('Animations Loaded');