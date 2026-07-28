import { writeFileSync } from "node:fs";

const siteUrl = "https://www.adnilo.co.uk";
const today = "2026-07-28";
const ogImage = `${siteUrl}/assets/adnilo-og-image.png`;
const heroImage = "/assets/adnilo-hero-abstract.webp";

const services = [
  {
    slug: "google-ads",
    variant: "variant-google-ads",
    name: "Google Ads Management",
    intent: "Ongoing professional Google Ads management for local service businesses.",
    primaryKeyword: "Google Ads management for local service businesses",
    title: "Google Ads Management for Local Services | Adnilo",
    description: "Ongoing Google Ads management for local service businesses that want better calls, quote requests and clearer reporting without wasted spend.",
    label: "Ongoing Google Ads management",
    h1: "Google Ads management for local service businesses.",
    intro: "Adnilo manages Google Ads accounts for local service businesses that need a steady, measured way to win more useful enquiries from people already searching.",
    cta: "Book Free Google Ads Audit",
    trust: "For cleaning companies, clinics, trades, dentists, gyms and local service teams that need active monthly management.",
    visualType: "dashboard",
    visualTitle: "Monthly campaign workflow",
    visualItems: ["Search terms reviewed", "Budgets adjusted", "Ads tested", "Enquiries reported"],
    visualMetrics: [
      ["Intent", "matched to real services"],
      ["Waste", "reduced with negatives"],
      ["Leads", "tracked from calls and forms"],
    ],
    sections: [
      {
        type: "split",
        id: "management",
        label: "Built for ongoing improvement",
        title: "Your account needs more than a launch and a monthly glance.",
        text: "Google Ads changes quickly. Search terms shift, competitors move, budgets behave differently and weak enquiries can creep in. Ongoing management keeps the account focused on the services, locations and searches most likely to create useful calls and quote requests.",
      },
      {
        type: "cards",
        id: "included",
        label: "What is managed",
        title: "Campaign work that happens every month.",
        items: [
          ["Keyword and search-term optimisation", "We review the real searches triggering adverts, add negative keywords and refine match types so spend stays closer to buyer intent."],
          ["Bid and budget management", "Budgets are guided by enquiry quality, location performance and the services that make commercial sense for your business."],
          ["Ad testing and message updates", "Search adverts are refreshed with clearer offers, stronger service language and better calls to action."],
          ["Conversion tracking checks", "Calls, forms and key website actions are checked so reports do not drift away from reality."],
          ["Landing-page feedback", "If the page is hurting conversions, we make practical recommendations or connect the account to a stronger landing page."],
          ["Plain monthly reporting", "You see what changed, what enquiries came through and what should happen next without jargon-heavy reporting."],
        ],
      },
      {
        type: "steps",
        id: "first-month",
        label: "First month",
        title: "What happens when Adnilo takes over.",
        items: [
          ["Review", "We inspect campaigns, tracking, search terms, location settings and landing pages before making major changes."],
          ["Prioritise", "We decide what needs fixing first: wasted search terms, broken conversions, weak adverts or budget structure."],
          ["Optimise", "We make focused changes and monitor the account closely so early decisions are based on real data."],
          ["Report", "You receive a clear summary of what was found, what changed and what we recommend next."],
        ],
      },
      {
        type: "outcomes",
        id: "outcomes",
        label: "Management outcomes",
        title: "What ongoing management is designed to improve.",
        items: [
          ["Cleaner search traffic", "More budget goes towards searches that match the services you actually want to sell."],
          ["Less wasted spend", "Irrelevant terms, weak locations and poor-fit enquiries are reduced over time."],
          ["Clearer lead tracking", "Calls and forms are connected back to campaign activity wherever the setup allows."],
          ["Better decisions", "Spend increases only when the account has enough evidence to support it."],
        ],
      },
    ],
    faqs: [
      ["Is this for new or existing Google Ads accounts?", "Both. If you already have an account, we audit it first. If you are starting from scratch, we build the campaign structure before management begins."],
      ["Do you manage Performance Max?", "Where it makes sense. For local service lead generation, we usually make sure Search campaigns and tracking are clean before relying on broader campaign types."],
      ["How often do you optimise the account?", "The account is reviewed regularly, with weekly optimisation work and plain monthly reporting."],
      ["Will you write the adverts?", "Yes. Ad copy, extensions and message testing are part of ongoing management."],
    ],
    related: ["conversion-tracking", "landing-pages", "google-ads-audit", "google-search-ads"],
  },
  {
    slug: "google-search-ads",
    variant: "variant-search",
    name: "Google Search Ads",
    intent: "Launching or improving Google Search Ads for high-intent local searches.",
    primaryKeyword: "Google Search Ads for local businesses",
    title: "Google Search Ads for Local Businesses | Adnilo",
    description: "Google Search Ads campaigns for local businesses that want to appear when customers are actively searching and ready to enquire.",
    label: "High-intent search campaigns",
    h1: "Show up when local customers are ready to buy.",
    intro: "Search campaigns put your service in front of people already typing the problem, treatment, repair or provider they need. Adnilo builds Search campaigns around intent, location and a clear path to enquiry.",
    cta: "Build My Search Campaign",
    trust: "For local businesses that want a focused Search campaign rather than broad, unfocused advertising.",
    visualType: "search",
    visualTitle: "Search to enquiry journey",
    visualItems: ["Customer searches", "Advert appears", "Landing page matches", "Call or form enquiry"],
    sections: [
      {
        type: "cards",
        id: "journey",
        label: "Search intent",
        title: "The campaign follows the customer’s search path.",
        items: [
          ["Keyword research", "We map the phrases people use when they are looking for your service, including urgent, local and quote-led searches."],
          ["Tight ad groups", "Campaigns are grouped by service theme so adverts and landing pages stay relevant."],
          ["Local targeting", "Locations are set carefully so you are not paying for clicks from places you cannot serve."],
          ["Call-focused routes", "Phone calls, forms and booking actions are made easy to reach from advert to landing page."],
        ],
      },
      {
        type: "split",
        id: "search-management-difference",
        label: "New campaign focus",
        title: "This page is about Search campaigns, not full account management.",
        text: "A Search campaign launch is about building the right foundation: keywords, adverts, local targeting, negative keywords and landing-page relevance. Ongoing management can continue afterwards, but the launch work is focused on getting the first structure right.",
      },
      {
        type: "steps",
        id: "launch-process",
        label: "Launch process",
        title: "From search demand to enquiry route.",
        items: [
          ["Map searches", "We identify services, locations and search phrases with the strongest commercial intent."],
          ["Build structure", "Campaigns and ad groups are separated so budget and reporting stay readable."],
          ["Write adverts", "Search adverts use simple, specific copy that matches the service and next step."],
          ["Connect the page", "Traffic is sent to the most relevant landing page, with tracking checked before launch."],
        ],
      },
      {
        type: "outcomes",
        id: "outcomes",
        label: "Search campaign aims",
        title: "What a good Search campaign should make clearer.",
        items: [
          ["Which searches matter", "You can see which search themes are producing useful enquiries."],
          ["Which areas respond", "Location performance becomes easier to judge and adjust."],
          ["Which adverts work", "Messaging can be tested against calls and forms, not just clicks."],
          ["Where to optimise next", "Search-term data shows what to keep, exclude or expand."],
        ],
      },
    ],
    faqs: [
      ["Are Search Ads the same as Google Ads management?", "No. Search Ads are one campaign type. Management is the ongoing work after campaigns are live."],
      ["Can you build a campaign for one service only?", "Yes. A focused campaign for one profitable service is often cleaner than advertising everything at once."],
      ["Do you include negative keywords?", "Yes. Negative keywords are part of the build and continue to be refined after launch."],
      ["Can Search Ads send people to my existing website?", "Yes, if the page is relevant and conversion-friendly. If not, we will recommend a dedicated landing page."],
    ],
    related: ["landing-pages", "conversion-tracking", "google-ads", "local-lead-generation"],
  },
  {
    slug: "google-ads-audit",
    variant: "variant-audit",
    name: "Google Ads Audit",
    intent: "Diagnostic Google Ads audit for businesses that want to find waste and tracking problems.",
    primaryKeyword: "Google Ads audit",
    title: "Google Ads Audit for Wasted Spend | Adnilo",
    description: "A practical Google Ads audit for local businesses that need to find wasted spend, weak tracking, poor search terms and campaign problems.",
    label: "Account health check",
    h1: "Find out where your Google Ads budget is being wasted.",
    intro: "If the account looks busy but the leads do not feel right, an audit gives you a clearer view of what is happening before you spend more money.",
    cta: "Request Free Audit",
    trust: "For businesses already running Google Ads and unsure whether the account is set up properly.",
    visualType: "audit",
    visualTitle: "Audit report snapshot",
    visualItems: ["Tracking checked", "Search terms reviewed", "Locations inspected", "Budget leaks flagged"],
    sections: [
      {
        type: "split",
        id: "why-audit",
        label: "Before you scale",
        title: "More budget will not fix an account that is leaking.",
        text: "An audit is useful when clicks are coming in but the enquiries are weak, expensive or hard to trace. We look at the account structure, conversion actions, keyword targeting, search terms, location settings, bidding and landing-page route before recommending changes.",
      },
      {
        type: "cards",
        id: "audit-checks",
        label: "What gets checked",
        title: "The audit looks for the problems that distort performance.",
        items: [
          ["Conversion tracking", "We check whether calls, forms and key actions are recorded once, in the right platform and with the right value."],
          ["Search-term quality", "We inspect the actual searches behind the clicks and flag irrelevant or low-intent patterns."],
          ["Location settings", "We review where adverts show and whether the account is reaching people outside the useful service area."],
          ["Campaign structure", "We look for blended services, confusing budgets and ad groups that make decisions harder."],
          ["Bidding decisions", "We check whether automated bidding has enough clean data to work sensibly."],
          ["Landing-page fit", "We review whether the page matches the search and makes it easy to call or enquire."],
        ],
      },
      {
        type: "outcomes",
        id: "outcomes",
        label: "Audit deliverables",
        title: "What you receive afterwards.",
        items: [
          ["Clear issue list", "The main account problems are explained in plain English."],
          ["Priority actions", "You can see what should be fixed first and what can wait."],
          ["Tracking notes", "We identify conversion issues that may be misleading campaign decisions."],
          ["Next-step options", "You can decide whether to fix the account yourself, rebuild it or move into management."],
        ],
      },
      {
        type: "steps",
        id: "audit-process",
        label: "Audit process",
        title: "A practical diagnostic, not a vague opinion.",
        items: [
          ["Access", "You provide read-only or agreed account access so the setup can be inspected safely."],
          ["Review", "We work through tracking, keywords, search terms, ads, budgets, locations and landing pages."],
          ["Explain", "Findings are grouped by severity and commercial impact."],
          ["Recommend", "You get a clean set of fixes and a suggested route forward."],
        ],
      },
    ],
    faqs: [
      ["Do I need to move my account to Adnilo for an audit?", "No. The audit can be completed as a standalone review."],
      ["Will you change my campaigns during the audit?", "Not without agreement. The audit is designed to inspect first and recommend clearly."],
      ["Can you audit tracking as well as campaigns?", "Yes. Tracking is one of the most important parts of the audit because poor data can make good decisions difficult."],
      ["Is the audit useful if I only spend a small budget?", "Yes, especially if wasted spend is making it hard to judge whether Google Ads can work for you."],
    ],
    related: ["fix-google-ads", "conversion-tracking", "google-ads", "landing-pages"],
  },
  {
    slug: "fix-google-ads",
    variant: "variant-rebuild",
    name: "Campaign Rebuild",
    intent: "Rebuilding poor-performing Google Ads accounts without throwing away useful history.",
    primaryKeyword: "fix Google Ads campaign",
    title: "Fix Google Ads Campaigns That Waste Spend | Adnilo",
    description: "Campaign rebuilds for local businesses whose Google Ads accounts spend money but produce weak leads, messy data or unclear performance.",
    label: "Campaign rebuilds",
    h1: "Running Google Ads but not getting enough good leads?",
    intro: "A poor-performing account is not always broken forever. Often it needs a cleaner structure, better tracking, sharper searches and a relaunch plan that keeps useful history in view.",
    cta: "Fix My Campaign",
    trust: "For local businesses that have already spent money on Google Ads and need the account cleaned up properly.",
    visualType: "rebuild",
    visualTitle: "Before and after account structure",
    visualItems: ["Mixed services", "Broad searches", "Duplicate conversions"],
    visualSecondary: ["Service-led campaigns", "Cleaner negatives", "Tracked enquiries"],
    sections: [
      {
        type: "cards",
        id: "signs",
        label: "Signs you need a rebuild",
        title: "Common symptoms of a campaign that needs fixing.",
        items: [
          ["Expensive clicks, weak leads", "The account gets traffic, but the calls and forms are poor quality or too expensive."],
          ["Messy keywords", "Broad, blended or duplicated keywords make it difficult to know what is actually working."],
          ["Irrelevant search terms", "Budget is spent on searches that do not match the service, location or customer type you want."],
          ["Broken tracking", "Conversions are missing, duplicated or inflated by actions that are not real leads."],
          ["Bad structure", "Services, locations and budgets are mixed together, which makes optimisation clumsy."],
          ["No clear next step", "Reports show activity, but nobody can explain what should change next."],
        ],
      },
      {
        type: "split",
        id: "rebuild-approach",
        label: "Clean up before scaling",
        title: "Before we scale, we fix the leaks.",
        text: "A rebuild separates what should be kept from what should be replaced. Useful historical search-term data can inform the new structure, while weak settings, poor tracking and confusing campaign layouts are removed or rebuilt carefully.",
      },
      {
        type: "steps",
        id: "rebuild-process",
        label: "Rebuild process",
        title: "A controlled reset for the account.",
        items: [
          ["Diagnose", "We audit the existing setup and identify which parts are creating waste or confusion."],
          ["Preserve", "Useful search-term, conversion and location insights are kept in view so history is not ignored."],
          ["Rebuild", "Campaigns, ad groups, negatives, adverts and tracking are rebuilt around services and intent."],
          ["Relaunch", "The new structure is monitored closely so early signals can be corrected quickly."],
        ],
      },
      {
        type: "outcomes",
        id: "outcomes",
        label: "After relaunch",
        title: "What the rebuild is designed to make easier.",
        items: [
          ["Cleaner decisions", "Services, budgets and locations are easier to judge separately."],
          ["Better search control", "Irrelevant and low-intent queries can be spotted and excluded faster."],
          ["More trustworthy data", "Conversion actions are checked before performance is judged."],
          ["A stronger base", "The account is easier to manage month after month."],
        ],
      },
    ],
    faqs: [
      ["Do you delete the old campaigns?", "Not automatically. We review what should be paused, kept for reference or rebuilt so useful history is not ignored."],
      ["Can a rebuild fix bad tracking?", "Tracking is usually fixed early because poor conversion data can make the whole account harder to manage."],
      ["Will performance dip during a rebuild?", "Any major account change can need a learning period. The rebuild is planned to reduce avoidable disruption."],
      ["What happens after the rebuild?", "Most clients move into ongoing management so the new structure is monitored and improved."],
    ],
    related: ["google-ads", "google-ads-audit", "conversion-tracking", "landing-pages"],
  },
  {
    slug: "landing-pages",
    variant: "variant-pages",
    name: "Landing Pages",
    intent: "Conversion-focused PPC landing pages for paid advertising traffic.",
    primaryKeyword: "PPC landing pages for local businesses",
    title: "PPC Landing Pages for Local Leads | Adnilo",
    description: "Conversion-focused landing pages for paid advertising, built around clear copy, mobile layouts, calls, forms, tracking and trust.",
    label: "Conversion-focused pages",
    h1: "Landing pages built to turn clicks into enquiries.",
    intro: "A paid click needs a focused page. Adnilo builds landing pages that match the advert, explain the offer simply and make the next step easy on mobile and desktop.",
    cta: "Build My Landing Page",
    trust: "For local service businesses sending paid traffic to pages that need to convert better.",
    visualType: "browser",
    visualTitle: "Landing page anatomy",
    visualItems: ["Clear headline", "Service proof", "Short form", "Phone CTA"],
    sections: [
      {
        type: "split",
        id: "message-match",
        label: "Advert to page fit",
        title: "The page should continue the conversation started by the advert.",
        text: "When someone clicks a paid advert, they should land on a page that matches the service, location and promise they just saw. A generic homepage can work for some visitors, but paid campaigns often need a cleaner route to a call or form enquiry.",
      },
      {
        type: "cards",
        id: "page-elements",
        label: "Page elements",
        title: "What a paid-ad landing page needs.",
        items: [
          ["Mobile-first layout", "Most local enquiries happen on phones, so the page needs to be easy to scan, tap and submit."],
          ["Clear calls to action", "Phone and form routes are visible without making the page feel pushy or cluttered."],
          ["Trust sections", "Useful proof points, service details and reassurance help visitors decide whether to enquire."],
          ["Conversion copy", "The copy explains who the service is for, what happens next and why the visitor should act."],
          ["Fast loading", "Heavy layouts are avoided so paid clicks are not wasted waiting for a page to appear."],
          ["Tracking setup", "Forms, calls and key clicks are tracked so the page can be judged properly."],
        ],
      },
      {
        type: "outcomes",
        id: "outcomes",
        label: "Conversion improvements",
        title: "What the page is designed to improve.",
        items: [
          ["More useful enquiries", "The page makes it clearer who should enquire and what they should do next."],
          ["Better campaign relevance", "The advert, keyword and landing page message line up more closely."],
          ["Cleaner tracking", "Calls and forms become easier to connect to campaign activity."],
          ["Less friction", "Visitors do not need to dig through a full website to find the next step."],
        ],
      },
      {
        type: "steps",
        id: "build-process",
        label: "Build process",
        title: "From advert intent to landing-page layout.",
        items: [
          ["Plan", "We define the service, audience, location and action the page should support."],
          ["Write", "The copy is built around the visitor’s question and the business’s practical next step."],
          ["Design", "The layout is built for scanning, mobile use and clear enquiry routes."],
          ["Track", "Forms, calls and important clicks are tested before traffic is sent to the page."],
        ],
      },
    ],
    faqs: [
      ["Can you improve my existing landing page?", "Yes. If the current page has a solid base, we can improve copy, layout, calls to action and tracking."],
      ["Do landing pages replace my website?", "No. They usually support paid campaigns while your main website continues to serve broader visitors."],
      ["Do you write the page copy?", "Yes. Conversion-focused copy is part of the landing-page work."],
      ["Can you track phone calls from the page?", "We can track phone clicks and, where the system allows, call conversions through the advertising platforms."],
    ],
    related: ["conversion-tracking", "google-search-ads", "google-ads", "local-lead-generation"],
  },
  {
    slug: "conversion-tracking",
    variant: "variant-tracking",
    name: "Conversion Tracking",
    intent: "Installing or repairing Google Ads, GA4 and GTM conversion tracking.",
    primaryKeyword: "conversion tracking setup",
    title: "Conversion Tracking Setup for Ads | Adnilo",
    description: "Conversion tracking setup for Google Ads, GA4, GTM, forms, phone clicks, WhatsApp clicks and lead actions for local businesses.",
    label: "Measurement setup",
    h1: "Track every call, form and enquiry properly.",
    intro: "Good advertising decisions need clean tracking. Adnilo sets up and repairs conversion tracking so you can see which campaigns are creating the actions that matter.",
    cta: "Set Up Tracking",
    trust: "For businesses that need to stop guessing which adverts produce calls, forms and useful enquiries.",
    visualType: "tracking",
    visualTitle: "Advert to recorded action",
    visualItems: ["Advert", "Website", "Call or form", "Conversion"],
    visualMetrics: [
      ["Forms", "tested after submit"],
      ["Calls", "tracked where possible"],
      ["Events", "deduplicated"],
    ],
    sections: [
      {
        type: "cards",
        id: "tracked-actions",
        label: "What can be tracked",
        title: "Lead actions made visible in the right places.",
        items: [
          ["Website form submissions", "Forms can be tracked through thank-you pages, events or the site’s submission behaviour."],
          ["Telephone clicks", "Phone-number clicks can be measured so mobile enquiry routes are not invisible."],
          ["Calls from Google Ads", "Where call assets and call reporting are available, campaign calls can be connected to the account."],
          ["WhatsApp clicks", "Clicks to WhatsApp can be tracked as click actions, while avoiding the false claim that a click proves a conversation."],
          ["GA4 and GTM setup", "Google Analytics 4 and Google Tag Manager can be configured so events are easier to manage."],
          ["Duplicate conversion cleanup", "Weak, duplicate or misleading conversions are removed or separated from primary optimisation goals."],
        ],
      },
      {
        type: "split",
        id: "bad-data",
        label: "Data quality",
        title: "If tracking is wrong, every ad decision gets fuzzy.",
        text: "A campaign can look successful while counting the wrong actions, or look weak because real enquiries are not recorded. Clean conversion tracking helps separate useful leads from vanity events and gives bidding systems better signals.",
      },
      {
        type: "steps",
        id: "tracking-process",
        label: "Setup process",
        title: "Tracking is installed, tested and explained.",
        items: [
          ["Define actions", "We decide which calls, forms, WhatsApp clicks or booking actions should count as useful conversions."],
          ["Install tags", "Google Ads, GA4, GTM and Meta events are configured where appropriate."],
          ["Test routes", "We submit forms, tap call links and check that events fire once in the right place."],
          ["Clean reports", "Duplicate or low-value conversion actions are separated so reporting is easier to trust."],
        ],
      },
      {
        type: "outcomes",
        id: "outcomes",
        label: "Measurement outcomes",
        title: "What clean tracking helps you understand.",
        items: [
          ["Which adverts create leads", "Campaign decisions can be based on real enquiry actions rather than clicks alone."],
          ["Which pages convert", "Landing pages can be judged by calls and forms, not just visits."],
          ["Which actions are useful", "Primary and secondary conversions are separated more clearly."],
          ["Where data is missing", "Gaps in the measurement setup become visible and easier to fix."],
        ],
      },
    ],
    faqs: [
      ["Can you set up Google Tag Manager?", "Yes. GTM is often the best place to manage website events cleanly."],
      ["Can you fix duplicate conversions?", "Yes. Duplicate or weak conversion actions are a common reason accounts optimise around bad data."],
      ["Can WhatsApp messages be tracked?", "A WhatsApp click can be tracked, but it does not prove a conversation happened unless a separate system records the message itself."],
      ["Do you work with GA4?", "Yes. GA4 events can be configured alongside Google Ads conversions where useful."],
    ],
    related: ["google-ads", "landing-pages", "google-ads-audit", "local-lead-generation"],
  },
  {
    slug: "meta-ads",
    variant: "variant-meta",
    name: "Meta Ads Management",
    intent: "Facebook and Instagram advertising management for local lead generation and awareness.",
    primaryKeyword: "Meta Ads management for local businesses",
    title: "Meta Ads Management for Local Businesses | Adnilo",
    description: "Facebook and Instagram ad management for local businesses, including creative testing, lead forms, tracking, retargeting and reporting.",
    label: "Facebook and Instagram ads",
    h1: "Facebook and Instagram ads that make local customers notice you.",
    intro: "Meta Ads are different from Search. People are not always looking for you yet, so the creative, offer and follow-up need to earn attention before they can create enquiries.",
    cta: "Book Free Meta Ads Audit",
    trust: "For local service businesses that want attention, retargeting and lead generation beyond search demand.",
    visualType: "meta",
    visualTitle: "Creative testing grid",
    visualCards: [
      ["Instagram", "Local offer", "A clear reason to stop scrolling and consider the service.", "Send message"],
      ["Facebook", "Trust angle", "Service details, reassurance and local relevance in plain language.", "Learn more"],
      ["Retargeting", "Warm reminder", "Follow-up ads for people who clicked, watched or visited.", "Book now"],
    ],
    sections: [
      {
        type: "split",
        id: "search-vs-meta",
        label: "Different channel, different job",
        title: "Meta Ads create demand as well as capture it.",
        text: "Google Search works when people are actively looking. Facebook and Instagram can reach people earlier, test offers, build local awareness and remind warm audiences to come back. The strategy should match how people use the channel.",
      },
      {
        type: "cards",
        id: "management",
        label: "What is managed",
        title: "Meta campaigns built around creative, audiences and follow-up.",
        items: [
          ["Creative testing", "Different hooks, visuals and offers are tested so the account learns what earns attention."],
          ["Audience targeting", "Campaigns are structured around local reach, service relevance and practical exclusions."],
          ["Lead forms and websites", "Traffic can be sent to lead forms, landing pages or message actions depending on the offer."],
          ["Retargeting paths", "Warm visitors and engaged audiences can receive useful follow-up ads without being overdone."],
          ["Tracking and events", "Pixel events and conversion routes are checked so reporting is not based on guesswork."],
          ["Plain reporting", "You see which angles, audiences and routes are creating enquiries or useful signals."],
        ],
      },
      {
        type: "steps",
        id: "meta-process",
        label: "Campaign process",
        title: "A practical test-and-learn structure.",
        items: [
          ["Offer", "We clarify what would make a local customer stop and care."],
          ["Creative", "We prepare ad angles, copy direction and simple visual routes."],
          ["Launch", "Campaigns are split by objective, audience and conversion route."],
          ["Refine", "Budget moves towards stronger creative and cleaner enquiry paths."],
        ],
      },
      {
        type: "outcomes",
        id: "outcomes",
        label: "Meta Ads outcomes",
        title: "What Meta Ads can support when set up honestly.",
        items: [
          ["Local visibility", "More people in the right area see the service before they search."],
          ["Creative learning", "You learn which offers, hooks and angles people respond to."],
          ["Warm follow-up", "Retargeting keeps useful reminders in front of people who already showed interest."],
          ["Lead form testing", "Forms can be tested where fast follow-up and lead quality controls make sense."],
        ],
      },
    ],
    faqs: [
      ["Are Meta Ads better than Google Ads?", "They do different jobs. Google Search captures active demand, while Meta can create attention, test offers and retarget warm audiences."],
      ["Can Meta lead forms work for local services?", "They can, but lead quality depends on the offer, questions, speed of follow-up and how the campaign is tracked."],
      ["Do you create the adverts?", "We create the ad copy and creative direction, and can work with existing brand assets where available."],
      ["Can you retarget website visitors on Meta?", "Yes, if the pixel and consent setup allow useful audiences to be built."],
    ],
    related: ["retargeting-ads", "landing-pages", "conversion-tracking", "local-lead-generation"],
  },
  {
    slug: "retargeting-ads",
    variant: "variant-retargeting",
    name: "Retargeting Ads",
    intent: "Advertising again to people who previously visited or engaged with the business.",
    primaryKeyword: "retargeting ads for local businesses",
    title: "Retargeting Ads for Local Businesses | Adnilo",
    description: "Retargeting ads for local businesses that want to bring back warm website visitors and engaged audiences with useful reminders.",
    label: "Warm audience advertising",
    h1: "Bring back visitors who did not enquire the first time.",
    intro: "Most visitors will not enquire on the first visit. Retargeting helps you stay visible to warm audiences with useful reminders, trust-building messages and sensible frequency control.",
    cta: "Start Retargeting",
    trust: "For businesses with enough website visits or engaged audiences to make warm follow-up worthwhile.",
    visualType: "journey",
    visualTitle: "Warm visitor reminder loop",
    visualItems: ["First visit", "Leaves page", "Reminder ad", "Returns to enquire"],
    sections: [
      {
        type: "split",
        id: "when-useful",
        label: "Warm audiences",
        title: "Retargeting works best when there is already interest to follow up.",
        text: "The audience needs to be large enough and relevant enough. For small sites, retargeting may be a supporting tactic rather than the whole strategy. The goal is useful reminder ads, not chasing people endlessly around the internet.",
      },
      {
        type: "cards",
        id: "retargeting-setup",
        label: "What gets built",
        title: "Audience and creative rules that keep retargeting controlled.",
        items: [
          ["Website visitor audiences", "Visitors can be grouped around key pages, service pages or landing-page visits where consent and platform rules allow."],
          ["Previous enquiry audiences", "Where data is available and appropriate, existing enquiry lists can be excluded or used carefully."],
          ["Reminder campaigns", "Ads remind visitors of the service, next step or reason to enquire."],
          ["Frequency management", "Budgets and caps are watched so warm audiences are not overwhelmed."],
          ["Audience exclusions", "People who already converted or are not relevant can be excluded where tracking allows."],
          ["Google and Meta routes", "Retargeting can run across Google Display, YouTube, Facebook or Instagram depending on the audience and goal."],
        ],
      },
      {
        type: "outcomes",
        id: "outcomes",
        label: "Retargeting outcomes",
        title: "What retargeting is designed to support.",
        items: [
          ["More return visits", "Warm visitors get a simple reason to come back and act."],
          ["Better recall", "The business stays visible after the first visit."],
          ["Trust building", "Follow-up ads can answer objections and show service details."],
          ["Cleaner exclusions", "Converted or poor-fit audiences can be removed where tracking permits."],
        ],
      },
      {
        type: "steps",
        id: "retargeting-process",
        label: "Setup process",
        title: "A sensible reminder system.",
        items: [
          ["Check audience size", "We confirm whether the site has enough warm traffic to retarget usefully."],
          ["Set rules", "Audiences, exclusions, windows and consent limitations are planned."],
          ["Write reminders", "Creative focuses on useful follow-up, proof and a clear next step."],
          ["Monitor frequency", "Campaigns are watched so reminders stay helpful rather than repetitive."],
        ],
      },
    ],
    faqs: [
      ["Is retargeting useful for every business?", "No. If the audience is too small, it may be better to focus first on Search, landing pages or tracking."],
      ["Can retargeting feel annoying?", "It can if frequency is ignored. We use sensible audience windows, exclusions and budgets."],
      ["Do you retarget on Google or Meta?", "Both can be useful, depending on audience size, consent setup and campaign goals."],
      ["Can you retarget people who started a form?", "Sometimes, depending on the tracking setup and privacy rules. We will not claim more than the data can support."],
    ],
    related: ["meta-ads", "conversion-tracking", "landing-pages", "local-lead-generation"],
  },
  {
    slug: "local-lead-generation",
    variant: "variant-local",
    name: "Local Lead Generation",
    intent: "A complete local lead-generation system combining ads, landing pages and tracking.",
    primaryKeyword: "local lead generation agency",
    title: "Local Lead Generation Agency | Adnilo",
    description: "Local lead generation for service businesses using Google Ads, landing pages, tracking and reporting to improve calls and enquiries.",
    label: "Complete lead system",
    h1: "More calls, more enquiries, more booked jobs.",
    intro: "Local lead generation works best as a system. Adnilo connects search intent, paid ads, landing pages, tracking and reporting so local businesses can see where enquiries are coming from.",
    cta: "Get More Local Leads",
    trust: "For local service businesses that want a practical system for calls, forms and booked work.",
    visualType: "pipeline",
    visualTitle: "Local lead pipeline",
    visualItems: ["Local search", "Advert", "Landing page", "Qualified enquiry"],
    visualSecondary: ["Google Ads", "Landing pages", "Conversion tracking", "Reporting"],
    sections: [
      {
        type: "split",
        id: "system",
        label: "Lead system",
        title: "One weak link can make the whole system look worse than it is.",
        text: "A campaign can bring the right traffic, but a weak page can lose the lead. A good page can still fail if tracking is broken. Local lead generation joins the pieces so decisions are based on the whole journey from search to enquiry.",
      },
      {
        type: "cards",
        id: "system-parts",
        label: "What the system includes",
        title: "Ads, pages and tracking working together.",
        items: [
          ["Local search intent", "We focus on people searching for services, problems, treatments, repairs or providers in the right area."],
          ["Google Ads campaigns", "Campaigns are built around profitable services, useful locations and clear enquiry routes."],
          ["Landing pages", "Paid traffic is sent to focused pages that explain the service and make action easy."],
          ["Conversion tracking", "Calls, forms and key actions are tracked so performance is easier to judge."],
          ["Lead qualification", "Copy and forms help set expectations before the enquiry reaches your team."],
          ["Reporting", "You see what happened, what changed and where the next improvement should come from."],
        ],
      },
      {
        type: "steps",
        id: "lead-process",
        label: "Process",
        title: "A clear path from local demand to enquiry.",
        items: [
          ["Market check", "We look at services, locations, competitors and current website routes."],
          ["System build", "Campaigns, landing pages and tracking are planned around the same commercial goal."],
          ["Launch", "Traffic starts with careful budgets and clear conversion checks."],
          ["Improve", "Search terms, ads, pages and reporting are refined as data comes in."],
        ],
      },
      {
        type: "outcomes",
        id: "outcomes",
        label: "Local lead outcomes",
        title: "What a stronger lead system should clarify.",
        items: [
          ["Where leads come from", "Calls and forms can be connected to the campaigns and pages that influenced them."],
          ["Which services respond", "You can see where demand is strongest and where budget may be wasted."],
          ["How visitors act", "Landing-page data shows where people call, submit or drop away."],
          ["What to improve next", "The system creates practical next steps rather than vague marketing reports."],
        ],
      },
    ],
    faqs: [
      ["Which industries can Adnilo help?", "Adnilo is built for local service businesses such as cleaning companies, dentists, trades, clinics, gyms and similar local service brands."],
      ["Is local lead generation only Google Ads?", "No. Google Ads is often central, but landing pages, tracking and follow-up matter too."],
      ["Do you guarantee booked jobs?", "No. We do not make fake guarantees. We build and improve the system that helps create more useful calls and enquiries."],
      ["Can you start with an audit first?", "Yes. An audit is often the safest first step when campaigns or tracking already exist."],
    ],
    related: ["google-ads", "google-search-ads", "landing-pages", "conversion-tracking", "meta-ads"],
  },
];

const bySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function jsonLd(data) {
  return `<script type="application/ld+json">${JSON.stringify(data).replaceAll("</", "<\\/")}</script>`;
}

function metaHead({ title, description, canonical, type = "website", noindex = false, scripts = [] }) {
  return `    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="${escapeHtml(description)}">
    <meta name="robots" content="${noindex ? "noindex, follow" : "index, follow"}">
    <link rel="canonical" href="${canonical}">
    <meta property="og:site_name" content="Adnilo">
    <meta property="og:type" content="${type}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    <meta name="twitter:image" content="${ogImage}">
    <meta name="theme-color" content="#6D28D9">
    <title>${escapeHtml(title)}</title>
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="preload" as="image" href="${heroImage}" type="image/webp" fetchpriority="high">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700;9..144,800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/styles.css?v=seo-1">
${scripts.map((script) => `    ${script}`).join("\n")}`;
}

function serviceLinks(prefix = "/") {
  return services
    .map((service) => `<a href="${prefix}${service.slug}.html">${escapeHtml(service.name)}</a>`)
    .join("");
}

function header({ resultsHref = "/#results", contactHref = "/#contact" } = {}) {
  return `    <header class="site-header" data-header>
      <a class="logo" href="/" aria-label="Adnilo home"><span>Adnilo</span></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-menu-toggle>
        <span></span><span></span><span></span><span class="sr-only">Menu</span>
      </button>
      <div class="desktop-nav-group">
        <nav class="site-nav" id="site-nav" aria-label="Primary navigation" data-site-nav>
          <div class="nav-dropdown">
            <button class="nav-dropdown-trigger" type="button" aria-expanded="false" data-service-menu-toggle>Services</button>
            <div class="service-menu" aria-label="Services">${serviceLinks("/")}</div>
          </div>
          <a href="${resultsHref}">Results</a>
          <a href="${contactHref}">Contact</a>
          <a class="mobile-nav-cta" href="${contactHref}">Get Leads</a>
        </nav>
        <a class="header-cta" href="${contactHref}">Get Leads</a>
      </div>
    </header>`;
}

