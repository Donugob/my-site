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
    description:
      "Official website of The Law Students' Association of Nigeria, South East Zone.",
    tags: ["PHP", "Paystack", "Bootstrap"],
    size: "large",
    metrics: { duration: "2 months", impact: "300% student participation" },
  },
  {
    image: "/jurismemo.webp",
    title: "JURISMEMO",
    description: "Legal resources tool for Nigerian Lawyers and Law students.",
    tags: ["AI", "Ajax", "PHP"],
    size: "large",
    metrics: {
      duration: "24 months+",
      impact: "improved legal research by students",
    },
  },
  {
    image: "/richiespot.webp",
    title: "Richie's Pot",
    description: "An E-commerce Web App for a Nigerian Restaurant.",
    tags: ["React", "Node Js", "E-commerce"],
    size: "medium",
    metrics: { duration: "4 weeks", impact: "300% sales" },
  },
  {
    image: "/lss.webp",
    title: "LSS UNILAWRIN",
    description:
      "Official website for Law Students' Society University of Illorin.",
    tags: ["React", "Node JS", "Mongo DB"],
    size: "medium",
    metrics: { duration: "2 weeks", impact: "99.9% uptime" },
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

  const sizeMap = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1",
  };

  return (
    <motion.article
      ref={ref}
      className={`
        group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md
        transition-all duration-300 hover:shadow-lg
        ${sizeMap[project.size]}
      `}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Image – full width, fixed aspect */}
      <div className="aspect-video overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content – below image on mobile, overlay on hover for desktop */}
      <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl">
          {project.title}
        </h3>

        {/* Description – truncated on mobile */}
        <p className="mb-4 text-sm text-gray-600 line-clamp-2 md:line-clamp-3">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </span>{" "}
            {project.metrics.duration}
          </div>
          <div className="flex items-center gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </span>{" "}
            {project.metrics.impact}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* -------------------------- section -------------------------- */
const Portfolio = () => {
  return (
    <div className="container mx-auto px-5 md:px-6 lg:px-8">
      {/* Mobile-first grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`
                ${p.size === "large" && "md:col-span-2 md:row-span-2"}
                ${p.size === "medium" && "md:col-span-1 md:row-span-2"}
                ${p.size === "small" && "md:col-span-1 md:row-span-1"}
              `}
          >
            <PortfolioCard project={p} index={i} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="mt-16 text-center md:mt-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="mb-5 text-lg text-gray-700 md:text-xl">
          Let’s build something great together.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-7 py-3 font-medium text-white transition-all hover:bg-gray-800 hover:gap-3"
        >
          Get in Touch
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M13 6l6 6-6 6" />
            </svg>
          </span>
        </a>
      </motion.div>
    </div>
  );
};

export default Portfolio;
