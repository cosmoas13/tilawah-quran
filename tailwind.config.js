module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
