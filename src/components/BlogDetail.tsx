"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

// --- Types ---
interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

// --- Client Component Wrapper for Metadata (Next.js Pattern) ---
// Note: Since we are using "use client" for animations, strictly speaking
// metadata exports need to be in a separate server file or layout.
// However, for this snippet, we will handle the UI.
// *If you need SEO, keep generateMetadata in a server wrapper.*

const BlogDetail = ({ params }: BlogDetailProps) => {
  // We unwrap params inside the component for the client-side hook usage
  // In a real Next.js 15+ app, you might `await` this in a parent server component
  // But for this structure, we'll handle the logic here.

  const [slug, setSlug] = useState<string>("");
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Unwrap the promise
    params.then((resolvedParams) => {
      setSlug(resolvedParams.slug);
      const foundPost = getBlogPostBySlug(resolvedParams.slug);
      if (!foundPost) notFound();
      setPost(foundPost);
      setLoading(false);
    });
  }, [params]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax for Hero
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (loading || !post) return null; // Or a skeleton loader

  const relatedPosts = blogPosts
    .filter((related) => related.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      {/* --- READING PROGRESS BAR --- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-left z-50"
        style={{ scaleX }}
      />

      {/* --- NAVIGATION (Floating) --- */}
      <nav className="fixed top-6 left-6 z-40">
        <Link
          href="/blog"
          className="group flex items-center justify-center w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-300"
        >
          <svg
            className="w-5 h-5 text-white group-hover:text-gray-900 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
        </Link>
      </nav>

      {/* --- IMMERSIVE HERO SECTION --- */}
      <header className="relative h-[85vh] min-h-[600px] flex items-end justify-center overflow-hidden bg-gray-900">
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-80"
          />
          {/* Complex Gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
        </motion.div>

        <div className="container relative z-10 px-6 pb-20 lg:pb-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 text-xs font-bold tracking-wider text-blue-300 uppercase bg-blue-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                {post.category}
              </span>
              <span className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-lg">
                  {post.author.name}
                </span>
                <span className="text-gray-400 text-sm">
                  {new Date(post.publishedAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- CONTENT CONTAINER --- 
          Negative margin pulls it up over the hero image for that "Card" effect
      */}
      <main className="relative z-20 -mt-12 bg-white rounded-t-[2.5rem] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-200 rounded-full mt-4" />

        <article className="container max-w-3xl mx-auto px-6 pt-20 pb-24">
          {/* Content Body */}
          <div className="prose prose-lg prose-blue md:prose-xl mx-auto">
            {/* The Hook: Make the first paragraph distinct */}
            {post.content.map((paragraph: string, index: number) => (
              <p
                key={index}
                className={`mb-8 leading-relaxed text-gray-700 ${
                  index === 0
                    ? "text-xl md:text-2xl font-medium text-gray-900 leading-relaxed border-l-4 border-blue-600 pl-6 italic"
                    : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">
              Topic Tags
            </h4>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share / Interaction Section */}
          <div className="mt-16 p-8 bg-blue-50 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                Enjoyed this read?
              </h3>
              <p className="text-blue-700/80 text-sm">
                Share this article with your network.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="p-3 bg-white text-blue-600 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </button>
              <button className="p-3 bg-white text-blue-600 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
            </div>
          </div>
        </article>
      </main>

      {/* --- RELATED ARTICLES --- */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-24 border-t border-gray-200">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Read Next
                </h2>
                <p className="text-gray-500">
                  More thoughts on {post.category}
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:block px-6 py-3 rounded-full border border-gray-300 text-sm font-semibold hover:bg-gray-900 hover:text-white hover:border-transparent transition-all"
              >
                View all posts
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={related.coverImage}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-gray-900">
                      {related.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-6">
                      {related.excerpt}
                    </p>
                    <span className="text-sm font-bold text-blue-600 flex items-center gap-2">
                      Read Article
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 md:hidden">
              <Link
                href="/blog"
                className="block w-full py-4 text-center rounded-xl border border-gray-300 text-sm font-semibold hover:bg-gray-50 transition-all"
              >
                View all posts
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogDetail;
