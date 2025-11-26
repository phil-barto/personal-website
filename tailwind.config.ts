import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "Helvetica", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        "fira-code": ["var(--font-fira-code)", "monospace"],
      },
      transitionTimingFunction: {
        slow: "cubic-bezier(.405, 0, .025, 1)",
      },
      transitionDuration: {
        mid: "3s",
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
