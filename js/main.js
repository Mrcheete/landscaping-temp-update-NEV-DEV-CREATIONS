// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Header fade — hides while scrolling down, reappears as soon as you scroll up
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  let lastScrollY = window.scrollY;
  const fadeThreshold = 80;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;

    if (scrollingDown && currentScrollY > fadeThreshold) {
      siteHeader.classList.add('header-hidden');
    } else {
      siteHeader.classList.remove('header-hidden');
    }
    lastScrollY = currentScrollY;
  }, { passive: true });
}

// Service detail modal — click a service card to see the full description + image
const serviceModal = document.getElementById('service-modal');

if (serviceModal) {
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalClose = document.getElementById('modal-close');
  const serviceCards = document.querySelectorAll('.card[data-title]');

  const openModal = (card) => {
    modalTitle.textContent = card.dataset.title || '';
    modalDesc.textContent = card.dataset.desc || '';
    modalImage.textContent = card.dataset.image || 'Image of the finished service';
    serviceModal.classList.add('is-open');
    serviceModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalClose.focus();
  };

  const closeModal = () => {
    serviceModal.classList.remove('is-open');
    serviceModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  serviceCards.forEach((card) => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('click', () => openModal(card));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card);
      }
    });
  });

  modalClose.addEventListener('click', closeModal);
  serviceModal.addEventListener('click', (e) => {
    if (e.target === serviceModal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

// Contact form — placeholder handler, swap with real submission logic per client
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // TODO: connect this to a real backend or form service (e.g. Formspree, Netlify Forms)
    alert("Thanks! We'll get back to you shortly.");
    contactForm.reset();
  });
}
