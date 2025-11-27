import type { Metadata } from "next";
import BlogDetail from "@/components/BlogDetail";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  const url = `https://build-with-ugob.com.ng/blog/${post.slug}`;
  const imageUrl = new URL(
    post.coverImage,
    "https://build-with-ugob.com.ng"
  ).toString();

  return {
    title: `${post.title} | Build With Ugo.B`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | Build With Ugo.B`,
      description: post.excerpt,
      url,
      type: "article",
      authors: [post.author.name],
      tags: post.tags,
      publishedTime: post.publishedAt,
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Build With Ugo.B`,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

const BlogDetailPage = ({ params }: BlogDetailPageProps) => {
  return <BlogDetail params={params} />;
};

export default BlogDetailPage;
