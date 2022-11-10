module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    './src/patterns/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryYellow: {
          default: '#F2BF5E',
          300: '#FCC762',
          400: '#F7C360',
          600: '#EDBB5C',
          700: '#E8B75A',
          800: '#E3B259',
          900: '#DEAE57',
        },
        primaryBlue: {
          default: '#022026',
          100: '#03313B',
          200: '#032D36',
          300: '#022930',
          400: '#02242B',
          600: '#021C21',
          700: '#01181C',
          800: '#011317',
          900: '#010F12',
        },
        primaryGray: {
          default: '#111827',
          100: '#1A243B',
          200: '#182136',
          300: '#151E30',
          400: '#131B2B',
          600: '#0F1421',
          700: '#0C111C',
          800: '#0A0E17',
          900: '#080B12',
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
