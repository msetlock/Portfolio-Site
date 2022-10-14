module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s linear infinite",
      },
      keyframes:{
          blink:{
            '0%':{ opacity: 0},
            '49%':{ opacity: 0},
            '50%':{ opacity: 1},
          }
      },

      fontFamily: {
        noto: "noto",
      },
    },
  },
  plugins: [],
};
