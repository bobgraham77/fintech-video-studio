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

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a')];

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach((section) => observer.observe(section));

const scanForm = document.querySelector('#scan-form');
const scanResult = document.querySelector('#scan-result');
const videoUrl = document.querySelector('#video-url');
const videoFile = document.querySelector('#video-file');
const resultLoader = scanResult?.querySelector('.result-loader');
const resultMessage = scanResult?.querySelector('.result-message');

scanForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const hasUrl = videoUrl?.value.trim();
  const hasFile = videoFile?.files.length;

  scanResult.classList.add('visible');
  if (!hasUrl && !hasFile) {
    resultLoader.textContent = 'ADD A VIDEO TO BEGIN';
    resultMessage.textContent = 'Paste a YouTube URL or upload a video to surface the moments most likely to lose a buyer.';
    return;
  }

  resultLoader.textContent = 'RUNNING CONVERSION RULES •••';
  resultMessage.textContent = 'Extracting buyer signals: hook, clarity, trust, attention and CTA timing…';
  window.setTimeout(() => {
    resultLoader.textContent = 'FIRST-PASS ANALYSIS READY';
    resultMessage.innerHTML = '<strong>3 conversion leaks detected.</strong> Your free preview is ready below. Unlock the complete report for all recommendations, the rewritten script and storyboard blueprint.';
    document.querySelector('#report')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 950);
});
