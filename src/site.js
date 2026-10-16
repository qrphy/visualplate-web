const downloadCard = document.querySelector(".qr-card");
const footer = document.querySelector(".footer");
if (downloadCard && footer && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(([entry]) => {
    downloadCard.classList.toggle("at-footer", entry.isIntersecting);
    downloadCard.inert = entry.isIntersecting;
  });
  observer.observe(footer);
}