function footer() {
  return `    <footer class="site-footer">
      <div class="container footer-layout">
        <div>
          <a class="footer-logo" href="/">Adnilo</a>
          <p>Google Ads and lead generation for local service businesses.</p>
        </div>
        <div class="footer-link-groups">
          <nav aria-label="Footer services">
            <a href="/google-ads.html">Google Ads Management</a>
            <a href="/google-ads-audit.html">Google Ads Audit</a>
            <a href="/landing-pages.html">Landing Pages</a>
            <a href="/conversion-tracking.html">Conversion Tracking</a>
            <a href="/local-lead-generation.html">Local Lead Generation</a>
          </nav>
          <nav aria-label="Footer legal">
            <a href="/privacy.html">Privacy Policy</a>
            <a href="/terms.html">Terms</a>
            <a href="/#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>`;
}

function contactForm(buttonText = "Request Free Audit") {
  return `          <form class="contact-form reveal" action="/api/contact" method="post" data-contact-form>
            <label class="form-honeypot" aria-hidden="true">
              <span>Leave this field empty</span>
              <input type="text" name="company_website" tabindex="-1" autocomplete="off">
            </label>
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
              <input type="tel" name="phone" autocomplete="tel" pattern="[0-9\\+ .\\-]{7,}" title="Use at least 7 digits, spaces, + or -" required>
            </label>
            <label>
              <span>Monthly ad budget</span>
              <select name="monthly_ad_budget" required>
                <option value="">Select budget</option>
                <option>Under £1,000</option>
                <option>£1,000 - £3,000</option>
                <option>£3,000 - £7,500</option>
                <option>£7,500+</option>
              </select>
            </label>
            <label class="full">
              <span>Message</span>
              <textarea name="message" rows="5" placeholder="Tell us what you sell, where you work, and what you want fixed."></textarea>
            </label>
            <button class="btn btn-primary form-button" type="submit">${escapeHtml(buttonText)}</button>
            <p class="form-status" role="status" aria-live="polite" data-form-status></p>
          </form>`;
}

