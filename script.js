// Timeline reveal on scroll (stable version)

function revealOnScroll() {
  const rows = document.querySelectorAll('.timeline-row');
  const triggerBottom = window.innerHeight * 0.85;

  rows.forEach(row => {
    const rowTop = row.getBoundingClientRect().top;

    if (rowTop < triggerBottom) {
      row.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
