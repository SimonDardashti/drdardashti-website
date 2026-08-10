import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/procedimientos/ablacion-por-radiofrecuencia";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Ablación por Radiofrecuencia | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre ablación por radiofrecuencia para ciertos casos de dolor facetario después de una evaluación clínica adecuada.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Ablación por Radiofrecuencia | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre ablación por radiofrecuencia para ciertos casos de dolor facetario después de una evaluación clínica adecuada.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ablación por Radiofrecuencia | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre ablación por radiofrecuencia para ciertos casos de dolor facetario después de una evaluación clínica adecuada.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Ablación por Radiofrecuencia | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre ablación por radiofrecuencia para ciertos casos de dolor facetario después de una evaluación clínica adecuada.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Ablación por Radiofrecuencia",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Procedimientos", item: `${SITE_URL}/es/procedimientos` },
      { "@type": "ListItem", position: 4, name: "Ablación por Radiofrecuencia", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Procedimiento más duradero",
    body: "La ablación por radiofrecuencia utiliza calor para interrumpir las señales de dolor de manera más duradera que los bloqueos anestésicos temporales.",
  },
  {
    heading: "Para dolor facetario",
    body: "Se considera típicamente en pacientes que han respondido bien a bloqueos de rama medial diagnósticos previos.",
  },
  {
    heading: "Guiado por imagen",
    body: "El procedimiento se realiza bajo guía de fluoroscopia para garantizar la colocación correcta del electrodo.",
  },
];

export default function AblacionRadiofrecuenciaPage() {
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
            Ablación por
            <br />
            <em className="not-italic text-[#888]">Radiofrecuencia.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            La ablación por radiofrecuencia es un procedimiento guiado por imagen que puede considerarse en pacientes seleccionados con dolor relacionado con las articulaciones facetarias que han respondido a evaluaciones de bloqueo previas. Se requiere una evaluación clínica formal para determinar si este procedimiento es apropiado.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Qué es la ablación por radiofrecuencia?</h2>
            <p>
              La ablación por radiofrecuencia es un procedimiento que utiliza energía de radiofrecuencia para crear una lesión térmica en los nervios que suministran una articulación facetaria, interrumpiendo temporalmente las señales de dolor desde esa articulación. Es más duradero que un bloqueo anestésico simple, pero el alivio no es permanente.
            </p>
            <p>
              El procedimiento se realiza típicamente bajo guía de fluoroscopia. Se coloca un electrodo especial junto al nervio de rama medial, y se aplica energía de radiofrecuencia para calentar el nervio y crear una lesión térmica. Esto interrumpe la transmisión de señales de dolor desde la articulación facetaria.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CANDIDATOS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Candidatos</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Cuándo puede considerarse la ablación por radiofrecuencia?</h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              La ablación por radiofrecuencia se considera típicamente en pacientes con:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Respuesta positiva previa a bloqueos de rama medial diagnósticos",
                "Dolor de columna que se cree está relacionado con las articulaciones facetarias",
                "Alivio anterior con bloqueos anestésicos pero recurrencia del dolor",
                "Síntomas que justifiquen consideración de un procedimiento más duradero",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Una respuesta positiva a los bloqueos anestésicos previos es importante, ya que sugiere que el dolor proviene realmente de la rama medial y que la ablación puede ser efectiva.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DURACIÓN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Duración</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Duración del alivio</h2>
            <p>
              La duración del alivio después de la ablación por radiofrecuencia varía entre pacientes. Algunos pacientes experimentan alivio durante meses o más, mientras que otros pueden tener duraciones de alivio más cortas. Con el tiempo, el nervio puede regenerarse y el dolor puede retornar, en cuyo caso el procedimiento puede repetirse.
            </p>
            <p>
              La respuesta individual es muy variable y no puede predecirse completamente antes del procedimiento. La efectividad depende de si el dolor está realmente relacionado con la rama medial que se está ablacionando.
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
              La ablación por radiofrecuencia no es un tratamiento permanente. El alivio es temporal, aunque generalmente más duradero que los bloqueos anestésicos. Con el tiempo, los nervios se regeneran y el dolor puede retornar. No todos los pacientes responden, y la respuesta es variable.
            </p>
            <p>
              Como con cualquier procedimiento médico, la ablación por radiofrecuencia conlleva riesgos potenciales. Los riesgos y beneficios deben discutirse en detalle con el médico tratante antes de cualquier procedimiento. Esta página es solo para propósitos informativos generales y no constituye consejo médico ni crea una relación médico-paciente.
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
              <li><Link href="/procedures/radiofrequency-ablation" className="text-[#c8a020] hover:underline tracking-wide">Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/procedimientos/ablacion-por-radiofrecuencia" locale="es" />
    </>
  );
}
