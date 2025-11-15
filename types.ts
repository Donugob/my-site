import React from "react";

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  image: string;
}
