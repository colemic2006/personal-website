const items = document.querySelectorAll('.timeline-item');
const progressLine = document.querySelector('.timeline-progress');
const timeline = document.querySelector('.timeline');

window.addEventListener('scroll', () => {
  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    const totalHeight = timeline.offsetHeight;
    const visibleHeight = windowHeight - rect.top;
    const progress = Math.min(Math.max(visibleHeight / totalHeight, 0), 1);

    progressLine.style.height = progress * totalHeight + 'px';

    items.forEach(item => {
      const itemRect = item.getBoundingClientRect();
      if (itemRect.top < windowHeight * 0.6) {
        item.classList.add('active');
      }
    });
  }
});
