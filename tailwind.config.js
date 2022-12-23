/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        "200px": "200px",
        "80px": "80px",
        "100px": "100px",
      },
      maxWidth: {
        "230px": "230px",
      },
    },
  },
  plugins: [],
};
