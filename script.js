
const progressLine = document.querySelector('.timeline-progress-line');

window.addEventListener('scroll', () => {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;

  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    const totalHeight = timeline.offsetHeight;
    const visibleHeight = windowHeight - rect.top;
    const progress = Math.min(Math.max(visibleHeight / totalHeight, 0), 1);
    progressLine.style.height = progress * totalHeight + 'px';
  }

  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / height) * 100;
  document.querySelector('.scroll-progress').style.width = scrollPercent + "%";
});
