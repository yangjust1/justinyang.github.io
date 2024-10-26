// Smooth Scrolling for Navbar Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default jump
      const sectionId = link.getAttribute('href').substring(1);
      document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Intersection Observer for Scroll Animations
  document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll('.fade-in, .slide-in-left');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate'); // Add animation class
        }
      });
    }, { threshold: 0.5 }); // Trigger at 50% visibility
    
    fadeInElements.forEach(element => observer.observe(element));
  });
  