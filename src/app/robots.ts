import type { MetadataRoute } from "next";
import { brand } from "@/data/site";

// Indica a buscadores que pueden indexar el sitio publico.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${brand.siteUrl}/sitemap.xml`,
  };
}
