module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: '#F6F7FB',
          light: '#bcaffd',
          base: '#5F62B1',
          dark: '#222464'
        },
        secondary: {
          base: '#06A06B'
        },
        white: '#ffffff',
        gray: {
          lightest: '#ededed',
          base: '#A5A9C6',
          dark: '#333333'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
