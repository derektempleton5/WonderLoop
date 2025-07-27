// _Website/_Pages/_Home/home.js

// Surprise Me button (test mode: alert message) */
document.querySelector('.surprise-btn').addEventListener('click', () => {
  alert("Surprise! This will take you to a random post (coming soon)");
});

// Share Icon Clicks (test mode: copy fake URL) */
document.querySelectorAll('.share-icon').forEach(icon => {
  icon.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied to clipboard!");
  });
});