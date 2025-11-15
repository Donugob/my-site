"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const AboutPage = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const timeline = [
    {
      year: "2019",
      title: "The Spark",
      description:
        "Built my first static site using just HTML & CSS and discovered a new passion.",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
    {
      year: "2021",
      title: "Law + Code",
      description:
        "Began balancing legal studies with freelance client projects, honing my skills in PHP, JavaScript, and real-world problem-solving.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          ></path>
        </svg>
      ),
    },
    {
      year: "2022",
      title: "The Growth",
      description:
        "Built my first personal project, Jurismemo, a legal research tool for Nigerian law students. Gained traction and positive feedback.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          ></path>
        </svg>
      ),
    },
    {
      year: "2025",
      title: "Going Official",
      description:
        "Built a lot of client and personal projects, got Build With Ugo.B officially registered with the CAC, and committed to providing trusted, professional web services in Owerri.",
      icon: (
        <svg
          className="w-6 h-6"
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
      ),
    },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "Every line of code, every pixel matters. We deliver nothing but the best.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Innovation",
      description:
        "We stay ahead of trends, using cutting-edge tech to build future-proof solutions.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Integrity",
      description:
        "Honest timelines, transparent pricing, and a commitment to your success.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Growth",
      description:
        "Your success is our success. We build solutions that scale with your business.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div
            className="max-w-4xl mx-auto text-center"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease",
            }}
          >
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-6">
              My Story
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              From Law to Code
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Hi, I'm <span className="font-semibold text-gray-900">Ugo.B</span>
              , a Nigerian Law student by day and a full-stack web developer by
              night.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              While mastering the Law at Imo State University, I discovered the
              creative power of digital craft. I built my first website in 2019
              and was hooked. Today, Build With Ugo.B is a top agency delivering
              modern, fast, and SEO-dominant websites to businesses across
              Owerri and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                The Journey
              </h2>
              <p className="text-lg text-gray-600">
                From first line of code to registered business
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 lg:left-1/2 lg:transform lg:-translate-x-1/2"></div>

              {timeline.map((item, idx) => (
                <div
                  key={idx}
                  className="relative mb-12 last:mb-0"
                  onMouseEnter={() => setActiveTimeline(idx)}
                  onMouseLeave={() => setActiveTimeline(null)}
                >
                  <div
                    className={`lg:flex lg:items-center ${
                      idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`lg:w-5/12 ml-20 lg:ml-0 ${
                        idx % 2 === 0 ? "lg:pr-12 lg:text-right" : "lg:pl-12"
                      }`}
                    >
                      <div
                        className={`bg-white p-6 rounded-2xl border-2 transition-all duration-300 ${
                          activeTimeline === idx
                            ? "border-blue-600 shadow-xl shadow-blue-600/10"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="text-sm font-semibold text-blue-600 mb-2">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="absolute left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex items-center justify-center">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                          activeTimeline === idx
                            ? "bg-blue-600 text-white scale-110"
                            : "bg-white text-blue-600 border-2 border-gray-200"
                        }`}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-5/12"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What I Stand For
              </h2>
              <p className="text-lg text-gray-600">
                The principles that guide every project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors group-hover:scale-110 duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                  6
                </div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My Tech Stack
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Tools and technologies I use to bring ideas to life
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "Tailwind",
                "PostgreSQL",
                "MongoDB",
                "Git",
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {tech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Let's Build Something Together
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Whether you're a startup or an established business, I'm here to
              help bring your digital vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
              >
                Start a Project
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
