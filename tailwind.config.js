/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js", "./Components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {rotate:{
      '-25': "25deg"
    },
    margin: {
      '26': '6.5rem0'
    },
    darkMode: 'media', 
  },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

