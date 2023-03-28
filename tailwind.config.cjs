/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
  ],
  theme: {
     fontFamily: {
      'alkatra': 'Alkatra',
      'roboto': ['Roboto'],
      'nunito': ['Nunito Sans']
    },
    extend: {},
  },
  plugins: [],
}
