/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
        'light', 'dark',

    ],
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      animation: {
        reveal: "width 0.5s linear",
      },
      colors: {
        'flashblue': '#3da9fc'
      }
    },
  },
  plugins: [require("daisyui")],
};
