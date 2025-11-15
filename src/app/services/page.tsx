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
  return (
    <ServicesContent />
  );
};

export default ServicesPage;
