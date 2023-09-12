/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans'],
        'Kanit': ['Kanit', 'sans'],
      },
      animation: {
        'scale': 'scale 30s ease-in-out infinite',
      },
      keyframes: {
        scale: {
          '0%': { scale: '.75' },
          '20%': { scale: '1' },
          '40%': { scale: '0.90' },
          '60%': { scale: '0.95' },
          '80%': { scale: '0.70' },
          '100%': { scale: '0.75' },
        },
      },
    },
  },
  plugins: [],
}

