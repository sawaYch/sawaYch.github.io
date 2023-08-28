/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/content/**/*.mdx',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'ipad': '768px',
      },
      typography: ({ theme }) => ({
        pink: {
          css: {
            '--tw-prose-invert-bullets': theme('colors.pink[600]'),
          },
        },
      }),
      height: {
        custom: 'calc(100vh + 24rem)', // Adjust the calculation as per your needs
      },
      backgroundImage: {
        pattern: "url('../images/circuit.svg')",
      },
      backdropBlur: {
        xs: '1px',
      },
      opacity: {
        bg: '.12',
      },
      fontFamily: {
        primary: 'Cubic',
        ku: 'Ku',
        block: 'CubicBlock',
        graph: 'KuGraph',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@tailwindcss/typography'),
    require('tailwind-dracula')('dracula', true),
    require('flowbite/plugin'),
  ],
};
