/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./pages/**/*.{tsx,ts}"],
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
        white: {
          light: "#ffffff",
        },
        green: {
          light: "#669006",
          light_dark: "#53b175",
          lighter: "#86BF02",
        },
        grey: {
          dark: "#92929D",
          mobile_dark: "#E7E7E7",
          light: "#5B5B60",
          cream: "#e7e7e7",
        },
        red: {
          light: "#e84a4d",
        },
      },
      screens: {
        lg: { max: "1110px" },
      },
    },
  },
  plugins: [],
};
