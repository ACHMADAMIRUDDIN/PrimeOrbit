/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFCD51', // Figma yellow
        secondary: '#2A2A7C', // Figma deep blue
        dark: '#191919',
        light: '#FCFCFC'
      },
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        interTight: ['"Inter Tight"', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        plusJakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        geist: ['"Geist"', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
        gugi: ['Gugi', 'sans-serif'],
      }
    },
    animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }
  },
  plugins: [],
}
