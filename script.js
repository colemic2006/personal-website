document.addEventListener("DOMContentLoaded", function () {

  const timelines = document.querySelectorAll(".timeline");

  const observers = [];

  timelines.forEach((timeline) => {

    // Add progress line if it doesn't already exist
    if (!timeline.querySelector(".timeline-progress")) {
      const progress = document.createElement("div");
      progress.classList.add("timeline-progress");
      timeline.appendChild(progress);
    }

    const rows = timeline.querySelectorAll(".timeline-row");

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

    observers.push({ timeline, progress: timeline.querySelector(".timeline-progress") });

  });

  // SINGLE scroll listener
  window.addEventListener("scroll", () => {

    observers.forEach(obj => {

      const rect = obj.timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {

        const scrollPercent = Math.min(
          Math.max((windowHeight - rect.top) / rect.height, 0),
          1
        );

        obj.progress.style.height = scrollPercent * rect.height + "px";
      }

    });

  });

});
