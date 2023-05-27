import {MetadataRoute} from "next";
import {url} from "@/app/sitemap";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: url("sitemap.xml"),
  };
}