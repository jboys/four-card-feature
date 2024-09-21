/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        red: "hsl(0, 78%, 62%)",
        cyan: "hsl(180, 62%, 55%)",
        orange: "hsl(34, 97%, 64%)",
        blue: "hsl(212, 86%, 64%)",
        gray: {
          100: "hsl(0, 0%, 98%)",
          500: "hsl(229, 6%, 66%)",
          900: "hsl(234, 12%, 34%)",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
