// The light/dark theme button in the nav (all pages).
// Moved out of the page so the Content-Security-Policy can forbid inline scripts.
(function(){
  var b=document.getElementById('themeToggle'); if(!b) return;
  var root=document.documentElement;
  function paint(){var light=root.getAttribute('data-theme')==='light';
    b.setAttribute('aria-label',light?'Switch to dark theme':'Switch to light theme');
    b.setAttribute('title',light?'Switch to dark theme':'Switch to light theme');
    b.firstElementChild.textContent=light?'\u263E':'\u2600';}
  b.addEventListener('click',function(){
    var next=root.getAttribute('data-theme')==='light'?'dark':'light';
    root.setAttribute('data-theme',next);
    try{localStorage.setItem('dp-theme',next);}catch(e){}
    paint();});
  paint();
})();
