module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-50': '-50',
       },
      screens: {
        'iphone7': '375px',
        'iphone7plus': '414px'
      },
      fontFamily: {
        'spartan': ['spartan', 'sans-serif']
      },
      colors:{
        banoo: "#06B1BA",
        banoo75: "#37C0C7",
        banooDark: "#1F7E68",
        banooDarker:"#094336",
        bluebg:"#E3F7F8",
        banooGray:"#707070",
        banooGray50:"#A9A9A9",
        banooGray25:"#C6C6C6",
        banooGray10:"#D7D7D7",
        banooWhite:"#F8FFFD"
      },
      backgroundImage: theme => ({
        // 'hero-img': "url('./images/hero.jpg')"
        'hero-img': "url('./images/wew.png')"
      })
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [],
}
