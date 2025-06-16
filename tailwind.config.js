export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
}