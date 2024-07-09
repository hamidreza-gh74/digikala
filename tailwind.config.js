/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mob': '300px',

      'des': '1024px',
    },
    extend: {
      backgroundImage: {
        'gradient-315': 'linear-gradient(315deg, var(--tw-gradient-stops))',
        'gradient-225': 'linear-gradient(225deg, var(--tw-gradient-stops))'
      },
    },
  },
  plugins: [],
}

