// @/components/NewsletterCTA.tsx
"use client";

import { useState } from "react";

interface NewsletterCTAProps {
  className?: string;
}

export const NewsletterCTA = ({ className = "" }: NewsletterCTAProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Replace with your actual form handler (ConvertKit, Mailchimp, etc.)
    // For demo purposes:
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
    setEmail("");
  };

  return (
    <section
      className={`bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 ${className}`}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl p-12 md:p-20 text-center shadow-2xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600/20 border border-blue-500/30 rounded-full mb-8">
              <svg
                className="w-5 h-5 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm font-semibold text-blue-300 uppercase tracking-wider">
                Exclusive Newsletter
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Level Up Your Craft
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get in-depth guides, performance tips, and modern web patterns
              delivered straight to your inbox — only when it's truly worth
              reading.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-10 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "loading"
                  ? "Subscribing..."
                  : status === "success"
                  ? "Welcome aboard ✨"
                  : "Subscribe"}
              </button>
            </form>

            <p className="mt-6 text-sm text-gray-400">
              ~2 emails per month · No spam ever · Unsubscribe anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
