"use client";

import React, { useState, useRef, useEffect } from "react";
import Services from "@/components/Services"; // Your existing component
import Link from "next/link";

const ServicesPage = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const process = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and target audience through in-depth consultation.",
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
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description:
        "We create a detailed roadmap, wireframes, and technical specifications tailored to your needs.",
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
      ),
    },
    {
      number: "03",
      title: "Design & Development",
      description:
        "Our team brings your vision to life with modern designs and clean, scalable code.",
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
    },
    {
      number: "04",
      title: "Testing & Launch",
      description:
        "Rigorous testing ensures everything works perfectly before we launch your project to the world.",
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
      number: "05",
      title: "Support & Growth",
      description:
        "30 days of post-launch support, plus ongoing maintenance and optimization as you scale.",
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

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Most projects take 6-12 weeks from kickoff to launch, depending on complexity. We provide a detailed timeline during our initial consultation and keep you updated throughout the process.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We specialize in modern tech stacks including React, Next.js, Node.js, TypeScript, and Tailwind CSS. We choose the best tools based on your specific project requirements.",
    },
    {
      question: "Do you offer website maintenance?",
      answer:
        "Yes! All projects include 30 days of post-launch support. We also offer ongoing maintenance packages for updates, security patches, and feature additions.",
    },
    {
      question: "Can you work with my existing website?",
      answer:
        "Absolutely! We can audit, optimize, redesign, or add new features to existing websites. We work with most modern platforms and frameworks.",
    },
    {
      question: "What's your pricing structure?",
      answer:
        "Pricing varies based on project scope, complexity, and timeline. We offer fixed-price packages for standard projects and custom quotes for unique requirements. Contact us for a detailed proposal.",
    },
    {
      question: "Do you provide hosting services?",
      answer:
        "We can help you choose and set up the best hosting solution for your needs (Vercel, Netlify, AWS, etc.), and we provide guidance on deployment and maintenance.",
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
              What We Do
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Services That Drive
              <br />
              Digital Success
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              From concept to launch and beyond, we provide full-stack web
              development services that help businesses establish a powerful
              online presence and achieve measurable growth.
            </p>
          </div>

          {/* Quick Stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16"
            style={{
              opacity: hasAnimated ? 1 : 0,
              transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                6-12 Weeks
              </div>
              <div className="text-sm text-gray-600">Average Delivery Time</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                25+ Projects
              </div>
              <div className="text-sm text-gray-600">
                Successfully Delivered
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                30 Days
              </div>
              <div className="text-sm text-gray-600">Post-Launch Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Your existing Services component */}
      <Services />

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A proven process that ensures quality results and transparent
                communication every step of the way
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
                >
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors mt-4">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Modern Tech Stack
              </h2>
              <p className="text-lg text-gray-600">
                We use industry-leading technologies to build fast, secure, and
                scalable solutions
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "React", color: "blue" },
                { name: "Next.js", color: "gray" },
                { name: "Node.js", color: "green" },
                { name: "TypeScript", color: "blue" },
                { name: "Tailwind", color: "cyan" },
                { name: "PostgreSQL", color: "blue" },
                { name: "MongoDB", color: "green" },
                { name: "Stripe", color: "purple" },
                { name: "Vercel", color: "gray" },
                { name: "AWS", color: "orange" },
                { name: "Git", color: "orange" },
                { name: "Figma", color: "purple" },
                { name: "PHP", color: "blue" },
                { name: "Laravel", color: "red" },
              ].map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 text-center group"
                >
                  <div
                    className={`text-base font-semibold text-gray-900 group-hover:text-${tech.color}-600 transition-colors`}
                  >
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about our services
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                    <span className="text-left">{faq.question}</span>
                    <svg
                      className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0 ml-4"
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
                  </summary>
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Client Success Stories
              </h2>
              <p className="text-lg text-gray-600">
                See what our clients say about working with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "The team delivered our e-commerce platform ahead of schedule. Sales increased by 200% in the first three months. Highly recommend!",
                  author: "Richard Emeka",
                  role: "Owner, Richie's Pot",
                  avatar: "https://i.pravatar.cc/150?img=5",
                },
                {
                  quote:
                    "Professional, responsive, and technically excellent. They transformed our outdated site into a modern, high-performing platform.",
                  author: "Damilare",
                  role: "President, LSS UNILAWRIN",
                  avatar: "/damilare.webp",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-8 border border-gray-200"
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
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss your goals and create a custom solution that drives
              real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
              >
                Get a Free Quote
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
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
