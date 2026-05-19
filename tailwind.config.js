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
        sans: ["var(--font-outfit)", "sans-serif"],
        display: ["var(--font-cormorant)", "serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },

      colors: {
        primary: {
          DEFAULT: "#8C6239", 
          dark: "#6D4C2B",
        },
        brand: {
          bg: "#FAF6F0",
          surface: "#F5EFE6",
          surfaceBright: "#EBE5DA",
          text: "#1E1E1E",
          subtle: "#5A5A5A",
        },
        accent: {
          DEFAULT: "#4D5D53",
          muted: "rgba(77, 93, 83, 0.1)",
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
