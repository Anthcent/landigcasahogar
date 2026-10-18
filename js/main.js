document.addEventListener('DOMContentLoaded', () => {

  /* Mobile nav toggle */
  const navToggle = document.getElementById('navToggle');
  const body = document.body;
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    document.querySelectorAll('.main-nav a').forEach(link => {
      link.addEventListener('click', () => {
        body.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Category tabs active state */
  const tabs = document.querySelectorAll('.category-tabs .tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  /* Hero slider dots */
  const dots = document.querySelectorAll('.hero-dots button');
  let current = 0;
  function setActiveDot(index) {
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    current = index;
  }
  dots.forEach((dot, i) => dot.addEventListener('click', () => setActiveDot(i)));

  const prevArrow = document.querySelector('.hero-arrow[aria-label="Anterior"]');
  const nextArrow = document.querySelector('.hero-arrow[aria-label="Siguiente"]');
  if (prevArrow && nextArrow && dots.length) {
    prevArrow.addEventListener('click', () => setActiveDot((current - 1 + dots.length) % dots.length));
    nextArrow.addEventListener('click', () => setActiveDot((current + 1) % dots.length));
  }

  /* Newsletter form feedback */
  const subscribeForm = document.querySelector('.subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = subscribeForm.querySelector('input[type="email"]');
      const btn = subscribeForm.querySelector('button');
      if (input && input.checkValidity()) {
        const original = btn.textContent;
        btn.textContent = '¡Gracias!';
        input.value = '';
        setTimeout(() => { btn.textContent = original; }, 2200);
      }
    });
  }

  /* Header shadow on scroll */
  const header = document.getElementById('siteHeader');
  if (header) {
    window.addEventListener('scroll', () => {
      header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(0,0,0,.35)' : 'none';
    });
  }

});
