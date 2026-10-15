// ============================================================
// REDESIGN LAYER — small enhancements; the page works without them
// ============================================================
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Card spotlight: feeds the pointer position to the CSS radial gradient
  var cards = document.querySelectorAll(
    '.proof-stat, .service-card, .project-card, .cred-card, .edu-card, ' +
    '.lesson-card, .pillar, .hcai-card, .contact-link, .cta-band'
  );
  cards.forEach(function (card) {
    card.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      var r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
    card.addEventListener('pointerleave', function () {
      card.style.removeProperty('--my');
    });
  });

  // Theme switch: run the page's own toggle inside a view transition
  var toggle = document.getElementById('themeToggle');
  if (!toggle || !document.startViewTransition) return;
  var inTransition = false;
  toggle.addEventListener('click', function (e) {
    if (inTransition || reduce.matches) return;
    e.stopImmediatePropagation();
    var r = toggle.getBoundingClientRect();
    var root = document.documentElement;
    root.style.setProperty('--vt-x', (r.left + r.width / 2) + 'px');
    root.style.setProperty('--vt-y', (r.top + r.height / 2) + 'px');
    document.startViewTransition(function () {
      inTransition = true;
      toggle.click();
      inTransition = false;
    });
  }, true);
})();
