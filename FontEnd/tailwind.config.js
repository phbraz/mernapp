/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          "0%": {transform: "translateX(-50%)"},
          "100%": { transform: "translateX(0)" }
        }
      },
      animation: {
        slideInLeft: "slideInLeft 0.5s ease-in-out"
      }
    },
  },
  plugins: [],
}

