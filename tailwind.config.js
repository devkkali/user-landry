/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        dark: "#0A1931",
        primary: "#319FDD",
      },
      boxShadow: {
        light: "0 1px 20px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};