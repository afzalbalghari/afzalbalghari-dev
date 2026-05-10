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
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        bg: {
          primary: "#0a0b0f",
          secondary: "#0f1015",
          tertiary: "#14151c",
        },
        surface: {
          DEFAULT: "#1a1b23",
          hover: "#1f2029",
        },
        border: {
          DEFAULT: "#2a2b35",
          hover: "#353645",
        },
        accent: {
          purple: "#6c63ff",
          teal: "#4ecca3",
          coral: "#ff6b6b",
          yellow: "#f4c430",
        },
        text: {
          primary: "#f0f0f5",
          secondary: "#9a9ab0",
          muted: "#5a5a70",
        },
      },
      animation: {
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
