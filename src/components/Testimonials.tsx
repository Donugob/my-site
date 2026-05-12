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
      "Ugo.B is a force of nature in engineering. He didn't just build a site; he architected a system that redefined how we operate.",
    name: "Bethel C. Bright",
    title: "Zonal Director, LAWSAN South East",
    image: "/bethel.webp",
  },
  {
    quote:
      "The precision and attention to detail are unprecedented. Our e-commerce conversion tripled within weeks of deployment.",
    name: "Richard Emeka",
    title: "Owner, Richie's Pot",
    image: "https://i.postimg.cc/HxcgH86V/Portrait-Placeholder.png",
  },
  {
    quote:
      "Engineering logic meets aesthetic brilliance. The platforms built here are faster, more secure, and infinitely more intuitive.",
    name: "Chinedu Eze",
    title: "User, Jurismemo",
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
    className="relative bg-[#0A0A0B] p-10 rounded-[32px] border border-white/5 flex flex-col h-full group hover:border-primary/20 transition-all duration-500"
  >
    <div className="mb-8">
      <svg className="w-10 h-10 text-primary opacity-20 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 32 32">
        <path d="M9.333 22.667h4L16 16.667v-10H6v10h3.333v6zM22.667 22.667h4L29.333 16.667v-10H19.333v10H22.667v6z"></path>
      </svg>
    </div>
    
    <p className="text-white text-lg md:text-xl mb-10 leading-relaxed font-light italic">
      “{testimonial.quote}”
    </p>

    <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/5">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all border border-white/10 object-cover"
      />
      <div>
        <h4 className="text-sm font-black text-white uppercase tracking-widest italic">
          {testimonial.name}
        </h4>
        <p className="text-[10px] text-primary font-black uppercase tracking-[0.2em]">{testimonial.title}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-8">
            Social Proof
          </div>
          <h2 className="text-5xl lg:text-6xl font-display font-black text-white mb-6 italic uppercase tracking-tighter leading-[0.9]">
            Voices From <br />
            The <span className="text-primary not-italic">Frontier</span>
          </h2>
          <p className="text-gray-500 font-light max-w-lg mx-auto">
            Our commitment to engineering excellence is reflected in the success of the brands we empower.
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
