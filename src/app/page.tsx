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
    "Build With Ugo.B, a modern web development agency based in Owerri, Imo State helping brands build high-performance digital experiences with speed, creativity, and precision.",
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
        <section id="services" className="py-24 bg-brand-surface relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="w-full mb-20 text-center">
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-6">
                Core Expertise
              </div>
              <h2 className="text-5xl lg:text-6xl font-display font-black text-white mb-6 italic uppercase tracking-tighter">
                Services <br />
                <span className="text-primary not-italic">Engineered</span> For Scale
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto font-light">
                We bridge the gap between complex engineering and intuitive design to build products that dominate markets.
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
