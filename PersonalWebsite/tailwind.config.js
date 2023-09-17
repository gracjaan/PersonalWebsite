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
        rotatingText1: {
          "0%": { transform: "translateY(0)" },
          "28%": { transform: "translateY(0)" },
          "33%": { transform: "translateY(-60px)" },
          "62%": { transform: "translateY(-60px)" },
          "67%": { transform: "translateY(-120px)" },
          "95%": { transform: "translateY(-120px)" },
          "100%": { transform: "translateY(0)" },
        },
        rotatingText2: {
          "0%": { transform: "translateY(0)" },
          "28%": { transform: "translateY(0)" },
          "33%": { transform: "translateY(-72px)" },
          "62%": { transform: "translateY(-72px)" },
          "67%": { transform: "translateY(-144px)" },
          "95%": { transform: "translateY(-144px)" },
          "100%": { transform: "translateY(0)" },
        },
        rotatingText3: {
          "0%": { transform: "translateY(0)" },
          "28%": { transform: "translateY(0)" },
          "33%": { transform: "translateY(-120px)" },
          "62%": { transform: "translateY(-120px)" },
          "67%": { transform: "translateY(-240px)" },
          "95%": { transform: "translateY(-240px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideUp: 'slideUp 0.5s ease',
        slideDown: 'slideDown 0.5s ease',
        rotatingText1: 'rotatingText1 6s linear infinite',
        rotatingText2: 'rotatingText2 6s linear infinite',
        rotatingText3: 'rotatingText3 6s linear infinite',
      },
      fontFamily: {
        'ar': ["Aeonik-Regular", "Montserrat","Helvetica", "system-ui", "sans-serif"],
        'ab': ["Aeonik-Bold", "Montserrat","Helvetica", "system-ui", "sans-serif"]
      },
    },
  },
  plugins: [],
}