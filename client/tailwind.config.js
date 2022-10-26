/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontWeight: {
      'regular': 400,
      'medium': 500,
      'bold': 700,
    },
    extend: {
      colors: {
        'primary-color': '#1A3566',
        'secondary-color': '#5F7AB0',
        'tertiary-color': '#8CA0C4',
      }
    },
  },
  plugins: [],
}
