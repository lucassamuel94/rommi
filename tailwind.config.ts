import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem'
      },
      screens: {
        DEFAULT: '1284px'
      }
    },
    fontFamily: {
      sans: ['var(--font-sans)', 'sans-serif'],
      heading: ['var(--font-heading)', 'serif']
    },
    extend: {
      colors: {
        main: {
          '50': '#fdfbe7',
          '100': '#fdf8c2',
          '200': '#fdef89',
          '300': '#fcdf47',
          '400': '#f9cb15',
          '500': '#e9b208',
          '600': '#c98904',
          '700': '#a06207',
          '800': '#844d0e',
          '900': '#713f12'
        },
        accent: {
          '50': '#ebfdfe',
          '100': '#cef9fd',
          '200': '#a4f2fb',
          '300': '#67e7f8',
          '400': '#22d2ed',
          '500': '#06b5d3',
          '600': '#0890b1',
          '700': '#0e748f',
          '800': '#155e75',
          '900': '#164e63'
        },
        neutral: {
          '50': '#f9f9f9',
          '100': '#f4f4f4',
          '200': '#e4e4e4',
          '300': '#d3d3d3',
          '400': '#a2a2a2',
          '500': '#737373',
          '600': '#525252',
          '700': '#404040',
          '800': '#262626',
          '900': '#171717'
        }
      },
      spacing: {
        18: '72px'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config

export default config
