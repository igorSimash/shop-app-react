/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkBlue': '#021b39',
        'lightBlue': '#04c2c9',
        'smoothGray' : 'rgb(0, 0, 0, 0.5)',
        'body': 'rgba(34, 34, 34, 0.09)'
      },
    },
    minWidth: {
      '1/2': '50%',
    },
    minHeight: {
      '1/2': '50%',
    }
  },
  plugins: [],
}