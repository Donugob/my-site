"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative min-h-[95vh] bg-brand-bg overflow-hidden flex items-center justify-center pt-28 pb-16 border-b border-black/5">
      
      {/* Decorative architectural layout details */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40">
        <div className="absolute top-0 bottom-0 left-[10%] w-px bg-primary/5"></div>
        <div className="absolute top-0 bottom-0 right-[15%] w-px bg-primary/5"></div>
        <div className="absolute top-[40%] left-0 right-0 h-px bg-primary/5"></div>
      </div>

      {/* Gentle Warm Glowing Orbs */}
      <motion.div style={{ y: y1, opacity }} className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></motion.div>
      <motion.div style={{ y: y2, opacity }} className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></motion.div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Exquisite Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-8"
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Full-Service Web Design & Development Boutique
            </motion.div>

            <div className="relative mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-brand-text leading-[1.05] tracking-tight"
              >
                Websites that <br />
                <span className="font-serif italic text-primary font-normal">represent you</span> beautifully.
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-lg md:text-xl text-brand-subtle max-w-xl font-sans font-light leading-relaxed mb-10"
            >
              We design and build high-end web experiences that attract quality leads, showcase your brand's excellence, and make your clients trust you.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-primary overflow-hidden transition-all duration-300 shadow-sm hover:bg-primary-dark"
              >
                <span>Let's Discuss Your Project</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-sans uppercase tracking-widest text-brand-text border border-primary/10 hover:border-primary/30 bg-brand-surface/30 backdrop-blur-sm transition-all duration-300"
              >
                Browse Our Work
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Editorial Highlight Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[400px] aspect-[4/5] bg-brand-surface p-8 border border-primary/10 flex flex-col justify-between shadow-xl shadow-primary/5 rounded-2xl overflow-hidden group">
              
              {/* Architectural abstract background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
              
              <div className="flex justify-between items-start">
                <span className="font-serif italic text-4xl text-primary/30">01</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-accent px-3 py-1 bg-accent-muted border border-accent/10">Studio Standard</span>
              </div>

              <div className="my-auto py-8">
                <blockquote className="font-serif italic text-2xl md:text-3xl text-brand-text leading-relaxed">
                  "If clients are going to trust you to deliver, your online presence must set the standard."
                </blockquote>
                <p className="mt-4 font-sans text-xs uppercase tracking-widest text-brand-subtle">
                  — Build with Ugo.B
                </p>
              </div>

              <div className="border-t border-primary/10 pt-6 flex justify-between items-center text-xs uppercase tracking-widest font-sans font-bold text-brand-subtle">
                <span>IM STATE, NG</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  Active Studio
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
