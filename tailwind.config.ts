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
        /* ── blacks ── */
        "bk":     "#020406",
        "bk2":    "#05080a",
        "bk3":    "#080d0a",
        "card":   "#0a100c",
        "card2":  "#0d1510",
        /* ── greens ── */
        "g":      "#00ff87",
        "g-dim":  "#00cc6a",
        "g-dark": "#004d28",
        /* ── text ── */
        "tw":     "#e8f5ee",   /* text white  */
        "ts":     "#7aad8f",   /* text secondary */
        "tm":     "#3d6b50",   /* text muted */
        /* ── borders ── */
        "br":     "#0f2018",
        "br2":    "#1a3528",
      },
      backgroundImage: {
        "grad-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      boxShadow: {
        "g-sm":  "0 0 12px rgba(0,255,135,0.25)",
        "g-md":  "0 0 30px rgba(0,255,135,0.2)",
        "g-lg":  "0 0 60px rgba(0,255,135,0.15)",
        "g-xl":  "0 0 100px rgba(0,255,135,0.12)",
        "card":  "0 8px 32px rgba(0,0,0,0.6)",
        "card-h":"0 16px 48px rgba(0,255,135,0.12)",
      },
      animation: {
        "float":    "float 7s ease-in-out infinite",
        "float-r":  "float-r 6s ease-in-out infinite",
        "scan":     "scan 5s linear infinite",
        "spin-slow":"spin 12s linear infinite",
        "shimmer":  "shimmer 2.5s linear infinite",
        "orbit":    "orbit 8s linear infinite",
      },
      keyframes: {
        float:    { "0%,100%":{ transform:"translateY(0px) rotate(0deg)" }, "50%":{ transform:"translateY(-18px) rotate(1.5deg)" } },
        "float-r":{ "0%,100%":{ transform:"translateY(0px) rotate(0deg)" }, "50%":{ transform:"translateY(-14px) rotate(-1.5deg)" } },
        scan:     { to:{ top:"200%" } },
        shimmer:  { "0%":{ backgroundPosition:"200% center" }, "100%":{ backgroundPosition:"-200% center" } },
        orbit:    { from:{ transform:"rotate(0deg) translateX(120px) rotate(0deg)" }, to:{ transform:"rotate(360deg) translateX(120px) rotate(-360deg)" } },
      },
    },
  },
  plugins: [],
};
export default config;
