import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E6E8C",
        deep: "#095D75",
        mint: "#A9D9D0",
        aqua: "#D9F2EF",
        surface: "#F5F9FA",
        ink: "#1E293B",
        line: "#DDE7EA",
      },
      fontFamily: {
        heading: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-cormorant)", "serif"],
      },
      boxShadow: {
        soft: "0 2px 12px rgba(14,110,140,0.08)",
        card: "0 8px 40px rgba(14,110,140,0.14)",
        lift: "0 20px 60px rgba(14,110,140,0.18)",
      },
      borderRadius: {
        xl2: "16px",
        xl3: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
