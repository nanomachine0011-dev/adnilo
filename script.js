const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const siteHeader = document.querySelector(".site-header");
const navLinks = document.querySelectorAll("[data-site-nav] a");
const serviceMenuToggle = document.querySelector("[data-service-menu-toggle]");
const serviceDropdown = document.querySelector(".nav-dropdown");
const revealItems = document.querySelectorAll(".reveal");
const contactForms = document.querySelectorAll("[data-contact-form]");
const packageLinks = document.querySelectorAll("[data-package-select-link]");
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileNavQuery = window.matchMedia("(max-width: 980px)");
const formSuccessMessage = "Thanks — your enquiry has been sent.";
const formErrorMessage = "We could not send your enquiry. Please try again.";
const packageChoices = {
  starter: { value: "Starter - From £300", name: "Starter", price: "From £300" },
  growth: { value: "Growth - £599", name: "Growth", price: "£599" },
  scale: { value: "Scale - £999+", name: "Scale", price: "£999+" },
};
const selectedPackageSlug = new URLSearchParams(window.location.search).get("package")?.toLowerCase() || "";

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

  if (isOpen) {
    window.setTimeout(() => siteNav?.querySelector("button, a")?.focus({ preventScroll: true }), 0);
  } else {
    setServiceMenuOpen(false);
    menuToggle?.focus({ preventScroll: true });
  }
}

function setServiceMenuOpen(isOpen) {
  serviceDropdown?.classList.toggle("dropdown-open", isOpen);
  serviceMenuToggle?.setAttribute("aria-expanded", String(isOpen));
}

menuToggle?.addEventListener("click", () => {
  setNavOpen(!document.body.classList.contains("nav-open"));
});

serviceMenuToggle?.addEventListener("click", (event) => {
  event.stopPropagation();

  if (mobileNavQuery.matches) {
    const isOpen = serviceDropdown?.classList.contains("dropdown-open");
    setServiceMenuOpen(!isOpen);
    return;
  }

  setServiceMenuOpen(true);
});

serviceMenuToggle?.addEventListener("focus", () => {
  if (!mobileNavQuery.matches) {
    setServiceMenuOpen(true);
  }
});

serviceDropdown?.addEventListener("mouseenter", () => {
  if (!mobileNavQuery.matches) {
    setServiceMenuOpen(true);
  }
});

serviceDropdown?.addEventListener("focusout", () => {
  if (mobileNavQuery.matches) return;

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
  if (serviceDropdown && !serviceDropdown.contains(event.target)) {
    setServiceMenuOpen(false);
  }

  if (document.body.classList.contains("nav-open") && siteHeader && !siteHeader.contains(event.target)) {
    setNavOpen(false);
  }
});

function selectedPackageFromSelect(select) {
  const option = select?.selectedOptions?.[0];
  if (!option?.value) return null;

  return {
    slug: option.dataset.packageSlug || "",
    name: option.dataset.packageName || option.textContent.trim(),
    price: option.dataset.packagePrice || "",
    value: option.value,
  };
}

function updatePackageSummary(form) {
  const wrapper = form.closest("[data-contact-form-wrap]");
  const summary = wrapper?.querySelector("[data-package-summary]");
  const nameTarget = wrapper?.querySelector("[data-selected-package-name]");
  const noteTarget = wrapper?.querySelector("[data-selected-package-note]");
  const selected = selectedPackageFromSelect(form.querySelector("[data-package-select]"));

  if (!summary || !nameTarget || !noteTarget) return;

  if (!selected) {
    summary.hidden = true;
    nameTarget.textContent = "";
    noteTarget.textContent = "";
    return;
  }

  summary.hidden = false;
  nameTarget.textContent = `${selected.name} package`;
  noteTarget.textContent = `${selected.price} selected. You can still change this before sending your enquiry.`;
}

function preselectPackage(form) {
  const select = form.querySelector("[data-package-select]");
  const selectedPackage = packageChoices[selectedPackageSlug];
  if (!select || !selectedPackage) return;

  select.value = selectedPackage.value;
}

function trackPackageSelection(link) {
  const detail = {
    package_name: link.dataset.packageName || "",
    package_price: link.dataset.packagePrice || "",
    source_page: link.dataset.packageSource || window.location.pathname || "/",
  };

  if (window.dataLayer && typeof window.dataLayer.push === "function") {
    window.dataLayer.push({ event: "package_selected", ...detail });
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", "package_selected", detail);
  }

  window.dispatchEvent(new CustomEvent("package_selected", { detail }));
}

packageLinks.forEach((link) => {
  link.addEventListener("click", () => trackPackageSelection(link));
});

contactForms.forEach((form) => {
  const submitButton = form.querySelector('button[type="submit"]');
  const status = form.querySelector("[data-form-status]");
  const packageSelect = form.querySelector("[data-package-select]");

  preselectPackage(form);
  updatePackageSummary(form);

  packageSelect?.addEventListener("change", () => updatePackageSummary(form));

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity() || !submitButton || !status) return;

    const originalButtonText = submitButton.textContent;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    payload.page = `${document.title} (${window.location.pathname}${window.location.search})`;
    const packageValue = packageSelect?.value || "";

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
        throw new Error(result.error || formErrorMessage);
      }

      form.reset();
      if (packageSelect) packageSelect.value = packageValue;
      updatePackageSummary(form);
      status.textContent = result.message || formSuccessMessage;
      status.classList.add("is-success");
    } catch (error) {
      status.textContent = error.message || formErrorMessage;
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
