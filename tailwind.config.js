module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        wave: '#c9eaf5',
      },
      borderColor: {
        accent: '#F39237',
        heading: '#EB4763',
      },
      objectPosition: {
        hero: '45% 50%',
      },
      textColor: {
        accent: '#F39237',
        heading: '#EB4763',
      },
      textDecoration: {
        dotted: 'underline dotted',
      },
      transitionDuration: {
        3000: '3000ms',
      },
      zIndex: {
        negative: '-1',
      },
    },
  },
  variants: {
    extend: {
      borderStyle: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
