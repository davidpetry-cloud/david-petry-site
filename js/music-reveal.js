// Music page: fades sections in as they scroll into view.
// Moved out of the page so the Content-Security-Policy can forbid inline scripts.
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.08 });
reveals.forEach(el => io.observe(el));
