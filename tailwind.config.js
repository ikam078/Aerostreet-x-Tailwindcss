/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {rotate:{
      '-25': "25deg"
    },
    margin: {
      '26': '6.5rem0'
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

