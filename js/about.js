const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.intro, .features, .feature-card, .description, .video-section, .contact-section');
  
  sections.forEach(section => {
    section.classList.add('fade-in-element');
    observer.observe(section);
  });
});