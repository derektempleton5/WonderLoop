// Mobile Search Toggle
const searchToggle = document.getElementById("mobileSearchToggle");
const searchContainer = document.getElementById("mobileSearchContainer");
const searchInput = document.getElementById("mobileSearchInput");
const searchButton = document.getElementById("mobileSearchButton");

searchToggle.addEventListener("click", () => {
  searchContainer.style.display = "flex";
  searchToggle.style.display = "none"; // Hide the toggle icon
  searchInput.focus();
});

searchButton.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if (query) {
    window.location.href = `/AllPosts/index.html?search=${encodeURIComponent(query)}`;
  }
});

// Surprise Me Button
const surpriseButton = document.getElementById("surpriseBtn");
const tooltip = document.getElementById("surpriseTooltip");

surpriseButton.addEventListener("mouseenter", () => {
  tooltip.style.opacity = 1;
  tooltip.style.left = `${surpriseButton.offsetWidth + 10}px`;
});

surpriseButton.addEventListener("mouseleave", () => {
  tooltip.style.opacity = 0;
});

surpriseButton.addEventListener("click", () => {
  const posts = [
    "/_Posts/post1.html",
    "/_Posts/post2.html",
    "/_Posts/post3.html",
    "/_Posts/post4.html"
  ];
  const randomPost = posts[Math.floor(Math.random() * posts.length)];
  window.location.href = randomPost;
});

// Read More Buttons
document.querySelectorAll(".read-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const postLink = btn.getAttribute("data-link");
    if (postLink) {
      window.location.href = postLink;
    }
  });
});

// Share Button (copy link)
document.querySelectorAll(".share-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const postLink = btn.getAttribute("data-link");
    navigator.clipboard.writeText(postLink).then(() => {
      btn.textContent = "✅ Copied!";
      setTimeout(() => (btn.textContent = "🔗"), 1500);
    });
  });
});
