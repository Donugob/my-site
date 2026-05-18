import React from "react";
import type { Metadata } from "next";
import PricingContent from "@/components/PricingContent";

export const metadata: Metadata = {
  title: "Bespoke Project Pricing & Investment Tiers",
  description:
    "Review custom development and digital design packages from Build with Ugo.B — crafted for return on investment, transparency, and high performance.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://build-with-ugob.com.ng/pricing",
  },
  openGraph: {
    title: "Bespoke Project Pricing & Investment Tiers | Build with Ugo.B",
    url: "https://build-with-ugob.com.ng/pricing",
  },
};

const PricingPage = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Bespoke Web Design & Development Services",
    "image": "https://build-with-ugob.com.ng/og-image.jpg",
    "description": "High-performance digital systems, custom products, and corporate platforms built by Build with Ugo.B.",
    "brand": {
      "@type": "Brand",
      "name": "Build with Ugo.B"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "NGN",
      "lowPrice": "250000",
      "highPrice": "500000",
      "offerCount": "2",
      "offers": [
        {
          "@type": "Offer",
          "name": "The Corporate",
          "price": "250000",
          "priceCurrency": "NGN"
        },
        {
          "@type": "Offer",
          "name": "The Commercial",
          "price": "500000",
          "priceCurrency": "NGN"
        }
      ]
    }
  };

  return (
    <>
      <PricingContent />
      <script
        type="application/ld+json"
        // @ts-ignore
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </>
  );
};

export default PricingPage;
