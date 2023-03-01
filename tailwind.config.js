/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        products: 'repeat(auto-fill, minmax(220px, 1fr))'
      }
    }
  },
  plugins: []
}
