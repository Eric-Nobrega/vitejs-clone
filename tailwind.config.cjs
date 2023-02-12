/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "vite-bg-color": "#1E1E20",
        "vite-text-color": "#E0E0D8",
        "navbar-hover": "#646cff",
        "search-box": "#161618",
        "button-color": "#747bff",
        "button-color-2": "#313136",
        "hero-card": "#252529",
        "hero-card-icon": "#1E1E20",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  plugins: [],
};
