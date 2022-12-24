/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        "200px": "200px",
        "80px": "80px",
        "100px": "100px",
        "120px": "120px",
        "12px": "12px",
      },
      maxWidth: {
        "230px": "230px",
        "120px":"120px"
      },
      height: {
        "1px": "1px",
      },
      screens: {
        "420px": "420px",
      },
      backgroundPosition: {
        center: "left",
      },
    },
  },
  plugins: [],
};
