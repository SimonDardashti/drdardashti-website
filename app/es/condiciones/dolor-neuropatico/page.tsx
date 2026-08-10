import type { Metadata } from "next";
import Link from "next/link";
import MedicalReviewFooter from "@/components/MedicalReviewFooter";

const PAGE_URL = "https://www.drdardashti.com/es/condiciones/dolor-neuropatico";
const SITE_URL = "https://www.drdardashti.com";

export const metadata: Metadata = {
  title: { absolute: "Evaluación de Dolor Neuropático | Simon Dardashti, MD" },
  description:
    "El Dr. Simon Dardashti evalúa el dolor neuropático — dolor crónico causado por lesión o disfunción nerviosa — incluyendo neuropatía periférica, dolor nervioso postoperatorio y dolor regional complejo. Mission Hills, CA.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: "website",
    url: PAGE_URL,
    title: "Evaluación de Dolor Neuropático | Simon Dardashti, MD",
    description:
      "El Dr. Simon Dardashti evalúa el dolor neuropático — dolor crónico causado por lesión o disfunción nerviosa — incluyendo neuropatía periférica, dolor nervioso postoperatorio y dolor regional complejo. Mission Hills, CA.",
    images: [{ url: "/headshot.webp", width: 1200, height: 630, alt: "Simon Dardashti, MD" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Evaluación de Dolor Neuropático | Simon Dardashti, MD",
    description:
      "El Dr. Simon Dardashti evalúa el dolor neuropático — dolor crónico causado por lesión o disfunción nerviosa — incluyendo neuropatía periférica, dolor nervioso postoperatorio y dolor regional complejo. Mission Hills, CA.",
    images: ["/headshot.webp"],
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Evaluación de Dolor Neuropático | Simon Dardashti, MD",
  url: PAGE_URL,
  description:
    "El Dr. Simon Dardashti evalúa el dolor neuropático — dolor crónico causado por lesión o disfunción nerviosa — incluyendo neuropatía periférica, dolor nervioso postoperatorio y dolor regional complejo. Mission Hills, CA.",
  inLanguage: "es-ES",
  isPartOf: { "@type": "WebSite", url: SITE_URL },
  about: { "@type": "MedicalCondition", name: "Dolor Neuropático" },
  author: { "@type": "Physician", name: "Simon Dardashti, MD", url: SITE_URL },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Condiciones y Servicios", item: `${SITE_URL}/es/servicios` },
      { "@type": "ListItem", position: 3, name: "Dolor Neuropático", item: PAGE_URL },
    ],
  },
};

const inBrief = [
  {
    heading: "Dolor del Sistema Nervioso",
    body: "El dolor neuropático surge de la lesión o disfunción del sistema nervioso periférico o central — en lugar de daño tisular únicamente. A menudo tiene un carácter distintivo y requiere estrategias de tratamiento diferentes.",
  },
  {
    heading: "Causas Múltiples Posibles",
    body: "La neuropatía periférica, compresión nerviosa, lesión nerviosa postoperatoria, herpes zóster, afectación nerviosa diabética y síndrome de dolor regional complejo son algunas de las condiciones que pueden producir dolor neuropático.",
  },
  {
    heading: "La Evaluación Orienta el Tratamiento",
    body: "Identificar el mecanismo subyacente y el diagnóstico probable ayuda a guiar la selección del tratamiento. El manejo puede incluir medicamentos, procedimientos dirigidos a nervios y neuromodulación en pacientes seleccionados.",
  },
];

