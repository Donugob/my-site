"use client";

import React, { useState } from "react";

// Service Icons - Clean and minimal
const CodeIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    ></path>
  </svg>
);

const DesignIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    ></path>
  </svg>
);

const MobileIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    ></path>
  </svg>
);

const SearchIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    ></path>
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
    title: "Web Development",
    description:
      "Lightning-fast, scalable web applications built with modern frameworks.",
    features: [
      "React & Next.js",
      "API Integration",
      "Performance Optimization",
    ],
  },
  {
    icon: <DesignIcon />,
    title: "UI/UX Design",
    description:
      "Intuitive interfaces that users love, backed by research and tested thoroughly.",
    features: ["User Research", "Prototyping", "Design Systems"],
  },
  {
    icon: <MobileIcon />,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile experiences that feel native on iOS and Android.",
    features: ["React Native", "iOS & Android", "App Store Launch"],
  },
  {
    icon: <SearchIcon />,
    title: "SEO & Analytics",
    description:
      "Data-driven strategies to boost visibility and track what matters.",
    features: ["Technical SEO", "Content Strategy", "Analytics Setup"],
  },
];

const ServiceCard: React.FC<{ service: Service; index: number }> = ({
  service,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon container */}
      <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl text-gray-700 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Features list */}
      <ul className="space-y-2">
        {service.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 text-sm text-gray-600"
            style={{
              opacity: isHovered ? 1 : 0.7,
              transform: isHovered ? "translateX(0)" : "translateX(-4px)",
              transition: `all 0.3s ease ${idx * 0.1}s`,
            }}
          >
            <svg
              className="w-4 h-4 text-blue-600 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Hover indicator */}
      <div
        className="absolute bottom-0 left-8 right-8 h-1 bg-blue-600 rounded-t-full transition-all duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "scaleX(1)" : "scaleX(0)",
        }}
      ></div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="container mx-auto px-6 lg:px-8">
      {/* Section Header */}

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-6">
          Need something specific? We can help with custom solutions.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:gap-3 transition-all duration-200"
        >
          Let's discuss your project
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Services;
