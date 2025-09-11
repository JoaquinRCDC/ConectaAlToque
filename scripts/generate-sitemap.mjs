import { writeFileSync } from "fs";

const BASE = "https://conectaaltoque.cl";
const routes = [
  "/", 
  "/ejemplo-landing",
  "/ejemplo-corporativo",
  "/ejemplo-tienda-online"
];

const urls = routes.map((r) => {
  const loc = r === "/" ? BASE + "/" : BASE + r;
  const priority = r === "/" ? "1.0" : "0.8";
  return `
  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`.trim();

writeFileSync("public/sitemap.xml", xml);
console.log("✅ Sitemap generado en public/sitemap.xml");
