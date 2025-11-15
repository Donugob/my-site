"use client";

import React, { useState, useEffect } from "react";

const CodeBlock = () => {
  const codeString = `const project = {
  vision: "Digital Excellence",
  tech: ["React", "TypeScript"],
  status: "Building... 🚀"
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

  // escape HTML chars
  const escapeHtml = (str: string) =>
    str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  // Tokenizer + renderer to avoid overlapping replace() issues
  const syntaxHighlight = (code: string) => {
    const escaped = code; // typedCode is raw; we'll escape when outputting tokens
    // Combined regex with alternatives:
    // 1 = comment (//...)
    // 2 = string quotes (captures quote char in group 2 and content in group 3 via backref)
    // 4 = keywords
    // 5 = identifiers we want to highlight (project, vision, etc.)
    // 6 = punctuation/braces
    // 7 = whitespace
    // 8 = fallback (any other characters)
    const tokenRegex =
      /(\/\/.*?$)|(["'`])([\s\S]*?)\2|(\b(?:const|let|var|function|return|class|new|if|else|for|while|import|from)\b)|(\b(?:project|vision|tech|status|launch)\b)|([{}\[\]();,])|(\s+)|(.+?)/gm;

    let result = "";
    let match;
    while ((match = tokenRegex.exec(escaped)) !== null) {
      if (match[1]) {
        // comment
        result += `<span class="text-gray-400 italic">${escapeHtml(
          match[1]
        )}</span>`;
      } else if (match[2] !== undefined) {
        // string (match[2] is the quote char, match[3] is content)
        const quote = escapeHtml(match[2]);
        const content = escapeHtml(match[3]);
        result += `<span class="text-green-600">${quote}${content}${quote}</span>`;
      } else if (match[4]) {
        // keyword
        result += `<span class="text-purple-600">${escapeHtml(
          match[4]
        )}</span>`;
      } else if (match[5]) {
        // identifiers (project, vision, ...)
        result += `<span class="text-blue-600">${escapeHtml(match[5])}</span>`;
      } else if (match[6]) {
        // punctuation / braces
        result += `<span class="text-gray-500">${escapeHtml(match[6])}</span>`;
      } else if (match[7]) {
        // whitespace
        result += escapeHtml(match[7]);
      } else if (match[8]) {
        // fallback text
        result += escapeHtml(match[8]);
      }
    }

    return result;
  };

  return (
    <div className="relative bg-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-800 w-full max-w-lg font-mono text-sm overflow-hidden group">
      <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="flex items-center gap-2 mb-5 relative z-10">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="ml-3 text-xs text-gray-500">main.ts</span>
      </div>

      <pre className="whitespace-pre-wrap text-gray-300 relative z-10">
        <code
          // we intentionally use dangerouslySetInnerHTML with properly escaped + tokenized HTML
          dangerouslySetInnerHTML={{ __html: syntaxHighlight(typedCode) }}
        />
        <span
          className={`inline-block w-2 h-5 bg-blue-500 ml-0.5 ${
            cursorVisible ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        ></span>
      </pre>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-xs font-medium text-gray-700 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for new projects
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6">
              Crafting Digital
              <br />
              <span className="text-blue-600">Experiences</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
              We build high-performance web applications that drive results.
              From concept to launch, we turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-white bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-200 hover:shadow-lg hover:shadow-gray-900/20 group"
              >
                Start Your Project
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>

              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-gray-900 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-900 transition-all duration-200 group"
              >
                View Our Work
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <CodeBlock />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
};

export default Hero;
