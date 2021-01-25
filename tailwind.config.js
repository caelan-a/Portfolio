module.exports = {
  purge: {
    preserveHtmlElements: true,
    content: ['./components/**/*.js', './pages/**/*.js', './content/**/*.md'],
  },

  variants: {
    animation: ["motion-safe"]
  },
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
        slideInFromLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%' : { transform: 'translateX(0px)', opacity: 1 }
        },
        slideInFromRight: {
          '0%': { transform: 'translate-x-5' },
          '100%' : { transform: 'translate-x-0' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        fadeIn: "fadeIn 250ms ease-in forwards",
        slideInFromLeft: "slideInFromLeft 250ms ease-in-out forwards",
        slideInFromRight: "slideInFromRight 250ms ease-in forwards"
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
