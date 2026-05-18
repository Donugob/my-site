"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-brand-bg/95 backdrop-blur-xl border-b border-primary/5 py-4 shadow-sm" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo - Elegant Typographic Wordmark */}
          <Link href="/" className="flex-shrink-0 group flex items-center gap-2">
            <span className="font-serif italic font-semibold text-2xl tracking-tight text-brand-text group-hover:text-primary transition-colors">
              Build with <span className="font-sans font-extrabold not-italic text-primary tracking-normal">Ugo.B</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-xs uppercase tracking-[0.2em] font-medium text-brand-subtle hover:text-brand-text transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-primary hover:bg-primary-dark transition-all duration-300 group"
            >
              Start Your Project
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 text-brand-text focus:outline-none flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-brand-bg border-t border-black/5 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-10 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-xl font-display font-medium text-brand-subtle hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full px-6 py-4 text-sm font-bold uppercase tracking-widest text-white bg-primary"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
