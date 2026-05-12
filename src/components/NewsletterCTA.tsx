"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setEmail("");
  };

  return (
    <section className={`py-32 bg-brand-bg relative overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-brand-surface border border-white/5 rounded-[40px] p-12 lg:p-24 relative overflow-hidden text-center"
        >
          {/* Background Aura */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/4 -translate-y-1/4"></div>
          
          <div className="relative z-10">
            <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-10">
              Protocol Sync
            </div>
            
            <h2 className="text-6xl lg:text-8xl font-display font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-10">
              Intellectual <br />
              <span className="text-primary not-italic">Uplink</span>
            </h2>
            
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto leading-relaxed mb-16">
              Subscribe to our high-frequency intelligence reports. Direct insights on systems architecture and digital dominance.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subject Email"
                required
                className="flex-1 bg-brand-bg border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/40 transition-all text-white text-sm"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-10 py-4 bg-primary text-black font-black uppercase tracking-widest text-[10px] rounded-2xl hover:bg-white transition-all duration-300 disabled:opacity-50"
              >
                {status === "loading" ? "Syncing..." : status === "success" ? "Authorized" : "Authorize"}
              </button>
            </form>
            
            <div className="mt-12 flex justify-center items-center gap-6">
               <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-brand-bg border border-white/10 flex items-center justify-center overflow-hidden">
                       <div className="w-full h-full bg-primary/20"></div>
                    </div>
                  ))}
               </div>
               <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">Joined by 500+ Engineers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
