import "./styles/globals.css";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/site.config";
import { fontSans, fontMono } from "@/app/styles/fonts"; // (You will add fonts file or remove if unused)
import { ThemeProvider } from "@/app/components/theme/ThemeProvider";
import { cn } from "@/app/utils/cn";
import { SEO } from "@/app/components/SEO";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s · ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@handle"
  },
  alternates: { canonical: siteConfig.url }
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }
  ]
};

const themeScript = `(() => {
  const storageKey='lk-theme';
  const classList=document.documentElement.classList;
  function apply(t){
    if(t==='dark') classList.add('dark');
    else classList.remove('dark');
  }
  let theme;
  try { theme = localStorage.getItem(storageKey); } catch {}
  if(!theme){
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    theme = mql.matches ? 'dark':'light';
  }
  apply(theme);
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script id="theme-script" dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Analytics Placeholder:
            Add your analytics script here, e.g.
            <script defer src="https://analytics.example.com/script.js"></script>
         */}
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontMono.variable)}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <SEO />
      </body>
    </html>
  );
}