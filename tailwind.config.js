/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'lumina-bg': '#0a0a0a',
        'lumina-card': '#171717',
        'lumina-accent': '#6366f1',
        'lumina-cyan': '#06b6d4'
      },

      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },

      animation: {
        'float': 'float 6s ease-in-out infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': {transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

