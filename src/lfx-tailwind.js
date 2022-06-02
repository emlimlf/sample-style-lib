const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    extend: {
      fontSize: {
        xs: ['10px', { lineHeight: '12px' }], // 10
        base: ['13px', { lineHeight: '16px' }], // 13
        lg: ['18px', { lineHeight: '20px' }], // 18
        xl: ['20px', { lineHeight: '24px' }], // 20
        16: ['16px', { lineHeight: '16px' }],
        25: ['25px', { lineHeight: '25px' }]
      },
      fontFamily: {
        DEFAULT: ['"Open Sans"', '"Source Sans Pro"', 'sans-serif'],
        sans: ['"Open Sans"', '"Source Sans Pro"', 'sans-serif'],
        heebo: ['Heebo'],
        'open-sans': ['"Open Sans"'],
        'source-sans-pro': ['"Source Sans Pro"'],
        montserrat: ['"Montserrat"']
      },
      textColor: {
        DEFAULT: '#333333',
        primary: '#0099cc',
        'red': 'red'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, config }) {
      addBase({
        'div, p, input, h1, h2, h3, h4, h5, h6, span, label': {
          fontFamily: config('theme.fontFamily.sans').join(', '),
          color: config('theme.textColor.DEFAULT')
        },
        h1: { fontSize: '24px' },
        h2: { fontSize: '18px' },
        h3: { fontSize: '16px' },
        h4: { fontSize: '14px' },
        h5: { fontSize: '12px' },
        small: { fontSize: '12px' },
        'label, span, p, div, input[type=text]': { fontSize: '13px' }
      });
    })
  ],
}