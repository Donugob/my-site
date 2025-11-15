"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const ContactCTA = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Card */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-3xl p-12 lg:p-16 overflow-hidden group"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.8s ease",
            }}
          >
            {/* Animated gradient overlay following mouse */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1), transparent 40%)`,
              }}
            ></div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl"></div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            <div className="relative z-10">
              {/* Top Section */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-blue-400 font-medium">
                    Available for New Projects
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Start
                  <br />
                  Something Amazing?
                </h2>

                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Let's transform your vision into a digital experience that
                  drives results. We typically respond within 24 hours.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
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
                      ></path>
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <a
                  href="mailto:hello@buildwithugob.com"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  Email Us
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    24 Hours
                  </div>
                  <p className="text-sm text-gray-400">Average Response Time</p>
                </div>

                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <p className="text-sm text-gray-400">Successful Projects</p>
                </div>

                <div className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <svg
                      className="w-8 h-8 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <p className="text-sm text-gray-400">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Contact Info Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.3s",
            }}
          >
            <a
              href="mailto:hello@buildwithugob.com"
              className="group flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Email</div>
                <div className="font-semibold text-gray-900 text-sm">
                  hello@buildwithugob.com
                </div>
              </div>
            </a>

            <a
              href="tel:+2348103579586"
              className="group flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Phone</div>
                <div className="font-semibold text-gray-900 text-sm">
                  +234 810 357 9586
                </div>
              </div>
            </a>

            <div className="group flex items-center gap-4 p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                <svg
                  className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">Location</div>
                <div className="font-semibold text-gray-900 text-sm">
                  Owerri, Nigeria
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
