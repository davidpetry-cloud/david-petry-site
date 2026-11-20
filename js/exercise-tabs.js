// Exercises page: the Drum Set / Snare Drum tabs (WAI-ARIA tabs pattern).
// Moved out of the page so the Content-Security-Policy can forbid inline scripts.
function switchTab(panelId, btn) {
  document.querySelectorAll('.ex-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-selected', 'false');
    b.tabIndex = -1;
  });
  document.getElementById(panelId).classList.add('active');
  btn.classList.add('active');
  btn.setAttribute('aria-selected', 'true');
  btn.tabIndex = 0;
}
// Arrow keys, Home and End move between tabs (WAI-ARIA tabs pattern)
document.querySelector('.exercises-tabs').addEventListener('keydown', e => {
  const tabs = [...document.querySelectorAll('.tab-btn')];
  const i = tabs.indexOf(document.activeElement);
  const to = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
  if (i < 0 || to === undefined) return;
  e.preventDefault();
  const tab = tabs[(to + tabs.length) % tabs.length];
  tab.focus();
  tab.click();
});

// Tab clicks (these were inline onclick="" attributes, which the page's
// security policy no longer allows).
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.getAttribute('aria-controls'), btn));
});
