module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    textColor: {
      'primary': '#292929',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '18': '18px',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      rotate: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '0': '0',
        '11': '11deg',
        '45': '45deg',
        '90': '90deg',
        '135': '135deg',
        '180': '180deg',
        '270': '270deg',
      },
      width: {
        '100': '300px',
        '100': '300px',
      },
      height: {
        '100': '300px',
        '100': '300px',
      },
      colors: {

        'col-red': '#E27D60',
        'col-orange': '#E8A87C',
        'col-blue': '#8DB9C3',
        'col-lightblue': '#85CDCB',
        'col-purple': '#C38D9E',

        success: '#0070f3',
        cyan: '#79FFE1',
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
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
