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
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
        display: ["'Cormorant Garamond'", "serif"],
      },

      colors: {
        primary: {
          DEFAULT: "#D4AF37", // Champagne Gold
          dark: "#B5952F",
        },
        brand: {
          bg: "#070707", // Deep Onyx
          surface: "#111111",
          text: "#F4F4F5",
          subtle: "#A1A1AA",
        },
        accent: {
          DEFAULT: "#D4AF37",
          muted: "rgba(212, 175, 55, 0.1)",
        }
      },

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
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },

      animation: {
        "slide-in-up": "slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        reveal: "reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
