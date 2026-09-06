import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F7F3E9",
        emerald: "#003C2D",
        gold: "#C9A04A",
        ink: "#0D1612",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-cormorant)", "serif"],
      },
      boxShadow: {
        premium: "0 20px 60px rgba(0, 60, 45, 0.12)",
      },
      letterSpacing: {
        wider: "0.16em",
      },
    },
  },
  plugins: [],
};

export default config;
