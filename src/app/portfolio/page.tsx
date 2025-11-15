import React from "react";
import Portfolio from "@/components/Portfolio";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the diverse portfolio of Build With Ugo.B, showcasing our expertise in creating high-performance, SEO-optimized websites that drive real business results.",
  openGraph: {
    title: "Portfolio of Build With Ugo.B",
    url: "https://build-with-ugob.com.ng/portfolio",
  },
};

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

        {/* Dot grid pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-6">
              Our Work
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Projects That Drive
              <br />
              Real Results
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
              From startups to established businesses, we've helped transform
              ideas into powerful digital experiences that users love and
              businesses grow with.
            </p>

            {/* Filter/Stats Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
                <svg
                  className="w-4 h-4 text-blue-600"
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
                <span className="font-medium text-gray-900">
                  50+ Projects Completed
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
                <svg
                  className="w-4 h-4 text-green-600"
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
                <span className="font-medium text-gray-900">
                  200% Avg Growth
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200">
                <svg
                  className="w-4 h-4 text-purple-600"
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
                <span className="font-medium text-gray-900">
                  6-12 Week Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your existing Portfolio component */}
      <Portfolio />

      {/* Services Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Services We Specialize In
            </h2>
            <p className="text-lg text-gray-600">
              Every project in our portfolio showcases our expertise across
              these key areas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    ></path>
                  </svg>
                ),
                title: "Web Development",
                description: "React, Next.js, Node.js",
              },
              {
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
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    ></path>
                  </svg>
                ),
                title: "UI/UX Design",
                description: "User-centered design",
              },
              {
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
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    ></path>
                  </svg>
                ),
                title: "Mobile Apps",
                description: "iOS & Android",
              },
              {
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
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                ),
                title: "SEO & Marketing",
                description: "Growth strategies",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Build With Ugo.B transformed our outdated website into a modern, high-performing platform. Sales increased by 200% in the first quarter!",
                  author: "Sarah Johnson",
                  role: "CEO, TechCorp",
                  avatar: "https://i.pravatar.cc/150?img=1",
                },
                {
                  quote:
                    "The attention to detail and commitment to our vision was exceptional. They delivered ahead of schedule and exceeded all expectations.",
                  author: "Michael Chen",
                  role: "Founder, StartupXYZ",
                  avatar: "https://i.pravatar.cc/150?img=2",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
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
              Ready to See Your Project Here?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's create something amazing together. Start your project today
              and join our portfolio of success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
              >
                Start Your Project
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
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                View More Projects
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
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
