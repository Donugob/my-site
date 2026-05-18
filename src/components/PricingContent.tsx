"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PricingTier = {
  tier_name: string;
  package_alias: string;
  target_audience: string;
  formatted_price: string;
  turnaround_time: string;
  features_included: string[];
  value_proposition: string;
  whatsapp_preset: string;
  isPopular?: boolean;
};

const pricingTiers: PricingTier[] = [
  {
    tier_name: "The Corporate",
    package_alias: "The 'Credibility' Pack",
    target_audience: "Local small businesses, professional firms (law chambers, consultancies), hospitals, and schools needing an authoritative online presence to close deals.",
    formatted_price: "₦250,000",
    turnaround_time: "1-2 weeks",
    features_included: [
      "3 to 7 mobile-optimized pages (Home, About, Services, Contact, Blog/News).",
      "Integration with Google Business Profile and local maps.",
      "Highly optimized asset delivery (critical for fast loading on standard Nigerian 3G/4G networks).",
      "Standard contact forms, WhatsApp chat button widget, and social media linking.",
      "1 month of basic post-launch technical support."
    ],
    value_proposition: "This is a digital office. It ensures that when corporate partners or high-value clients look them up on Google, they find a fast, secure, and modern platform that builds immediate trust.",
    whatsapp_preset: "Hello Ugo.B, I'd like to initiate our project on the 'The Corporate' package (₦250,000)."
  },
  {
    tier_name: "The Commercial",
    package_alias: "The 'Transaction' Pack",
    target_audience: "Retail brands, fashion lines, local manufacturing companies, or service businesses requiring active customer portals, online bookings, or direct sales.",
    formatted_price: "₦500,000",
    turnaround_time: "3-4 weeks",
    features_included: [
      "Full inventory/product management system (up to 50 items mapped out natively).",
      "Flawless Paystack, Flutterwave, or Monnify payment gateway integration.",
      "Order notification system automated via Email or WhatsApp Business API.",
      "User account creation (Order tracking history, billing details).",
      "Coupon/discount code generation system and delivery fee shipping zones configuration.",
      "30 days of post-launch technical support."
    ],
    value_proposition: "This transitions a business from 'send a DM to order' to an automated sales machine that collects revenue securely even while the owner is asleep.",
    whatsapp_preset: "Hello Ugo.B, I'd like to initiate our project on the 'The Commercial' package (₦500,000) for my brand.",
    isPopular: true
  },
  {
    tier_name: "The Custom Engine",
    package_alias: "The 'Product' Pack",
    target_audience: "Tech startups building an MVP, logistics companies needing tracking systems, real estate management agencies, or businesses requiring highly customized web applications.",
    formatted_price: "Custom Quote",
    turnaround_time: "6-10 weeks",
    features_included: [
      "Fully custom-coded application architecture utilizing a robust database structure.",
      "Multi-layered security with role-based authentication (Admin, Vendor, Customer dashboards).",
      "Dynamic data pipelines, real-time updates, or advanced reporting/analytics tools.",
      "Complex third-party API integrations (SMS gateways, automated KYC verification, or accounting software).",
      "Comprehensive handover documentation and architecture map.",
      "60-day hyper-care support phase with a priority communication line."
    ],
    value_proposition: "This isn't just a website; it is proprietary software designed to automate complex operations or serve as the foundational product of a tech startup.",
    whatsapp_preset: "Hello Ugo.B, I'd like to request a custom quote for the Custom Engine package based on my brief."
  }
];

const faqs = [
  {
    q: "Why are the packages priced this way?",
    a: "Our pricing directly reflects the complexity of architecture, integration depth, and business-building strategic value. The Corporate tier provides institutional authority, the Commercial tier enables automated transactional scale, and the Custom Engine delivers proprietary tech products."
  },
  {
    q: "How do you handle domain and hosting costs?",
    a: "As a rule of strategic safety, we explicitly isolate domain and hosting costs from creative development fees in our contracts. Because global hosting providers bill in USD, exchange rate fluctuations can suddenly swing. We structure domains and hosting as recurring costs borne directly by the client based on prevailing market rates."
  },
  {
    q: "What payment gateways can you integrate?",
    a: "We integrate all leading local and international payment systems depending on your legal entities—including Paystack, Flutterwave, Monnify, Stripe, and Paypal. This ensures your clients can pay seamlessly with cards, transfers, USSD, or digital wallets."
  },
  {
    q: "Do we require a deposit before starting?",
    a: "Yes. All creative projects begin with a standard 50% deposit, with the final 50% settled upon successful completion, client review, and dynamic handover of the product files."
  },
  {
    q: "Who owns the code and creative assets after launch?",
    a: "You do. Once final project handovers and settlements are complete, absolute ownership and copyright control of all design assets, database systems, custom features, and code files are transferred fully and cleanly to you."
  }
];

