module.exports = {
  purge: [
    './src/site/**/*.njk',
    './src/site/**/*.md'
  ],
  theme: {

    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      default: '.25rem',
      'lg': '.5rem',
      'xl': '1rem',
      'full': '9999px',
    },
    extend: {
      colors: {
        blue : {
          900: '#0E182A', // old
          800: '#252D3B', // old
          300: '#718096', // old
          200: '#CBD5E0', // old
          100: '#E2E8F0' // old
        },
        gray: {
          900: "#0D0F18",
          700: "#2D3247",
          400: "#5A5F75",
          200: "#DEDEDE",
          100: "#10121E"
        },
        pink : {
          900 : '#D81467', // old
          500 : '#F0047F',
          100 : '#FFB1C5' // old
        }
      }
    }
  },
  variants: {
    borderRadius: ["last"],
    textDecoration: ["group-hover"]
  },
  plugins: []
}
