import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: { min: "480px", max: "767,8px" },
      tablet: "768px",
      laptop: "1280px",
      desktop: { min: "1600px" },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        mobile: "20px",
        tablet: "15px",
        laptop: "100px",
        desktop: "100px",
      },
    },
    fontFamily: {
      inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
