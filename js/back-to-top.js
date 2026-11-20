// Shows the back-to-top button after scrolling down (music and exercises pages).
// Moved out of the page so the Content-Security-Policy can forbid inline scripts.
window.addEventListener('scroll',()=>{const b=document.getElementById('backToTop');if(b){b.classList.toggle('visible',window.scrollY>window.innerHeight*0.6);}});
