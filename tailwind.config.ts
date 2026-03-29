import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FAFAF8",
        dark: "#1A1A1A",
        warmgray: "#6B6B6B",
        gold: {
          DEFAULT: "#C4A265",
          dark: "#A8893F",
          light: "#D4B87A",
        },
        border: "#E8E6E1",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: [
          "clamp(2.75rem, 6vw, 5.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em" },
        ],
        section: [
          "clamp(1.75rem, 3vw, 3rem)",
          { lineHeight: "1.2", letterSpacing: "-0.01em" },
        ],
      },
      keyframes: {
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "ken-burns": "ken-burns 20s ease-out forwards",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
