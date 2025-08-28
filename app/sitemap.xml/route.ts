import { siteConfig } from "@/site.config";

const routes = ["", "/#features", "/#pricing", "/#testimonials", "/#contact"];

export function GET() {
  const urls = routes
    .map(
      (r) => `<url><loc>${siteConfig.url}${r}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
    )
    .join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml" }
  });
}