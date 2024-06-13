/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      false,
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],

          primary: "#27CE8E",
          secondary: "#C2FFE8",
          accent: "#6aff3d",
        },
      },
    ],
  },
};
