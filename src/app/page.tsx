import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ContactCTA from "../components/ContactCTA";
import type { Metadata } from "next";
import PortfolioHeading from "@/components/PortfolioHeading";

export const metadata: Metadata = {
  title: "Homepage | Build With Ugo.B",
  description:
    "Build With Ugo.B, a modern web development agency helping brands build high-performance digital experiences with speed, creativity, and precision.",
  alternates: {
    canonical: "https://build-with-ugob.com.ng",
  },
  openGraph: {
    title: "Homepage | Build With Ugo.B",
    url: "https://build-with-ugob.com.ng",
  },
};

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
        <PortfolioHeading />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <ContactCTA />
      </main>
    </div>
  );
};

export default App;
