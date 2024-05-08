/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0d4c7c" },
        secondary: { DEFAULT: "#6b7280" },
        destructive: { DEFAULT: "#ef4444" },
      },
    },
  },
  plugins: [],
};
