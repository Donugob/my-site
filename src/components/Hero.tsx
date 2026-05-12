"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CodeBlock = () => {
  const codeString = `const project = {
  vision: "Digital Excellence",
  tech: ["Next.js", "TypeScript"],
  status: "Optimizing... ⚡"
};

launch(project);`;

  const [typedCode, setTypedCode] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedCode(codeString.substring(0, index));
      index++;
      if (index > codeString.length) {
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const escapeHtml = (str: string) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const syntaxHighlight = (code: string) => {
    const escaped = code;
    const tokenRegex =
      /(\/\/.*?$)|(["'`])([\s\S]*?)\2|(\b(?:const|let|var|function|return|class|new|if|else|for|while|import|from)\b)|(\b(?:project|vision|tech|status|launch)\b)|([{}\[\]();,])|(\s+)|(.+?)/gm;

    let result = "";
    let match;
    while ((match = tokenRegex.exec(escaped)) !== null) {
      if (match[1]) {
        result += `<span class="text-gray-500 italic">${escapeHtml(match[1])}</span>`;
      } else if (match[2] !== undefined) {
        const quote = escapeHtml(match[2]);
        const content = escapeHtml(match[3]);
        result += `<span class="text-primary">${quote}${content}${quote}</span>`;
      } else if (match[4]) {
        result += `<span class="text-purple-400">${escapeHtml(match[4])}</span>`;
      } else if (match[5]) {
        result += `<span class="text-blue-400">${escapeHtml(match[5])}</span>`;
      } else if (match[6]) {
        result += `<span class="text-gray-400">${escapeHtml(match[6])}</span>`;
      } else if (match[7]) {
        result += escapeHtml(match[7]);
      } else if (match[8]) {
        result += escapeHtml(match[8]);
      }
    }
    return result;
  };

  return (
    <div className="relative bg-brand-surface p-8 rounded-[32px] shadow-3xl border border-white/5 w-full max-w-lg font-mono text-xs md:text-sm overflow-hidden group">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="flex items-center gap-2 mb-6 relative z-10">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
        <span className="ml-3 text-[10px] uppercase tracking-widest text-gray-600 font-bold">main.ts</span>
      </div>
      <pre className="whitespace-pre-wrap text-gray-300 relative z-10 leading-relaxed">
        <code dangerouslySetInnerHTML={{ __html: syntaxHighlight(typedCode) }} />
        <span className={`inline-block w-1.5 h-4 bg-primary ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"}`} />
      </pre>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-24 lg:pt-56 lg:pb-40 bg-brand-bg overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-[0.3em] font-medium text-primary mb-10">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
              Pioneering Digital Architecture
            </div>

            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-display font-medium text-white leading-[0.85] tracking-tighter mb-10">
              Building <br />
              <span className="text-primary italic">Beyond</span> <br />
              Digital.
            </h1>

            <p className="text-lg lg:text-xl text-gray-400 leading-relaxed mb-12 max-w-xl font-light">
              We engineer high-performance digital ecosystems that redefine industries. Precision engineering meets uncompromising design.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-black bg-primary rounded-2xl hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
              >
                Launch a Project
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest text-white bg-transparent border border-white/10 rounded-2xl hover:border-white transition-all duration-300 group"
              >
                Our Manifest
              </Link>
            </div>

            <div className="flex items-center gap-12 mt-16 pt-10 border-t border-white/5">
              <div>
                <div className="text-4xl font-display font-medium text-white tracking-tighter italic">25+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">Systems Deployed</div>
              </div>
              <div>
                <div className="text-4xl font-display font-medium text-white tracking-tighter italic">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mt-1">SLA Compliance</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-2xl opacity-20"></div>
              <CodeBlock />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default Hero;
