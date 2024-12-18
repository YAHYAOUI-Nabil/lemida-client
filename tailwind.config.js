/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        header_text_color: "#000",
        header_background_color: "#FAFAFA",
        nav_color: "#000",
        nav_focus_color: "#2234A8",
        footer_text_color: "#fff",
        footer_text_hover_color: "#fff",
        footer_background_color: "#2234A8",
        main_color: "#2234A8",
        secondary_color: "",
        bgFrom: "#4C0873",
        bgTo: "#4C0873",
        HoverBgTo: "#00474F",
      },
      padding: {
        desktop_padding: "60px",
        tablet_padding: "30px",
        mobile_padding: "16px",
      },
      boxShadow: {
        cardButtonShadow: "0 3.06px 0px #DADADA",
        headerShadow: "0 2px 8px #F0F1F2",
        tableOfContentShadow: "0 4px 0px #ECECEC",
        aboutBtnShadow: "0 3px 0px #DADADA",
      },
      animation: {
        mover: "mover 15s infinite  linear",
        show: "show 3s  linear",
      },
      keyframes: {
        mover: {
          "0%": { transform: "translateX(1280px)" },
          "100%": { transform: "translateX(-1280px)" },
        },
        show: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".bg-squares": {
          "background-image":
            "linear-gradient(to right, #fff 1px, transparent 1px)",
          "background-size": "20px 20px",
        },
      });
    }),
  ],
};
