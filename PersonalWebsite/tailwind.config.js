/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(0, 0, 0)',
        secondary: {
          100: 'rgba(255, 255, 255)',
          200: 'rgba(255, 255, 255, 0.64)',
        },
        tertiary: 'rgba(162, 61, 224)',
      },
    },
  },
  plugins: [],
}