module.exports = {
  plugins: [],
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],

  theme: {
    screens: {
      'phone-min': '360px',
      // => @media (min-width: 360px) { ... }

      'tablet-min': '769px',
      // => @media (min-width: 768px) { ... }

      'laptop-min': '1025px',
      // => @media (min-width: 1024px) { ... }

      'desktop-min': '1440px',
      // => @media (min-width: 1440px) { ... }

      'phone-max': {'max': '360px'},
      // => @media (max-width: 360px) { ... }

      'tablet-max': {'max': '769px'},
      // => @media (max-width: 768px) { ... }

      'laptop-max': {'max': '1025px'},
      // => @media (max-width: 1024px) { ... }

      'desktop-max': {'max': '1440px'},
      // => @media (max-width: 1440px) { ... }

    },
    extend: {
      colors: {
          "dark": "#242424",
          "light": "#F6F6F6",

          "grey-1": "#2D2D2D",
      },
      boxShadow: {
        'custom': '1px 1px 4px 0 rgb(36, 36, 36, 0.35)',
      }
    },
  },
}