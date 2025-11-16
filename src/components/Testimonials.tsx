"use client";

import React from "react";
import type { Testimonial } from "../../types";

const testimonials: Testimonial[] = [
  {
    quote:
      "Working with Ugo.B was an absolute game changer for us. He crafted a digital experience. His dedication and skill are unmatched.",
    name: "Bethel C. Bright",
    title: "Zonal Director, LAWSAN South East",
    image: "/bethel.webp",
  },
  {
    quote:
      "The technical prowess here is extraordinary. They tackled our complex needs with a brilliant strategy and flawless execution. We now have a platform that's both powerful and beautiful.",
    name: "Richard Emeka",
    title: "Owner, Richie's Pot",
    image: "https://i.postimg.cc/HxcgH86V/Portrait-Placeholder.png",
  },
  {
    quote:
      "The attention to detail is impressive. Ugo.B tackled the needs of Law Students brilliantly. Jurismemo has been a Life Saver",
    name: "Chinedu Eze",
    title: "User, Jurismemo",
    image: "https://i.pravatar.cc/150?img=8",
  },
];

const QuoteIcon: React.FC = () => (
  <svg
    className="absolute top-6 left-6 w-12 h-12 text-primary/10"
    fill="currentColor"
    viewBox="0 0 32 32"
    aria-hidden="true"
  >
    <path d="M9.333 22.667h4L16 16.667v-10H6v10h3.333v6zM22.667 22.667h4L29.333 16.667v-10H19.333v10H22.667v6z"></path>
  </svg>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <blockquote className="relative bg-brand-bg p-8 rounded-2xl shadow-md border border-gray-200 flex flex-col justify-between h-full transition-transform hover:-translate-y-1 hover:shadow-xl">
    <QuoteIcon />
    <p className="text-brand-text text-lg md:text-xl mb-6 leading-relaxed relative z-10">
      “{testimonial.quote}”
    </p>
    <footer className="flex items-center gap-4 mt-auto relative z-10">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-14 h-14 rounded-full border-2 border-primary object-cover"
      />
      <div>
        <h4 className="text-lg font-semibold text-brand-text font-display">
          {testimonial.name}
        </h4>
        <p className="text-primary font-medium">{testimonial.title}</p>
      </div>
    </footer>
  </blockquote>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-text font-display">
            Trusted by Innovators
          </h2>
          <p className="text-lg text-brand-subtle mt-4">
            Our clients’ success stories are the best measure of our own.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="animate-fade-in-up opacity-0"
              style={{
                animationDelay: `${index * 0.15}s`,
                animationFillMode: "forwards",
              }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
