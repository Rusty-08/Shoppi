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
        header: '5rem',
        ['container-height']: 'calc(100vh - 5rem)'
      },
      width: {

      },
      colors: {
        primary: {
          DEFAULT: '#E6E6E6',
          'low-opacity-blue': 'rgba(31, 70, 144, 0.1)',
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

