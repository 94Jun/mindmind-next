/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      maxHeight: {
        "90%": "90%",
      },
    },
    backgroundImage: {
      login: "url('/images/login_background_3.png')",
    },
  },
  plugins: [require("@tailwindcss/forms")({ strategy: "class" })],
};
