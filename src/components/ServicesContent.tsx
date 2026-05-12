"use client";

import React, { useState, useEffect } from "react";
import Services from "@/components/Services";
import Link from "next/link";
import { motion } from "framer-motion";

const ServicesContent = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const process = [
    {
      number: "01",
      title: "Archetype Discovery",
      description: "We deep-dive into your ecosystem to identify core requirements and user behaviors.",
    },
    {
      number: "02",
      title: "Strategic Blueprint",
      description: "Architecting the technical roadmap and UI/UX narrative for maximum impact.",
    },
    {
      number: "03",
      title: "Precision Engineering",
      description: "Bespoke development using the cutting edge of full-stack engineering protocols.",
    },
    {
      number: "04",
      title: "Stress Testing",
      description: "Rigorous optimization for performance, security, and cross-platform reliability.",
    },
    {
      number: "05",
      title: "Deployment & Scaling",
      description: "Launching into production with ongoing intelligence and infrastructure support.",
    },
  ];

  const faqs = [
    {
      question: "What is the typical engineering timeline?",
      answer: "High-performance systems typically require 6-12 weeks for full-scale execution. We provide detailed milestones throughout the cycle.",
    },
    {
      question: "Which protocols and stacks do you deploy?",
      answer: "We specialize in the Next.js 16 ecosystem, Edge Runtime, Neural Networks integration, and real-time architectures.",
    },
    {
      question: "Do you offer post-launch support?",
      answer: "All systems include a 30-day technical support period. We also offer ongoing maintenance retainers for continuous scaling.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-bg">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-8">
              Capabilities Manifest
            </div>
            <h1 className="text-6xl lg:text-8xl font-display font-medium text-white mb-8 tracking-tighter leading-[0.9]">
              Engineered <br />
              <span className="text-primary italic">Dominance</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-16">
              We architect high-availability digital assets designed for performance, immersion, and conversion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20">
            <div className="bg-brand-surface border border-white/5 p-10 rounded-[32px] hover:border-primary/20 transition-all duration-500">
              <div className="text-4xl font-display font-black text-primary mb-2 italic tracking-tighter">6-12W</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Average Delivery</div>
            </div>
            <div className="bg-brand-surface border border-white/5 p-10 rounded-[32px] hover:border-primary/20 transition-all duration-500">
              <div className="text-4xl font-display font-black text-primary mb-2 italic tracking-tighter">99.9%</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">System Uptime</div>
            </div>
            <div className="bg-brand-surface border border-white/5 p-10 rounded-[32px] hover:border-primary/20 transition-all duration-500">
              <div className="text-4xl font-display font-black text-primary mb-2 italic tracking-tighter">GLOBAL</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Deploy Readiness</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-brand-surface">
        <Services />
      </section>

      {/* Process Section */}
      <section className="py-32 bg-brand-bg relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
        
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div className="max-w-xl">
                <h2 className="text-5xl lg:text-6xl font-display font-medium text-white tracking-tighter leading-[0.9] mb-6">
                  Execution <span className="text-primary italic">Protocol</span>
                </h2>
                <p className="text-gray-400 font-light">A systematic approach to engineering excellence and transparent project lifecycle management.</p>
              </div>
              <div className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em] pb-2">Verified Methodology // 2026</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step, idx) => (
                <div key={idx} className="group relative bg-brand-surface p-8 rounded-3xl border border-white/5 hover:border-primary/20 transition-all duration-500">
                  <div className="text-4xl font-display font-black text-white/5 group-hover:text-primary/20 transition-colors mb-6 italic">
                    {step.number}
                  </div>
                  <h3 className="text-sm font-black text-white uppercase tracking-widest italic mb-3 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-light">
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
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-display font-medium text-white tracking-tighter mb-6">Intelligence <span className="text-primary italic">Gathering</span></h2>
              <p className="text-gray-500 font-light">Commonly queried protocols regarding our engineering services.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-brand-bg rounded-2xl p-8 border border-white/5 hover:border-primary/10 transition-all cursor-pointer">
                  <summary className="flex items-center justify-between font-bold text-white uppercase tracking-tight list-none text-sm italic">
                    <span className="text-left">{faq.question}</span>
                    <svg className="w-5 h-5 text-primary group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </summary>
                  <p className="mt-6 text-gray-400 text-sm leading-relaxed font-light">
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
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-brand-surface rounded-[40px] p-16 lg:p-24 border border-white/5 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
             
             <h2 className="text-5xl lg:text-7xl font-display font-medium text-white tracking-tighter leading-[0.85] mb-8 relative z-10">
              Initialize <br />
              <span className="text-primary italic">Deployment</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed font-light mb-12 relative z-10">
              Coordinate with our engineering team for immediate project scoping and architectural review.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] group relative z-10"
            >
              Start Consultation
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesContent;
