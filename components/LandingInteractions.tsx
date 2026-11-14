'use client';

import { useEffect } from 'react';

/**
 * Portage de script.js : menu mobile + surlignage du lien de nav
 * correspondant à la section visible.
 */
export default function LandingInteractions() {
  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    if (!siteNav) return;

    const onToggle = () => {
      const isOpen = siteNav.classList.toggle('open');
      menuToggle?.setAttribute('aria-expanded', String(isOpen));
    };
    menuToggle?.addEventListener('click', onToggle);

    const navLinks = [...siteNav.querySelectorAll('a')];
    const onLinkClick = () => {
      siteNav.classList.remove('open');
      menuToggle?.setAttribute('aria-expanded', 'false');
    };
    navLinks.forEach((link) => link.addEventListener('click', onLinkClick));

    const sections = [...document.querySelectorAll('main section[id]')];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) =>
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${entry.target.id}`,
            ),
          );
        });
      },
      { rootMargin: '-35% 0px -55% 0px' },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      menuToggle?.removeEventListener('click', onToggle);
      navLinks.forEach((link) =>
        link.removeEventListener('click', onLinkClick),
      );
      observer.disconnect();
    };
  }, []);

  return null;
}
