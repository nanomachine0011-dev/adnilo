const menuToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelectorAll("[data-site-nav] a");
const serviceMenuToggle = document.querySelector("[data-service-menu-toggle]");
const serviceDropdown = document.querySelector(".nav-dropdown");
const revealItems = document.querySelectorAll(".reveal");

function updateScrollState() {
  document.body.classList.toggle("has-scrolled", window.scrollY > 18);
}

function setNavOpen(isOpen) {
  document.body.classList.toggle("nav-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
}

function setServiceMenuOpen(isOpen) {
  serviceDropdown?.classList.toggle("dropdown-open", isOpen);
  serviceMenuToggle?.setAttribute("aria-expanded", String(isOpen));
}

menuToggle?.addEventListener("click", () => {
  setNavOpen(!document.body.classList.contains("nav-open"));
});

serviceMenuToggle?.addEventListener("focus", () => {
  setServiceMenuOpen(true);
});

serviceDropdown?.addEventListener("mouseenter", () => {
  setServiceMenuOpen(true);
});

serviceDropdown?.addEventListener("focusout", () => {
  window.setTimeout(() => {
    if (!serviceDropdown.contains(document.activeElement)) {
      setServiceMenuOpen(false);
    }
  }, 0);
});

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setNavOpen(false);
    setServiceMenuOpen(false);
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setNavOpen(false);
    setServiceMenuOpen(false);
  }
});

document.addEventListener("click", (event) => {
  const toggle = event.target.closest("[data-service-menu-toggle]");

  if (toggle) {
    const dropdown = toggle.closest(".nav-dropdown");
    const isOpen = dropdown?.classList.contains("dropdown-open");

    dropdown?.classList.toggle("dropdown-open", !isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
    return;
  }

  if (serviceDropdown && !serviceDropdown.contains(event.target)) {
    setServiceMenuOpen(false);
  }
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
