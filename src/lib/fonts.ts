import localFont from "next/font/local";

export const syne = localFont({
  variable: "--font-syne",
  display: "swap",
  src: [
    { path: "../fonts/syne-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/syne-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/syne-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/syne-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
});

export const dmSans = localFont({
  variable: "--font-dm-sans",
  display: "swap",
  src: [
    { path: "../fonts/dm-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/dm-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/dm-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});

export const cormorant = localFont({
  variable: "--font-cormorant",
  display: "swap",
  src: [
    { path: "../fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
});
