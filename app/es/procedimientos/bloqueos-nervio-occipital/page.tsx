import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/procedimientos/bloqueos-nervio-occipital";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Bloqueos del Nervio Occipital | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre bloqueos del nervio occipital para neuralgias occipitales y dolor de cabeza relacionado.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Bloqueos del Nervio Occipital | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre bloqueos del nervio occipital para neuralgias occipitales y dolor de cabeza relacionado.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloqueos del Nervio Occipital | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre bloqueos del nervio occipital para neuralgias occipitales y dolor de cabeza relacionado.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Bloqueos del Nervio Occipital | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre bloqueos del nervio occipital para neuralgias occipitales y dolor de cabeza relacionado.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: {
    "@type": "MedicalProcedure",
    name: "Bloqueo del Nervio Occipital",
    procedureType: "https://schema.org/TherapeuticProcedure",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Procedimientos", item: `${SITE_URL}/es/procedimientos` },
      { "@type": "ListItem", position: 4, name: "Bloqueos del Nervio Occipital", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Bloqueo de nervio periférico",
    body: "Inyección de anestésico local alrededor del nervio occipital para adormecer el área y posiblemente aliviar el dolor occipital.",
  },
  {
    heading: "Para condiciones seleccionadas",
    body: "Puede considerarse en pacientes seleccionados con neuralgia occipital o dolor relacionado con este nervio cuando la evaluación lo respalda.",
  },
  {
    heading: "Respuesta variable",
    body: "La respuesta varía entre pacientes. No es apropiado para todos. La duración del alivio puede variar.",
  },
];

export default function BloqueoOccipitalPage() {
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
            Bloqueos del Nervio
            <br />
            <em className="not-italic text-[#888]">Occipital.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Los bloqueos del nervio occipital son procedimientos que administran medicamento alrededor del nervio occipital para evaluar y posiblemente aliviar el dolor occipital. Se requiere una evaluación clínica formal para determinar si el procedimiento es apropiado.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Qué es el nervio occipital?</h2>
            <p>
              El nervio occipital se origina en la parte superior de la columna cervical en la base del cráneo y proporciona sensación al cuero cabelludo posterior y la región occipital de la cabeza. Cuando este nervio se irrita o se comprende, puede causar neuralgia occipital, caracterizada por dolor en la parte posterior de la cabeza y el cuero cabelludo.
            </p>
            <p>
              Los bloqueos del nervio occipital son procedimientos que inyectan medicamento alrededor del nervio occipital para adormecer el área y potencialmente aliviar el dolor relacionado.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — SÍNTOMAS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Síntomas</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Síntomas que pueden asociarse con la neuralgia occipital.</h2>
            <p>
              Los síntomas de neuralgia occipital o irritación del nervio occipital pueden incluir:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Dolor en la parte posterior de la cabeza y el cuero cabelludo",
                "Dolor que puede irradiar desde la base del cráneo hacia la frente",
                "Sensibilidad o dolor al tacto en el cuero cabelludo posterior",
                "Dolor pulsante o punzante en la región occipital",
                "Dolor que puede ser unilateral o bilateral",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Una evaluación clínica exhaustiva es necesaria para confirmar que el nervio occipital es la fuente del dolor y para descartar otras condiciones.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CUÁNDO CONSIDERARSE */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Indicaciones</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Cuándo puede considerarse?</h2>
            <p>
              Los bloqueos del nervio occipital pueden considerarse en pacientes seleccionados con:
            </p>
            <ul className="space-y-3 max-w-2xl mb-6">
              {[
                "Neuralgia occipital confirmada o sospechada",
                "Dolor occipital que no ha mejorado con tratamiento conservador",
                "Dolor significativo que justifica evaluación de procedimiento",
                "Evaluación clínica que respalda la consideración de bloqueo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm max-w-2xl">
              Los bloqueos del nervio occipital no son apropiados para todos los pacientes con dolor occipital. Se requiere una evaluación clínica para determinar la idoneidad.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROCEDIMIENTO */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Procedimiento</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Qué implica el procedimiento.</h2>
            <p>
              El procedimiento se realiza con el paciente sentado o en posición supina. La piel en la base del cráneo se limpia. El sitio se adormece con anestésico local. Se inyecta medicamento alrededor del nervio occipital. El procedimiento típicamente toma un tiempo corto.
            </p>
            <p>
              Los pacientes se monitorean brevemente después del procedimiento y generalmente pueden irse a casa el mismo día. La mayoría de los pacientes pueden reanudar actividades normales poco después, aunque se puede aconsejar evitar actividades extenuantes durante un período corto.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 — RESPUESTA */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>05</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Respuesta</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Variabilidad en la respuesta.</h2>
            <p>
              La respuesta a los bloqueos del nervio occipital varía entre pacientes. Algunos experimentan alivio del dolor rápidamente, mientras que otros pueden tomar más tiempo. Algunos pueden no experimentar alivio significativo.
            </p>
            <p>
              La duración del alivio también varía. El alivio puede ser temporal — desde días hasta semanas — o más prolongado en algunos pacientes. En casos seleccionados, se pueden considerar bloqueos repetidos si hay una respuesta beneficiosa inicial.
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
              La respuesta a los bloqueos del nervio occipital es variable y no puede predecirse de antemano. El procedimiento no es apropiado para todos los pacientes. Se requiere una evaluación clínica formal para determinar la idoneidad.
            </p>
            <p>
              Este contenido es solo para propósitos informativos generales y no constituye consejo médico ni crea una relación médico-paciente.
            </p>
            <p>
              El Dr. Dardashti ve pacientes en Mission Hills, California, sirviendo a los valles de San Fernando y Santa Clarita y las comunidades circundantes del área de Los Ángeles.
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
              <li><Link href="/es/procedimientos" className="text-[#c8a020] hover:underline tracking-wide">Ver todos los procedimientos →</Link></li>
              <li><Link href="/procedures/occipital-nerve-blocks" className="text-[#c8a020] hover:underline tracking-wide">Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/procedimientos/bloqueos-nervio-occipital" locale="es" />
    </>
  );
}
