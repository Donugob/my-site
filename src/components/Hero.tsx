"use client";

import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative min-h-screen bg-brand-bg overflow-hidden flex items-center justify-center pt-20 border-b border-white/5">
      
      {/* Abstract Blueprint Grid & Mesh Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute inset-0 bg-brand-bg [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,transparent_20%,#0A0A0A_100%)]"></div>
      </div>

      {/* Dynamic Glowing Orbs */}
      <motion.div style={{ y: y1, opacity }} className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></motion.div>
      <motion.div style={{ y: y2, opacity }} className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></motion.div>

      <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        
        {/* Top Label */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-black/50 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.25em] font-sans text-brand-subtle mb-12"
        >
          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#E5FF00]"></span>
          Boutique Digital Engineering
        </motion.div>

        {/* Kinetic Typography Headline */}
        <div className="relative mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-[7.5rem] font-display font-bold text-white leading-[0.9] tracking-tighter uppercase"
          >
            Precision <br />
            <span className="text-primary">Ecosystems.</span>
          </motion.h1>
          
          {/* Editorial overlay accent */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[-20px] right-[-20px] md:top-[-40px] md:right-[-60px] rotate-12"
          >
            <span className="font-serif italic text-3xl md:text-5xl text-white/40">engineered</span>
          </motion.div>
        </div>

        {/* Supporting Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-brand-subtle max-w-2xl mx-auto font-sans font-light leading-relaxed mb-12"
        >
          We build the digital infrastructure that scales your business. From immersive interfaces to robust backend architectures.
        </motion.p>

        {/* Magnetic CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 items-center"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-brand-bg bg-primary overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(229,255,0,0.3)]"
          >
            <div className="absolute inset-0 w-0 bg-white transition-all duration-[350ms] ease-out group-hover:w-full"></div>
            <span className="relative z-10">Start a Project</span>
            <svg className="w-5 h-5 relative z-10 transition-transform duration-500 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 text-sm font-sans uppercase tracking-widest text-brand-text border-b border-transparent hover:border-primary transition-all duration-300"
          >
            View Infrastructure →
          </Link>
        </motion.div>
      </div>

      {/* Decorative Bottom Anchors */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="font-sans text-[10px] uppercase tracking-widest text-brand-subtle/50">
          Location // Owerri, NG
        </div>
      </div>
      <div className="absolute bottom-10 right-10 hidden md:block text-right">
        <div className="font-sans text-[10px] uppercase tracking-widest text-brand-subtle/50">
          SYS.STATUS // ONLINE
        </div>
      </div>
    </section>
  );
};

export default Hero;
