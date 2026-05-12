"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ContactCTA = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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



  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-32 bg-brand-bg relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative bg-brand-surface rounded-[40px] p-12 lg:p-24 border border-white/5 overflow-hidden group"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-3 px-5 py-2 bg-primary/10 border border-primary/20 rounded-full mb-10">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-black text-primary">
                  Systems Online
                </span>
              </div>

              <h2 className="text-6xl lg:text-9xl font-display font-medium text-white mb-8 tracking-tighter leading-[0.85]">
                Design Your <br />
                <span className="text-primary italic">Legacy</span>
              </h2>

              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light mb-16">
                Direct access to our engineering team. We prioritize clarity, precision, and high-performance collaboration.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg justify-center">
                <a
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-4 px-10 py-6 bg-primary text-black font-bold uppercase tracking-widest text-sm rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] group"
                >
                  Start Project
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                  href="mailto:hello@build-with-ugob.com.ng"
                  className="flex-1 inline-flex items-center justify-center gap-4 px-10 py-6 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold uppercase tracking-widest text-sm rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  Email Briefing
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 w-full pt-16 border-t border-white/5">
                <div>
                  <div className="text-sm font-black text-white uppercase tracking-widest mb-2 italic">Sync Rate</div>
                  <div className="text-2xl font-display font-black text-primary tracking-tighter">&lt; 120 MINS</div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-bold">Avg. Response Time</p>
                </div>
                <div>
                  <div className="text-sm font-black text-white uppercase tracking-widest mb-2 italic">Availability</div>
                  <div className="text-2xl font-display font-black text-primary tracking-tighter">GLOBAL</div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-bold">24/7 Operations</p>
                </div>
                <div>
                  <div className="text-sm font-black text-white uppercase tracking-widest mb-2 italic">Security</div>
                  <div className="text-2xl font-display font-black text-primary tracking-tighter">ENCRYPTED</div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1 font-bold">End-to-End Comms</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <a
              href="tel:+2348103579586"
              className="group flex items-center justify-between p-8 bg-brand-surface rounded-[30px] border border-white/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <svg className="w-6 h-6 text-primary group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 font-black mb-1">Direct Line</div>
                  <div className="text-white font-bold tracking-tight">+234 810 357 9586</div>
                </div>
              </div>
              <svg className="w-5 h-5 text-gray-700 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <div className="group flex items-center gap-6 p-8 bg-brand-surface rounded-[30px] border border-white/5">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-black mb-1">Headquarters</div>
                <div className="text-white font-bold tracking-tight">Owerri, Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
