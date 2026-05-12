"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "9fee5f06-06b4-4e5b-8329-f45fd52fd654",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `New Message from ${formData.name}`,
      }),
    });

    const result = await res.json();
    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus({
        type: "success",
        message: "Transmission received. Our team will synchronize shortly.",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus({
        type: "error",
        message: result.message || "Uplink failure. Please retry or use WhatsApp.",
      });
    }
  };

  return (
    <section id="contact" className="py-40 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-8">
                Command Center
              </div>
              <h2 className="text-6xl lg:text-8xl font-display font-black text-white italic uppercase tracking-tighter leading-[0.9] mb-8">
                Initialize <br />
                <span className="text-primary not-italic">Sync</span>
              </h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed mb-16 max-w-md">
                Whether it's a technical audit or a full-scale deployment, we're ready to engineer your digital future.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-white/5 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                   </div>
                   <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Secure Email</div>
                      <a href="mailto:hello@build-with-ugob.com.ng" className="text-lg text-white font-bold hover:text-primary transition-colors">hello@build-with-ugob.com.ng</a>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-white/5 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                      </svg>
                   </div>
                   <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Direct Sync</div>
                      <a href="https://wa.me/2348103579586" target="_blank" rel="noopener noreferrer" className="text-lg text-white font-bold hover:text-primary transition-colors">+234 810 357 9586</a>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-white/5 flex items-center justify-center group-hover:border-primary/40 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                   </div>
                   <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black mb-1">Base of Operations</div>
                      <p className="text-lg text-white font-bold italic uppercase tracking-tight">Owerri, Nigeria</p>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-brand-surface p-12 rounded-[40px] border border-white/5 relative"
            >
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-10">
                   <div className="space-y-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-black ml-4">Subject Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-brand-bg border border-white/5 rounded-2xl p-4 focus:outline-none focus:border-primary/40 transition-all text-white placeholder:text-white/10"
                        placeholder="John Doe"
                        required
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest font-black ml-4">Digital Identity</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-brand-bg border border-white/5 rounded-2xl p-4 focus:outline-none focus:border-primary/40 transition-all text-white placeholder:text-white/10"
                        placeholder="john@example.com"
                        required
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] text-gray-500 uppercase tracking-widest font-black ml-4">Mission Objective</label>
                   <textarea
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     rows={5}
                     className="w-full bg-brand-bg border border-white/5 rounded-2xl p-4 focus:outline-none focus:border-primary/40 transition-all text-white placeholder:text-white/10 resize-none"
                     placeholder="Tell us about your project..."
                     required
                   ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-primary text-black font-black uppercase tracking-[0.2em] text-sm rounded-2xl hover:bg-white transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Transmitting..." : "Send Protocol"}
                </button>

                {submitStatus.type && (
                  <div className={`p-4 rounded-xl text-center text-[10px] font-black uppercase tracking-widest ${submitStatus.type === "success" ? "bg-primary/10 text-primary" : "bg-red-500/10 text-red-500"}`}>
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
