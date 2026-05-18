"use client";

import React from "react";
import { motion } from "framer-motion";

type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    id: "01",
    title: "Full-Stack Engineering",
    description: "Architecting high-availability, low-latency web ecosystems using React, Next.js, and modern serverless infrastructure.",
    features: ["Next.js 16/App Router", "Real-time Architecture", "Edge Optimization"],
  },
  {
    id: "02",
    title: "Experimental UI/UX",
    description: "Creating digital experiences that push boundaries. We design for immersion and conversion with precision.",
    features: ["Immersive Prototyping", "Design Engineering", "Visual Narrative"],
  },
  {
    id: "03",
    title: "Native Performance",
    description: "Developing cross-platform mobile applications that leverage the full power of modern hardware.",
    features: ["React Native", "Native Modules", "Store Deployment"],
  },
  {
    id: "04",
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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col p-10 lg:p-14 border-t border-white/10 lg:border-t-0 lg:border-l lg:first:border-l-0 transition-colors duration-500 hover:bg-white/[0.02]"
    >
      <div className="font-sans text-xs text-primary mb-8 tracking-widest uppercase">
        // MOD_{service.id}
      </div>
      
      <h3 className="text-3xl font-display font-bold text-white mb-6 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-brand-subtle leading-relaxed mb-12 font-sans font-light flex-grow">
        {service.description}
      </p>

      <ul className="space-y-4 pt-8 border-t border-white/10">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 font-sans text-xs uppercase tracking-widest text-brand-subtle group-hover:text-white transition-colors duration-300">
            <span className="text-primary mt-0.5">»</span>
            {feature}
          </li>
        ))}
      </ul>
      
      {/* Blueprint Grid Crosshairs */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 -translate-x-px -translate-y-px opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 translate-x-px translate-y-px opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="w-full border-y border-white/10">
      {/* Blueprint Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
