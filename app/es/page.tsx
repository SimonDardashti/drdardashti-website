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
      <section className="bg-[#0a0a0a] text-white md:min-h-[70vh] flex flex-col justify-center px-6 py-14 md:py-24 relative overflow-hidden border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Text */}
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-6">
              Información en Español
            </p>
            <h1
              className="text-3xl md:text-4xl font-bold leading-[1.2] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Información educativa
              <br />
              <em className="not-italic text-[#c8a020]">sobre dolor y tratamiento.</em>
            </h1>
            <p className="text-[#888] text-lg leading-relaxed mb-4">
              Dolor de columna, nervios y articulaciones
            </p>
            <p className="text-[#666] text-base leading-relaxed mb-8">
              Esta sección ofrece información general en español sobre condiciones de dolor y opciones de tratamiento relacionadas con la columna vertebral, los nervios, las articulaciones y el sistema musculoesquelético.
            </p>
            <p className="text-[#666] text-base leading-relaxed mb-10">
              El objetivo es ayudar a los pacientes a entender términos comunes, posibles fuentes de dolor y opciones que pueden considerarse después de una evaluación clínica formal.
            </p>
          </div>

          {/* Photo */}
          <div className="flex justify-center md:block mt-4 md:mt-0">
            <img
              src="/headshot.webp"
              alt="Simon Dardashti, MD"
              className="w-[85%] md:w-[88%] object-cover rounded-md md:rounded-none"
              style={{ filter: "grayscale(20%)" }}
            />
          </div>
        </div>
      </section>

      {/* MAIN CARDS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#e0e0d8]">
            {/* CONDICIONES CARD */}
            <div className="bg-[#f9f7f4] p-8 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-[#e0e0d8]">
              <div className="w-5 h-px bg-[#c8a020]" />
              <h2
                className="text-xl md:text-2xl font-bold text-[#0a0a0a]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Condiciones evaluadas
              </h2>
              <p className="text-[#666] text-base leading-relaxed flex-1">
                Información sobre dolor de espalda baja, dolor de cuello, ciática, radiculopatía, dolor facetario, dolor de articulaciones, dolor neuropático y otras condiciones musculoesqueléticas.
              </p>
              <div>
                <Link
                  href="/es/condiciones"
                  className="inline-block text-[#c8a020] text-sm font-semibold uppercase tracking-widest hover:underline transition-colors"
                >
                  Ver condiciones →
                </Link>
              </div>
            </div>

            {/* PROCEDIMIENTOS CARD */}
            <div className="bg-white p-8 flex flex-col gap-6">
              <div className="w-5 h-px bg-[#c8a020]" />
              <h2
                className="text-xl md:text-2xl font-bold text-[#0a0a0a]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Procedimientos y opciones de tratamiento
              </h2>
              <p className="text-[#666] text-base leading-relaxed flex-1">
                Información sobre opciones como inyecciones epidurales de esteroides, bloqueos de rama medial, ablación por radiofrecuencia, plasma rico en plaquetas (PRP), inyecciones articulares y otros procedimientos.
              </p>
              <div>
                <Link
                  href="/es/procedimientos"
                  className="inline-block text-[#c8a020] text-sm font-semibold uppercase tracking-widest hover:underline transition-colors"
                >
                  Ver procedimientos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEMAS FRECUENTES */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Temas frecuentes</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-xl md:text-2xl font-bold text-[#0a0a0a] mb-3 leading-snug"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Temas frecuentes.
            </h2>
            <p className="text-[#777] text-sm mb-8 max-w-xl">
              Acceda a información sobre los temas más consultados en la sección en español.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[#e5e5e0] max-w-2xl">
              {[
                { label: "Ciática y dolor radicular", href: "/es/condiciones", fullWidth: false },
                { label: "Dolor facetario", href: "/es/condiciones", fullWidth: false },
                { label: "Inyecciones epidurales de esteroides", href: "/es/procedimientos/inyecciones-epidurales-de-esteroides", fullWidth: false },
                { label: "Ablación por radiofrecuencia", href: "/es/procedimientos/ablacion-por-radiofrecuencia", fullWidth: false },
                { label: "Bloqueos de rama medial", href: "/es/procedimientos/bloqueos-de-rama-medial", fullWidth: false },
                { label: "Plasma rico en plaquetas (PRP)", href: "/es/procedimientos/plasma-rico-en-plaquetas-prp", fullWidth: false },
              ].map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center justify-between p-5 hover:bg-[#fafaf8] transition-colors ${
                    !item.fullWidth && i % 2 === 0 ? "border-r border-[#e5e5e0]" : ""
                  } ${i < 4 && !item.fullWidth ? "border-b border-[#e5e5e0]" : item.fullWidth ? "border-t border-[#e5e5e0] md:col-span-2" : ""}`}
                >
                  <p className="text-sm font-semibold text-[#0a0a0a] group-hover:text-[#c8a020] transition-colors" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                    {item.label}
                  </p>
                  <span className="text-[#ccc] group-hover:text-[#c8a020] transition-colors text-sm">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Información importante</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <p>
              Esta página es solo para fines informativos generales. No constituye consejo médico ni crea una relación médico-paciente. La evaluación y el tratamiento adecuados dependen de una valoración clínica formal.
            </p>
            <p>
              El Dr. Dardashti ve pacientes en Mission Hills, California, sirviendo a pacientes de los valles de San Fernando y Santa Clarita y las comunidades circundantes del área de Los Ángeles.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
