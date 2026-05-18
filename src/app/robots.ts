// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/pricing",
      },
    ],
    sitemap: "https://build-with-ugob.com.ng/sitemap.xml",
    host: "https://build-with-ugob.com.ng",
  };
}

