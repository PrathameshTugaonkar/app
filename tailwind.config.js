/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      sm: "575px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#121723",
        dark: "#1D2430",
        primary: {
          DEFAULT: "#344563", // Lighter, more visible navy blue
          50: "#F0F3F7",
          100: "#E1E6EE",
          200: "#C3CDDC",
          300: "#A5B4CA",
          400: "#879BB8",
          500: "#344563", // Main primary color
          600: "#2C3B54",
          700: "#243145",
          800: "#1C2736",
          900: "#141D27",
          light: "#5C7399", // Specific light mode variant
          dark: "#6B84B7", // Specific dark mode variant
        },
        blue: {
          DEFAULT: "#3A4F6D", // Rich, more vibrant navy blue
          50: "#F2F5F9",
          100: "#E5EBF3",
          200: "#CBD6E6",
          300: "#B1C2D9",
          400: "#97ADCC",
          500: "#3A4F6D", // Main blue color
          600: "#314463",
          700: "#283959",
          800: "#1F2E4F",
          900: "#162345",
          light: "#5C7399", // Specific light mode variant
          dark: "#7B97C9", // Specific dark mode variant
        },
        dark: "#1D2430", // Keep existing dark background
        "bg-color-dark": "#171C28",
        "body-color": {
          DEFAULT: "#788293",
          dark: "#B0BACE", // Lightened for better readability
        },
        stroke: {
          DEFAULT: "#E3E8EF",
          dark: "#3C4257", // Adjusted for better contrast
        },
        gray: {
          ...colors.gray,
          dark: "#1E232E",
          light: "#F0F2F9",
        },
      },

      boxShadow: {
        signUp: "0px 5px 10px rgba(52, 69, 99, 0.2)", // Adjusted to primary color
        one: "0px 2px 3px rgba(52, 69, 99, 0.05)",
        two: "0px 5px 10px rgba(52, 69, 99, 0.1)",
        three: "0px 5px 15px rgba(52, 69, 99, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(52, 69, 99, 0.1)",
        "sticky-dark": "inset 0 -1px 0 0 rgba(107, 132, 183, 0.1)",
        "feature-2": "0px 10px 40px rgba(52, 69, 99, 0.12)",
        submit: "0px 5px 20px rgba(52, 69, 99, 0.1)",
        "submit-dark": "0px 5px 20px rgba(107, 132, 183, 0.1)",
        btn: "0px 1px 2px rgba(52, 69, 99, 0.15)",
        "btn-hover": "0px 1px 2px rgba(52, 69, 99, 0.15)",
        "btn-light": "0px 1px 2px rgba(52, 69, 99, 0.1)",
      },
      dropShadow: {
        three: "0px 5px 15px rgba(52, 69, 99, 0.05)",
      },
    },
  },
  plugins: [],
};