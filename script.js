const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

menuToggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

const form = document.querySelector('#contactForm');
const status = document.querySelector('#formStatus');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();

  status.textContent = `Obrigado, ${name}! Sua mensagem foi preparada com sucesso.`;
  form.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();

const revealElements = document.querySelectorAll('.card, .gallery-item, .two-columns > *, .stats-grid > div');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealElements.forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
