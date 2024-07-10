/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF7826',
        txt: '#9E9E9E',
        bkg: '#232323',
      },
      fontFamily: {
        popins: 'Poppins'
      }
    },
  },
  plugins: [],
}
