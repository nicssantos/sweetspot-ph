const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const searchContainer = document.getElementById("search-container");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  searchContainer.classList.toggle("show");
});
