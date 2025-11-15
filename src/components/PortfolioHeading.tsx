"use client";

import { motion } from "framer-motion";

export default function PortfolioHeading() {
  return (
    <div className="container mx-auto px-6 lg:px-8 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
            Our Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projects That Drive Results
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From startups to enterprises, we’ve helped brands transform their
            digital presence into measurable impact.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
