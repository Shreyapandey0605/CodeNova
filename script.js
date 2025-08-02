// Loader Fade Out
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.style.opacity = 0;
  setTimeout(() => loader.style.display = 'none', 1000);
});

// Hamburger Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Image Hover (before/after)
document.querySelectorAll('.hover-img').forEach(div => {
  const original = div.style.backgroundImage;
  const after = div.getAttribute('data-hover');
  if (after) {
    div.addEventListener('mouseover', () => { div.style.backgroundImage = `url('${after}')`; });
    div.addEventListener('mouseleave', () => { div.style.backgroundImage = original; });
  }
});

// ====== Floating Tooltip for Coverflow and Hover Gallery ======
const tooltip = document.getElementById('custom-tooltip');
function showTooltip(e, text) {
  tooltip.textContent = text;
  tooltip.style.opacity = '1';
  tooltip.style.left = e.clientX + 18 + "px";
  tooltip.style.top = (e.clientY - 18) + "px";
}
function hideTooltip() {
  tooltip.style.opacity = '0';
}
document.querySelectorAll('.coverflow-item, .hover-img').forEach(el => {
  el.addEventListener('mouseenter', function(e) {
    const msg = el.getAttribute('data-tooltip');
    if (msg) showTooltip(e, msg);
  });
  el.addEventListener('mousemove', function(e) {
    const msg = el.getAttribute('data-tooltip');
    if (msg) showTooltip(e, msg);
  });
  el.addEventListener('mouseleave', hideTooltip);
});
