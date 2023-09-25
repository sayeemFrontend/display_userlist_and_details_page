/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';

export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.green,
      white: colors.white,
      black: colors.black,
    },

    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        xs: '460px',
        '4xl': '2100px',
      },
    },
  },
  plugins: [],
};
