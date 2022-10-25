const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "540px",
      ...defaultTheme.screens,
    },
    extend: {},
  },
  plugins: [],
}
