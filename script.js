// Timeline Scroll Animation + Progress Line

document.addEventListener("DOMContentLoaded", function () {

  const timeline = document.querySelector(".timeline");

  // Create progress line
  const progress = document.createElement("div");
  progress.classList.add("timeline-progress");
  timeline.appendChild(progress);

  const rows = document.querySelectorAll(".timeline-row");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.3
  });

  rows.forEach(row => observer.observe(row));

  // Animate center line fill
  window.addEventListener("scroll", () => {
    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollPercent = Math.min(
      Math.max((windowHeight - rect.top) / rect.height, 0),
      1
    );

    progress.style.height = scrollPercent * rect.height + "px";
  });

});
