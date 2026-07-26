document.addEventListener("click", (event) => {
  const linkButton = event.target.closest("[data-copy-url]");
  if (!linkButton) return;

  navigator.clipboard.writeText(linkButton.dataset.copyUrl).then(() => {
    const original = linkButton.textContent;
    linkButton.textContent = "Copied";
    window.setTimeout(() => {
      linkButton.textContent = original;
    }, 1600);
  });
});

document.querySelectorAll(".nav-menu nav a").forEach((link) => {
  link.addEventListener("click", () => {
    link.closest("details")?.removeAttribute("open");
  });
});

