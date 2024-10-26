/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "var(--primary-blue)",
        darkGray: "var(--dark-gray)",
        black: "var(--black)",
        lightgray: "var(--light-gray)",
        lightGreen: "var(--light-green)",
        darkGreen: "var(--dark-green)",
        whiteFrost: "var(--white-frost)",
        white: " var(--white)",
        red: "var(--red)",
        yellow: "var(--yellow)",
      },
      fontFamily: {
        head: "var(--heading-font)",
        body: "var(--body-font)",
        accent: "var(--accent-font)",
      },
    },
  },
  plugins: [],
};
