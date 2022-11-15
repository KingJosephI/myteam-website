const openCloseButton = document.querySelector('.open-close');
const overlay = document.querySelector('.overlay');

openCloseButton.addEventListener('click', () => {
  openCloseButton.classList.toggle('close-button');
  overlay.classList.toggle('comment-display');
});
