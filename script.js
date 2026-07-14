const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const form = document.querySelector('#lead-form');
const successMessage = document.querySelector('.form-success');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get('name');
  form.reset();
  successMessage.textContent = `Thanks${name ? `, ${name}` : ''} — your brief is on its way. We’ll get back to you shortly.`;
  successMessage.classList.add('visible');
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));

const featureVideo = document.querySelector('.feature-video-player');
const videoPlayButton = document.querySelector('.video-play-button');

videoPlayButton?.addEventListener('click', () => {
  if (!featureVideo) return;
  if (featureVideo.paused) {
    featureVideo.play();
  } else {
    featureVideo.pause();
  }
});

featureVideo?.addEventListener('play', () => {
  if (videoPlayButton) {
    videoPlayButton.hidden = true;
  }
});
