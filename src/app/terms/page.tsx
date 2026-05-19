import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Build with Ugo.B",
  description: "Standard studio Terms of Service and contract engagement policies for Build with Ugo.B, governed by the laws of the Federal Republic of Nigeria.",
};

const TermsOfService = () => {
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
              REVISED: MAY 2026
            </span>
          </div>

          {/* Page Title */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-[10px] uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-6">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              Studio Agreement
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-light leading-tight tracking-tight text-brand-text">
              Terms of <br />
              <span className="font-serif italic text-primary font-normal">Service.</span>
            </h1>
            <p className="mt-6 text-sm text-brand-subtle font-sans font-light leading-relaxed max-w-xl">
              These Terms of Service outline the rules, obligations, and professional standards that govern your relationship with Build with Ugo.B when utilizing our custom web design, software development, and digital marketing services.
            </p>
          </div>

          {/* Legal Content */}
          <div className="space-y-12 font-sans text-brand-text font-light text-sm leading-relaxed border-t border-black/5 pt-12">
            
            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">1. Scope of Services & Contractual Acceptance</h2>
              <p>
                By accessing this website, submitting request inquiries, or commissioning projects with Build with Ugo.B, you express your full acceptance and agreement to comply with these terms. We specialize in bespoke digital products, including custom UI/UX design, frontend and backend engineering, search engine optimization (SEO), and custom e-commerce portal development.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">2. Project Financials & Payment Structure</h2>
              <p>
                To maintain our studio's high standards of quality and ensure resource dedication, all bespoke project engagements are bound by the following payment policies:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-brand-subtle">
                <li>
                  <strong className="text-brand-text font-medium">Upfront Deposit:</strong> A non-refundable fee representing <span className="text-primary font-bold">60% of the total estimated project cost</span> is required before any strategy design, systems architecture, or custom software coding begins.
                </li>
                <li>
                  <strong className="text-brand-text font-medium">Progress & Final Balance:</strong> The remaining 40% balance is payable in defined stages or immediately upon final project staging approval, prior to production server deployment or live asset transfers.
                </li>
                <li>
                  <strong className="text-brand-text font-medium">Currencies accepted:</strong> We accept payments in Nigerian Naira (NGN) and US Dollars (USD) via secure bank transfers or integrated payment gateways.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">3. Client Responsibilities & Asset Provision</h2>
              <p>
                Delivering high-end products requires synchronized execution. Clients are required to provide necessary resources, text copy, brand guidelines, credentials, and image assets in a timely manner. Delayed provisions or approvals exceeding 14 business days may result in a formal project suspension, rescheduling, or an administrative fee to resume development resources.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">4. Intellectual Property & Code Ownership</h2>
              <p>
                We respect creative ownership. Upon receipt of full and final payment, the client receives full ownership of all custom design assets, site layout templates, and tailored software code produced specifically for their project.
              </p>
              <p>
                Build with Ugo.B retains full proprietary rights and ownership over all pre-existing software boilerplates, structural libraries, reusable scripts, algorithms, or administrative tooling developed by our studio and incorporated into the delivery.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">5. Third-Party Costs & Integrations</h2>
              <p>
                Bespoke applications rely on cloud infrastructures. Unless explicitly detailed within our invoice agreements, clients are directly responsible for all third-party subscription costs. This includes domain registration fees, custom hosting servers (e.g. Vercel Pro, AWS), email delivery gateways (e.g. Resend premium tiers), API integration fees, database servers (e.g. Supabase premium layers), and commercial font licensing.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">6. Limitation of Liability & Warranties</h2>
              <p>
                Our services are provided on an "as-is" and "as-available" basis without any express or implied warranties. While we engineer digital products to the absolute highest specifications regarding speed, responsive UI, and security:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-brand-subtle">
                <li>
                  We do not guarantee that the software will operate completely uninterrupted or remain entirely error-free indefinitely due to browser/API updates beyond our control.
                </li>
                <li>
                  Build with Ugo.B is not liable for any indirect, incidental, special, or consequential damages, including loss of business profits, data loss, server downtimes, or client-side business disruptions arising from third-party hosting failures.
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">7. Governing Law & Dispute Resolution</h2>
              <p>
                These Terms of Service are exclusively governed by, construed, and enforced in accordance with the laws of the Federal Republic of Nigeria.
              </p>
              <p>
                Any dispute, difference, or claim arising out of or relating to our project engagements shall first be resolved through friendly, professional mediation. Where mediation fails to achieve resolution within 30 days, the dispute shall be resolved through binding arbitration under the rules of the Arbitration and Mediation Act 2023 of Nigeria. The physical seat of arbitration and legal jurisdiction shall strictly be Owerri, Imo State, Nigeria.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-lg font-serif font-medium text-brand-text tracking-tight">8. Amendments & Updates</h2>
              <p>
                Build with Ugo.B reserves the right to modify or replace these Terms of Service at any time. When updates occur, we will adjust the revision date at the top of this document. Continued engagement with our digital services following changes represents your active consent to the modified terms.
              </p>
              <div className="bg-brand-surface p-6 rounded-2xl border border-black/5 mt-4">
                <p className="font-sans font-bold text-brand-text">Legal Department — Build with Ugo.B</p>
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

export default TermsOfService;
