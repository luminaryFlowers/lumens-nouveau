/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      bg: {
        main: "#535353",
        page: "#C6C6C6",
        body: "#EFEFEF",
      },
    },
  },
  plugins: [],
};

module.exports = config;
