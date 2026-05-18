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
        <section id="services" className="pt-32 pb-0 bg-brand-bg relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-12 relative z-10 mb-20">
            <div className="w-full max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-8">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Capabilities
              </div>
              <h2 className="text-5xl lg:text-7xl font-display font-light text-brand-text mb-8 tracking-tight">
                Websites designed <br />
                to <span className="font-serif italic text-primary font-normal">drive your success.</span>
              </h2>
              <p className="text-lg text-brand-subtle leading-relaxed max-w-xl font-sans font-light">
                We combine creative styling with practical business solutions to build online platforms that help your company stand out, establish trust, and turn visitors into clients.
              </p>
            </div>
          </div>

          <Services />
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
