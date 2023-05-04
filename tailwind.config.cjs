/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  theme: {
    extend: { 
      colors: {
      'brown-kopy':'#473b3be3',
      'pink-kopy': '#ecdbcf',
      'green-kopy':'#004400',
      'blue-kopy': '#2292a4',
      'orange-kopy': '#d56012'
    },
    fontFamily: {
      alkatra: ["Alkatra", "Sans Serif"],
    }
  },
  },
  plugins: [],
};
