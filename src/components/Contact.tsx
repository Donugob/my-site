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
        message: "Message sent successfully. We will get back to you shortly!",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      setSubmitStatus({
        type: "error",
        message: result.message || "Failed to send message. Please retry or connect on WhatsApp.",
      });
    }
  };

  return (
    <section id="contact" className="py-40 bg-brand-bg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-primary/10 bg-brand-surface/40 backdrop-blur-md rounded-full text-xs uppercase tracking-[0.2em] font-sans text-primary font-semibold mb-8">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                Get in Touch
              </div>
              <h2 className="text-5xl lg:text-8xl font-display font-light text-brand-text mb-8 tracking-tight leading-[1.05]">
                Let's start a <br />
                <span className="font-serif italic text-primary font-normal">conversation.</span>
              </h2>
              <p className="text-lg text-brand-subtle font-light leading-relaxed mb-16 max-w-md font-sans">
                Ready to create something exceptional? Tell us about your project, goals, and timeline.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-black/5 flex items-center justify-center group-hover:border-primary/40 transition-colors shadow-sm">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                   </div>
                   <div className="font-sans">
                      <div className="text-[10px] text-brand-subtle uppercase tracking-widest font-semibold mb-1">Email Address</div>
                      <a href="mailto:hello@build-with-ugob.com.ng" className="text-lg text-brand-text font-semibold hover:text-primary transition-colors">hello@build-with-ugob.com.ng</a>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-black/5 flex items-center justify-center group-hover:border-primary/40 transition-colors shadow-sm">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                      </svg>
                   </div>
                   <div className="font-sans">
                      <div className="text-[10px] text-brand-subtle uppercase tracking-widest font-semibold mb-1">WhatsApp Chat</div>
                      <a href="https://wa.me/2348103579586" target="_blank" rel="noopener noreferrer" className="text-lg text-brand-text font-semibold hover:text-primary transition-colors">+234 810 357 9586</a>
                   </div>
                </div>

                <div className="flex items-start gap-6 group">
                   <div className="w-12 h-12 rounded-2xl bg-brand-surface border border-black/5 flex items-center justify-center group-hover:border-primary/40 transition-colors shadow-sm">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                   </div>
                   <div className="font-sans">
                      <div className="text-[10px] text-brand-subtle uppercase tracking-widest font-semibold mb-1">Location</div>
                      <p className="text-lg text-brand-text font-semibold">Owerri, Imo State, Nigeria</p>
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
              className="bg-brand-surface p-12 rounded-[40px] border border-black/5 relative shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-10 font-sans">
                <div className="grid md:grid-cols-2 gap-10">
                   <div className="space-y-2">
                      <label className="text-[10px] text-brand-subtle uppercase tracking-widest font-semibold ml-4">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-brand-bg border border-black/5 rounded-2xl p-4 focus:outline-none focus:border-primary transition-all text-brand-text placeholder:text-brand-subtle/30"
                        placeholder="John Doe"
                        required
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] text-brand-subtle uppercase tracking-widest font-semibold ml-4">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-brand-bg border border-black/5 rounded-2xl p-4 focus:outline-none focus:border-primary transition-all text-brand-text placeholder:text-brand-subtle/30"
                        placeholder="john@example.com"
                        required
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-[10px] text-brand-subtle uppercase tracking-widest font-semibold ml-4">Project Details</label>
                   <textarea
                     name="message"
                     value={formData.message}
                     onChange={handleChange}
                     rows={5}
                     className="w-full bg-brand-bg border border-black/5 rounded-2xl p-4 focus:outline-none focus:border-primary transition-all text-brand-text placeholder:text-brand-subtle/30 resize-none"
                     placeholder="Tell us about your project..."
                     required
                   ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-primary-dark transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Submit Message"}
                </button>

                {submitStatus.type && (
                  <div className={`p-4 rounded-xl text-center text-xs font-semibold uppercase tracking-widest ${submitStatus.type === "success" ? "bg-primary/10 text-primary" : "bg-red-500/10 text-red-500"}`}>
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
