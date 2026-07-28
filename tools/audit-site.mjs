import { readFileSync, readdirSync, statSync } from "node:fs";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const baseUrl = process.argv[2] || "";
const sitemapText = safeRead("sitemap.xml");
const sitemapUrls = [...sitemapText.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const htmlFiles = collectHtml(root).filter((file) => !file.includes(".vercel"));
const pages = htmlFiles.map((file) => analyseHtml(file));

const internalTargets = new Map();
for (const page of pages) {
  internalTargets.set(page.path === "index.html" ? "/" : `/${page.path.replaceAll("\\", "/")}`, page);
}

const broken = [];
for (const page of pages) {
  for (const href of page.internalLinks) {
    const cleanHref = href.split("#")[0].split("?")[0] || "/";
    if (cleanHref.startsWith("/api/")) continue;
    if (!internalTargets.has(cleanHref) && !assetExists(cleanHref)) {
      broken.push({ page: page.path, href });
    }
  }
}

const duplicateTitles = duplicates(pages.map((page) => page.title).filter(Boolean));
const duplicateDescriptions = duplicates(pages.map((page) => page.description).filter(Boolean));

console.log(JSON.stringify({
  summary: {
    pages: pages.length,
    brokenInternalLinks: broken.length,
    duplicateTitles,
    duplicateDescriptions,
    sitemapUrls: sitemapUrls.length,
  },
  pages,
  broken,
}, null, 2));

if (baseUrl) {
  const urlsToCheck = [
    "/",
    ...pages
      .map((page) => (page.path === "index.html" ? "/" : `/${page.path.replaceAll("\\", "/")}`))
      .filter((url) => !url.includes("/index.html")),
    "/robots.txt",
    "/sitemap.xml",
    "/not-a-real-page",
  ];

  for (const url of urlsToCheck) {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}${url}`, { redirect: "manual" });
    console.error(`${response.status} ${url}`);
  }
}

function collectHtml(dir) {
  return readdirSync(dir)
    .flatMap((entry) => {
      const full = join(dir, entry);
      if (entry === ".git" || entry === ".vercel") return [];
      const stats = statSync(full);
      if (stats.isDirectory()) return collectHtml(full);
      if (stats.isFile() && extname(full) === ".html") return [relative(root, full)];
      return [];
    })
    .sort();
}

function safeRead(file) {
  try {
    return readFileSync(join(root, file), "utf8");
  } catch {
    return "";
  }
}

function analyseHtml(file) {
  const text = safeRead(file);
  const main = text.match(/<main[\s\S]*?<\/main>/i)?.[0] || "";
  const visibleMain = main
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const jsonLd = [...text.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => {
    try {
      return JSON.parse(match[1])["@type"] || "Unknown";
    } catch {
      return "Invalid";
    }
  });
  const pathUrl = file === "index.html" ? `${siteUrl()}/` : `${siteUrl()}/${file.replaceAll("\\", "/")}`;

  return {
    path: file,
    status: "local-file",
    title: attr(text, /<title>(.*?)<\/title>/i),
    description: attr(text, /<meta name="description" content="([^"]*)"/i),
    canonical: attr(text, /<link rel="canonical" href="([^"]*)"/i),
    robots: attr(text, /<meta name="robots" content="([^"]*)"/i),
    h1Count: (text.match(/<h1\b/gi) || []).length,
    mainWordCount: visibleMain ? visibleMain.split(/\s+/).length : 0,
    internalLinks: [...text.matchAll(/href="([^"]+)"/g)]
      .map((match) => match[1])
      .filter((href) => href.startsWith("/")),
    structuredDataTypes: jsonLd,
    inSitemap: sitemapUrls.includes(pathUrl),
  };
}

function attr(text, regex) {
  return text.match(regex)?.[1] || "";
}

function siteUrl() {
  return "https://www.adnilo.co.uk";
}

function assetExists(url) {
  const clean = url.replace(/^\//, "");
  try {
    return statSync(join(root, clean)).isFile();
  } catch {
    return false;
  }
}

function duplicates(values) {
  const counts = values.reduce((map, value) => map.set(value, (map.get(value) || 0) + 1), new Map());
  return [...counts.entries()].filter(([, count]) => count > 1).map(([value]) => value);
}
