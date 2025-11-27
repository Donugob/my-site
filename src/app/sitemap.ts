import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
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
    {
      url: "https://build-with-ugob.com.ng/blog",
      lastModified: new Date(),
    },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    url: `https://build-with-ugob.com.ng/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
  }));

  return [...routes, ...blogRoutes];
}
