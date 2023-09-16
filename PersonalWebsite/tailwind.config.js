/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(0, 0, 0)',
        secondary: 'rgb(255, 255, 255)',
        tertiary: 'rgb(162, 61, 224)',
        quaternary: 'rgb(115, 21, 230)',
      },
      keyframes: {
        slideUp: {
          'from' : {transform: 'translateY(0)'},
          'to' : {transform: 'translateY(-100%)'}
        },
        slideDown: {
          'from' : {transform: 'translateY(-100%)'},
          'to' : {transform: 'translateY(0)'}
        },
        rotatingText: {
          "0%": { transform: "translateY(0)" },
          "28%": { transform: "translateY(0)" },
          "33%": { transform: "translateY(-90px)" },
          "62%": { transform: "translateY(-90px)" },
          "67%": { transform: "translateY(-180px)" },
          "95%": { transform: "translateY(-180px)" },
          "100%": { transform: "translateY(0)" },
        }
      },
      animation: {
        slideUp: 'slideUp 0.5s ease',
        slideDown: 'slideDown 0.5s ease',
        rotatingText: 'rotatingText 6s linear infinite'
      }
    },
  },
  plugins: [],
}