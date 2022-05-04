module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#9064FA",
          500: "#8256E7",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
