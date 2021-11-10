module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        'surfaceduo-gal' : '1080px',
        '128' : '32rem'
      },
      zIndex: {
        '-50': '-50',
        '60':'60'
       },
      screens: {
        'iphone7': '375px',
        'iphone7plus': '414px',
        'surfaceDuo': '580px'
      },
      fontFamily: {
        'spartan': ['Spartan']
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
        'hero-img': "url('./images/wew.png')",
        'hero-about': "url('./images/hero_about.jpg')"
      })
    },
  },
  variants: {
    extend: {
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
