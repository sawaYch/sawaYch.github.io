/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        sunset: "url('../images/bg.webp')",
      },
      fontFamily: {
        primary: 'Cubic',
        secondary: 'Ku',
        graph: 'KuGraph'
      },
    },
  },
  // eslint-disable-next-line import/no-extraneous-dependencies, global-require
  plugins: [require('tailwind-dracula')('dracula', true)],
};
