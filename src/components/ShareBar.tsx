// @/components/ShareBar.tsx
"use client";

import { useState, useEffect } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  XIcon,
} from "react-share";

interface ShareBarProps {
  url: string;
  title: string;
}

export const ShareBar = ({ url, title }: ShareBarProps) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Desktop – Vertical floating bar (left side) */}
      <div
        className={`hidden lg:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-4 bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full p-4 shadow-2xl transition-all duration-500 z-40 ${
          hasScrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}
      >
        <TwitterShareButton url={url} title={title}>
          <XIcon
            size={40}
            round
            className="hover:scale-110 transition-transform"
          />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon
            size={40}
            round
            className="hover:scale-110 transition-transform"
          />
        </LinkedinShareButton>
        <FacebookShareButton url={url} hashtag="#webdevelopment">
          <FacebookIcon
            size={40}
            round
            className="hover:scale-110 transition-transform"
          />
        </FacebookShareButton>
        <button
          onClick={handleCopy}
          className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all group"
          title="Copy link"
        >
          {copied ? (
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-700 group-hover:text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile – Sticky bottom bar */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-200 px-6 py-4 flex items-center justify-center gap-8 transition-all duration-500 z-40 ${
          hasScrolled
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <TwitterShareButton url={url} title={title}>
          <XIcon size={36} round />
        </TwitterShareButton>
        <LinkedinShareButton url={url} title={title}>
          <LinkedinIcon size={36} round />
        </LinkedinShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon size={36} round />
        </FacebookShareButton>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-medium"
        >
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </>
  );
};
