import type { MetadataRoute } from "next";
import { brand } from "@/data/site";

// Sitemap basico para la primera version de la web.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: brand.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
