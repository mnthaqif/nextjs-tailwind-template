"use client";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/site.config";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
}

export function SEO({ title, description, image, noIndex = false }: SEOProps) {
  const pathname = usePathname();
  const metaTitle = title ? `${title} · ${siteConfig.name}` : siteConfig.name;
  const metaDesc = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const url = `${siteConfig.url}${pathname === "/" ? "" : pathname}`;

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDesc} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDesc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={metaImage} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDesc} />
      <meta property="twitter:image" content={metaImage} />
      <link rel="canonical" href={url} />
    </Head>
  );
}