import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/procedimientos/plasma-rico-en-plaquetas-prp";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Plasma Rico en Plaquetas (PRP) | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre plasma rico en plaquetas (PRP) como opción considerada en ciertos problemas musculoesqueléticos seleccionados.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Plasma Rico en Plaquetas (PRP) | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre plasma rico en plaquetas (PRP) como opción considerada en ciertos problemas musculoesqueléticos seleccionados.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plasma Rico en Plaquetas (PRP) | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre plasma rico en plaquetas (PRP) como opción considerada en ciertos problemas musculoesqueléticos seleccionados.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Plasma Rico en Plaquetas (PRP) | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre plasma rico en plaquetas (PRP) como opción considerada en ciertos problemas musculoesqueléticos seleccionados.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Plasma Rico en Plaquetas (PRP)",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Procedimientos", item: `${SITE_URL}/es/procedimientos` },
      { "@type": "ListItem", position: 4, name: "Plasma Rico en Plaquetas (PRP)", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Tratamiento autólogo",
    body: "El plasma rico en plaquetas utiliza una concentración de plaquetas de la propia sangre del paciente.",
  },
  {
    heading: "Para pacientes seleccionados",
    body: "Puede considerarse en pacientes seleccionados con ciertos problemas musculoesqueléticos después de evaluación clínica.",
  },
  {
    heading: "La respuesta varía",
    body: "La efectividad es variable y depende de muchos factores. No es una garantía de mejoría.",
  },
];

export default function PRPPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* SPANISH SECTION NAV */}
      <section className="bg-[#0a0a0a] py-4 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto flex items-center justify-center gap-6">
          <span className="text-[10px] text-[#666] uppercase tracking-widest">Sección en español</span>
          <nav className="flex items-center gap-6">
            <Link href="/es" className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors">Inicio</Link>
            <span className="w-px h-4 bg-[#333]" />
            <Link href="/es/condiciones" className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors">Condiciones</Link>
            <span className="w-px h-4 bg-[#333]" />
            <Link href="/es/procedimientos" className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors">Procedimientos</Link>
          </nav>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Procedimientos y Opciones de Tratamiento</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Plasma Rico en
            <br />
            <em className="not-italic text-[#888]">Plaquetas (PRP).</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            El plasma rico en plaquetas (PRP) es una opción terapéutica que puede considerarse en pacientes seleccionados con ciertos problemas musculoesqueléticos. Se requiere una evaluación clínica formal para determinar si el PRP es apropiado para cada paciente.
          </p>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">Resumen Rápido</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
            {inBrief.map((item, i) => (
              <div key={item.heading} className={`p-6 ${i < inBrief.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e5e5e0]" : ""}`}>
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2 className="font-bold text-[#0a0a0a] text-sm mb-3" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>{item.heading}</h2>
                <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1 — QUÉ ES */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Descripción</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Qué es el plasma rico en plaquetas?</h2>
            <p>
              El plasma rico en plaquetas (PRP) se prepara a partir de la sangre del paciente. Se extrae sangre y se procesa, típicamente mediante centrifugación, para concentrar las plaquetas en un volumen más pequeño de plasma. Esta solución de PRP concentrada contiene plaquetas y otros componentes de la sangre que incluyen varios factores de crecimiento y moléculas bioactivas.
            </p>
            <p>
              Cuando es clínicamente apropiado, el PRP se inyecta en un área específica donde hay dolor o lesión. Los efectos biológicos del PRP no se comprenden completamente y pueden variar dependiendo de la condición específica, cómo se prepara el PRP, y factores individuales del paciente.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CUÁNDO CONSIDERARSE */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Indicaciones</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Cuándo puede considerarse el PRP?</h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              El PRP puede considerarse en pacientes seleccionados con:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Dolor relacionado con tendones en ciertos casos",
                "Dolor articular seleccionado o cambios degenerativos",
                "Dolor por lesión de ligamentos o tejidos blandos",
                "Ciertos problemas musculoesqueléticos degenerativos o de uso excesivo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              El PRP no es apropiado para todas las condiciones de dolor musculoesquelético. La apropiedad depende del diagnóstico específico, los hallazgos del examen, los estudios de imagen cuando estén disponibles, la respuesta al tratamiento previo, el historial médico, y el contexto clínico general.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROCESO */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Procedimiento</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>El procedimiento de PRP</h2>
            <p>
              El procedimiento comienza con la extracción de sangre del paciente. La sangre se procesa en una centrífuga para concentrar las plaquetas en un volumen más pequeño. El PRP resultante se inyecta entonces en el área específica donde hay dolor o lesión, típicamente bajo guía de imagen para garantizar la colocación correcta.
            </p>
            <p>
              El procedimiento generalmente toma de 30 a 60 minutos total, incluyendo la extracción de sangre, el procesamiento y la inyección. El paciente es observado brevemente después y generalmente se va a casa el mismo día. El área inyectada puede sentirse sensible inicialmente, similar a la sensibilidad después de una inyección.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — RESPUESTA VARIABLE */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Respuesta</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Variabilidad en la respuesta</h2>
            <p>
              La respuesta al PRP varía significativamente entre pacientes y no puede predecirse de antemano. Algunos pacientes experimentan mejoría en el dolor, mientras que otros experimentan mínima o ninguna mejoría. El calendario de respuesta también varía — algunos pacientes sienten mejoría dentro de días o semanas, mientras que otros pueden tomar más tiempo o no experimentar beneficio significativo.
            </p>
            <p>
              Los factores que influyen en la respuesta pueden incluir la severidad y cronicidad de la condición, el área específica siendo tratada, cómo se prepara el PRP, edad del paciente y salud general, si se están usando otros tratamientos concurrentemente, y otros factores individuales. Debido a esta variabilidad, el PRP no es un tratamiento garantizado.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Información Importante</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Limitaciones Importantes.</h2>
            <p>
              El PRP no es apropiado para todos los pacientes o todas las condiciones de dolor musculoesquelético. La evidencia científica para el PRP varía significativamente por condición e indicación. Algunos problemas tienen más evidencia robusta, mientras que la evidencia para otros aún está evolucionando.
            </p>
            <p>
              Se requiere una evaluación clínica formal para determinar si el PRP es una opción apropiada para cada paciente individual. Esta página es solo para propósitos informativos generales y no constituye consejo médico ni crea una relación médico-paciente.
            </p>
            <p>
              El Dr. Dardashti ve pacientes en Mission Hills, California, sirviendo a pacientes de los valles de San Fernando y Santa Clarita y las comunidades circundantes del área de Los Ángeles.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-[#f9f7f4] py-14 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#999] uppercase tracking-widest">Relacionado</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-base font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Condiciones y Procedimientos Relacionados.</h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/es/condiciones" className="text-[#c8a020] hover:underline tracking-wide">Ver todas las condiciones evaluadas →</Link></li>
              <li><Link href="/es/procedimientos" className="text-[#c8a020] hover:underline tracking-wide">Ver todos los procedimientos →</Link></li>
              <li><Link href="/procedures/platelet-rich-plasma-prp" className="text-[#c8a020] hover:underline tracking-wide">Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
