// Applies the saved (or system) light/dark theme before first paint, so the page
// never flashes the wrong colours. Loaded in <head>.
// Moved out of the page so the Content-Security-Policy can forbid inline scripts.
document.documentElement.classList.add('js');(function(){var t;try{t=localStorage.getItem('dp-theme');}catch(e){}if(t!=='light'&&t!=='dark'){t=(window.matchMedia&&matchMedia('(prefers-color-scheme: light)').matches)?'light':'dark';}document.documentElement.setAttribute('data-theme',t);})();
