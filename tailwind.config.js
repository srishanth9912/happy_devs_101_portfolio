/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#090d16',
          card: 'rgba(15, 23, 42, 0.75)',
          surface: '#111827',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        brand: {
          primary: '#6366f1',
          secondary: '#a855f7',
          accent: '#ec4899',
          cyan: '#38bdf8',
          emerald: '#34d399',
        }
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      }
    },
  },
  plugins: [],
}
