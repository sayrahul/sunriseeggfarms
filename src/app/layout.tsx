import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunrise Egg Farms | Premium Hygienic Eggs & Global Exports",
  description: "Sunrise Egg Farms - Providing premium, hygienic, and nutritious eggs with sustainable practices. Leading exporter of farm-fresh eggs from Visakhapatnam to the world.",
  keywords: ["Egg Farms", "Premium Eggs", "Hygienic Eggs", "Egg Exports India", "Sustainable Poultry", "Visakhapatnam Egg Farm", "Andhra Pradesh Egg Exporter"],
  authors: [{ name: "Sunrise Egg Farms" }],
  metadataBase: new URL("https://www.sunriseeggfarms.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sunrise Egg Farms | Premium Hygienic Eggs & Global Exports",
    description: "High-quality, farm-fresh eggs nurtured with continuous zero-waste practices and veterinary oversight.",
    url: "https://www.sunriseeggfarms.com",
    siteName: "Sunrise Egg Farms",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sunrise Egg Farms - Premium Hatchery and Exports",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunrise Egg Farms | Premium Hygienic Eggs & Global Exports",
    description: "Export-grade hygienic eggs with zero-waste farming practices.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
  },
  category: "Agricultural Service",
  robots: "index, follow",
};

// Senior SEO JSON-LD Markup
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Sunrise Egg Farms",
  "image": "https://www.sunriseeggfarms.com/images/logo.png",
  "@id": "https://www.sunriseeggfarms.com",
  "url": "https://www.sunriseeggfarms.com",
  "telephone": "+91 99963 755766",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "# 53-17-43/1, Rajanna Reddy Street, Behind Automotives, Maddilapalem",
    "addressLocality": "Visakhapatnam",
    "addressRegion": "Andhra Pradesh",
    "postalCode": "530013",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 17.733,
    "longitude": 83.316
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/sunriseeggfarms"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable} scroll-smooth antialiased`}
    >
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow pt-20 pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
