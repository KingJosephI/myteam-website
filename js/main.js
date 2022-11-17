// Display comment on top of directors' cards in the about page

const toggleComments = document.querySelectorAll('.toggle-comment');
const comment = document.querySelector('.directors__comment');

toggleComments.forEach((toggleCommentButton) => {
  toggleCommentButton.addEventListener('click', () => {
    toggleCommentButton.classList.toggle('close-button');
  });
});

// Handle responsive navbar
const hamburger = document.querySelector('.header__toggle-menu');
const navBar = document.querySelector('.header__navigation');
hamburger.addEventListener('click', () => {
  navBar.classList.toggle('active');
  hamburger.classList.toggle('close');
});

//Active page
const menuItems = document.querySelectorAll('.header__link');
const activePage = window.location.pathname;

const navigationLinks = document
  .querySelectorAll('.header__link')
  .forEach((link) => {
    if (link.href.includes(`${activePage}`)) {
      link.classList.add('active-link');
    }

    if (activePage === '/') {
      link.classList.replace('active-link', '');
    }
  });
