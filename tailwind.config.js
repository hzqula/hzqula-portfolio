/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ownBlack: "#333333",
        ownWhite: "#FAFAFA",
        background: "#f1faee",
        primary: "#081c15",
        secondary: "#2D6A4F",
        ownGreen: "#333333",
        ownGrey: "#808080",
      },
      fontFamily: {
        code: ["IBM Plex Mono"],
        text: ["Jost, sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtils = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        "no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none,",
        },
      };
      addUtilities(newUtils);
    },
  ],
};
