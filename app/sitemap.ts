//ciagnie trasy z lib/services
import type { MetadataRoute } from "next";
import { services } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kom-bis.com";
  const now = new Date();

  const staticRoutes = ["", "/o-firmie", "/realizacje", "/kontakt"].map((r) => ({
    url: `${base}${r}`,
    lastModified: now,
  }));

  const serviceRoutes = services.map((s) => ({
    url: `${base}/uslugi/${s.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
