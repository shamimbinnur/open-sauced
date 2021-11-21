module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      extend: {
        colors: {
          'regal-accent': '#faeace',
          'background:': '#fffbf5',
          'saucyRed': '#d95c41',
          'cheesyYellow': '#f6d809',
          'offWhite': '#fbfbfb',
          'lightestGrey': '#e6e6e6',
          'lighterGrey': '#bcbcbc',
          'lightGrey': '#8b8b8b',
          'backgroundGrey': '#2F372E',
          'grey': '#313d3e',
          'darkGrey': '#171c1d',
          'darkestGrey': '#2C3137',
          'fav-purple': '#5267DF',
        },
        fontFamily: {
          Poppins : ["Poppins, sans-serif"]
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