function heroArt(extra = "") {
  return `<img class="hero-art" src="${heroImage}" width="1717" height="916" alt="" aria-hidden="true" decoding="async" fetchpriority="high"${extra}>`;
}

function pageShell({ title, description, canonical, bodyClass = "", bodyId = "top", headerOptions, main, structuredData = [], noindex = false }) {
  return `<!doctype html>
<html lang="en-GB">
  <head>
${metaHead({ title, description, canonical, noindex })}
${structuredData.map(jsonLd).map((line) => `    ${line}`).join("\n")}
  </head>
  <body${bodyId ? ` id="${bodyId}"` : ""}${bodyClass ? ` class="${bodyClass}"` : ""}>
    <a class="skip-link" href="#main-content">Skip to content</a>
${header(headerOptions)}
${main}
${footer()}
    <script src="/script.js?v=seo-1"></script>
  </body>
</html>
`;
}

function cards(items, className = "card") {
  const result = className.includes("result-card");
  return items
    .map(([title, text], index) => `<article class="${className} reveal">
              ${result ? `<span>${escapeHtml(title)}</span>` : `<h3>${escapeHtml(title)}</h3>`}
              <p>${escapeHtml(text)}</p>
            </article>`)
    .join("\n");
}

function steps(items) {
  return items
    .map(([title, text], index) => `<article class="card step-card reveal">
              <span class="card-number">${String(index + 1).padStart(2, "0")}</span>
              <h3>${escapeHtml(title)}</h3>
              <p>${escapeHtml(text)}</p>
            </article>`)
    .join("\n");
}

