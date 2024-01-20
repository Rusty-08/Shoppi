import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        header: '5rem'
      },
      width: {

      },
      colors: {
        primary: {
          DEFAULT: colors.slate[200],
          hover: colors.slate[300],
          text: colors.slate[500],
          active: colors.sky[700],
          dark: colors.slate[800],
          ['hover-dark']: colors.slate[900],
        }
      }
    },
  },
  plugins: [],
}

