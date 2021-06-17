module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'pokemon-pattern' : "url('https://wallup.net/wp-content/uploads/2017/11/17/301412-Pokemon.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
