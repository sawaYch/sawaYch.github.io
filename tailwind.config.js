/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/content/**/*.mdx',
  ],
  theme: {
    extend: {
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
        'bg': '.12',
      },
      fontFamily: {
        primary: 'Cubic',
        graph: 'KuGraph',
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('tailwind-dracula')('dracula', true)],
};
