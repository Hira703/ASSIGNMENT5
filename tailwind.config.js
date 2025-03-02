/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"], // Adjust based on your project structure
    theme: {
      extend: {
        colors: {
          primary: "#1DA1F2",
          secondary: "#14171A",
        },
        spacing: {
        //   '128': '32rem',
        },
      },
    },
    plugins: [],
  };
  