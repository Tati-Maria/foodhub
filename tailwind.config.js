/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#f0c633",
        "secondary": "#02001b",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: false,
  }
}
