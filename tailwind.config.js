// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "cupcake"], // তুমি চাইলে আরও দিতে পারো
  }
}
