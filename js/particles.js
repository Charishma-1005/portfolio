const body = document.body;

for (let i = 0; i < 25; i++) {

  const particle = document.createElement('span');

  particle.classList.add('particle');

  particle.style.left = Math.random() * window.innerWidth + 'px';

  particle.style.top = Math.random() * window.innerHeight + 'px';

  particle.style.animationDuration =
    5 + Math.random() * 10 + 's';

  particle.style.animationDelay =
    Math.random() * 5 + 's';

  body.appendChild(particle);

}

console.log('Particles Generated');