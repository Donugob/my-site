"use client";

import React, { useState, useEffect } from "react";
import Services from "@/components/Services";
import { motion } from "framer-motion";

const ServicesContent = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const process = [
    {
      number: "01",
      title: "Discovery",
      description: "Understanding your business goals, target audience, and ideal design style.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Planning the layout structure, page flow, and high-converting message outline.",
    },
    {
      number: "03",
      title: "Bespoke Design",
      description: "Creating unique visual identity, typography, and beautiful mockups.",
    },
    {
      number: "04",
      title: "Development",
      description: "Coding ultra-fast responsive pages and setting up top-tier SEO optimizations.",
    },
    {
      number: "05",
      title: "Launch",
      description: "Going live successfully, with ongoing optimization and hands-on guidance.",
    },
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "A typical bespoke website takes between 3 to 6 weeks from initial consultation to final launch, depending on the complexity.",
    },
    {
      question: "What platforms and technologies do you use?",
      answer: "We build custom websites using React, Next.js, and custom styling to ensure your website is ultra-fast, highly secure, and easy to scale.",
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes, every website we deliver comes with a 30-day premium support period for training, edits, and general assistance, with optional ongoing monthly retainers.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-bg">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-8">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Our Expertise
            </div>
            <h1 className="text-5xl lg:text-8xl font-display font-light text-brand-text mb-8 tracking-tight leading-[1.05]">
              What we <br />
              <span className="font-serif italic text-primary font-normal">offer.</span>
            </h1>
            <p className="text-lg text-brand-subtle max-w-2xl mx-auto leading-relaxed font-light mb-16 font-sans">
              We design and build bespoke, high-performance websites tailored to help ambitious brands grow, build trust, and gain search visibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
            <div className="bg-brand-surface border border-black/5 p-10 rounded-[32px] hover:border-primary/20 transition-all duration-500 shadow-sm">
              <div className="text-4xl font-serif font-light text-primary mb-2 italic">3-6 Wks</div>
              <div className="text-[10px] text-brand-subtle uppercase tracking-widest font-semibold font-sans">Average Delivery</div>
            </div>
            <div className="bg-brand-surface border border-black/5 p-10 rounded-[32px] hover:border-primary/20 transition-all duration-500 shadow-sm">
              <div className="text-4xl font-serif font-light text-primary mb-2 italic">100%</div>
              <div className="text-[10px] text-brand-subtle uppercase tracking-widest font-semibold font-sans">Bespoke Design</div>
            </div>
            <div className="bg-brand-surface border border-black/5 p-10 rounded-[32px] hover:border-primary/20 transition-all duration-500 shadow-sm">
              <div className="text-4xl font-serif font-light text-primary mb-2 italic">Rank #1</div>
              <div className="text-[10px] text-brand-subtle uppercase tracking-widest font-semibold font-sans">SEO Optimized</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-brand-surface border-t border-b border-black/5">
        <Services />
      </section>

      {/* Process Section */}
      <section className="py-32 bg-brand-bg relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-5xl lg:text-6xl font-display font-light text-brand-text mb-6">
                  Our <span className="font-serif italic text-primary font-normal">Process</span>
                </h2>
                <p className="text-brand-subtle font-light font-sans text-base leading-relaxed">A strategic, collaborative approach to delivering refined websites with zero guesswork.</p>
              </div>
              <div className="text-[10px] text-brand-subtle font-bold uppercase tracking-[0.3em] pb-2 font-sans">Our Creative Strategy</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step, idx) => (
                <div key={idx} className="group relative bg-brand-surface/50 p-8 rounded-3xl border border-black/5 hover:border-primary/20 hover:bg-brand-surface transition-all duration-500 shadow-sm">
                  <div className="text-4xl font-serif font-light text-black/5 group-hover:text-primary/20 transition-colors mb-6 italic">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-sans font-semibold text-brand-text mb-3 group-hover:text-primary transition-colors tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-xs text-brand-subtle leading-relaxed font-light font-sans">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-brand-surface">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-display font-light text-brand-text mb-6">Common <span className="font-serif italic text-primary font-normal">Questions</span></h2>
              <p className="text-brand-subtle font-light font-sans text-sm">Everything you need to know about working with us.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-brand-bg rounded-2xl p-8 border border-black/5 hover:border-primary/10 transition-all cursor-pointer shadow-sm">
                  <summary className="flex items-center justify-between font-semibold text-brand-text tracking-tight list-none text-base font-sans">
                    <span className="text-left">{faq.question}</span>
                    <svg className="w-4 h-4 text-primary group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </summary>
                  <p className="mt-6 text-brand-subtle text-sm leading-relaxed font-light font-sans">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-brand-surface rounded-[40px] p-16 lg:p-24 border border-black/5 text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
             
            <h2 className="text-5xl lg:text-7xl font-display font-light text-brand-text leading-[1.05] mb-8 relative z-10">
              Ready to <br />
              <span className="font-serif italic text-primary font-normal">Start?</span>
            </h2>
            <p className="text-lg text-brand-subtle max-w-xl mx-auto leading-relaxed font-light mb-12 relative z-10 font-sans">
              Chat with us today on WhatsApp to discuss your goals, share your ideas, and get a tailored project scope.
            </p>
            
            <a
              href="https://wa.me/2348103579586"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-primary-dark shadow-sm relative z-10"
            >
              Start on WhatsApp
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesContent;
