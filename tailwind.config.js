module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: 'var(--color-black)',
      gray: 'var(--color-gray)',
      'light-gray': 'var(--color-light-gray)',
      'lighter-gray': 'var(--color-lighter-gray)',
      teal: 'var(--color-teal)',
      'light-teal': 'var(--color-light-teal)',
      white: 'var(--color-white)',
    },
    screens: {
      xs: '640px',
      sm: '768px',
      md: '992px',
      lg: '1280px',
      xl: '1536px',
    },
    extend: {
      animation: {
        'slideIn-50': 'slideIn 50ms ease-in-out',
        'slideIn-250': 'slideIn 250ms ease-in-out',
        'slideIn-500': 'slideIn 500ms ease-in-out',
        'slideIn-750': 'slideIn 750ms ease-in-out',
        'slideIn-1000': 'slideIn 1000ms ease-in-out',
        'slideIn-1250': 'slideIn 1250ms ease-in-out',
        'slideIn-1500': 'slideIn 1500ms ease-in-out',
        'slideIn-1750': 'slideIn 1750ms ease-in-out',
      },
      backgroundColor: {
        wave: '#c9eaf5',
      },
      borderColor: {
        heading: '#f99236',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(-50%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      maxWidth: {
        458: '458px',
        496: '496px',
        534: '534px',
        600: '600px',
        736: '736px',
        1300: '1300px',
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
      width: {
        458: '458px',
        496: '496px',
        534: '534px',
        600: '600px',
        736: '736px',
        1300: '1300px',
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
