import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4E342E",
        secondary: "#D7CCC8",
        accent: "#BF360C"
      },
      fontFamily: {
        heading: ["Cormorant Garamond"],
        sans: ["DM Sans"]
      }
    }
  }
} satisfies Config;