/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        username:'src/img/age.png'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}