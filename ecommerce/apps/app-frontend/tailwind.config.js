const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    fontFamily: {
      sans: 'Inter var, ui-sans-serif, system-ui',
      serif: 'Inter var, ui-sans-serif, system-ui',
    },
    fontSize: {
      sm: '0.875rem',
      base: '1.3rem',
      xl: '1.55rem',
      '2xl': '1.6rem',
      '3xl': '1.9rem',
      '4xl': '2.4rem',
      '5xl': '3rem',
    },
    extend: {},
  },
  // plugins: [require('daisyui')],
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light'],
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
};

//  {
//         fantasy: {
//           primary: '#0000ff',
//           secondary: '#f6f6f6',
//           neutral: '#e8e8e8',
//         },
//       },

// plugins: [require('@tailwindcss/typography'), require('daisyui')],
