/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {rotate:{
      '-25': "-25deg"
    },
    margin: {
      '26': '6.5rem'
    }
  },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

