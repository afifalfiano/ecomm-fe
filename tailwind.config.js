import Color from './src/app/common';
module.exports = {
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        },
        colors: {
            primary: Color.primary, 
            secondary: Color.secondary,
            tertiary: Color.tertiary,
            default: Color.default,
        },
      },
    },
    plugins: [],
  };
  