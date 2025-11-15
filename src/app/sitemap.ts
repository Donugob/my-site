import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://build-with-ugob.com.ng",
      lastModified: new Date(),
    },
    {
      url: "https://build-with-ugob.com.ng/about",
      lastModified: new Date(),
    },
    {
      url: "https://build-with-ugob.com.ng/contact",
      lastModified: new Date(),
    },
    {
      url: "https://build-with-ugob.com.ng/services",
      lastModified: new Date(),
    },
    {
      url: "https://build-with-ugob.com.ng/portfolio",
      lastModified: new Date(),
    },
  ];
}
