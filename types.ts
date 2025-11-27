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

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string[];
}
