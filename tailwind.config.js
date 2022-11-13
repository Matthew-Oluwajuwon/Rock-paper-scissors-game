/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '640px'},
      // => @media (min-width: 640px) { ... }

      'md': {'max': '768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'max':'992px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'max':'1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': {'max':'1536px'},
      // => @media (min-width: 1536px) { ... }
      '3xl': '1536px'
    },
    extend: {
      backgroundImage: {
        'rock': "url('./images/ll.gif')",
      }
    },
  },
  plugins: [],
}