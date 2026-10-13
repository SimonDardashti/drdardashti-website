import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/articles";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Educational Articles | Simon Dardashti, MD" },
  description:
    "Collection of educational articles on pain management, conservative care, exercise, and evidence-based treatment approaches.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Educational Articles | Simon Dardashti, MD",
    description:
      "Collection of educational articles on pain management, conservative care, exercise, and evidence-based treatment approaches.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Educational Articles | Simon Dardashti, MD",
    description:
      "Collection of educational articles on pain management, conservative care, exercise, and evidence-based treatment approaches.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Educational Articles | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Collection of educational articles on pain management, conservative care, exercise, and evidence-based treatment approaches.",
  inLanguage: "en-US",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Articles", item: PAGE_URL },
    ],
  },
};

export default function ArticlesPage() {
  const articles = [
    {
      title: "Aquatic Physical Therapy for Arthritis and Joint Pain",
      description: "How water-based therapy reduces weight-bearing stress on joints while providing resistance for strengthening and pain management.",
      readingTime: "5 min read",
      category: "Conservative Care",
      href: "/aquatic-therapy-arthritis",
    },
    {
      title: "McGill Big 3 Exercises for Low Back Pain",
      description: "Evidence-based spinal stability exercises: proper technique, common mistakes, who benefits, and contraindications.",
      readingTime: "8 min read",
      category: "Exercise",
      href: "/mcgill-big-3-exercises",
    },
    {
      title: "Thoracic Foam Rolling for Upper Back Mobility",
      description: "Improving upper back mobility to reduce neck and shoulder pain. Technique, benefits, precautions, and timeline.",
      readingTime: "7 min read",
      category: "Conservative Care",
      href: "/thoracic-foam-rolling",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Articles & Resources
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Educational
            <br />
            <em className="not-italic text-[#888]">Articles.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            In-depth articles on pain management, conservative care, exercise, and evidence-based treatment approaches.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.href} href={article.href} className="group">
                <div className="border border-[#e5e5e0] h-full p-6 hover:border-[#c8a020] transition-colors flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block bg-[#f9f7f4] text-[#666] text-xs font-semibold px-3 py-1">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-3 group-hover:text-[#c8a020] transition-colors flex-grow">
                    {article.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed mb-4 flex-grow">
                    {article.description}
                  </p>
                  <div className="text-xs text-[#999] flex justify-between items-center">
                    <span>{article.readingTime}</span>
                    <span className="text-[#c8a020] font-semibold">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CALL TO ACTION */}
          <div className="mt-12 pt-12 border-t border-[#e5e5e0] text-center">
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl mx-auto">
              For a comprehensive overview of available educational resources, visit the Patient Education Hub.
            </p>
            <Link
              href="/patient-education"
              className="inline-block border border-[#333] hover:border-[#c8a020] text-[#888] hover:text-[#c8a020] font-semibold px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Explore Patient Education Hub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
