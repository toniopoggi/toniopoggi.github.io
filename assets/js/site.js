const themeToggle = document.querySelector("[data-theme-toggle]");

if (themeToggle) {
  const themeStorageKey = "antonio-theme";
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const themeColor = document.querySelector("#theme-color");

  const effectiveTheme = () =>
    document.documentElement.dataset.theme || (systemTheme.matches ? "dark" : "light");

  const updateThemeControl = () => {
    const currentTheme = effectiveTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    themeToggle.setAttribute("aria-label", `Switch to ${nextTheme} mode`);
    themeToggle.setAttribute("aria-pressed", String(currentTheme === "dark"));
    themeToggle.title = `Switch to ${nextTheme} mode`;
    if (themeColor) {
      themeColor.content = currentTheme === "dark" ? "#111614" : "#f4f0e7";
    }
  };

  themeToggle.addEventListener("click", () => {
    const nextTheme = effectiveTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    try {
      localStorage.setItem(themeStorageKey, nextTheme);
    } catch (error) {
      // The visual preference still applies for this page if storage is unavailable.
    }
    updateThemeControl();
  });

  systemTheme.addEventListener("change", () => {
    if (!document.documentElement.dataset.theme) {
      updateThemeControl();
    }
  });

  updateThemeControl();
}

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
