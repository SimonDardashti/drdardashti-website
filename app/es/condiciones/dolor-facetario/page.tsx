import type { Metadata } from "next";
import Link from "next/link";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/dolor-facetario";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Dolor Facetario | Simon Dardashti, MD" },
  description:
    "Información educativa en español sobre dolor facetario y artritis facetaria, incluyendo dolor relacionado con las articulaciones facetarias de la columna.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Dolor Facetario | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre dolor facetario y artritis facetaria, incluyendo dolor relacionado con las articulaciones facetarias de la columna.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dolor Facetario | Simon Dardashti, MD",
    description:
      "Información educativa en español sobre dolor facetario y artritis facetaria, incluyendo dolor relacionado con las articulaciones facetarias de la columna.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Dolor Facetario | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "Información educativa en español sobre dolor facetario y artritis facetaria, incluyendo dolor relacionado con las articulaciones facetarias de la columna.",
  inLanguage: "es",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Dolor Facetario" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Español", item: `${SITE_URL}/es` },
      { "@type": "ListItem", position: 3, name: "Condiciones", item: `${SITE_URL}/es/condiciones` },
      { "@type": "ListItem", position: 4, name: "Dolor Facetario", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Articulaciones facetarias",
    body: "Las articulaciones facetarias son articulaciones pareadas en cada nivel de la columna que pueden convertirse en una fuente significativa de dolor de cuello, espalda media o espalda baja cuando se degradan o se inflaman.",
  },
  {
    heading: "Hallazgos no siempre claros",
    body: "El dolor facetario no siempre se muestra claramente en las imágenes. El historial clínico, el examen y la respuesta a bloqueos nerviosos diagnósticos son partes importantes de la evaluación.",
  },
  {
    heading: "Opciones diagnósticas dirigidas",
    body: "Los bloqueos de rama medial pueden ayudar a evaluar si las articulaciones facetarias están contribuyendo al dolor. Para casos confirmados, la ablación por radiofrecuencia puede considerarse en pacientes seleccionados.",
  },
];

