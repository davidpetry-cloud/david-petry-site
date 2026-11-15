// ============================================================
// SITE LAYER — small enhancements; the pages work without them
// ============================================================
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Card spotlight: feeds the pointer position to the CSS radial gradient
  var cards = document.querySelectorAll(
    '.proof-stat, .service-card, .project-card, .cred-card, .edu-card, ' +
    '.lesson-card, .pillar, .principle, .contact-link, .cta-band, ' +
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

  // Hero drumhead: a drum drawn in 3D on a canvas, with sand on its head.
  // Each strike picks the next vibration pattern of a round drumhead and the
  // sand walks to the lines that stay still (a Chladni figure). The pointer
  // turns the drum a little. With reduce motion on, the sand moves at once.
  (function () {
    var box = document.getElementById('heroDrum');
    var cv = document.getElementById('drumCanvas');
    var btn = document.getElementById('drumStrike');
    var count = document.getElementById('drumCount');
    if (!box || !cv || !btn || !cv.getContext) return;
    var ctx = cv.getContext('2d');

    // Bessel function of the first kind, by its integral form
    function bessel(m, x) {
      var sum = 0, n = 36;
      for (var i = 0; i < n; i++) {
        var t = Math.PI * (i + 0.5) / n;
        sum += Math.cos(m * t - x * Math.sin(t));
      }
      return sum / n;
    }
    // Each pattern mixes up to two modes of a round membrane fixed at its rim:
    // [spokes, zero of the Bessel function, weight, turn]
    var PATTERNS = [
      [[3, 9.761, 1, 0]],
      [[0, 8.654, 1, 0], [6, 9.936, 0.9, 0]],
      [[2, 11.62, 1, 0], [5, 12.339, 0.8, 0.3]],
      [[4, 11.065, 1, 0]],
      [[1, 10.173, 1, 0], [4, 11.065, 0.9, 0.5]],
      [[0, 11.792, 1, 0], [3, 13.015, 0.7, 0]]
    ];
    var G = 128, grid = new Float32Array(G * G);
    function buildGrid(p) {
      var max = 0, i, j;
      for (j = 0; j < G; j++) for (i = 0; i < G; i++) {
        var x = (i + 0.5) / G * 2 - 1, y = (j + 0.5) / G * 2 - 1;
        var r = Math.sqrt(x * x + y * y), th = Math.atan2(y, x), f = 0;
        if (r <= 1) for (var k = 0; k < p.length; k++) {
          f += p[k][2] * bessel(p[k][0], p[k][1] * r) * Math.cos(p[k][0] * th + p[k][3]);
        }
        f = Math.abs(f); grid[j * G + i] = f; if (f > max) max = f;
      }
      for (i = 0; i < grid.length; i++) grid[i] /= max;
    }

    var N = 7000, px = new Float32Array(N), py = new Float32Array(N), cool = new Uint8Array(N);
    function scatter(amount) {
      for (var i = 0; i < N; i++) {
        if (amount >= 1) {
          var r = Math.sqrt(Math.random()) * 0.93, a = Math.random() * 6.2832;
          px[i] = r * Math.cos(a); py[i] = r * Math.sin(a);
          cool[i] = Math.random() < r * r ? 1 : 0;      // teal toward the rim, amber in the middle
        } else {
          px[i] += (Math.random() - 0.5) * amount; py[i] += (Math.random() - 0.5) * amount;
        }
      }
    }
    // One step: every grain hops, further where the head moves more
    function step() {
      for (var i = 0; i < N; i++) {
        var x = px[i], y = py[i];
        var gi = ((x + 1) * 0.5 * G) | 0, gj = ((y + 1) * 0.5 * G) | 0;
        var a = grid[(gj < 0 ? 0 : gj >= G ? G - 1 : gj) * G + (gi < 0 ? 0 : gi >= G ? G - 1 : gi)];
        var hop = 0.0007 + 0.06 * a, dir = Math.random() * 6.2832;
        x += Math.cos(dir) * hop; y += Math.sin(dir) * hop;
        var r2 = x * x + y * y;
        if (r2 > 0.8836) { var s = 0.9 / Math.sqrt(r2); x *= s; y *= s; }
        px[i] = x; py[i] = y;
      }
    }

    var css, W = 0, H = 0, dpr = 1;
    function readTheme() {
      var cs = getComputedStyle(document.documentElement);
      var v = function (n) { return cs.getPropertyValue(n).trim(); };
      css = { amber: v('--amber'), teal: v('--teal'), head: v('--surface'), shell: v('--bg2'),
              line: v('--muted2'), light: document.documentElement.getAttribute('data-theme') === 'light' };
    }
    function resize() {
      var r = cv.getBoundingClientRect();
      if (!r.width) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = r.width; H = r.height;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    }

    var yaw = 0.35, tilt = 0.56, yawTo = yaw, tiltTo = tilt;
    function ell(cx, cy, rx, ry, a0, a1) { ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, a0, a1); }
    function draw() {
      if (!W) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      var cx = W / 2, R = W * 0.44, ry = R * tilt;
      var depth = R * 0.62 * Math.sqrt(1 - tilt * tilt), top = H * 0.5 - depth * 0.5 + 2, bot = top + depth;
      var TAU = 6.2832, i;

      // soft shadow on the ground
      ctx.save();
      ctx.filter = 'blur(' + Math.round(R * 0.07) + 'px)';
      ctx.fillStyle = css.light ? 'rgba(48,32,12,0.22)' : 'rgba(0,0,0,0.6)';
      ell(cx, bot + ry * 0.12, R * 0.98, ry * 0.98, 0, TAU); ctx.fill();
      ctx.restore();

      // shell: lit from the left, like a cylinder
      var g = ctx.createLinearGradient(cx - R, 0, cx + R, 0);
      g.addColorStop(0, css.shell); g.addColorStop(0.28, css.head); g.addColorStop(1, css.shell);
      ctx.beginPath();
      ctx.moveTo(cx - R, top); ctx.lineTo(cx - R, bot);
      ctx.ellipse(cx, bot, R, ry, 0, Math.PI, 0, true);
      ctx.lineTo(cx + R, top);
      ctx.ellipse(cx, top, R, ry, 0, 0, Math.PI, false);
      ctx.closePath();
      ctx.fillStyle = g; ctx.fill();
      ctx.globalAlpha = 0.16; ctx.fillStyle = css.amber; ctx.fill(); ctx.globalAlpha = 1;
      ctx.strokeStyle = css.line; ctx.lineWidth = 1; ctx.stroke();

      // tension rods and lugs on the side facing you; they turn with the drum
      ctx.strokeStyle = css.amber; ctx.fillStyle = css.amber;
      for (i = 0; i < 10; i++) {
        var a = yaw + i * TAU / 10, sn = Math.sin(a);
        if (sn < 0.06) continue;
        var lx = cx + R * Math.cos(a), ly = top + ry * sn;
        ctx.globalAlpha = 0.35 + 0.65 * sn;
        ctx.lineWidth = 1.4;
        ctx.beginPath(); ctx.moveTo(lx, ly + 3); ctx.lineTo(lx, ly + depth - 3); ctx.stroke();
        ctx.fillRect(lx - 2.5, ly + depth * 0.5 - 7, 5, 14);
      }
      ctx.globalAlpha = 1;

      // hoops: bottom (front half) and top
      ctx.lineWidth = 2.2; ctx.strokeStyle = css.amber;
      ell(cx, bot, R, ry, 0, Math.PI); ctx.stroke();
      ctx.globalAlpha = 0.5; ell(cx, bot - 5, R, ry, 0, Math.PI); ctx.lineWidth = 1; ctx.stroke(); ctx.globalAlpha = 1;

      // head
      var hg = ctx.createRadialGradient(cx - R * 0.3, top - ry * 0.35, R * 0.05, cx, top, R);
      hg.addColorStop(0, css.head); hg.addColorStop(1, css.shell);
      ell(cx, top, R, ry, 0, TAU); ctx.fillStyle = hg; ctx.fill();
      ctx.lineWidth = 2.4; ctx.strokeStyle = css.amber; ctx.stroke();
      ctx.globalAlpha = 0.55; ctx.lineWidth = 1; ell(cx, top, R * 0.955, ry * 0.955, 0, TAU); ctx.stroke(); ctx.globalAlpha = 1;

      // sand
      var c = Math.cos(yaw), s = Math.sin(yaw), k = R * 0.94, size = W < 300 ? 1.1 : 1.35;
      for (var pass = 0; pass < 2; pass++) {
        ctx.fillStyle = pass ? css.teal : css.amber;
        ctx.globalAlpha = css.light ? 0.85 : 0.9;
        for (i = 0; i < N; i++) {
          if (cool[i] !== pass) continue;
          var x = px[i] * c - py[i] * s, y = px[i] * s + py[i] * c;
          ctx.fillRect(cx + x * k, top + y * k * tilt, size, size);
        }
      }
      ctx.globalAlpha = 1;
    }

    // One animation loop for both the settling sand and the turning drum
    var settling = 0, running = false;
    function frame() {
      running = false;
      var moving = false;
      if (settling > 0) { step(); step(); step(); settling--; moving = true; }
      if (Math.abs(yawTo - yaw) > 0.001 || Math.abs(tiltTo - tilt) > 0.0005) {
        yaw += (yawTo - yaw) * 0.12; tilt += (tiltTo - tilt) * 0.12; moving = true;
      }
      draw();
      if (moving) kick();
    }
    function kick() { if (!running) { running = true; requestAnimationFrame(frame); } }

    var current = 0;
    function settleNow() { for (var i = 0; i < 280; i++) step(); settling = 0; }
    function strike() {
      current = (current + 1) % PATTERNS.length;
      buildGrid(PATTERNS[current]);
      count.textContent = 'Pattern ' + (current + 1) + ' of ' + PATTERNS.length + '.';
      if (reduce.matches) { settleNow(); draw(); return; }
      scatter(0.16);                                   // the hit throws the sand
      settling = 95;
      kick();
      setTimeout(function () { if (settling > 0) { settleNow(); draw(); } }, 2500); // frames stall in a hidden tab
    }

    readTheme();
    buildGrid(PATTERNS[0]);
    scatter(1);
    settleNow();
    box.classList.add('is-ready');
    resize();
    draw();

    btn.addEventListener('click', strike);
    cv.addEventListener('click', strike);
    if (window.ResizeObserver) new ResizeObserver(function () { resize(); draw(); }).observe(cv);
    else window.addEventListener('resize', function () { resize(); draw(); });
    new MutationObserver(function () { readTheme(); draw(); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    var hero = document.getElementById('hero');
    if (hero) {
      hero.addEventListener('pointermove', function (e) {
        if (e.pointerType !== 'mouse' || reduce.matches) return;
        yawTo = 0.35 + (e.clientX / window.innerWidth - 0.5) * 0.9;
        tiltTo = 0.56 + (e.clientY / window.innerHeight - 0.5) * 0.1;
        kick();
      });
      hero.addEventListener('pointerleave', function () { yawTo = 0.35; tiltTo = 0.56; if (!reduce.matches) kick(); });
    }
  })();

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
    // An aborted transition (e.g. a background tab) rejects `ready`; the fallback below handles it
    vt.ready.catch(function () {});
    // If the page isn't painting (e.g. a background tab), switch anyway
    setTimeout(function () {
      if (!flipped) { vt.skipTransition(); flipOnce(); settle(); }
    }, 300);
  }, true);
})();
