/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35"
      },
      screens: {
        xs: "450px"
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')"
      }
    }
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        /* Apply to all elements globally */
        "*": {
          scrollbarWidth: "none", // Hides scrollbar in non-Webkit browsers
          scrollbarColor: "transparent transparent" // Transparent scrollbar thumb and track
        },
        /* Webkit-based styling for hiding the scrollbar */
        "&::-webkit-scrollbar": {
          width: "0px", // Hide scrollbar in Webkit browsers
          height: "0px" // Hide horizontal scrollbar
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent", // Make the thumb transparent
          borderRadius: "0px" // Remove rounding for the thumb
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent" // Make the track transparent
        },
        "&::-webkit-scrollbar-button": {
          display: "none" // Hide the scrollbar buttons (arrows)
        },
        /* Allow scrolling functionality */
        "html, body": {
          overflow: "auto" // Ensure scrolling is still possible
        }
      });
    }
  ]
};
