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
    title: "LAWSAN SE Portal",
    description: "A comprehensive digital ecosystem for the Law Students' Association of Nigeria, South East Zone.",
    tags: ["Web Portal", "Online Payments", "User Experience"],
    size: "large",
    metrics: { duration: "Q3 2025", impact: "High Engagement" },
  },
  {
    image: "/jurismemo.webp",
    title: "JurisMemo",
    description: "An elegant, lightning-fast digital information hub designed for legal professionals in Nigeria.",
    tags: ["Custom Platform", "Fast Search", "Document Hub"],
    size: "large",
    metrics: { duration: "Ongoing", impact: "Seamless Research" },
  },
  {
    image: "/richiespot.webp",
    title: "Richie's Pot",
    description: "A high-converting online food ordering platform and menu delivery system.",
    tags: ["E-Commerce", "Instant Orders", "Clean Design"],
    size: "medium",
    metrics: { duration: "4 Weeks", impact: "Increased Sales" },
  },
  {
    image: "/lss.webp",
    title: "LSS UNILAWRIN",
    description: "Official institutional web directory and student resource portal for the Law Students' Society.",
    tags: ["Student Portal", "Reliable Coding", "Modern Interface"],
    size: "medium",
    metrics: { duration: "2 Weeks", impact: "Active Daily Traffic" },
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
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-brand-surface/50 border border-black/5 transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:bg-brand-surface"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="aspect-[16/10] overflow-hidden bg-brand-surfaceBright relative">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="flex flex-1 flex-col p-8 z-10 relative">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest font-bold text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="mb-3 text-2xl font-display font-medium text-brand-text group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        <p className="mb-8 text-sm text-brand-subtle font-light leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex justify-between items-center mt-auto pt-6 border-t border-black/5">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-brand-subtle/60 font-semibold">Timeline</span>
            <span className="text-xs text-brand-text font-medium">{project.metrics.duration}</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase tracking-widest text-brand-subtle/60 font-semibold">Outcome</span>
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
    <div className="container mx-auto px-6 lg:px-12 bg-brand-bg pb-32">
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
        <p className="mb-8 text-brand-subtle font-light italic">
          Ready to partner with us on your next project?
        </p>
        <a
          href="https://wa.me/2348103579586"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white bg-primary overflow-hidden transition-all duration-300 shadow-sm hover:bg-primary-dark"
        >
          Chat with Us on WhatsApp
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Portfolio;
