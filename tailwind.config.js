/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        products: 'repeat(auto-fill, minmax(220px, 1fr))'
      },
      animation: {
        fade: 'fade 400ms cubic-bezier(0.4, 0, 0.6, 1)'
      },
      keyframes: {
        fade: {
          from: { opacity: 0.25 },
          to: { opacity: 1 }
        }
      }
    }
  },
  plugins: []
}
