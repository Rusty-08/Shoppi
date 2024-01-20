// import colors from 'tailwindcss/colors'

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
          DEFAULT: '#E6E6E6',
          blue: '#1f4690',
          text: '#768A96',
          medium: '#AAC7D8',
          light: '#DFEBF6',
          dark: '#29353C',
        }
      }
    },
  },
  plugins: [],
}

