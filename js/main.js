const toggleComments = document.querySelectorAll('.toggle-comment');
const comment = document.querySelector('.directors__comment');

toggleComments.forEach((toggleCommentButton) => {
  toggleCommentButton.addEventListener('click', () => {
    toggleCommentButton.classList.toggle('close-button');
    // overlay.classList.toggle('comment-display');
  });
});
