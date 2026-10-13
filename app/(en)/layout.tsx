import RootDocument from "@/components/RootDocument";
export { siteMetadata as metadata } from "@/components/RootDocument";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
