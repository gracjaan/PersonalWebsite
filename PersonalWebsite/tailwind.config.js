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
        quaternary: 'rgba(115, 21, 230)',
      },
      keyframes: {
        slideUp: {
          'from' : {transform: 'translateY(0)'},
          'to' : {transform: 'translateY(-100%)'}
        },
        slideDown: {
          'from' : {transform: 'translateY(-100%)'},
          'to' : {transform: 'translateY(0)'}
        }
      },
      animation: {
        slideUp: 'slideUp 0.5s ease',
        slideDown: 'slideDown 0.5s ease'
      }
    },
  },
  plugins: [],
}