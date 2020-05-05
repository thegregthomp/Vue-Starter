module.exports = {
  theme: {
    screens: {
      'xl': {
        'max': '1350px'
      },
      // => @media (max-width: 1279px) { ... }

      'lg': {
        'max': '1200px'
      },
      // => @media (max-width: 1023px) { ... }

      'md': {
        'max': '767px'
      },
      // => @media (max-width: 767px) { ... }

      'sm': {
        'max': '639px'
      },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        'blue': {
          100: "#00B9EE",
          110: "#00a7d6",
          120: "#33c7f1",
          200: "#00b9f1",
          300: "#769DAC",
          400: "#496776"
        },
        'grey':{
          100: "#adadad",
          200: "#666666",
          300: "#333333",
          400: "#CCCCCC",
          500: "#F5F5F5"
        },
        'black':{
          100:"#000000"
        }
      }
    }
  },
  variants: {},
  plugins: [],
}
