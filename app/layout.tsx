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
    default: "Simon Dardashti, MD | Pain Medicine Physician | Mission Hills, CA",
    template: "%s | Simon Dardashti, MD",
  },
  description:
    "Dr. Simon Dardashti is a board-certified pain medicine physician and anesthesiologist in Mission Hills, CA. Evidence-informed evaluation and treatment for spine pain, nerve pain, joint pain, and complex chronic pain.",
  keywords: [
    "pain management doctor Mission Hills",
    "pain medicine physician Los Angeles",
    "spine pain specialist California",
    "epidural steroid injection",
    "radiofrequency ablation",
    "spinal cord stimulation",
    "nerve pain treatment",
    "board certified pain management",
    "Simon Dardashti MD",
    "Facey Medical pain management",
    "Providence pain management",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Simon Dardashti, MD",
    title: "Simon Dardashti, MD | Pain Medicine Physician | Mission Hills, CA",
    description:
      "Board-certified pain medicine physician and anesthesiologist. Spine, nerve, joint, and complex chronic pain. Affiliated with Providence/Facey Medical Network, Mission Hills, CA.",
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
  memberOf: {
    "@type": "MedicalOrganization",
    name: "Providence/Facey Medical Network",
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
