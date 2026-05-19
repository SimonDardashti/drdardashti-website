import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Simon Dardashti, MD | Interventional Pain Management Physician",
    template: "%s | Simon Dardashti, MD",
  },
  description:
    "Dr. Simon Dardashti is a board-certified interventional pain medicine physician and anesthesiologist evaluating spine pain, nerve pain, joint pain, post-surgical pain, and chronic pain conditions.",
  keywords: [
    "Simon Dardashti MD",
    "Dr. Simon Dardashti",
    "interventional pain management",
    "pain medicine physician",
    "anesthesiology",
    "spine pain Mission Hills",
    "nerve pain Los Angeles",
    "joint pain physician",
    "spinal cord stimulation evaluation",
    "board certified pain medicine",
    "Mission Hills California",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Simon Dardashti, MD",
    title: "Simon Dardashti, MD | Interventional Pain Management Physician",
    description:
      "Board-certified interventional pain medicine physician and anesthesiologist. Evaluating spine pain, nerve pain, joint pain, post-surgical pain, and complex chronic pain conditions in Mission Hills, CA.",
  },
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Simon Dardashti, MD",
  description:
    "Board-certified pain medicine physician and anesthesiologist specializing in spine, nerve, joint, and complex chronic pain conditions.",
  medicalSpecialty: ["Pain Medicine", "Anesthesiology"],
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mission Hills",
    addressRegion: "CA",
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
