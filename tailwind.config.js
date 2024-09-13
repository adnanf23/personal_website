/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '300px',
      md: '668px',
      lg: '896px',
      xl: '1000px',
    },
    colors: {
      'bg' : '#151515',
      'heading' : '#FFFFFF',
      'paragraph' : '#CDCDCD',
      'blue' : '#5AB9FD',
      'yellow' : '#DDFF55',
      'purple' : '#8155FF',
      'orange' : '#FF9255',
      'box' : '#1E1E1E',
      'transparent' : 'transparent',
    },
    fontFamily: {
      poppins : ["Poppins", 'sans-serif'],
      madimi : ['Madimi One', 'sans-serif'],
    },
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
  },
  plugins: [],
}