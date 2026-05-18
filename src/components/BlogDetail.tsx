"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { blogPosts, getBlogPostBySlug } from "@/data/blogPosts";

interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

const BlogDetail = ({ params }: BlogDetailProps) => {
  const [slug, setSlug] = useState<string>("");
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.2]);

  if (loading || !post) return null;

  const relatedPosts = blogPosts
    .filter((related) => related.slug !== post.slug)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      {/* --- READING PROGRESS BAR --- */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      {/* --- NAVIGATION (Floating) --- */}
      <nav className="fixed top-6 left-6 z-40">
        <Link
          href="/blog"
          className="group flex items-center justify-center w-12 h-12 bg-brand-bg/85 backdrop-blur-md border border-black/5 rounded-full shadow-sm hover:bg-brand-surface hover:scale-105 transition-all duration-300"
          aria-label="Back to blog list"
        >
          <svg
            className="w-5 h-5 text-brand-text transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Link>
      </nav>

      {/* --- IMMERSIVE HERO SECTION --- */}
      <header className="relative h-[75vh] min-h-[500px] flex items-end justify-center overflow-hidden bg-brand-surface border-b border-black/5">
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
          className="absolute inset-0 z-0 bg-brand-surfaceBright"
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-90 grayscale"
            unoptimized
          />
          {/* Subtle warm overlay to ease the photo transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/30 to-transparent" />
        </motion.div>

        <div className="container relative z-10 px-6 pb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-primary/15 bg-brand-bg/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.2em] font-sans text-primary font-bold shadow-sm">
                {post.category}
              </span>
              <span className="text-xs font-medium text-brand-subtle flex items-center gap-1.5 font-sans">
                <svg className="w-3.5 h-3.5 text-primary/60" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                {post.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-light text-brand-text mb-8 leading-[1.1] tracking-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-black/5 bg-brand-surfaceBright grayscale">
                <Image
                  src="/ugob.jpg"
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-brand-text font-semibold text-sm font-sans">
                  {post.author.name}
                </span>
                <span className="text-brand-subtle text-xs font-sans">
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
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

      {/* --- CONTENT CONTAINER --- */}
      <main className="relative z-20 bg-brand-bg">
        <article className="container max-w-3xl mx-auto px-6 pt-20 pb-24 text-left">
          {/* Content Body */}
          <div className="prose prose-stone prose-lg max-w-none mx-auto text-brand-text">
            {post.content.map((paragraph: string, index: number) => (
              <p
                key={index}
                className={`mb-6 leading-relaxed text-brand-text font-sans font-light ${
                  index === 0
                    ? "text-lg md:text-xl font-serif italic text-primary leading-relaxed border-l-2 border-primary pl-6 mb-8 font-normal"
                    : "text-sm md:text-base"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-16 pt-10 border-t border-black/5">
            <h4 className="text-xs font-bold text-brand-subtle uppercase tracking-wider mb-6 font-sans">
              Topic Tags
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-brand-surface text-brand-subtle rounded-full text-xs font-medium border border-black/5 hover:border-primary/20 hover:text-primary transition-all duration-300 font-sans cursor-default"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-16 p-8 bg-brand-surface border border-black/5 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="text-left">
              <h3 className="text-lg font-display font-light text-brand-text mb-1">
                Enjoyed this read?
              </h3>
              <p className="text-brand-subtle text-xs font-sans">
                Share this article with your professional network.
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?url=https://build-with-ugob.com.ng/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-bg border border-black/5 text-brand-text hover:text-primary hover:border-primary/30 rounded-full shadow-sm hover:scale-105 transition-all duration-300"
                aria-label="Share on X"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://build-with-ugob.com.ng/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-brand-bg border border-black/5 text-brand-text hover:text-primary hover:border-primary/30 rounded-full shadow-sm hover:scale-105 transition-all duration-300"
                aria-label="Share on LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </article>
      </main>

      {/* --- RELATED ARTICLES --- */}
      {relatedPosts.length > 0 && (
        <section className="bg-brand-surface py-24 border-t border-black/5">
          <div className="container max-w-6xl mx-auto px-6 lg:px-12">
            <div className="flex justify-between items-end mb-12">
              <div className="text-left">
                <h2 className="text-3xl font-display font-light text-brand-text mb-2">
                  Read Next
                </h2>
                <p className="text-xs text-brand-subtle font-sans">
                  More strategic advice on {post.category}
                </p>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-black/10 text-[10px] font-sans font-bold uppercase tracking-widest hover:border-primary/30 hover:bg-brand-bg transition-all shadow-sm"
              >
                View all posts
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group block bg-brand-bg rounded-[32px] overflow-hidden border border-black/5 hover:border-primary/20 hover:shadow-md transition-all duration-300 shadow-sm"
                >
                  <div className="relative h-60 overflow-hidden bg-brand-surfaceBright grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image
                      src={related.coverImage}
                      alt={related.title}
                      fill
                      className="object-cover transition-transform duration-750 group-hover:scale-[1.02]"
                      unoptimized
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-brand-bg/95 border border-black/5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider text-brand-text">
                      {related.category}
                    </div>
                  </div>
                  <div className="p-8 text-left">
                    <h3 className="text-xl font-display font-light text-brand-text mb-3 group-hover:text-primary transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-xs text-brand-subtle font-sans font-light line-clamp-2 mb-6 leading-relaxed">
                      {related.excerpt}
                    </p>
                    <span className="text-xs font-sans font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                      Read Article
                      <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 md:hidden">
              <Link
                href="/blog"
                className="block w-full py-4 text-center rounded-2xl border border-black/10 text-xs font-bold uppercase tracking-wider bg-brand-bg hover:bg-brand-surface transition-all font-sans"
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
