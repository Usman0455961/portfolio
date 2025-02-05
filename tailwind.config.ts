import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",  // Green color
        secondary: "#ffffff", // White text color
        bg: "#000000",        // Black background
      },
      fontFamily: {
        navbar: ["Poppins", "sans-serif"],  // Font style for Navbar
        hero: ["Montserrat", "sans-serif"], // Font style for Hero section
      },
      fontSize: {
        base: "16px",
        heading: "24px",
        heroTitle: "48px",  // Large title for Hero section
        heroSubtitle: "20px",
      },
    },
  },
  plugins: [],
} satisfies Config;
