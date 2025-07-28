// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Search Toggle (Mobile)
  const searchIcon = document.getElementById('search-icon');
  const searchBar = document.getElementById('search-bar');

  if (searchIcon && searchBar) {
    searchIcon.addEventListener('click', () => {
      searchBar.classList.toggle('active');
      searchIcon.style.display = 'none'; // Hide search icon after click
    });
  }

  // Share Button Functionality
  const shareButtons = document.querySelectorAll('.share-btn');

  shareButtons.forEach(button => {
    button.addEventListener('click', async () => {
      const postCard = button.closest('.post-card');
      const title = postCard.querySelector('.post-title').innerText;
      const url = window.location.href;

      try {
        await navigator.clipboard.writeText(`${title} - ${url}`);
        alert('Post link copied to clipboard!');
      } catch (err) {
        alert('Failed to copy link.');
      }
    });
  });

  // Surprise Me Button Animation
  const surpriseBtn = document.getElementById('surprise-btn');

  if (surpriseBtn) {
    surpriseBtn.addEventListener('click', () => {
      surpriseBtn.classList.add('shake');
      setTimeout(() => {
        surpriseBtn.classList.remove('shake');
        // Optionally redirect to random post
        // window.location.href = '/Posts/post3/index.html';
      }, 500);
    });
  }
});
