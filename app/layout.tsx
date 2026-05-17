import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

const SITE_URL = "https://www.painmanagementmedicalexpert.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Simon Dardashti MD | Pain Management Expert Witness | Los Angeles",
    template: "%s | Simon Dardashti MD — Expert Witness",
  },
  description:
    "Board-certified pain medicine physician and anesthesiologist available for expert witness testimony, IME, and medical record review. Retained in 60+ medicolegal matters. Balanced plaintiff and defense. UCLA fellowship-trained. Los Angeles, CA.",
  keywords: [
    "pain management expert witness Los Angeles",
    "pain medicine expert witness California",
    "independent medical examination pain specialist",
    "IME pain management Los Angeles",
    "medical record review pain medicine",
    "board certified pain expert witness",
    "anesthesiology expert witness",
    "spine expert witness California",
    "Simon Dardashti MD expert witness",
    "pain management AME California",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Simon Dardashti MD — Expert Witness",
    title: "Simon Dardashti MD | Pain Management Expert Witness | Los Angeles",
    description:
      "Dual board-certified pain medicine physician available for expert witness, IME, and medical record review. Retained in 60+ medicolegal matters. Plaintiff and defense. Los Angeles.",
  },
  alternates: { canonical: SITE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Simon Dardashti, MD, MS",
  jobTitle: "Pain Medicine Expert Witness & Physician",
  description:
    "Board-certified pain medicine physician and anesthesiologist available for expert witness testimony, independent medical examinations, and medical record review in medicolegal matters.",
  medicalSpecialty: ["Pain Medicine", "Anesthesiology"],
  url: SITE_URL,
  telephone: "+18187307579",
  address: {
    "@type": "PostalAddress",
    streetAddress: "14320 Ventura Blvd, Suite 827",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    postalCode: "91423",
    addressCountry: "US",
  },
  alumniOf: [
    { "@type": "EducationalOrganization", name: "UCLA" },
    { "@type": "EducationalOrganization", name: "UC Irvine" },
  ],
};

const legalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Simon Dardashti MD — Medical Expert Witness Services",
  description:
    "Expert witness testimony, independent medical examinations (IME/AME), and medical record review for attorneys handling pain management and spine-related cases in California.",
  provider: { "@type": "Physician", name: "Simon Dardashti, MD, MS" },
  areaServed: { "@type": "State", name: "California" },
  url: SITE_URL,
  telephone: "+18187307579",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
