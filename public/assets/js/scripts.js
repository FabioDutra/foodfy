const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');


for (let card of cards) {
  card.addEventListener('click', function () {
    const imageId = card.getAttribute('id');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('img').src = `../public/assets/images/${imageId}`;
  });
}

modalOverlay
  .querySelector('.close-modal')
  .addEventListener('click', function () {
    modalOverlay.classList.remove('active');
  });
