import type { Metadata } from "next";
import RootDocument, { siteMetadata } from "@/components/RootDocument";

export const metadata: Metadata = {
  ...siteMetadata,
  openGraph: { ...siteMetadata.openGraph, locale: "es_ES" },
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
