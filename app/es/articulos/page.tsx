import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/articulos";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Artículos Educativos | Dr. Simon Dardashti" },
  description:
    "Colección de artículos educativos sobre manejo del dolor, cuidados conservadores, ejercicio y enfoques de tratamiento basados en evidencia.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Artículos Educativos | Dr. Simon Dardashti",
    description:
      "Colección de artículos educativos sobre manejo del dolor, cuidados conservadores, ejercicio y enfoques de tratamiento basados en evidencia.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Dr. Simon Dardashti" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artículos Educativos | Dr. Simon Dardashti",
    description:
      "Colección de artículos educativos sobre manejo del dolor, cuidados conservadores, ejercicio y enfoques de tratamiento basados en evidencia.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Artículos Educativos | Dr. Simon Dardashti",
  url: PAGE_URL,
  description:
    "Colección de artículos educativos sobre manejo del dolor, cuidados conservadores, ejercicio y enfoques de tratamiento basados en evidencia.",
  inLanguage: "es-ES",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Artículos", item: PAGE_URL },
    ],
  },
};

export default function ArticulosPage() {
  const articles = [
    {
      title: "Terapia Física Acuática para Artritis y Dolor Articular",
      description: "Cómo la terapia acuática reduce el estrés de soporte de peso en las articulaciones mientras proporciona resistencia para fortalecimiento y manejo del dolor.",
      readingTime: "5 min",
      category: "Cuidados Conservadores",
      href: "/articles/aquatic-therapy-arthritis",
    },
    {
      title: "Ejercicios McGill Big 3 para Dolor de Espalba Baja",
      description: "Ejercicios de estabilidad espinal basados en evidencia: técnica adecuada, errores comunes, quién se beneficia y contraindicaciones.",
      readingTime: "8 min",
      category: "Ejercicio",
      href: "/es/ejercicios-mcgill-big-3",
    },
    {
      title: "Rodillo de Espuma Torácica para Movilidad de Espalda Superior",
      description: "Mejorando la movilidad de la espalda superior para reducir el dolor de cuello y hombro. Técnica, beneficios, precauciones y cronograma.",
      readingTime: "7 min",
      category: "Cuidados Conservadores",
      href: "/es/rodillo-espuma-toracica",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Artículos y Recursos
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Artículos
            <br />
            <em className="not-italic text-[#888]">Educativos.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Artículos detallados sobre manejo del dolor, cuidados conservadores, ejercicio y enfoques de tratamiento basados en evidencia.
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
                    <span>{article.readingTime} de lectura</span>
                    <span className="text-[#c8a020] font-semibold">Leer →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CALL TO ACTION */}
          <div className="mt-12 pt-12 border-t border-[#e5e5e0] text-center">
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl mx-auto">
              Para una descripción general completa de recursos educativos disponibles, visite el Centro de Educación para Pacientes.
            </p>
            <Link
              href="/es/educacion-para-pacientes"
              className="inline-block border border-[#333] hover:border-[#c8a020] text-[#888] hover:text-[#c8a020] font-semibold px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Explorar Centro de Educación
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
