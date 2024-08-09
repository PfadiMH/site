import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rockingsoda: ["var(--rockingsoda)"],
        poppins: ["var(--poppins)"],
      },
      colors: {
        background: "var(--color-background)",
        current: "var(--color-current)",
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        "brand-yellow": "#f4d51f",
        "brand-red": "#be1622",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
