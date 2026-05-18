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
          ? "bg-brand-bg/80 backdrop-blur-xl border-b border-white/5 py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group flex items-center gap-4">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <svg className="w-full h-full text-primary transition-transform duration-700 group-hover:rotate-[360deg]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Architectural Monogram 'UB' */}
                <path d="M20 20V70C20 81 29 90 40 90H45V45H75C83 45 90 38 90 30C90 22 83 15 75 15H20V20Z" className="fill-current opacity-10" />
                <path d="M25 20V65C25 73.2843 31.7157 80 40 80H45V50H70C78.2843 50 85 43.2843 85 35C85 26.7157 78.2843 20 70 20H25Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M45 50H70C78.2843 50 85 56.7157 85 65C85 73.2843 78.2843 80 70 80H55" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M25 40H35" stroke="currentColor" strokeWidth="1.5" />
                <path d="M25 55H35" stroke="currentColor" strokeWidth="1.5" />
                {/* Precision accents */}
                <circle cx="85" cy="35" r="1.5" fill="currentColor" />
                <circle cx="85" cy="65" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-display font-medium text-white tracking-[0.25em] leading-none mb-1">
                UGO.B
              </span>
              <span className="text-[10px] text-primary/60 font-medium tracking-[0.4em] uppercase">
                Engineering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-xs uppercase tracking-widest font-semibold text-gray-400 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-primary rounded-full hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] group"
            >
              Start a Project
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 text-white focus:outline-none flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.2" : ""}`}></span>
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
            className="md:hidden absolute top-full left-0 w-full bg-[#0A0A0B] border-t border-white/5 shadow-2xl overflow-hidden"
          >
            <div className="px-6 py-10 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="block text-xl font-display font-bold text-gray-400 hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-6">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center w-full px-6 py-4 text-sm font-bold uppercase tracking-widest text-black bg-primary rounded-xl"
                >
                  Start a Project
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
