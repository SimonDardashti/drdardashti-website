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
    default: "Simon Dardashti, MD | Interventional Pain Medicine Physician",
    template: "%s | Simon Dardashti, MD",
  },
  description:
    "Dr. Simon Dardashti is a board-certified interventional pain medicine physician and anesthesiologist evaluating spine pain, nerve pain, joint pain, and complex pain conditions in Mission Hills, California.",
  keywords: [
    "Simon Dardashti MD",
    "Dr. Simon Dardashti",
    "interventional pain management",
    "pain medicine physician Mission Hills",
    "anesthesiology",
    "spine pain San Fernando Valley",
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
    title: "Simon Dardashti, MD | Interventional Pain Medicine Physician",
    description:
      "Board-certified interventional pain medicine physician and anesthesiologist evaluating spine pain, nerve pain, joint pain, and complex pain conditions in Mission Hills, California.",
    images: [
      {
        url: "/headshot.webp",
        width: 1200,
        height: 630,
        alt: "Simon Dardashti, MD, board-certified pain medicine physician and anesthesiologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simon Dardashti, MD | Interventional Pain Medicine Physician",
    description:
      "Board-certified interventional pain medicine physician and anesthesiologist evaluating spine pain, nerve pain, joint pain, and complex pain conditions in Mission Hills, California.",
    images: ["/headshot.webp"],
  },
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Simon Dardashti, MD",
  url: SITE_URL,
};

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": ["Person", "Physician"],
  name: "Simon Dardashti, MD",
  url: SITE_URL,
  image: `${SITE_URL}/headshot.webp`,
  description:
    "Board-certified pain medicine physician and anesthesiologist evaluating and treating spine, nerve, joint, and complex chronic pain conditions.",
  medicalSpecialty: ["Pain Medicine", "Anesthesiology", "Interventional Pain Management"],
  areaServed: [
    { "@type": "Place", name: "Mission Hills, California" },
    { "@type": "Place", name: "San Fernando Valley" },
    { "@type": "Place", name: "Los Angeles, California" },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of California, Los Angeles (UCLA)",
  },
  knowsAbout: [
    "Spine pain",
    "Nerve pain",
    "Joint pain",
    "Radicular pain",
    "Sciatica",
    "Sacroiliac joint pain",
    "Neuropathic pain",
    "Complex regional pain syndrome evaluation",
    "Epidural steroid injections",
    "Medial branch blocks",
    "Radiofrequency ablation",
    "Spinal cord stimulation evaluation",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
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