function section(service, item) {
  if (item.type === "split") {
    return `      <section class="section about service-problem" id="${item.id}" aria-labelledby="${item.id}-title">
        <div class="container two-column">
          <div class="section-copy reveal">
            <p class="eyebrow dark">${escapeHtml(item.label)}</p>
            <h2 id="${item.id}-title">${escapeHtml(item.title)}</h2>
          </div>
          <div class="body-copy reveal">
            <p>${escapeHtml(item.text)}</p>
          </div>
        </div>
      </section>`;
  }

  if (item.type === "cards") {
    return `      <section class="section services service-work" id="${item.id}" aria-labelledby="${item.id}-title">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow dark">${escapeHtml(item.label)}</p>
            <h2 id="${item.id}-title">${escapeHtml(item.title)}</h2>
          </div>
          <div class="card-grid ${item.items.length > 4 ? "three" : "four"}">
${cards(item.items)}
          </div>
        </div>
      </section>`;
  }

  if (item.type === "steps") {
    return `      <section class="section steps-section service-process" id="${item.id}" aria-labelledby="${item.id}-title">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow dark">${escapeHtml(item.label)}</p>
            <h2 id="${item.id}-title">${escapeHtml(item.title)}</h2>
          </div>
          <div class="card-grid four">
${steps(item.items)}
          </div>
        </div>
      </section>`;
  }

  return `      <section class="section results service-outcomes" id="${item.id}" aria-labelledby="${item.id}-title">
        <div class="container">
          <div class="section-heading light reveal">
            <p class="eyebrow light">${escapeHtml(item.label)}</p>
            <h2 id="${item.id}-title">${escapeHtml(item.title)}</h2>
          </div>
          <div class="result-grid">
${cards(item.items, "result-card")}
          </div>
        </div>
      </section>`;
}

