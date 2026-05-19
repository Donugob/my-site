import React from "react";
import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Bespoke Web Designer & Developer in Imo State",
  description:
    "Learn about Build with Ugo.B, a premium CAC-registered web design and development studio in Owerri, Imo State helping brands scale with custom code and local SEO dominance.",
  alternates: {
    canonical: "https://build-with-ugob.com.ng/about",
  },
  openGraph: {
    title: "Bespoke Web Designer & Developer in Imo State | Build with Ugo.B",
    url: "https://build-with-ugob.com.ng/about",
  },
};

const AboutPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Ugo.B",
        url: "https://build-with-ugob.com.ng/about",
        image: "https://build-with-ugob.com.ng/ugob.webp",
        jobTitle: "Full-Stack Web Developer",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Imo State University",
          sameAs: "https://www.imsu.edu.ng/",
        },
        worksFor: {
          "@id": "https://build-with-ugob.com.ng/#organization",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://build-with-ugob.com.ng/#organization",
        name: "Build With Ugo.B",
        url: "https://build-with-ugob.com.ng",
        logo: "https://build-with-ugob.com.ng/logo.png",
        image: "https://build-with-ugob.com.ng/ugob.webp",
        taxID: "8620310",
        identifier: "BN 8620310",
        description:
          "A CAC-registered web development agency in Owerri, Imo State, specializing in fast, modern, and SEO-dominant websites.",
        founder: {
          "@type": "Person",
          name: "Ugo.B",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Owerri",
          addressRegion: "Imo State",
          addressCountry: "NG",
        },
        telephone: "+2348103579586",
        areaServed: "Owerri",
        priceRange: "$$",
      },
    ],
  };

  return (
    <>
      <AboutContent />
      <script
        type="application/ld+json"
        // @ts-ignore
        // The slot prop is not needed here and not supported in Next.js/React
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
};

export default AboutPage;
