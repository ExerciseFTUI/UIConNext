/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#EBE3D5',
        light_green: '#739072',
        dark_green: '#3A4D39',
        light_brown: '#E1C78F',
        brown: '#706233',
      },
    },
  },
  plugins: [],
};
