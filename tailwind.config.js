/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: " 'Inter' , sans-serif",
        Lexend: " 'Lexend', sans-serif",
      },
      padding: {
        '22px': '22px',
        '18px': '18px',
      },
      width: {
        '32px': '32px',
        '132pc': '132px',
        '350.33px': '350.33px',
        '348.67px': '348.67px',
        '18px': '18px',
        '60px':   '60px',
        '76px': '76px',
        '512px': '512px',
        '400px': '400px',
        '228px': '228px',
      },
      height: {
        '32px': '32px',
        '380px': '380px',
        '378.05px': '378.05px',
        '18.75px': '18.75px',
        '20px': '20px',
        '40px':  '40px',
        '44px': '44px',
        '154px':'154px',
        '180px': '180px',
        '217px': '217px',
      },
      top: {
        '12px': '12px',
        '2.63px': '2.63px'
      },
      left: {
        '12px': '12px',
        '100px': '100px',
        '3px':'3px',
        '285.64px':  '285.64px',
      },
      colors: {
        "base" : "#FF9017",
        "cardBase": "#606060",
        "opacitybg": "#344054",
      },
      screens: {
        'xxl': {'min': '1920px'}
      },

    },
  },
  plugins: [],
}
