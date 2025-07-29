// Show/hide search bar on mobile
document.addEventListener('DOMContentLoaded', () => {
  const searchToggle = document.getElementById('mobile-search-toggle');
  const searchBar = document.getElementById('search-bar');

  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', () => {
      searchBar.classList.toggle('hidden');
      searchToggle.style.display = 'none'; // Hide original search icon after click
    });
  }

  // Surprise Me button
  const surpriseBtn = document.getElementById('surprise-btn');
  if (surpriseBtn) {
    surpriseBtn.addEventListener('click', () => {
      const articles = [
        "../_Posts/article1.html",
        "../_Posts/article2.html",
        "../_Posts/article3.html"
      ];
      const random = Math.floor(Math.random() * articles.length);
      window.location.href = articles[random];
    });
  }
});

// Copy link function for share icon
function copyToClipboard(button) {
  const dummyLink = window.location.href;
  navigator.clipboard.writeText(dummyLink).then(() => {
    button.textContent = "✅";
    setTimeout(() => (button.textContent = "🔗"), 1500);
  });
}
