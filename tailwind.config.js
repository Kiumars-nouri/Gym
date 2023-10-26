/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1801',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}