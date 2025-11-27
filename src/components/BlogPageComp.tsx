"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogPosts";

const BlogPageComp = () => {
  const [mounted, setMounted] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setMounted(true);
  }, []);

  const [featured, ...recentPosts] = blogPosts;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Refined & Minimal */}
      <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div
            className="max-w-2xl mx-auto text-center mb-12 sm:mb-16"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-50 rounded-full mb-4">
              Latest Insights
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-[1.1] tracking-tight">
              Stories Worth
              <br />
              Reading
            </h1>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
              Thoughtful articles on web development, design, and building
              better digital experiences.
            </p>
          </div>

          {/* Featured Post - Clean Card Design */}
          <div
            className="max-w-5xl mx-auto"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
            }}
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group block bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-gray-100">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />

                {/* Featured Badge - Mobile Optimized */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-bold text-white bg-blue-600 rounded-full uppercase tracking-wider">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8 lg:p-10">
                {/* Meta Info */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-3">
                  <span>{featured.readTime}</span>
                  <span className="text-gray-300">•</span>
                  <span>
                    {new Date(featured.publishedAt).toLocaleDateString(
                      "en-US",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      }
                    )}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                  {featured.title}
                </h2>

                {/* Excerpt */}
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5 sm:mb-6 line-clamp-2 sm:line-clamp-3">
                  {featured.excerpt}
                </p>

                {/* Tags - Horizontal Scroll on Mobile */}
                <div className="flex gap-2 mb-5 sm:mb-6 overflow-x-auto pb-2 scrollbar-hide">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg whitespace-nowrap flex-shrink-0"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                      <Image
                        src={featured.author.avatar}
                        alt={featured.author.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">
                        {featured.author.name}
                      </p>
                      <p className="text-gray-500 text-xs hidden sm:block">
                        {featured.author.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                    <span className="hidden sm:inline">Read article</span>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                Recent Articles
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Latest thoughts and insights
              </p>
            </div>

            {/* Filter Tabs - Mobile Optimized */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {["all", "development", "design", "strategy"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-all flex-shrink-0 ${
                    activeFilter === filter
                      ? "bg-gray-900 text-white"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>

            {/* Posts Grid - Mobile First */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {recentPosts.map((post, idx) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
                  style={{
                    opacity: mounted ? 1 : 0,
                    transform: mounted ? "translateY(0)" : "translateY(15px)",
                    transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${
                      0.1 + idx * 0.05
                    }s`,
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 bg-white/95 backdrop-blur-sm text-gray-900 text-[10px] font-semibold rounded-md uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    {/* Meta */}
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <span>{post.readTime}</span>
                      <span className="text-gray-300">•</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>

                    {/* Excerpt - Hidden on smallest screens */}
                    <p className="hidden sm:block text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Tags - Limit to 2 */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-medium rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-2 pt-3 border-t border-gray-50">
                      <div className="relative w-7 h-7 sm:w-8 sm:h-8">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-700">
                        {post.author.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Simplified */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Stay Updated
                </h3>
                <p className="text-sm sm:text-base text-gray-300 max-w-md mx-auto">
                  Get new articles delivered to your inbox. No spam, unsubscribe
                  anytime.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all text-sm"
                />
                <button className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 active:scale-95 transition-all text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPageComp;
