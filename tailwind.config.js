const withAnimations = require('animated-tailwindcss')
module.exports = withAnimations({
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Poppins', 'sans-serif'],
        'Lexend-Deca': ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        defender: 'url(/img/banner/banner-defender.webp)',
        destroyer: 'url(/img/banner/banner-destroyer.webp)',
        news: 'url(/img/noticia.jpg)',
        navbarDown: 'url(/img/navbarDown.png)',
        bottomFooterUp: 'url(/img/bottomFooterUp.png)',
        footerUp: 'url(/img/footerUp.png)',
        newsUp: 'url(/img/newsUp.png)',
        serviceUp: 'url(/img/serviceUp.png)',
      },
      rotate: {
        360: '360deg',
      },
      colors: {
        brand: {
          100: '#053458',
          200: '#f6f5f2',
          300: '#49a760',
          400: '#b5c3be',
          800: '#686868',
          900: '#006231',
          950: '#1f4e3d',
        },
        lime: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
        },
        zinc: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          800: '#27272a',
          900: '#18181b',
        },
        slate: {
          400: '#94A3B8',
        },
      },
      animation: {
        pulse: 'pulse 3s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%': { boxShadow: '0 0 0 0px rgba(0, 0, 0, 0.2)' },
          '50%': { opacity: '1' },
          '100%': { boxShadow: '0 0 0 20px rgba(0, 0, 0, 0)' },
        },
      },
    },
  },
  plugins: [],
})
