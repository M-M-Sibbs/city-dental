import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/site";
import { syne, dmSans, cormorant } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "City Dental – Dentist in Harare, Zimbabwe | Modern Dental Care",
    template: "%s | City Dental Harare",
  },
  description: site.description,
  keywords: [
    "dentist Harare",
    "dental clinic Harare",
    "dentist Zimbabwe",
    "teeth whitening Harare",
    "dental implants Harare",
    "Invisalign Zimbabwe",
    "emergency dentist Harare",
    "cosmetic dentistry Zimbabwe",
    "City Dental",
  ],
  applicationName: "City Dental",
  authors: [{ name: "City Dental" }],
  creator: "City Dental",
  formatDetection: { telephone: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_ZW",
    url: site.url,
    siteName: "City Dental",
    title: "City Dental – Dentist in Harare, Zimbabwe | Modern Dental Care",
    description: site.description,
    images: [{ url: "/images/logo.jpg", width: 512, height: 512, alt: "City Dental logo" }],
  },
  twitter: {
    card: "summary",
    title: "City Dental – Dentist in Harare, Zimbabwe",
    description: site.description,
    images: ["/images/logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: "/images/logo.jpg",
    apple: "/apple-touch-icon.png",
  },
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${site.url}/#clinic`,
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  image: `${site.url}/images/logo.jpg`,
  logo: `${site.url}/images/logo.jpg`,
  priceRange: "$10 - $1,500",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Mobile Money, Medical Aid",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressCountry: site.address.countryCode,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  openingHoursSpecification: site.openingHoursSchema.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.dayOfWeek,
    opens: h.opens,
    closes: h.closes,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.stats.rating,
    reviewCount: site.stats.reviews,
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Dental services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "MedicalProcedure", name: s.name, url: `${site.url}/services/${s.slug}` },
    })),
  },
  sameAs: site.socials.map((s) => s.href),
};


export const viewport = {
  themeColor: "#0E6E8C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <body>
        <JsonLd data={clinicSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
