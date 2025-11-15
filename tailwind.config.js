/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Sora", "sans-serif"],
      },

      colors: {
        primary: {
          DEFAULT: "#0052FF",
          dark: "#003ECC",
        },
        brand: {
          bg: "#FDFDFF",
          text: "#1A202C",
          subtle: "#6B7280",
        },
        accent: "#E0E7FF",
      },

      // All keyframes you used before
      keyframes: {
        slideInUp: {
          from: { opacity: 0, transform: "translateY(50px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        reveal: {
          from: { clipPath: "inset(0 100% 0 0)" },
          to: { clipPath: "inset(0 0 0 0)" },
        },

        // 🔥 This is the missing animation responsible for your Testimonials being invisible
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      // All animation utilities
      animation: {
        "slide-in-up": "slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        reveal: "reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",

        // 🔥 Your custom utility from the inline <style> tag
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
