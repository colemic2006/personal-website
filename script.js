const timeline = document.querySelector('.timeline');
const progressLine = document.querySelector('.timeline-progress');
const cards = document.querySelectorAll('.timeline-card');
const dots = document.querySelectorAll('.timeline-dot');

function animateTimeline() {
  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    const totalHeight = timeline.offsetHeight;
    const visibleHeight = windowHeight - rect.top;
    const progress = Math.min(Math.max(visibleHeight / totalHeight, 0), 1);
    progressLine.style.height = progress * totalHeight + 'px';
  }

  cards.forEach((card, index) => {
    const cardRect = card.getBoundingClientRect();
    if (cardRect.top < windowHeight * 0.75) {
      card.classList.add('visible');
      dots[index].classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateTimeline);
animateTimeline();
