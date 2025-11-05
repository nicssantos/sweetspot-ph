const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 50) { 
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


