const tiltElements = document.querySelectorAll('.tilt-card');

tiltElements.forEach(card => {

  card.addEventListener('mousemove', (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX =
      ((y / rect.height) - 0.5) * -12;

    const rotateY =
      ((x / rect.width) - 0.5) * 12;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.03)
    `;

  });

  card.addEventListener('mouseleave', () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;

  });

});

console.log('Tilt Effect Active');