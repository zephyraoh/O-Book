/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx, js}'],
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
    },
    extend: {
      screens: {
        'mobile':'100px',
        'desktop': '768px',
      }
    },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
}
