module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        karla: ['Karla']
      },
      colors: {
        primary: {
          back:'#e6eff6',
          text1:'#32a7a7',
          text2: '#bcdd3e',
          text2_darker: "#9cbd31",
          text3: '#c4c4cc',
          text4: '#91dcdd',
          back2:'#4abebd'
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
