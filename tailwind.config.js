/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
        bellefair: ['Bellefair', 'serif'],
      },
        backgroundImage: {
        'home-desktop': "url('src/assets/home/background-home-desktop.jpg')",
        'home-mobile': "url('src/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('src/assets/home/background-home-tablet.jpg')",
      },
    },
  },
  plugins: [],
}