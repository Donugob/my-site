"use client";

import { motion } from "framer-motion";

export default function PortfolioHeading() {
  return (
    <div className="container mx-auto px-6 lg:px-12 relative z-10 py-24 bg-brand-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            Our Work
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-light text-brand-text mb-6">
            Selected <span className="font-serif italic text-primary font-normal">Success Stories</span>
          </h2>
          <p className="text-lg text-brand-subtle leading-relaxed max-w-2xl mx-auto font-light">
            A selection of modern web platforms designed to help ambitious companies elevate their brand, connect with clients, and grow their revenue.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
