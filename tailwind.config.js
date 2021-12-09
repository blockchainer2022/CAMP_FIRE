module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      backgroundColor: {
        dark: {
          400: "#0e1217",
        },
        gray: {
          DEFAULT: "#2e2d2c",
        },
      },
      textColor: {
        primary: "#fd5a0e",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      animation: {
        bounce: "bounce 3s linear infinite",
      },
      borderColor: {
        dark: {
          400: "#23282f",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