export default function DolorFacetarioPage() {
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
            Dolor
            <br />
            <em className="not-italic text-[#888]">Facetario.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            Las articulaciones facetarias son pequeñas articulaciones presentes en cada nivel de la columna. Cuando se convierten en una fuente primaria de dolor, la condición se denomina dolor facetario o dolor de las articulaciones facetarias. El Dr. Dardashti evalúa esta condición en la columna cervical, torácica y lumbar.
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
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>¿Qué es el dolor facetario?</h2>
            <p>
              Las articulaciones facetarias, también llamadas articulaciones cigapofisarias, son articulaciones sinoviales pareadas ubicadas en cada nivel vertebral de la columna. Proporcionan estabilidad y guían el movimiento entre vértebras adyacentes. Como cualquier articulación en el cuerpo, las articulaciones facetarias pueden volverse artríticas, inflamadas o dolorosas con el tiempo.
            </p>
            <p>
              El dolor facetario se refiere al dolor generado principalmente por una o más articulaciones facetarias. Es una causa reconocida de dolor de cuello, espalda media y espalda baja. El dolor típicamente se describe como una molestia profunda y pulsante que puede irradiarse a áreas adyacentes. Por ejemplo, el dolor facetario cervical puede irradiarse al hombro o la cabeza, mientras que el dolor facetario lumbar puede irradiarse a la nalga o muslo superior.
            </p>
            <p>
              A diferencia del dolor radicular, el dolor facetario no típicamente sigue un patrón específico de raíz nerviosa y generalmente no causa síntomas neurológicos como entumecimiento o debilidad. Sin embargo, las dos condiciones pueden coexistir en el mismo paciente.
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
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Síntomas comunes asociados con dolor facetario.</h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              Los síntomas que pueden sugerir una contribución de la articulación facetaria incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Dolor de cuello, espalda media o espalda baja que empeora con extensión o rotación",
                "Dolor que típicamente es peor por la mañana o después de estar sentado prolongadamente",
                "Dolor referido al hombro, nalga o muslo superior sin un patrón específico de raíz nerviosa",
                "Sensibilidad al palpar cerca de las articulaciones facetarias",
                "Dolor que mejora con el descanso o la flexión hacia adelante",
                "Ausencia de síntomas neurológicos como debilidad o entumecimiento en brazo o pierna",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Estas características no son diagnósticas por sí solas. Se requiere una evaluación clínica precisa para determinar si las articulaciones facetarias son la probable fuente del dolor.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — EVALUACIÓN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Evaluación</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>Cómo evalúa el Dr. Dardashti el dolor facetario.</h2>
            <p>
              La evaluación comienza con un historial detallado de la ubicación del dolor, características, inicio y factores que lo agravan o alivian. El examen físico evalúa la sensibilidad paraespinal, rango de movimiento y patrón del dolor.
            </p>
            <p>
              Las imágenes médicas, como resonancia magnética o tomografía computarizada, pueden mostrar cambios degenerativos en las articulaciones facetarias, pero estos hallazgos por sí solos no confirman que las facetas sean la fuente del dolor. La correlación entre las imágenes y los síntomas clínicos es imperfecta, por lo que los bloqueos nerviosos diagnósticos pueden jugar un papel importante en el proceso de evaluación.
            </p>
            <p>
              Los bloqueos de rama medial (inyecciones guiadas por imagen que adormecer temporalmente los nervios que inervan las articulaciones facetarias) pueden proporcionar información diagnóstica útil. Una respuesta positiva a un bloqueo de rama medial sugiere que las articulaciones facetarias son una probable contribuyente y puede apoyar la consideración de ablación por radiofrecuencia en pacientes apropiados.
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
              El tratamiento se basa en la evaluación clínica y el historial de tratamiento previo del paciente. Las opciones que pueden considerarse incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Fisioterapia y enfoques basados en actividad para reducir la carga en las articulaciones facetarias",
                "Manejo de medicamentos cuando sea clínicamente apropiado",
                "Inyecciones de articulaciones facetarias con fines diagnósticos y potencialmente terapéuticos",
                "Bloqueos de rama medial como un paso diagnóstico para evaluar la contribución facetaria",
                "Ablación por radiofrecuencia para pacientes seleccionados con dolor facetario confirmado que responden a bloqueos diagnósticos",
                "Reevaluación y monitoreo continuo de la respuesta al tratamiento",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              No todos los pacientes con sospecha de dolor facetario requieren una inyección o procedimiento de ablación. Las recomendaciones son individualizadas basadas en la evaluación clínica y objetivos del paciente.
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
              El dolor facetario no puede diagnosticarse basándose únicamente en las imágenes, y ninguna característica clínica única confirma de manera confiable el diagnóstico. La respuesta al tratamiento varía entre pacientes. La ablación por radiofrecuencia no proporciona alivio permanente en todos los pacientes, y los efectos pueden disminuir con el tiempo.
            </p>
            <p>
              Se requiere una evaluación clínica formal para determinar si el tratamiento enfocado en facetas es apropiado para cualquier paciente individual. Esta página es solo para fines informativos generales y no constituye consejo médico.
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
              <li><Link href="/es/procedimientos/bloqueos-de-rama-medial" className="text-[#c8a020] hover:underline tracking-wide">Bloqueos de rama medial →</Link></li>
              <li><Link href="/es/procedimientos/ablacion-por-radiofrecuencia" className="text-[#c8a020] hover:underline tracking-wide">Ablación por radiofrecuencia →</Link></li>
              <li><Link href="/es/procedimientos" className="text-[#c8a020] hover:underline tracking-wide">Ver todos los procedimientos →</Link></li>
              <li><Link href="/conditions/facet-mediated-pain" className="text-[#c8a020] hover:underline tracking-wide">Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
