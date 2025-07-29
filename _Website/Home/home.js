// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  /* Handle Mobile Search Toggle */
  const searchIcon = document.getElementById("search-icon");
  const searchBar = document.querySelector(".search-bar-container");

  if (searchIcon && searchBar) {
    searchIcon.addEventListener("click", () => {
      searchBar.classList.toggle("active");
      searchIcon.style.display = "none"; // Hide icon when search is active
    });
  }

  /* Surprise Me Button Redirect */
  const surpriseBtn = document.getElementById("surprise-btn");
  if (surpriseBtn) {
    surpriseBtn.addEventListener("click", () => {
      // Replace the following array with real post links if needed
      const surpriseLinks = [
        "/_Posts/post1.html",
        "/_Posts/post2.html",
        "/_Posts/post3.html"
      ];
      const randomIndex = Math.floor(Math.random() * surpriseLinks.length);
      window.location.href = surpriseLinks[randomIndex];
    });
  }

  /* See All Posts Button */
  const allPostsBtn = document.getElementById("see-all-posts");
  if (allPostsBtn) {
    allPostsBtn.addEventListener("click", () => {
      window.location.href = "/AllPosts/index.html";
    });
  }
});
