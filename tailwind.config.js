/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'mainBg': '#A6F4FA',
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

