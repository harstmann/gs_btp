/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Brand */
        'deep-green':   '#14201B',
        'panel':        '#1E2E27',
        'sand':         '#F8FAF9',
        'amber': {
          DEFAULT: '#C98A3E',
          light:   '#E8B165',
          dark:    '#A96F2E',
        },
        /* Surfaces */
        'surface': {
          50:  '#F8FAF9',
          100: '#F0F4F2',
          200: '#E4EBE7',
          300: '#C8D6CE',
          400: '#9BAFA5',
          500: '#6B8078',
          600: '#4A5E57',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Fraunces', 'Georgia', 'serif'],
        sans:  ['var(--font-schibsted)', 'Schibsted Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['10px', { lineHeight: '14px' }],
      },
      borderRadius: {
        'sm':   '6px',
        'md':   '10px',
        'lg':   '14px',
        'xl':   '18px',
        '2xl':  '24px',
        '3xl':  '32px',
      },
      boxShadow: {
        'card-subtle':   '0 1px 3px 0 rgba(20,32,27,0.06), 0 1px 2px -1px rgba(20,32,27,0.04)',
        'card-elevated': '0 4px 12px 0 rgba(20,32,27,0.10), 0 2px 4px -1px rgba(20,32,27,0.06)',
        'card-deep':     '0 10px 30px 0 rgba(20,32,27,0.15)',
        'amber-glow':    '0 0 20px 4px rgba(201,138,62,0.25)',
      },
      animation: {
        'fade-up':    'fadeUp 0.55s ease-out both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      screens: {
        xs: '390px',
      },
    },
  },
  plugins: [],
}
