/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#1a1a2e',
          light: '#16213e',
        },
        accent: {
          DEFAULT: '#ff6b6b', // Soft coral
          secondary: '#feca57', // Gold/Orange for gradient
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      // Adding custom animations for the "fade up" effect
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeUp: 'fadeUp 1s ease-out forwards',
      }
    },
  },
  plugins: [],
}