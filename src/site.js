const downloadCard = document.querySelector(".qr-card");
const footer = document.querySelector(".footer");
if (downloadCard && footer && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(([entry]) => {
    downloadCard.classList.toggle("at-footer", entry.isIntersecting);
    downloadCard.inert = entry.isIntersecting;
  });
  observer.observe(footer);
}

const header = document.querySelector(".header");
if (header) {
  let pending = false;
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 32);
    pending = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!pending) {
        pending = true;
        window.requestAnimationFrame(updateHeader);
      }
    },
    { passive: true },
  );
  window.addEventListener("pageshow", updateHeader);
  updateHeader();
}
