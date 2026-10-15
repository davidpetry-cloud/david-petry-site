// ============================================================
// REDESIGN LAYER — small enhancements; the page works without them
// ============================================================
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Card spotlight: feeds the pointer position to the CSS radial gradient
  var cards = document.querySelectorAll(
    '.proof-stat, .service-card, .project-card, .cred-card, .edu-card, ' +
    '.lesson-card, .pillar, .hcai-card, .contact-link, .cta-band, ' +
    '.ed-card, .eng-card, .suno-stat, .platform-link, .book-dl, .ex-item'
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

  // Theme switch: run the page's own toggle with colour transitions paused,
  // inside a view transition where supported. Without the pause, every colour
  // tweens from the old theme for 0.2s and text briefly loses contrast.
  var toggle = document.getElementById('themeToggle');
  if (!toggle) return;
  var root = document.documentElement;
  var inner = false;
  function flip() {
    inner = true;
    toggle.click();
    inner = false;
  }
  function settle() {
    var done = function () { root.classList.remove('dp-theme-switching'); };
    requestAnimationFrame(function () { requestAnimationFrame(done); });
    setTimeout(done, 600); // frames don't run in background tabs
  }
  toggle.addEventListener('click', function (e) {
    if (inner) return;
    e.stopImmediatePropagation();
    root.classList.add('dp-theme-switching');
    if (!document.startViewTransition || reduce.matches) {
      flip();
      settle();
      return;
    }
    var r = toggle.getBoundingClientRect();
    root.style.setProperty('--vt-x', (r.left + r.width / 2) + 'px');
    root.style.setProperty('--vt-y', (r.top + r.height / 2) + 'px');
    var flipped = false;
    var flipOnce = function () { if (!flipped) { flipped = true; flip(); } };
    var vt = document.startViewTransition(flipOnce);
    vt.finished.then(settle, settle);
    // If the page isn't painting (e.g. a background tab), switch anyway
    setTimeout(function () {
      if (!flipped) { vt.skipTransition(); flipOnce(); settle(); }
    }, 300);
  }, true);
})();
