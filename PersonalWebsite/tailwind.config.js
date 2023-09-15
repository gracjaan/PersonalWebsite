/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: {
          1: 'rgba(255, 255, 255)',
          2: 'rgba(115, 21, 230)',
        },
        tertiary: '#F5F5F5',
      },
    },
  },
  plugins: [],
}