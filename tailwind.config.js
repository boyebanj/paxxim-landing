// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#FFFFFF',
          DEFAULT: '#F0F0F0',
          dark: '#E5E5E5',
        },
        accent: {
          light: '#FFD15C',
          DEFAULT: '#F5C000',
          dark: '#D4A300',
        },
        neutral: {
          50: '#111111',
          100: '#1A1A1A',
          200: '#2E2E2E',
          300: '#444444',
          400: '#5A5A5A',
        },
      },
      fontFamily: {
        sans: [
          '__Inter_e8ce0c',
          '__Inter_Fallback_e8ce0c',
          'sans-serif'
        ],
        mono: [
          '__GeistMono_c1e5c9',
          'ui-monospace',
          'SFMono-Regular',
          'Roboto Mono',
          'Menlo',
          'Monaco',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}