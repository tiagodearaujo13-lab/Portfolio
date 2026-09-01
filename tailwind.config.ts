import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        ink: "var(--ink)",
        "soft-ink": "var(--soft-ink)",
        rule: "var(--rule)",
        "quiet-rule": "var(--quiet-rule)",
      },
      fontFamily: {
        mono: ["var(--mono)"],
        sans: ["var(--sans)"],
        serif: ["var(--serif)"],
      },
    },
  },
  plugins: [],
};
export default config;
