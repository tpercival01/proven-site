document.documentElement.classList.add('js');

const config = window.PROVEN_SITE || {};
const siteUrl = (config.siteUrl || 'https://example.com').replace(/\/$/, '');

const path = window.location.pathname === '/index.html' ? '/' : window.location.pathname;
const canonical = document.querySelector('link[rel="canonical"]');
if (canonical) canonical.href = `${siteUrl}${path}`;

const ogUrl = document.querySelector('meta[property="og:url"]');
if (ogUrl) ogUrl.content = `${siteUrl}${path}`;

const supportLinks = document.querySelectorAll('[data-support-email]');
if (supportLinks.length) {
  const email = config.supportEmail || 'SUPPORT_EMAIL';
  supportLinks.forEach((link) => {
    link.textContent = email;
    if (email !== 'SUPPORT_EMAIL') {
      link.href = `mailto:${email}`;
    } else {
      link.removeAttribute('href');
      link.setAttribute('aria-disabled', 'true');
    }
  });
}

const reveals = [...document.querySelectorAll('.reveal')];
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('is-visible'));
}
