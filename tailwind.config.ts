import type { Config } from 'tailwindcss'
import aspectRatio from '@tailwindcss/aspect-ratio'
import forms from '@tailwindcss/forms'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': {
          DEFAULT: '#C2A670',
          light: '#D6BF90',
          dark: '#A98E5D',
        },
        ink: {
          DEFAULT: '#3A2F20',
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        sand: {
          DEFAULT: '#EAD9B7',
          50: '#FFF9F0',
          100: '#F3E8D2',
          200: '#EAD9B7',
          300: '#E8DCC5',
          400: '#DCC9A3',
        },
        offwhite: '#FFF9F0',
        panel: '#FFF9F0',
        stroke: '#E8DCC5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
        'wash': 'linear-gradient(180deg, #F3E8D2 0%, #EAD9B7 100%)',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 8px 24px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [aspectRatio, forms],
}

export default config 