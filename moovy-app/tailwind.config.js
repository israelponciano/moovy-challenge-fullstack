/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(255, 127, 79, 1)',
        secondaryLight: 'hsl(0, 0%, 80%)',
        secondary: 'hsl(0, 0%, 30%)',
        secondaryDark: 'hsl(0, 0%, 15%)'
      },
    },
  },
  plugins: [],
}
