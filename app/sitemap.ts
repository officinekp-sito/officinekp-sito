import type { MetadataRoute } from "next";
import { SITE_URL } from "./seo-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${SITE_URL}/`, lastModified: now, alternates: { languages: { it: `${SITE_URL}/`, en: `${SITE_URL}/en` } } },
    { url: `${SITE_URL}/en`, lastModified: now, alternates: { languages: { it: `${SITE_URL}/`, en: `${SITE_URL}/en` } } },
    { url: `${SITE_URL}/portfolio`, lastModified: now, alternates: { languages: { it: `${SITE_URL}/portfolio`, en: `${SITE_URL}/en/portfolio` } } },
    { url: `${SITE_URL}/en/portfolio`, lastModified: now, alternates: { languages: { it: `${SITE_URL}/portfolio`, en: `${SITE_URL}/en/portfolio` } } },
    { url: `${SITE_URL}/lineeguida`, lastModified: now },
    { url: `${SITE_URL}/privacy`, lastModified: now },
  ];
}