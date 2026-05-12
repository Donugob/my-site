"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";

const points = [
  {
    title: "Engineering Excellence",
    description: "We don't just build websites; we engineer high-performance ecosystems with precision and scalability.",
  },
  {
    title: "Global Standards",
    description: "Based in Owerri, operating on a global scale. We bring world-class development protocols to every project.",
  },
  {
    title: "Radical Transparency",
    description: "Honest communication and clear technical roadmaps. No hidden complexity, just results.",
  },
  {
    title: "Future-Proof Architecture",
    description: "Using the cutting edge of tech—Next.js 16, AI integration, and Edge computing to keep you ahead.",
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
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-8">
              Strategic Advantage
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-5xl md:text-7xl font-display font-black text-white mb-8 italic uppercase tracking-tighter leading-[0.9]"
            >
              Precision <br />
              <span className="text-primary not-italic">Engineering</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-400 text-lg leading-relaxed mb-16 font-light max-w-lg"
            >
              We bridge the gap between complex engineering and intuitive design. Our philosophy is rooted in performance, security, and absolute clarity.
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
                    <span className="text-2xl font-display font-black text-white/10 group-hover:text-primary/40 transition-colors italic">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight italic">
                      {point.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed font-light">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content: image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/5 group">
              <img
                src="/ugob.webp"
                alt="Ugo.B"
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-2">Lead Engineer</div>
                <div className="text-2xl font-display font-black text-white italic uppercase tracking-tighter">Ugochukwu B.</div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-[60px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
