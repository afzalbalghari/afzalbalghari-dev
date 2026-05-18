import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body:    ["var(--font-dm-sans)", "sans-serif"],
        mono:    ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        "bg-primary":    "#0a0b0f",
        "bg-secondary":  "#0f1015",
        "bg-tertiary":   "#14151c",
        "surface":       "#1a1b23",
        "surface-hover": "#1f2029",
        "border":        "#2a2b35",
        "border-hover":  "#353645",
        "accent-purple": "#6c63ff",
        "accent-teal":   "#4ecca3",
        "accent-coral":  "#ff6b6b",
        "accent-yellow": "#f4c430",
        "text-primary":  "#f0f0f5",
        "text-secondary":"#9a9ab0",
        "text-muted":    "#5a5a70",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        scan:  "scan 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)"  },
          "50%":     { transform: "translateY(-14px)" },
        },
        scan: { to: { top: "200%" } },
      },
    },
  },
  plugins: [],
};

export default config;