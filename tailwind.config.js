module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    './src/patterns/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: {
          default: '#0CF25D',
          100: '#D0FECE',
          200: '#9DFDA2',
          300: '#6BFB82',
          400: '#46F773',
          600: '#08D062',
          700: '#06AE62',
          800: '#038C5C',
          900: '#027457',
        },
        seaBlue: {
          default: '#0F5959',
          100: '#CDF6E8',
          200: '#9FEED9',
          300: '#66CDBB',
          400: '#3A9B93',
          600: '#0A464C',
          700: '#073640',
          800: '#042733',
          900: '#021C2A',
        },
        answer: {
          success: '#22D993',
          failure: '#FF4541',
        },
      }
    },
  },
  plugins: [],
}
