import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "City Dental – Modern Dental Care",
    short_name: "City Dental",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F5F9FA",
    theme_color: "#0E6E8C",
    icons: [
      { src: "/images/logo.jpg", sizes: "192x192", type: "image/jpeg" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
