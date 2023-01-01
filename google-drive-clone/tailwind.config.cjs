/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      's': {'min': '320px', 'max': '479px'},
      'sma': {'min': '480px','max': '768px'},
      'sm': '769px',

  }},
  plugins: [],
}