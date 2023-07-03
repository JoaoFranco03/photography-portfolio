/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend:
    {
      fontFamily: {
        'cedarville': ['Cedarville Cursive', 'cursive'],
      },
    },
  },
  plugins: [],
}
