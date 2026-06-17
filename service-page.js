const service = window.ADNILO_SERVICE;
const root = document.querySelector("[data-service-page]");
const scriptPath = document.currentScript?.getAttribute("src") || "";
const assetBase = service?.assetBase ?? (scriptPath.startsWith("../") ? "../" : "");

function esc(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function cards(items, className = "card") {
  const isResult = className.includes("result-card");
  return items
    .map(
      (item) => `
        <article class="${className} reveal">
          ${item.number ? `<span class="card-number">${esc(item.number)}</span>` : ""}
          ${isResult ? `<span>${esc(item.title)}</span>` : `<h3>${esc(item.title)}</h3>`}
          <p>${esc(item.text)}</p>
        </article>
      `
    )
    .join("");
}

function faqs(items) {
  return items
    .map(
      (item) => `
        <details class="faq-item reveal">
          <summary>${esc(item.question)}</summary>
          <p>${esc(item.answer)}</p>
        </details>
      `
    )
    .join("");
}

function visualList(items = [], className = "visual-list") {
  return `
    <ul class="${className}">
      ${items.map((item) => `<li>${esc(item)}</li>`).join("")}
    </ul>
  `;
}

function heroMetric(item) {
  return `
    <div class="visual-metric">
      <strong>${esc(item.value)}</strong>
      <span>${esc(item.label)}</span>
    </div>
  `;
}

function heroBar(item) {
  const value = Math.min(100, Math.max(12, Number(item.value) || 50));
  return `
    <span style="--bar: ${value}%;">
      <i>${esc(item.label)}</i>
    </span>
  `;
}

function heroVisual(service) {
  const visual = service.heroVisual || {};
  const type = visual.type || "dashboard";
  const title = visual.title || service.title;
  const label = visual.label || "Service visual";
  const metrics = visual.metrics || [];
  const items = visual.items || [];
  const secondary = visual.secondary || [];
  const bars = visual.bars || [];

  if (type === "search") {
    return `
      <div class="service-visual visual-search reveal" aria-label="${esc(label)}">
        <div class="search-card glass-panel">
          <div class="search-bar">${esc(visual.query || "service near me")}</div>
          ${(visual.results || []).map((item, index) => `
            <article class="search-result ${index === 0 ? "featured" : ""}">
              <span>${index === 0 ? "Ad" : "Organic"}</span>
              <strong>${esc(item.title)}</strong>
              <p>${esc(item.text)}</p>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  if (type === "audit") {
    return `
      <div class="service-visual visual-audit reveal" aria-label="${esc(label)}">
        <div class="audit-card glass-panel">
          <div class="visual-topline"><span>${esc(visual.kicker || "Audit snapshot")}</span><strong>${esc(title)}</strong></div>
          <div class="audit-score"><span>${esc(visual.score || "12")}</span><small>${esc(visual.scoreLabel || "issues found")}</small></div>
          ${visualList(items, "audit-list")}
        </div>
      </div>
    `;
  }

  if (type === "rebuild") {
    return `
      <div class="service-visual visual-rebuild reveal" aria-label="${esc(label)}">
        <div class="rebuild-board">
          <div class="rebuild-col before glass-panel">
            <span>Before</span>
            <h3>${esc(visual.beforeTitle || "Messy account")}</h3>
            ${visualList(items)}
          </div>
          <div class="rebuild-arrow">&rarr;</div>
          <div class="rebuild-col after glass-panel">
            <span>After</span>
            <h3>${esc(visual.afterTitle || "Clean structure")}</h3>
            ${visualList(secondary)}
          </div>
        </div>
      </div>
    `;
  }

  if (type === "browser") {
    return `
      <div class="service-visual visual-browser reveal" aria-label="${esc(label)}">
        <div class="browser-card glass-panel">
          <div class="browser-top"><span></span><span></span><span></span></div>
          <div class="browser-hero">
            <strong>${esc(title)}</strong>
            <p>${esc(visual.copy || "Clear offer, simple proof, obvious next step.")}</p>
          </div>
          <div class="browser-grid">
            ${items.map((item) => `<span>${esc(item)}</span>`).join("")}
          </div>
          <div class="browser-form">
            <span></span><span></span><button type="button">${esc(visual.button || "Enquire")}</button>
          </div>
        </div>
      </div>
    `;
  }

  if (type === "tracking") {
    return `
      <div class="service-visual visual-tracking reveal" aria-label="${esc(label)}">
        <div class="tracking-card glass-panel">
          <div class="visual-topline"><span>${esc(visual.kicker || "Tracking map")}</span><strong>${esc(title)}</strong></div>
          <div class="tracking-flow">
            ${items.map((item) => `<span>${esc(item)}</span>`).join("")}
          </div>
          <div class="metric-row">
            ${metrics.map(heroMetric).join("")}
          </div>
        </div>
      </div>
    `;
  }

  if (type === "meta") {
    return `
      <div class="service-visual visual-meta reveal" aria-label="${esc(label)}">
        <div class="ad-stack">
          ${(visual.cards || []).map((card, index) => `
            <article class="meta-card glass-panel card-${index + 1}">
              <span>${esc(card.platform)}</span>
              <strong>${esc(card.title)}</strong>
              <p>${esc(card.text)}</p>
              <button type="button">${esc(card.cta || "Learn more")}</button>
            </article>
          `).join("")}
        </div>
      </div>
    `;
  }

  if (type === "journey") {
    return `
      <div class="service-visual visual-journey reveal" aria-label="${esc(label)}">
        <div class="journey-card glass-panel">
          <div class="journey-loop">
            ${items.map((item) => `<span>${esc(item)}</span>`).join("")}
          </div>
          <div class="journey-note">
            <strong>${esc(title)}</strong>
            <p>${esc(visual.copy || "Warm visitors get useful reminders, not noise.")}</p>
          </div>
        </div>
      </div>
    `;
  }

  if (type === "pipeline") {
    return `
      <div class="service-visual visual-pipeline reveal" aria-label="${esc(label)}">
        <div class="pipeline-card glass-panel">
          <div class="visual-topline"><span>${esc(visual.kicker || "Lead system")}</span><strong>${esc(title)}</strong></div>
          <div class="pipeline-flow">
            ${items.map((item) => `<span>${esc(item)}</span>`).join("")}
          </div>
          ${visualList(secondary, "pipeline-list")}
        </div>
      </div>
    `;
  }

  return `
    <div class="service-visual visual-dashboard reveal" aria-label="${esc(label)}">
      <div class="dashboard-card glass-panel">
        <div class="visual-topline"><span>${esc(visual.kicker || "Campaign view")}</span><strong>${esc(title)}</strong></div>
        <div class="metric-row">
          ${metrics.map(heroMetric).join("")}
        </div>
        <div class="chart-bars">
          ${bars.map(heroBar).join("")}
        </div>
        ${visualList(items)}
      </div>
    </div>
  `;
}

function contactForm(buttonText) {
  return `
    <form class="contact-form reveal" action="mailto:hello@adnilo.co" method="post" enctype="text/plain">
      <label>
        <span>Name</span>
        <input type="text" name="name" autocomplete="name" required>
      </label>
      <label>
        <span>Business name</span>
        <input type="text" name="business_name" autocomplete="organization" required>
      </label>
      <label>
        <span>Website</span>
        <input type="url" name="website" placeholder="https://">
      </label>
      <label>
        <span>Phone</span>
        <input type="tel" name="phone" autocomplete="tel" required>
      </label>
      <label>
        <span>Monthly ad budget</span>
        <select name="monthly_ad_budget" required>
          <option value="">Select budget</option>
          <option>Under GBP 1,000</option>
          <option>GBP 1,000 - GBP 3,000</option>
          <option>GBP 3,000 - GBP 7,500</option>
          <option>GBP 7,500+</option>
        </select>
      </label>
      <label class="full">
        <span>Message</span>
        <textarea name="message" rows="5" placeholder="Tell us what you sell, where you work, and what you want fixed."></textarea>
      </label>
      <button class="btn btn-primary form-button" type="submit">${esc(buttonText)}</button>
    </form>
  `;
}

if (service && root) {
  document.title = `${service.title} | Adnilo`;
  root.className = `service-page ${esc(service.variant || "service-default")}`;
  root.innerHTML = `
    <section class="hero service-hero" aria-labelledby="service-title">
      <img class="hero-art" src="${esc(assetBase)}assets/adnilo-hero-abstract.png" alt="" aria-hidden="true" style="object-position: ${esc(service.heroImagePosition || "center")};">
      <div class="hero-wash" aria-hidden="true"></div>
      <div class="service-floats" aria-hidden="true">
        <span class="service-float service-float-one"></span>
        <span class="service-float service-float-two"></span>
        <span class="service-float service-float-three"></span>
      </div>
      <div class="container service-hero-layout">
        <div class="service-hero-copy reveal">
          <p class="eyebrow">${esc(service.heroLabel || service.title)}</p>
          <h1 id="service-title">${esc(service.headline)}</h1>
          <p class="hero-subtitle">${esc(service.intro)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#contact">${esc(service.cta)}</a>
          </div>
        </div>
        ${heroVisual(service)}
      </div>
    </section>

    <section class="trust-strip" aria-label="Service focus">
      <div class="container">
        <p>${esc(service.trust)}</p>
      </div>
    </section>

    <section class="section about service-problem" id="problem" aria-labelledby="problem-title">
      <div class="container two-column">
        <div class="section-copy reveal">
          <p class="eyebrow dark">${esc(service.problem.label || "The problem")}</p>
          <h2 id="problem-title">${esc(service.problem.title)}</h2>
        </div>
        <div class="body-copy reveal">
          <p>${esc(service.problem.text)}</p>
        </div>
      </div>
    </section>

    <section class="section services service-work" id="what-we-do" aria-labelledby="work-title">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow dark">${esc(service.workLabel || "What we do")}</p>
          <h2 id="work-title">${esc(service.workTitle)}</h2>
        </div>
        <div class="card-grid ${esc(service.workGrid || "three")}">
          ${cards(service.whatWeDo)}
        </div>
      </div>
    </section>

    <section class="section steps-section service-process" id="how-it-works" aria-labelledby="process-title">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow dark">${esc(service.processLabel || "How it works")}</p>
          <h2 id="process-title">${esc(service.processTitle || "Simple process. Clear next steps.")}</h2>
        </div>
        <div class="card-grid ${esc(service.processGrid || "four")}">
          ${cards(service.howItWorks)}
        </div>
      </div>
    </section>

    <section class="section results service-outcomes" id="outcomes" aria-labelledby="outcomes-title">
      <div class="container">
        <div class="section-heading light reveal">
          <p class="eyebrow light">${esc(service.outcomesLabel || "Outcomes")}</p>
          <h2 id="outcomes-title">${esc(service.outcomesTitle)}</h2>
        </div>
        <div class="result-grid ${esc(service.outcomesGrid || "")}">
          ${cards(service.outcomes, "result-card")}
        </div>
      </div>
    </section>

    <section class="section founder service-faq" id="faq" aria-labelledby="faq-title">
      <div class="container">
        <div class="section-heading reveal">
          <p class="eyebrow dark">${esc(service.faqLabel || "FAQ")}</p>
          <h2 id="faq-title">${esc(service.faqTitle || "Questions local businesses ask before starting.")}</h2>
        </div>
        <div class="faq-list">
          ${faqs(service.faqs)}
        </div>
      </div>
    </section>

    <section class="section contact service-contact" id="contact" aria-labelledby="contact-title">
      <div class="container contact-layout">
        <div class="section-copy reveal">
          <p class="eyebrow dark">${esc(service.contactLabel || "Talk to Adnilo")}</p>
          <h2 id="contact-title">${esc(service.contactTitle)}</h2>
          <p>${esc(service.contactText)}</p>
        </div>
        ${contactForm(service.cta)}
      </div>
    </section>
  `;
}
