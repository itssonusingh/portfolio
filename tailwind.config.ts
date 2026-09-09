import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B0F1A",
        panel: "#111726",
        panel2: "#161E30",
        line: "#232C40",
        ink: "#E7EAF2",
        muted: "#8B93A8",
        faint: "#5B637A",
        accent: "#3FA7D6",
        accentDim: "#2C7BA3",
        warn: "#D97B4F",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        prose: "70ch",
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(63,167,214,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(63,167,214,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
    },
  },
  plugins: [],
};
export default config;
