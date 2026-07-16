/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        steel: {
          DEFAULT: '#4682B4',
          50: '#f3f7fb',
          100: '#e3edf5',
          200: '#c7dbeb',
          300: '#9bbfd9',
          400: '#6a9bc4',
          500: '#4682B4',
          600: '#3a6f9e',
          700: '#325c83',
          800: '#2c4d6c',
          900: '#28425c',
        },
        skyblue: '#ADD8E6',
        lightcyan: '#E0FFFF',
        lightgray: '#D3D3D3',
        slate: {
          DEFAULT: '#778899',
          50: '#f6f8fa',
          100: '#eaeef2',
          400: '#8da0b2',
          500: '#778899',
          600: '#64748b',
          700: '#4d5b6b',
          800: '#39434f',
          900: '#252b33',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 24px -8px rgba(70, 130, 180, 0.18)',
        'card': '0 8px 40px -12px rgba(70, 130, 180, 0.25)',
        'sticky': '0 2px 16px -4px rgba(70, 130, 180, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
};
