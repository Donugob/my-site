"use client";

import { motion } from "framer-motion";

export default function PortfolioHeading() {
  return (
    <div className="container mx-auto px-6 lg:px-8 relative z-10 py-24 bg-brand-bg">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full mb-16"
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6">
            Our Work
          </div>
          <h2 className="text-5xl lg:text-7xl font-display font-black text-white mb-6 italic uppercase tracking-tighter">
            The <span className="text-primary not-italic">Manifest</span>
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
            A curated selection of digital assets engineered for impact, performance, and long-term scalability.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
