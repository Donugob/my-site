// src/components/Portfolio.tsx
"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

/* -------------------------- data -------------------------- */
type Project = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  size: "large" | "medium" | "small";
  metrics: { duration: string; impact: string };
};

const projects: Project[] = [
  {
    image: "/lawsanse.webp",
    title: "LAWSAN SE",
    description: "Official ecosystem for The Law Students' Association of Nigeria, South East Zone.",
    tags: ["Systems Architecture", "Paystack", "UX Engineering"],
    size: "large",
    metrics: { duration: "Q3 2025", impact: "300% Engagement" },
  },
  {
    image: "/jurismemo.webp",
    title: "JURISMEMO",
    description: "AI-powered legal intelligence platform for Nigerian legal professionals.",
    tags: ["Neural Networks", "Next.js", "Intelligence"],
    size: "large",
    metrics: { duration: "Continuous", impact: "Research Accel" },
  },
  {
    image: "/richiespot.webp",
    title: "Richie's Pot",
    description: "High-conversion E-commerce infrastructure for modern gastronomy.",
    tags: ["Direct-to-Consumer", "Node.js", "Scale"],
    size: "medium",
    metrics: { duration: "4 Weeks", impact: "3x Sales" },
  },
  {
    image: "/lss.webp",
    title: "LSS UNILAWRIN",
    description: "Institutional digital portal for Law Students' Society University of Ilorin.",
    tags: ["Infrastructure", "Availability", "UX"],
    size: "medium",
    metrics: { duration: "2 Weeks", impact: "99.9% SLI" },
  },
];

/* -------------------------- card -------------------------- */
const PortfolioCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-[#0A0A0B] border border-white/5 transition-all duration-500 hover:border-primary/20 hover:shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="aspect-[16/10] overflow-hidden bg-[#050505]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-60"></div>
      </div>

      <div className="flex flex-1 flex-col p-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest font-black text-primary/60"
            >
              // {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-3 text-2xl font-display font-black text-white italic uppercase tracking-tighter group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="mb-8 text-sm text-gray-400 font-light leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex justify-between items-center mt-auto pt-6 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Timeline</span>
            <span className="text-xs text-white font-medium">{project.metrics.duration}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold">Outcome</span>
            <span className="text-xs text-primary font-medium">{project.metrics.impact}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* -------------------------- section -------------------------- */
const Portfolio = () => {
  return (
    <div className="container mx-auto px-6 lg:px-8 bg-brand-bg pb-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((p, i) => (
          <PortfolioCard key={i} project={p} index={i} />
        ))}
      </div>

      <motion.div
        className="mt-32 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="mb-8 text-gray-500 font-light italic">
          Looking for a partner to architect your next system?
        </p>
        <a
          href="https://wa.me/2348103579586"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-black bg-white rounded-2xl hover:bg-primary transition-all duration-300 group"
        >
          Initialize Chat
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Portfolio;
