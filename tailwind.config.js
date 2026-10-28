/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crema: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F4EFEA',
          300: '#E8DFD5',
        },
        terracota: {
          light: '#E59275',
          DEFAULT: '#D97757',
          dark: '#B85D3F',
          deep: '#8C3D24',
        },
        miel: {
          light: '#E2BA91',
          DEFAULT: '#D4A373',
          dark: '#B08052',
        },
        oliva: {
          light: '#8A907C',
          DEFAULT: '#6B705C',
          dark: '#4F5344',
        },
        tierra: {
          50: '#F9F6F0',
          100: '#ECE4D8',
          700: '#4A3E36',
          800: '#382D25',
          900: '#2B2118',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Fraunces"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'polaroid': '0 10px 25px -5px rgba(43, 33, 24, 0.12), 0 8px 10px -6px rgba(43, 33, 24, 0.08)',
        'polaroid-hover': '0 20px 35px -5px rgba(43, 33, 24, 0.2), 0 10px 15px -5px rgba(43, 33, 24, 0.1)',
        'letter': '0 12px 30px -4px rgba(217, 119, 87, 0.15)',
      }
    },
  },
  plugins: [],
}
