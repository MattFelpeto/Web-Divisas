/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /*
      backgroundImage: {
        'imagenFondo': "url('src/assets/banderaUSA.png')"
      },
      */
      screens: {
        xs: '375px',
      },
      colors: {
        'color-1': '#042113',
        'color-2': '#7DBA85',
        'color-texto': '#323232',
        'fondo-menu': '#F7F7F7',
        'color-card': '#F7F7F7',
        'color-footbar': '#042113',
        'fondoWeb': '#F3F3F3'
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    }
  },
  plugins: [],
}