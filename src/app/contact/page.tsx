import React from "react";
import Contact from "@/components/Contact";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Build With Ugo.B for inquiries, support, or to start your next project. We're here to help you build high-performance, SEO-optimized digital experiences.",
  openGraph: {
    title: "Contact Build With Ugo.B",
    url: "https://build-with-ugob.com.ng/contact",
  },
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Your existing Contact component */}
      <Contact />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600">
                Quick answers to common questions about working with us
              </p>
            </div>

            <div className="space-y-4">
              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  What's your typical project timeline?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Most projects take 6-12 weeks from kickoff to launch,
                  depending on scope and complexity. We'll provide a detailed
                  timeline during our initial consultation.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  Do you work with startups?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Absolutely! We love working with startups and understand the
                  unique challenges of building a product from scratch. We offer
                  flexible packages tailored to startup budgets.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  What's included in your web development service?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Our full-stack service includes UI/UX design, front-end and
                  back-end development, testing, deployment, and 30 days of
                  post-launch support.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  Can you help with an existing project?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  Yes! We can audit, optimize, or add features to existing
                  projects. We work with most modern tech stacks including
                  React, Next.js, Node.js, and more.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  How do you handle project communication?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  We use Slack for daily communication and provide weekly
                  progress updates via video call. You'll have a dedicated
                  project manager as your main point of contact throughout the
                  project.
                </p>
              </details>

              <details className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  What payment terms do you offer?
                  <svg
                    className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                  We typically work with a 50% deposit upfront and 50% upon
                  project completion. For larger projects, we can discuss
                  milestone-based payments.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Let's discuss your project and see how we can help bring your
              vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@buildwithugob.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-all duration-300"
              >
                Email Us
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </a>
              <a
                href="tel:+2348103579586"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Call Us
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
