/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      skew: {
        '17': '17deg',
      },
      screens: {
        'mobile': '280px',
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1280px',
      }
    },
    fontFamily: {
      'hind': ['Hind Siliguri', 'sans-serif'],
    }
  },
  plugins: [],
}
