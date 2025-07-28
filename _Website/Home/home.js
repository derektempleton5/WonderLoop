/* Enable Mobile Search Toggle */
document.addEventListener("DOMContentLoaded", function () {
  const mobileSearchBtn = document.querySelector(".mobile-search-icon");
  const desktopSearch = document.querySelector(".desktop-search");

  if (mobileSearchBtn && desktopSearch) {
    mobileSearchBtn.addEventListener("click", () => {
      desktopSearch.style.display =
        desktopSearch.style.display === "flex" ? "none" : "flex";
    });
  }
});

/* Surprise Me Button */
const surpriseButton = document.querySelector(".surprise-button");

if (surpriseButton) {
  surpriseButton.addEventListener("click", () => {
    // Replace with your actual article paths
    const articles = [
      "/_Posts/_Articles/article1.html",
      "/_Posts/_Articles/article2.html",
      "/_Posts/_Articles/article3.html",
    ];
    const randomArticle = articles[Math.floor(Math.random() * articles.length)];
    window.location.href = randomArticle;
  });
}

/* Share Button Behavior (Simple Copy URL) */
document.querySelectorAll(".share-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("Link copied to clipboard!");
    });
  });
});

/* Dark/Light Mode Toggle */
const toggleSwitch = document.getElementById("theme-toggle");

if (toggleSwitch) {
  toggleSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
  });

  // Load saved theme
  window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
      toggleSwitch.checked = true;
    }
  });
}