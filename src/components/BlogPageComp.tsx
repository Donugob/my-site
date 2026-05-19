"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";

const BlogPageComp = () => {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to subscribe.");
      }

      setStatus("success");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong.");
    }
  };

  const [featured, ...recentPosts] = blogPosts;

  const filteredPosts = recentPosts.filter((post) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "engineering") {
      return (
        post.category.includes("Performance") ||
        post.category.includes("Engineering") ||
        post.category.includes("Web3")
      );
    }
    if (activeFilter === "strategy") {
      return (
        post.category.includes("SEO") ||
        post.category.includes("AI") ||
        post.category.includes("Strategy")
      );
    }
    if (activeFilter === "design") {
      return (
        post.category.includes("Web") ||
        post.category.includes("Design") ||
        post.category.includes("Brand")
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-brand-bg">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-8">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Technical Insights
            </div>
            <h1 className="text-5xl lg:text-8xl font-display font-light text-brand-text mb-8 tracking-tight leading-[1.05]">
              Intellectual <br />
              <span className="font-serif italic text-primary font-normal">Assets</span>
            </h1>
            <p className="text-lg text-brand-subtle max-w-xl mx-auto leading-relaxed font-light font-sans">
              Thoughtful essays, technical deep-dives, and strategic analyses on modern web engineering, branding, and local search growth.
            </p>
          </motion.div>

          {/* Featured Asset */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <Link
                href={`/blog/${featured.slug}`}
                className="group block relative bg-brand-surface rounded-[40px] overflow-hidden border border-black/5 hover:border-primary/20 hover:shadow-md transition-all duration-700 shadow-sm"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-square lg:aspect-auto overflow-hidden bg-brand-surfaceBright">
                    <Image
                      src={featured.coverImage}
                      alt={featured.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
                      priority
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-brand-bg/5 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  
                  <div className="p-12 lg:p-20 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-[10px] font-sans font-semibold uppercase tracking-widest text-brand-subtle mb-6">
                      <span>{featured.readTime}</span>
                      <span className="w-1 h-1 rounded-full bg-primary/30"></span>
                      <span>
                        {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-display font-light text-brand-text leading-tight mb-6 group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    
                    <p className="text-sm text-brand-subtle font-sans leading-relaxed font-light mb-8 line-clamp-3">
                      {featured.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 border-t border-black/5 pt-6 mt-6">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-black/5 bg-brand-surfaceBright grayscale">
                        <Image
                          src="/ugob.jpg"
                          alt={featured.author.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div className="text-left">
                        <div className="text-xs font-semibold text-brand-text font-sans">
                          {featured.author.name}
                        </div>
                        <div className="text-[10px] text-brand-subtle uppercase tracking-widest font-sans font-medium">
                          {featured.author.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Filters */}
            <div className="flex flex-wrap gap-3 mb-20 justify-center">
              {[
                { id: "all", label: "All Insights" },
                { id: "engineering", label: "Engineering" },
                { id: "strategy", label: "Strategy & SEO" },
                { id: "design", label: "Brand & Design" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2.5 text-[10px] font-sans font-bold uppercase tracking-[0.2em] rounded-full transition-all border ${
                    activeFilter === filter.id
                      ? "bg-primary border-primary text-white shadow-sm"
                      : "bg-transparent border-black/10 text-brand-subtle hover:border-primary/30 hover:text-brand-text"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col bg-brand-surface rounded-[32px] overflow-hidden border border-black/5 hover:border-primary/20 hover:shadow-md transition-all duration-500 shadow-sm w-full"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-brand-surfaceBright grayscale group-hover:grayscale-0 transition-all duration-500">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        unoptimized
                      />
                    </div>
                    
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex items-center gap-3 text-[10px] font-sans font-semibold uppercase tracking-widest text-primary mb-4">
                        <span>{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-primary/20"></span>
                        <span className="text-brand-subtle">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-display font-light text-brand-text leading-tight mb-4 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-xs text-brand-subtle font-sans leading-relaxed font-light mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-3 pt-6 border-t border-black/5 mt-auto">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-black/5 bg-brand-surfaceBright grayscale">
                          <Image
                            src="/ugob.jpg"
                            alt={post.author.name}
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>
                        <span className="text-[10px] font-sans font-semibold text-brand-subtle uppercase tracking-widest">
                          {post.author.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription */}
      <section className="py-32 bg-brand-surface border-t border-b border-black/5 relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-display font-light text-brand-text leading-[1.05] mb-8">
              Stay <br />
              <span className="font-serif italic text-primary font-normal">synchronized.</span>
            </h2>
            <p className="text-base text-brand-subtle font-sans font-light mb-12 max-w-md mx-auto">
              Direct access to local search updates, performance optimization tips, and digital growth playbooks.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="Digital Identity (Email)"
                required
                disabled={status === "loading" || status === "success"}
                className="flex-1 bg-brand-bg border border-black/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/30 transition-all text-brand-text text-sm font-sans placeholder-brand-subtle/50 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="px-10 py-4 bg-primary text-white font-sans font-bold uppercase tracking-widest text-xs rounded-2xl hover:bg-primary-dark transition-all duration-300 shadow-sm disabled:opacity-50 whitespace-nowrap"
              >
                {status === "loading" ? "Syncing..." : status === "success" ? "Authorized" : "Authorize"}
              </button>
            </form>

            {/* Premium feedback indicators */}
            <AnimatePresence mode="wait">
              {status === "error" && errorMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 text-xs font-sans font-bold tracking-[0.15em] text-red-500 uppercase flex items-center justify-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                  {errorMessage}
                </motion.p>
              )}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-6 text-xs font-sans font-bold tracking-[0.15em] text-green-600 uppercase flex items-center justify-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                  Synchronization Authorized
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPageComp;
