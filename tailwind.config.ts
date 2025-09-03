// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "402px",
      },
      fontFamily: {
        noto: ["var(--font-noto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