const PricingContent = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-brand-bg text-brand-text min-h-screen">
      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-0 bottom-0 left-[10%] w-px bg-primary/5"></div>
        <div className="absolute top-0 bottom-0 right-[10%] w-px bg-primary/5"></div>
      </div>

      {/* Main Header / Intro */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-brand-bg z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-8">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Investment Blueprint
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-light text-brand-text mb-8 tracking-tight leading-[1.05]">
              Investment models <br />
              <span className="font-serif italic text-primary font-normal">built for return.</span>
            </h1>
            <p className="text-base text-brand-subtle max-w-xl mx-auto leading-relaxed font-light font-sans">
              Review custom development and digital design packages from Build with Ugo.B — crafted for return on investment, transparency, and high performance.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="relative pb-24 z-10">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className={`relative border rounded-[40px] p-10 flex flex-col justify-between transition-all duration-500 overflow-hidden shadow-sm text-left ${
                  tier.isPopular
                    ? "bg-brand-surfaceBright border-primary shadow-md lg:-translate-y-4"
                    : "bg-brand-surface/70 border-black/5 hover:shadow-lg hover:border-primary/20"
                }`}
              >
                {/* Popularity Badge */}
                {tier.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[9px] font-sans font-bold uppercase tracking-[0.25em] py-2.5 px-8 rounded-bl-3xl shadow-sm">
                    Most Popular
                  </div>
                )}

                {/* Visual accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none"></div>

                <div>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-primary px-3 py-1.5 bg-brand-bg border border-primary/10 rounded-full shadow-sm">
                      {tier.turnaround_time} Turnaround
                    </span>
                    {!tier.isPopular && (
                      <span className="text-xs uppercase tracking-widest font-serif italic text-primary/40 font-semibold">0{idx + 1}</span>
                    )}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-display font-light text-brand-text mb-1 tracking-tight">
                    {tier.tier_name}
                  </h2>
                  <p className="text-[10px] uppercase tracking-widest text-brand-subtle font-sans mb-6 font-bold">
                    {tier.package_alias}
                  </p>

                  <div className={`py-6 border-y border-black/5 mb-8 rounded-xl px-4 ${tier.isPopular ? "bg-brand-bg/50" : "bg-brand-bg/10"}`}>
                    <div className="text-[9px] text-brand-subtle uppercase tracking-widest font-sans mb-1 font-bold">
                      {tier.formatted_price === "Custom Quote" ? "Investment structure" : "Creative investment"}
                    </div>
                    <div className="text-3xl md:text-4xl font-serif font-light text-brand-text italic tracking-tight">
                      {tier.formatted_price}
                    </div>
                  </div>

                  <blockquote className={`text-xs text-brand-text italic font-serif leading-relaxed mb-8 p-6 rounded-2xl border border-black/5 ${tier.isPopular ? "bg-brand-bg/40" : "bg-brand-bg/50"}`}>
                    “{tier.value_proposition}”
                  </blockquote>

                  <div className="mb-8">
                    <h3 className="text-[10px] font-bold text-brand-subtle uppercase tracking-widest mb-2 font-sans">
                      Target Audience
                    </h3>
                    <p className="text-xs text-brand-subtle font-sans leading-relaxed font-light">
                      {tier.target_audience}
                    </p>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-[10px] font-bold text-brand-subtle uppercase tracking-widest mb-4 font-sans">
                      Features Included
                    </h3>
                    <ul className="space-y-3.5">
                      {tier.features_included.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs font-sans font-light leading-relaxed text-brand-text">
                          <svg className="w-4 h-4 text-primary shrink-0 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`https://wa.me/2348103579586?text=${encodeURIComponent(tier.whatsapp_preset)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2.5 px-6 py-4.5 font-bold uppercase tracking-widest text-[10px] transition-all duration-300 group shadow-sm mt-auto ${
                    tier.isPopular 
                      ? "bg-primary text-white hover:bg-primary-dark" 
                      : "bg-brand-bg border border-black/10 text-brand-text hover:bg-brand-surface"
                  }`}
                >
                  <span>{tier.formatted_price === "Custom Quote" ? "Get a Custom Quote" : "Select & Initiate"}</span>
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Strategic Billing Advice Note Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 p-8 bg-brand-surface/50 border border-black/5 rounded-[32px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
            <div className="md:max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 text-primary font-bold uppercase tracking-[0.2em] text-[9px] rounded-full mb-3">
                Strategic Billing Note
              </div>
              <h3 className="text-lg font-display font-light text-brand-text mb-2">
                Isolation of Recurring Infrastructure Costs
              </h3>
              <p className="text-xs text-brand-subtle font-sans leading-relaxed font-light">
                To hedge against foreign exchange volatility (as international hosting systems charge strictly in USD), all creative project estimates isolate domain registration and server hosting fees. These recurrent annual costs are borne directly by the client based on prevailing market rates at renewal dates.
              </p>
            </div>
            <a
              href="https://wa.me/2348103579586?text=Hello%20Ugo.B,%20I'd%20like%20to%20get%20a%20detailed%20custom%20proposal%20for%20a%20new%20web%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2.5 px-6 py-4.5 bg-brand-bg border border-black/10 text-brand-text font-bold uppercase tracking-widest text-[9px] hover:border-primary/20 transition-all hover:bg-brand-surface shadow-sm"
            >
              Request Custom Estimate
            </a>
          </motion.div>
        </div>
      </section>

      {/* Custom FAQs Section */}
      <section className="relative py-24 bg-brand-surface border-t border-black/5 z-10">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-bg/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Objections & Answers
            </div>
            <h2 className="text-4xl lg:text-5xl font-display font-light text-brand-text mb-4">
              Pricing <span className="font-serif italic text-primary font-normal">Friction Solved</span>
            </h2>
            <p className="text-xs text-brand-subtle max-w-md mx-auto leading-relaxed font-light font-sans">
              Clear, upfront information to build immediate structural partnership trust.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-brand-bg border border-black/5 rounded-[24px] overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <span className="font-sans font-semibold text-sm text-brand-text pr-4 leading-tight">
                      {faq.q}
                    </span>
                    <span className={`w-8 h-8 rounded-full border border-black/5 flex items-center justify-center shrink-0 bg-brand-surface text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-2 border-t border-black/5 text-xs text-brand-subtle font-sans leading-relaxed font-light">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingContent;
