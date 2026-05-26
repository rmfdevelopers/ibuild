import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { 
      primary: "#4B3621", 
      secondary: "#D2B48C", 
      accent: "#8B4513" 
    },
    fontFamily: { 
      heading: ["var(--font-h)"], 
      sans: ["var(--font-b)"] 
    }
  }}
} satisfies Config;