export default function DulorNeuropaticoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      {/* HERO */}
      <section className="bg-[#0a0a0a] text-white py-20 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#c8a020] text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Condiciones Evaluadas
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Dolor Neuropático
            <br />
            <em className="not-italic text-[#888]">Evaluación.</em>
          </h1>
          <p className="mt-5 text-[#666] text-lg max-w-2xl leading-relaxed">
            El dolor neuropático se refiere al dolor que se origina en el daño o disfunción del
            sistema nervioso en sí — en lugar de la lesión tisular en curso. Puede ser uno de
            los tipos de dolor más desafiantes de evaluar y manejar. El Dr. Dardashti evalúa
            las condiciones de dolor neuropático a través de un historial clínico detallado,
            examen neurológico y revisión de evaluaciones previas.
          </p>
        </div>
      </section>

      {/* IN BRIEF */}
      <section className="bg-white py-16 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-[#999] uppercase tracking-widest mb-8">En Breve</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e5e5e0]">
            {inBrief.map((item, i) => (
              <div
                key={item.heading}
                className={`p-6 ${i < inBrief.length - 1 ? "border-b md:border-b-0 md:border-r border-[#e5e5e0]" : ""}`}
              >
                <div className="w-5 h-px bg-[#c8a020] mb-4" />
                <h2
                  className="font-bold text-[#0a0a0a] text-sm mb-3"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {item.heading}
                </h2>
                <p className="text-sm text-[#666] leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS NEUROPATHIC PAIN */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>01</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Descripción</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              ¿Qué es el Dolor Neuropático?
            </h2>
            <p>
              El dolor se clasifica ampliamente por su mecanismo. El dolor nociceptivo surge de
              la activación de receptores del dolor en respuesta al daño tisular o lesión potencial.
              El dolor neuropático, por el contrario, surge de una lesión o enfermedad que afecta
              el sistema nervioso somatosensorial — ya sea en los nervios periféricos o en el
              sistema nervioso central.
            </p>
            <p>
              Esta distinción es importante clínicamente porque el dolor neuropático a menudo responde
              diferente al tratamiento que el dolor nociceptivo. Los medicamentos que funcionan bien para
              el dolor inflamatorio o musculoesquelético pueden ser menos efectivos para mecanismos neuropáticos,
              y ciertos tratamientos — como la neuromodulación — están específicamente diseñados para
              dolor mediado por nervios.
            </p>
            <p>
              El dolor neuropático puede tener muchas causas. Las causas periféricas incluyen compresión
              nerviosa, neuropatía diabética, neuralgia postherpética (después del herpes zóster), lesión
              nerviosa postoperatoria y trauma en nervios periféricos. Las causas centrales pueden incluir
              condiciones que afectan la médula espinal o el cerebro. El síndrome de dolor regional complejo
              involucra características de sensibilización periférica y central.
            </p>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>02</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Síntomas</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Características Comunes del Dolor Neuropático.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              El dolor neuropático a menudo tiene una calidad distintiva que difiere del dolor musculoesquelético típico.
              Las características que pueden sugerir un componente neuropático incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Dolor ardiente, punzante o similar a descargas eléctricas",
                "Alodinia — dolor producido por un estímulo que normalmente no causaría dolor, como el toque ligero",
                "Hiperalgesia — una respuesta de dolor exagerada a un estímulo que normalmente produciría solo dolor leve",
                "Entumecimiento, hormigueo o sensación de pinchazos en el área afectada",
                "Dolor presente en reposo o por la noche, a veces sin un desencadenante mecánico obvio",
                "Dolor que persiste más allá del tiempo de curación esperado después de una lesión o cirugía",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              Estas características no son específicas de ningún diagnóstico único y requieren evaluación
              clínica para interpretar en el contexto del historial y examen de cada paciente.
            </p>
          </div>
        </div>
      </section>

      {/* EVALUATION APPROACH */}
      <section className="bg-[#f9f7f4] py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#e8e6e3] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>03</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Enfoque</p>
          </div>
          <div className="md:col-span-10 space-y-4 text-[#555] text-base leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Cómo el Dr. Dardashti Evalúa el Dolor Neuropático.
            </h2>
            <p>
              La evaluación comienza con un historial exhaustivo del inicio del dolor, carácter, ubicación
              y cualquier evento precipitante identificable — como cirugía, lesión, infección o una condición
              sistémica conocida. Las evaluaciones diagnósticas previas, incluyendo estudios de conducción nerviosa,
              resultados de laboratorio e imágenes, se revisan cuando están disponibles.
            </p>
            <p>
              El examen neurológico se enfoca en caracterizar hallazgos sensoriales — incluyendo pruebas de alodinia,
              hiperalgesia y pérdida sensorial — así como hallazgos motores y de reflejos que pueden ayudar a localizar
              el nivel o distribución de la afectación nerviosa.
            </p>
            <p>
              Identificar el mecanismo subyacente y el diagnóstico de la forma más específica posible
              ayuda a guiar el tratamiento. Por ejemplo, el atrapamiento del nervio periférico puede responder
              a bloqueos nerviosos dirigidos, mientras que condiciones neuropáticas más difusas o centrales pueden
              requerir un enfoque multimodal más amplio.
            </p>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="bg-white py-20 px-6 border-b border-[#e5e5e0]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <span className="text-7xl font-bold text-[#f0f0f0] leading-none block" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }} aria-hidden>04</span>
            <p className="text-xs text-[#999] uppercase tracking-widest mt-2">Tratamiento</p>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Opciones de Tratamiento que se Pueden Considerar.
            </h2>
            <p className="text-[#666] text-base leading-relaxed mb-6 max-w-2xl">
              El tratamiento se individualiza según el mecanismo probable, historial de tratamientos previos
              y objetivos funcionales. Las opciones que se pueden considerar incluyen:
            </p>
            <ul className="space-y-3 max-w-2xl">
              {[
                "Medicamentos con evidencia para dolor neuropático, como ciertos anticonvulsivos, antidepresivos o agentes tópicos cuando sea apropiado",
                "Bloqueos nerviosos dirigidos para condiciones de nervios periféricos cuando es anatómicamente factible",
                "Evaluación de estimulación de la médula espinal para pacientes seleccionados con dolor neuropático refractario",
                "Atención coordinada con neurología u otros especialistas dependiendo de la condición subyacente",
                "Planificación del manejo del dolor multimodal incorporando rehabilitación funcional",
                "Reevaluación y ajuste del plan de tratamiento según la respuesta",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-[#c8a020] mt-2.5 shrink-0" />
                  <span className="text-[#555] text-base">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#777] text-sm mt-6 max-w-2xl">
              El dolor neuropático puede ser desafiante de tratar, y no hay un solo enfoque que funcione para
              cada paciente. El objetivo de la evaluación es desarrollar un plan de tratamiento que sea
              personalizado a la condición subyacente y presentación clínica del individuo.
            </p>
          </div>
        </div>
      </section>

      {/* LIMITATIONS */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-b border-[#1a1a1a]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2">
            <p className="text-xs text-[#666] uppercase tracking-widest">Limitaciones</p>
          </div>
          <div className="md:col-span-10 space-y-3 text-[#888] text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Limitaciones Importantes.
            </h2>
            <p>
              El dolor neuropático es heterogéneo y puede no resolverse completamente con ningún tratamiento disponible.
              La respuesta es variable e incompleta frecuentemente. El objetivo del manejo es típicamente reducir el dolor
              a un nivel manejable y mejorar la función, en lugar de la eliminación completa de síntomas.
            </p>
            <p>
              Se requiere una evaluación clínica formal para determinar un plan de tratamiento apropiado para cualquier
              paciente individual. Esta página es solo con propósitos informativos generales y no constituye consejo médico
              ni crea una relación médico-paciente.
            </p>
            <p>
              El Dr. Dardashti ve pacientes en Mission Hills, California, sirviendo a pacientes del Valle de San Fernando,
              Valle de Santa Clarita y comunidades circundantes de Los Ángeles.
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
            <h2 className="text-base font-bold text-[#0a0a0a] mb-5" style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}>
              Condiciones y Procedimientos Relacionados.
            </h2>
            <ul className="space-y-3 text-sm">
              <li><Link href="/conditions/crps-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Síndrome de Dolor Regional Complejo — Página en inglés →</Link></li>
              <li><Link href="/procedures/spinal-cord-stimulation-evaluation" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Estimulación de la Médula Espinal — Página en inglés →</Link></li>
              <li><Link href="/es/condiciones/radiculopatia-ciatica" className="text-[#c8a020] hover:underline tracking-wide">Evaluación de Ciatalgia y Dolor Radicular →</Link></li>
              <li><Link href="/services" className="text-[#c8a020] hover:underline tracking-wide">Ver todas las Condiciones y Servicios — Página en inglés →</Link></li>
            </ul>
          </div>
        </div>
      </section>

      {/* REVISIÓN MÉDICA */}
      <MedicalReviewFooter path="/es/condiciones/dolor-neuropatico" locale="es" />
    </>
  );
}
