import type { Metadata } from "next";
import BlogPageComp from "@/components/BlogPageComp";

export const metadata: Metadata = {
  title: "Technical Insights, Brand Strategy & Growth Essays",
  description:
    "Explore Build with Ugo.B's intellectual assets. Essays, guides, and tutorials on modern web engineering, branding design, and local search growth strategies in Nigeria.",
  alternates: {
    canonical: "https://build-with-ugob.com.ng/blog",
  },
  openGraph: {
    title: "Technical Insights, Brand Strategy & Growth Essays | Build with Ugo.B",
    description:
      "Bespoke digital essays on search engine optimization, web page performance design, and fullstack coding by Build with Ugo.B.",
    url: "https://build-with-ugob.com.ng/blog",
    type: "website",
  },
};

const BlogPage = () => <BlogPageComp />;

export default BlogPage;
