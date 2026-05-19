import React from "react";
import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Project | Consult a Premium Web Developer",
  description:
    "Get in touch with Build with Ugo.B for inquiries, consultations, or starting your next digital product. High-performance, SEO-dominant websites crafted in Nigeria.",
  alternates: {
    canonical: "https://build-with-ugob.com.ng/contact",
  },
  openGraph: {
    title: "Start Your Project | Consult a Premium Web Developer | Build with Ugo.B",
    url: "https://build-with-ugob.com.ng/contact",
  },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-text">
      {/* Contact Form Section */}
      <Contact />

      {/* FAQ Section */}
      <section className="py-32 bg-brand-surface border-t border-b border-black/5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-5xl font-display font-light text-brand-text mb-6">
                Common <span className="font-serif italic text-primary font-normal">Questions</span>
              </h2>
              <p className="text-brand-subtle font-light font-sans text-sm">
                Quick answers to common questions about working with us.
              </p>
            </div>

            <div className="space-y-4">
              <details className="group bg-brand-bg rounded-2xl p-8 border border-black/5 hover:border-primary/10 transition-all cursor-pointer shadow-sm">
                <summary className="flex items-center justify-between font-semibold text-brand-text tracking-tight list-none text-base font-sans">
                  What's your typical project timeline?
                  <svg
                    className="w-4 h-4 text-primary group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-6 text-brand-subtle text-sm leading-relaxed font-light font-sans">
                  A typical bespoke website takes 3 to 6 weeks from kickoff to launch,
                  depending on the scope and complexity. We'll provide a detailed
                  timeline during our initial consultation.
                </p>
              </details>

              <details className="group bg-brand-bg rounded-2xl p-8 border border-black/5 hover:border-primary/10 transition-all cursor-pointer shadow-sm">
                <summary className="flex items-center justify-between font-semibold text-brand-text tracking-tight list-none text-base font-sans">
                  Do you work with businesses globally or just locally?
                  <svg
                    className="w-4 h-4 text-primary group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-6 text-brand-subtle text-sm leading-relaxed font-light font-sans">
                  We work with businesses globally. While we are based in Imo State, Nigeria,
                  our digital workflow enables us to seamlessly design, build, and support
                  clients anywhere in the world.
                </p>
              </details>

              <details className="group bg-brand-bg rounded-2xl p-8 border border-black/5 hover:border-primary/10 transition-all cursor-pointer shadow-sm">
                <summary className="flex items-center justify-between font-semibold text-brand-text tracking-tight list-none text-base font-sans">
                  What's included in your web design and development service?
                  <svg
                    className="w-4 h-4 text-primary group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-6 text-brand-subtle text-sm leading-relaxed font-light font-sans">
                  Our comprehensive service covers creative UI/UX design, custom frontend and
                  backend coding, search engine optimization (SEO), payment gateway setup, domain mapping,
                  and 30 days of free post-launch support.
                </p>
              </details>

              <details className="group bg-brand-bg rounded-2xl p-8 border border-black/5 hover:border-primary/10 transition-all cursor-pointer shadow-sm">
                <summary className="flex items-center justify-between font-semibold text-brand-text tracking-tight list-none text-base font-sans">
                  Can you redesign an existing website?
                  <svg
                    className="w-4 h-4 text-primary group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-6 text-brand-subtle text-sm leading-relaxed font-light font-sans">
                  Yes, absolutely. We specialize in taking slow, outdated websites and transforming
                  them into highly premium, ultra-fast, search-dominant digital experiences that turn
                  visitors into customers.
                </p>
              </details>

              <details className="group bg-brand-bg rounded-2xl p-8 border border-black/5 hover:border-primary/10 transition-all cursor-pointer shadow-sm">
                <summary className="flex items-center justify-between font-semibold text-brand-text tracking-tight list-none text-base font-sans">
                  How do we collaborate and communicate during the project?
                  <svg
                    className="w-4 h-4 text-primary group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-6 text-brand-subtle text-sm leading-relaxed font-light font-sans">
                  We communicate primarily through WhatsApp or email for regular updates, and schedule
                  brief Google Meet / Zoom calls when checking off major design prototypes and development milestones.
                </p>
              </details>

              <details className="group bg-brand-bg rounded-2xl p-8 border border-black/5 hover:border-primary/10 transition-all cursor-pointer shadow-sm">
                <summary className="flex items-center justify-between font-semibold text-brand-text tracking-tight list-none text-base font-sans">
                  What are your payment terms?
                  <svg
                    className="w-4 h-4 text-primary group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-6 text-brand-subtle text-sm leading-relaxed font-light font-sans">
                  We typically offer a flexible 60% deposit upfront to initiate research and design,
                  with the remaining 40% balance payable upon completion and successful launch.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What's your typical project timeline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A typical bespoke website takes 3 to 6 weeks from kickoff to launch, depending on the scope and complexity. We'll provide a detailed timeline during our initial consultation.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work with businesses globally or just locally?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We work with businesses globally. While we are based in Imo State, Nigeria, our digital workflow enables us to seamlessly design, build, and support clients anywhere in the world.",
                },
              },
              {
                "@type": "Question",
                name: "What's included in your web design and development service?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Our comprehensive service covers creative UI/UX design, custom frontend and backend coding, search engine optimization (SEO), payment gateway setup, domain mapping, and 30 days of free post-launch support.",
                },
              },
              {
                "@type": "Question",
                name: "Can you redesign an existing website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, absolutely. We specialize in taking slow, outdated websites and transforming them into highly premium, ultra-fast, search-dominant digital experiences that turn visitors into customers.",
                },
              },
              {
                "@type": "Question",
                name: "How do we collaborate and communicate during the project?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We communicate primarily through WhatsApp or email for regular updates, and schedule brief Google Meet / Zoom calls when checking off major design prototypes and development milestones.",
                },
              },
              {
                "@type": "Question",
                name: "What are your payment terms?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We typically offer a flexible 60% deposit upfront to initiate research and design, with the remaining 40% balance payable upon completion and successful launch.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
};

export default ContactPage;
