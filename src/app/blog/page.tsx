import type { Metadata } from "next";
import BlogPageComp from "@/components/BlogPageComp";

export const metadata: Metadata = {
  title: "Blog | Build With Ugo.B",
  description:
    "Latest articles on web development, strategy, SEO, and building better Nigerian businesses.",
  alternates: {
    canonical: "https://build-with-ugob.com.ng/blog",
  },
  openGraph: {
    title: "Blog | Build With Ugo.B",
    description:
      "Thoughtful articles on web development, design, and digital strategy.",
    url: "https://build-with-ugob.com.ng/blog",
    type: "website",
  },
};

const BlogPage = () => <BlogPageComp />;

export default BlogPage;
