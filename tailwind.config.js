/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lex: ["Lexend", "sans-serif"],
      },
      colors: {
        btn1: "#B4F461",
        pr: "#111111",
        second: "#111111B2",
        placeholder: "#11111166",
      },
    },
  },
  plugins: [],
};
