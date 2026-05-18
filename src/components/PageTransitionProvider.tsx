"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [initialPercent, setInitialPercent] = useState(0);
  const [isPageSwitching, setIsPageSwitching] = useState(false);
  const [activePath, setActivePath] = useState(pathname);

  // Initial Counter Loader (on first visit)
  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 1500; // 1.5s total loader time
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setInitialPercent(start);
      if (start >= end) {
        clearInterval(timer);
        setTimeout(() => {
          setIsInitialLoading(false);
        }, 400); // short delay to show "100%" and complete brand text reveal
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  // Listen to pathname changes for page transitions
  useEffect(() => {
    if (pathname !== activePath) {
      setIsPageSwitching(true);
      // Let the entry transition play, then update active path to switch layouts
      const timeout = setTimeout(() => {
        setActivePath(pathname);
        // Let the exit transition play
        setTimeout(() => {
          setIsPageSwitching(false);
        }, 600);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [pathname, activePath]);

  // Loading phase messages
  const getLoaderMessage = (pct: number) => {
    if (pct < 25) return "indexing asset matrix...";
    if (pct < 50) return "assembling layout schema...";
    if (pct < 75) return "compiling visual aesthetics...";
    if (pct < 95) return "stabilizing connection tunnels...";
    return "systems active.";
  };

  const brandText = "Build with Ugo.B";

  return (
    <>
      {/* Initial Loader Overlay */}
      <AnimatePresence>
        {isInitialLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              y: "-100%",
              transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 bg-[#1C1A17] text-[#FAF8F5] z-[9999] flex flex-col justify-between p-8 md:p-16 select-none"
          >
            {/* Top Bar info */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="font-sans font-bold uppercase tracking-[0.25em] text-[10px] text-primary animate-pulse">
                  SYSTEM READY
                </span>
                <span className="font-sans text-[8px] text-[#FAF8F5]/40 tracking-wider uppercase mt-1">
                  digital infrastructure studio
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] font-sans font-bold uppercase tracking-wider text-[#FAF8F5]/60">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
                ESTABLISHING TRACE
              </div>
            </div>

            {/* Central Counter & Geometric Spinning Core */}
            <div className="flex flex-col items-center justify-center relative w-full">
              {/* Rotating architectural circular wireframe in background */}
              <div className="absolute w-72 h-72 md:w-96 md:h-96 pointer-events-none opacity-5 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border border-dashed border-[#FAF8F5] rounded-full relative"
                >
                  <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#FAF8F5]"></div>
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-[#FAF8F5]"></div>
                </motion.div>
              </div>

              {/* Counter Tag */}
              <div className="mb-4 text-xs font-mono tracking-widest text-[#FAF8F5]/40">
                [{initialPercent.toString().padStart(3, "0")}%]
              </div>

              {/* STAGGERED CHARACTER BRAND REVEAL */}
              <h1 className="text-4xl md:text-7xl font-display font-light text-[#FAF8F5] tracking-tight leading-none text-center flex flex-wrap justify-center mb-6 max-w-2xl">
                {brandText.split("").map((char, index) => {
                  // Let characters reveal staggered based on progress percentage
                  const charProgressTrigger = (index / brandText.length) * 85;
                  const isRevealed = initialPercent >= charProgressTrigger;

                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={isRevealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 15, scale: 0.95 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className={`inline-block ${char === " " ? "w-3 md:w-6" : ""} ${
                        index >= 11 ? "font-serif italic text-primary" : ""
                      }`}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </h1>

              {/* Technical Blueprint Accent Line */}
              <div className="w-24 md:w-32 h-[1px] bg-primary/20 relative mb-8 overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-primary to-transparent"
                />
              </div>

              <p className="text-[10px] font-sans font-semibold text-primary uppercase tracking-[0.2em]">
                {getLoaderMessage(initialPercent)}
              </p>
            </div>

            {/* Bottom status */}
            <div className="flex justify-between items-end text-[#FAF8F5]/30 text-[8px] uppercase tracking-widest font-sans font-light">
              <span>LOC: OWERRI, NIGERIA (5.4833° N, 6.9833° E)</span>
              <span>© {new Date().getFullYear()}</span>
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
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-primary pointer-events-auto shadow-2xl flex items-center justify-center"
            >
              {/* Subtle visual sweeping brand accent inside the transitioning slide */}
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
              transition={{ duration: 0.5, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-[#F4F1EA] pointer-events-auto"
            />
          </div>
        )}
      </AnimatePresence>

      {/* Main children layout rendering the active pathname state */}
      <div className={isPageSwitching ? "opacity-30 pointer-events-none transition-opacity duration-300" : "transition-opacity duration-300"}>
        {children}
      </div>
    </>
  );
}
