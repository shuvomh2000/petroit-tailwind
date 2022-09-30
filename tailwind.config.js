/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        pop: ["Poppins", "sans-serif"],
      },
      colors: {
        'primary': '#F40404',
        'para': '#6C6C6C',
        'yBorder': '#FFB800',
        'bl_opacity': 'rgba(0,0,0,.6)',
        'wh_opacity': 'rgba(255,255,255,.5)',
      },
      maxWidth: {
        'container': '1144px',
      },
    },
  },
  plugins: [],
}
