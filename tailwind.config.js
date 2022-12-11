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
      screens: {
        's': {'max': '589px'},
        // => @media (max-width: 499px) { ... }
        'sm': {'min': '590px', 'max': '854px'},
        // => @media (min-width: 500px and max-width: 767px) { ... }
        'md': {'min': '855px', 'max': '1069px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
        'lg': {'min': '1070px', 'max': '1329px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
        'xl': {'min': '1330px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
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