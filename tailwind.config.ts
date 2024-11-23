import type { Config } from "tailwindcss";

export default {
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   keyframes: {
    "border-spin": {
     "100%": {
      transform: "rotate(-360deg)",
     },
    },
   },
   animation: {
    "border-spin": "border-spin 7s linear infinite",
   },
   colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
   },
   dropShadow: {
    glow: "0 0 20px rgba(255, 255, 255, 0.5)",
    "glow-lg": "0 0 30px rgba(255, 255, 255, 0.5)",
   },
  },
 },
 plugins: [],
} satisfies Config;
