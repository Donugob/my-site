import React from "react";
import ServicesContent from "@/components/ServicesContent";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Discover the range of services offered by Build With Ugo.B, including web development, UI/UX design, mobile app development, and more, all tailored to help your business grow.",
  openGraph: {
    title: "Our Services",
    url: "https://build-with-ugob.com.ng/services",
  },
};

const ServicesPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development",
    description: "We develop fast, modern, and SEO-dominant websites.",
  };

    // This section was invalid JSX/JSON, so we will replace it with declarative JS for rendering later.

    const faqSchemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a website cost in Owerri?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Starter sites start at ₦150,000. Business Pro at ₦350,000. Custom web apps from ₦600,000+."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer payment plans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! 60% upfront, 40% on delivery."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in support?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "30–90 days of free updates, bug fixes, and training."
          }
        }
      ]
    };
  return (
    <>
    <ServicesContent />
    <script
        type="application/ld+json"
        // @ts-ignore
        // The slot prop is not needed here and not supported in Next.js/React
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        // @ts-ignore
        // The slot prop is not needed here and not supported in Next.js/React
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />
      </>
  );
};

export default ServicesPage;
