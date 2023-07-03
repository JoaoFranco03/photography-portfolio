/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend:
    {
      fontFamily: {
        'cedarville': ['Cedarville Cursive', 'cursive'],
        'signika': ['Signika', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
