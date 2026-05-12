"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
      description: "Started my journey in web development, focusing on clean code and performance.",
    },
    {
      year: "2021",
      title: "Full-Stack Development",
      description: "Mastered high-performance stacks and began building complex systems for global clients.",
    },
    {
      year: "2022",
      title: "Jurismemo Launch",
      description: "Launched Jurismemo, a comprehensive legal research platform for law students in Nigeria.",
    },
    {
      year: "2026",
      title: "UGO.B ENGINEERING",
      description: "Founded a premier digital engineering agency focused on high-quality web products.",
    },
  ];

  const values = [
    {
      title: "Attention to Detail",
      description: "We focus on every pixel and line of code to ensure your product is perfect.",
    },
    {
      title: "User-Centered Strategy",
      description: "We build systems that are intuitive, easy to use, and designed for results.",
    },
    {
      title: "Modern Technology",
      description: "We use the latest tools and frameworks to build fast, secure, and future-proof apps.",
    },
    {
      title: "Clear Communication",
      description: "We maintain full transparency throughout the project to ensure we meet your goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden bg-brand-bg">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-8">
              The Architect
            </div>
            <h1 className="text-6xl lg:text-9xl font-display font-medium text-white mb-10 tracking-tighter leading-[0.85]">
              Logic <br />
              <span className="text-primary italic">& Aesthetic</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left mt-20 items-start">
               <p className="text-2xl text-white font-light leading-snug">
                “I don't just build websites. I engineer digital legacies that stand at the intersection of technical excellence and human intuition.”
              </p>
              <div className="space-y-6">
                <p className="text-gray-400 font-light leading-relaxed">
                  I am <span className="text-white font-bold italic">Ugo B.</span> — a Lead Engineer who balances the rigid structure of Law with the fluid creativity of Digital Engineering. 
                </p>
                <p className="text-gray-400 font-light leading-relaxed">
                  Based in Owerri, operating globally. My mission is to elevate brands through high-performance digital ecosystems that are as secure as they are immersive.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-brand-surface relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-5xl lg:text-6xl font-display font-medium text-white tracking-tighter mb-4">
                The <span className="text-primary italic">Trajectory</span>
              </h2>
              <p className="text-gray-500 font-light">From initial code to a premier engineering agency.</p>
            </div>

            <div className="relative space-y-24">
               {/* Line */}
               <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden lg:block"></div>

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
                          <div className="text-4xl font-display font-black text-primary mb-4 italic tracking-tighter">{item.year}</div>
                          <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-4 italic">{item.title}</h3>
                          <p className="text-gray-500 font-light leading-relaxed max-w-sm">{item.description}</p>
                       </div>
                    </div>
                    
                    <div className="relative z-10 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(212,175,55,0.8)] border-4 border-brand-bg"></div>
                    
                    <div className="flex-1 hidden lg:block"></div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
               <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-8">
                Operating Principles
              </div>
              <h2 className="text-5xl lg:text-6xl font-display font-medium text-white tracking-tighter mb-4">
                Our <span className="text-primary italic">Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="group p-10 bg-brand-surface border border-white/5 rounded-[32px] hover:border-primary/20 transition-all duration-500">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-4 italic group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
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
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-7xl font-display font-black text-white mb-2 italic tracking-tighter">25+</div>
              <div className="text-[10px] text-primary uppercase tracking-[0.4em] font-black">Assets Delivered</div>
            </div>
            <div>
              <div className="text-7xl font-display font-black text-white mb-2 italic tracking-tighter">06</div>
              <div className="text-[10px] text-primary uppercase tracking-[0.4em] font-black">Years Engineering</div>
            </div>
            <div>
              <div className="text-7xl font-display font-black text-white mb-2 italic tracking-tighter">100%</div>
              <div className="text-[10px] text-primary uppercase tracking-[0.4em] font-black">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl lg:text-9xl font-display font-medium text-white tracking-tighter leading-[0.85] mb-12">
              Let's Build <br />
              <span className="text-primary italic">Together.</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-xl mx-auto leading-relaxed font-light mb-16">
              Establish a direct line of communication with the architect for your next high-performance project.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] group"
            >
              Initialize Collaboration
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

export default AboutContent;
