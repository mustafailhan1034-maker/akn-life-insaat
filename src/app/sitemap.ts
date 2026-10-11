import type { MetadataRoute } from "next";
import { CORPORATE_PAGES } from "@/lib/corporate";
import { SERVICES, SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.domain}`;
  const now = new Date();

  const pages = ["/", "/kurumsal", "/hizmetlerimiz", "/projelerimiz", "/kentsel-donusum", "/iletisim"];

  return [
    ...pages.map((path, index) => ({
      url: `${base}${path === "/" ? "" : path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: index === 0 ? 1 : 0.9,
    })),
    ...CORPORATE_PAGES.map((page) => ({
      url: `${base}/kurumsal/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...SERVICES.map((service) => ({
      url: `${base}/hizmetlerimiz/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
