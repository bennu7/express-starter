/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/styles/*.css",
    "./views/*.ejs",
    "./views/**/*.ejs",
    "./src/views/*.ejs",
    "./src/views/**",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
