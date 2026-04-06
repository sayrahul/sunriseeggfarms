import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
  keywords: ["Egg Farms", "Premium Eggs", "Hygienic Eggs", "Egg Exports India", "Sustainable Poultry", "Visakhapatnam Egg Farm"],
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
        url: "/images/og-image.png", // We should create this or use a high-quality farm shot
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
