const MIN_LOADER_TIME = 1800;
const startedAt = performance.now();

function finishLoading() {
  const elapsed = performance.now() - startedAt;
  const remaining = Math.max(0, MIN_LOADER_TIME - elapsed);
  window.setTimeout(() => {
    document.body.classList.add("loaded");
    window.setTimeout(() => document.body.classList.add("ready"), 800);
  }, remaining);
}

if (document.readyState === "complete") finishLoading();
else window.addEventListener("load", finishLoading, { once: true });

document.querySelectorAll('.social-link[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});