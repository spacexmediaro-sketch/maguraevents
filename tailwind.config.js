/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#FDF8E7',
          100: '#FAF0CA',
          200: '#F4E096',
          300: '#EDCF61',
          400: '#E5BE2D',
          500: '#D4AF37',
          600: '#C9A84C',
          700: '#B8960C',
          800: '#8B6914',
          900: '#5E4A0F',
        },
        noir: {
          50:  '#F5F5F5',
          100: '#E0E0E0',
          200: '#9E9E9E',
          300: '#616161',
          400: '#424242',
          500: '#212121',
          600: '#1A1A1A',
          700: '#141414',
          800: '#0F0F0F',
          900: '#080808',
          950: '#040404',
        },
        cream: {
          50:  '#FEFEFE',
          100: '#FAF8F5',
          200: '#F5F0E8',
          300: '#EDE5D8',
          400: '#E0D5C5',
          500: '#C8B99A',
          600: '#B0A082',
          700: '#96856A',
          800: '#7A6B54',
          900: '#5E5140',
        },
      },
      fontFamily: {
        serif:  ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Cormorant Garamond', 'serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem',   { lineHeight: '1.05' }],
        '9xl': ['8rem',   { lineHeight: '1' }],
      },
      letterSpacing: {
        widest:   '0.25em',
        ultrawide: '0.4em',
      },
      backgroundImage: {
        'gold-gradient':   'linear-gradient(135deg, #C9A84C 0%, #D4AF37 50%, #8B6914 100%)',
        'dark-gradient':   'linear-gradient(180deg, #080808 0%, #0F0F0F 100%)',
        'hero-gradient':   'linear-gradient(180deg, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.6) 60%, rgba(8,8,8,0.95) 100%)',
        'card-gradient':   'linear-gradient(180deg, rgba(20,20,20,0) 0%, rgba(8,8,8,0.95) 100%)',
        'shimmer':         'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.08) 50%, transparent 100%)',
      },
      animation: {
        'fade-in':      'fadeIn 0.8s ease-out forwards',
        'fade-up':      'fadeUp 0.8s ease-out forwards',
        'slide-in':     'slideIn 1s ease-out forwards',
        'shimmer':      'shimmer 2.5s infinite',
        'float':        'float 6s ease-in-out infinite',
        'pulse-gold':   'pulseGold 2s ease-in-out infinite',
        'curtain-up':   'curtainUp 1.2s cubic-bezier(0.76, 0, 0.24, 1) forwards',
        'reveal-text':  'revealText 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.3)' },
          '50%':      { boxShadow: '0 0 40px rgba(212,175,55,0.6)' },
        },
        curtainUp: {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        revealText: {
          '0%':   { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0% 0 0)' },
        },
      },
      boxShadow: {
        'gold':    '0 0 30px rgba(212,175,55,0.2)',
        'gold-lg': '0 0 60px rgba(212,175,55,0.3)',
        'card':    '0 4px 40px rgba(0,0,0,0.6)',
        'card-hover': '0 8px 60px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
};
