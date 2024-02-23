/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'mainBg': '#235884',
        'secondMainBg':'#A084CA',
        'thirdMainBg':'#BFACE0',
        'fourthMainBg':'#EBC7E8',
      },
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

