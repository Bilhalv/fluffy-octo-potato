/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bg-t20": "url('/bgT20.jpg')",
        "magia_arcana": "url('/magias/classificacao/arcana.png')", 
        "magia_divina": "url('/magias/classificacao/divina.png')", 
        "magia_universal": "url('/magias/classificacao/universal.png')", 
      },
      screens: {
        desktop: "1024px",
      },
      fontFamily: {
        tormenta: ["tormenta", "sans-serif"],
      },
    },
  },
  plugins: [],
}