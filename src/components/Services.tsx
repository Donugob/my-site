"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Service Icons - Minimal and Sharp
const CodeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DesignIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    icon: <CodeIcon />,
    title: "Full-Stack Engineering",
    description: "Architecting high-availability, low-latency web ecosystems using React, Next.js, and Node.",
    features: ["Next.js 16/App Router", "Real-time Architecture", "Edge Optimization"],
  },
  {
    icon: <DesignIcon />,
    title: "Experimental UI/UX",
    description: "Creating digital experiences that push boundaries. We design for immersion and conversion.",
    features: ["Immersive Prototyping", "Design Engineering", "Visual Narrative"],
  },
  {
    icon: <MobileIcon />,
    title: "Native Performance",
    description: "Developing cross-platform mobile applications that leverage the full power of modern hardware.",
    features: ["React Native", "Native Modules", "Store Deployment"],
  },
  {
    icon: <SearchIcon />,
    title: "Growth Engineering",
    description: "Data-driven SEO and analytics integration to ensure your product reaches its intended scale.",
    features: ["Technical SEO Mastery", "Behavioral Analytics", "Funnel Optimization"],
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-[#0A0A0B] rounded-3xl p-10 border border-white/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
    >
      <div className="mb-8 inline-flex items-center justify-center w-14 h-14 bg-white/5 rounded-2xl text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-black">
        {service.icon}
      </div>

      <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors italic uppercase tracking-tighter">{service.title}</h3>

      <p className="text-gray-400 leading-relaxed mb-8 font-light">
        {service.description}
      </p>

      <ul className="space-y-3 border-t border-white/5 pt-8">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-gray-500 group-hover:text-gray-300 transition-colors">
            <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-50"></span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="container mx-auto px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      <div className="mt-24 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-500 mb-8 font-light italic"
        >
          Specialized requirements? We engineer custom solutions for unique challenges.
        </motion.p>
        <a
          href="https://wa.me/2348103579586"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-[0.2em] text-xs hover:gap-5 transition-all duration-300"
        >
          Start Discussion
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Services;
