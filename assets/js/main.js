// RAINGAIA • U.S. Global Export
// Basic interactions: scroll reveal + smooth scroll

document.addEventListener("DOMContentLoaded", () => {
  // Reveal on scroll
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach(el => observer.observe(el));
  } else {
    // Fallback: just show
    revealEls.forEach(el => el.classList.add("visible"));
  }

  // Smooth scroll for anchor links and header button
  const scrollLinks = document.querySelectorAll('a[href^="#"], [data-scroll]');
  scrollLinks.forEach(el => {
    el.addEventListener("click", e => {
      const targetId =
        el.getAttribute("href")?.startsWith("#")
          ? el.getAttribute("href")
          : el.dataset.scroll;

      if (targetId && targetId.startsWith("#")) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
          });
        }
      }
    });
  });
});
