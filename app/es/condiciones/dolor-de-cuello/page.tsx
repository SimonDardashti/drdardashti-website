import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/dolor-de-cuello";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Dolor de Cuello | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre dolor de cuello, incluyendo evaluación clínica, síntomas y opciones de tratamiento.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Dolor de Cuello | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre dolor de cuello, incluyendo evaluación clínica, síntomas y opciones de tratamiento.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolor de Cuello | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre dolor de cuello, incluyendo evaluación clínica, síntomas y opciones de tratamiento.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Dolor de Cuello | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre dolor de cuello, incluyendo evaluación clínica, síntomas y opciones de tratamiento.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Dolor de Cuello" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Condiciones", item: `${SITE_URL}/es/condiciones` },
      { "@type": "ListItem", position: 4, name: "Dolor de Cuello", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Múltiples Posibles Fuentes",
    body: "El dolor de cuello puede originarse en discos cervicales, articulaciones facetarias, músculos, raíces nerviosas espinales u otras estructuras. Identificar la probable fuente es central en la evaluación.",
  },
  {
    heading: "Síntomas Neurológicos",
    body: "Cuando hay compromiso de nervios, los síntomas pueden incluir dolor que se irradia hacia el brazo, entumecimiento, hormigueo o debilidad además del dolor de cuello.",
  },
  {
    heading: "Evaluación Individualizada",
    body: "La evaluación incluye un historial detallado, examen físico y neurológico, y revisión de imágenes cuando están disponibles, interpretadas en el contexto de los síntomas del paciente.",
  },
];

export default function DolorDeCuelloPage() {
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
            <Link href="/es/condiciones" className="text-xs font-medium tracking-widest uppercase text-white">Condiciones</Link>
            <span className="w-px h-4 bg-[#333]" />
            <Link href="/es/procedimientos" className="text-xs font-medium tracking-widest uppercase text-[#888] hover:text-[#c8a020] transition-colors">Procedimientos</Link>
          </nav>
        </div>
      </section>

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">Condiciones Evaluadas</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
            Dolor de Cuello
            <br />
            <em className="not-italic text-[#888]">Evaluación.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            El dolor de cuello es una queja común que puede originarse en múltiples estructuras de la columna cervical. El Dr. Dardashti evalúa el dolor de cuello en el contexto de los síntomas del paciente, examen físico, imágenes cuando están disponibles, respuesta al tratamiento anterior y objetivos funcionales.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Qué es el dolor de cuello?</h2>
            <p>
              El dolor de cuello se refiere al dolor en la región de la columna cervical, que incluye las siete vértebras del cuello, los discos intervertebrales, articulaciones facetarias, raíces nerviosas espinales, músculos y ligamentos. El dolor en esta región es común y puede variar ampliamente en carácter, severidad y duración.
            </p>
            <p>
              El dolor de cuello puede estar localizado en la región del cuello y hombro, o puede acompañarse de síntomas que se irradian hacia el brazo cuando hay compromiso de raíces nerviosas. El dolor que surge de articulaciones facetarias cervicales puede irradiarse hacia la cabeza, hombro o espalda superior sin seguir un patrón específico de distribución nerviosa. Entender la probable fuente del dolor ayuda a guiar la evaluación y planificación del tratamiento apropiados.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — RAZONES PARA EVALUACIÓN */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluación</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Razones comunes para la evaluación.</h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Los pacientes comúnmente son referidos o presentados para evaluación debido a:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Dolor de cuello que no ha mejorado con el tratamiento inicial o conservador",
                "Dolor de cuello asociado con síntomas radiantes hacia el brazo, entumecimiento o debilidad",
                "Dolor de cuello después de una lesión, accidente o movimiento significativo",
                "Dolor de cuello que limita la función, movilidad o calidad de vida",
                "Dolor de cuello con hallazgos de imagen que no han sido correlacionados con un plan de tratamiento",
                "Dolor de cuello persistente después de procedimientos o tratamientos previos",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CÓMO EVALÚA */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Enfoque</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Cómo evalúa el Dr. Dardashti el dolor de cuello.</h2>
            <p>
              La evaluación comienza con un historial clínico detallado que incluye el carácter, ubicación, inicio y patrón del dolor, factores que lo agravan o lo alivian, tratamientos previos y sus respuestas, y el rango de movimiento del cuello y síntomas asociados.
            </p>
            <p>
              Un examen físico y neurológico ayuda a evaluar las estructuras probablemente contribuyentes e identificar cualquier síntoma o hallazgo neurológico que requiera atención urgente. Cuando hay imágenes disponibles, como resonancia magnética o radiografía cervical, los hallazgos se revisan en el contexto de la presentación clínica del paciente. Los hallazgos de imagen por sí solos no siempre determinan el tratamiento apropiado.
            </p>
            <p>
              El objetivo de la evaluación es identificar la probable fuente del dolor y desarrollar un plan de tratamiento adaptado a la presentación clínica individual del paciente, historial de tratamiento previo y objetivos funcionales.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — OPCIONES DE TRATAMIENTO */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Tratamiento</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Opciones de tratamiento que pueden considerarse.</h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              El tratamiento se individualiza según la evaluación clínica. Dependiendo de la probable fuente de dolor cervical, las opciones que pueden considerarse incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Coordinación de fisioterapia y cuidado conservador",
                "Manejo de medicamentos cuando sea clínicamente apropiado",
                "Inyecciones de esteroides epidurales cervicales para síntomas radiculares",
                "Bloqueos de raíces nerviosas cervicales para consideración diagnóstica o terapéutica",
                "Inyecciones de articulaciones facetarias cervicales o bloqueos de rama medial",
                "Ablación por radiofrecuencia para pacientes seleccionados que responden a bloqueos diagnósticos",
                "Evaluación de neuromodulación para candidatos apropiados con dolor crónico",
                "Planificación multimodal del manejo del dolor según el contexto clínico general",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              No todos los pacientes requieren un procedimiento intervencionista. Las recomendaciones de tratamiento se basan en la evaluación individual, hallazgos del examen y síntomas del paciente.
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
              La evaluación y tratamiento del dolor de cuello es complejo. No todos los casos de dolor de cuello tienen una causa claramente identificable, y la respuesta al tratamiento varía significativamente entre los pacientes.
            </p>
            <p>
              Ningún tratamiento puede garantizar que proporcione alivio del dolor. Se requiere una evaluación clínica formal para determinar el tratamiento apropiado para cualquier paciente individual. Esta página es solo para propósitos informativos generales y no constituye consejo médico ni crea una relación médico-paciente.
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
              <li><Link href="/es/condiciones/radiculopatia-cervical" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Radiculopatía Cervical →</Link></li>
              <li><Link href="/es/condiciones/radiculopatia-lumbar" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Radiculopatía Lumbar →</Link></li>
              <li><Link href="/es/condiciones/dolor-lumbar" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Dolor Lumbar →</Link></li>
              <li><Link href="/es/procedimientos/inyecciones-epidurales-de-esteroides" className="text-[#c8a020] hover:underline tracking-wide">Inyecciones Epidurales de Esteroides →</Link></li>
              <li><Link href="/es/procedimientos/bloqueos-de-rama-medial" className="text-[#c8a020] hover:underline tracking-wide">Bloqueos de Rama Medial y Facetarios →</Link></li>
              <li><Link href="/es/condiciones" className="text-[#c8a020] hover:underline tracking-wide">Ver todas las Condiciones Evaluadas →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
