/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg-theme-light': '#DDDCDF',
        'tx-theme-light': '#1C1A1A',
        'bg-theme-dark': '#110D1A',
        'tx-theme-dark': '#FFFFFF',
        'red-gradient':'bg-gradient-to-r from-[#A32A2A] to-[#DE3838]',
      }
    },
  },
  plugins: [],
}