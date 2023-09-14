/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      fontFamily: {
        Agrandir: ["Agrandir"],
        Mulish: ["Mulish"],
      },
    },
  },
  plugins: [],
};
