"use client";

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const App: React.FC = () => {
  return (
    <div className="bg-brand-bg text-brand-text font-sans antialiased selection:bg-primary/20 selection:text-primary overflow-x-hidden">
      <main>
        <Hero />
        <section id="services" className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="w-full mb-16 text-center">
              <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full mb-4">
                What We Do
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Services Built for Growth
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From concept to launch and beyond, we provide everything you
                need to build a successful digital presence.
              </p>
            </div>

            <Services />
          </div>
        </section>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mb-16"
            >
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-4">
                Our Work
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Projects That Drive Results
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to enterprises, we’ve helped brands transform
                their digital presence into measurable impact.
              </p>
            </motion.div>
          </div>
        </div>
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <ContactCTA />
      </main>
    </div>
  );
};

export default App;
