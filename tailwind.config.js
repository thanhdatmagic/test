/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage:{
        'home-bg': "url('/assets/images/home-bg.jpg')",
      },
     
      height: {
        '650': '650px',
      },
      margin: {
        '100': '100px',
      }
    },
  },
  plugins: [],
}