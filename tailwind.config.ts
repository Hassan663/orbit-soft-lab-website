import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#131514",
        "ink-deep": "#0B0B0B",
        "ink-card": "#161816",
        lime: "#B2EC36",
        "lime-dark": "#72CD32",
        body: "rgba(254,254,254,0.7)",
      },
      fontFamily: {
        // CSS variables are set on <html> by next/font in app/layout.tsx
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        glass: "0px 8px 30px 0px rgba(0,0,0,0.2)",
        header: "0px 4px 21px 0px rgba(0,0,0,0.5)",
        lime: "0 0 40px rgba(178,236,54,0.25)",
      },
      backgroundImage: {
        "lime-gradient": "linear-gradient(180deg, #72CD32 0%, #B2EC36 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) scale(1)" },
          "33%": { transform: "translate3d(60px, -40px, 0) scale(1.08)" },
          "66%": { transform: "translate3d(20px, 30px, 0) scale(0.96)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "none" },
        },
        "nav-in": {
          from: { opacity: "0", transform: "translateY(-120px)" },
          to: { opacity: "1", transform: "none" },
        },
        "page-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
        "fade-up": "fade-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "nav-in": "nav-in 600ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "page-in": "page-in 350ms cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
