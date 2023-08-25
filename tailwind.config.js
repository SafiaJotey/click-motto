module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://i.ibb.co/2PZPRzP/banner.png')",
      },

      colors: {
        buttonColor: '#e17800',
        overlay: 'rgb(0,0,0,.3)',
        bannerBg: '#f2d6ef',
        bgCircle: '#f2f2f2',
        dropDown: '#111111',
        dropDownText: '#929292',
        dropDownHover: '#1c1c1c',
        recommandedHoverColor: '#e8e8e8',
        menuColor: '#818181',
        bgDownload: '#1daf30',
      },
    },
  },
  plugins: [],
};
