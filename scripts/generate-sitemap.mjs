// scripts/generate-sitemap.mjs
import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";

const SITE_URL = process.env.SITE_URL || "https://conectaaltoque.cl";

const routes = [
  "/",
  "/ejemplo-landing",
  "/ejemplo-corporativo",
  "/ejemplo-tienda-online",
];

const urls = routes
  .map((p) => {
    const priority = p === "/" ? "1.0" : "0.8";
    return `<url><loc>${SITE_URL}${p}</loc><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
  })
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

// 👉 OJO: escribir en dist/
const out = resolve("dist", "sitemap.xml");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, xml);
console.log("✓ Sitemap generado en", out);
