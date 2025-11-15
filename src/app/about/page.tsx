import React from "react";
import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Build With Ugo.B — our mission, vision, and commitment to building powerful, scalable, SEO-optimized websites for forward-thinking brands.",
  openGraph: {
    title: "About Build With Ugo.B",
    url: "https://build-with-ugob.com.ng/about",
  },
};


const AboutPage = () => {
  return (
    <AboutContent />
  );
}

export default AboutPage;
