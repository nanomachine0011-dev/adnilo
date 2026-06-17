const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const siteHeader = document.querySelector(".site-header");
const navLinks = document.querySelectorAll("[data-site-nav] a");
const serviceMenuToggle = document.querySelector("[data-service-menu-toggle]");
const serviceDropdown = document.querySelector(".nav-dropdown");
const revealItems = document.querySelectorAll(".reveal");
const contactForms = document.querySelectorAll("[data-contact-form]");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileNavQuery = window.matchMedia("(max-width: 980px)");

document.documentElement.classList.add("motion-ready");
document.documentElement.dataset.motion = reducedMotionQuery.matches ? "reduced" : "full";

reducedMotionQuery.addEventListener?.("change", (event) => {
  document.documentElement.dataset.motion = event.matches ? "reduced" : "full";
});

function updateScrollState() {
  document.body.classList.toggle("has-scrolled", window.scrollY > 18);
}

function syncNavInteraction() {
  if (!siteNav) return;

  const isClosedOnMobile = mobileNavQuery.matches && !document.body.classList.contains("nav-open");
  siteNav.inert = isClosedOnMobile;

  if (isClosedOnMobile) {
    siteNav.setAttribute("aria-hidden", "true");
  } else {
    siteNav.removeAttribute("aria-hidden");
  }
}

function setNavOpen(isOpen) {
  document.body.classList.toggle("nav-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  syncNavInteraction();
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
syncNavInteraction();
window.addEventListener("scroll", updateScrollState, { passive: true });
mobileNavQuery.addEventListener?.("change", () => setNavOpen(false));

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

  if (document.body.classList.contains("nav-open") && siteHeader && !siteHeader.contains(event.target)) {
    setNavOpen(false);
  }
});

contactForms.forEach((form) => {
  const submitButton = form.querySelector('button[type="submit"]');
  const status = form.querySelector("[data-form-status]");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity() || !submitButton || !status) return;

    const originalButtonText = submitButton.textContent;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.page = `${document.title} (${window.location.pathname})`;

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    submitButton.textContent = "Sending...";
    status.textContent = "";
    status.className = "form-status";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "We could not send your enquiry. Please try again.");
      }

      form.reset();
      status.textContent = result.message || "Thanks. Your enquiry has been sent.";
      status.classList.add("is-success");
    } catch (error) {
      status.textContent = error.message || "We could not send your enquiry. Please try again.";
      status.classList.add("is-error");
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      submitButton.textContent = originalButtonText;
    }
  });
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
