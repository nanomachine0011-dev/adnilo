# Adnilo SEO Audit

Date: 2026-07-28  
Preferred domain: https://www.adnilo.co.uk

## Summary

Adnilo had a strong visual direction, but several SEO-critical elements were missing or only available after JavaScript ran. The most serious issue was that the service pages returned almost no main content in the initial HTML response. This made important pages look thin to crawlers even though visitors saw content after JavaScript executed.

## Mistakes Found

| Severity | Issue | Affected URLs | Fix completed |
| --- | --- | --- | --- |
| Critical | Service-page main content was injected by `service-page.js`, leaving `<main data-service-page></main>` in the initial HTML. Pre-fix production HTML had 0 H1s and 0 main-content words on service pages. | `/google-ads.html`, `/google-search-ads.html`, `/google-ads-audit.html`, `/fix-google-ads.html`, `/landing-pages.html`, `/conversion-tracking.html`, `/meta-ads.html`, `/retargeting-ads.html`, `/local-lead-generation.html` | Rebuilt every service page as static, crawlable HTML with one H1, substantial unique copy, FAQs, related links, forms and JSON-LD in the initial response. |
| High | No `sitemap.xml` existed. | Whole site | Added `sitemap.xml` containing all important indexable canonical URLs. |
| High | No `robots.txt` existed. | Whole site | Added `robots.txt` allowing crawl access and referencing the sitemap. |
| High | Service folder URLs returned duplicate content instead of redirecting to the canonical `.html` URLs. | `/google-ads/`, `/google-search-ads/`, `/google-ads-audit/`, `/fix-google-ads/`, `/landing-pages/`, `/conversion-tracking/`, `/meta-ads/`, `/retargeting-ads/`, `/local-lead-generation/` | Removed duplicate folder index files and added permanent redirects to the canonical `.html` pages. |
| High | Privacy Policy and Terms links pointed to the homepage instead of real legal pages. | Footer across the site | Added `privacy.html` and `terms.html`, updated footer links and marked the pages as requiring owner/legal review. |
| High | Missing self-referencing canonical tags, robots meta, Open Graph metadata and Twitter/X card metadata. | All important pages | Added unique canonical, robots, Open Graph and Twitter/X metadata to every page. |
| High | Missing structured data. | Homepage and service pages | Added Organization and WebSite JSON-LD on the homepage; added BreadcrumbList and Service JSON-LD on service pages; added BreadcrumbList on legal pages. |
| Medium | Homepage title/H1 did not clearly include the main search intent. | `/` | Updated the title and H1 around “Google Ads agency for local service businesses” while preserving the central hero style. |
| Medium | “Results” copy could sound like case studies even though no real case studies are present. | `/` | Reworded the section as honest outcomes Adnilo works to improve, without fake performance claims. |
| Medium | The 1.5 MB PNG hero image was oversized for production use. | Hero across pages | Replaced page usage with a 60 KB WebP and removed the unused PNG. |
| Medium | No branded 404 page existed. | Missing URLs | Added `404.html` with noindex metadata, homepage link and service links. |
| Medium | Header centring was affected by the logo and page max-width rather than the full viewport. | All pages | Reworked desktop header CSS into a full-width three-column grid with the nav/CTA group centred independently of the logo. |
| Medium | Internal linking between services was limited. | Service pages and footer | Added related-service cards with descriptive anchor text and expanded footer service links. |
| Medium | Front-end phone validation was incomplete. | All contact forms | Added browser-enforced phone pattern validation and matching server-side sanity validation. |
| Low | Accessibility could be improved with a skip link, stronger focus states and clearer mobile menu state. | All pages | Added skip link, visible focus styles and preserved mobile menu `aria-expanded`, `aria-hidden` and `inert` behaviour. |
| Low | Social-sharing image was missing. | All pages | Added a branded 1200x630 Open Graph image. |

## Changes Made

### Technical SEO

- Added `robots.txt`.
- Added `sitemap.xml`.
- Added `vercel.json` with canonical host redirect rules and permanent redirects from duplicate clean service paths to canonical `.html` URLs.
- Added self-referencing canonicals to every indexable page.
- Added robots meta tags to every page.
- Added a useful noindex `404.html`.
- Added cache/security headers in Vercel config.

### Content and Metadata

