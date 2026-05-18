import React from "react";
import Portfolio from "@/components/Portfolio";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore the diverse portfolio of Build With Ugo.B, showcasing our expertise in creating high-performance, SEO-optimized websites that drive real business results.",
  alternates: {
    canonical: "https://build-with-ugob.com.ng/portfolio",
  },
  openGraph: {
    title: "Portfolio of Build With Ugo.B",
    url: "https://build-with-ugob.com.ng/portfolio",
  },
};

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 bg-brand-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Our Work
            </div>
            <h1 className="text-5xl lg:text-8xl font-display font-light text-brand-text mb-6 tracking-tight leading-[1.05]">
              Projects designed to <br />
              <span className="font-serif italic text-primary font-normal">inspire.</span>
            </h1>
            <p className="text-lg text-brand-subtle max-w-2xl mx-auto leading-relaxed font-light mb-12 font-sans">
              A curated showcase of handcrafted websites, bespoke digital systems, and custom platforms designed to deliver exceptional business growth.
            </p>

            {/* Filter/Stats Bar */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-xs font-sans">
              <div className="flex items-center gap-2 px-5 py-3 bg-brand-surface rounded-full border border-black/5 shadow-sm text-brand-text font-medium">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                25+ Completed Projects
              </div>
              <div className="flex items-center gap-2 px-5 py-3 bg-brand-surface rounded-full border border-black/5 shadow-sm text-brand-text font-medium">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                200% Average Growth
              </div>
              <div className="flex items-center gap-2 px-5 py-3 bg-brand-surface rounded-full border border-black/5 shadow-sm text-brand-text font-medium">
                <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                3-6 Week Delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your existing Portfolio component */}
      <Portfolio />

      {/* Services Showcase */}
      <section className="py-32 bg-brand-surface border-t border-b border-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-display font-light text-brand-text mb-6">
              Services we <span className="font-serif italic text-primary font-normal">specialize in.</span>
            </h2>
            <p className="text-brand-subtle font-sans text-sm max-w-lg mx-auto">
              Every project in our portfolio showcases our absolute commitment and expertise across these core digital pillars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                ),
                title: "Bespoke Web Coding",
                description: "Handcrafting clean, responsive websites using Next.js and custom styles for raw speed.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                  </svg>
                ),
                title: "Premium UI/UX Design",
                description: "Creating highly customized aesthetic interfaces structured around seamless client conversions.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                ),
                title: "Custom Web Apps",
                description: "Building responsive tools, secure databases, membership hubs, and administrative panels.",
              },
              {
                icon: (
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                ),
                title: "SEO Optimization",
                description: "Injecting modern speed mechanics and semantic layouts to consistently rank high on search engines.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-brand-bg rounded-[32px] p-8 border border-black/5 hover:border-primary/20 hover:bg-brand-bg/90 hover:shadow-md transition-all duration-500 group shadow-sm flex flex-col"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors shadow-sm">
                  {service.icon}
                </div>
                <h3 className="font-sans font-semibold text-brand-text mb-3 text-base tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-brand-subtle font-sans leading-relaxed font-light mt-auto">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-display font-light text-brand-text mb-6">
                What our <span className="font-serif italic text-primary font-normal">Clients Say</span>
              </h2>
              <p className="text-brand-subtle font-sans text-sm">
                Partnerships built on transparency, outstanding results, and premium design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Build With Ugo.B transformed our online setup into a modern, high-performing platform. Custom design and simple checkout tripled our business in Owerri!",
                  author: "Richard",
                  role: "Founder, Richie's Pot",
                  avatar: "https://i.postimg.cc/HxcgH86V/Portrait-Placeholder.png",
                },
                {
                  quote:
                    "The dedication to clean layout and easy navigation for student files was outstanding. The system has seen flawless execution since launch.",
                  author: "Zane",
                  role: "Director, Votesphere Portal",
                  avatar: "https://i.postimg.cc/HxcgH86V/Portrait-Placeholder.png",
                },
              ].map((testimonial, idx) => (
                <div
                  key={idx}
                  className="bg-brand-surface rounded-[32px] p-8 border border-black/5 shadow-sm hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 mb-6 text-primary">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-brand-text mb-8 font-serif font-light italic text-base leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 border-t border-black/5 pt-6 mt-auto">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover border border-black/5 grayscale bg-brand-surfaceBright"
                    />
                    <div className="font-sans text-left">
                      <div className="font-semibold text-brand-text text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-brand-subtle">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto bg-brand-surface rounded-[40px] p-16 lg:p-24 border border-black/5 text-center relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]"></div>
             
            <h2 className="text-5xl lg:text-7xl font-display font-light text-brand-text leading-[1.05] mb-8 relative z-10">
              Ready to see <br />
              <span className="font-serif italic text-primary font-normal">your brand grow?</span>
            </h2>
            <p className="text-lg text-brand-subtle max-w-xl mx-auto leading-relaxed font-light mb-12 relative z-10 font-sans">
              Let's craft a beautiful, high-performing website that sets your business apart. Connect on WhatsApp to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="https://wa.me/2348103579586"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-primary text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 hover:bg-primary-dark shadow-sm"
              >
                Start Your Project
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
