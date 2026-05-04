/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'botanical-green': '#4A5D4E',
        'botanical-clay': '#D4A373',
        'botanical-sand': '#E9EDC9',
        'botanical-white': '#FAFAF5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
