module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF0336",
        accent: "#111",
        neutral: "#3a393f",
        "neutral-content": "#6e6e6e",
        "base-100": "#ffffff",
      },
    },
  },
  plugins: [],
};
