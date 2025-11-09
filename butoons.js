document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      event.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // update URL without jumping
        history.pushState(null, '', href);
      }
    });
  });

  const navbar = document.querySelector('.navbar');
  function handleNav() {
    if (!navbar) return;
    if (window.scrollY > 50) navbar.classList.add('navbar--scrolled');
    else navbar.classList.remove('navbar--scrolled');
  }
  handleNav();
  window.addEventListener('scroll', handleNav);

  const animated = document.querySelectorAll('.animate-on-scroll');
  if (animated.length > 0 && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          obs.unobserve(entry.target); // animate once
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -8% 0px' });

    animated.forEach(el => io.observe(el));
  } else {
    // Fallback - add animate immediately
    animated.forEach(el => el.classList.add('animate'));
  }
});