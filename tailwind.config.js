/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "var(--color-dark-blue)",
        primary: "var(--color-primary)",
        "black-custom": "var(--color-black)",
        "medium-blue": "var(--color-medium-blue)",
        "light-blue": "var(--color-light-blue)",
        "dark-gray": "var(--color-dark-gray)",
        "light-gray": "var(--color-light-gray)",
        "white-custom": "var(--color-white)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
      },
    },
  },
  plugins: [],
};
