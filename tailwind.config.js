/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary_green: "#00A86B",
        primary_grey: "#D9D9D9",
        black: {
          darker: "#052825",
          dark: "#2A4039",
          light: "#2A3440",
          light_dark: "#283D36",
        },
        green: {
          light: "#669006",
          lighter: "#86BF02",
        },
        grey: {
          dark: "#92929D",
          mobile_dark: "#E7E7E7",
          light: "#5B5B60",
        },
      },
    },
  },
  plugins: [],
};
