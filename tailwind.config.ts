import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      charcoal: "#101820",
      chalk: "#7d8590",
      secondary: "#FEE715",
      green: colors.green,
      white: colors.white,
      black: colors.black,
      slate: colors.slate,
      transparent: colors.transparent,
    },
  },
  plugins: [require("@tailwindcss/forms")],
  darkMode: "class", // media & class
};
export default config;
