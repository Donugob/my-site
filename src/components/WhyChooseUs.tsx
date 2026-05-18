"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";

const points = [
  {
    title: "Strategic Design & Copy",
    description: "We create clean, user-friendly layouts designed specifically to connect with your target customers and drive business sales.",
  },
  {
    title: "Fast & Reliable Technology",
    description: "Your site will load instantly and run flawlessly, backed by modern technology that keeps your business running smoothly 24/7.",
  },
  {
    title: "Clear & Honest Partnership",
    description: "No complex tech jargon or hidden fees. We work with open communication, clear goals, and high standards.",
  },
  {
    title: "Search Engine Optimized",
    description: "Every page is structured properly from the start so your business rises in search results and gets found naturally.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: easeOut },
  }),
};

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden bg-brand-surface"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-bg/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-8">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Strategic Advantage
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-7xl font-display font-light text-brand-text mb-8 leading-[1.05]"
            >
              Why partner <br />
              <span className="font-serif italic text-primary font-normal">with our studio?</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-brand-subtle text-lg leading-relaxed mb-16 font-light max-w-lg font-sans"
            >
              We bridge the gap between creative visual styling and conversion-focused web design. Our work is driven by high speed, clean code, and business growth.
            </motion.p>

            <div className="space-y-12">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 2}
                  className="group flex items-start"
                >
                  <div className="mr-8 pt-1">
                    <span className="text-2xl font-serif font-light text-primary/30 group-hover:text-primary/60 transition-colors italic">
                      0{i + 1}.
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-sans font-semibold text-brand-text mb-2 tracking-tight">
                      {point.title}
                    </h3>
                    <p className="text-brand-subtle leading-relaxed font-light font-sans text-sm">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content: image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-black/5 group shadow-lg">
              <img
                src="/ugob.webp"
                alt="Ugo B. - Lead Designer & Developer"
                className="w-full h-full object-cover opacity-90 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-brand-bg/95 backdrop-blur-xl border border-black/5 rounded-3xl shadow-sm">
                <div className="text-[10px] font-bold text-primary uppercase tracking-[0.3em] mb-2 font-sans">Lead Designer & Developer</div>
                <div className="text-2xl font-display font-medium text-brand-text">Ugo B.</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px]"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
