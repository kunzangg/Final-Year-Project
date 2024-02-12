/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./App.{js,jsx,ts,tsx}",
      "./app/**/*.{js,jsx,ts,tsx}",
      "./screen/**/*.{js,jsx,ts,tsx}",
      "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors: {
        primary: '#5A92B1',
        secondary: '#FFFFFF',
        background: '#D4D4D4',
        text: '#000000',
        other: {
          yellow: '#F0BB22',
          purple: '#7A86AE',
          red: '#E54D4D',
        },
      },
      fontFamily: {
        fredokaRegular: ['FredokaOne-Regular'],
        fredokaSemiBold: ['FredokaOne-SemiBold'],
        fredokaBold: ['FredokaOne-Bold'],
      },
    },
    plugins: [],
  }
  