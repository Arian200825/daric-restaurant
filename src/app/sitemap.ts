import type { MetadataRoute } from "next";
import { config } from "@/config/restaurant.config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || config.url;
  return [{ url: base, changeFrequency: "monthly", priority: 1 }];
}
