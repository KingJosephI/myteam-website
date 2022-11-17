const toggleComments = document.querySelectorAll('.toggle-comment');
const comment = document.querySelector('.directors__comment');

toggleComments.forEach((toggleCommentButton) => {
  toggleCommentButton.addEventListener('click', () => {
    toggleCommentButton.classList.toggle('close-button');
  });
});

// Responsive menu

// const heroMenu = document.querySelector('.header__menu');
// const toggleMenu = document.querySelector('.header__toggle-menu');

// toggleMenu.addEventListener('click', () => {
//   const visibility = heroMenu.getAttribute('data-visible');
//   if (visibility === 'false') {
//     heroMenu.setAttribute('data-visible', 'true');
//     toggleMenu.setAttribute('aria-expanded', 'true');
//   } else {
//     heroMenu.setAttribute('data-visible', 'false');
//     toggleMenu.setAttribute('aria-expanded', 'false');
//   }
// });

const hamburger = document.querySelector('.header__toggle-menu');
const navBar = document.querySelector('.header__navigation');
hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
  hamburger.classList.toggle('close');
});
