const downloadCard = document.querySelector(".qr-card");
const footer = document.querySelector(".footer");
const pageShell = document.querySelector(".page-shell");
const header = document.querySelector(".header");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let pending = false;

const updateScroll = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 32);
  if (downloadCard && pageShell) {
    // A sticky footer intersects the viewport even while the page covers it.
    const revealed =
      pageShell.getBoundingClientRect().bottom < window.innerHeight;
    downloadCard.classList.toggle("at-footer", revealed);
    downloadCard.inert = revealed;
  }
  pending = false;
};
const scheduleScroll = () => {
  if (!pending) {
    pending = true;
    window.requestAnimationFrame(updateScroll);
  }
};
const updateFooter = () => {
  if (footer) {
    // Tall footers retain normal flow so every link remains reachable.
    footer.classList.toggle(
      "footer-reveal",
      !reducedMotion.matches && footer.offsetHeight <= window.innerHeight - 112,
    );
  }
  scheduleScroll();
};
window.addEventListener("scroll", scheduleScroll, { passive: true });
window.addEventListener("resize", updateFooter);
window.addEventListener("pageshow", updateFooter);
reducedMotion.addEventListener("change", updateFooter);
if (footer) {
  if ("ResizeObserver" in window)
    new ResizeObserver(updateFooter).observe(footer);
  footer.addEventListener("focusin", () => {
    // Keyboard users can reveal links still covered by the foreground page.
    if (pageShell && pageShell.getBoundingClientRect().bottom > 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "instant",
      });
    }
  });
}
updateFooter();
updateScroll();
