import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Información en Español | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre condiciones de dolor y opciones de tratamiento para la columna, nervios, articulaciones y sistema musculoesquelético.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Información en Español | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre condiciones de dolor y opciones de tratamiento para la columna, nervios, articulaciones y sistema musculoesquelético.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Información en Español | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre condiciones de dolor y opciones de tratamiento para la columna, nervios, articulaciones y sistema musculoesquelético.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Información en Español | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre condiciones de dolor y opciones de tratamiento para la columna, nervios, articulaciones y sistema musculoesquelético.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: PAGE_URL },
    ],
  },
};

export default function EspanolPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Información en Español
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Información educativa
            <br />
            <em className="not-italic text-[#888]">sobre dolor y tratamiento.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Esta sección ofrece información general en español sobre condiciones de dolor y opciones
            de tratamiento relacionadas con la columna vertebral, los nervios, las articulaciones y el
            sistema musculoesquelético. La información es educativa y no reemplaza una evaluación
            clínica formal.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* CONDICIONES CARD */}
            <div className="border border-[#e5e5e0] p-10 flex flex-col gap-6 bg-[#fafaf8]">
              <div className="w-5 h-px bg-[#c8a020]" />
              <h2
                className="text-2xl font-bold text-[#0a0a0a]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Condiciones evaluadas
              </h2>
              <p className="text-[#666] text-base leading-relaxed flex-1">
                Información sobre condiciones como dolor de espalda baja, dolor de cuello, ciática,
                radiculopatía, dolor facetario, dolor de articulaciones y dolor neuropático.
              </p>
              <div>
                <Link
                  href="/es/condiciones"
                  className="inline-block text-[#c8a020] font-medium text-sm tracking-widest uppercase hover:underline transition-colors"
                >
                  Ver condiciones →
                </Link>
              </div>
            </div>

            {/* PROCEDIMIENTOS CARD */}
            <div className="border border-[#e5e5e0] p-10 flex flex-col gap-6 bg-[#fafaf8]">
              <div className="w-5 h-px bg-[#c8a020]" />
              <h2
                className="text-2xl font-bold text-[#0a0a0a]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Procedimientos y opciones de tratamiento
              </h2>
              <p className="text-[#666] text-base leading-relaxed flex-1">
                Información sobre opciones como inyecciones epidurales de esteroides, bloqueos de rama
                medial, ablación por radiofrecuencia, PRP y otros procedimientos de manejo del dolor.
              </p>
              <div>
                <Link
                  href="/es/procedimientos"
                  className="inline-block text-[#c8a020] font-medium text-sm tracking-widest uppercase hover:underline transition-colors"
                >
                  Ver procedimientos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Información importante</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <p>
              Esta página es solo para fines informativos generales. No constituye consejo médico ni
              crea una relación médico-paciente. La evaluación y el tratamiento adecuados dependen de
              una valoración clínica formal.
            </p>
            <p>
              El Dr. Dardashti ve pacientes en Mission Hills, California, sirviendo a pacientes de los
              valles de San Fernando y Santa Clarita y las comunidades circundantes del área de Los
              Ángeles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
