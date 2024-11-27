import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
 default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   fontFamily: {
    integral: ["IntegralCF Heavy", "sans-serif"],
   },
   keyframes: {
    scroll: {
     to: {
      transform: "translate(calc(-50% - 0.5rem))",
     },
    },
    "border-spin": {
     "100%": {
      transform: "rotate(-360deg)",
     },
    },
   },
   animation: {
    "border-spin": "border-spin 7s linear infinite",
    scroll:
     "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
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
 plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
 let allColors = flattenColorPalette(theme("colors"));
 let newVars = Object.fromEntries(
  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
 );

 addBase({
  ":root": newVars,
 });
}
