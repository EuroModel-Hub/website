import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A1733",
          900: "#06101F",
          800: "#0A1733",
          700: "#16264D",
          600: "#1F3266",
        },
        eu: {
          blue: "#003399",
          gold: "#FFCC00",
        },
        brand: {
          DEFAULT: "#0B1E4A",
          50: "#EEF2FB",
          100: "#D6E0F4",
          200: "#AEC0E6",
          300: "#7E96D2",
          400: "#4F6BBA",
          500: "#2C4A99",
          600: "#1B3573",
          700: "#0B1E4A",
          800: "#081636",
          900: "#050F26",
        },
        accent: {
          DEFAULT: "#FFB200",
          400: "#FFC93C",
          500: "#FFB200",
          600: "#E69900",
        },
        cloud: "#F6F8FC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,30,74,0.04), 0 8px 24px rgba(11,30,74,0.06)",
        ring: "0 0 0 1px rgba(11,30,74,0.06), 0 12px 40px rgba(11,30,74,0.10)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "pulse-soft": "pulse-soft 4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(60% 60% at 50% 0%, rgba(255,179,0,0.18) 0%, rgba(11,30,74,0) 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
