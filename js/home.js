// Home page: scroll spy for the nav, scroll reveal, mobile nav, scroll progress
// and back-to-top.
// Moved out of the page so the Content-Security-Policy can forbid inline scripts.
// ============================================================
// SCROLL SPY — active nav
// ============================================================
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.classList.add('active');
        }
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// ============================================================
// SCROLL REVEAL
// ============================================================
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// Fallback: if observer doesn't fire (local file / mobile), reveal everything
setTimeout(() => {
  revealEls.forEach(el => el.classList.add('visible'));
}, 800);

// ============================================================
// MOBILE NAV TOGGLE
// ============================================================
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const navList = document.getElementById('navLinks');
const navLogo = nav.querySelector('.nav-logo');

// While open, the list sits right after the menu button so Tab goes from
// the button into the menu. It is positioned, so the move isn't visible.
const setNavOpen = open => {
  nav.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  if (open) navToggle.after(navList);
  else navLogo.after(navList);
};

navToggle.addEventListener('click', () => setNavOpen(!nav.classList.contains('open')));

// Close nav on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => setNavOpen(false));
});

// Tabbing out of the open menu closes it, so the next focused item isn't hidden behind it
nav.addEventListener('focusout', e => {
  if (nav.classList.contains('open') && e.relatedTarget && !nav.contains(e.relatedTarget)) {
    setNavOpen(false);
  }
});

// Escape closes the open menu and returns focus to its button
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('open')) {
    setNavOpen(false);
    navToggle.focus();
  }
});

// ============================================================
// EXERCISE TABS
// ============================================================

// ============================================================
const scrollProgress = document.getElementById('scrollProgress');

window.addEventListener('scroll', () => {
  const backToTop = document.getElementById('backToTop');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  if (scrollProgress) scrollProgress.style.width = pct + '%';

  if (backToTop) {
    if (scrollTop > window.innerHeight * 0.6) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }
});
