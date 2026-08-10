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
      <section className="bg-[#0a0a0a] text-white md:min-h-[90vh] flex flex-col justify-center px-6 py-14 md:py-24 relative overflow-hidden border-b border-[#1a1a1a]">
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
            <p className="text-[#888] text-xl md:text-2xl leading-relaxed mb-4">
              Dolor de columna, nervios y articulaciones
            </p>
            <p className="text-[#666] text-base leading-relaxed mb-8">
              Esta sección ofrece información general en español sobre condiciones de dolor y opciones de tratamiento relacionadas con la columna vertebral, los nervios, las articulaciones y el sistema musculoesquelético.
            </p>
            <p className="text-[#666] text-base leading-relaxed mb-10">
              El objetivo es ayudar a los pacientes a entender términos comunes, posibles fuentes de dolor y opciones que pueden considerarse después de una evaluación clínica formal.
            </p>
            <Link
              href="/es/condiciones"
              className="inline-block border border-[#333] hover:border-[#c8a020] text-[#888] hover:text-[#c8a020] font-semibold px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Explorar condiciones y procedimientos
            </Link>

            <div className="mt-10 md:mt-16 pt-6 md:pt-10 border-t border-[#1a1a1a] grid grid-cols-1 sm:grid-cols-3 gap-6 justify-items-center">
              <div className="flex flex-col items-center text-center justify-start">
                <p className="text-lg md:text-xl font-semibold tracking-tight text-white mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Certificación</p>
                <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-neutral-500">Medicina del Dolor y Anestesiología</p>
              </div>
              <div className="flex flex-col items-center text-center justify-start">
                <p className="text-3xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>10+</p>
                <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-neutral-500">Años de Práctica Clínica</p>
              </div>
              <div className="flex flex-col items-center text-center justify-start">
                <p className="text-3xl font-bold text-[#8BB8E8] mb-1" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>UCLA</p>
                <p className="text-xs md:text-sm uppercase tracking-[0.18em] text-neutral-500">Especialidad en Medicina del Dolor</p>
              </div>
            </div>
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
                { label: "Ciática y dolor radicular", href: "/es/condiciones/radiculopatia-ciatica", fullWidth: false },
                { label: "Dolor facetario", href: "/es/condiciones/dolor-facetario", fullWidth: false },
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

      {/* COMPRENDIENDO EL DOLOR */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="text-xs text-[#999] uppercase tracking-widest mb-2">Temas clave</p>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Comprendiendo el dolor y sus tratamientos
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/es/dolor-sin-imagenes" className="group block">
              <div className="border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors h-full">
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h3 className="text-lg font-bold text-[#0a0a0a] group-hover:text-[#c8a020] transition-colors mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  ¿Resonancia Normal Pero Aún Tiene Dolor?
                </h3>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  Muchos pacientes experimentan dolor significativo a pesar de hallazgos normales en la resonancia magnética. Entienda por qué los hallazgos de imagen no siempre coinciden con los síntomas clínicos.
                </p>
                <p className="text-xs text-[#c8a020] font-semibold">Leer más →</p>
              </div>
            </Link>

            <Link href="/es/opciones-de-tratamiento" className="group block">
              <div className="border border-[#e5e5e0] p-6 hover:border-[#c8a020] transition-colors h-full">
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h3 className="text-lg font-bold text-[#0a0a0a] group-hover:text-[#c8a020] transition-colors mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
                  Cuidado Conservador vs Inyecciones vs Cirugía
                </h3>
                <p className="text-sm text-[#666] leading-relaxed mb-4">
                  Las decisiones de tratamiento deben basarse en el diagnóstico y los hallazgos clínicos. Entienda cuándo cada opción es apropiada para su condición.
                </p>
                <p className="text-xs text-[#c8a020] font-semibold">Leer más →</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* RECURSOS PARA PACIENTES */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Recursos</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-xl md:text-2xl font-bold text-[#0a0a0a] mb-3 leading-snug"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Recursos para pacientes.
            </h2>
            <p className="text-[#777] text-sm mb-6 max-w-xl">
              Recursos educativos para ayudarlo a comprender condiciones de dolor, opciones de tratamiento, cuidados conservadores y procedimientos.
            </p>
            <Link
              href="/es/educacion-para-pacientes"
              className="inline-block border border-[#333] hover:border-[#c8a020] text-[#888] hover:text-[#c8a020] font-semibold px-8 py-4 text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Ver educación para pacientes →
            </Link>
          </div>
        </div>
      </section>

      {/* PLANIFICACIÓN DEL TRATAMIENTO */}
      <section className="bg-[#0a0a0a] py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-3">
              Enfoque de tratamiento
            </p>
            <h2
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Planificación del
              <br />
              <em className="not-italic text-[#c8a020]">Tratamiento.</em>
            </h2>
          </div>
          <div className="space-y-4 text-[#888] text-sm leading-relaxed">
            <p>
              Las recomendaciones de tratamiento se basan en los antecedentes del paciente,
              el examen físico, los estudios de imagen cuando están disponibles, la respuesta
              previa al tratamiento, los antecedentes médicos y el contexto clínico general.
              Los procedimientos son guiados por imagen y se realizan después de una evaluación
              clínica apropiada.
            </p>
            <p>
              El enfoque del Dr. Dardashti hace hincapié en una evaluación diagnóstica cuidadosa,
              una comunicación clara y una toma de decisiones basada en la evidencia. Las opciones
              de tratamiento se adaptan a la presentación clínica y los objetivos funcionales de
              cada paciente.
            </p>
          </div>
        </div>
      </section>

      {/* UBICACIÓN CLÍNICA */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Ubicación</p>
          </div>
          <div className="md:col-span-10">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Ubicación clínica.
            </h2>
            <p className="text-[#555] text-base leading-relaxed mb-6 max-w-xl">
              El Dr. Dardashti ve pacientes en Mission Hills, California, sirviendo a pacientes de los valles de San Fernando y Santa Clarita y las comunidades circundantes del área de Los Ángeles.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="border border-[#e0e0e0] text-[#555] text-xs px-3 py-1.5 tracking-wide">Mission Hills, CA</span>
              <span className="border border-[#e0e0e0] text-[#555] text-xs px-3 py-1.5 tracking-wide">Valle de San Fernando</span>
              <span className="border border-[#e0e0e0] text-[#555] text-xs px-3 py-1.5 tracking-wide">Valle de Santa Clarita</span>
              <span className="border border-[#e0e0e0] text-[#555] text-xs px-3 py-1.5 tracking-wide">Los Ángeles, CA</span>
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
