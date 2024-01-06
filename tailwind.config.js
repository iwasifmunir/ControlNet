/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightwhite: 'rgba(255, 255, 255, 0.80)',
        lightwhiteInput: 'rgba(255, 255, 255, 0.70)',
        lightblack: 'rgba(255, 255, 255, 0.10)',
        darkblack: '#0B0B0B',
        gray: {
          "100": "#242424",
          "150": "rgba(255, 255, 255, 0.15)",
          "200": "#0c0c0c",
          "300": "rgba(255, 255, 255, 0.2)",
          "400": "rgba(255, 255, 255, 0.7)",
          "500": "rgba(255, 255, 255, 0.15)",
          "600": "rgba(255, 255, 255, 0.9)",
          "700": "rgba(255, 255, 255, 0.6)",
          "800": "rgba(255, 255, 255, 0.8)",
        },
        limegreen: "#3abe29",
        white: "#fff",
        orange: "#ea920f",
        gainsboro: {
          "100": "rgba(217, 217, 217, 0.3)",
          "200": "rgba(217, 217, 217, 0.6)",
        },
        black: "#000",
        indianred: "#e95856",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      md2: "16px",
      lg: "18px",
      "5xl": "24px",
      "8xl": "40px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      'sm': {'max': '639px'},
      'md': {'max': '767px'},
      'lg': {'max': '1023px'},
      'xl': {'max': '1279px'},
      '2xl': {'max': '1535px'},
    },
    maxWidth: {
      'screen-3xl': '1920px', // You can customize the value as needed
    },
  },
  corePlugins: {
    preflight: false,
  },
};