function visual(service) {
  if (service.visualType === "search") {
    return `<div class="service-visual visual-pipeline reveal" aria-label="${escapeHtml(service.visualTitle)}">
            <div class="pipeline-card glass-panel">
              <div class="visual-topline"><span>Search journey</span><strong>${escapeHtml(service.visualTitle)}</strong></div>
              <div class="pipeline-flow">${service.visualItems.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
            </div>
          </div>`;
  }

  if (service.visualType === "audit") {
    return `<div class="service-visual visual-audit reveal" aria-label="${escapeHtml(service.visualTitle)}">
            <div class="audit-card glass-panel">
              <div class="visual-topline"><span>Audit snapshot</span><strong>${escapeHtml(service.visualTitle)}</strong></div>
              <div class="audit-score"><span>12</span><small>checks reviewed</small></div>
              <ul class="audit-list">${service.visualItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
          </div>`;
  }

  if (service.visualType === "rebuild") {
    return `<div class="service-visual visual-rebuild reveal" aria-label="${escapeHtml(service.visualTitle)}">
            <div class="rebuild-board">
              <div class="rebuild-col before glass-panel"><span>Before</span><h3>Messy account</h3><ul class="visual-list">${service.visualItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
              <div class="rebuild-arrow">→</div>
              <div class="rebuild-col after glass-panel"><span>After</span><h3>Cleaner structure</h3><ul class="visual-list">${service.visualSecondary.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
            </div>
          </div>`;
  }

  if (service.visualType === "browser") {
    return `<div class="service-visual visual-browser reveal" aria-label="${escapeHtml(service.visualTitle)}">
            <div class="browser-card glass-panel">
              <div class="browser-top"><span></span><span></span><span></span></div>
              <div class="browser-hero"><strong>${escapeHtml(service.visualTitle)}</strong><p>Clear offer, proof, form and phone route.</p></div>
              <div class="browser-grid">${service.visualItems.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
              <div class="browser-form"><span></span><span></span><button type="button">Enquire</button></div>
            </div>
          </div>`;
  }

  if (service.visualType === "tracking") {
    return `<div class="service-visual visual-tracking reveal" aria-label="${escapeHtml(service.visualTitle)}">
            <div class="tracking-card glass-panel">
              <div class="visual-topline"><span>Measurement map</span><strong>${escapeHtml(service.visualTitle)}</strong></div>
              <div class="pipeline-flow">${service.visualItems.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
              <div class="metric-row">${service.visualMetrics.map(([value, label]) => `<div class="visual-metric"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join("")}</div>
            </div>
          </div>`;
  }

  if (service.visualType === "meta") {
    return `<div class="service-visual visual-meta reveal" aria-label="${escapeHtml(service.visualTitle)}">
            <div class="ad-stack">
              ${service.visualCards.map(([platform, title, text, cta], index) => `<article class="meta-card glass-panel card-${index + 1}"><span>${escapeHtml(platform)}</span><strong>${escapeHtml(title)}</strong><p>${escapeHtml(text)}</p><button type="button">${escapeHtml(cta)}</button></article>`).join("")}
            </div>
          </div>`;
  }

  if (service.visualType === "journey") {
    return `<div class="service-visual visual-journey reveal" aria-label="${escapeHtml(service.visualTitle)}">
            <div class="journey-card glass-panel">
              <div class="journey-loop">${service.visualItems.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
              <div class="journey-note"><strong>${escapeHtml(service.visualTitle)}</strong><p>Warm visitors see helpful reminders, not noisy repetition.</p></div>
            </div>
          </div>`;
  }

  if (service.visualType === "pipeline") {
    return `<div class="service-visual visual-pipeline reveal" aria-label="${escapeHtml(service.visualTitle)}">
            <div class="pipeline-card glass-panel">
              <div class="visual-topline"><span>Lead system</span><strong>${escapeHtml(service.visualTitle)}</strong></div>
              <div class="pipeline-flow">${service.visualItems.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
              <ul class="pipeline-list">${service.visualSecondary.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
          </div>`;
  }

  return `<div class="service-visual visual-dashboard reveal" aria-label="${escapeHtml(service.visualTitle)}">
            <div class="dashboard-card glass-panel">
              <div class="visual-topline"><span>Campaign workflow</span><strong>${escapeHtml(service.visualTitle)}</strong></div>
              <div class="metric-row">${service.visualMetrics.map(([value, label]) => `<div class="visual-metric"><strong>${escapeHtml(value)}</strong><span>${escapeHtml(label)}</span></div>`).join("")}</div>
              <ul class="visual-list">${service.visualItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
            </div>
          </div>`;
}

function relatedLinks(service) {
  return `<section class="section founder related-services" id="related-services" aria-labelledby="related-title">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow dark">Related services</p>
            <h2 id="related-title">Useful next pages for this service.</h2>
          </div>
          <div class="card-grid four">
${service.related.map((slug) => {
    const linked = bySlug[slug];
    return `<a class="card service-card service-link-card reveal" href="/${linked.slug}.html"><h3>${escapeHtml(linked.name)}</h3><p>${escapeHtml(linked.intent)}</p><span class="card-link-text">Read about ${escapeHtml(linked.name)}</span></a>`;
  }).join("\n")}
          </div>
        </div>
      </section>`;
}

function servicePage(service) {
  const canonical = `${siteUrl}/${service.slug}.html`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: service.name, item: canonical },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    provider: { "@type": "Organization", name: "Adnilo", url: siteUrl },
    url: canonical,
    description: service.description,
    audience: { "@type": "BusinessAudience", audienceType: "Local service businesses" },
  };

  const main = `    <main id="main-content" class="service-page ${service.variant}">
      <nav class="breadcrumb container" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>${escapeHtml(service.name)}</span></nav>
      <section class="hero service-hero" aria-labelledby="service-title">
        ${heroArt(` style="object-position: 58% center;"`)}
        <div class="hero-wash" aria-hidden="true"></div>
        <div class="service-floats" aria-hidden="true"><span class="service-float service-float-one"></span><span class="service-float service-float-two"></span><span class="service-float service-float-three"></span></div>
        <div class="container service-hero-layout">
          <div class="service-hero-copy reveal">
            <p class="eyebrow">${escapeHtml(service.label)}</p>
            <h1 id="service-title">${escapeHtml(service.h1)}</h1>
            <p class="hero-subtitle">${escapeHtml(service.intro)}</p>
            <div class="hero-actions"><a class="btn btn-primary" href="#contact">${escapeHtml(service.cta)}</a></div>
          </div>
          ${visual(service)}
        </div>
      </section>
      <section class="trust-strip" aria-label="Service focus"><div class="container"><p>${escapeHtml(service.trust)}</p></div></section>
${service.sections.map((item) => section(service, item)).join("\n")}
      <section class="section founder service-faq" id="faq" aria-labelledby="faq-title">
        <div class="container">
          <div class="section-heading reveal">
            <p class="eyebrow dark">FAQ</p>
            <h2 id="faq-title">Questions about ${escapeHtml(service.name)}.</h2>
          </div>
          <div class="faq-list">
${service.faqs.map(([question, answer]) => `<details class="faq-item reveal"><summary>${escapeHtml(question)}</summary><p>${escapeHtml(answer)}</p></details>`).join("\n")}
          </div>
        </div>
      </section>
      ${relatedLinks(service)}
      <section class="section contact service-contact" id="contact" aria-labelledby="contact-title">
        <div class="container contact-layout">
          <div class="section-copy reveal">
            <p class="eyebrow dark">Talk to Adnilo</p>
            <h2 id="contact-title">Ready to discuss ${escapeHtml(service.name).toLowerCase()}?</h2>
            <p>Share your business, location and current setup. We will reply with a practical next step, not a generic sales script.</p>
          </div>
${contactForm(service.cta)}
        </div>
      </section>
    </main>`;

  return pageShell({
    title: service.title,
    description: service.description,
    canonical,
    headerOptions: { resultsHref: "#outcomes", contactHref: "#contact" },
    main,
    structuredData: [breadcrumb, serviceSchema],
  });
}

function homePage() {
  const title = "Google Ads Agency for Local Service Businesses | Adnilo";
  const description = "Adnilo is a Google Ads agency for local service businesses, helping improve calls, enquiries and booked jobs through ads, landing pages and tracking.";
  const canonical = `${siteUrl}/`;
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "Adnilo",
    url: siteUrl,
    logo: `${siteUrl}/assets/android-chrome-512x512.png`,
    image: ogImage,
    description: "Google Ads and lead generation for local service businesses.",
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: `${siteUrl}/`,
    name: "Adnilo",
    inLanguage: "en-GB",
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const main = `    <main id="main-content">
      <section class="hero" aria-labelledby="hero-title">
        ${heroArt()}
        <div class="hero-wash" aria-hidden="true"></div>
        <div class="hero-motion" aria-hidden="true">
          <span class="hero-glow hero-glow-one"></span>
          <span class="hero-glow hero-glow-two"></span>
          <span class="hero-glow hero-glow-three"></span>
          <span class="hero-object hero-object-orb"></span>
          <span class="hero-object hero-object-ring"></span>
          <span class="hero-object hero-object-pink"></span>
          <span class="hero-object hero-object-capsule"></span>
        </div>
        <div class="container hero-content reveal">
          <h1 id="hero-title">Google Ads that turn clicks into booked jobs.</h1>
          <p class="hero-subtitle">Adnilo helps local service businesses get more calls, enquiries, and bookings through high-intent Google Ads.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="#contact">I Want Leads</a></div>
        </div>
      </section>
      <section class="trust-strip" aria-label="Who Adnilo helps"><div class="container"><p>Built for cleaning companies, dentists, trades, clinics, gyms and local service brands.</p></div></section>
      <section class="section about" id="about" aria-labelledby="about-title">
        <div class="container two-column">
          <div class="section-copy reveal">
            <p class="eyebrow dark">Google Ads agency for local services</p>
            <h2 id="about-title">You do not need louder ads. You need better-fit leads.</h2>
          </div>
          <div class="body-copy reveal">
            <p>Adnilo is a founder-led marketing agency focused on Google Ads, landing pages and conversion tracking for local service businesses. The work is built around people already searching for what you sell, then making the path to a call, form enquiry or booking clearer.</p>
            <p>There are no fake guarantees here. The aim is simple: reduce wasted spend, improve lead quality where the data supports it and make reporting easier to understand.</p>
            <div class="mini-metrics" aria-label="Adnilo focus areas">
              <div><strong>Intent</strong><span>Campaigns shaped around searches that suggest real demand.</span></div>
              <div><strong>Tracking</strong><span>Calls, forms and useful actions checked before decisions are made.</span></div>
              <div><strong>Clarity</strong><span>Simple reporting on what changed and what should happen next.</span></div>
            </div>
          </div>
        </div>
      </section>
      <section class="section steps-section" id="how-it-works" aria-labelledby="steps-title">
        <div class="container">
          <div class="section-heading reveal"><p class="eyebrow dark">How it works</p><h2 id="steps-title">A practical lead system, not random ad spend.</h2></div>
          <div class="card-grid four">
            ${steps([
              ["Audit", "We check the market, account setup, landing pages and conversion tracking before recommending changes."],
              ["Build", "Campaigns, adverts, landing pages and tracking are shaped around the services you want to sell."],
              ["Optimise", "Search terms, keywords, adverts and conversion routes are improved as data comes in."],
              ["Scale carefully", "Spend only increases when the numbers and lead quality make sense."],
            ])}
          </div>
        </div>
      </section>
      <section class="section services" id="services" aria-labelledby="services-title">
        <div class="container">
          <div class="section-heading reveal"><p class="eyebrow dark">Services</p><h2 id="services-title">Choose the service that matches where your lead system is stuck.</h2></div>
          <div class="card-grid three">
${services.map((service, index) => `<a class="card service-card service-link-card reveal" href="/${service.slug}.html"><span class="service-icon ${["search-icon", "search-icon", "report-icon", "retarget-icon", "page-icon", "track-icon", "report-icon", "retarget-icon", "call-icon"][index]}" aria-hidden="true"></span><h3>${escapeHtml(service.name)}</h3><p>${escapeHtml(service.intent)}</p><span class="card-link-text">Explore ${escapeHtml(service.name)}</span></a>`).join("\n")}
          </div>
        </div>
      </section>
      <section class="section results" id="results" aria-labelledby="results-title">
        <div class="container">
          <div class="section-heading light reveal"><p class="eyebrow light">What Adnilo improves</p><h2 id="results-title">Honest outcomes to work towards, measured with better data.</h2></div>
          <div class="result-grid">
            ${cards([
              ["More useful calls", "Campaigns and pages are shaped around people ready to speak to a local provider."],
              ["Less wasted spend", "Weak searches, poor-fit locations and irrelevant clicks are reduced over time."],
              ["Better enquiry quality", "Adverts and landing pages set clearer expectations before someone contacts you."],
              ["Clear monthly reporting", "You see what changed, what happened and what should be tested next."],
            ], "result-card")}
          </div>
        </div>
      </section>
      <section class="section founder" aria-labelledby="founder-title">
        <div class="container founder-panel reveal">
          <div><p class="eyebrow dark">Founder-led delivery</p><h2 id="founder-title">Small agency. Direct communication. Clear results.</h2><p>You work directly with the person managing your campaigns — no confusing reports, no hiding behind jargon.</p></div>
          <div class="founder-shape" aria-hidden="true"><span></span><span></span><span></span></div>
        </div>
      </section>
      <section class="section contact" id="contact" aria-labelledby="contact-title">
        <div class="container contact-layout">
          <div class="section-copy reveal"><p class="eyebrow dark">Free audit</p><h2 id="contact-title">Ready to get more leads?</h2><p>Tell us where you are now and we will look for the fastest route to more useful calls, enquiries and bookings.</p></div>
${contactForm("Request Free Audit")}
        </div>
      </section>
    </main>`;

  return pageShell({ title, description, canonical, headerOptions: { resultsHref: "#results", contactHref: "#contact" }, main, structuredData: [org, website] });
}

function legalPage({ file, title, description, h1, intro, sections }) {
  const canonical = `${siteUrl}/${file}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: h1, item: canonical },
    ],
  };
  const main = `    <main id="main-content" class="legal-page">
      <section class="hero legal-hero" aria-labelledby="legal-title">
        ${heroArt()}
        <div class="hero-wash" aria-hidden="true"></div>
        <div class="container service-hero-copy reveal">
          <p class="eyebrow">Adnilo website information</p>
          <h1 id="legal-title">${escapeHtml(h1)}</h1>
          <p class="hero-subtitle">${escapeHtml(intro)}</p>
        </div>
      </section>
      <section class="section legal-content">
        <div class="container legal-panel reveal">
          ${sections.map(([heading, paragraphs]) => `<section aria-labelledby="${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title"><h2 id="${heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-title">${escapeHtml(heading)}</h2>${paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}</section>`).join("")}
        </div>
      </section>
    </main>`;
  writeFileSync(file, pageShell({ title, description, canonical, main, structuredData: [breadcrumb] }));
}

function notFoundPage() {
  const title = "Page Not Found | Adnilo";
  const description = "The page you requested could not be found. Visit Adnilo services or return to the homepage.";
  const main = `    <main id="main-content" class="not-found-page">
      <section class="hero legal-hero" aria-labelledby="not-found-title">
        ${heroArt()}
        <div class="hero-wash" aria-hidden="true"></div>
        <div class="container service-hero-copy reveal">
          <p class="eyebrow">404</p>
          <h1 id="not-found-title">This page is not here.</h1>
          <p class="hero-subtitle">The link may be old, or the page may have moved. You can head back to Adnilo or explore the main services.</p>
          <div class="hero-actions"><a class="btn btn-primary" href="/">Back to homepage</a><a class="btn btn-secondary" href="/google-ads.html">Google Ads Management</a></div>
        </div>
      </section>
      <section class="section services" aria-labelledby="not-found-services">
        <div class="container">
          <div class="section-heading reveal"><p class="eyebrow dark">Important services</p><h2 id="not-found-services">Find the right Adnilo page.</h2></div>
          <div class="card-grid three">
${services.slice(0, 6).map((service) => `<a class="card service-card service-link-card reveal" href="/${service.slug}.html"><h3>${escapeHtml(service.name)}</h3><p>${escapeHtml(service.intent)}</p><span class="card-link-text">Visit ${escapeHtml(service.name)}</span></a>`).join("\n")}
          </div>
        </div>
      </section>
    </main>`;
  writeFileSync("404.html", pageShell({ title, description, canonical: `${siteUrl}/404.html`, main, noindex: true }));
}

writeFileSync("index.html", homePage());
services.forEach((service) => writeFileSync(`${service.slug}.html`, servicePage(service)));

legalPage({
  file: "privacy.html",
  title: "Privacy Policy | Adnilo",
  description: "Adnilo privacy policy explaining what information the website contact form collects and how enquiries are handled.",
  h1: "Privacy Policy",
  intro: "This policy explains how the Adnilo website handles enquiry information. It should be reviewed by the website owner and a legal professional before being treated as legal advice.",
  sections: [
    ["Information collected", ["When you submit an enquiry, the form may collect your name, business name, website, phone number, monthly ad budget, message and the page the form came from.", "The form also contains a hidden spam-prevention field. If that field is filled in, the submission may be ignored as spam."]],
    ["How the information is used", ["Adnilo uses enquiry information to reply to you, understand your business needs and discuss relevant Google Ads, landing-page or lead-generation services.", "The information should not be sold or used to create fake reviews, case studies or public claims."]],
    ["Email delivery and hosting", ["Form submissions are sent through a secure Vercel serverless function and delivered by Resend to the contact email configured for the Adnilo website.", "The website is hosted on Vercel. The site also loads fonts from Google Fonts. These services may process technical information such as IP address, device information and request logs."]],
    ["Retention", ["Enquiry information should be kept only for as long as needed to respond, manage the business relationship, keep appropriate records or meet legal obligations. The website owner should confirm the exact retention period."]],
    ["Your choices", ["You can ask Adnilo to provide, correct or delete enquiry information where applicable. Contact hello@adnilo.co.uk for privacy requests."]],
    ["Owner review required", ["This page is based on the current website form and technical setup. It is not a substitute for legal advice and should be reviewed by the website owner."]],
  ],
});

legalPage({
  file: "terms.html",
  title: "Terms | Adnilo",
  description: "Adnilo website terms covering use of this website, enquiry forms and general information about services.",
  h1: "Terms",
  intro: "These terms explain basic use of the Adnilo website. They should be reviewed by the website owner and a legal professional before being treated as legal advice.",
  sections: [
    ["Website use", ["This website provides general information about Adnilo services for local service businesses. You should not misuse the website, attempt to disrupt it or submit false enquiry information."]],
    ["Service information", ["The website explains services such as Google Ads management, Google Search Ads, audits, campaign rebuilds, landing pages, conversion tracking, Meta Ads, retargeting and local lead generation.", "Nothing on this website is a guarantee of results. Advertising performance depends on market demand, budget, offer, tracking, website quality, follow-up and other factors."]],
    ["Enquiries", ["Submitting a form does not create a client relationship by itself. Adnilo may reply to discuss your business, current setup and whether the service is a suitable fit."]],
    ["Intellectual property", ["The Adnilo name, website copy, design and visual assets should not be copied without permission. You may link to the website in a normal, lawful way."]],
    ["External services", ["The website is hosted on Vercel and uses third-party services such as Resend for enquiry email delivery and Google Fonts for typography."]],
    ["Owner review required", ["These terms are practical website copy based on the current site. They should be reviewed and approved by the website owner."]],
  ],
});

notFoundPage();

const sitemapUrls = [
  `${siteUrl}/`,
  ...services.map((service) => `${siteUrl}/${service.slug}.html`),
  `${siteUrl}/privacy.html`,
  `${siteUrl}/terms.html`,
];

writeFileSync(
  "sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls
    .map((url) => `  <url><loc>${url}</loc><lastmod>${today}</lastmod><changefreq>${url.endsWith("/") ? "weekly" : "monthly"}</changefreq><priority>${url.endsWith("/") ? "1.0" : "0.8"}</priority></url>`)
    .join("\n")}\n</urlset>\n`
);

writeFileSync(
  "robots.txt",
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
);

const redirectRules = [
  { source: "/:path*", has: [{ type: "host", value: "adnilo.co.uk" }], destination: "https://www.adnilo.co.uk/:path*", permanent: true },
  { source: "/index.html", destination: "/", permanent: true },
  ...services.flatMap((service) => [
    { source: `/${service.slug}`, destination: `/${service.slug}.html`, permanent: true },
    { source: `/${service.slug}/`, destination: `/${service.slug}.html`, permanent: true },
  ]),
];

writeFileSync(
  "vercel.json",
  `${JSON.stringify(
    {
      redirects: redirectRules,
      headers: [
        {
          source: "/(.*)",
          headers: [
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          ],
        },
        {
          source: "/assets/(.*)",
          headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
        },
      ],
    },
    null,
    2
  )}\n`
);
