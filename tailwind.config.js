module.exports = {
  theme: {
    extend: {
      colors: {
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        'link-hover-custom': '#805ad5',
        cyan: '#79FFE1',
        background: {
          primary: 'var(--bg-background-primary)',
        },
        copy: {
          primary: 'var(--text-copy-primary)',
        },
      },
      justify: {
        evently: 'space-evenly',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      border: {
        bottom: '1px solid black',
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        small: '0 5px 10px rgba(0, 0, 0, 0.12)',
        medium: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
};
