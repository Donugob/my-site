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
    title: "Stunning Web Design",
    description: "We craft visually striking, premium layouts tailored to your unique brand voice, making sure your business leaves an unforgettable first impression.",
    features: ["Custom Brand Styling", "Intuitive Layouts", "Mobile-Optimized Layouts"],
  },
  {
    id: "02",
    title: "High-Performance Web Dev",
    description: "We build modern, ultra-fast websites and web applications using clean, secure code that works flawlessly across all devices and screen sizes.",
    features: ["Next.js & React Powered", "Fast Loading Speeds", "Custom Integrations"],
  },
  {
    id: "03",
    title: "E-Commerce & Online Stores",
    description: "We set up seamless, secure shopping experiences and integrated local payment gateways so your customers can buy from you with absolute ease.",
    features: ["Frictionless Checkout", "Secure Payments", "Inventory Management"],
  },
  {
    id: "04",
    title: "SEO & Lead Optimization",
    description: "We tune your website from head to toe so it stands out on search engines, ranking higher on Google to consistently bring in high-quality business leads.",
    features: ["Google Ranking Search SEO", "Site Speed Auditing", "Lead Generation Funnels"],
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col p-10 lg:p-14 border-t border-black/5 lg:border-t-0 lg:border-l lg:first:border-l-0 transition-all duration-500 hover:bg-brand-surface/40 rounded-2xl lg:rounded-none"
    >
      <div className="font-serif italic text-4xl text-primary/30 mb-8 font-light">
        {service.id}.
      </div>
      
      <h3 className="text-3xl font-display font-medium text-brand-text mb-6 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-brand-subtle leading-relaxed mb-12 font-sans font-light flex-grow">
        {service.description}
      </p>

      <ul className="space-y-4 pt-8 border-t border-black/5">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3 font-sans text-xs uppercase tracking-widest text-brand-subtle group-hover:text-brand-text transition-colors duration-300">
            <span className="text-primary mt-0.5">·</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="w-full border-y border-black/5">
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
