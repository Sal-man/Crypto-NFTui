/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Rampart One", "cursive"]
    },
    extend: {
      fontFamily: {
       Rampart: ["Rampart One", "cursive"],
      },
    },
  }, 
  plugins: [],
}
