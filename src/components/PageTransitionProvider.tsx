"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";


const WhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget"), {
  ssr: false,
});

const loaderWords = ["CRAFTING", "ENGINEERING", "PERFORMING", "ESTABLISHING"];
const brandText = "Build with Ugo.B";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [wordIndex, setWordIndex] = useState(0);
  const [showBrand, setShowBrand] = useState(false);
  const [isPageSwitching, setIsPageSwitching] = useState(false);
  const [activePath, setActivePath] = useState(pathname);

  // Initial Loader Word Cascade Sequence
  useEffect(() => {
    if (wordIndex < loaderWords.length - 1) {
      const timer = setTimeout(() => {
        setWordIndex((prev) => prev + 1);
      }, 280); // Quick, fluid word switching
      return () => clearTimeout(timer);
    } else {
      // Transition to brand name reveal after word cascade
      const timer = setTimeout(() => {
        setShowBrand(true);
      }, 280);
      return () => clearTimeout(timer);
    }
  }, [wordIndex]);

  // Handle Loader complete after brand is shown
  useEffect(() => {
    if (showBrand) {
      const timer = setTimeout(() => {
        setIsInitialLoading(false);
      }, 1100); // Give the brand text full spotlight before slide out
      return () => clearTimeout(timer);
    }
  }, [showBrand]);

  // Listen to pathname changes for page transitions
  useEffect(() => {
    if (pathname !== activePath) {
      setIsPageSwitching(true);
      const timeout = setTimeout(() => {
        setActivePath(pathname);
        setTimeout(() => {
          setIsPageSwitching(false);
        }, 600);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [pathname, activePath]);

  // Liquid SVG Path definitions for elastic peel-off effect
  // Flat screen cover coordinates: M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z
  // Elastic downward curve coordinates (drag tension as it lifts): M 0 0 L 100 0 L 100 100 Q 50 130 0 100 Z
  // Fully retracted coordinates: M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z
  const svgInitialPath = "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z";
  const svgExitPath = "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z";

  const liquidCurtainVariants = {
    initial: {
      d: svgInitialPath,
    },
    exit: {
      d: svgExitPath,
      transition: {
        duration: 0.95,
        ease: [0.76, 0, 0.24, 1] as const, // Pure Locomotive-curve easing
      },
    },
  };

  return (
    <>
      {/* Immersive Award-Winning Initial Loader */}
      <AnimatePresence>
        {isInitialLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: { duration: 0.9, delay: 0.1 }
            }}
            className="fixed inset-0 z-[9999] pointer-events-none select-none flex items-center justify-center"
          >
            {/* Liquid SVG Curtain layer */}
            <svg
              className="absolute inset-0 w-full h-full fill-[#1C1A17] pointer-events-auto"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                variants={liquidCurtainVariants}
                initial="initial"
                exit="exit"
              />
            </svg>

            {/* Typography Content container */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center px-6">
              {/* Concept Words Cascade */}
              {!showBrand && (
                <div className="h-16 overflow-hidden relative flex items-center justify-center">
                  <motion.div
                    key={wordIndex}
                    initial={{ y: 40, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -40, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.25, ease: [0.215, 0.61, 0.355, 1] as const }}
                    className="text-sm md:text-md font-sans font-bold uppercase tracking-[0.35em] text-[#FAF8F5]/40 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
                    {loaderWords[wordIndex]}
                  </motion.div>
                </div>
              )}

              {/* Majestic Grand Brand Reveal */}
              {showBrand && (
                <div className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as const }}
                    className="flex flex-col items-center"
                  >
                    {/* Small technical metadata subtitle */}
                    <span className="text-[9px] font-sans font-bold uppercase tracking-[0.25em] text-primary mb-3">
                      DIGITAL STUDIO
                    </span>

                    {/* Expansive dynamic typography */}
                    <motion.h1
                      initial={{ letterSpacing: "0.02em" }}
                      animate={{ letterSpacing: "0.18em" }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="text-4xl md:text-7xl font-display font-light text-[#FAF8F5] leading-none text-center tracking-tight"
                    >
                      Build with{" "}
                      <span className="font-serif italic text-primary font-normal">
                        Ugo.B
                      </span>
                    </motion.h1>

                    {/* Scrolling scanning line underneath the brand name */}
                    <div className="w-24 h-[1px] bg-primary/20 relative mt-6 overflow-hidden rounded-full">
                      <motion.div
                        initial={{ left: "-100%" }}
                        animate={{ left: "100%" }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                      />
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Switch Transition Overlay (Curtain Wipe) */}
      <AnimatePresence mode="wait">
        {isPageSwitching && (
          <div className="fixed inset-0 z-[999] pointer-events-none">
            {/* Primary terracotta slide cover */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] as const }}
              className="absolute inset-0 bg-primary pointer-events-auto shadow-2xl flex items-center justify-center"
            >
              {/* Subtle large sweeping brand accent inside the transitioning slide */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 0.08, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="text-white text-5xl md:text-7xl font-serif italic uppercase tracking-widest select-none font-bold"
              >
                UGO.B
              </motion.div>
            </motion.div>
            {/* Secondary warm sand offset slide cover */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.76, 0, 0.24, 1] as const }}
              className="absolute inset-0 bg-[#F4F1EA] pointer-events-auto"
            />
          </div>
        )}
      </AnimatePresence>

      {/* Main children layout rendering the active pathname state */}
      <div className={isPageSwitching ? "opacity-30 pointer-events-none transition-opacity duration-300" : "transition-opacity duration-300"}>
        {children}
      </div>

      {/* Dynamically loaded lead-capture widget */}
      <WhatsAppWidget />
    </>
  );
}
