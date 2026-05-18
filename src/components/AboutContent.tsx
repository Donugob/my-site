"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AboutContent = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const timeline = [
    {
      year: "2019",
      title: "The Beginning",
      description: "Began designing and developing clean, fast websites for local businesses in Owerri.",
    },
    {
      year: "2021",
      title: "Full-Stack Platforms",
      description: "Expanded into full-stack custom solutions, payment integration, and brand identity.",
    },
    {
      year: "2022",
      title: "JurisMemo Launch",
      description: "Launched JurisMemo, a successful digital resource hub for legal professionals in Nigeria.",
    },
    {
      year: "2026",
      title: "Build with Ugo.B",
      description: "Formed a premier design studio focused on bespoke aesthetics and search engine growth.",
    },
  ];

  const values = [
    {
      title: "Bespoke Styling",
      description: "We focus on every layout detail and font pairing to ensure your website feels premium and fits your brand.",
    },
    {
      title: "Conversion Mindset",
      description: "We build layouts that are simple to navigate and tailored specifically to drive customer action.",
    },
    {
      title: "Lightning Performance",
      description: "We use modern development standards to ensure your pages load instantly and run flawlessly.",
    },
    {
      title: "Honest Cooperation",
      description: "We maintain full transparency, clear roadmaps, and straightforward communication.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-bg">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-8">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Our Story
            </div>
            <h1 className="text-5xl lg:text-8xl font-display font-light text-brand-text mb-10 tracking-tight leading-[1.05]">
              Bespoke styling <br />
              <span className="font-serif italic text-primary font-normal">tailored for your brand.</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left mt-20 items-start">
              <p className="text-2xl text-brand-text font-light leading-snug font-serif">
                “We design online experiences that communicate your value, build instant brand authority, and turn visitors into clients.”
              </p>
              <div className="space-y-6 text-brand-subtle font-light leading-relaxed font-sans text-base">
                <p>
                  I am <span className="text-brand-text font-semibold italic">Ugo B.</span> — the lead designer and developer behind the studio. I combine creative styling with practical web development to build sites that solve business problems and stand out.
                </p>
                <p>
                  Based in Owerri, Imo State, we serve ambitious companies and brands globally, making sure every digital experience is as beautiful as it is high-performing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-brand-surface relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl lg:text-6xl font-display font-light text-brand-text mb-4">
                Our <span className="font-serif italic text-primary font-normal">Trajectory</span>
              </h2>
              <p className="text-brand-subtle font-light font-sans text-sm">From initial code to a premium custom design studio.</p>
            </div>

            <div className="relative space-y-24">
              {/* Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black/5 -translate-x-1/2 hidden lg:block"></div>

              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 0 ? "" : "lg:flex-row-reverse"}`}
                >
                  <div className="flex-1 text-center lg:text-left">
                    <div className={`flex flex-col ${idx % 2 === 0 ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"}`}>
                      <div className="text-4xl font-serif font-light text-primary mb-4 italic tracking-tight">{item.year}</div>
                      <h3 className="text-lg font-sans font-semibold text-brand-text mb-3 tracking-tight">{item.title}</h3>
                      <p className="text-brand-subtle font-light leading-relaxed max-w-sm font-sans text-sm">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10 w-4 h-4 rounded-full bg-primary border-4 border-brand-bg shadow-sm"></div>
                  
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-6">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Operating Principles
              </div>
              <h2 className="text-5xl lg:text-6xl font-display font-light text-brand-text mb-4">
                How we <span className="font-serif italic text-primary font-normal">work</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="group p-10 bg-brand-surface/50 border border-black/5 rounded-[32px] hover:border-primary/20 hover:bg-brand-surface transition-all duration-500 shadow-sm">
                  <h3 className="text-lg font-sans font-semibold text-brand-text mb-4 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-brand-subtle font-light leading-relaxed font-sans">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-brand-surface relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-7xl font-serif font-light text-brand-text mb-2 italic">25+</div>
              <div className="text-[10px] text-primary uppercase tracking-[0.3em] font-bold font-sans">Websites Launched</div>
            </div>
            <div>
              <div className="text-7xl font-serif font-light text-brand-text mb-2 italic">6+</div>
              <div className="text-[10px] text-primary uppercase tracking-[0.3em] font-bold font-sans">Years of Experience</div>
            </div>
            <div>
              <div className="text-7xl font-serif font-light text-brand-text mb-2 italic">100%</div>
              <div className="text-[10px] text-primary uppercase tracking-[0.3em] font-bold font-sans">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl lg:text-8xl font-display font-light text-brand-text leading-[1.05] mb-12">
              Let's build <br />
              <span className="font-serif italic text-primary font-normal">something beautiful.</span>
            </h2>
            <p className="text-lg text-brand-subtle max-w-xl mx-auto leading-relaxed font-light mb-16 font-sans">
              Ready to elevate your online presence? Chat with us today to discuss your next project.
            </p>
            
            <a
              href="https://wa.me/2348103579586"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-primary-dark shadow-sm"
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

export default AboutContent;
