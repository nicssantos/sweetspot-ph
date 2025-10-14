const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const searchContainer = document.getElementById("search-container");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  searchContainer.classList.toggle("show");
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 50) { // When scrolled down 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


