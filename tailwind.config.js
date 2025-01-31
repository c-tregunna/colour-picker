/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
            "./node_modules/flowbite/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        }
       },
    plugins: [
      require('flowbite/plugin')
    ],
  }
}

