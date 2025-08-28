import { siteConfig } from "@/site.config";

export function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${siteConfig.url}/sitemap.xml`,
    {
      headers: {
        "Content-Type": "text/plain"
      }
    }
  );
}