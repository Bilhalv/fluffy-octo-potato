/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-t20": "url('/bgT20.jpg')"   
      }
    },
  },
  plugins: [],
}