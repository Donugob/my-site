"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";

const points = [
  {
    title: "Local Heart, Global Reach",
    description:
      "As an agnecy based in Owerri, we blend deep local understanding with world class development standards, ensuring your brand thrives anywhere.",
  },
  {
    title: "True Partnership",
    description:
      "We integrate with your team and your vision becomes our mission. Every project is a shared journey, not a transaction.",
  },
  {
    title: "Timeless Technology",
    description:
      "We build with tomorrow in mind, the results are scalable, secure, and lightning fast. Your platform grows with your ambition.",
  },
  {
    title: "Radical Transparency",
    description:
      "We believe in clear, honest communication, no hidden clauses, no smoke and mirrors. Just clarity and results.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: easeOut },
  }),
};

const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[500px] bg-gradient-to-b from-blue-100/60 to-transparent blur-3xl opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className="max-w-2xl"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 font-display leading-tight"
            >
              More Than an Agency, <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                We’re Your Growth Partner.
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-600 text-lg leading-relaxed mb-10"
            >
              We build websites and digital futures. Our
              philosophy blends collaboration, creativity, and precision to
              deliver experiences that accelerate your growth.
            </motion.p>

            <div className="space-y-8">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i + 2}
                  className="flex items-start"
                >
                  {/* Number block - fixed width so it never overlaps text */}
                  <div
                    className="flex-none mr-6"
                    aria-hidden
                    style={{ width: "64px", minWidth: "64px" }}
                  >
                    <span
                      className="block font-display font-extrabold leading-none tracking-tight text-gray-200 select-none"
                      style={{
                        // Responsive sizes
                        fontSize: "clamp(1.25rem, 4vw, 2.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      <span className="text-gray-300 block">
                        0{String(i + 1).padStart(1, "0")}
                      </span>
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 relative z-20">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content: image card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Accent layer */}
              <motion.div
                initial={{ rotate: 8, y: 40, opacity: 0 }}
                whileInView={{ rotate: 6, y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-blue-500/8 via-indigo-400/6 to-transparent shadow-xl"
                aria-hidden
              />

              {/* Image */}
              <motion.img
                src="/ugob.jpg"
                alt="Ugo.B"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className="relative z-10 w-full rounded-3xl shadow-2xl object-cover border border-gray-100 h-[320px] md:h-[420px] lg:h-[520px]"
              />

              {/* Decorative floating shape */}
              <motion.div
                initial={{ opacity: 0, scale: 0.6, y: 40 }}
                whileInView={{ opacity: 0.55, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-xl"
                aria-hidden
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
