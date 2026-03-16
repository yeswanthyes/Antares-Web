/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#00B2FF",
          purple: "#8B5CF6",
          lime: "#00FF85",
          black: "#0A0A0A",
        },
      },
    },
  },
  plugins: [],
}
