/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffa600", //0.25
        secondary: "#04befc",
        ternary: "#0000ff", //0.125
      },
    },
  },
  plugins: [],
}

