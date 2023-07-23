/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ['winter', 'night'],
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
      colors: {
        'flashblue': '#3da9fc'
      }
    },
  },
  plugins: [require("daisyui")],
};
