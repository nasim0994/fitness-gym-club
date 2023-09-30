module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      extend: {
        colors: {
          primary: "#a10000",
          accent: "#3a393f",
          neutral: "#4f4f50",
          "neutral-content": "#6e6e6e",
          "base-100": "#ffffff",
        },
      },
    },
  },
  plugins: [],
};
