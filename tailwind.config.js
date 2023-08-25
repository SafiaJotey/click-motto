module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://i.ibb.co/2PZPRzP/banner.png')",
        // hero: "url('https://i.ibb.co/CVDNtDS/ezgif-com-webp-to-jpg-2.jpg')",
      },

      colors: {
        primary: 'black',
        secondary: '#006E61',
        buttonColor: '#e17800',
        overlay: 'rgb(0,0,0,.3)',
        bannerBg: '#f2d6ef',
        bgCircle: '#f2f2f2',
        dropDown: '#111111',
        dropDownText: '#929292',
        dropDownHover: '#1c1c1c',
        baseColor: 'rgba(129,131,139,.4)',
        menuColor: '#818181',
      },
    },
  },
  plugins: [],
};
