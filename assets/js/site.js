const listenForMediaChange = (mediaQuery, listener) => {
  if (typeof mediaQuery.addEventListener === "function") {
    mediaQuery.addEventListener("change", listener);
  } else if (typeof mediaQuery.addListener === "function") {
    mediaQuery.addListener(listener);
  }
};

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

  listenForMediaChange(systemTheme, () => {
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

const mobileNavigation = document.querySelector(".nav-menu");

if (mobileNavigation) {
  const navigationSummary = mobileNavigation.querySelector("summary");
  const mobileBreakpoint = window.matchMedia("(max-width: 860px)");

  const updateNavigationLabel = () => {
    navigationSummary?.setAttribute(
      "aria-label",
      mobileNavigation.open ? "Close navigation" : "Open navigation"
    );
  };

  mobileNavigation.addEventListener("toggle", updateNavigationLabel);

  mobileNavigation.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNavigation.removeAttribute("open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileNavigation.open) {
      mobileNavigation.removeAttribute("open");
      navigationSummary?.focus();
    }
  });

  listenForMediaChange(mobileBreakpoint, (event) => {
    if (!event.matches) {
      mobileNavigation.removeAttribute("open");
    }
  });

  updateNavigationLabel();
}

const directory = document.querySelector("[data-directory]");

if (directory) {
  const enhancement = directory.querySelector("[data-directory-enhancement]");
  const form = directory.querySelector("[data-directory-form]");
  const searchInput = directory.querySelector("[data-directory-search]");
  const clearButton = directory.querySelector("[data-directory-clear]");
  const filterButtons = [
    ...directory.querySelectorAll("button[data-directory-filter]")
  ];
  const items = [...directory.querySelectorAll("[data-directory-item]")];
  const sections = [...directory.querySelectorAll("[data-directory-section]")];
  const status = directory.querySelector("[data-directory-status]");
  const emptyState = directory.querySelector("[data-directory-empty]");
  const validFilters = new Set(filterButtons.map((button) => button.dataset.directoryFilter));
  const initialParameters = new URLSearchParams(window.location.search);
  let activeFilter = validFilters.has(initialParameters.get("topic"))
    ? initialParameters.get("topic")
    : "all";

  const normalise = (value) => value.toLocaleLowerCase().trim();

  const updateAddress = () => {
    if (
      !["http:", "https:"].includes(window.location.protocol) ||
      !window.history?.replaceState
    ) {
      return;
    }

    const parameters = new URLSearchParams(window.location.search);
    const query = searchInput.value.trim();

    if (query) {
      parameters.set("q", query);
    } else {
      parameters.delete("q");
    }

    if (activeFilter === "all") {
      parameters.delete("topic");
    } else {
      parameters.set("topic", activeFilter);
    }

    const queryString = parameters.toString();
    const nextUrl = `${window.location.pathname}${queryString ? `?${queryString}` : ""}${window.location.hash}`;
    window.history.replaceState({}, "", nextUrl);
  };

  const applyDirectoryFilters = () => {
    const query = normalise(searchInput.value);
    const terms = query ? query.split(/\s+/) : [];
    let visibleCount = 0;

    items.forEach((item) => {
      const matchesFilter =
        activeFilter === "all" || item.dataset.directoryFilter === activeFilter;
      const searchableText = normalise(item.dataset.search || "");
      const matchesSearch = terms.every((term) => searchableText.includes(term));
      const isVisible = matchesFilter && matchesSearch;

      item.toggleAttribute("hidden", !isVisible);
      if (isVisible) visibleCount += 1;
    });

    sections.forEach((section) => {
      section.toggleAttribute(
        "hidden",
        !section.querySelector("[data-directory-item]:not([hidden])")
      );
    });

    filterButtons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.directoryFilter === activeFilter)
      );
    });

    clearButton.toggleAttribute("hidden", !searchInput.value);
    emptyState.toggleAttribute("hidden", visibleCount !== 0);

    if (!query && activeFilter === "all") {
      status.textContent = `Showing all ${items.length} entries.`;
    } else if (query) {
      status.textContent = `Showing ${visibleCount} of ${items.length} entries for “${searchInput.value.trim()}”.`;
    } else {
      status.textContent = `Showing ${visibleCount} of ${items.length} entries.`;
    }

    updateAddress();
  };

  form.addEventListener("submit", (event) => event.preventDefault());
  searchInput.value = initialParameters.get("q") || "";
  searchInput.addEventListener("input", applyDirectoryFilters);
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && searchInput.value) {
      searchInput.value = "";
      applyDirectoryFilters();
    }
  });

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    searchInput.focus();
    applyDirectoryFilters();
  });

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.directoryFilter;
      applyDirectoryFilters();
    });
  });

  applyDirectoryFilters();
  enhancement.removeAttribute("hidden");
}
