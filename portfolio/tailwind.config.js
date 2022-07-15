module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '8rem': '128px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
