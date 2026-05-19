import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Build with Ugo.B",
  description: "Privacy Policy and data protection compliance information for Build with Ugo.B, in accordance with the Nigeria Data Protection Act (NDPA) 2023.",
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text pt-32 pb-24 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Header Navigation Area */}
          <div className="flex justify-between items-center border-b border-black/5 pb-8 mb-16">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-primary hover:text-primary-dark transition-colors"
            >
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Back to Home</span>
            </Link>
            <span className="text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-brand-subtle/50">
              EFFECTIVE: MAY 2026
            </span>
          </div>

          {/* Page Title */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Regulatory Compliance
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-light leading-tight tracking-tight text-brand-text">
              Privacy <br />
              <span className="font-serif italic text-primary font-normal">Policy.</span>
            </h1>
            <p className="mt-6 text-sm text-brand-subtle font-sans font-light leading-relaxed max-w-xl">
              This Privacy Policy explains how Build with Ugo.B ("we", "us", or "our") collects, protects, processes, and respects personal data when you interact with our website and digital services.
            </p>
          </div>

          {/* Legal Content */}
          <div className="space-y-12 font-sans text-brand-text font-light text-sm leading-relaxed border-t border-black/5 pt-12">
            
            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">1. Regulatory Framework & Governance</h2>
              <p>
                As a digital service operating in Imo State, Nigeria, we process personal data in strict compliance with the Nigeria Data Protection Act (NDPA) 2023 and regulations issued by the Nigeria Data Protection Commission (NDPC). Under these regulations, Build with Ugo.B acts as the Data Controller for the information you provide when accessing our forms, newsletter list, or interactive contact widgets.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">2. Information We Collect</h2>
              <p>
                We only gather personal data that you explicitly provide, or which is automatically generated through standard, highly optimized browsing analytics. This includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-brand-subtle">
                <li>
                  <strong className="text-brand-text font-medium">Identity & Contact Data:</strong> Your name, email address, phone number, and any project notes you submit voluntarily via our contact form or newsletter modules.
                </li>
                <li>
                  <strong className="text-brand-text font-medium">Communication Channels:</strong> Phone numbers and profile identifiers used when you engage directly with our built-in WhatsApp chat widget.
                </li>
                <li>
                  <strong className="text-brand-text font-medium">Device & Telemetry Data:</strong> Automatically logged IP addresses, browser specifications, operating system details, and general website page usage statistics collected securely via Vercel Speed Insights and Analytics.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">3. Lawful Bases for Processing</h2>
              <p>
                In alignment with Section 25 of the NDPA 2023, we will only process your personal data under the following legitimate, legal grounds:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-brand-subtle">
                <li>
                  <strong className="text-brand-text font-medium">Consent:</strong> You have given clear, explicit consent by opting into our digital newsletter list or requesting contact.
                </li>
                <li>
                  <strong className="text-brand-text font-medium">Contractual Necessity:</strong> Processing is required to take steps at your request prior to entering into a custom development or design contract.
                </li>
                <li>
                  <strong className="text-brand-text font-medium">Legitimate Interests:</strong> Processing supports our ongoing efforts to improve our service telemetry, optimize web speeds, and ensure total cybersecurity protection for our systems.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">4. Third-Party Integrations & Data Sharing</h2>
              <p>
                We do not sell, rent, or trade your personal information. To guarantee high-performance infrastructure, we securely transmit data to key, standard digital sub-processors:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-brand-subtle">
                <li>
                  <strong className="text-brand-text font-medium">Resend:</strong> Used to manage our audience segments and transmit automated system emails securely.
                </li>
                <li>
                  <strong className="text-brand-text font-medium">Vercel:</strong> Our primary hosting and analytics framework, capturing essential diagnostic speed and site stability telemetry.
                </li>
                <li>
                  <strong className="text-brand-text font-medium">WhatsApp:</strong> Powering instant communications through WhatsApp APIs for quick, direct digital support.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">5. Data Retention & Safeguards</h2>
              <p>
                We retain your personal data only for as long as necessary to fulfill the specific purposes outlined in this policy (e.g., maintaining active newsletter sync states or executing project agreements). 
              </p>
              <p>
                We apply advanced technical and organizational measures (including HTTPS encryption, strong access restrictions on cloud accounts, and secure serverless architectures) to protect your personal data from unauthorized access, loss, manipulation, or breach.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">6. Your Rights Under the NDPA 2023</h2>
              <p>
                As a data subject in Nigeria, you possess extensive statutory rights regarding your personal information. These include:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-brand-subtle">
                <li>
                  <strong className="text-brand-text font-medium">Right to Access:</strong> Ask us to confirm whether we process your data and obtain a secure copy.
                </li>
                <li>
                  <strong className="text-brand-text font-medium">Right to Rectification:</strong> Request correction of inaccurate, outdated, or incomplete data.
                </li>
                <li>
                  <strong className="text-brand-text font-medium">Right to Erasure ("Right to be Forgotten"):</strong> Demand the deletion of your personal data where consent has been withdrawn.
                </li>
                <li>
                  <strong className="text-brand-text font-medium">Right to Object & Restrict:</strong> Oppose processing based purely on legitimate interests, or restrict its use during ongoing verification disputes.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">7. Contact Information</h2>
              <p>
                To exercise any of your statutory rights, withdraw consent, or register a data concern, please reach out directly to our Data Protection representative:
              </p>
              <div className="bg-brand-surface p-6 rounded-2xl border border-black/5 mt-4">
                <p className="font-sans font-bold text-brand-text">Build with Ugo.B — Data Administration</p>
                <p className="text-xs text-brand-subtle mt-1">Owerri, Imo State, Nigeria</p>
                <a 
                  href="mailto:legal@build-with-ugob.com.ng" 
                  className="inline-block mt-3 text-xs uppercase tracking-wider font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  legal@build-with-ugob.com.ng
                </a>
              </div>
            </section>

          </div>

          {/* Footer Back Button */}
          <div className="border-t border-black/5 mt-16 pt-8 flex justify-center">
            <Link
              href="/"
              className="px-8 py-3.5 bg-brand-surface border border-primary/10 hover:border-primary/30 rounded-xl text-[10px] font-sans font-bold uppercase tracking-widest text-brand-text transition-all duration-300"
            >
              Return Home
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