- Rebuilt the homepage title, meta description and H1 around the main intent: Google Ads for local service businesses.
- Rebuilt all 9 service landing pages with unique search intent, copy, headings, FAQs, related links and CTA wording.
- Added Privacy Policy and Terms pages based only on the real website form, Vercel hosting, Resend email delivery and Google Fonts usage.
- Kept British English throughout the new copy.

### Structured Data

- Homepage: Organization and WebSite JSON-LD.
- Service pages: BreadcrumbList and Service JSON-LD.
- Legal pages: BreadcrumbList JSON-LD.
- No review, rating, aggregate-rating, fake address, fake social profiles or fake case-study schema was added.

### Internal Linking

- Homepage service cards link to all service pages with descriptive text.
- Service pages link to related services using natural anchors.
- Footer now links to important services plus Privacy Policy, Terms and Contact.

### Performance

- Replaced the hero image usage with `assets/adnilo-hero-abstract.webp`.
- Removed the unused oversized PNG hero asset.
- Added `assets/adnilo-og-image.png` for social sharing.
- Added explicit image width/height and preload for the hero WebP.

### Accessibility

- Added a skip link.
- Added visible focus styles.
- Preserved reduced-motion support.
- Preserved accessible form labels.
- Improved mobile menu state management.
- Added browser-level phone validation and server-side phone validation.

## Service Pages Completed

| URL | Search intent | How it is different |
| --- | --- | --- |
| `/google-ads.html` | Ongoing Google Ads management | Focuses on monthly optimisation, search-term reviews, negative keywords, budget management, ad testing and reporting. |
| `/google-search-ads.html` | New or improved Google Search Ads campaign | Focuses on high-intent search campaigns, launch structure, local targeting and advert-to-landing-page relevance. |
| `/google-ads-audit.html` | Account audit and wasted-spend diagnosis | Focuses on diagnostics, tracking problems, search-term waste, location issues and audit deliverables. |
| `/fix-google-ads.html` | Rebuilding bad Google Ads campaigns | Focuses on poor structure, weak leads, broken tracking, what to retain and what to replace. |
| `/landing-pages.html` | PPC landing pages | Focuses on message match, mobile layout, trust sections, CTAs, forms, speed and tracking. |
| `/conversion-tracking.html` | Google Ads, GA4 and GTM conversion tracking | Focuses on forms, phone clicks, Google Ads calls, WhatsApp clicks, GTM, GA4 and duplicate conversion cleanup. |
| `/meta-ads.html` | Facebook and Instagram advertising management | Focuses on creative testing, audiences, lead forms, retargeting and how Meta differs from Search. |
| `/retargeting-ads.html` | Advertising to warm audiences | Focuses on website visitors, reminder ads, exclusions, frequency, privacy and when audiences may be too small. |
| `/local-lead-generation.html` | Complete local lead-generation system | Focuses on the full pipeline: local search, ads, landing pages, tracking, lead qualification and reporting. |

## Verification Completed

- Vercel build completed successfully locally.
- JavaScript syntax checks passed for `script.js`, `api/contact.js`, `tools/generate-site.mjs` and `tools/audit-site.mjs`.
- JSON checks passed for `site.webmanifest` and `vercel.json`.
- XML parsing passed for `sitemap.xml`.
- Local source audit reported:
  - 13 HTML pages.
  - 0 broken internal links.
  - 0 duplicate titles.
  - 0 duplicate meta descriptions.
  - 12 sitemap URLs.
  - Every indexable page has one H1.
  - Every service page has visible main content in initial HTML.
- Browser checks passed at 390px and 1440px across all important pages with no horizontal overflow and no console errors.
- Header centre checks passed at 1024px, 1280px, 1440px and 1920px with the nav/CTA group centred on the layout viewport.
- Breakpoint checks passed at 375px, 390px, 768px, 1024px, 1280px, 1440px and 1920px.
- Front-end phone validation was tested with invalid and valid examples.

## Remaining External SEO Work

These tasks cannot be fully completed inside the codebase:

- Submit the new sitemap in Google Search Console.
- Request reindexing for rebuilt service pages.
- Build genuine backlinks.
- Collect genuine reviews, if appropriate.
- Complete or optimise Google Business Profile, if the business has one.
- Add real case studies only when genuine client results are available and approved.
- Have the Privacy Policy and Terms reviewed by the site owner or a legal professional.
