import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      purple: "#8284FA",
      "purple-dark": "#5E60CE",
      blue: "#4EA8DE",
      "blue-dark": "#1E6F9F",
      "gray-700": "#0D0D0D",
      "gray-600": "#1A1A1A",
      "gray-500": "#262626",
      "gray-400": "#333333",
      "gray-300": "#808080",
      "gray-200": "#D9D9D9",
      "gray-100": "#F2F2F2",
      danger: "#E25858",
    },
  },
  plugins: [],
};
export default config;
