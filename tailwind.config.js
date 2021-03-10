module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        wave: '#c9eaf5',
      },
      borderColor: {
        heading: '#f99236',
      },
      objectPosition: {
        hero: '45% 50%',
      },
      textColor: {
        heading: '#f99236',
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
      opacity: ['disabled'],
      pointerEvents: ['disabled'],
      textColor: ['disabled'],
      userSelect: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
