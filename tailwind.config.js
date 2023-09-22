/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#009ad8', 
        'secondary': '#bfc1c8',
        'third': '#1e202b',
        'fo' : '#262936',
        'fi' : '#2d303d'
      }, 
      fontFamily: {
        roboto : ['Roboto','sans-serif']
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '920px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      listStyleImage: {
        store : 'url("/images/arrow1.png")'
      }
      

    },
  },
  plugins: [],
}