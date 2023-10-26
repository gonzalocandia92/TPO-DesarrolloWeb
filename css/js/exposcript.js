// Carrousel de tarjetas
const prevBoton = document.getElementById('prevBoton');
const nextBoton = document.getElementById('nextBoton');
const cardContainer = document.querySelector('.carousel');

prevBoton.addEventListener('click', () => {
  cardContainer.scrollBy(-300, 0); // Desplaza hacia la izquierda
});

nextBoton.addEventListener('click', () => {
  cardContainer.scrollBy(300, 0); // Desplaza hacia la derecha
});