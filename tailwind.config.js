/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html",
            "./dist/*.js",
            "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}