/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_black:'#050505',
        primary_blue: '#52c7cb',
        gray1:'#151515'
      },
      screens: {
        'xs':'350px',
        'sm': '450px',    // Small screens, mobile phones
        'md': '768px',    // Medium screens, tablets
        'lg': '1000px',   // Large screens, laptops/desktops
        'xl': '1280px',   // Extra large screens, desktops
        '2xl': '1536px',  // Extra extra large screens, large desktops
      },
    },
  },
  plugins: [],
}