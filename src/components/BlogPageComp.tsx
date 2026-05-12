"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";

const BlogPageComp = () => {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const [featured, ...recentPosts] = blogPosts;

  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-brand-bg">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center mb-24"
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-8">
              Technical Insights
            </div>
            <h1 className="text-6xl lg:text-9xl font-display font-black text-white italic uppercase tracking-tighter leading-[0.85] mb-10">
              Intellectual <br />
              <span className="text-primary not-italic">Assets</span>
            </h1>
            <p className="text-xl text-gray-400 font-light max-w-xl mx-auto leading-relaxed">
              Synthesized intelligence on digital engineering, high-performance design, and the future of the web.
            </p>
          </motion.div>

          {/* Featured Asset */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-6xl mx-auto"
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group block relative bg-brand-surface rounded-[40px] overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-700"
            >
               <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-square lg:aspect-auto overflow-hidden">
                    <Image
                      src={featured.coverImage}
                      alt={featured.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-brand-bg/20 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  
                  <div className="p-12 lg:p-20 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-gray-500 mb-8">
                       <span>{featured.readTime}</span>
                       <span className="w-1 h-1 rounded-full bg-primary"></span>
                       <span>{new Date(featured.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-display font-black text-white italic uppercase tracking-tighter leading-tight mb-8 group-hover:text-primary transition-colors">
                      {featured.title}
                    </h2>
                    
                    <p className="text-gray-400 font-light leading-relaxed mb-10 line-clamp-3">
                      {featured.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6">
                       <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                          <Image src={featured.author.avatar} alt={featured.author.name} fill className="object-cover" />
                       </div>
                       <div>
                          <div className="text-sm font-bold text-white uppercase tracking-tight italic">{featured.author.name}</div>
                          <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">{featured.author.role}</div>
                       </div>
                    </div>
                  </div>
               </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-20 justify-center">
              {["all", "development", "design", "strategy"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-8 py-3 text-[10px] font-black uppercase tracking-[0.3em] rounded-full transition-all border ${
                    activeFilter === filter
                      ? "bg-primary border-primary text-black"
                      : "bg-transparent border-white/10 text-gray-500 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {recentPosts.map((post, idx) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-brand-surface rounded-[32px] overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-500"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                      <Image src={post.coverImage} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
                        <span>{post.category}</span>
                        <span className="w-1 h-1 rounded-full bg-white/20"></span>
                        <span className="text-gray-500">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-display font-black text-white italic uppercase tracking-tight leading-tight mb-6 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
                          <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.author.name}</span>
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
      <section className="py-32 bg-brand-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
             <h2 className="text-5xl lg:text-7xl font-display font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-10">
              Stay <br />
              <span className="text-primary not-italic">Synchronized</span>
            </h2>
            <p className="text-lg text-gray-400 font-light mb-12 max-w-md mx-auto">
              Direct access to technical roadmaps and strategic insights. No noise, just engineering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Digital Identity (Email)"
                className="flex-1 bg-brand-bg border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 transition-all text-white text-sm"
              />
              <button className="px-10 py-4 bg-primary text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white transition-all duration-300">
                Authorize
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPageComp;
