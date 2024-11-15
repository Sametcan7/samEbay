/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#43C3D1",
      },
      fontFamily: {
        robotoCondensed: ["Roboto Condensed", "sans-serif"],
        rubikMoonrocks: ["Rubik Moonrocks", "cursive"],
      },
    },
  },
  plugins: [],
};
