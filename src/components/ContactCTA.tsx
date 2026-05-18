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
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative bg-brand-surface rounded-[40px] p-12 lg:p-24 border border-black/5 overflow-hidden group shadow-lg"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-x-1/4 -translate-y-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -translate-x-1/4 translate-y-1/4"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-bg/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-10">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                Available for Projects
              </div>

              <h2 className="text-5xl lg:text-8xl font-display font-light text-brand-text mb-8 tracking-tight">
                Let's build <br />
                <span className="font-serif italic text-primary font-normal">something beautiful.</span>
              </h2>

              <p className="text-lg text-brand-subtle max-w-xl mx-auto leading-relaxed font-light mb-16 font-sans">
                Tell us about your brand and objectives. We partner with select clients to craft premium websites.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 w-full max-w-lg justify-center">
                <a
                  href="https://wa.me/2348103579586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-primary-dark shadow-sm group"
                >
                  Start on WhatsApp
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                
                <a
                  href="mailto:hello@build-with-ugob.com.ng"
                  className="flex-1 inline-flex items-center justify-center gap-3 px-8 py-5 bg-brand-surfaceBright border border-black/5 text-brand-text font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-brand-bg hover:border-primary/20"
                >
                  Send Email
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 w-full pt-16 border-t border-black/5">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-subtle/60 font-semibold mb-2">Response Time</div>
                  <div className="text-2xl font-serif font-light text-primary italic">&lt; 2 Hours</div>
                  <p className="text-[10px] text-brand-subtle uppercase tracking-widest mt-1 font-bold">Fast Callback</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-subtle/60 font-semibold mb-2">Location</div>
                  <div className="text-2xl font-serif font-light text-primary italic">Global Reach</div>
                  <p className="text-[10px] text-brand-subtle uppercase tracking-widest mt-1 font-bold">Fully Remote</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-subtle/60 font-semibold mb-2">Philosophy</div>
                  <div className="text-2xl font-serif font-light text-primary italic">Bespoke Quality</div>
                  <p className="text-[10px] text-brand-subtle uppercase tracking-widest mt-1 font-bold">One Client at a Time</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <a
              href="tel:+2348103579586"
              className="group flex items-center justify-between p-8 bg-brand-surface rounded-[30px] border border-black/5 hover:border-primary/20 hover:bg-brand-surfaceBright/50 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center group-hover:bg-primary transition-colors">
                  <svg className="w-6 h-6 text-primary group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-subtle/60 font-semibold mb-1">Direct Call</div>
                  <div className="text-brand-text font-bold tracking-tight font-sans text-base">+234 810 357 9586</div>
                </div>
              </div>
              <svg className="w-4 h-4 text-brand-subtle group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>

            <div className="group flex items-center gap-6 p-8 bg-brand-surface rounded-[30px] border border-black/5 shadow-sm">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-brand-subtle/60 font-semibold mb-1">Headquarters</div>
                <div className="text-brand-text font-bold tracking-tight font-sans text-base">Owerri, Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
