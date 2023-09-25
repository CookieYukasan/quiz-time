/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-gradient":
          "linear-gradient(129deg, #996DFF 8.18%, #633BBC 95.51%)",
      },
      colors: {
        grey: {
          100: "#D9D9D9",
          200: "#565E6D",
          300: "#252C3A",
          400: "#1D2330",
          500: "#181D28",
          600: "#161A24",
        },
        green: {
          light: "#ABF770",
          dark: "#5CAD1D",
        },
        red: {
          light: "#F77070",
          dark: "#AB3030",
        },
      },
      fontFamily: {
        sans: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
