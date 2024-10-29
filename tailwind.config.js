/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "var(--primary-blue)",
        lightBlue: "var(--light-blue)",
        darkGray: "var(--dark-gray)",
        black: "var(--black)",
        lightgray: "var(--light-gray)",
        lightGreen: "var(--light-green)",
        darkGreen: "var(--dark-green)",
        whiteFrost: "var(--white-frost)",
        white: " var(--white)",
        red: "var(--red)",
        lightRed: "var(--light-red)",
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
