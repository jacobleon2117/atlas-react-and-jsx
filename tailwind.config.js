/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white-light": "#fffcf2",
        blue: {
          DEFAULT: "#00003c",
          light: "#64648c",
        },
        beige: {
          DEFAULT: "#f7f0dc",
          light: "#f7ede8",
        },
        teal: "#1ed2af",
        red: "#d00414",
        yellow: "#edc14b",
        white: "#ffffff",
        "beige-bg": "rgba(240, 220, 210, 0.5)",
        offwhite: "#fef9e6",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
