/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        serif: ["'Playfair Display'", "serif"],
        sans: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        teal: {
          50: "#f0fafa",
          100: "#d0f0f0",
          200: "#a0e0e0",
          300: "#60c8c8",
          400: "#30a8a8",
          500: "#0d8585",
          600: "#0a6868",
          700: "#084f4f",
          800: "#063838",
          900: "#042828",
          950: "#021818",
        },
        cream: "#faf8f4",
        gold: "#c9a84c",
        "warm-white": "#f9f6f0",
      },
    },
  },
  plugins: [],
};
