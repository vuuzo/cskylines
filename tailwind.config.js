/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      padding: {
        skylines: 'max(64px,calc((100vw - 1440px) / 2 + 64px))',
      },
      margin: {
        skylines: 'max(64px,calc((100vw - 1440px) / 2 + 64px))',
      },
      screens: {
        'xs': '512px'
      },
      transitionProperty: {
        'storefront-card': 'background-color, fill'
      },
      backgroundImage: {
        'cta-pattern': 'linear-gradient(108.27deg, #FFA836 25.18%, #FEC82E 62.41%);',
        'cta-pattern-hover': 'linear-gradient(108.27deg, #FFC654 25.18%, #FFC654 62.41%);'
      },
      objectPosition: {
        'hero': 'center top',
        'bonus': 'center center'
      },
      fontFamily: {
        city: ['var(--font-city)'],
        sourceSans: ['var(--font-source-sans)']
      },
      gridColumn: {
        'skylines': '1/-1'
      },
      gridTemplateColumns: {
        'skylines-12': 'repeat(12, 1fr)',
        'skylines-10': 'repeat(10, 1fr)',
        'skylines-4': 'repeat(4, 1fr)',
        'skylines-pegi': '54px, 1fr'
      },
      colors: {
        skylines: '#101B30',
        skylines_dark: '#101010',
        skylines_yellow: '#FFA836'
      },
      listStyleImage: {
        checkmark: 'url("/checkmark.svg")',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}