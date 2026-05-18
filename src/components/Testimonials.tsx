"use client";

import React from "react";
import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Build with Ugo.B transformed our online presence. The new platform is stunning, extremely easy to navigate, and has significantly improved our organization's communication.",
    name: "Bethel C. Bright",
    title: "Zonal Director, LAWSAN South East",
    image: "/bethel.webp",
  },
  {
    quote:
      "The attention to detail and design quality is absolutely amazing. Our online inquiries and customer engagement grew dramatically within weeks of launching Richie's Pot.",
    name: "Richard Emeka",
    title: "Owner, Richie's Pot",
    image: "https://i.postimg.cc/HxcgH86V/Portrait-Placeholder.png",
  },
  {
    quote:
      "The website designed for our platform is incredibly clean, fast, and easy to use. Our clients constantly compliment us on the premium look and feel.",
    name: "Chinedu Eze",
    title: "Business Partner, Jurismemo",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; index: number }> = ({
  testimonial,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative bg-brand-surface/50 p-10 rounded-[32px] border border-black/5 flex flex-col h-full group hover:border-primary/20 hover:bg-brand-surface transition-all duration-500 shadow-sm"
  >
    <div className="mb-8">
      <svg className="w-10 h-10 text-primary opacity-20 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.333 22.667h4L16 16.667v-10H6v10h3.333v6zM22.667 22.667h4L29.333 16.667v-10H19.333v10H22.667v6z"></path>
      </svg>
    </div>
    
    <p className="text-brand-text text-lg md:text-xl mb-10 leading-relaxed font-light italic font-serif">
      “{testimonial.quote}”
    </p>

    <div className="flex items-center gap-4 mt-auto pt-8 border-t border-black/5">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all border border-primary/10 object-cover"
      />
      <div>
        <h4 className="text-sm font-sans font-bold text-brand-text">
          {testimonial.name}
        </h4>
        <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em]">{testimonial.title}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            Testimonials
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-light text-brand-text mb-6">
            What <span className="font-serif italic text-primary font-normal">our clients say</span>
          </h2>
          <p className="text-brand-subtle font-light max-w-lg mx-auto font-sans">
            Our commitment to design quality and business outcomes is reflected in the success of the brands we support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
