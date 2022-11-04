/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        smooth: "23px 24px 80px -39px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
